System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milissegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = (...args) => {
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                console.log('teste');
                timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
            };
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});