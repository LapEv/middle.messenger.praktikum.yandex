import { RouterCore } from './routerCore';
import { AppRoutesData, AppRoutes, MapPathToRoute } from './routerData';

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
              page: this.routesData[AppRoutes.Error].block,
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
    if (startRoute !== AppRoutes.Error) {
      window.history.replaceState({}, '', startPathname);
      // console.log(`Router Start: replace state to '${startPathname}'`);
    }
    this.onRouteChange(startRoute);

    window.onpopstate = function () {
      const currentPath = this.getCurrentPath();
      console.log(`ONPOPSTATE: ${currentPath}`);
      const { route } = this.matchRouteByPath(currentPath);
      this.onRouteChange.call(this, route);
    }.bind(this);

    this.isStarted = true;
  }

  private onRouteChange(route: AppRoutes) {
    const renderFunction = this.routes[route] ?? this.routes[AppRoutes.Error];
    renderFunction();
  }

  use(route: AppRoutes, renderFunction: Function) {
    this.routes[route] = renderFunction;
    return this;
  }

  go(route: AppRoutes) {
    console.log(`Go to route '${route}'`);
    const { path } = this.routesData[route];
    window.history.pushState({}, '', path);
    console.log(`Go: state pushed to ${path}'`);
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
    if (pathname === '/') {
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
      console.log(`pathname "${pathname}" matches "${route}" route`);
    } else {
      console.log(`no routes matching pathname "${pathname}"`);
      route = AppRoutes.Error;
    }
    return { route, path: pathname };
  }

  getPathByRoute(route: AppRoutes) {
    return this.routesData[route].path;
  }

  getCurrentPath() {
    return window.location.pathname;
  }
}
