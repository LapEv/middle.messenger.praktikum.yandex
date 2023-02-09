import isObjects from "./is-object";

export default function cloneDeep<T extends object = object>(obj: T) {
  return (function clonesDeep(
    item: T
  ): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    // Handle:
    // * null
    // * undefined
    // * boolean
    // * number
    // * string
    // * symbol
    // * function
    if (item === null || typeof item !== "object") {
      return item;
    }

    // Handle:
    // * Date
    if (item instanceof Date) {
      return new Date(item.valueOf());
    }

    // Handle:
    // * Array
    if (item instanceof Array) {
      const copy: unknown[] = [];

      item.forEach((_, i) => {
        return (copy[i] = clonesDeep(item[i]));
      });

      return copy;
    }

    // Handle:
    // * Set
    if (item instanceof Set) {
      const copy = new Set();

      item.forEach((v) => copy.add(clonesDeep(v)));

      return copy;
    }

    // Handle:
    // * WebSocket
    if (item instanceof WebSocket) {
      return item;
    }

    // Handle:
    // * Map
    if (item instanceof Map) {
      const copy = new Map();

      item.forEach((v, k) => copy.set(k, clonesDeep(v)));

      return copy;
    }

    // Handle:
    // * Object
    if (isObjects<T>(item)) {
      const copy: Record<string | symbol, unknown> = {};

      // Handle:
      // * Object.symbol
      Object.getOwnPropertySymbols(item).forEach(
        (s) => (copy[s] = clonesDeep(item[s]))
      );

      // Handle:
      // * Object.name (other)
      Object.keys(item).forEach((k) => (copy[k] = clonesDeep(item[k])));

      return copy;
    }

    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}
