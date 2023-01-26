export interface RouterCore<AppRoutes> {
  init(...args: unknown[]): void;

  start(...args: unknown[]): void;

  use(route: AppRoutes, renderFunction: Function): RouterCore<AppRoutes>;

  go(route: AppRoutes): void;

  back(): void;

  forward(): void;

  matchRouteByPath(pathname: string): {
    route: AppRoutes;
    path: string;
  };
}
