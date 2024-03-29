// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _initApp = require("services/initApp");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _initApp.initApp)();
});

},{"services/initApp":"4yLHz"}],"4yLHz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initApp", ()=>(0, _initApp.initApp));
parcelHelpers.export(exports, "initAppData", ()=>(0, _initAppData.initAppData));
var _initApp = require("./initApp");
var _initAppData = require("./initAppData");

},{"./initApp":"9Fl3S","./initAppData":"8xDdB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Fl3S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initApp", ()=>initApp);
var _store = require("core/store");
var _router = require("core/Router");
var _services = require("services");
var _api = require("utils/api");
var _initAppData = require("./initAppData");
async function initApp() {
    // console.log(`INIT APP STATRTING`);
    const store = new (0, _store.Store)();
    const router = new (0, _router.Router)();
    window.router = router;
    window.store = store;
    router.init();
    store.init();
    const userResponse = await (0, _services.AuthorizationService).getUser();
    if (!(0, _api.APIResponseHasError)(userResponse)) await (0, _initAppData.initAppData)(userResponse.id);
    let initPath = window.location.pathname;
    const { search  } = window.location;
    const pathQueryMatch = [
        ...search.matchAll(/path=(\w+)/g)
    ];
    const pathQuery = pathQueryMatch.length === 1 ? pathQueryMatch[0][1] : null;
    if (pathQuery) initPath = `/${pathQuery}`;
    const { route , path  } = router.matchRouteByPath(initPath);
    router.start(route, path);
}

},{"core/store":"8EiUk","core/Router":"52boY","services":"f5PO7","utils/api":"i2lTI","./initAppData":"8xDdB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8EiUk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumStoreEvents", ()=>(0, _enumStoreEvents.EnumStoreEvents));
parcelHelpers.export(exports, "defaultState", ()=>(0, _store.defaultState));
parcelHelpers.export(exports, "Store", ()=>(0, _store.Store));
var _enumStoreEvents = require("./enum-store-events");
var _store = require("./store");

},{"./enum-store-events":"ioWNT","./store":"js7fx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioWNT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumStoreEvents", ()=>EnumStoreEvents);
let EnumStoreEvents;
(function(EnumStoreEvents) {
    EnumStoreEvents["PageChanged"] = "page changed";
})(EnumStoreEvents || (EnumStoreEvents = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"js7fx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
parcelHelpers.export(exports, "Store", ()=>Store);
var _pages = require("utils/pages");
var _dom = require("core/Dom");
var _objectsHandle = require("utils/objects-handle");
var _enumStoreEvents = require("./enum-store-events");
var _eventBus = require("../event-bus");
var _mainStatesProxies = require("./state-proxies/main-states-proxies");
var _byPathProxies = require("./state-proxies/by-path-proxies");
const defaultState = {
    page: null,
    user: null,
    chats: null,
    chatsUsers: null,
    chatsSockets: null,
    chatsMessages: null,
    currentChatID: null
};
class Store {
    eventBus = new (0, _eventBus.EventBus)();
    constructor(state = defaultState){
        this.state = this._makeStateProxy(state);
    }
    chatHasMessages(chatID) {
        const messages = this.state.chatsMessages;
        return !(0, _objectsHandle.isNullish)(messages) && Object.hasOwn(messages, chatID);
    }
    dispatch(nextStateOrAction) {
        if (typeof nextStateOrAction === "function") nextStateOrAction();
        else this._setState(nextStateOrAction);
    }
    getStateValueByPath(pathString = "", doLog = false) {
        return (0, _objectsHandle.getPropByPath)(this.state, pathString, doLog);
    }
    getUserDataByPath(pathString = "", doLog = false) {
        const path = `user${pathString ? "." : ""}${pathString}`;
        return this.getStateValueByPath(path, doLog);
    }
    getUserID() {
        return this.getStateValueByPath("user.id");
    }
    getChatsDataByPath(pathString = "", doLog = false) {
        const path = `chats${pathString ? "." : ""}${pathString}`;
        return this.getStateValueByPath(path, doLog);
    }
    getCurrentChatID() {
        return this.getStateValueByPath("currentChatID");
    }
    getPageType() {
        const { page  } = this.state;
        if (!page) return page;
        return page.constructor.name;
    }
    getSocketByChatID(chatID, doLog = false) {
        if (chatID === undefined) return this.getStateValueByPath(`chatsSockets`, doLog);
        return this.getStateValueByPath(`chatsSockets.${chatID}`, doLog);
    }
    init() {
        this.eventBus.on((0, _enumStoreEvents.EnumStoreEvents).PageChanged, (function(newPage) {
            const PageComponent = (0, _pages.getPageComponent)(newPage);
            // console.log('newPage = ', newPage);
            const page = new PageComponent();
            // console.log('PageComponent = ', PageComponent);
            this.page = page;
            (0, _dom.renderDOM)({
                component: page
            });
            document.title = `App / ${page.componentName}`;
        // console.log(`Store event '${EnumStoreEvents.PageChanged}' emitted`);
        }).bind(this));
    }
    isPageSet() {
        return Boolean(this.state.page);
    }
    isUserAuthorized() {
        return Boolean(this.state.user);
    }
    _makeStateProxy(state) {
        return new Proxy(state, {
            set: (function(target, prop, newValue) {
                const oldValue = target[prop];
                if ((0, _objectsHandle.deepEqual)(oldValue, newValue)) return true;
                target[prop] = newValue;
                // console.log(
                //   `STORE ${prop}: ${JSON.stringify(oldValue)} -> ${JSON.stringify(
                //     newValue
                //   )}`
                // );
                switch(prop){
                    case "page":
                        _mainStatesProxies.pageSetter.call(this, newValue);
                        break;
                    case "user":
                        _mainStatesProxies.userSetter.call(this, oldValue, newValue);
                        break;
                    case "chats":
                        _mainStatesProxies.chatsSetter.call(this, oldValue, newValue);
                        break;
                    case "currentChatID":
                        _mainStatesProxies.currentChatSetter.call(this, oldValue, newValue);
                        break;
                    default:
                }
                return true;
            }).bind(this)
        });
    }
    setSocketByChatID(chatID, socket) {
        return this.setStateByPath(`chatsSockets.${chatID}`, socket, true);
    }
    _setState(nextState) {
        Object.assign(this.state, nextState);
    }
    setStateByPath(pathString, newValue, doLog = false) {
        const isValueChanged = !(0, _objectsHandle.comparePropByPath)(this.state, pathString, newValue, doLog);
        if (!isValueChanged) return;
        (0, _objectsHandle.setPropByPath)(this.state, pathString, newValue, doLog);
        let match = [
            ...pathString.matchAll((0, _byPathProxies.statePathRegex).ChatAvatarChange)
        ];
        if (match.length === 1) {
            const chatID = match[0][1];
            (0, _byPathProxies.stateByPathSetter).ChatAvatar.call(this, chatID, newValue);
            return;
        }
        match = [
            ...pathString.matchAll((0, _byPathProxies.statePathRegex).ChatNewMessage)
        ];
        if (match.length === 1) {
            const chatID1 = match[0][1];
            (0, _byPathProxies.stateByPathSetter).ChatNewMessage.call(this, chatID1);
        }
    }
    userHasAnyChats() {
        const { chats  } = this.state;
        if ((0, _objectsHandle.isNullish)(chats)) return false;
        return Object.keys(chats).length > 0;
    }
}

},{"utils/pages":"5q3PA","core/Dom":"i0KHM","utils/objects-handle":"kOfSo","./enum-store-events":"ioWNT","../event-bus":"eVSQQ","./state-proxies/main-states-proxies":"4fFtk","./state-proxies/by-path-proxies":"3V4YB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5q3PA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPageComponent", ()=>(0, _getPageComponent.getPageComponent));
parcelHelpers.export(exports, "getDescendantByPath", ()=>(0, _getDescendantByPath.getDescendantByPath));
var _getPageComponent = require("./getPageComponent");
var _getDescendantByPath = require("./getDescendantByPath");

},{"./getPageComponent":"fHj1l","./getDescendantByPath":"8AvjI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHj1l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPageComponent", ()=>getPageComponent);
var _appPages = require("pages/appPages");
var _pages = require("pages");
const map = {
    [(0, _appPages.AppPages).Registration]: _pages.RegistrationPage,
    [(0, _appPages.AppPages).Login]: _pages.LoginPage,
    [(0, _appPages.AppPages).Chat]: _pages.ChatPage,
    [(0, _appPages.AppPages).Profile]: _pages.ProfilePage,
    [(0, _appPages.AppPages).ChangePassword]: _pages.ProfilePage,
    [(0, _appPages.AppPages).NotFound]: _pages.NotFoundErrorPage,
    [(0, _appPages.AppPages).Forbidden]: _pages.AuthorizationRequiredErrorPage
};
const getPageComponent = (page)=>{
    return map[page];
};

},{"pages/appPages":"c7aIo","pages":"kIGWd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7aIo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppPages", ()=>AppPages);
let AppPages;
(function(AppPages) {
    AppPages["Login"] = "login_page";
    AppPages["Registration"] = "registration_page";
    AppPages["Chat"] = "chat_page";
    AppPages["Profile"] = "profile_page";
    AppPages["ChangePassword"] = "сhangePassword_page";
    AppPages["NotFound"] = "not_found_page";
    AppPages["Forbidden"] = "access_denied_error_page";
})(AppPages || (AppPages = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIGWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppPages", ()=>(0, _appPages.AppPages));
parcelHelpers.export(exports, "LoginPage", ()=>(0, _login.LoginPage));
parcelHelpers.export(exports, "RegistrationPage", ()=>(0, _registration.RegistrationPage));
parcelHelpers.export(exports, "ChatPage", ()=>(0, _chat.ChatPage));
parcelHelpers.export(exports, "ProfilePage", ()=>(0, _profile.ProfilePage));
parcelHelpers.export(exports, "NotFoundErrorPage", ()=>(0, _pages.NotFoundErrorPage));
parcelHelpers.export(exports, "AuthorizationRequiredErrorPage", ()=>(0, _pages.AuthorizationRequiredErrorPage));
parcelHelpers.export(exports, "TErrorPage", ()=>(0, _pages.TErrorPage));
parcelHelpers.export(exports, "TErrorPageClass", ()=>(0, _pages.TErrorPageClass));
var _appPages = require("./appPages");
var _login = require("pages/login/login");
var _registration = require("pages/registration/registration");
var _chat = require("pages/chat/chat");
var _profile = require("pages/profile/profile");
var _pages = require("./errors/pages");

},{"./appPages":"c7aIo","pages/login/login":"dCEbf","pages/registration/registration":"ipn4T","pages/chat/chat":"9muaU","pages/profile/profile":"atqZr","./errors/pages":"a1Xr3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCEbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginPage", ()=>LoginPage);
var _dom = require("core/Dom");
var _loginData = require("./loginData");
var _loginDataDefault = parcelHelpers.interopDefault(_loginData);
var _loginTemplate = require("./loginTemplate");
var _loginTemplateDefault = parcelHelpers.interopDefault(_loginTemplate);
var _formComponents = require("./formComponents");
class LoginPage extends (0, _dom.Block) {
    constructor(){
        const children = {};
        const refs = {};
        children.loginForm = new (0, _formComponents.LoginPageForm)();
        super({
            children,
            componentName: (0, _loginDataDefault.default).page,
            refs
        });
    }
    render() {
        return 0, _loginTemplateDefault.default;
    }
}

},{"core/Dom":"i0KHM","./loginData":"4Pgai","./loginTemplate":"1P9m9","./formComponents":"1lBVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0KHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockCommonEvents", ()=>(0, _blockBase.BlockCommonEvents));
parcelHelpers.export(exports, "TBlockCommonEventsHandlersArgs", ()=>(0, _blockBase.TBlockCommonEventsHandlersArgs));
parcelHelpers.export(exports, "Block", ()=>(0, _block.Block));
parcelHelpers.export(exports, "BlockClass", ()=>(0, _block.BlockClass));
parcelHelpers.export(exports, "renderDOM", ()=>(0, _renderDOM.renderDOM));
var _blockBase = require("./block-base");
var _block = require("./block");
var _renderDOM = require("./renderDOM");

},{"./block-base":"kYKew","./block":"cBV69","./renderDOM":"6nAB4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kYKew":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockCommonEvents", ()=>BlockCommonEvents);
var _nanoid = require("nanoid");
var _objectsHandle = require("utils/objects-handle");
var _eventBus = require("core/event-bus");
var _components = require("utils/components");
var _pages = require("utils/pages");
let BlockCommonEvents;
(function(BlockCommonEvents) {
    BlockCommonEvents["INIT"] = "init";
    BlockCommonEvents["FLOW_CDU"] = "flow:component-did-update";
    BlockCommonEvents["FLOW_RENDER"] = "flow:render";
})(BlockCommonEvents || (BlockCommonEvents = {}));
class BlockBase {
    static EVENTS = {
        INIT: "init",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    _element = null;
    _unwrappedElement = null;
    eventBus = new (0, _eventBus.EventBus)();
    id = `${this.constructor.name}-${(0, _nanoid.nanoid)(7)}`;
    _componentDidUpdate(oldPropsOrState, newPropsOrState, forceUpdate = false) {
        if (forceUpdate || this.componentDidUpdate(oldPropsOrState, newPropsOrState)) this.eventBus.emit("flow:render");
    }
    componentDidUpdate(oldPropsOrState, newPropsOrState) {
        const result = !(0, _objectsHandle.deepEqual)(oldPropsOrState, newPropsOrState);
        return result;
    }
    _addEventListenersToElement() {
        const targetElement = this._unwrappedElement;
        const events = this.props.events;
        Object.entries(events).forEach(([event, listeners])=>{
            listeners.forEach((listener)=>{
                targetElement.addEventListener(event, listener);
            });
        });
    }
    _bindEventListenersToBlock() {
        const events = this.props.events;
        Object.keys(events).forEach((event)=>{
            const listeners = events[event];
            events[event] = listeners.map((listener)=>listener.bind(this));
        });
    }
    dispatchEventListener(event, listener) {
        const events = this.props.events;
        events[event] ??= [];
        events[event].push(listener);
        this._unwrappedElement.addEventListener(event, listener);
    }
    getElement() {
        return this._element;
    }
    getChildByPath(pathString = "") {
        return (0, _pages.getDescendantByPath)(this.children, pathString);
    }
    getStateByPath(pathString = "") {
        return (0, _objectsHandle.getPropByPath)(this.state, pathString);
    }
    hide() {
        const element = this.getElement();
        if (!element) return;
        element.style.display = "none";
    }
    show() {
        const element = this.getElement();
        element.style.display = "block";
    }
    _removeEventsFromElement() {
        const targetElement = this._unwrappedElement;
        const events = this.props.events;
        Object.entries(events).forEach(([event, listeners])=>{
            listeners.forEach((listener)=>{
                targetElement.removeEventListener(event, listener);
            });
        });
    }
    render() {
        return "<div></div>";
    }
    setPropByPath(propPath, newValue, forceUpdate = false, doLog = false) {
        const didUpdate = forceUpdate || !(0, _objectsHandle.comparePropByPath)(this.props, propPath, newValue, doLog);
        if (didUpdate) {
            (0, _objectsHandle.setPropByPath)(this.props, propPath, newValue, doLog);
            this._componentDidUpdate("", "", true);
        }
    }
    setChildByPath(childPath, newValue, forceUpdate = false, doLog = false) {
        const didUpdate = forceUpdate || !(0, _objectsHandle.comparePropByPath)(this.children, childPath, newValue, doLog);
        if (didUpdate) {
            (0, _objectsHandle.setPropByPath)(this.children, childPath, newValue, doLog);
            this._componentDidUpdate("", "", true);
        }
    }
    toggleHtmlClass(className, state) {
        const classList = (0, _components.toggleHtmlClassToList)(this.props.htmlClasses, className, state);
        this.props.htmlClasses = classList;
    }
}
exports.default = BlockBase;

},{"nanoid":"2ifus","utils/objects-handle":"kOfSo","core/event-bus":"eVSQQ","utils/components":"34IuU","utils/pages":"5q3PA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOfSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>(0, _isObject.isObject));
parcelHelpers.export(exports, "isNullish", ()=>(0, _isObject.isNullish));
parcelHelpers.export(exports, "objectWithoutKey", ()=>(0, _objectWithoutKey.objectWithoutKey));
parcelHelpers.export(exports, "deepEqual", ()=>(0, _objectsCompare.deepEqual));
parcelHelpers.export(exports, "deepMerge", ()=>(0, _objectsMerge.deepMerge));
parcelHelpers.export(exports, "setPropByPath", ()=>(0, _propByPath.setPropByPath));
parcelHelpers.export(exports, "comparePropByPath", ()=>(0, _propByPath.comparePropByPath));
parcelHelpers.export(exports, "getPropByPath", ()=>(0, _propByPath.getPropByPath));
parcelHelpers.export(exports, "dateToString", ()=>(0, _dateToString.dateToString));
var _isObject = require("./is-object");
var _objectWithoutKey = require("./object-without-key");
var _objectsCompare = require("./objects-compare");
var _objectsMerge = require("./objects-merge");
var _propByPath = require("./prop-by-path");
var _dateToString = require("./dateToString");

},{"./is-object":"azcyt","./object-without-key":"9CDza","./objects-compare":"hLCsT","./objects-merge":"5G3Tt","./prop-by-path":"iANYm","./dateToString":"ktGNe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azcyt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isNullish", ()=>isNullish);
function isObject(object) {
    return object != null && object.constructor.name === "Object";
}
function isNullish(object) {
    return object === null || object === undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CDza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "objectWithoutKey", ()=>objectWithoutKey);
function objectWithoutKey(object, key) {
    // eslint-disable-next-line no-unused-vars
    const { [key]: deletedValue , ...otherKeys } = object;
    return otherKeys;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLCsT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual);
var _isObject = require("./is-object");
function deepEqual(object1, object2) {
    if (!(0, _isObject.isObject)(object1) || !(0, _isObject.isObject)(object2)) return object1 === object2;
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = (0, _isObject.isObject)(val1) && (0, _isObject.isObject)(val2);
        if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) return false;
    }
    return true;
}

},{"./is-object":"azcyt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5G3Tt":[function(require,module,exports) {
/* eslint-disable */ // @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deepMerge", ()=>deepMerge);
function deepMerge(lhs, rhs) {
    for(const p in rhs){
        if (!rhs.hasOwnProperty(p)) continue;
        try {
            if (rhs[p].constructor === Object) rhs[p] = deepMerge(lhs[p], rhs[p]);
            else lhs[p] = rhs[p];
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }
    return lhs;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iANYm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPropByPath", ()=>setPropByPath);
parcelHelpers.export(exports, "comparePropByPath", ()=>comparePropByPath);
parcelHelpers.export(exports, "getPropByPath", ()=>getPropByPath);
var _objectsMerge = require("./objects-merge");
var _objectsCompare = require("./objects-compare");
var _isObject = require("./is-object");
function setPropByPath(object, pathString, value, doLog = false) {
    if (!(0, _isObject.isObject)(object)) return object;
    if (typeof pathString !== "string") throw new Error("path must be string");
    const path = pathString.split(".");
    if (path.length === 1 && path[0] === "") return value;
    const result = path.reduceRight((acc, key)=>({
            [key]: acc
        }), value);
    doLog;
    return (0, _objectsMerge.deepMerge)(object, result);
}
function comparePropByPath(object, pathString, valueToCompare, doLog = false) {
    if (!(0, _isObject.isObject)(object)) throw new Error(`Incorrect target ${object} of type ${typeof object} to compare prop by path`);
    if (!(typeof pathString === "string" && pathString.length)) throw new Error("path must be not empty string");
    const path = pathString.split(".");
    let pathExisting = path;
    let value = object;
    for(let i = 0; i < path.length; i++){
        if (!(0, _isObject.isObject)(value) || !Object.hasOwn(value, path[i])) {
            pathExisting = path.slice(0, i);
            break;
        }
        value = value[path[i]];
    }
    doLog;
    return pathExisting.length < path.length ? false : (0, _objectsCompare.deepEqual)(value, valueToCompare);
}
function getPropByPath(object, pathString, doLog = false) {
    if (!(0, _isObject.isObject)(object)) throw new Error(`Incorrect target ${object} of type ${typeof object} to get prop by path`);
    if (!(typeof pathString === "string" && pathString.length)) throw new Error("path must be not empty string");
    const path = pathString.split(".");
    let pathExisting = path;
    let value = object;
    for(let i = 0; i < path.length; i++){
        if (!(0, _isObject.isObject)(value) || !Object.hasOwn(value, path[i])) {
            pathExisting = path.slice(0, i);
            break;
        }
        value = value[path[i]];
    }
    doLog;
    const result = setPropByPath({}, "", value);
    return result;
}

},{"./objects-merge":"5G3Tt","./objects-compare":"hLCsT","./is-object":"azcyt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktGNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateToString", ()=>dateToString);
function dateToString(timestamp) {
    const date = !timestamp ? new Date() : new Date(timestamp);
    const timeRegex = /^.*T(\d{2}):(\d{2}):(\d{2}).*$/;
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T.*$/;
    const dateData = dateRegex.exec(new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON());
    const timeData = timeRegex.exec(new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON());
    const myFormat = `${dateData[3]}.${dateData[2]}.${dateData[1]} ${timeData[1]}:${timeData[2]}`;
    return myFormat;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVSQQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventBus", ()=>EventBus);
class EventBus {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34IuU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleHtmlClassToList", ()=>(0, _htmlClassToggle.toggleHtmlClassToList));
var _htmlClassToggle = require("./html-class-toggle");

},{"./html-class-toggle":"7dvWk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dvWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleHtmlClassToList", ()=>toggleHtmlClassToList);
var _objectsHandle = require("utils/objects-handle");
function toggleHtmlClassToList(classesList, className, state) {
    if ((0, _objectsHandle.isNullish)(state)) {
        if (classesList.includes(className)) classesList = classesList.filter((item)=>item !== className);
        else classesList = [
            ...classesList,
            className
        ];
        return classesList;
    }
    const classesSet = new Set(classesList);
    if (state === "on" && !classesSet.has(className)) classesList = [
        ...classesList,
        className
    ];
    else if (state === "off" && classesSet.has(className)) classesList = classesList.filter((item)=>item !== className);
    return classesList;
}

},{"utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBV69":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
var _nanoid = require("nanoid");
var _objectsHandle = require("utils/objects-handle");
var _blockBase = require("./block-base");
var _blockBaseDefault = parcelHelpers.interopDefault(_blockBase);
class Block extends (0, _blockBaseDefault.default) {
    wasRendered = false;
    constructor({ componentName , props ={} , children ={} , refs ={} , state ={} , helpers ={}  } = {}){
        super();
        this.helpers = helpers;
        this._beforePropsAssignHook();
        this.componentName = componentName ?? `Not Named Block of type ${this.constructor.name}`;
        this.props = (0, _objectsHandle.deepMerge)(this.props ?? {}, props);
        this.props.events = this.props.events ?? {};
        this.props.htmlAttributes ??= {};
        this.props.htmlClasses ??= [];
        this.props.htmlStyle ??= {};
        this.children = children;
        this.refs = refs;
        this.state = state;
        this._afterPropsAssignHook();
        this.htmlWrapped = !!this.props.htmlWrapper;
        if (this.htmlWrapped) this.wrappedId = (0, _nanoid.nanoid)(5);
        this._beforePropsProxyHook();
        this.props = this._makeProxy(this.props);
        this.state = this._makeProxy(this.state);
        this.children = this._makeProxy(this.children);
        this._beforeRegisterEventsHook();
        this._registerEvents();
        this._beforeRenderHook();
        this.eventBus.emit((0, _blockBase.BlockCommonEvents).INIT);
        this._afterRenderHook();
    }
    _afterPropsAssignHook() {
        if (this.helpers.afterPropsAssignHook) this.helpers.afterPropsAssignHook.call(this);
    }
    _afterRenderHook() {
        if (this.helpers.afterRenderHook) this.helpers.afterRenderHook.call(this);
    }
    _beforePropsAssignHook() {
        if (this.helpers.beforePropsAssignHook) this.helpers.beforePropsAssignHook.call(this);
    }
    _beforePropsProxyHook() {
        this._bindEventListenersToBlock();
        if (this.helpers.beforePropsProxyHook) this.helpers.beforePropsProxyHook.call(this);
    }
    _beforeRegisterEventsHook() {}
    _beforeRenderHook() {}
    _compile() {
        const fragment = document.createElement("template");
        const childrenStubs = this._makeStubs();
        let templateString = this.render();
        if (this.htmlWrapped) {
            const htmlWrapper = this.props.htmlWrapper;
            templateString = (0, _handlebarsDefault.default).compile(htmlWrapper.htmlWrapperTemplate)({
                [`${htmlWrapper.componentAlias}`]: templateString
            });
        }
        const context = {
            ...this.props,
            ...this.state,
            ...childrenStubs,
            wrappedId: this.wrappedId
        };
        const htmlString = (0, _handlebarsDefault.default).compile(templateString)(context);
        fragment.innerHTML = htmlString;
        this._replaceStubs(fragment);
        return fragment.content;
    }
    _init() {
        this.eventBus.emit((0, _blockBase.BlockCommonEvents).FLOW_RENDER);
        this.wasRendered = true;
    }
    _makeProxy(object) {
        const self = this;
        return new Proxy(object, {
            set (target, prop, value) {
                const oldValue = target[prop];
                target[prop] = value;
                self.eventBus.emit((0, _blockBase.BlockCommonEvents).FLOW_CDU, oldValue, value);
                return true;
            }
        });
    }
    _makeStubs() {
        const stubs = {};
        Object.entries(this.children).forEach(([name, child])=>{
            if (Array.isArray(child)) stubs[name] = child.map((ch)=>`<div data-id="${ch.id}"></div>`).join("");
            else stubs[name] = `<div data-id="${child.id}"></div>`;
        });
        return stubs;
    }
    _registerEvents() {
        const { eventBus  } = this;
        eventBus.on((0, _blockBase.BlockCommonEvents).INIT, this._init.bind(this));
        eventBus.on((0, _blockBase.BlockCommonEvents).FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on((0, _blockBase.BlockCommonEvents).FLOW_RENDER, this._render.bind(this));
    }
    _render() {
        const fragment = this._compile();
        const newElement = fragment.firstElementChild;
        if (this.wasRendered) {
            this._removeEventsFromElement();
            this._element.replaceWith(newElement);
        }
        this._element = newElement;
        this._setUnwrappedElement();
        this._setHtmlProperties();
        this._addEventListenersToElement();
    }
    _replaceStub(fragment, stubID, element) {
        const stub = fragment.content.querySelector(`[data-id="${stubID}"]`);
        if (!stub) throw new Error(`${this.componentName}: No stub with id "${stubID}" to replace with element ${element}`);
        stub.replaceWith(element);
    }
    _replaceStubs(fragment) {
        Object.keys(this.children).forEach((key)=>{
            const child = this.children[key];
            if (Array.isArray(child)) child.forEach((ch)=>{
                const childElement = ch.getElement();
                if (!childElement) throw new Error(`${this.componentName}: replacing stub with id ${ch.id} to wrong element ${childElement} of type ${typeof childElement}`);
                this._replaceStub(fragment, ch.id, childElement);
            });
            else {
                const childElement = child.getElement();
                if (!childElement) throw new Error(`${this.componentName}: replacing stub with id ${child.id} to wrong element ${childElement} of type ${typeof childElement}`);
                this._replaceStub(fragment, child.id, childElement);
            }
        });
    }
    _setHtmlAttributes() {
        Object.entries(this.props.htmlAttributes).forEach(([attrName, value])=>{
            this._unwrappedElement.setAttribute(attrName, value);
        });
    }
    _setElementStyle() {
        Object.entries(this.props.htmlStyle).forEach(([styleProp, value])=>{
            let propValue = value;
            if (styleProp === "background-image") propValue = `url(${value})`;
            this._unwrappedElement.style.setProperty(styleProp, propValue);
        });
    }
    _setHtmlProperties() {
        this._setHtmlClasses();
        this._setHtmlAttributes();
        this._setElementStyle();
        this._unwrappedElement.removeAttribute("wrapped-id");
    }
    _setHtmlClasses() {
        if (this.props.htmlClasses.length) this._unwrappedElement.classList.add(...this.props.htmlClasses);
    }
    _setUnwrappedElement() {
        const element = this._element;
        if (!element) throw new Error(`BLOCK Set Unwrapped Element: wrong element ${element} of type ${typeof element}`);
        if (this.htmlWrapped) this._unwrappedElement = element.querySelector(`[wrapped-id="${this.wrappedId}"]`);
        else this._unwrappedElement = element;
    }
}

},{"handlebars":"i0QfX","nanoid":"2ifus","utils/objects-handle":"kOfSo","./block-base":"kYKew","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0QfX":[function(require,module,exports) {
// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */ // var local = handlebars.create();
var handlebars = require("83c32b9ed66c83fc")["default"];
var printer = require("b12922bba86cda78");
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;
module.exports = handlebars;
// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module1, filename) {
    var fs = require("7d05fea49ea2a4d5");
    var templateString = fs.readFileSync(filename, "utf8");
    module1.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */ if (0, undefined) {
    undefined[".handlebars"] = extension;
    undefined[".hbs"] = extension;
}

},{"83c32b9ed66c83fc":"56TWV","b12922bba86cda78":"j0OeV","7d05fea49ea2a4d5":"jhUEF"}],"56TWV":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _handlebarsRuntime = require("f0605f4d6f9e5aeb");
var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
// Compiler imports
var _handlebarsCompilerAst = require("4028183b7c329364");
var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
var _handlebarsCompilerBase = require("76849bac2d425cc9");
var _handlebarsCompilerCompiler = require("1e369212e109e058");
var _handlebarsCompilerJavascriptCompiler = require("eb72650892352682");
var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
var _handlebarsCompilerVisitor = require("4a3d6eba73d86601");
var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
var _handlebarsNoConflict = require("71b6fc0b88ac70a3");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
var _create = _handlebarsRuntime2["default"].create;
function create() {
    var hb = _create();
    hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2["default"];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst.Visitor = _handlebarsCompilerVisitor2["default"];
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"f0605f4d6f9e5aeb":"48O1v","4028183b7c329364":"iOlHO","76849bac2d425cc9":"kVun2","1e369212e109e058":"4Udtq","eb72650892352682":"7iXdU","4a3d6eba73d86601":"fk5sS","71b6fc0b88ac70a3":"gyMyS"}],"48O1v":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _handlebarsBase = require("e76108c92a769d24");
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = require("90962a274dbf93f6");
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = require("8785f2197adc95d0");
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = require("be440aa47ccee1");
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = require("b0835a641f062922");
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = require("daa9dfcbeeb255d2");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2["default"];
    hb.Exception = _handlebarsException2["default"];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function(spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"e76108c92a769d24":"dt4wA","90962a274dbf93f6":"fUPg1","8785f2197adc95d0":"gO63O","be440aa47ccee1":"1az9o","b0835a641f062922":"lcUM0","daa9dfcbeeb255d2":"gyMyS"}],"dt4wA":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("2bd920bd1aa20dbf");
var _exception = require("e99692bc656ae370");
var _exception2 = _interopRequireDefault(_exception);
var _helpers = require("b449976ce0bd2809");
var _decorators = require("77686d4aec434a33");
var _logger = require("a33345e176943fd0");
var _logger2 = _interopRequireDefault(_logger);
var _internalProtoAccess = require("e50b1a1543bdc3c6");
var VERSION = "4.7.7";
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = "[object Object]";
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2["default"],
    log: _logger2["default"].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
            _utils.extend(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
        else {
            if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
            _utils.extend(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
    }
};
var log = _logger2["default"].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2["default"];

},{"2bd920bd1aa20dbf":"1az9o","e99692bc656ae370":"gO63O","b449976ce0bd2809":"bxbLz","77686d4aec434a33":"IozU1","a33345e176943fd0":"gqRvw","e50b1a1543bdc3c6":"hJ0HO"}],"1az9o":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var isFunction = function isFunction(value) {
    return typeof value === "function";
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
    return typeof value === "function" && toString.call(value) === "[object Function]";
};
exports.isFunction = isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
    return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== "string") {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return "";
        else if (!string) return string + "";
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = "" + string;
    }
    if (!possible.test(string)) return string;
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) return true;
    else if (isArray(value) && value.length === 0) return true;
    else return false;
}
function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + "." : "") + id;
}

},{}],"gO63O":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var errorProps = [
    "description",
    "fileName",
    "lineNumber",
    "endLineNumber",
    "message",
    "name",
    "number",
    "stack"
];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, "column", {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, "endColumn", {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
Exception.prototype = new Error();
exports["default"] = Exception;
module.exports = exports["default"];

},{}],"bxbLz":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _helpersBlockHelperMissing = require("4e03b7204a854ded");
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = require("a1f9446b9376e738");
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = require("5e64296276c668b6");
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = require("ccfb2e2b02b7a700");
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = require("2df5a3f332bd125");
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = require("633ef9e49e42095e");
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = require("8c01e1fe1dd65fb5");
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2["default"](instance);
    _helpersEach2["default"](instance);
    _helpersHelperMissing2["default"](instance);
    _helpersIf2["default"](instance);
    _helpersLog2["default"](instance);
    _helpersLookup2["default"](instance);
    _helpersWith2["default"](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) delete instance.helpers[helperName];
    }
}

},{"4e03b7204a854ded":"b2Nig","a1f9446b9376e738":"cxvVH","5e64296276c668b6":"kqALW","ccfb2e2b02b7a700":"23VdI","2df5a3f332bd125":"15jv3","633ef9e49e42095e":"8QG3w","8c01e1fe1dd65fb5":"f8k9w"}],"b2Nig":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("a3cc061d21b9fe0f");
exports["default"] = function(instance) {
    instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports["default"];

},{"a3cc061d21b9fe0f":"1az9o"}],"cxvVH":[function(require,module,exports) {
var global = arguments[3];
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("b879c74a54e1e867");
var _exception = require("fdcb8a141343b35");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("each", function(context, options) {
        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
        if (_utils.isFunction(context)) context = context.call(this);
        if (options.data) data = _utils.createFrame(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === "object") {
            if (_utils.isArray(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
module.exports = exports["default"];

},{"b879c74a54e1e867":"1az9o","fdcb8a141343b35":"gO63O"}],"kqALW":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("f3d21de263c6720");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("helperMissing", function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
module.exports = exports["default"];

},{"f3d21de263c6720":"gO63O"}],"23VdI":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("42c147cd2233587f");
var _exception = require("7ce21aefbd769579");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
        if (_utils.isFunction(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
        return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
module.exports = exports["default"];

},{"42c147cd2233587f":"1az9o","7ce21aefbd769579":"gO63O"}],"15jv3":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("log", function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports["default"];

},{}],"8QG3w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
module.exports = exports["default"];

},{}],"f8k9w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("19691f3a5676253");
var _exception = require("e032ee6c7560cdb4");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
        if (_utils.isFunction(context)) context = context.call(this);
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
module.exports = exports["default"];

},{"19691f3a5676253":"1az9o","e032ee6c7560cdb4":"gO63O"}],"IozU1":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _decoratorsInline = require("38278dce28dddd9e");
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2["default"](instance);
}

},{"38278dce28dddd9e":"gLVN4"}],"gLVN4":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("4336446afcd3add7");
exports["default"] = function(instance) {
    instance.registerDecorator("inline", function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {};
            ret = function(context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
module.exports = exports["default"];

},{"4336446afcd3add7":"1az9o"}],"gqRvw":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("7da470fa29204c0f");
var logger = {
    methodMap: [
        "debug",
        "info",
        "warn",
        "error"
    ],
    level: "info",
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = "log";
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports["default"] = logger;
module.exports = exports["default"];

},{"7da470fa29204c0f":"1az9o"}],"hJ0HO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _createNewLookupObject = require("fc90cab8810bd93");
var _logger = require("f417140ffe9bbb");
var logger = _interopRequireWildcard(_logger);
var loggedProperties = Object.create(null);
function createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList["constructor"] = false;
    defaultMethodWhiteList["__defineGetter__"] = false;
    defaultMethodWhiteList["__defineSetter__"] = false;
    defaultMethodWhiteList["__lookupGetter__"] = false;
    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList["__proto__"] = false;
    return {
        properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
    else return checkWhiteList(protoAccessControl.properties, propertyName);
}
function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
    }
}
function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
    });
}

},{"fc90cab8810bd93":"1UqVd","f417140ffe9bbb":"gqRvw"}],"1UqVd":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;
var _utils = require("ac09d45b22b56477");
/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */ function createNewLookupObject() {
    for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    return _utils.extend.apply(undefined, [
        Object.create(null)
    ].concat(sources));
}

},{"ac09d45b22b56477":"1az9o"}],"fUPg1":[function(require,module,exports) {
// Build out our basic SafeString type
"use strict";
exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
};
exports["default"] = SafeString;
module.exports = exports["default"];

},{}],"lcUM0":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _utils = require("18503fb97d7ec85f");
var Utils = _interopRequireWildcard(_utils);
var _exception = require("dacbfc7648b038d");
var _exception2 = _interopRequireDefault(_exception);
var _base = require("62a2e433d5483361");
var _helpers = require("11b4320ece759157");
var _internalWrapHelper = require("e8b58145c3ae6e80");
var _internalProtoAccess = require("f062f2e06099f437");
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
}
function template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
    if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split("\n");
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join("\n");
            }
            return result;
        } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return depths[i][name];
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + "_d"];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = Utils.extend({}, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) data = initData(context, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context != options.depths[0] ? [
                context
            ].concat(options.depths) : options.depths;
            else depths = [
                context
            ];
        }
        function main(context /*, options*/ ) {
            return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
        if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === "@partial-block") partial = options.data["partial-block"];
        else partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data["partial-block"];
    options.partial = true;
    if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) (function() {
        options.data = _base.createFrame(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = _base.createFrame(options.data);
            options.data["partial-block"] = currentPartialBlock;
            return fn(context, options);
        };
        if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
    else if (partial instanceof Function) return partial(context, options);
}
function noop() {
    return "";
}
function initData(context, data) {
    if (!data || !("root" in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}
function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
}
function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({
            lookupProperty: lookupProperty
        }, options);
    });
}

},{"18503fb97d7ec85f":"1az9o","dacbfc7648b038d":"gO63O","62a2e433d5483361":"dt4wA","11b4320ece759157":"bxbLz","e8b58145c3ae6e80":"bKEVr","f062f2e06099f437":"hJ0HO"}],"bKEVr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}

},{}],"gyMyS":[function(require,module,exports) {
var global = arguments[3];
"use strict";
exports.__esModule = true;
exports["default"] = function(Handlebars) {
    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
        return Handlebars;
    };
};
module.exports = exports["default"];

},{}],"iOlHO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports["default"] = AST;
module.exports = exports["default"];

},{}],"kVun2":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.parseWithoutProcessing = parseWithoutProcessing;
exports.parse = parse;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _parser = require("f37b969742b363b4");
var _parser2 = _interopRequireDefault(_parser);
var _whitespaceControl = require("9fb4308f8b29f136");
var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
var _helpers = require("c19483f7c5dcbccb");
var Helpers = _interopRequireWildcard(_helpers);
var _utils = require("c805f2007aabf8f2");
exports.parser = _parser2["default"];
var yy = {};
_utils.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === "Program") return input;
    _parser2["default"].yy = yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = _parser2["default"].parse(input);
    return ast;
}
function parse(input, options) {
    var ast = parseWithoutProcessing(input, options);
    var strip = new _whitespaceControl2["default"](options);
    return strip.accept(ast);
}

},{"f37b969742b363b4":"lu457","9fb4308f8b29f136":"7ezbr","c19483f7c5dcbccb":"aNd96","c805f2007aabf8f2":"1az9o"}],"lu457":[function(require,module,exports) {
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
exports.__esModule = true;
var handlebars = function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: "CommentStatement",
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: "ContentStatement",
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: "PartialStatement",
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: "",
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: "SubExpression",
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: "Hash",
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: "HashPair",
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: "StringLiteral",
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: "NumberLiteral",
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: "BooleanLiteral",
                        value: $$[$0] === "true",
                        original: $$[$0] === "true",
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: "UndefinedLiteral",
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: "NullLiteral",
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer = function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== "undefined") return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin("raw");
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === "raw") return 15;
                    else {
                        strip(5, 9);
                        return "END_RAW_BLOCK";
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin("raw");
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin("com");
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                    return 72;
                case 43:
                    return "INVALID";
                case 44:
                    return 5;
            }
        };
        lexer.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
exports["default"] = handlebars;
module.exports = exports["default"];

},{}],"7ezbr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("526e2ba1a1e22342");
var _visitor2 = _interopRequireDefault(_visitor);
function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
}
WhitespaceControl.prototype = new _visitor2["default"]();
WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) omitRight(body, i, true);
        if (strip.open) omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === "PartialStatement") // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) omitLeft(program.body, null, true);
        if (inverseStrip.close) omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) omitLeft(program.body, null, true);
    return strip;
};
WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {};
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === "ContentStatement") return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === "ContentStatement") return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
exports["default"] = WhitespaceControl;
module.exports = exports["default"];

},{"526e2ba1a1e22342":"fk5sS"}],"fk5sS":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("fd0c2fd1094fedf5");
var _exception2 = _interopRequireDefault(_exception);
function Visitor() {
    this.parents = [];
}
Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new _exception2["default"](node.type + " requires " + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new _exception2["default"]("Unknown type: " + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, "program");
    },
    ContentStatement: function ContentStatement() /* content */ {},
    CommentStatement: function CommentStatement() /* comment */ {},
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() /* path */ {},
    StringLiteral: function StringLiteral() /* string */ {},
    NumberLiteral: function NumberLiteral() /* number */ {},
    BooleanLiteral: function BooleanLiteral() /* bool */ {},
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
    NullLiteral: function NullLiteral() /* literal */ {},
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, "value");
    }
};
function visitSubExpression(mustache) {
    this.acceptRequired(mustache, "path");
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, "hash");
}
function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, "program");
    this.acceptKey(block, "inverse");
}
function visitPartial(partial) {
    this.acceptRequired(partial, "name");
    this.acceptArray(partial.params);
    this.acceptKey(partial, "hash");
}
exports["default"] = Visitor;
module.exports = exports["default"];

},{"fd0c2fd1094fedf5":"gO63O"}],"aNd96":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("f224c70f302a13ce");
var _exception2 = _interopRequireDefault(_exception);
function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode);
    }
}
function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function stripFlags(open, close) {
    return {
        open: open.charAt(2) === "~",
        close: close.charAt(close.length - 3) === "~"
    };
}
function stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? "@" : "", dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || "") + part;
        if (!isLiteral && (part === ".." || part === "." || part === "this")) {
            if (dig.length > 0) throw new _exception2["default"]("Invalid path: " + original, {
                loc: loc
            });
            else if (part === "..") depth++;
        } else dig.push(part);
    }
    return {
        type: "PathExpression",
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
    var decorator = /\*/.test(open);
    return {
        type: decorator ? "Decorator" : "MustacheStatement",
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: "Program",
        body: contents,
        strip: {},
        loc: locInfo
    };
    return {
        type: "BlockStatement",
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
    };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? "DecoratorBlock" : "BlockStatement",
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: "Program",
        body: statements,
        strip: {},
        loc: loc
    };
}
function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
        type: "PartialBlockStatement",
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}

},{"f224c70f302a13ce":"gO63O"}],"4Udtq":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("13cddc8bda5a4b26");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("8fe678ce79296716");
var _ast = require("2b69bd7aa80202e3");
var _ast2 = _interopRequireDefault(_ast);
var slice = [].slice;
function Compiler() {}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            "if": true,
            unless: true,
            "with": true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new _exception2["default"]("Unknown type: " + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === "helper") this.helperSexpr(block, program, inverse);
        else if (type === "simple") {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode("registerDecorator", params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode("pushLiteral", "undefined");
            else params.push({
                type: "PathExpression",
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || "";
        if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
        }
        this.opcode("invokePartial", isDynamic, partialName, indent);
        this.opcode("append");
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode("appendEscaped");
        else this.opcode("append");
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode("appendContent", content.value);
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === "simple") this.simpleSexpr(sexpr);
        else if (type === "helper") this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode("getContext", path.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        path.strict = true;
        this.accept(path);
        this.opcode("invokeAmbiguous", name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
        else if (this.options.knownHelpersOnly) throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode("getContext", path.depth);
        var name = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode("lookupBlockParam", blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode("pushContext");
        else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts, path.strict);
        } else this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode("pushString", string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode("pushLiteral", number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode("pushLiteral", bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function NullLiteral() {
        this.opcode("pushLiteral", "null");
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode("pushHash");
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode("assignToHash", pairs[i].key);
        this.opcode("popHash");
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return "helper";
        else if (isEligible) return "ambiguous";
        else return "simple";
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || "";
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            if (val.depth) this.addDepth(val.depth);
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
                    this.opcode("pushId", val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode("emptyHash", omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function precompile(input, options, env) {
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    options = options || {};
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
    if (options === undefined) options = {};
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    options = _utils.extend({}, options);
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function argEquals(a, b) {
    if (a === b) return true;
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: "PathExpression",
            data: false,
            depth: 0,
            parts: [
                literal.original + ""
            ],
            original: literal.original + "",
            loc: literal.loc
        };
    }
}

},{"13cddc8bda5a4b26":"gO63O","8fe678ce79296716":"1az9o","2b69bd7aa80202e3":"iOlHO"}],"7iXdU":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _base = require("48730777a02c02d3");
var _exception = require("e3854ee129ac557d");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("eac6c84cd08fc182");
var _codeGen = require("c6965a467b6f782f");
var _codeGen2 = _interopRequireDefault(_codeGen);
function Literal(value) {
    this.value = value;
}
function JavaScriptCompiler() {}
JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable("container.lookup"),
            "(depths, ",
            JSON.stringify(name),
            ")"
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!_utils.isArray(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            "return ",
            source,
            ";"
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            "buffer += ",
            source,
            ";"
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            "lookupProperty(",
            parent,
            ",",
            JSON.stringify(name),
            ")"
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource("");
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2["default"]("Compile completed with content left on stack");
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                "var decorators = container.decorators, ",
                this.lookupPropertyFunctionVarDeclaration(),
                ";\n"
            ]);
            this.decorators.push("return fn;");
            if (asObject) this.decorators = Function.apply(this, [
                "fn",
                "props",
                "container",
                "depth0",
                "data",
                "blockParams",
                "depths",
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
                this.decorators.push("}\n");
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++)if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + "_d"] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new _codeGen2["default"](this.options.srcName);
        this.decorators = new _codeGen2["default"](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = "";
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ", " + locals.join(", ");
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                node.children[0] = "alias" + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            "container",
            "depth0",
            "helpers",
            "partials",
            "data"
        ];
        if (this.useBlockParams || this.useDepths) params.push("blockParams");
        if (this.useDepths) params.push("depths");
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            "function(",
            params.join(","),
            ") {\n  ",
            source,
            "}"
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend("  + ");
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend("buffer += ");
                    bufferEnd.add(";");
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend("return ");
                bufferEnd.add(";");
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend("return buffer + ");
                bufferEnd.add(";");
            } else this.source.push("return buffer;");
        }
        if (varDeclarations) this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, "call", params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs("", 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            "if (!",
            this.lastHelper,
            ") { ",
            current,
            " = ",
            this.source.functionCall(blockHelperMissing, "call", params),
            "}"
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    " != null ? ",
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                "if (",
                local,
                " != null) { ",
                this.appendToBuffer(local, undefined, true),
                " }"
            ]);
            if (this.environment.isSimple) this.pushSource([
                "else { ",
                this.appendToBuffer("''", undefined, true),
                " }"
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable("container.escapeExpression"),
            "(",
            this.popStack(),
            ")"
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath("context", parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            "blockParams[",
            blockParamId[0],
            "][",
            blockParamId[1],
            "]"
        ]);
        this.resolvePath("context", parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral("data");
        else this.pushStackLiteral("container.data(data, " + depth + ")");
        this.resolvePath("data", parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, type));
            return;
        }
        var len = parts.length;
        for(; i < len; i++)/* eslint-disable no-loop-func */ this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            // We want to ensure that zero and false are handled properly if the context (falsy flag)
            // needs to have the special handling for these values.
            if (!falsy) return [
                " != null ? ",
                lookup,
                " : ",
                current
            ];
            else // Otherwise we can use generic falsy handling
            return [
                " && ",
                lookup
            ];
        });
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable("container.lambda"),
            "(",
            this.popStack(),
            ", ",
            this.contextName(0),
            ")"
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== "SubExpression") {
            if (typeof string === "string") this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push("{}"); // hashIds
        if (this.stringParams) {
            this.push("{}"); // hashContexts
            this.push("{}"); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push([
            "fn = ",
            this.decorators.functionCall(foundDecorator, "", [
                "fn",
                "props",
                "container",
                options
            ]),
            " || fn;"
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
        var functionLookupCode = [
            "(",
            this.itemsSeparatedBy(possibleFunctionCalls, "||"),
            ")"
        ];
        var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, "call", helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister("helper");
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        var lookup = [
            "(",
            "(helper = ",
            helperName,
            " || ",
            nonHelper,
            ")"
        ];
        if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
        }
        this.push([
            "(",
            lookup,
            helper.paramsInit ? [
                "),(",
                helper.paramsInit
            ] : [],
            "),",
            "(typeof helper === ",
            this.aliasable('"function"'),
            " ? ",
            this.source.functionCall("helper", "call", helper.callParams),
            " : helper))"
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = "helpers";
        options.partials = "partials";
        options.decorators = "container.decorators";
        if (!isDynamic) params.unshift(this.nameLookup("partials", name, "partial"));
        else params.unshift(name);
        if (this.options.compat) options.depths = "depths";
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall("container.invokePartial", "", params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === "BlockParam") this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
        else if (type === "PathExpression") this.pushString(name);
        else if (type === "SubExpression") this.pushStackLiteral("true");
        else this.pushStackLiteral("null");
    },
    // HELPERS
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                this.context.programs.push(""); // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.length;
                child.index = index;
                child.name = "program" + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = "program" + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            "data",
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push("blockParams");
        if (this.useDepths) programParams.push("depths");
        return "container.program(" + programParams.join(", ") + ")";
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            "("
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new _exception2["default"]("replaceStack on non-inline");
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                "(",
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                "((",
                this.push(_name),
                " = ",
                top,
                ")"
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ")"));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push("stack" + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return "stack" + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    " = ",
                    entry,
                    ";"
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new _exception2["default"]("Invalid stack pop");
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return "depths[" + context + "]";
        else return "depth" + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || "container.noop";
            options.inverse = inverse || "container.noop";
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = "data";
        if (this.useBlockParams) options.blockParams = "blockParams";
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return [
                "options=",
                options
            ];
        } else if (params) {
            params.push(options);
            return "";
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(), i = 0, len = parts.length;
    if (requireTerminal) len--;
    for(; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable("container.strict"),
        "(",
        stack,
        ", ",
        compiler.quotedString(parts[i]),
        ", ",
        JSON.stringify(compiler.source.currentLocation),
        " )"
    ];
    else return stack;
}
exports["default"] = JavaScriptCompiler;
module.exports = exports["default"];

},{"48730777a02c02d3":"dt4wA","e3854ee129ac557d":"gO63O","eac6c84cd08fc182":"1az9o","c6965a467b6f782f":"62qpE"}],"62qpE":[function(require,module,exports) {
/* global define */ "use strict";
exports.__esModule = true;
var _utils = require("f02129f8a42efe10");
var SourceNode = undefined;
try {
    /* istanbul ignore next */ if (typeof define !== "function" || !define.amd) {
        // We don't support this in AMD environments. For these environments, we asusme that
        // they are running on the browser and thus have no need for the source-map library.
        var SourceMap = require("60d541f987f7a647");
        SourceNode = SourceMap.SourceNode;
    }
} catch (err) {}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
        this.src = "";
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ SourceNode.prototype = {
        add: function add(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === "boolean" || typeof chunk === "number") // Handle primitives that the SourceNode will throw up on
    return chunk + "";
    return chunk;
}
function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                "  ",
                line,
                "\n"
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {}
        };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
        } : arguments[1];
        if (chunk instanceof SourceNode) return chunk;
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? "." + type + "(" : "(",
            params,
            ")"
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== "undefined") pairs.push([
                _this.quotedString(key),
                ":",
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend("{");
        ret.add("}");
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(",");
            ret.add(castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend("[");
        ret.add("]");
        return ret;
    }
};
exports["default"] = CodeGen;
module.exports = exports["default"];

},{"f02129f8a42efe10":"1az9o","60d541f987f7a647":"geCww"}],"geCww":[function(require,module,exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require("a876272ec77500d3").SourceMapGenerator;
exports.SourceMapConsumer = require("7234eb030418f2da").SourceMapConsumer;
exports.SourceNode = require("4d2c547a316a248").SourceNode;

},{"a876272ec77500d3":"dG0Bx","7234eb030418f2da":"bD2jh","4d2c547a316a248":"hEmK3"}],"dG0Bx":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require("86fabc04e094ddb2");
var util = require("6870b066416af446");
var ArraySet = require("4b0edd759e9beb62").ArraySet;
var MappingList = require("d2d3a6323cc791f9").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = util.getArg(aArgs, "file", null);
    this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, "generated");
    var original = util.getArg(aArgs, "original", null);
    var source = util.getArg(aArgs, "source", null);
    var name = util.getArg(aArgs, "name", null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = util.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ";";
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ",";
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"86fabc04e094ddb2":"ZqJvW","6870b066416af446":"6YQY7","4b0edd759e9beb62":"9mrYJ","d2d3a6323cc791f9":"i94qp"}],"ZqJvW":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require("47eec0297f43b3b7");
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0);
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"47eec0297f43b3b7":"absL3"}],"absL3":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"6YQY7":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ":";
    url += "//";
    if (aParsedUrl.auth) url += aParsedUrl.auth + "@";
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === ".") parts.splice(i, 1);
        else if (part === "..") up++;
        else if (up > 0) {
            if (part === "") {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join("/");
    if (path === "") path = isAbsolute ? "/" : ".";
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || "/";
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, "");
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + "/") !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !("__proto__" in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return "$" + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") sourceRoot += "/";
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"9mrYJ":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("129cd923410e4479");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error("No element indexed by " + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"129cd923410e4479":"6YQY7"}],"i94qp":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("c2f1f67a5db82a55");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"c2f1f67a5db82a55":"6YQY7"}],"bD2jh":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("12602a78915fa97c");
var binarySearch = require("8bfdeb96d0dceb7e");
var ArraySet = require("920e9f9523c9a233").ArraySet;
var base64VLQ = require("bc737557e9ee0698");
var quickSort = require("9173cbb14da95f6").quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, "line");
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sources = util.getArg(sourceMap, "sources");
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, "names", []);
    var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
    var mappings = util.getArg(sourceMap, "mappings");
    var file = util.getArg(sourceMap, "file", null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error("Unsupported version: " + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error("Found a source, but no line and column");
                if (segment.length === 3) throw new Error("Found a source and line, but no column");
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, "source", null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, "originalLine", null),
                column: util.getArg(mapping, "originalColumn", null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sections = util.getArg(sourceMap, "sections");
    if (version != this._version) throw new Error("Unsupported version: " + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error("Support for url field in sections not implemented.");
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"12602a78915fa97c":"6YQY7","8bfdeb96d0dceb7e":"18PKq","920e9f9523c9a233":"9mrYJ","bc737557e9ee0698":"ZqJvW","9173cbb14da95f6":"gGVtr"}],"18PKq":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"gGVtr":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"hEmK3":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require("c1015e03c69fa8e1").SourceMapGenerator;
var util = require("8ba7d8a59bf4821a");
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) node.add(code);
        else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== "") aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === "string") this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push("".replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"c1015e03c69fa8e1":"dG0Bx","8ba7d8a59bf4821a":"6YQY7"}],"j0OeV":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.print = print;
exports.PrintVisitor = PrintVisitor;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("3b14ac530edb9d0b");
var _visitor2 = _interopRequireDefault(_visitor);
function print(ast) {
    return new PrintVisitor().accept(ast);
}
function PrintVisitor() {
    this.padding = 0;
}
PrintVisitor.prototype = new _visitor2["default"]();
PrintVisitor.prototype.pad = function(string) {
    var out = "";
    for(var i = 0, l = this.padding; i < l; i++)out += "  ";
    out += string + "\n";
    return out;
};
PrintVisitor.prototype.Program = function(program) {
    var out = "", body = program.body, i = undefined, l = undefined;
    if (program.blockParams) {
        var blockParams = "BLOCK PARAMS: [";
        for(i = 0, l = program.blockParams.length; i < l; i++)blockParams += " " + program.blockParams[i];
        blockParams += " ]";
        out += this.pad(blockParams);
    }
    for(i = 0, l = body.length; i < l; i++)out += this.accept(body[i]);
    this.padding--;
    return out;
};
PrintVisitor.prototype.MustacheStatement = function(mustache) {
    return this.pad("{{ " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.Decorator = function(mustache) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function(block) {
    var out = "";
    out += this.pad((block.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:");
    this.padding++;
    out += this.pad(this.SubExpression(block));
    if (block.program) {
        out += this.pad("PROGRAM:");
        this.padding++;
        out += this.accept(block.program);
        this.padding--;
    }
    if (block.inverse) {
        if (block.program) this.padding++;
        out += this.pad("{{^}}");
        this.padding++;
        out += this.accept(block.inverse);
        this.padding--;
        if (block.program) this.padding--;
    }
    this.padding--;
    return out;
};
PrintVisitor.prototype.PartialStatement = function(partial) {
    var content = "PARTIAL:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.PartialBlockStatement = function(partial) {
    var content = "PARTIAL BLOCK:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    content += " " + this.pad("PROGRAM:");
    this.padding++;
    content += this.accept(partial.program);
    this.padding--;
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.ContentStatement = function(content) {
    return this.pad("CONTENT[ '" + content.value + "' ]");
};
PrintVisitor.prototype.CommentStatement = function(comment) {
    return this.pad("{{! '" + comment.value + "' }}");
};
PrintVisitor.prototype.SubExpression = function(sexpr) {
    var params = sexpr.params, paramStrings = [], hash = undefined;
    for(var i = 0, l = params.length; i < l; i++)paramStrings.push(this.accept(params[i]));
    params = "[" + paramStrings.join(", ") + "]";
    hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";
    return this.accept(sexpr.path) + " " + params + hash;
};
PrintVisitor.prototype.PathExpression = function(id) {
    var path = id.parts.join("/");
    return (id.data ? "@" : "") + "PATH:" + path;
};
PrintVisitor.prototype.StringLiteral = function(string) {
    return '"' + string.value + '"';
};
PrintVisitor.prototype.NumberLiteral = function(number) {
    return "NUMBER{" + number.value + "}";
};
PrintVisitor.prototype.BooleanLiteral = function(bool) {
    return "BOOLEAN{" + bool.value + "}";
};
PrintVisitor.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
};
PrintVisitor.prototype.NullLiteral = function() {
    return "NULL";
};
PrintVisitor.prototype.Hash = function(hash) {
    var pairs = hash.pairs, joinedPairs = [];
    for(var i = 0, l = pairs.length; i < l; i++)joinedPairs.push(this.accept(pairs[i]));
    return "HASH{" + joinedPairs.join(", ") + "}";
};
PrintVisitor.prototype.HashPair = function(pair) {
    return pair.key + "=" + this.accept(pair.value);
}; /* eslint-enable new-cap */ 

},{"3b14ac530edb9d0b":"fk5sS"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"6nAB4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDOM", ()=>renderDOM);
function renderDOM({ rootSelector ="#app" , component  }) {
    // console.log(`render ${component.componentName}`);
    const root = document.querySelector(rootSelector);
    if (!root) throw new Error("Root not found");
    const element = component.getElement();
    if (!(element instanceof HTMLElement)) throw new Error(`Wrong type ${typeof element} of element ${element}`);
    if (component) root.innerHTML = "";
    root.append(element);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Pgai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const loginData = {
    page: "Login Page",
    formClass: "auth__form",
    inputFields: [
        {
            type: "text",
            name: "login",
            placeholder: "Введите логин",
            label: "Логин"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Введите пароль",
            label: "Пароль"
        }
    ],
    pageTitle: "Вход",
    link: {
        name: "Нет аккаунта?",
        htmlName: "Registration",
        class: "auth__noaccount"
    },
    submitButtonLabel: "Авторизоваться",
    errorLabel: [
        "errorLogin",
        "errorPassword"
    ],
    errorLink: {
        404: {
            name: "error 404 page",
            htmlName: "Error 404 page",
            class: "auth__error"
        },
        505: {
            name: "error 505 page",
            htmlName: "Error 505 page",
            class: "auth__error"
        }
    }
};
exports.default = loginData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1P9m9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
<main class='auth__container'>
  {{{ loginForm }}}
</main>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1lBVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginPageForm", ()=>(0, _component.LoginPageForm));
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _fields.EnumInputFields));
var _component = require("./component");
var _fields = require("./fields");

},{"./component":"bEEqB","./fields":"7qrY1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEEqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginPageForm", ()=>LoginPageForm);
var _components = require("components");
var _validationCallback = require("./validationCallback");
var _loginData = require("../loginData");
var _loginDataDefault = parcelHelpers.interopDefault(_loginData);
var _fields = require("./fields");
class LoginPageForm extends (0, _components.InputForm) {
    constructor(){
        super({
            enumInputFieldsNames: (0, _fields.EnumInputFields),
            mapInputToProps: (0, _fields.MapInputFieldsProps),
            props: {
                afterValidationCallback: (0, _validationCallback.afterValidationCallback),
                formTitle: (0, _loginDataDefault.default).pageTitle,
                htmlClasses: [
                    (0, _loginDataDefault.default).formClass
                ],
                type: "login",
                label: "Авторизоваться"
            }
        });
    }
}

},{"components":"dHnah","./validationCallback":"ljkAW","../loginData":"4Pgai","./fields":"7qrY1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHnah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>(0, _basicButton.Button));
parcelHelpers.export(exports, "Link", ()=>(0, _link.Link));
parcelHelpers.export(exports, "Input", ()=>(0, _basicInput.Input));
parcelHelpers.export(exports, "InputWithValidation", ()=>(0, _inputs.InputWithValidation));
parcelHelpers.export(exports, "FileInput", ()=>(0, _inputs.FileInput));
parcelHelpers.export(exports, "InputForm", ()=>(0, _inputs.InputForm));
parcelHelpers.export(exports, "TextComponent", ()=>(0, _text.TextComponent));
parcelHelpers.export(exports, "ImageComponent", ()=>(0, _image.ImageComponent));
parcelHelpers.export(exports, "Modal", ()=>(0, _modal.Modal));
var _basicButton = require("./buttons/basicButton");
var _link = require("./link");
var _basicInput = require("./inputs/basicInput");
var _inputs = require("./inputs");
var _text = require("./text");
var _image = require("./image");
var _modal = require("./modal");

},{"./buttons/basicButton":"5KyQc","./link":"hjADv","./inputs/basicInput":"eC8jo","./inputs":"fRfcK","./text":"6Xncd","./image":"8UAPc","./modal":"k4trj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KyQc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TButtonProps", ()=>(0, _component.TButtonProps));
parcelHelpers.export(exports, "Button", ()=>(0, _component.Button));
var _component = require("./component");

},{"./component":"gLC97","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLC97":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Button extends (0, _dom.Block) {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.props.htmlAttributes.type ??= "button";
    }
    render() {
        return 0, _templateDefault.default;
    }
    toggleDisabledState(state) {
        console.log("here");
        const element = this._unwrappedElement;
        if (state !== undefined) {
            element.disabled = state;
            return;
        }
        element.disabled = !element.disabled;
    }
    click() {
        this._unwrappedElement.click();
    }
}

},{"core/Dom":"i0KHM","./template":"idGo2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"idGo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
const tag = "button";
const content = `
{{#if label}}
  {{ label }}
{{/if}}
`;
exports.default = (0, _templateGeneratorDefault.default)({
    tag,
    content
});

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58Af7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getComponentTemplate({ tag , content =null , isSelfClosingTag =false  }) {
    return `
    <${tag}
      {{#if wrappedId}} 
        wrapped-id="{{wrappedId}}" 
      {{/if}}
    >
      ${content ?? ""}
    ${!isSelfClosingTag ? `</${tag}>` : ""}
    `;
}
exports.default = getComponentTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjADv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TLinkProps", ()=>(0, _component.TLinkProps));
parcelHelpers.export(exports, "Link", ()=>(0, _component.Link));
var _component = require("./component");

},{"./component":"3rKQe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rKQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>Link);
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Link extends (0, _dom.Block) {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        //  eslint-disable-next-line no-script-url
        this.props.htmlAttributes.href ??= "javascript:void(0);";
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"core/Dom":"i0KHM","./template":"eTM71","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTM71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
const tag = "a";
const content = "{{ label }}";
exports.default = (0, _templateGeneratorDefault.default)({
    tag,
    content
});

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eC8jo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TInputProps", ()=>(0, _component.TInputProps));
parcelHelpers.export(exports, "Input", ()=>(0, _component.Input));
var _component = require("./component");

},{"./component":"cTylG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTylG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Input extends (0, _dom.Block) {
    render() {
        return 0, _templateDefault.default;
    }
    getValue() {
        const element = this._unwrappedElement;
        return element.value;
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.props.htmlAttributes.value ??= "";
        this.props.htmlAttributes.type ??= "text";
    }
    toggleDisabledState(state) {
        const element = this._unwrappedElement;
        if (state === "error") {
            element.disabled = false;
            element.classList.add("profile__data__data__error");
            element.classList.remove("profile__data__data");
            return;
        }
        if (state === "save") {
            element.disabled = false;
            element.classList.add("profile__data__data__active");
            element.classList.remove("profile__data__data");
            return;
        }
        if (state === "change") {
            element.disabled = true;
            element.classList.add("profile__data__data");
            element.classList.remove("profile__data__data__active");
        }
    }
    setValue(value) {
        const element = this._unwrappedElement;
        element.value = value;
    }
}

},{"core/Dom":"i0KHM","./template":"gaCIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaCIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
const tag = "input";
exports.default = (0, _templateGeneratorDefault.default)({
    tag
});

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRfcK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>(0, _basicInput.Input));
parcelHelpers.export(exports, "FileInput", ()=>(0, _fileInput.FileInput));
parcelHelpers.export(exports, "InputWithValidation", ()=>(0, _inputValidation.InputWithValidation));
parcelHelpers.export(exports, "InputForm", ()=>(0, _inputForm.InputForm));
var _basicInput = require("./basicInput");
var _fileInput = require("./fileInput");
var _inputValidation = require("./inputValidation");
var _inputForm = require("./inputForm");

},{"./basicInput":"eC8jo","./fileInput":"gmiOZ","./inputValidation":"g9Xmr","./inputForm":"65vk3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmiOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileInput", ()=>(0, _component.FileInput));
parcelHelpers.export(exports, "EnumFileUploadingStatus", ()=>(0, _component.EnumFileUploadingStatus));
var _component = require("./component");

},{"./component":"gAibD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAibD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumFileUploadingStatus", ()=>EnumFileUploadingStatus);
parcelHelpers.export(exports, "FileInput", ()=>FileInput);
var _dom = require("core/Dom");
var _objectsHandle = require("utils/objects-handle");
var _basicInput = require("components/inputs/basicInput");
var _basicButton = require("components/buttons/basicButton");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
let EnumFileUploadingStatus;
(function(EnumFileUploadingStatus) {
    EnumFileUploadingStatus["FileNotSelected"] = "File not selected";
    EnumFileUploadingStatus["FileSelected"] = "File selected";
    EnumFileUploadingStatus["FileUploaded"] = "File uploaded";
})(EnumFileUploadingStatus || (EnumFileUploadingStatus = {}));
class FileInput extends (0, _dom.Block) {
    constructor({ fileInputProps , chooseButtonProps ={} , props ={} , helpers  }){
        const children = {};
        const fileInput = FileInput._createFileInput(fileInputProps);
        children.fileInput = fileInput;
        children.chooseButton = FileInput._createChooseButton(chooseButtonProps, fileInput);
        super({
            props,
            children,
            helpers
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const fileInput = this.children.fileInput;
        const chooseButton = this.children.chooseButton;
        fileInput.refs.form = this;
        chooseButton.refs.fileInput = fileInput;
    }
    static _createFileInput(props) {
        const FileInputDefaultProps = {
            htmlAttributes: {
                type: "file",
                accept: "image/*"
            },
            htmlStyle: {
                display: "none"
            },
            events: {
                change: [
                    ()=>{}
                ]
            }
        };
        return new (0, _basicInput.Input)({
            state: {
                fileUploadingStatus: "File not selected"
            },
            props: (0, _objectsHandle.deepMerge)(FileInputDefaultProps, props)
        });
    }
    static _createChooseButton(props, fileInputRef) {
        const chooseButtonDefaultProps = {
            events: {
                click: [
                    function() {
                        const { fileInput  } = this.refs;
                        fileInput._unwrappedElement.click();
                    }
                ]
            }
        };
        return new (0, _basicButton.Button)({
            props: (0, _objectsHandle.deepMerge)(chooseButtonDefaultProps, props),
            refs: {
                fileInput: fileInputRef
            }
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"core/Dom":"i0KHM","utils/objects-handle":"kOfSo","components/inputs/basicInput":"eC8jo","components/buttons/basicButton":"5KyQc","./template":"3hEfZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hEfZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <form enctype="multipart/form-data">
      {{{ fileInput }}}
      {{{ chooseButton }}}
  </form>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9Xmr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputWithValidation", ()=>(0, _component.InputWithValidation));
parcelHelpers.export(exports, "TInputWithValidationProps", ()=>(0, _component.TInputWithValidationProps));
parcelHelpers.export(exports, "TInputValidator", ()=>(0, _component.TInputValidator));
var _component = require("./component");

},{"./component":"6EhPb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6EhPb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputWithValidation", ()=>InputWithValidation);
var _basicInput = require("../basicInput");
const InputExtended = (0, _basicInput.Input);
class InputWithValidation extends InputExtended {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.state.inputError = "";
        this.props.htmlWrapper ??= {
            componentAlias: "wrapped",
            htmlWrapperTemplate: `
      <div class=${this.props.mainClass}${this.props.htmlAttributes?.name}>
        <label for="${this.props.htmlAttributes?.name}" class="${this.props.mainClass}${this.props.htmlAttributes?.name}__label">${this.props.label}</label>
        {{{ wrapped }}}
        <div class="auth__error__container">
          \\{{#if inputError}}
            <span class="${this.props.mainClass}${this.props.htmlAttributes?.name}__error"> \\{{ inputError }} </span>
          \\{{/if}}
        </div>
      </div>
      `
        };
    }
    _beforePropsProxyHook() {
        super._beforePropsProxyHook();
        this.props.validators = this.props.validators ?? {};
        this._bindValidators();
    }
    _bindValidators() {
        const bindedValidators = {};
        Object.entries(this.props.validators).forEach(([event, validators])=>{
            const events = this.props.events;
            if (!events[event]) events[event] = [];
            bindedValidators[event] = [];
            validators.forEach((validator)=>{
                const bindedValidator = validator.bind(this);
                bindedValidators[event].push(bindedValidator);
                events[event].push(bindedValidator);
            });
        });
        this.props.validators = bindedValidators;
    }
    getValidators() {
        return this.props.validators;
    }
}

},{"../basicInput":"eC8jo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65vk3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputForm", ()=>(0, _component.InputForm));
parcelHelpers.export(exports, "formSubmitButtonCallback", ()=>(0, _submitButton.formSubmitButtonCallback));
var _component = require("./component");
var _submitButton = require("./submitButton");

},{"./component":"h7yZQ","./submitButton":"iDUIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h7yZQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputForm", ()=>InputForm);
var _dom = require("core/Dom");
var _inputValidation = require("../inputValidation");
var _submitButton = require("./submitButton");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _hocs = require("hocs");
var _link = require("components/link");
var _loginData = require("pages/login/loginData");
var _loginDataDefault = parcelHelpers.interopDefault(_loginData);
var _router = require("core/Router");
var _registrationData = require("pages/registration/registrationData");
var _registrationDataDefault = parcelHelpers.interopDefault(_registrationData);
const LinkWithRouter = (0, _hocs.WithRouter)((0, _link.Link));
class InputForm extends (0, _dom.Block) {
    static validationFailedError = "Form has input errors";
    constructor({ enumInputFieldsNames , InputClass =(0, _inputValidation.InputWithValidation) , mapInputToProps ={} , mapInputToHelpers ={} , props ={} , helpers ={}  }){
        const children = {};
        const refs = {};
        Object.values(enumInputFieldsNames).forEach((fieldName)=>{
            const inputField = new InputClass({
                componentName: `${fieldName} input with validation`,
                props: mapInputToProps[fieldName] ?? {},
                helpers: mapInputToHelpers[fieldName] ?? {}
            });
            children[`${fieldName}_child`] = inputField;
            refs[fieldName] = inputField;
        });
        const state = {
            apiResponseError: "",
            apiResponseSuccess: ""
        };
        super({
            children,
            props: {
                formTitle: "",
                isSubmitButtonNeeded: true,
                afterValidationCallback: ()=>{},
                ...props
            },
            refs,
            state,
            helpers: {
                enumInputFieldsNames,
                ...helpers
            }
        });
    }
    render() {
        return (0, _templateDefault.default)(this.helpers.enumInputFieldsNames);
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        Object.values(this.refs).forEach((inputField)=>{
            inputField.refs.Form = this;
        });
    }
    _beforeRenderHook() {
        super._beforeRenderHook();
        if (this.props.isSubmitButtonNeeded && !this.children.submitButton) this.children.submitButton = new (0, _submitButton.FormSubmitButton)({
            form: this
        }, this.props.label);
        if (!this.props.type) return;
        this.children.link = this.props.type === "login" ? new LinkWithRouter({
            props: {
                label: (0, _loginDataDefault.default).link.name,
                htmlName: (0, _loginDataDefault.default).link.htmlName,
                htmlClasses: [
                    (0, _loginDataDefault.default).link.class
                ],
                events: {
                    click: [
                        function() {
                            this.router.go((0, _router.AppRoutes).Registration);
                        }
                    ]
                }
            }
        }) : new LinkWithRouter({
            props: {
                label: (0, _registrationDataDefault.default).link.name,
                htmlName: (0, _registrationDataDefault.default).link.htmlName,
                htmlClasses: [
                    (0, _registrationDataDefault.default).link.class
                ],
                events: {
                    click: [
                        function() {
                            this.router.go((0, _router.AppRoutes).Login);
                        }
                    ]
                }
            }
        });
    }
    // @ts-ignore '_validateForm' is declared but its value is never read
    _validateForm() {
        let formHasInputErrors = false;
        Object.values(this.refs).forEach((inputField)=>{
            const validators = inputField.getValidators();
            const validatorsByEvent = Object.values(validators);
            for (const eventValidators of validatorsByEvent)for (const validator of eventValidators){
                const validationResult = validator();
                if (!validationResult) {
                    formHasInputErrors = true;
                    return;
                }
            }
        });
        if (formHasInputErrors) // console.log(`Form has input errors: ${JSON.stringify(this.state)}`);
        this.state.apiResponseError = InputForm.validationFailedError;
        else this.state.apiResponseError = "";
    }
    collectFormData() {
        return Object.entries(this.refs).reduce((acc, [fieldName, inputField])=>{
            acc[fieldName] = inputField.getValue();
            return acc;
        }, {});
    }
    getAPIResponseError() {
        return this.state.apiResponseError;
    }
}

},{"core/Dom":"i0KHM","../inputValidation":"g9Xmr","./submitButton":"iDUIo","./template":"bNWNu","hocs":"8D4Xk","components/link":"hjADv","pages/login/loginData":"4Pgai","core/Router":"52boY","pages/registration/registrationData":"5QT42","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDUIo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formSubmitButtonCallback", ()=>formSubmitButtonCallback);
parcelHelpers.export(exports, "FormSubmitButton", ()=>FormSubmitButton);
var _components = require("components");
async function formSubmitButtonCallback() {
    const { form  } = this.refs;
    this.state.apiResponseSuccess = "";
    form._validateForm();
    if (form.state.apiResponseError !== form.constructor.validationFailedError) await form.props.afterValidationCallback.call(form);
}
class FormSubmitButton extends (0, _components.Button) {
    constructor(refs, label){
        super({
            refs,
            props: {
                label: label,
                htmlClasses: [
                    "buttonAuth"
                ],
                events: {
                    click: [
                        formSubmitButtonCallback
                    ]
                }
            }
        });
    }
}

},{"components":"dHnah","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNWNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
function getInputFormTemplate(enumFormFieldsNames) {
    const tag = "form";
    let content = `
    {{#if formTitle}} 
      <h2 class='auth__form__title'>{{{ formTitle }}}</h2>
    {{/if}}
  `;
    Object.values(enumFormFieldsNames).forEach((fieldName)=>{
        content = `
      ${content}
      {{{ ${fieldName}_child }}}
    `;
    });
    content = `
      ${content}
      <div class="profile__data__apiSuccess">
        {{#if apiResponseSuccess }} 
          <span class="api-success"> {{ apiResponseSuccess }} </span>
        {{/if}}
      </div>
      <div class="profile__data__apiError">
        {{#if apiResponseError }} 
          <span> {{ apiResponseError }} </span>
        {{/if}}
      </div>
      {{#if isSubmitButtonNeeded}}
        <div class="auth__form__buttonContainer">
          {{{ submitButton }}}
          {{{ link }}}
        </div>
      {{/if}}
  `;
    return (0, _templateGeneratorDefault.default)({
        tag,
        content
    });
}
exports.default = getInputFormTemplate;

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8D4Xk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WithRouter", ()=>(0, _withRouter.WithRouter));
parcelHelpers.export(exports, "WithStore", ()=>(0, _withStore.WithStore));
var _withRouter = require("./withRouter");
var _withStore = require("./withStore");

},{"./withRouter":"kYXgc","./withStore":"45TSc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kYXgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WithRouter", ()=>WithRouter);
function WithRouter(ComponentClass) {
    return class WrappedComponent extends ComponentClass {
        _beforePropsAssignHook() {
            this.router = window.router;
            super._beforePropsAssignHook();
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45TSc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WithStore", ()=>WithStore);
function WithStore(ComponentClass) {
    class WithStoreComponent extends ComponentClass {
        _beforePropsAssignHook() {
            this.store = window.store;
            super._beforePropsAssignHook();
        }
    }
    return WithStoreComponent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52boY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>(0, _router.Router));
parcelHelpers.export(exports, "RouterCore", ()=>(0, _routerCore.RouterCore));
parcelHelpers.export(exports, "AppRoutes", ()=>(0, _routerData.AppRoutes));
parcelHelpers.export(exports, "AppRoutesData", ()=>(0, _routerData.AppRoutesData));
var _router = require("./router");
var _routerCore = require("./routerCore");
var _routerData = require("./routerData");

},{"./router":"iu0t7","./routerCore":"1JFO3","./routerData":"i3VLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iu0t7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router);
var _routerData = require("./routerData");
class Router {
    routes = {};
    isStarted = false;
    init() {
        this.routesData = (0, _routerData.AppRoutesData);
        const { store  } = window;
        Object.entries(this.routesData).forEach(([routeName, routeData])=>{
            this.use(routeName, ()=>{
                if (store.isUserAuthorized() || !routeData.needAuthorization) store.dispatch({
                    page: routeData.block
                });
                else store.dispatch({
                    page: this.routesData[(0, _routerData.AppRoutes).NotAuthorized].block
                });
            });
        });
    }
    start(startRoute, startPathname) {
        if (this.isStarted) return;
        // console.log(`Router starts on window path '${window.location.pathname}'`);
        // console.log(`Start route is '${startRoute}' on path '${startPathname}'`);
        if (startRoute !== (0, _routerData.AppRoutes).NotFound) window.history.replaceState({}, "", startPathname);
        this.onRouteChange(startRoute);
        window.onpopstate = (function() {
            const currentPath = this.getCurrentPath();
            // console.log(`ONPOPSTATE: ${currentPath}`);
            const { route  } = this.matchRouteByPath(currentPath);
            this.onRouteChange.call(this, route);
        }).bind(this);
        this.isStarted = true;
    }
    onRouteChange(route) {
        const renderFunction = this.routes[route] ?? this.routes[(0, _routerData.AppRoutes).NotFound];
        renderFunction();
    }
    use(route, renderFunction) {
        this.routes[route] = renderFunction;
        return this;
    }
    go(route) {
        // console.log(`Go to route '${route}'`);
        const { path  } = this.routesData[route];
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
    matchRouteByPath(pathname) {
        if (pathname === "/") {
            let route;
            if (window.store.isUserAuthorized()) route = (0, _routerData.AppRoutes).Chat;
            else route = (0, _routerData.AppRoutes).Login;
            const path = this.routesData[route].path;
            return {
                route,
                path
            };
        }
        let route1 = (0, _routerData.MapPathToRoute)[pathname];
        if (route1) ;
        else // console.log(`no routes matching pathname "${pathname}"`);
        route1 = (0, _routerData.AppRoutes).NotFound;
        return {
            route: route1,
            path: pathname
        };
    }
    getPathByRoute(route) {
        return this.routesData[route].path;
    }
    getCurrentPath() {
        return window.location.pathname;
    }
}

},{"./routerData":"i3VLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3VLU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppRoutes", ()=>AppRoutes);
parcelHelpers.export(exports, "AppRoutesData", ()=>AppRoutesData);
parcelHelpers.export(exports, "MapPathToRoute", ()=>MapPathToRoute);
var _appPages = require("pages/appPages");
let AppRoutes;
(function(AppRoutes) {
    AppRoutes["Login"] = "login_route";
    AppRoutes["Registration"] = "registration_route";
    AppRoutes["Chat"] = "chat_route";
    AppRoutes["Profile"] = "profile_route";
    AppRoutes["ChangePassword"] = "changePassword_route";
    AppRoutes["NotFound"] = "not_found_route";
    AppRoutes["NotAuthorized"] = "not_authorized_route";
})(AppRoutes || (AppRoutes = {}));
const AppRoutesData = {
    ["login_route"]: {
        path: "/",
        block: (0, _appPages.AppPages).Login,
        needAuthorization: false
    },
    ["registration_route"]: {
        path: "/sign-up",
        block: (0, _appPages.AppPages).Registration,
        needAuthorization: false
    },
    ["chat_route"]: {
        path: "/messenger",
        block: (0, _appPages.AppPages).Chat,
        needAuthorization: true
    },
    ["profile_route"]: {
        path: "/settings",
        block: (0, _appPages.AppPages).Profile,
        needAuthorization: true
    },
    ["changePassword_route"]: {
        path: "/сhangePassword",
        block: (0, _appPages.AppPages).ChangePassword,
        needAuthorization: true
    },
    ["not_found_route"]: {
        block: (0, _appPages.AppPages).NotFound,
        needAuthorization: false
    },
    ["not_authorized_route"]: {
        block: (0, _appPages.AppPages).Forbidden,
        needAuthorization: false
    }
};
const MapPathToRoute = {
    "/sign-up": "registration_route",
    "/login": "login_route",
    "/messenger": "chat_route",
    "/settings": "profile_route",
    "/changePassword": "changePassword_route"
};

},{"pages/appPages":"c7aIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JFO3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5QT42":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const regData = {
    page: "Registration Page",
    formClass: "auth__registration_form",
    inputFields: [
        {
            type: "text",
            name: "email",
            placeholder: "Введите email",
            label: "Почта"
        },
        {
            type: "text",
            name: "login",
            placeholder: "Введите логин",
            label: "Логин"
        },
        {
            type: "text",
            name: "first_name",
            placeholder: "Введите Имя",
            label: "Имя"
        },
        {
            type: "text",
            name: "second_name",
            placeholder: "Введите фамилию",
            label: "Фамилия"
        },
        {
            type: "text",
            name: "phone",
            placeholder: "Введите телефон",
            label: "Телефон"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Введите пароль",
            label: "Пароль"
        },
        {
            type: "password",
            name: "passwordCheck",
            placeholder: "Введите пароль повторно",
            label: "Пароль (еще раз)"
        }
    ],
    pageTitle: "Регистрация",
    link: {
        name: "Войти",
        htmlName: "Login",
        class: "auth__noaccount"
    },
    submitButtonLabel: "Зарегистрироваться",
    errorLabel: [
        "errorEmail",
        "errorLogin",
        "errorFirstName",
        "errorSecondName",
        "errorPhone",
        "errorPassword",
        "errorPasswordCheck"
    ]
};
exports.default = regData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Xncd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextComponent", ()=>(0, _component.TextComponent));
var _component = require("./component");

},{"./component":"ko4rU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ko4rU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextComponent", ()=>TextComponent);
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class TextComponent extends (0, _dom.Block) {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.props.htmlTag ??= "span";
    }
    render() {
        return (0, _templateDefault.default)(this.props.htmlTag);
    }
}

},{"core/Dom":"i0KHM","./template":"T8CXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"T8CXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
const content = `
{{#if text}}
  {{ text }}
{{else}}
  ""
{{/if}}
`;
exports.default = (tag)=>(0, _templateGeneratorDefault.default)({
        tag,
        content
    });

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UAPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TImageProps", ()=>(0, _сomponent.TImageProps));
parcelHelpers.export(exports, "ImageComponent", ()=>(0, _сomponent.ImageComponent));
var _сomponent = require("./сomponent");

},{"./сomponent":"dMexP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMexP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageComponent", ()=>ImageComponent);
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ImageComponent extends (0, _dom.Block) {
    render() {
        return 0, _templateDefault.default;
    }
}

},{"core/Dom":"i0KHM","./template":"lxdE4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxdE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateGenerator = require("utils/components/templateGenerator");
var _templateGeneratorDefault = parcelHelpers.interopDefault(_templateGenerator);
const tag = "img";
exports.default = (0, _templateGeneratorDefault.default)({
    tag,
    isSelfClosingTag: true
});

},{"utils/components/templateGenerator":"58Af7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4trj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>(0, _component.Modal));
var _component = require("./component");

},{"./component":"8OsrV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OsrV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _buttons = require("components/buttons");
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _closePng = require("static/img/close.png");
var _closePngDefault = parcelHelpers.interopDefault(_closePng);
class Modal extends (0, _dom.Block) {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.contentType = "";
        this.children.content = new (0, _dom.Block)();
        this.children.closeButton = this._createCloseButton();
    }
    _createCloseButton() {
        return new (0, _buttons.Button)({
            refs: {
                modal: this
            },
            props: {
                htmlStyle: {
                    "background-image": (0, _closePngDefault.default)
                },
                htmlClasses: [
                    "modal__closeButton"
                ],
                events: {
                    click: [
                        function() {
                            this.refs.modal.toggleVisibility();
                        }
                    ]
                }
            }
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
    getContentType() {
        return this.contentType;
    }
    setContent(newContentBlock) {
        const oldContentType = this.contentType;
        const newContentType = newContentBlock.componentName;
        // console.log(`MODAL CONTENT: ${oldContentType} -> ${newContentType}`);
        this.setChildByPath("content", newContentBlock);
    }
    toggleVisibility(state) {
        this.toggleHtmlClass("modal__show", state);
    }
}

},{"components/buttons":"fWrjK","core/Dom":"i0KHM","./template":"kPoiY","static/img/close.png":"aAzW4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWrjK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TButtonProps", ()=>(0, _basicButton.TButtonProps));
parcelHelpers.export(exports, "Button", ()=>(0, _basicButton.Button));
parcelHelpers.export(exports, "LogoutButton", ()=>(0, _logoutButton.LogoutButton));
var _basicButton = require("./basicButton");
var _logoutButton = require("./logout-button");

},{"./basicButton":"5KyQc","./logout-button":"7lyDT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lyDT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogoutButton", ()=>(0, _component.LogoutButton));
var _component = require("./component");

},{"./component":"hgX9X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgX9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogoutButton", ()=>LogoutButton);
var _components = require("hocs/components");
var _services = require("services");
class LogoutButton extends (0, _components.WithRouterButton) {
    constructor(props){
        super({
            props: {
                label: "Выйти из системы",
                htmlClasses: [
                    "chat__settings__item"
                ],
                events: {
                    click: [
                        ()=>{
                            (0, _services.AuthorizationService).logout();
                        }
                    ]
                },
                ...props
            }
        });
    }
}

},{"hocs/components":"THcGa","services":"f5PO7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"THcGa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WithStoreBlock", ()=>WithStoreBlock);
parcelHelpers.export(exports, "WithStoreButton", ()=>WithStoreButton);
parcelHelpers.export(exports, "WithStoreInput", ()=>WithStoreInput);
parcelHelpers.export(exports, "WithStoreFileInput", ()=>WithStoreFileInput);
parcelHelpers.export(exports, "WithStoreTextComponent", ()=>WithStoreTextComponent);
parcelHelpers.export(exports, "WithStoreValidatedInput", ()=>WithStoreValidatedInput);
parcelHelpers.export(exports, "WithStoreImageComponent", ()=>WithStoreImageComponent);
parcelHelpers.export(exports, "WithRouterLink", ()=>WithRouterLink);
parcelHelpers.export(exports, "WithRouterButton", ()=>WithRouterButton);
parcelHelpers.export(exports, "WithRouterImage", ()=>WithRouterImage);
var _dom = require("core/Dom");
var _components = require("components");
var _buttons = require("components/buttons");
var _inputs = require("components/inputs");
var _withStore = require("../withStore");
var _withRouter = require("../withRouter");
const WithStoreBlock = (0, _withStore.WithStore)((0, _dom.Block));
const WithStoreButton = (0, _withStore.WithStore)((0, _buttons.Button));
const WithStoreInput = (0, _withStore.WithStore)((0, _inputs.Input));
const WithStoreFileInput = (0, _withStore.WithStore)((0, _inputs.FileInput));
const WithStoreTextComponent = (0, _withStore.WithStore)((0, _components.TextComponent));
const WithStoreValidatedInput = (0, _withStore.WithStore)((0, _inputs.InputWithValidation));
const WithStoreImageComponent = (0, _withStore.WithStore)((0, _components.ImageComponent));
const WithRouterLink = (0, _withRouter.WithRouter)((0, _components.Link));
const WithRouterButton = (0, _withRouter.WithRouter)((0, _buttons.Button));
const WithRouterImage = (0, _withRouter.WithRouter)((0, _components.ImageComponent));

},{"core/Dom":"i0KHM","components":"dHnah","components/buttons":"fWrjK","components/inputs":"fRfcK","../withStore":"45TSc","../withRouter":"kYXgc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5PO7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpService", ()=>(0, _signup.SignUpService));
parcelHelpers.export(exports, "AuthorizationService", ()=>(0, _authorization.AuthorizationService));
parcelHelpers.export(exports, "ProfileService", ()=>(0, _profile.ProfileService));
// export { ChangePasswordService } from "./profile";
parcelHelpers.export(exports, "ChatsService", ()=>(0, _chats.ChatsService));
parcelHelpers.export(exports, "SocketsCreator", ()=>(0, _sockets.SocketsCreator));
var _signup = require("./signup");
var _authorization = require("./authorization");
var _profile = require("./profile");
var _chats = require("./chats");
var _sockets = require("./sockets");

},{"./signup":"5UN4o","./authorization":"3hYWC","./profile":"iAQR1","./chats":"NtgIu","./sockets":"7Ucge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UN4o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpServiceClass", ()=>SignUpServiceClass);
parcelHelpers.export(exports, "SignUpService", ()=>SignUpService);
var _api = require("api");
class SignUpServiceClass {
    async signup(data, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.SignUpAPI).signup(data);
            status = request.status;
            response = request.response;
            // console.log(
            //   `SIGN UP REQUEST: status ${status}; response: ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
        } catch (error) {
            console.error(`SIGN UP REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
}
const SignUpService = new SignUpServiceClass();

},{"api":"d9ci3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9ci3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpAPI", ()=>(0, _signup.SignUpAPI));
parcelHelpers.export(exports, "AuthorizationAPI", ()=>(0, _authorization.AuthorizationAPI));
parcelHelpers.export(exports, "ProfileAPI", ()=>(0, _profile.ProfileAPI));
parcelHelpers.export(exports, "ChatsAPI", ()=>(0, _chats.ChatsAPI));
parcelHelpers.export(exports, "baseURL", ()=>(0, _httptransport.baseURL));
var _signup = require("./signup");
var _authorization = require("./authorization");
var _profile = require("./profile");
var _chats = require("./chats");
var _httptransport = require("./HTTPTransport");

},{"./signup":"g5TLP","./authorization":"7xx7g","./profile":"f7Sx5","./chats":"1Q8Wj","./HTTPTransport":"h2QNx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5TLP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpAPI", ()=>SignUpAPI);
var _httptransport = require("./HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class SignUpAPIClass {
    signup(data) {
        return (0, _httptransportDefault.default).post("auth/signup", {
            data
        });
    }
}
const SignUpAPI = new SignUpAPIClass();

},{"./HTTPTransport":"h2QNx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2QNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baseURL", ()=>baseURL);
let METHODS;
(function(METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
const DefualtHeaders = {
    ["GET"]: {
        accept: "application/json"
    },
    ["POST"]: {
        "Content-Type": "application/json",
        accept: "application/json"
    },
    ["PUT"]: {
        "Content-Type": "application/json",
        accept: "application/json"
    },
    ["DELETE"]: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
};
function queryStringify(data) {
    if (typeof data !== "object") throw new Error("Data must be object");
    const keys = Object.keys(data);
    return keys.reduce((result, key, index)=>{
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}
class HTTPTransport {
    baseURL = "";
    constructor({ baseURL  }){
        this.baseURL = baseURL;
    }
    get = (url, options = {})=>{
        const { data  } = options;
        if (data) {
            url = `${url}${queryStringify(data)}`;
            options.data = undefined;
        }
        return this.request(url, {
            ...options,
            method: "GET"
        });
    };
    post = (url, options = {})=>{
        return this.request(url, {
            ...options,
            method: "POST"
        });
    };
    put = (url, options = {})=>{
        return this.request(url, {
            ...options,
            method: "PUT"
        });
    };
    delete = (url, options = {})=>{
        return this.request(url, {
            ...options,
            method: "DELETE"
        });
    };
    request = (apiURL, options)=>{
        const { method , data , timeout =5000  } = options;
        const headers = {
            ...DefualtHeaders[method],
            ...options.headers
        };
        return new Promise((resolve, reject)=>{
            if (!method) {
                reject(new Error("No request method provided"));
                return;
            }
            const xhr = new XMLHttpRequest();
            const url = `${this.baseURL}/${apiURL}`;
            xhr.open(method, url);
            xhr.responseType = "json";
            xhr.withCredentials = true;
            Object.entries(headers).forEach(([key, value])=>{
                if (value !== "multipart/form-data") xhr.setRequestHeader(key, value);
            });
            xhr.onload = ()=>{
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;
            if (!data) xhr.send();
            else if (data instanceof FormData) xhr.send(data);
            else xhr.send(JSON.stringify(data));
        });
    };
}
const baseURL = "https://ya-praktikum.tech/api/v2";
exports.default = new HTTPTransport({
    baseURL
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xx7g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthorizationAPI", ()=>AuthorizationAPI);
var _httptransport = require("./HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class AuthorizationAPIClass {
    login(data) {
        return (0, _httptransportDefault.default).post("auth/signin", {
            data
        });
    }
    me() {
        return (0, _httptransportDefault.default).get("auth/user");
    }
    logout() {
        return (0, _httptransportDefault.default).post("auth/logout");
    }
}
const AuthorizationAPI = new AuthorizationAPIClass();

},{"./HTTPTransport":"h2QNx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7Sx5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileAPI", ()=>ProfileAPI);
var _httptransport = require("./HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class ProfileAPIClass {
    changeProfile(data) {
        return (0, _httptransportDefault.default).put("user/profile", {
            data
        });
    }
    changeAvatar(data) {
        return (0, _httptransportDefault.default).put("user/profile/avatar", {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data
        });
    }
    getProfileData(userID) {
        return (0, _httptransportDefault.default).get(`user/${userID}`);
    }
}
const ProfileAPI = new ProfileAPIClass();

},{"./HTTPTransport":"h2QNx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Q8Wj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsAPI", ()=>ChatsAPI);
var _httptransport = require("./HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class ChatsAPIClass {
    getChats() {
        return (0, _httptransportDefault.default).get("chats");
    }
    createChat(data) {
        return (0, _httptransportDefault.default).post("chats", {
            data
        });
    }
    deleteChat(data) {
        return (0, _httptransportDefault.default).delete("chats", {
            data
        });
    }
    getChatUsers(chatID) {
        return (0, _httptransportDefault.default).get(`chats/${chatID}/users`);
    }
    getChatToken(chatID) {
        return (0, _httptransportDefault.default).post(`chats/token/${chatID}`);
    }
    addUsersToChat(data) {
        return (0, _httptransportDefault.default).put("chats/users", {
            data
        });
    }
    changeAvatar(data) {
        return (0, _httptransportDefault.default).put("chats/avatar", {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data
        });
    }
}
const ChatsAPI = new ChatsAPIClass();

},{"./HTTPTransport":"h2QNx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hYWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumLoginAPIErrors", ()=>EnumLoginAPIErrors);
parcelHelpers.export(exports, "AuthorizationService", ()=>AuthorizationService);
var _api = require("api");
var _router = require("core/Router");
var _api1 = require("utils/api");
var _initApp = require("services/initApp");
let EnumLoginAPIErrors;
(function(EnumLoginAPIErrors) {
    EnumLoginAPIErrors["AlreadyInSystem"] = "User already in system";
})(EnumLoginAPIErrors || (EnumLoginAPIErrors = {}));
class AuthorizationServiceClass {
    async getUser() {
        try {
            const request = await (0, _api.AuthorizationAPI).me();
            const { status , response  } = request;
            // console.log(
            //   `GET USER REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            return response;
        } catch (error) {
            console.error(`GET USER REQUEST ERROR: ${error}`);
            throw error;
        }
    }
    async login(data, afterRequestCallback = ()=>{}) {
        try {
            const requestLogin = await (0, _api.AuthorizationAPI).login(data);
            const { status , response  } = requestLogin;
            // console.log(
            //   `LOGIN REQUEST: status ${status}; response ${JSON.stringify(response)}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response) || response.reason === "User already in system") {
                const userResponse = await this.getUser();
                if (!(0, _api1.APIResponseHasError)(userResponse)) await (0, _initApp.initAppData)(userResponse.id);
                else throw new Error(`Unexpecter User Response After Login: ${userResponse.reason}`);
                window.router.go((0, _router.AppRoutes).Chat);
            }
            return response;
        } catch (error) {
            console.error(`LOGIN REQUEST ERROR: ${error}`);
            throw error;
        }
    }
    async logout() {
        try {
            const request = await (0, _api.AuthorizationAPI).logout();
            const { status , response  } = request;
            // console.log(
            //   `LOGIN LOGOUT: status ${status}; response ${JSON.stringify(response)}`
            // );
            window.store.dispatch({
                user: null
            });
            window.store.dispatch({
                currentChatID: null
            });
            window.router.go((0, _router.AppRoutes).Login);
            return response;
        } catch (error) {
            console.error(`LOGOUT REQUEST ERROR: ${error}`);
            throw error;
        }
    }
}
const AuthorizationService = new AuthorizationServiceClass();

},{"api":"d9ci3","core/Router":"52boY","utils/api":"i2lTI","services/initApp":"4yLHz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2lTI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "APIResponseHasError", ()=>(0, _responseHasError.hasError));
parcelHelpers.export(exports, "transformLoginFormDatatoAPI", ()=>(0, _toApiDataTransformers.transformLoginFormDatatoAPI));
parcelHelpers.export(exports, "transformSignUpFormDatatoAPI", ()=>(0, _toApiDataTransformers.transformSignUpFormDatatoAPI));
parcelHelpers.export(exports, "transformProfileFormDatatoAPI", ()=>(0, _toApiDataTransformers.transformProfileFormDatatoAPI));
parcelHelpers.export(exports, "transformAvatarURL", ()=>(0, _fromApiDataTransformers.transformAvatarURL));
parcelHelpers.export(exports, "transformProfileAPIResponseToUserData", ()=>(0, _fromApiDataTransformers.transformProfileAPIResponseToUserData));
parcelHelpers.export(exports, "transformChatsGetResponseToChatsData", ()=>(0, _fromApiDataTransformers.transformChatsGetResponseToChatsData));
parcelHelpers.export(exports, "transformChatGetTokenResponseToToken", ()=>(0, _fromApiDataTransformers.transformChatGetTokenResponseToToken));
parcelHelpers.export(exports, "transformWebsocketMessageDTOtoAppMessage", ()=>(0, _fromApiDataTransformers.transformWebsocketMessageDTOtoAppMessage));
var _responseHasError = require("./response-has-error");
var _toApiDataTransformers = require("./to-api-data-transformers");
var _fromApiDataTransformers = require("./from-api-data-transformers");

},{"./response-has-error":"aV5sk","./to-api-data-transformers":"gwV72","./from-api-data-transformers":"6KHu3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aV5sk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasError", ()=>hasError);
function hasError(response) {
    return response && response.reason;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwV72":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformSignUpFormDatatoAPI", ()=>transformSignUpFormDatatoAPI);
parcelHelpers.export(exports, "transformLoginFormDatatoAPI", ()=>transformLoginFormDatatoAPI);
parcelHelpers.export(exports, "transformProfileFormDatatoAPI", ()=>transformProfileFormDatatoAPI);
parcelHelpers.export(exports, "transformAddUsersFormDataToAPI", ()=>transformAddUsersFormDataToAPI);
parcelHelpers.export(exports, "transformChatIDToDeleteAPI", ()=>transformChatIDToDeleteAPI);
function transformSignUpFormDatatoAPI(data) {
    return {
        first_name: data.first_name,
        second_name: data.second_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone
    };
}
function transformLoginFormDatatoAPI(data) {
    return {
        login: data.login,
        password: data.password
    };
}
function transformProfileFormDatatoAPI(data) {
    return {
        first_name: data.first_name,
        second_name: data.second_name,
        display_name: data.display_name,
        login: data.login,
        email: data.email,
        phone: data.phone
    };
}
function transformAddUsersFormDataToAPI(data) {
    return {
        chatId: parseInt(data.chatID, 10),
        users: data.usersList.map((userID)=>parseInt(userID, 10))
    };
}
function transformChatIDToDeleteAPI(chatID) {
    return {
        chatId: parseInt(chatID, 10)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KHu3":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/naming-convention */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformAvatarURL", ()=>transformAvatarURL);
parcelHelpers.export(exports, "transformProfileAPIResponseToUserData", ()=>transformProfileAPIResponseToUserData);
parcelHelpers.export(exports, "transformChatsGetResponseToChatsData", ()=>transformChatsGetResponseToChatsData);
parcelHelpers.export(exports, "transformChatUsersGetResponseToChatsUsersData", ()=>transformChatUsersGetResponseToChatsUsersData);
parcelHelpers.export(exports, "transformChatGetTokenResponseToToken", ()=>transformChatGetTokenResponseToToken);
parcelHelpers.export(exports, "transformWebsocketMessageDTOtoAppMessage", ()=>transformWebsocketMessageDTOtoAppMessage);
var _api = require("api");
function transformAvatarURL(url) {
    return url ? `${0, _api.baseURL}/resources${url}` : url;
}
function transformProfileAPIResponseToUserData(response) {
    return {
        id: response.id,
        firstName: response.first_name,
        secondName: response.second_name,
        displayName: response.display_name ? response.display_name : "",
        login: response.login,
        email: response.email,
        phone: response.phone,
        avatar: transformAvatarURL(response.avatar)
    };
}
function transformChatsGetResponseToChatsData(response) {
    return response.reduce((acc, chatData)=>{
        const { id , title , avatar , last_message , unread_count  } = chatData;
        acc[id] = {
            title,
            unreadCount: unread_count,
            avatar: transformAvatarURL(avatar),
            lastMessage: last_message
        };
        return acc;
    }, {});
}
function transformChatUsersGetResponseToChatsUsersData(response) {
    return response.reduce((acc, userData)=>{
        acc[userData.id.toString()] = {
            displayName: userData.display_name
        };
        return acc;
    }, {});
}
function transformChatGetTokenResponseToToken(response) {
    return response.token;
}
function transformWebsocketMessageDTOtoAppMessage(message) {
    return {
        userID: message.user_id.toString(),
        content: message.content,
        time: message.time
    };
}

},{"api":"d9ci3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAQR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileService", ()=>ProfileService);
var _api = require("api");
var _api1 = require("utils/api");
class ProfileServiceClass {
    async getUserProfile(userID) {
        let status;
        let response;
        try {
            const request = await (0, _api.ProfileAPI).getProfileData(userID);
            status = request.status;
            response = request.response;
            // console.log(
            //   `PROFILE WITH ID(${userID}) GET REQUEST: status ${status}; response: ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (!(0, _api1.APIResponseHasError)(response)) {
                const user = (0, _api1.transformProfileAPIResponseToUserData)(response);
                window.store.dispatch({
                    user
                });
            }
        } catch (error) {
            console.error(`PROFILE WITH ID(${userID}) GET REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async changeUserProfile(data, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ProfileAPI).changeProfile(data);
            status = request.status;
            response = request.response;
            // console.log(
            //   `PROFILE CHANGE REQUEST: status ${status}; response: ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
        } catch (error) {
            console.error(`PROFILE CHANGE REQUEST GET REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async changeUserAvatar(avatarFormData, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ProfileAPI).changeAvatar(avatarFormData);
            status = request.status;
            response = request.response;
            // console.log(
            //   `PROFILE CHANGE AVATAR REQUEST: status ${status}; response: ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
        } catch (error) {
            console.error(`PROFILE CHANGE AVATAR REQUEST GET REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
}
const ProfileService = new ProfileServiceClass();

},{"api":"d9ci3","utils/api":"i2lTI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NtgIu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsServiceClass", ()=>ChatsServiceClass);
parcelHelpers.export(exports, "ChatsService", ()=>ChatsService);
var _api = require("api");
var _api1 = require("utils/api");
var _fromApiDataTransformers = require("utils/api/from-api-data-transformers");
var _toApiDataTransformers = require("utils/api/to-api-data-transformers");
var _objectsHandle = require("utils/objects-handle");
var _services = require("services");
class ChatsServiceClass {
    async getChats(afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ChatsAPI).getChats();
            status = request.status;
            response = request.response;
            // console.log(
            //   `GET CHATS REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response)) window.store.dispatch({
                chats: (0, _api1.transformChatsGetResponseToChatsData)(response)
            });
        } catch (error) {
            console.error(`GET CHATS REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async createChat(data, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ChatsAPI).createChat(data);
            status = request.status;
            response = request.response;
            // console.log(
            //   `CREATE CHAT REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response)) {
                const chatID = response.id.toString();
                const socket = await (0, _services.SocketsCreator).createChatSocket({
                    chatID
                });
                window.store.setSocketByChatID(chatID, socket);
                await this.getChats();
            }
        } catch (error) {
            console.error(`CREATE CHAT REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async deleteChat(chatID, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ChatsAPI).deleteChat((0, _toApiDataTransformers.transformChatIDToDeleteAPI)(chatID));
            status = request.status;
            response = request.response;
            // console.log(
            //   `DELETE CHAT(${chatID}) REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response)) {
                const currentChats = window.store.getChatsDataByPath();
                const newChats = (0, _objectsHandle.objectWithoutKey)(currentChats, chatID);
                window.store.dispatch({
                    chats: newChats
                });
                window.store.dispatch({
                    currentChatID: null
                });
            }
        } catch (error) {
            console.error(`DELETE CHAT(${chatID}) REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async getChatUsers(chatID, afterRequestCallback) {
        let status;
        let response;
        try {
            const request = await (0, _api.ChatsAPI).getChatUsers(chatID);
            status = request.status;
            response = request.response;
            // console.log(
            //   `GET CHAT(${chatID}) USERS REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
        } catch (error) {
            console.error(`GET CHAT(${chatID}) REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async addUsersToChat(data, afterRequestCallback) {
        let status;
        let response;
        const chatID = data.chatId;
        try {
            const request = await (0, _api.ChatsAPI).addUsersToChat(data);
            status = request.status;
            response = request.response;
            const usersList = data.users;
            // console.log(
            //   `ADD USERS TO CHAT(${chatID}) REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response)) {
                const responseChatUsers = await this.getChatUsers(chatID.toString());
                const usersData = (0, _fromApiDataTransformers.transformChatUsersGetResponseToChatsUsersData)(responseChatUsers);
                usersList.forEach((userID)=>{
                    window.store.setStateByPath(`chatsUsers.${userID}`, usersData[userID]);
                });
            }
        } catch (error) {
            console.error(`ADD USERS TO CHAT(${chatID}) REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
    async changeAvatar(avatarPutForm, afterRequestCallback) {
        let status;
        let response;
        let chatID;
        try {
            const request = await (0, _api.ChatsAPI).changeAvatar(avatarPutForm);
            status = request.status;
            response = request.response;
            chatID = avatarPutForm.get("chatId");
            // console.log(
            //   `CHANGE CHAT(${chatID}) AVATAR REQUEST: status ${status}; response ${JSON.stringify(
            //     response
            //   )}`
            // );
            if (afterRequestCallback) await afterRequestCallback(response);
            if (!(0, _api1.APIResponseHasError)(response)) {
                const avatar = (0, _api1.transformAvatarURL)(response.avatar);
                window.store.setStateByPath(`chats.${chatID}.avatar`, avatar);
            }
        } catch (error) {
            console.error(`CHANGE CHAT(${chatID}) AVATAR REQUEST ERROR: ${error}`);
            throw error;
        }
        return response;
    }
}
const ChatsService = new ChatsServiceClass();

},{"api":"d9ci3","utils/api":"i2lTI","utils/api/from-api-data-transformers":"6KHu3","utils/api/to-api-data-transformers":"gwV72","utils/objects-handle":"kOfSo","services":"f5PO7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ucge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SocketsCreator", ()=>(0, _socketsCreator.SocketsCreator));
parcelHelpers.export(exports, "ChatMessagesHandler", ()=>(0, _chatMessagesHandler.ChatMessagesHandler));
var _socketsCreator = require("./sockets-creator");
var _chatMessagesHandler = require("./chat-messages-handler");

},{"./sockets-creator":"3MBUc","./chat-messages-handler":"aSyLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3MBUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SocketsCreatorClass", ()=>SocketsCreatorClass);
parcelHelpers.export(exports, "SocketsCreator", ()=>SocketsCreator);
var _fromApiDataTransformers = require("utils/api/from-api-data-transformers");
var _api = require("api");
var _chatMessagesHandler = require("./chat-messages-handler");
class SocketsCreatorClass {
    async getChatToken(chatID, afterRequestCallback) {
        const request = await (0, _api.ChatsAPI).getChatToken(chatID);
        const { status , response  } = request;
        // console.log(
        //   `GET CHAT(${chatID}) TOKEN REQUEST: status ${status}; response ${JSON.stringify(
        //     response
        //   )}`
        // );
        if (afterRequestCallback) await afterRequestCallback(response);
        return response;
    }
    async createChatSocket({ userID , chatID  }) {
        if (!userID) userID = window.store.getUserID();
        const chatTokenResponse = await this.getChatToken(chatID);
        const chatToken = (0, _fromApiDataTransformers.transformChatGetTokenResponseToToken)(chatTokenResponse);
        return new (0, _chatMessagesHandler.ChatMessagesHandler)({
            userID,
            chatID,
            chatToken
        });
    }
    async createAllChatsSockets() {
        const { store  } = window;
        const userID = store.getUserID();
        const chatsSockets = (await Promise.all(Object.keys(store.getChatsDataByPath()).map(async (chatID)=>{
            return [
                chatID,
                await this.createChatSocket({
                    userID,
                    chatID
                })
            ];
        }))).reduce((acc, [chatID, socket])=>{
            acc[chatID] = socket;
            return acc;
        }, {});
        await Promise.all(Object.values(chatsSockets).map(async (socket)=>socket.waitSocketConnection()));
        window.store.dispatch({
            chatsSockets
        });
    }
}
const SocketsCreator = new SocketsCreatorClass();

},{"utils/api/from-api-data-transformers":"6KHu3","api":"d9ci3","./chat-messages-handler":"aSyLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSyLt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatMessagesHandler", ()=>ChatMessagesHandler);
var _api = require("utils/api");
var _socketClass = require("./socket-class");
const allMessagesReceiver = function(messagesBatch) {
    this._setMessagesBatch(messagesBatch);
};
class ChatMessagesHandler extends (0, _socketClass.ChatWebSocket) {
    static messagesGetLimit = 20;
    currentBatch = -1;
    allMessagesReceivedStatus = false;
    allMessages = [];
    _setMessagesBatch(messagesBatch) {
        if (messagesBatch.length === 0) {
            this.allMessagesReceivedStatus = true;
            return;
        }
        this.currentBatch += 1;
        const receivedMessages = messagesBatch.map((msg)=>(0, _api.transformWebsocketMessageDTOtoAppMessage)(msg));
        this.allMessages = [
            ...this.allMessages,
            ...receivedMessages
        ];
    }
    async _getAllMessagesFromBatch(currentBatch) {
        const offset = currentBatch * ChatMessagesHandler.messagesGetLimit;
        this.getMessagesByOffset(offset);
        let messagesBatchAwaiter;
        await new Promise((resolve, reject)=>{
            messagesBatchAwaiter = setInterval(()=>{
                if (this.socket.readyState > 1) {
                    reject(new Error("Socket Closed While Awaiting Old Messages Get Responses"));
                    return;
                }
                if (this.allMessagesReceivedStatus || this.currentBatch === currentBatch) resolve();
            }, 50);
        }).catch((error)=>{
            console.error(`ERROR OCCURED ON BATCH ${currentBatch} WHILE RECEIVING ALL MESSAGES: ${error}`);
            this._resetAllMessageReceivingStatus();
        }).finally(()=>{
            clearInterval(messagesBatchAwaiter);
        });
        if (!this.allMessagesReceivedStatus) await this._getAllMessagesFromBatch(currentBatch + 1);
    }
    async getAllMessages() {
        this.messagesArrayHander = allMessagesReceiver.bind(this);
        await this._getAllMessagesFromBatch(0);
        this.allMessagesReceivedStatus;
        const { allMessages  } = this;
        this._resetAllMessageReceivingStatus();
        return allMessages;
    }
    _resetAllMessageReceivingStatus() {
        this.messagesArrayHander = null;
        this.allMessages = [];
        this.allMessagesReceivedStatus = false;
        this.currentBatch = -1;
    }
}

},{"utils/api":"i2lTI","./socket-class":"2qxfp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qxfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatWebSocket", ()=>ChatWebSocket);
var _api = require("utils/api");
class ChatWebSocket {
    messagesArrayHander = null;
    constructor(argsObject){
        Object.assign(this, argsObject);
        this._createSocket();
    }
    _createSocket() {
        const { userID , chatID , chatToken  } = this;
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${chatToken}`);
        this.socket = socket;
        const ping = setInterval(function() {
            socket.send(JSON.stringify({
                type: "ping"
            }));
        }, 30000);
        socket.addEventListener("close", (event)=>{
            if (!event.wasClean) ;
            else // console.log(
            //   `Chat(${chatID}) Socket Closed With Error: code ${event.code}, reason ${event.reason}`
            // );
            clearInterval(ping);
        });
        socket.addEventListener("message", (function(event) {
            let message;
            try {
                message = JSON.parse(event.data);
            } catch (err) {
                // console.log(
                //   `ERROR ON PARSING MESSAGE ${JSON.stringify(
                //     message
                //   )} ON CHAT(${chatID}) SOCKET`
                // );
                return;
            }
            if (message.type === "pong" || message.type === "user connected") return;
            if (Array.isArray(message) && this.messagesArrayHander) {
                this.messagesArrayHander(message);
                return;
            }
            // console.log(
            //   `MESSAGE OF '${message.type}' TYPE RECEIVED: '${JSON.stringify(
            //     message
            //   )}'`
            // );
            message = (0, _api.transformWebsocketMessageDTOtoAppMessage)(message);
            const messagesStatePath = `chatsMessages.${chatID}`;
            const currentMessages = window.store.chatHasMessages(chatID) ? window.store.getStateValueByPath(messagesStatePath) : [];
            window.store.setStateByPath(messagesStatePath, [
                message,
                ...currentMessages
            ], true);
        }).bind(this));
        socket.addEventListener("error", ()=>{
            clearInterval(ping);
        });
    }
    send(content, type = "message") {
        this.socket.send(JSON.stringify({
            content,
            type
        }));
    }
    getMessagesByOffset(offset) {
        return this.socket.send(JSON.stringify({
            content: offset.toString(),
            type: "get old"
        }));
    }
    async waitSocketConnection() {
        await new Promise((resolve)=>{
            const awaiter = setInterval(()=>{
                if (this.socket.readyState === 1) {
                    resolve();
                    clearInterval(awaiter);
                // console.log(`SOCKET OF CHAT(${this.chatID}) CONNECTED`);
                }
            }, 50);
        });
    }
}

},{"utils/api":"i2lTI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPoiY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div class="modal">
    <div class="modal__background"></div>
    <div class="modal__container">
      {{{ content }}}
      {{{ closeButton }}}
    </div>
  </div>;
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAzW4":[function(require,module,exports) {
module.exports = require("6ea38386b7012cc7").getBundleURL("7UhFu") + "close.5ceff4ea.png" + "?" + Date.now();

},{"6ea38386b7012cc7":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ljkAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "afterValidationCallback", ()=>afterValidationCallback);
var _services = require("services");
var _authorization = require("services/authorization");
var _api = require("utils/api");
async function afterRequestCallback(response) {
    if ((0, _api.APIResponseHasError)(response) && response.reason !== (0, _authorization.EnumLoginAPIErrors).AlreadyInSystem) this.state.apiResponseError = response.reason;
}
async function afterValidationCallback() {
    const formData = this.collectFormData();
    const apiData = (0, _api.transformLoginFormDatatoAPI)(formData);
    // console.log(`API data: ${JSON.stringify(apiData)}`);
    await (0, _services.AuthorizationService).login(apiData, afterRequestCallback.bind(this));
}

},{"services":"f5PO7","services/authorization":"3hYWC","utils/api":"i2lTI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7qrY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _enumInputFields.EnumInputFields));
parcelHelpers.export(exports, "MapInputFieldsProps", ()=>(0, _inputFields.MapInputFieldsProps));
var _enumInputFields = require("./enumInputFields");
var _inputFields = require("./inputFields");

},{"./enumInputFields":"1jcMp","./inputFields":"gIXcI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jcMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumInputFields", ()=>EnumInputFields);
let EnumInputFields;
(function(EnumInputFields) {
    EnumInputFields["Login"] = "login";
    EnumInputFields["Password"] = "password";
})(EnumInputFields || (EnumInputFields = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIXcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapInputFieldsProps", ()=>MapInputFieldsProps);
var _enumInputFields = require("./enumInputFields");
var _inputValidators = require("./inputValidators");
const MapInputFieldsProps = {
    [(0, _enumInputFields.EnumInputFields).Login]: {
        htmlAttributes: {
            name: "login",
            placeholder: "Введите логин"
        },
        htmlClasses: [
            "auth__form__login__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Login],
        label: "Логин",
        mainClass: "auth__form__"
    },
    [(0, _enumInputFields.EnumInputFields).Password]: {
        htmlAttributes: {
            name: "password",
            placeholder: "Введите пароль",
            type: "password"
        },
        htmlClasses: [
            "auth__form__password__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Password],
        label: "Пароль",
        mainClass: "auth__form__"
    }
};

},{"./enumInputFields":"1jcMp","./inputValidators":"eEVDO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEVDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormValidators", ()=>FormValidators);
var _formInputValidator = require("utils/form-input-validator");
var _enumInputFields = require("./enumInputFields");
const FormValidators = [
    {
        field: (0, _enumInputFields.EnumInputFields).Login,
        validatorsList: [
            (0, _formInputValidator.validateLoginRegex)
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Password,
        validatorsList: [
            (0, _formInputValidator.validatePasswordRegex)
        ]
    }
].reduce((acc, { field , validatorsList  })=>{
    validatorsList.unshift((0, _formInputValidator.validateNotEmptyValue));
    const validator = (0, _formInputValidator.makeValidator)({
        validatorsList
    });
    acc[field] = {
        blur: [
            validator
        ]
    };
    return acc;
}, {});

},{"utils/form-input-validator":"4RFK4","./enumInputFields":"1jcMp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RFK4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeValidator", ()=>(0, _makeValidator.makeValidator));
parcelHelpers.export(exports, "TInputSingleValidator", ()=>(0, _makeValidator.TInputSingleValidator));
parcelHelpers.export(exports, "validateNotEmptyValue", ()=>(0, _commonValidators.validateNotEmptyValue));
parcelHelpers.export(exports, "validateLoginRegex", ()=>(0, _commonValidators.validateLoginRegex));
parcelHelpers.export(exports, "validatePasswordRegex", ()=>(0, _commonValidators.validatePasswordRegex));
parcelHelpers.export(exports, "validateNameRegex", ()=>(0, _commonValidators.validateNameRegex));
parcelHelpers.export(exports, "validatePhoneRegex", ()=>(0, _commonValidators.validatePhoneRegex));
parcelHelpers.export(exports, "validateEmailRegex", ()=>(0, _commonValidators.validateEmailRegex));
parcelHelpers.export(exports, "validateTwoFieldsMatching", ()=>(0, _commonValidators.validateTwoFieldsMatching));
var _makeValidator = require("./make-validator");
var _commonValidators = require("./common-validators");

},{"./make-validator":"6rqZs","./common-validators":"lJxTH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rqZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeValidator", ()=>makeValidator);
function makeValidator({ validatorsList  }) {
    return function validate() {
        let error = "";
        const value = this.getValue();
        for (const validator of validatorsList){
            error = validator.call(this, value);
            if (error !== "") break;
        }
        this.state.inputError = error;
        this.setPropByPath("htmlAttributes.value", value);
        return !error;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJxTH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateNotEmptyValue", ()=>validateNotEmptyValue);
parcelHelpers.export(exports, "validateLoginRegex", ()=>validateLoginRegex);
parcelHelpers.export(exports, "validatePasswordRegex", ()=>validatePasswordRegex);
parcelHelpers.export(exports, "validateTwoFieldsMatching", ()=>validateTwoFieldsMatching);
parcelHelpers.export(exports, "validateNameRegex", ()=>validateNameRegex);
parcelHelpers.export(exports, "validatePhoneRegex", ()=>validatePhoneRegex);
parcelHelpers.export(exports, "validateEmailRegex", ()=>validateEmailRegex);
function validateNotEmptyValue(value) {
    if (value === "") return "Пустое поле";
    return "";
}
function validateLoginRegex(value) {
    if (value.length < 3) return "Длина должна состовлять не менее 3 символов";
    if (!value.match("^[a-zA-Z0-9_-]+$")) return "Только латиниские буквы, цифры";
    if (!value.match("[a-zA-Z]+")) return "Только буквы";
    if (value.length > 20) return "Длина логина состовлять не более 20 символов";
    return "";
}
function validatePasswordRegex(value) {
    if (value.length < 8) return "Длина должна состовлять не менее 8 символов";
    if (!value.match("[A-Z]+")) return "Пароль должен сожержать хотя бы одну заглавную букву";
    if (!value.match("[0-9]+")) return "Пароль должен сожержать хотя бы одну цифру";
    if (value.length > 40) return "Длина логина состовлять не более 40 символов";
    return "";
}
function validateTwoFieldsMatching({ fieldNames , notMatchErrorText  }) {
    return function validateMatching() {
        const form = this.refs.Form;
        const inputFirst = form.refs[fieldNames.first];
        const inputSecond = form.refs[fieldNames.second];
        const value = this.getValue();
        const inputs = {};
        if (this === inputFirst) Object.assign(inputs, {
            valueOther: inputSecond.getValue(),
            this: inputFirst,
            other: inputSecond
        });
        else Object.assign(inputs, {
            valueOther: inputFirst.getValue(),
            this: inputSecond,
            other: inputFirst
        });
        let error = "";
        const valuesMatching = value === inputs.valueOther;
        const stateThis = inputs.this.state;
        const stateOther = inputs.other.state;
        if (!valuesMatching) {
            error = notMatchErrorText;
            stateThis.inputError = error;
            stateOther.inputError = error;
        } else if (stateOther.inputError === notMatchErrorText) {
            stateOther.inputError = "";
            stateThis.inputError = "";
        }
        return error;
    };
}
function validateNameRegex(value) {
    if (!value.match("^[а-яА-Яa-zA-Z]+$")) return "Только латиниские буквы или кирилицу, цифры";
    if (!value.match("^[А-ЯA-Z]")) return "Должно начинаться с заглавной буквы";
    return "";
}
function validatePhoneRegex(value) {
    if (!value.match(`^[+]?[\\d]+$`)) return "Только цифра без + в начале";
    if (!(value.length >= 10 && value.length <= 15)) return "от 10 до 15 символов";
    return "";
}
function validateEmailRegex(value) {
    if (!value.match("^[a-zA-z]+[a-zA-Z\\d-_]*@[a-z]+\\.")) return "Неправильный email";
    return "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipn4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegistrationPage", ()=>RegistrationPage);
var _dom = require("core/Dom");
var _formComponent = require("./form-component");
var _registrationTemplate = require("./registrationTemplate");
var _registrationTemplateDefault = parcelHelpers.interopDefault(_registrationTemplate);
class RegistrationPage extends (0, _dom.Block) {
    constructor(){
        const children = {};
        const refs = {};
        children.registrationForm = new (0, _formComponent.RegistrationPageForm)();
        super({
            componentName: "Registration Page",
            children,
            refs
        });
    }
    render() {
        return 0, _registrationTemplateDefault.default;
    }
}

},{"core/Dom":"i0KHM","./form-component":"gF871","./registrationTemplate":"7ZMRz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gF871":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegistrationPageForm", ()=>(0, _component.RegistrationPageForm));
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _fields.EnumInputFields));
var _component = require("./component");
var _fields = require("./fields");

},{"./component":"fGMYG","./fields":"hm4bv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGMYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegistrationPageForm", ()=>RegistrationPageForm);
var _components = require("components");
var _registrationData = require("../registrationData");
var _registrationDataDefault = parcelHelpers.interopDefault(_registrationData);
var _validationCallback = require("./validationCallback");
var _fields = require("./fields");
class RegistrationPageForm extends (0, _components.InputForm) {
    constructor(){
        super({
            enumInputFieldsNames: (0, _fields.EnumInputFields),
            mapInputToProps: (0, _fields.MapInputFieldsProps),
            props: {
                afterValidationCallback: (0, _validationCallback.afterValidationCallback),
                formTitle: (0, _registrationDataDefault.default).pageTitle,
                htmlClasses: [
                    (0, _registrationDataDefault.default).formClass
                ],
                type: "registration",
                label: "Зарегистрироваться"
            }
        });
    }
}

},{"components":"dHnah","../registrationData":"5QT42","./validationCallback":"iVVdl","./fields":"hm4bv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVVdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "afterValidationCallback", ()=>afterValidationCallback);
var _services = require("services");
var _api = require("utils/api");
async function afterRequestCallback(response) {
    // console.log(`Registration REQUEST RESPONSE: ${JSON.stringify(response)}`);
    if ((0, _api.APIResponseHasError)(response)) {
        this.state.apiResponseError = response.reason;
        return;
    }
    this.state.apiResponseSuccess = "Registration Successfull";
    const user = (0, _api.transformProfileAPIResponseToUserData)(await (0, _services.ProfileService).getUserProfile(response.id));
    window.store.dispatch({
        user
    });
}
async function afterValidationCallback() {
    const formData = this.collectFormData();
    const apiData = (0, _api.transformSignUpFormDatatoAPI)(formData);
    // console.log(`API data: ${JSON.stringify(apiData)}`);
    (0, _services.SignUpService).signup(apiData, afterRequestCallback.bind(this));
}

},{"services":"f5PO7","utils/api":"i2lTI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hm4bv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _enumInputFields.EnumInputFields));
parcelHelpers.export(exports, "MapInputFieldsProps", ()=>(0, _inputFields.MapInputFieldsProps));
var _enumInputFields = require("./enumInputFields");
var _inputFields = require("./inputFields");

},{"./enumInputFields":"cbRu8","./inputFields":"c8YHi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbRu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumInputFields", ()=>EnumInputFields);
let EnumInputFields;
(function(EnumInputFields) {
    EnumInputFields["Email"] = "email";
    EnumInputFields["Login"] = "login";
    EnumInputFields["FirstName"] = "first_name";
    EnumInputFields["SecondName"] = "second_name";
    EnumInputFields["Phone"] = "phone";
    EnumInputFields["Password"] = "password";
    EnumInputFields["PasswordCheck"] = "password_check";
})(EnumInputFields || (EnumInputFields = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8YHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapInputFieldsProps", ()=>MapInputFieldsProps);
var _enumInputFields = require("./enumInputFields");
var _inputValidators = require("./inputValidators");
const MapInputFieldsProps = {
    [(0, _enumInputFields.EnumInputFields).Email]: {
        htmlAttributes: {
            name: "email",
            placeholder: "Введите email"
        },
        htmlClasses: [
            "auth__registration_form__email__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Email],
        label: "Почта",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).Login]: {
        htmlAttributes: {
            name: "login",
            placeholder: "Введите логин"
        },
        htmlClasses: [
            "auth__registration_form__login__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Login],
        label: "Логин",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).FirstName]: {
        htmlAttributes: {
            name: "first_name",
            placeholder: "Введите Имя"
        },
        htmlClasses: [
            "auth__registration_form__first_name__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).FirstName],
        label: "Имя",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).SecondName]: {
        htmlAttributes: {
            name: "second_name",
            placeholder: "Введите фамилию"
        },
        htmlClasses: [
            "auth__registration_form__second_name__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).SecondName],
        label: "Фамилия",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).Phone]: {
        htmlAttributes: {
            name: "phone",
            placeholder: "Введите телефон"
        },
        htmlClasses: [
            "auth__registration_form__phone__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Phone],
        label: "Телефон",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).Password]: {
        htmlAttributes: {
            name: "password",
            placeholder: "Введите пароль",
            type: "password"
        },
        htmlClasses: [
            "auth__registration_form__password__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Password],
        label: "Пароль",
        mainClass: "auth__registration_form__"
    },
    [(0, _enumInputFields.EnumInputFields).PasswordCheck]: {
        htmlAttributes: {
            name: "password",
            placeholder: "Введите пароль повторно",
            type: "password"
        },
        htmlClasses: [
            "auth__registration_form__passwordCheck__input"
        ],
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).PasswordCheck],
        label: "Пароль (еще раз)",
        mainClass: "auth__registration_form__"
    }
};

},{"./enumInputFields":"cbRu8","./inputValidators":"6IPrc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6IPrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormValidators", ()=>FormValidators);
var _formInputValidator = require("utils/form-input-validator");
var _enumInputFields = require("./enumInputFields");
const validatePasswordsMatching = _formInputValidator.validateTwoFieldsMatching({
    fieldNames: {
        first: (0, _enumInputFields.EnumInputFields).Password,
        second: (0, _enumInputFields.EnumInputFields).PasswordCheck
    },
    notMatchErrorText: "Пароли не совпадают!"
});
const FormValidators = [
    {
        field: (0, _enumInputFields.EnumInputFields).Email,
        validatorsList: [
            _formInputValidator.validateEmailRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Login,
        validatorsList: [
            _formInputValidator.validateLoginRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).FirstName,
        validatorsList: [
            _formInputValidator.validateNameRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).SecondName,
        validatorsList: [
            _formInputValidator.validateNameRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Phone,
        validatorsList: [
            _formInputValidator.validatePhoneRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Password,
        validatorsList: [
            _formInputValidator.validatePasswordRegex,
            validatePasswordsMatching
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).PasswordCheck,
        validatorsList: [
            _formInputValidator.validatePasswordRegex,
            validatePasswordsMatching
        ]
    }
].reduce((acc, { field , validatorsList  })=>{
    validatorsList.unshift(_formInputValidator.validateNotEmptyValue);
    const validator = _formInputValidator.makeValidator({
        validatorsList
    });
    acc[field] = {
        blur: [
            validator
        ]
    };
    return acc;
}, {});

},{"utils/form-input-validator":"4RFK4","./enumInputFields":"cbRu8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZMRz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
<main class='auth__container'>
  {{{ registrationForm }}}
</main>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9muaU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatPage", ()=>ChatPage);
var _components = require("hocs/components");
var _pages = require("utils/pages");
var _modals = require("./components/modals");
var _chatTemplate = require("./chatTemplate");
var _chatTemplateDefault = parcelHelpers.interopDefault(_chatTemplate);
var _components1 = require("./components");
class ChatPage extends (0, _components.WithStoreBlock) {
    constructor(){
        const children = {};
        children.navigationSection = new (0, _components1.ChatsPageNavigationSection)();
        children.chatSection = new (0, _components1.ChatsPageMainSection)();
        children.settings = new (0, _components1.ChatListPage)();
        children.modal = (0, _modals.Modal);
        super({
            componentName: "Chat Page",
            children
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const functionalButton = this.getChildByPath("chatSection.headerSection.functionalButton");
        functionalButton.refs.settings = this.getChildByPath("settings");
        this.refs.messagesDisplaySection = this.getChildByPath("chatSection.messagesDisplaySection");
        this.refs.attachmentButton = this.getChildByPath("chatSection.messageInputSection.attachmentButton");
        this.refs.messageInput = this.getChildByPath("chatSection.messageInputSection.messageInput");
        this.refs.sendMessageButton = this.getChildByPath("chatSection.messageInputSection.sendMessageButton");
        this.refs.chooseChatAvatarButton = this.getChildByPath("settings.avatarChooseButton.chooseButton");
        this.refs.addChatUsersButton = this.getChildByPath("settings.addChatUsersButton");
        this.refs.deleteChatButton = this.getChildByPath("settings.deleteChatButton");
        const chatsList = this.getChildByPath("navigationSection.chatsList");
        this.refs.chatsList = chatsList;
        const chats = (0, _pages.getDescendantByPath)(chatsList.children, "chats");
        chats.forEach((chat)=>{
            this.refs[`chat-${chat.chatID}`] = chat;
        });
    }
    render() {
        return 0, _chatTemplateDefault.default;
    }
}

},{"hocs/components":"THcGa","utils/pages":"5q3PA","./components/modals":"6qehp","./chatTemplate":"bKpsa","./components":"fpzww","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6qehp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>(0, _modal.Modal));
parcelHelpers.export(exports, "EnumModal", ()=>(0, _enumModal.EnumModal));
parcelHelpers.export(exports, "AddChatModal", ()=>(0, _addChat.AddChatModal));
parcelHelpers.export(exports, "CreateChatModal", ()=>(0, _createChat.CreateChatModal));
var _modal = require("./modal");
var _enumModal = require("./enumModal");
var _addChat = require("./addChat");
var _createChat = require("./createChat");

},{"./modal":"iFufE","./enumModal":"a0gF8","./addChat":"gldQ7","./createChat":"jeOUx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFufE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _components = require("components");
const Modal = new (0, _components.Modal)();

},{"components":"dHnah","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0gF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumModal", ()=>EnumModal);
let EnumModal;
(function(EnumModal) {
    EnumModal["CreateChat"] = "CreateChatModal";
    EnumModal["AddUsers"] = "AddChatUsersModal";
})(EnumModal || (EnumModal = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gldQ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddChatModal", ()=>(0, _component.AddChatModal));
var _component = require("./component");

},{"./component":"dLJ3m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLJ3m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddChatModal", ()=>AddChatModal);
var _dom = require("core/Dom");
var _components = require("components");
var _api = require("utils/api");
var _services = require("services");
var _toApiDataTransformers = require("utils/api/to-api-data-transformers");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _modals = require("pages/chat/components/modals");
class AddChatModal extends (0, _dom.Block) {
    constructor({ chatID , componentName  }){
        const state = {
            apiResponseSuccess: "",
            apiResponseError: ""
        };
        const children = {};
        children.title = AddChatModal._createChatTitle();
        children.usersIdenifiersInput = AddChatModal._createUsersIdenifiersInput();
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
        };
        super({
            children,
            state,
            componentName,
            helpers: {
                beforePropsAssignHook
            }
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this._createSubmitButton();
    }
    _createSubmitButton() {
        const refs = {
            usersInput: this.children.usersIdenifiersInput,
            modalWindow: this
        };
        const afterRequestCallback = (function(response) {
            if ((0, _api.APIResponseHasError)(response)) this.state.apiResponseError = response.reason;
            else {
                this.state.apiResponseSuccess = "Users added successfully";
                this.children.usersIdenifiersInput.setValue("");
                (0, _modals.Modal).toggleVisibility("off");
            }
        }).bind(this);
        const submitButton = new (0, _components.Button)({
            refs,
            props: {
                label: "add users",
                htmlClasses: [
                    "modal__button"
                ],
                events: {
                    click: [
                        function() {
                            const { usersInput , modalWindow  } = this.refs;
                            modalWindow.clearAPIResponseStatus();
                            const { chatID  } = modalWindow;
                            const usersList = usersInput.getValue().split(",");
                            const apiData = (0, _toApiDataTransformers.transformAddUsersFormDataToAPI)({
                                chatID,
                                usersList
                            });
                            // console.log(
                            //   `ADD USERS DATA: ${apiData.chatId}, ${apiData.users}`
                            // );
                            (0, _services.ChatsService).addUsersToChat(apiData, afterRequestCallback);
                        }
                    ]
                }
            }
        });
        this.children.submitButton = submitButton;
    }
    clearAPIResponseStatus() {
        this.state.apiResponseSuccess = "";
        this.state.apiResponseError = "";
    }
    render() {
        return 0, _templateDefault.default;
    }
    static _createUsersIdenifiersInput() {
        return new (0, _components.Input)({
            props: {
                htmlAttributes: {
                    placeholder: "Enter Users ID Numbers"
                },
                htmlClasses: [
                    "modal__login__input"
                ]
            }
        });
    }
    static _createChatTitle() {
        return new (0, _components.TextComponent)({
            props: {
                text: "Добавить нового пользователя",
                htmlClasses: [
                    "modal__title"
                ]
            }
        });
    }
}

},{"core/Dom":"i0KHM","components":"dHnah","utils/api":"i2lTI","services":"f5PO7","utils/api/to-api-data-transformers":"gwV72","./template":"apQGS","pages/chat/components/modals":"6qehp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apQGS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
    <div class="modal__container">
      {{{title}}}
      <section class="modal__choose">
        <label for="modalInputFile" class="modal__choose__text">Название</label>
        {{{ usersIdenifiersInput }}}
      </section>
      
      <section class="modal__button__container">
        {{{ submitButton }}}
      </section>

      <section claas="api-response-status">
        {{#if apiResponseSuccess}}
          <span class="api-success"> {{apiResponseSuccess}} </span>
        {{/if}}
        {{#if apiResponseError}}
          <span class="api-error"> {{apiResponseError}} </span>
        {{/if}}
      </section>
    </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeOUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateChatModal", ()=>(0, _component.CreateChatModal));
var _component = require("./component");

},{"./component":"89YnJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89YnJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateChatModal", ()=>CreateChatModal);
var _dom = require("core/Dom");
var _components = require("components");
var _chats = require("services/chats");
var _api = require("utils/api");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _modals = require("pages/chat/components/modals");
class CreateChatModal extends (0, _dom.Block) {
    constructor(componentName){
        const state = {
            apiResponseSuccess: "",
            apiResponseError: ""
        };
        const children = {};
        children.title = CreateChatModal._createChatTitle();
        children.chatTitleInput = CreateChatModal._createChatTitleInput();
        super({
            children,
            state,
            componentName
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this._createSubmitButton();
    }
    _createSubmitButton() {
        const refs = {
            titleInput: this.children.chatTitleInput,
            modalWindow: this
        };
        const afterRequestCallback = (function(response) {
            if ((0, _api.APIResponseHasError)(response)) this.state.apiResponseError = response.reason;
            else {
                this.state.apiResponseSuccess = "Chat created successfully";
                this.children.chatTitleInput.setValue("");
                (0, _modals.Modal).toggleVisibility("off");
            }
        }).bind(this);
        const submitButton = new (0, _components.Button)({
            refs,
            props: {
                label: "Create",
                htmlClasses: [
                    "modal__button"
                ],
                events: {
                    click: [
                        function() {
                            const { titleInput , modalWindow  } = this.refs;
                            modalWindow.clearAPIResponseStatus();
                            // console.log(`TITLE INPUT: ${titleInput.getValue()}`);
                            (0, _chats.ChatsService).createChat({
                                title: titleInput.getValue()
                            }, afterRequestCallback);
                        }
                    ]
                }
            }
        });
        this.children.submitButton = submitButton;
    }
    clearAPIResponseStatus() {
        this.state.apiResponseSuccess = "";
        this.state.apiResponseError = "";
    }
    render() {
        return 0, _templateDefault.default;
    }
    static _createChatTitleInput() {
        return new (0, _components.Input)({
            props: {
                htmlAttributes: {
                    placeholder: "Enter Chat Title"
                },
                htmlClasses: [
                    "modal__login__input"
                ]
            }
        });
    }
    static _createChatTitle() {
        return new (0, _components.TextComponent)({
            props: {
                text: "Создать новый чат",
                htmlClasses: [
                    "modal__title"
                ]
            }
        });
    }
}

},{"core/Dom":"i0KHM","components":"dHnah","services/chats":"NtgIu","utils/api":"i2lTI","./template":"h7zha","pages/chat/components/modals":"6qehp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h7zha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
    <div class="modal__container">
      {{{title}}}
      <section class="modal__choose">
        <label for="modalInputFile" class="modal__choose__text">Название</label>
        {{{ chatTitleInput }}}
      </section>
      
      <section class="modal__button__container">
        {{{ submitButton }}}
      </section>

      <section class="api-response-status">
        {{#if apiResponseSuccess}}
          <span class="api-success"> {{apiResponseSuccess}} </span>
        {{/if}}
        {{#if apiResponseError}}
          <span class="api-error"> {{apiResponseError}} </span>
        {{/if}}
      </section>
    </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKpsa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
<main class="chat__container">
  {{{ modal }}}
  {{{ navigationSection }}}
  {{{ chatSection }}}
  {{{ settings }}}
</main>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpzww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPageNavigationSection", ()=>(0, _navigation.ChatsPageNavigationSection));
parcelHelpers.export(exports, "ChatsPageMainSection", ()=>(0, _chat.ChatsPageMainSection));
parcelHelpers.export(exports, "ChatListPage", ()=>(0, _chatList.ChatListPage));
var _navigation = require("./navigation");
var _chat = require("./chat");
var _chatList = require("./chatList");

},{"./navigation":"5wz5f","./chat":"zhx6y","./chatList":"ixuOs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wz5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPageNavigationSection", ()=>(0, _component.ChatsPageNavigationSection));
var _component = require("./component");

},{"./component":"fqQir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqQir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPageNavigationSection", ()=>ChatsPageNavigationSection);
var _components = require("hocs/components");
var _chatFind = require("./headerSection/chatFind");
var _chatsList = require("./chatsList");
var _headerSection = require("./headerSection");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatsPageNavigationSection extends (0, _components.WithStoreBlock) {
    constructor(){
        const children = {};
        children.headerSection = new (0, _headerSection.HeaderSection)();
        children.chatFind = new (0, _chatFind.ChatFind)();
        children.chatsList = new (0, _chatsList.ChatsList)();
        super({
            children
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"hocs/components":"THcGa","./headerSection/chatFind":"hnQV8","./chatsList":"bRoLu","./headerSection":"6DKWP","./template":"3sw5G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnQV8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatFind", ()=>(0, _component.ChatFind));
var _component = require("./component");

},{"./component":"58XKj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58XKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatFind", ()=>ChatFind);
var _components = require("components");
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatFind extends (0, _dom.Block) {
    constructor(){
        const children = {};
        children.findInput = new (0, _components.Input)({
            props: {
                htmlAttributes: {
                    name: "chatSearch",
                    placeholder: "Поиск"
                },
                htmlClasses: [
                    "chat__list__input"
                ]
            }
        });
        super({
            children
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"components":"dHnah","core/Dom":"i0KHM","./template":"l5Ysm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5Ysm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div style="height: auto">
    {{{ findInput }}}
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRoLu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsList", ()=>(0, _component.ChatsList));
var _component = require("./component");

},{"./component":"6RLvb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6RLvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsList", ()=>ChatsList);
var _components = require("hocs/components");
var _chatComponent = require("../chatComponent");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatsList extends (0, _components.WithStoreBlock) {
    render() {
        return 0, _templateDefault.default;
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.createChatsList();
    }
    createChatsList() {
        let chats = {};
        if (this.store.userHasAnyChats()) chats = this.store.getChatsDataByPath();
        // console.log(`CHATS: ${JSON.stringify(chats)}`);
        const chatsList = [];
        Object.keys(chats).forEach((id)=>{
            chatsList.push(new (0, _chatComponent.ChatComponent)(id));
        });
        this.children.chats = chatsList;
    }
}

},{"hocs/components":"THcGa","../chatComponent":"lx7HR","./template":"wieZO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lx7HR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatComponent", ()=>(0, _components.ChatComponent));
var _components = require("./components");

},{"./components":"4WZ06","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WZ06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatComponent", ()=>ChatComponent);
var _components = require("hocs/components");
var _avatar = require("./avatar");
var _title = require("./title");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _text = require("./text");
var _time = require("./time");
class ChatComponent extends (0, _components.WithStoreBlock) {
    constructor(chatID){
        const children = {};
        children.avatarImage = new (0, _avatar.ChatAvatar)(chatID);
        children.chatTitle = new (0, _title.ChatTitle)(chatID);
        children.chatText = new (0, _text.ChatText)(chatID);
        children.chatTime = new (0, _time.ChatTime)(chatID);
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
        };
        const afterRenderHook = function() {
            if (this.chatID === this.store.getCurrentChatID()) this.toggleHtmlClass("current-chat", "on");
        };
        super({
            children,
            helpers: {
                beforePropsAssignHook,
                afterRenderHook
            }
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
    _afterRenderHook() {
        super._afterRenderHook();
        const onclickCallback = function() {
            this.store.dispatch({
                currentChatID: this.chatID
            });
        };
        this.dispatchEventListener("click", onclickCallback.bind(this));
    }
}

},{"hocs/components":"THcGa","./avatar":"9PVHJ","./title":"1lBwA","./template":"lzXld","./text":"j65YY","./time":"iVPsw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PVHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatAvatar", ()=>(0, _component.ChatAvatar));
var _component = require("./component");

},{"./component":"13csI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13csI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatAvatar", ()=>ChatAvatar);
var _components = require("hocs/components");
var _avatarPlacholderSvg = require("./avatarPlacholder.svg");
var _avatarPlacholderSvgDefault = parcelHelpers.interopDefault(_avatarPlacholderSvg);
class ChatAvatar extends (0, _components.WithStoreImageComponent) {
    constructor(chatID){
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
        };
        super({
            helpers: {
                beforePropsAssignHook
            }
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const avatarSrc = this.store.getChatsDataByPath(`${this.chatID}.avatar`) ?? (0, _avatarPlacholderSvgDefault.default);
        Object.assign(this.props, {
            htmlAttributes: {
                src: avatarSrc,
                alt: "avatar placeholder"
            }
        });
    }
}

},{"hocs/components":"THcGa","./avatarPlacholder.svg":"6Kq46","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Kq46":[function(require,module,exports) {
module.exports = require("8ad51bc95ac5855c").getBundleURL("7UhFu") + "avatarPlacholder.a325773c.svg" + "?" + Date.now();

},{"8ad51bc95ac5855c":"lgJ39"}],"1lBwA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatTitle", ()=>ChatTitle);
var _components = require("hocs/components");
class ChatTitle extends (0, _components.WithStoreTextComponent) {
    constructor(chatID){
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
            const title = this.store.getChatsDataByPath(`${this.chatID}.title`);
            this.props = {
                htmlClasses: [
                    "chat__list__message__title"
                ],
                text: title
            };
        };
        super({
            helpers: {
                beforePropsAssignHook
            }
        });
    }
}

},{"hocs/components":"THcGa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzXld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <li class="chat__list__message__container">
    <div class="chat__list__message__circle">
      {{{ avatarImage }}}
    </div>
    <div class="chat__list__message__text">
      {{{ chatTitle }}}
      {{{ chatText }}}
      {{{ chatTime }}}
    </div>
    <div class="chat__list__message__unread">
      {{{ unreadMessagesCount }}}
    </div>
  </li>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j65YY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatText", ()=>ChatText);
var _components = require("hocs/components");
class ChatText extends (0, _components.WithStoreTextComponent) {
    constructor(chatID){
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
            const text = this.store.getChatsDataByPath(`${this.chatID}.lastMessage.content`);
            this.props = {
                htmlClasses: [
                    "chat__list__message__last"
                ],
                text: text
            };
        };
        super({
            helpers: {
                beforePropsAssignHook
            }
        });
    }
}

},{"hocs/components":"THcGa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVPsw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatTime", ()=>ChatTime);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
class ChatTime extends (0, _components.WithStoreTextComponent) {
    constructor(chatID){
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
            const time = this.store.getChatsDataByPath(`${this.chatID}.lastMessage.time`);
            const convertTime = (0, _objectsHandle.dateToString)(time);
            this.props = {
                htmlClasses: [
                    "chat__list__message__lastDate"
                ],
                text: convertTime
            };
        };
        super({
            helpers: {
                beforePropsAssignHook
            }
        });
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wieZO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div style="height: auto">
    {{{ chats }}}
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DKWP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderSection", ()=>(0, _component.HeaderSection));
var _component = require("./component");

},{"./component":"b6TPL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6TPL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderSection", ()=>HeaderSection);
var _components = require("components");
var _dom = require("core/Dom");
var _router = require("core/Router");
var _hocs = require("hocs");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
const LinkWithRouter = (0, _hocs.WithRouter)((0, _components.Link));
class HeaderSection extends (0, _dom.Block) {
    constructor(){
        const children = {};
        children.profileLink = new LinkWithRouter({
            props: {
                label: "Профиль",
                htmlAttributes: {
                    name: "Profile"
                },
                htmlClasses: [
                    "chat__list__profileLink__icon"
                ],
                events: {
                    click: [
                        function() {
                            this.router.go((0, _router.AppRoutes).Profile);
                        }
                    ]
                }
            }
        });
        super({
            children
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"components":"dHnah","core/Dom":"i0KHM","core/Router":"52boY","hocs":"8D4Xk","./template":"lTAk7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTAk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
<div class='chat__list__profileLink'>
  {{{profileLink}}} 
  <svg
    class='chat__list__profileLink__svg'
    width='6'
    height='10'
    viewBox='0 0 6 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 9L5 5L1 1' stroke='#999999'></path>
  </svg>
</div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sw5G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div class="chat__list">
    {{{ headerSection }}}
    {{{ chatFind }}}
    {{{ chatsList }}}
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zhx6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPageMainSection", ()=>(0, _component.ChatsPageMainSection));
var _component = require("./component");

},{"./component":"gIc8o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIc8o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPageMainSection", ()=>ChatsPageMainSection);
var _components = require("hocs/components");
var _headerSection = require("./headerSection");
var _messagesDisplaySection = require("./messagesDisplaySection");
var _messageInputSection = require("./messageInputSection");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatsPageMainSection extends (0, _components.WithStoreBlock) {
    constructor(){
        const children = {};
        children.headerSection = new (0, _headerSection.ChatSectionHeader)();
        children.messagesDisplaySection = new (0, _messagesDisplaySection.MessagesDisplayArea)();
        children.messageInputSection = new (0, _messageInputSection.MessageInputSection)();
        super({
            children
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"hocs/components":"THcGa","./headerSection":"6Q9wC","./messagesDisplaySection":"ec3hp","./messageInputSection":"yocSC","./template":"jgBby","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Q9wC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatSectionHeader", ()=>(0, _component.ChatSectionHeader));
var _component = require("./component");

},{"./component":"ghLqX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghLqX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatSectionHeader", ()=>ChatSectionHeader);
var _components = require("hocs/components");
var _components1 = require("components");
var _settingsPng = require("static/img/settings.png");
var _settingsPngDefault = parcelHelpers.interopDefault(_settingsPng);
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatSectionHeader extends (0, _components.WithStoreBlock) {
    constructor(){
        const children = {};
        children.functionalButton = ChatSectionHeader._createfunctionalButton();
        super({
            children
        });
    }
    _afterRenderHook() {
        super._afterRenderHook();
        this.assignCurrentChat();
    }
    assignCurrentChat() {
        const store = this.store;
        const currentChatID = store.getCurrentChatID();
        const chats = this.store.getChatsDataByPath();
        const title = chats[currentChatID]?.title;
        this.children.user = new (0, _components1.TextComponent)({
            props: {
                text: title,
                htmlClasses: [
                    "chat__body__title__user"
                ]
            }
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
    static _createfunctionalButton() {
        return new (0, _components1.Button)({
            props: {
                htmlClasses: [
                    "chat__body__title__img"
                ],
                htmlStyle: {
                    "background-image": (0, _settingsPngDefault.default)
                },
                events: {
                    click: [
                        function() {
                            this.refs.settings._element.style.display = "block";
                        }
                    ]
                }
            }
        });
    }
}

},{"hocs/components":"THcGa","components":"dHnah","static/img/settings.png":"6FegF","./template":"LioTh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FegF":[function(require,module,exports) {
module.exports = require("eb79147359d0359d").getBundleURL("7UhFu") + "settings.f49c5153.png" + "?" + Date.now();

},{"eb79147359d0359d":"lgJ39"}],"LioTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div class="chat__body__title">
    <div class="chat__body__title__circle"></div>
    {{{ user }}}
    {{{ functionalButton }}}
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ec3hp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesDisplayArea", ()=>(0, _component.MessagesDisplayArea));
var _component = require("./component");

},{"./component":"hqKGp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqKGp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesDisplayArea", ()=>MessagesDisplayArea);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
var _messagesList = require("./messagesList");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
let EnumChatAbsenceWarnings;
(function(EnumChatAbsenceWarnings) {
    EnumChatAbsenceWarnings["NoChatsCreated"] = "NO CHATS CREATED";
    EnumChatAbsenceWarnings["NoChatSelected"] = "NO CHAT SELECTED";
    EnumChatAbsenceWarnings["NoMessagesWritten"] = "NO MESSAGES EXIST";
})(EnumChatAbsenceWarnings || (EnumChatAbsenceWarnings = {}));
class MessagesDisplayArea extends (0, _components.WithStoreBlock) {
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.setChatAbsenceWarning();
        this.createMessagesList();
    }
    setChatAbsenceWarning() {
        let warning = "";
        const { store  } = this;
        if (!store.userHasAnyChats()) warning = "NO CHATS CREATED";
        else {
            const chatID = store.getCurrentChatID();
            if ((0, _objectsHandle.isNullish)(chatID)) warning = "NO CHAT SELECTED";
            else if (!this.store.chatHasMessages(chatID)) {
                const messages = this.store.getStateValueByPath(`chatMessages.${chatID}`);
                // console.log(`CHAT(${chatID}): ${JSON.stringify(messages)}`);
                warning = "NO MESSAGES EXIST";
            }
        }
        this.state.chatAbsenceWarning = warning;
    }
    createMessagesList() {
        const chatID = this.store.getCurrentChatID();
        const messagesList = new (0, _messagesList.MessagesList)(chatID);
        this.children.messagesList = messagesList;
        messagesList.jumpToScrollBottom();
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","./messagesList":"fHi9D","./template":"jdda0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHi9D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesList", ()=>(0, _component.MessagesList));
var _component = require("./component");

},{"./component":"1MaQB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MaQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesList", ()=>MessagesList);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
var _message = require("../message");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class MessagesList extends (0, _components.WithStoreBlock) {
    constructor(chatID){
        const beforePropsAssignHook = function() {
            this.chatID = chatID;
        };
        super({
            helpers: {
                beforePropsAssignHook
            }
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const { chatID  } = this;
        if ((0, _objectsHandle.isNullish)(chatID) || !this.store.chatHasMessages(chatID)) {
            this.children.messages = [];
            return;
        }
        const messages = this.store.getStateValueByPath(`chatsMessages.${chatID}`);
        const messagesList = [];
        for (const { content  } of messages)messagesList.push(new (0, _message.MessageComponent)(content));
        this.children.messages = messagesList;
    }
    jumpToScrollBottom() {
        const element = this._unwrappedElement;
        element.scrollTop = element.scrollHeight;
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","../message":"4Oubd","./template":"8DYA1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Oubd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageComponent", ()=>(0, _component.MessageComponent));
var _component = require("./component");

},{"./component":"eqpCN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqpCN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageComponent", ()=>MessageComponent);
var _components = require("components");
var _dom = require("core/Dom");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class MessageComponent extends (0, _dom.Block) {
    constructor(message){
        const children = {};
        children.content = new (0, _components.TextComponent)({
            props: {
                text: message,
                htmlClasses: [
                    "chat__body__message__text"
                ]
            }
        });
        super({
            children
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"components":"dHnah","core/Dom":"i0KHM","./template":"5YSAN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YSAN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <li class="chat__body__message">
    {{{ content }}}
  </li>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DYA1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <ul class="chat__body__message__container">
   {{{ messages }}}
  </ul>      
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdda0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <section class="chat__body">
    <div class="chat__body__messages__display">
      {{{ messagesList }}}  
      
      {{#if chatAbsenceWarning }}
        <h1 class="chat__body__message-placeholder"> {{ chatAbsenceWarning }}</h1>
      {{/if}}
    </div>
  </section>;
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yocSC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageInputSection", ()=>(0, _component.MessageInputSection));
var _component = require("./component");

},{"./component":"a5DVC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5DVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageInputSection", ()=>MessageInputSection);
var _components = require("hocs/components");
var _sendMessageButton = require("./sendMessageButton");
var _attachmentButton = require("./attachmentButton");
var _messageInput = require("./messageInput");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class MessageInputSection extends (0, _components.WithStoreBlock) {
    constructor(){
        const children = {};
        children.attachmentButton = new (0, _attachmentButton.AttachmentButton)();
        const messageInput = new (0, _messageInput.MessageInput)();
        children.messageInput = messageInput;
        children.sendMessageButton = new (0, _sendMessageButton.SendMessageButton)(messageInput);
        super({
            children
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const sendMessageButton = this.getChildByPath("sendMessageButton");
        const messageInput = this.getChildByPath("messageInput");
        messageInput.refs.sendMessageButton = sendMessageButton;
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"hocs/components":"THcGa","./sendMessageButton":"3Qwoy","./attachmentButton":"c4JZ0","./messageInput":"5PC5x","./template":"gfpJD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Qwoy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SendMessageButton", ()=>(0, _component.SendMessageButton));
var _component = require("./component");

},{"./component":"ibkFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibkFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SendMessageButton", ()=>SendMessageButton);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
var _sendPng = require("static/img/send.png");
var _sendPngDefault = parcelHelpers.interopDefault(_sendPng);
class SendMessageButton extends (0, _components.WithStoreButton) {
    constructor(messageInputRef){
        super({
            props: {
                htmlClasses: [
                    "chat__body__footer__imgSend"
                ],
                htmlStyle: {
                    "background-image": (0, _sendPngDefault.default)
                }
            },
            refs: {
                messageInput: messageInputRef
            }
        });
    }
    _afterRenderHook() {
        super._afterRenderHook();
        this.assignCurrentChat();
    }
    assignCurrentChat() {
        const store = this.store;
        const currentChatID = store.getCurrentChatID();
        const isChatSelected = !(0, _objectsHandle.isNullish)(currentChatID);
        const messageInput = this.refs.messageInput;
        const webSocket = store.getSocketByChatID(currentChatID, true);
        // console.log(
        //   `CHAT(${currentChatID}) Websocket: ${JSON.stringify(webSocket)}`
        // );
        if (isChatSelected) this.setPropByPath("events.click", [
            function() {
                const message = messageInput.getValue();
                if (message === "") return;
                webSocket.send(message);
                messageInput.setValue("");
            }
        ]);
        else this.setPropByPath("events.click", []);
        this.toggleDisabledState(!isChatSelected);
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","static/img/send.png":"ceWHr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceWHr":[function(require,module,exports) {
module.exports = require("fc3d62f1561e8a1b").getBundleURL("7UhFu") + "send.e0d50340.png" + "?" + Date.now();

},{"fc3d62f1561e8a1b":"lgJ39"}],"c4JZ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachmentButton", ()=>(0, _component.AttachmentButton));
var _component = require("./component");

},{"./component":"5oVYz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oVYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachmentButton", ()=>AttachmentButton);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
var _attachPng = require("static/img/attach.png");
var _attachPngDefault = parcelHelpers.interopDefault(_attachPng);
class AttachmentButton extends (0, _components.WithStoreButton) {
    constructor(){
        super({
            props: {
                htmlClasses: [
                    "chat__body__footer__img"
                ],
                htmlStyle: {
                    "background-image": (0, _attachPngDefault.default)
                }
            }
        });
    }
    _afterRenderHook() {
        super._afterRenderHook();
        this.assignCurrentChat();
    }
    assignCurrentChat() {
        const currentChatID = this.store.getCurrentChatID();
        this.toggleDisabledState((0, _objectsHandle.isNullish)(currentChatID));
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","static/img/attach.png":"hTNQO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTNQO":[function(require,module,exports) {
module.exports = require("743dd1eafd50bf96").getBundleURL("7UhFu") + "attach.a2507276.png" + "?" + Date.now();

},{"743dd1eafd50bf96":"lgJ39"}],"5PC5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageInput", ()=>(0, _component.MessageInput));
var _component = require("./component");

},{"./component":"hIotf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIotf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageInput", ()=>MessageInput);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
class MessageInput extends (0, _components.WithStoreInput) {
    constructor(){
        super({
            props: {
                htmlAttributes: {
                    name: "message",
                    placeholder: "Введите сообщение"
                },
                htmlClasses: [
                    "chat__body__footer__input"
                ],
                events: {
                    keypress: [
                        function(event) {
                            if (event.key === "Enter") this.refs.sendMessageButton.click();
                        }
                    ]
                }
            }
        });
    }
    _afterRenderHook() {
        super._afterRenderHook();
        this.assignCurrentChat();
    }
    assignCurrentChat() {
        const currentChatID = this.store.getCurrentChatID();
        this.toggleDisabledState((0, _objectsHandle.isNullish)(currentChatID));
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gfpJD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <section class="chat__body__footer">
    <div class="chat__body__line"></div>
    <div class="chat__body__footer__container">
      {{{ attachmentButton }}}
      <div class="chat__body__footer__inputContainer">
        <label for="message" style="width: 0"></label>
        {{{ messageInput }}}
      </div>
      {{{ sendMessageButton }}}
    </div>
  </section>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jgBby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
<div class="chat__body">
  {{{ headerSection }}}
  {{{ messagesDisplaySection }}}
  {{{ messageInputSection }}}
</div>
`; // export default `
 //   <main class="main-section">
 //     {{{ headerSection }}}
 //     {{{ messagesDisplaySection }}}
 //     {{{ messageInputSection }}}
 //   </main>
 // `;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixuOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatListPage", ()=>(0, _component.ChatListPage));
var _component = require("./component");

},{"./component":"j3nD8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3nD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatListPage", ()=>ChatListPage);
var _buttons = require("components/buttons");
var _dom = require("core/Dom");
var _buttons1 = require("./buttons");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class ChatListPage extends (0, _dom.Block) {
    constructor(){
        const children = {};
        children.collapseButton = new _buttons1.CollapseButton();
        children.createChatButton = new _buttons1.CreateChatButton();
        children.deleteChatButton = new _buttons1.DeleteChatButton();
        children.addChatUsersButton = new _buttons1.AddChatUsersButton();
        children.avatarChooseButton = new _buttons1.AvatarChooseButton();
        children.exitLink = new (0, _buttons.LogoutButton)();
        super({
            props: {
                htmlStyle: {
                    display: "none"
                }
            },
            children
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.children.collapseButton.refs.settings = this;
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"components/buttons":"fWrjK","core/Dom":"i0KHM","./buttons":"8APea","./template":"7SmnO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8APea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollapseButton", ()=>(0, _collapse.CollapseButton));
parcelHelpers.export(exports, "CreateChatButton", ()=>(0, _createChat.CreateChatButton));
parcelHelpers.export(exports, "DeleteChatButton", ()=>(0, _deleteChat.DeleteChatButton));
parcelHelpers.export(exports, "AddChatUsersButton", ()=>(0, _addChat.AddChatUsersButton));
parcelHelpers.export(exports, "AvatarChooseButton", ()=>(0, _chooseAvatar.AvatarChooseButton));
var _collapse = require("./collapse");
var _createChat = require("./createChat");
var _deleteChat = require("./deleteChat");
var _addChat = require("./addChat");
var _chooseAvatar = require("./chooseAvatar");

},{"./collapse":"dUYN5","./createChat":"5JvzZ","./deleteChat":"aCfl4","./addChat":"7epTV","./chooseAvatar":"jwAxg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUYN5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollapseButton", ()=>CollapseButton);
var _components = require("components");
var _closePng = require("static/img/close.png");
var _closePngDefault = parcelHelpers.interopDefault(_closePng);
class CollapseButton extends (0, _components.Button) {
    constructor(){
        super({
            props: {
                htmlStyle: {
                    "background-image": (0, _closePngDefault.default)
                },
                htmlClasses: [
                    "chat__settings__button"
                ],
                events: {
                    click: [
                        function() {
                            this.refs.settings.hide();
                        }
                    ]
                }
            }
        });
    }
}

},{"components":"dHnah","static/img/close.png":"aAzW4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JvzZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateChatButton", ()=>CreateChatButton);
var _components = require("components");
var _modals = require("pages/chat/components/modals");
class CreateChatButton extends (0, _components.Button) {
    constructor(){
        super({
            props: {
                label: "create new chat",
                htmlClasses: [
                    "chat__settings__item"
                ],
                events: {
                    click: [
                        function() {
                            const contentType = (0, _modals.Modal).getContentType();
                            const componentName = (0, _modals.EnumModal).CreateChat;
                            if (contentType !== componentName) (0, _modals.Modal).setContent(new (0, _modals.CreateChatModal)(componentName));
                            (0, _modals.Modal).toggleVisibility("on");
                        }
                    ]
                }
            }
        });
    }
}

},{"components":"dHnah","pages/chat/components/modals":"6qehp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCfl4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeleteChatButton", ()=>DeleteChatButton);
var _components = require("hocs/components");
var _services = require("services");
var _objectsHandle = require("utils/objects-handle");
class DeleteChatButton extends (0, _components.WithStoreButton) {
    constructor(){
        super({
            props: {
                label: "delete chat",
                htmlClasses: [
                    "chat__settings__item"
                ],
                events: {
                    click: [
                        function() {
                            const currentChatID = this.store.getCurrentChatID();
                            // console.log(
                            //   `CURRENT CHAT: ${JSON.stringify(
                            //     transformChatIDToDeleteAPI(currentChatID)
                            //   )}`
                            // );
                            (0, _services.ChatsService).deleteChat(currentChatID);
                        }
                    ]
                }
            }
        });
    }
    _afterRenderHook() {
        const currentChatID = this.store.getCurrentChatID();
        if ((0, _objectsHandle.isNullish)(currentChatID)) this.toggleDisabledState(true);
    }
}

},{"hocs/components":"THcGa","services":"f5PO7","utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7epTV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddChatUsersButton", ()=>AddChatUsersButton);
var _components = require("hocs/components");
var _objectsHandle = require("utils/objects-handle");
var _modals = require("pages/chat/components/modals");
class AddChatUsersButton extends (0, _components.WithStoreButton) {
    constructor(){
        super({
            props: {
                label: "add chat users",
                htmlClasses: [
                    "chat__settings__item"
                ],
                events: {
                    click: [
                        function() {
                            const chatID = this.store.getCurrentChatID();
                            const componentName = `${(0, _modals.EnumModal).AddUsers}(${chatID})`;
                            const contentType = (0, _modals.Modal).getContentType();
                            if (contentType !== componentName) (0, _modals.Modal).setContent(new (0, _modals.AddChatModal)({
                                chatID,
                                componentName
                            }));
                            (0, _modals.Modal).toggleVisibility("on");
                        }
                    ]
                }
            }
        });
    }
    _afterRenderHook() {
        const currentChatID = this.store.getCurrentChatID();
        if ((0, _objectsHandle.isNullish)(currentChatID)) this.toggleDisabledState(true);
    }
}

},{"hocs/components":"THcGa","utils/objects-handle":"kOfSo","pages/chat/components/modals":"6qehp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwAxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarChooseButton", ()=>AvatarChooseButton);
var _components = require("hocs/components");
var _services = require("services");
class AvatarChooseButton extends (0, _components.WithStoreFileInput) {
    constructor(){
        const afterRenderHook = function() {
            if (!this.store.getCurrentChatID()) this.children.chooseButton.toggleDisabledState(true);
        };
        const onchangeCallback = async function() {
            const { form  } = this.refs;
            const fileInput = this._unwrappedElement;
            if (!fileInput.value) return;
            const avatarForm = new FormData(form._unwrappedElement);
            const chatID = window.store.getCurrentChatID();
            avatarForm.append("chatId", chatID);
            await (0, _services.ChatsService).changeAvatar(avatarForm);
        };
        super({
            fileInputProps: {
                htmlAttributes: {
                    name: "avatar"
                },
                events: {
                    change: [
                        onchangeCallback
                    ]
                }
            },
            chooseButtonProps: {
                label: "choose avatar",
                htmlClasses: [
                    "chat__settings__item2"
                ]
            },
            props: {
                htmlClasses: [
                    "chat__settings__item__avatar"
                ]
            },
            helpers: {
                afterRenderHook
            }
        });
    }
}

},{"hocs/components":"THcGa","services":"f5PO7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SmnO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <section class="chat__settings">
    {{{ collapseButton }}}
    {{{ createChatButton }}}
    {{{ addChatUsersButton }}}
    {{{ avatarChooseButton }}}
    {{{ deleteChatButton }}}
    {{{ exitLink }}}
    </section>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atqZr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePage", ()=>ProfilePage);
var _dom = require("core/Dom");
var _profileAvatarPng = require("static/img/profile_avatar.png");
var _profileAvatarPngDefault = parcelHelpers.interopDefault(_profileAvatarPng);
var _components = require("components");
var _hocs = require("hocs");
var _profileTemplate = require("./profileTemplate");
var _profileTemplateDefault = parcelHelpers.interopDefault(_profileTemplate);
var _components1 = require("./components");
var _fields = require("./components/data-form/fields");
var _arrowBackPng = require("static/img/arrowBack.png");
var _arrowBackPngDefault = parcelHelpers.interopDefault(_arrowBackPng);
var _profileData = require("./profileData");
var _router = require("core/Router");
var _avatarInput = require("./components/avatar-upload-form/avatar-input");
var _submitSection = require("./components/avatar-upload-form/submit-section");
const ProfilePageBlock = (0, _hocs.WithStore)((0, _dom.Block));
const ImageWithRouter = (0, _hocs.WithRouter)((0, _components.ImageComponent));
class ProfilePage extends ProfilePageBlock {
    constructor(profilePageImageRef){
        const children = {};
        children.arrowBackImage = new ImageWithRouter({
            props: {
                htmlAttributes: {
                    src: (0, _arrowBackPngDefault.default),
                    alt: (0, _profileData.profileData).backLink.alt
                },
                htmlClasses: [
                    (0, _profileData.profileData).backLink.class
                ],
                htmlWrapper: {
                    componentAlias: "wrappedProfileLink",
                    htmlWrapperTemplate: `
              <div class='profile__buttonBack'>
                {{{wrappedProfileLink}}}
              </div>
            `
                },
                events: {
                    click: [
                        function() {
                            this.router.go((0, _router.AppRoutes).Chat);
                        }
                    ]
                }
            }
        });
        const storeAvatar = window.store.getUserDataByPath("avatar");
        const imageSource = storeAvatar || (0, _profileAvatarPngDefault.default);
        const avatarImage = new (0, _components.ImageComponent)({
            props: {
                htmlAttributes: {
                    src: imageSource,
                    alt: "Profile Avatar"
                },
                htmlClasses: [
                    "profile__avatar__img"
                ]
            }
        });
        children.avatarImage = avatarImage;
        children.profileDataForm = new (0, _components1.ProfilePageInputForm)();
        // children.exitLink = new LogoutButton();
        const refs = {};
        super({
            children,
            refs: {
                ...refs,
                profileImage: profilePageImageRef
            },
            state: {
                uploadingStatus: ""
            },
            componentName: "Profile Page"
        });
    }
    render() {
        return 0, _profileTemplateDefault.default;
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        this.children.changeDataButton = new (0, _components1.DataChangeButton)({
            form: this.children.profileDataForm
        });
        this.props.userID = this.store.getUserDataByPath("id");
        const avatarInput = this._createAvatarInput();
        this.children.avatarInput = avatarInput;
        const submitSection = this._createAvatarSubmitSection();
        this.children.submitSection = submitSection;
        const avatarFileInput = avatarInput.getChildByPath("fileInput");
        avatarFileInput.refs.avatarSubmit = submitSection;
        const submitButton = submitSection.getChildByPath("submitButton");
        Object.assign(submitButton.refs, {
            avatarInput
        });
    }
    _createAvatarInput() {
        return new (0, _avatarInput.AvatarInput)();
    }
    _createAvatarSubmitSection() {
        return new (0, _submitSection.SubmitSection)();
    }
    updateUserInfo() {
        const userData = this.store.getUserDataByPath();
        Object.entries(this.children.profileDataForm.refs).forEach(([inputName, inputBlock])=>{
            const recordName = (0, _fields.MapInputFieldToUserDataRecord)[inputName];
            inputBlock.setPropByPath("htmlAttributes.value", `${userData[recordName]}`);
        });
    }
    updateUserAvatar() {
        const newAvatar = this.store.getUserDataByPath("avatar");
        this.children.avatarImage.setPropByPath("htmlAttributes.src", newAvatar);
    }
}

},{"core/Dom":"i0KHM","static/img/profile_avatar.png":"j6gct","components":"dHnah","hocs":"8D4Xk","./profileTemplate":"5ySyV","./components":"ghiMZ","./components/data-form/fields":"3ZzdV","static/img/arrowBack.png":"P7Wev","./profileData":"hNHYd","core/Router":"52boY","./components/avatar-upload-form/avatar-input":"iAhn5","./components/avatar-upload-form/submit-section":"jdnHD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6gct":[function(require,module,exports) {
module.exports = require("8659b0945ba2c7f1").getBundleURL("7UhFu") + "profile_avatar.558a0e16.png" + "?" + Date.now();

},{"8659b0945ba2c7f1":"lgJ39"}],"5ySyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
      <main class="profile">
        {{{arrowBackImage}}}
        <div class='profile__container'>
          <div class="profile__avatar">
            {{{ avatarImage }}}
            <div class="profile__avatar__change">
              {{{ avatarInput }}}
            </div>
            {{{ submitSection }}}
          </div>
          {{{ profileDataForm }}}
          <div class='profile__button__container'>
            {{{changeDataButton}}}
            <div class='profile__line2'></div>
            {{{exitLink}}}
          </div>
       </div>
      </main>
`; // <div class='profile__line2'></div>
 // {{{changePasswordLink}}}
 // <div class='profile__line2'></div>
 // {{{exitLink}}}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghiMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePageInputForm", ()=>(0, _dataForm.ProfilePageInputForm));
parcelHelpers.export(exports, "DataChangeButton", ()=>(0, _dataChangeButton.DataChangeButton));
var _dataForm = require("./data-form");
var _dataChangeButton = require("./dataChangeButton");

},{"./data-form":"kHTlw","./dataChangeButton":"ldwkG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHTlw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePageInputForm", ()=>(0, _component.ProfilePageInputForm));
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _fields.EnumInputFields));
var _component = require("./component");
var _fields = require("./fields");

},{"./component":"d97TG","./fields":"3ZzdV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d97TG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePageInputForm", ()=>ProfilePageInputForm);
var _components = require("components");
var _components1 = require("hocs/components");
var _afterValidationCallback = require("./afterValidationCallback");
var _fields = require("./fields");
class ProfilePageInputForm extends (0, _components.InputForm) {
    constructor(){
        super({
            props: {
                htmlClasses: [
                    "profile__data__container"
                ],
                isSubmitButtonNeeded: false,
                afterValidationCallback: (0, _afterValidationCallback.afterValidationCallback)
            },
            InputClass: (0, _components1.WithStoreValidatedInput),
            enumInputFieldsNames: (0, _fields.EnumInputFields),
            mapInputToProps: (0, _fields.MapInputFieldToProps),
            mapInputToHelpers: (0, _fields.MapInputFieldToHelpers)
        });
    }
}

},{"components":"dHnah","hocs/components":"THcGa","./afterValidationCallback":"7nw7u","./fields":"3ZzdV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nw7u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "afterValidationCallback", ()=>afterValidationCallback);
var _services = require("services");
var _api = require("utils/api");
function afterRequestCallback(response) {
    if ((0, _api.APIResponseHasError)(response)) {
        this.state.apiResponseError = response.reason;
        return;
    }
    window.store.dispatch({
        user: (0, _api.transformProfileAPIResponseToUserData)(response)
    });
    this.state.apiResponseSuccess = "Profile Data Updated Successfully";
}
async function afterValidationCallback() {
    const formData = this.collectFormData();
    const apiData = (0, _api.transformProfileFormDatatoAPI)(formData);
    // console.log(`API data: ${JSON.stringify(apiData)}`);
    await (0, _services.ProfileService).changeUserProfile(apiData, afterRequestCallback.bind(this));
}

},{"services":"f5PO7","utils/api":"i2lTI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZzdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapInputFieldToProps", ()=>(0, _inputFields.MapInputFieldToProps));
parcelHelpers.export(exports, "MapInputFieldToHelpers", ()=>(0, _inputFields.MapInputFieldToHelpers));
parcelHelpers.export(exports, "MapInputFieldToUserDataRecord", ()=>(0, _inputFields.MapInputFieldToUserDataRecord));
parcelHelpers.export(exports, "EnumInputFields", ()=>(0, _enumInputFields.EnumInputFields));
var _inputFields = require("./inputFields");
var _enumInputFields = require("./enumInputFields");

},{"./inputFields":"cWaYA","./enumInputFields":"5whJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWaYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapInputFieldToProps", ()=>MapInputFieldToProps);
parcelHelpers.export(exports, "MapInputFieldToUserDataRecord", ()=>MapInputFieldToUserDataRecord);
parcelHelpers.export(exports, "MapInputFieldToHelpers", ()=>MapInputFieldToHelpers);
var _enumInputFields = require("./enumInputFields");
var _inputValidators = require("./inputValidators");
const MapInputFieldToProps = {
    [(0, _enumInputFields.EnumInputFields).Email]: {
        htmlAttributes: {
            name: "email"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Email]
    },
    [(0, _enumInputFields.EnumInputFields).Login]: {
        htmlAttributes: {
            name: "login"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Login]
    },
    [(0, _enumInputFields.EnumInputFields).FirstName]: {
        htmlAttributes: {
            name: "first_name"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).FirstName]
    },
    [(0, _enumInputFields.EnumInputFields).SecondName]: {
        htmlAttributes: {
            name: "second_name"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).SecondName]
    },
    [(0, _enumInputFields.EnumInputFields).DisplayName]: {
        htmlAttributes: {
            name: "display_name"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).DisplayName]
    },
    [(0, _enumInputFields.EnumInputFields).Phone]: {
        htmlAttributes: {
            name: "phone"
        },
        validators: (0, _inputValidators.FormValidators)[(0, _enumInputFields.EnumInputFields).Phone]
    }
};
const MapInputFieldToDataType = {
    [(0, _enumInputFields.EnumInputFields).Email]: "email",
    [(0, _enumInputFields.EnumInputFields).Login]: "login",
    [(0, _enumInputFields.EnumInputFields).FirstName]: "first name",
    [(0, _enumInputFields.EnumInputFields).SecondName]: "second name",
    [(0, _enumInputFields.EnumInputFields).DisplayName]: "display name",
    [(0, _enumInputFields.EnumInputFields).Phone]: "phone"
};
Object.entries(MapInputFieldToProps).forEach(([fieldName, props])=>{
    props.htmlClasses = [
        "profile__data__data"
    ];
    props.htmlWrapper = {
        componentAlias: "wrappedDataInput",
        htmlWrapperTemplate: `
      <div class="profile__data">
        <span class="profile__data__title"> ${MapInputFieldToDataType[fieldName]} </span>
        <div class="profile__data__data">
          {{{ wrappedDataInput }}}
          \\{{#if inputError}}
            <span class="profile__error"> \\{{ inputError }} </span>
          \\{{/if}}
        </div>
      </div>
    `
    };
});
const MapInputFieldToUserDataRecord = {
    [(0, _enumInputFields.EnumInputFields).Email]: "email",
    [(0, _enumInputFields.EnumInputFields).Login]: "login",
    [(0, _enumInputFields.EnumInputFields).FirstName]: "firstName",
    [(0, _enumInputFields.EnumInputFields).SecondName]: "secondName",
    [(0, _enumInputFields.EnumInputFields).DisplayName]: "displayName",
    [(0, _enumInputFields.EnumInputFields).Phone]: "phone"
};
const MapInputFieldToHelpers = Object.entries(MapInputFieldToUserDataRecord).reduce((acc, [fieldName, recordName])=>{
    acc[fieldName] = {
        beforePropsProxyHook () {
            this.setPropByPath("htmlAttributes.value", this.store.getUserDataByPath(recordName));
        },
        afterRenderHook () {
            this.toggleDisabledState("change");
        }
    };
    return acc;
}, {});

},{"./enumInputFields":"5whJT","./inputValidators":"aIUJC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5whJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumInputFields", ()=>EnumInputFields);
let EnumInputFields;
(function(EnumInputFields) {
    EnumInputFields["Email"] = "email";
    EnumInputFields["Login"] = "login";
    EnumInputFields["FirstName"] = "first_name";
    EnumInputFields["SecondName"] = "second_name";
    EnumInputFields["DisplayName"] = "display_name";
    EnumInputFields["Phone"] = "phone";
})(EnumInputFields || (EnumInputFields = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIUJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormValidators", ()=>FormValidators);
var _formInputValidator = require("utils/form-input-validator");
var _enumInputFields = require("./enumInputFields");
const FormValidators = [
    {
        field: (0, _enumInputFields.EnumInputFields).Email,
        validatorsList: [
            _formInputValidator.validateEmailRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Login,
        validatorsList: [
            _formInputValidator.validateLoginRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).FirstName,
        validatorsList: [
            _formInputValidator.validateNameRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).SecondName,
        validatorsList: [
            _formInputValidator.validateNameRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).DisplayName,
        validatorsList: [
            _formInputValidator.validateNameRegex
        ]
    },
    {
        field: (0, _enumInputFields.EnumInputFields).Phone,
        validatorsList: [
            _formInputValidator.validatePhoneRegex
        ]
    }
].reduce((acc, { field , validatorsList  })=>{
    validatorsList.unshift(_formInputValidator.validateNotEmptyValue);
    const validator = _formInputValidator.makeValidator({
        validatorsList
    });
    acc[field] = {
        blur: [
            validator
        ]
    };
    return acc;
}, {});

},{"utils/form-input-validator":"4RFK4","./enumInputFields":"5whJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldwkG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataChangeButton", ()=>DataChangeButton);
var _components = require("components");
var _inputForm = require("components/inputs/inputForm");
class DataChangeButton extends (0, _components.Button) {
    constructor(refs){
        let FormMode;
        (function(FormMode) {
            FormMode["DataSaved"] = "data_saved";
            FormMode["DataChanging"] = "data_changing";
        })(FormMode || (FormMode = {}));
        async function onClickCallback() {
            const { form  } = this.refs;
            form.state.apiResponseSuccess = "";
            if (this.state.mode === "data_saved") {
                this.state.mode = "data_changing";
                this.props.label = "Сохранить";
                Object.values(form.refs).forEach((dataField)=>{
                    dataField.toggleDisabledState("save");
                });
            } else {
                await (0, _inputForm.formSubmitButtonCallback).call(this);
                if (form.getAPIResponseError() === "") {
                    this.state.mode = "data_saved";
                    this.props.label = "Редактировать";
                    Object.values(form.refs).forEach((dataField)=>{
                        dataField.toggleDisabledState("change");
                    });
                } else {
                    let arrInputsError = [];
                    Object.values(form.refs).forEach((value)=>{
                        if (value.state.inputError) arrInputsError.push(value.componentName);
                    });
                    Object.values(form.refs).forEach((dataField)=>{
                        if (arrInputsError.includes(dataField.componentName)) dataField.toggleDisabledState("error");
                    });
                }
            }
        }
        super({
            state: {
                mode: "data_saved"
            },
            refs,
            props: {
                label: "Редактировать",
                htmlClasses: [
                    "profile__saveButton"
                ],
                events: {
                    click: [
                        onClickCallback
                    ]
                }
            }
        });
    }
}

},{"components":"dHnah","components/inputs/inputForm":"65vk3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"P7Wev":[function(require,module,exports) {
module.exports = require("287816410ff8575c").getBundleURL("7UhFu") + "arrowBack.b3aade7f.png" + "?" + Date.now();

},{"287816410ff8575c":"lgJ39"}],"hNHYd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "profileFieldsData", ()=>profileFieldsData);
parcelHelpers.export(exports, "profileData", ()=>profileData);
const profileFieldsData = [
    {
        name: "email",
        title: "Почта",
        data: "pochta@yandex.ru",
        placeholder: "Введите email"
    },
    {
        name: "login",
        title: "Логин",
        data: "ivanivanov",
        placeholder: "Введите логин"
    },
    {
        name: "first_name",
        title: "Имя",
        data: "Иван",
        placeholder: "Введите Имя"
    },
    {
        name: "second_name",
        title: "Фамилия",
        data: "Иванов",
        placeholder: "Введите фамилию"
    },
    {
        name: "display_name",
        title: "Имя в чате",
        data: "Иван",
        placeholder: "Введите имя в чате"
    },
    {
        name: "phone",
        title: "Телефон",
        data: "79099673030",
        placeholder: "Введите пароль"
    }
];
const profileData = {
    username: "Ivan",
    changeAvatar: "Поменять аватар",
    backLink: {
        class: "profile__buttonBack__img",
        name: "",
        alt: "arrowBack",
        htmlName: "backLink"
    },
    avatar: {
        alt: "profileAvatar",
        class: "profile__buttonBack__img"
    },
    changeData: {
        change: "Изменить данные",
        save: "Сохранить данные",
        class: "profile__saveButton",
        classActive: "profile__saveButton__active",
        htmlName: "changeData"
    },
    changePassword: {
        link: "Изменить пароль",
        class: "profile__changePasswordButton",
        htmlName: "changePassword"
    },
    exitProfile: {
        link: "Выйти",
        class: "profile__exitButton",
        htmlName: "exitProfile"
    },
    inputFileds: {
        class: "profile__data__data",
        classActive: "profile__data__data__active"
    },
    errorLabel: [
        "errorEmail",
        "errorLogin",
        "errorFirstName",
        "errorSecondName",
        "errorPhone",
        "errorPassword",
        "errorPasswordCheck"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAhn5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarInput", ()=>(0, _component.AvatarInput));
var _component = require("./component");

},{"./component":"fF7Sw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fF7Sw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarInput", ()=>AvatarInput);
var _components = require("components");
var _fileInput = require("components/inputs/fileInput");
class AvatarInput extends (0, _components.FileInput) {
    constructor(){
        const onFileChangeCallback = function() {
            const fileInput = this._unwrappedElement;
            const submitState = this.refs.avatarSubmit.state;
            // console.log(`FILE CHANGE`, fileInput.value);
            if (!fileInput.value) submitState.uploadingStatus = (0, _fileInput.EnumFileUploadingStatus).FileNotSelected;
            else submitState.uploadingStatus = (0, _fileInput.EnumFileUploadingStatus).FileSelected;
        };
        super({
            props: {
                htmlClasses: [
                    "upload-avatar"
                ]
            },
            chooseButtonProps: {
                label: "upload avatar",
                htmlClasses: [
                    "profile__avatar__change__button"
                ]
            },
            fileInputProps: {
                htmlAttributes: {
                    name: "avatar"
                },
                events: {
                    change: [
                        onFileChangeCallback
                    ]
                }
            }
        });
    }
}

},{"components":"dHnah","components/inputs/fileInput":"gmiOZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdnHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubmitSection", ()=>(0, _component.SubmitSection));
var _component = require("./component");

},{"./component":"d4peN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4peN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubmitSection", ()=>SubmitSection);
var _dom = require("core/Dom");
var _components = require("components");
var _services = require("services");
var _api = require("utils/api");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class SubmitSection extends (0, _dom.Block) {
    constructor(){
        super({
            state: {
                uploadingStatus: ""
            }
        });
    }
    _afterPropsAssignHook() {
        super._afterPropsAssignHook();
        const submitButton = this._createSubmitButton();
        this.children.submitButton = submitButton;
        submitButton.refs.submitSection = this;
    }
    _createSubmitButton() {
        const afterRequestCallback = (function(response) {
            let uploadingStatus = "Changed successfully";
            if (!(0, _api.APIResponseHasError)(response)) {
                const userData = (0, _api.transformProfileAPIResponseToUserData)(response);
                window.store.dispatch({
                    user: userData
                });
            } else uploadingStatus = response.reason;
            this.state.uploadingStatus = uploadingStatus;
        }).bind(this);
        const onClickCallback = function() {
            const { avatarInput , submitSection  } = this.refs;
            const fileInput = avatarInput.children.fileInput._unwrappedElement;
            if (!fileInput.value) {
                submitSection.state.uploadingStatus = "File not selected";
                return;
            }
            const formData = new FormData(avatarInput._unwrappedElement);
            fileInput.value = "";
            (0, _services.ProfileService).changeUserAvatar(formData, afterRequestCallback);
        };
        return new (0, _components.Button)({
            props: {
                label: "Save avatar",
                htmlClasses: [
                    "buttonAuth"
                ],
                events: {
                    click: [
                        onClickCallback
                    ]
                }
            }
        });
    }
    render() {
        return 0, _templateDefault.default;
    }
}

},{"core/Dom":"i0KHM","components":"dHnah","services":"f5PO7","utils/api":"i2lTI","./template":"juYWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juYWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <div class="profile__avatar__saveAvatar">
    {{{ submitButton }}}
    {{#if uploadingStatus }}
      <div  class="profile__avatar__info">
        <span>{{ uploadingStatus }}</span>
      </div>
    {{/if}}
  </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1Xr3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundErrorPage", ()=>NotFoundErrorPage);
parcelHelpers.export(exports, "AuthorizationRequiredErrorPage", ()=>AuthorizationRequiredErrorPage);
var _link = require("components/link");
var _dom = require("core/Dom");
var _router = require("core/Router");
var _hocs = require("hocs");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
const LinkWithRouter = (0, _hocs.WithRouter)((0, _link.Link));
function getErrorPageClass(initProps) {
    class ErrorPage extends (0, _dom.Block) {
        constructor(){
            const children = {};
            children.homeButton = new LinkWithRouter({
                props: {
                    label: "На страницу логина",
                    htmlName: "error",
                    htmlClasses: [
                        "auth__noaccount"
                    ],
                    events: {
                        click: [
                            function() {
                                this.router.go((0, _router.AppRoutes).Login);
                            }
                        ]
                    }
                }
            });
            super({
                props: initProps,
                children
            });
        }
        render() {
            return 0, _templateDefault.default;
        }
    }
    return ErrorPage;
}
const NotFoundErrorPage = getErrorPageClass({
    errorCode: 404,
    errorDescription: "Page Not Found"
});
const AuthorizationRequiredErrorPage = getErrorPageClass({
    errorCode: 403,
    errorDescription: "Authorization Required"
});

},{"components/link":"hjADv","core/Dom":"i0KHM","core/Router":"52boY","hocs":"8D4Xk","./template":"2NFc8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NFc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
  <main class="error__container">
    <div class="error-code-section">
      <h1 class="error-code">{{ errorCode }}</h1>
    </div>
    <div class="error-description-section">
      <div class="error-description">{{ errorDescription }}</div>
    </div>
    <div class="return-link-section">
      {{{ homeButton }}}
    </div> 
  </main>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8AvjI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDescendantByPath", ()=>getDescendantByPath);
function getDescendantByPath(blockChildren, pathString) {
    const path = pathString.split(".").join(".children.").split(".");
    let result = blockChildren;
    for(let i = 0; i < path.length; i++){
        if (!result[path[i]]) break;
        result = result[path[i]];
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fFtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageSetter", ()=>(0, _page.pageSetter));
parcelHelpers.export(exports, "userSetter", ()=>(0, _user.userSetter));
parcelHelpers.export(exports, "chatsSetter", ()=>(0, _chats.chatsSetter));
parcelHelpers.export(exports, "currentChatSetter", ()=>(0, _currentChatId.currentChatSetter));
var _page = require("./page");
var _user = require("./user");
var _chats = require("./chats");
var _currentChatId = require("./current-chat-id");

},{"./page":"jGROx","./user":"3WGvP","./chats":"48pRd","./current-chat-id":"kE50e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGROx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageSetter", ()=>pageSetter);
var _store = require("core/store");
function pageSetter(newPage) {
    this.eventBus.emit((0, _store.EnumStoreEvents).PageChanged, newPage);
}

},{"core/store":"8EiUk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WGvP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userSetter", ()=>userSetter);
var _appPages = require("pages/appPages");
var _objectsHandle = require("utils/objects-handle");
function userSetter(oldValue, newValue) {
    const pageType = this.state.page;
    const { page  } = this;
    switch(pageType){
        case (0, _appPages.AppPages).Profile:
            if ((0, _objectsHandle.isNullish)(newValue)) throw new Error("User Can't Be Nullified On Profile Page");
            if (!(0, _objectsHandle.isObject)(oldValue) || !oldValue) throw new Error(`Incorrect User State ${oldValue} On Profile Page`);
            if (oldValue.avatar !== newValue.avatar) page.updateUserAvatar();
            page.updateUserInfo();
            break;
        case (0, _appPages.AppPages).Login:
            break;
        default:
    }
}

},{"pages/appPages":"c7aIo","utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48pRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatsSetter", ()=>chatsSetter);
var _appPages = require("pages/appPages");
function chatsSetter() {
    const { page  } = this.state;
    if (page !== (0, _appPages.AppPages).Chat) return;
    const { chatsList  } = this.page.refs;
    chatsList.createChatsList();
    Object.values(chatsList.children.chats).forEach((chat)=>{
        this.page.refs[`chat-${chat.chatID}`] = chat;
    });
}

},{"pages/appPages":"c7aIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kE50e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentChatSetter", ()=>currentChatSetter);
var _appPages = require("pages/appPages");
var _objectsHandle = require("utils/objects-handle");
function currentChatSetter(oldValue, newValue) {
    const newValueIsNull = (0, _objectsHandle.isNullish)(newValue);
    const { page  } = this.state;
    if (newValueIsNull) localStorage.removeItem("currentChatID");
    else localStorage.currentChatID = newValue;
    if (page !== (0, _appPages.AppPages).Chat) return;
    const { refs  } = this.page;
    refs.messagesDisplaySection.createMessagesList();
    refs.messagesDisplaySection.setChatAbsenceWarning();
    refs.addChatUsersButton.toggleDisabledState(newValueIsNull);
    refs.deleteChatButton.toggleDisabledState(newValueIsNull);
    refs.attachmentButton.assignCurrentChat();
    refs.messageInput.assignCurrentChat();
    refs.sendMessageButton.assignCurrentChat();
    refs.chooseChatAvatarButton.toggleDisabledState(newValueIsNull);
    if (!(0, _objectsHandle.isNullish)(oldValue)) refs[`chat-${oldValue}`].toggleHtmlClass("current-chat", "off");
    if (!(0, _objectsHandle.isNullish)(newValue)) refs[`chat-${newValue}`].toggleHtmlClass("current-chat", "on");
}

},{"pages/appPages":"c7aIo","utils/objects-handle":"kOfSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3V4YB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stateByPathSetter", ()=>_setters);
parcelHelpers.export(exports, "statePathRegex", ()=>_pathRegex);
var _setters = require("./setters");
var _pathRegex = require("./path-regex");

},{"./setters":"18cPE","./path-regex":"gczMQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18cPE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatAvatar", ()=>ChatAvatar);
parcelHelpers.export(exports, "ChatNewMessage", ()=>ChatNewMessage);
var _appPages = require("pages/appPages");
function ChatAvatar(chatID, newAvatar) {
    const pageType = this.state.page;
    if (pageType !== (0, _appPages.AppPages).Chat) return;
    const { page  } = this;
    const chatComponent = page.refs[`chat-${chatID}`];
    const { avatarImage  } = chatComponent.children;
    avatarImage.setPropByPath("htmlAttributes.src", newAvatar);
}
function ChatNewMessage(chatID) {
    const pageType = this.state.page;
    if (pageType !== (0, _appPages.AppPages).Chat) return;
    const { page  } = this;
    if (chatID === window.store.getCurrentChatID()) page.refs.messagesDisplaySection.createMessagesList();
    page.refs.messagesDisplaySection.setChatAbsenceWarning();
}

},{"pages/appPages":"c7aIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gczMQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatAvatarChange", ()=>ChatAvatarChange);
parcelHelpers.export(exports, "ChatNewMessage", ()=>ChatNewMessage);
const ChatAvatarChange = /^chats\.(\d+)\.avatar$/g;
const ChatNewMessage = /^chatsMessages\.(\d+)$/g;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xDdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAppData", ()=>initAppData);
var _chats = require("services/chats");
var _profile = require("services/profile");
var _sockets = require("services/sockets");
async function getAllChatsAllMessages() {
    const chatsSockets = window.store.getSocketByChatID();
    const allSockets = Object.values(chatsSockets);
    const allMessagesByChat = await Promise.all(allSockets.map(async (messagesHandler)=>{
        const messages = await messagesHandler.getAllMessages();
        const { chatID  } = messagesHandler;
        return {
            chatID,
            messages
        };
    }));
    const allChatsAllMessages = allMessagesByChat.reduce((acc, { chatID , messages  })=>{
        acc[chatID] = messages;
        return acc;
    }, {});
    window.store.dispatch({
        chatsMessages: allChatsAllMessages
    });
}
async function initAppData(userID) {
    await (0, _profile.ProfileService).getUserProfile(userID);
    await (0, _chats.ChatsService).getChats();
    const { currentChatID  } = localStorage;
    window.store.dispatch({
        currentChatID
    });
    await (0, _sockets.SocketsCreator).createAllChatsSockets();
    await getAllChatsAllMessages();
}

},{"services/chats":"NtgIu","services/profile":"iAQR1","services/sockets":"7Ucge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire25d8")

//# sourceMappingURL=index.b71e74eb.js.map
