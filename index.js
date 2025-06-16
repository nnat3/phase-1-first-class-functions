const receivesAFunction = (callback) => {
    return callback();
}
const returnsANamedFunction = (fn) => {
    return function namedFunction() {
        return returnsANamedFunction;
    }
}

const returnsAnAnonymousFunction = (bb) => {
return function(mrAnonymous) {
return returnsAnAnonymousFunction;
}
}