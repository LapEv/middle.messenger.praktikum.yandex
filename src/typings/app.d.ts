declare global {
  interface Window {
    store: Store;
    router: PathRouter;
  }
}

export {};
