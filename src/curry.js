export function curry(fn) {
    const argN = fn.length;
    return function (...args) {
        if (args.length < argN) {
            return curry(fn.bind(this, ...args));
        } else {
            return fn.call(this, ...args);
        }
    }
}
