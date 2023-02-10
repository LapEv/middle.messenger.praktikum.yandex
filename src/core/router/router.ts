import Route, { RouterCore } from "./routerCore";
import { AppRoutes, AppRoutesData, MapPathToRoute } from "./routerData";

export class Routers {
  static __instance: Nullable<Router>;

  private routes: Record<
    string,
    (routeParams?: Record<string, unknown>) => void
  > = {};

  private isStarted = false;

  history = window.history;

  _currentRoute: Nullable<Route> = null;

  use(hash: string, callback: () => void) {
    this.routes[hash] = callback;
    return this;
  }

  start() {
    if (!this.isStarted) {
      window.onpopstate = (event: PopStateEvent) => {
        this._onRoute((event.currentTarget as Window).location.pathname);
      };

      this._onRoute(window.location.pathname);
      this.isStarted = true;
    }
  }

  private _onRoute(pathname: string) {
    const found = Object.entries(this.routes).some(([routePath, callback]) => {
      const hasIdParameter = routePath.includes(":id");
      if (hasIdParameter) {
        const routeWithoutIdParameter = routePath.replace(":id", "");
        const possibleIdParameter = parseInt(
          pathname.replace(routeWithoutIdParameter, ""),
          10
        );
        if (possibleIdParameter > 0) {
          callback({ idParam: Number(possibleIdParameter) });
          return true;
        }
      }

      if (routePath === pathname) {
        callback();
        return true;
      }
      return false;
    });

    if (!found && this.routes["*"]) {
      this.routes["*"]();
    }
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }
}

export class Router implements RouterCore<AppRoutes> {
  private routes: Record<AppRoutes, Function> = {} as any;

  private routesData: Record<AppRoutes, TAppRouteData>;

  private isStarted = false;

  init() {
    this.routesData = AppRoutesData;

    const { store } = window;
    Object.entries(this.routesData).forEach(
      ([routeName, routeData]: [AppRoutes, TAppRouteData]) => {
        this.use(routeName, () => {
          if (store.isUserAuthorized() || !routeData.needAuthorization) {
            store.dispatch({ page: routeData.block });
          } else {
            store.dispatch({
              page: this.routesData[AppRoutes.NotAuthorized].block,
            });
          }
        });
      }
    );
  }

  start(startRoute: AppRoutes, startPathname: string) {
    if (this.isStarted) {
      return;
    }

    // console.log(`Router starts on window path '${window.location.pathname}'`);
    // console.log(`Start route is '${startRoute}' on path '${startPathname}'`);
    if (startRoute !== AppRoutes.NotFound) {
      window.history.replaceState({}, "", startPathname);
      // console.log(`Router Start: replace state to '${startPathname}'`);
    }
    this.onRouteChange(startRoute);

    window.onpopstate = function () {
      const currentPath = this.getCurrentPath();
      // console.log(`ONPOPSTATE: ${currentPath}`);
      const { route } = this.matchRouteByPath(currentPath);
      this.onRouteChange.call(this, route);
    }.bind(this);

    this.isStarted = true;
  }

  private onRouteChange(route: AppRoutes) {
    const renderFunction =
      this.routes[route] ?? this.routes[AppRoutes.NotFound];
    renderFunction();
  }

  use(route: AppRoutes, renderFunction: Function) {
    this.routes[route] = renderFunction;
    return this;
  }

  go(route: AppRoutes) {
    // console.log(`Go to route '${route}'`);
    const { path } = this.routesData[route];
    window.history.pushState({}, "", path);
    // console.log(`Go: state pushed to ${path}'`);
    this.onRouteChange(route);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  matchRouteByPath(pathname: string): {
    route: AppRoutes;
    path: string;
  } {
    if (pathname === "/") {
      let route;
      if (window.store.isUserAuthorized()) {
        route = AppRoutes.Chat;
      } else {
        route = AppRoutes.Login;
      }
      const path = this.routesData[route].path as string;
      return { route, path };
    }

    let route = MapPathToRoute[pathname];
    if (route) {
      // console.log(`pathname "${pathname}" matches "${route}" route`);
    } else {
      // console.log(`no routes matching pathname "${pathname}"`);
      route = AppRoutes.NotFound;
    }
    return { route, path: pathname };
  }

  getPathByRoute(route: AppRoutes) {
    return this.routesData[route].path;
  }

  getCurrentPath() {
    return window.location.pathname;
  }

  getRoute() {
    return this.routes;
  }
}
