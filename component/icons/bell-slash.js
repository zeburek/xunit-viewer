import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1430 852q61 356 298 556 0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5zm-534 860q16 0 16-16t-16-16q-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5zm1002-1600q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z' }));;
}