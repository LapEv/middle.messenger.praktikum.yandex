import { Store } from 'core/store';
import { Router } from 'core/Router';
import { AuthorizationService } from 'services';
import { APIResponseHasError } from 'utils/api';
import { initAppData } from './initAppData';

export async function initApp() {
  // console.log(`INIT APP STATRTING`);

  const store = new Store();
  const router = new Router();
  window.router = router;
  window.store = store;
  router.init();
  store.init();

  const userResponse = await AuthorizationService.getUser();

  if (!APIResponseHasError(userResponse)) {
    await initAppData(userResponse.id);
  }

  let initPath = window.location.pathname;
  const { search } = window.location;

  const pathQueryMatch = [...search.matchAll(/path=(\w+)/g)];
  const pathQuery = pathQueryMatch.length === 1 ? pathQueryMatch[0][1] : null;

  if (pathQuery) {
    initPath = `/${pathQuery}`;
  }

  const { route, path } = router.matchRouteByPath(initPath);

  router.start(route, path);
}
