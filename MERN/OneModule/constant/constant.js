"use strict";
exports.__esModule = true;
exports.constant = void 0;
var constant = /** @class */ (function () {
    function constant() {
    }
    // public static regex =/^[a-zA-Z ]|^[0-9]|^[^\s@]+@[^\s@]+\.[^\s@]$/;
    // static function (reg:string) : any{
    //     var emregex= /^[^\s@]+@[^\s@]+\.[^\s@]$/;
    // }
    // regex:string{
    //     var emregex= /^[^\s@]+@[^\s@]+\.[^\s@]$/;
    //     var numregex=/^[0-9]$/;
    // }
    constant.emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    constant.numregex = /^[0-9]+$/;
    return constant;
}());
exports.constant = constant;

