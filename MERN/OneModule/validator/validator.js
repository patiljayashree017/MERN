"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValidStr = function (s, regex, min, max) {
        return (max) ? (s.length >= min && s.length <= max && regex.test(s)) : (regex.test(s));
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
