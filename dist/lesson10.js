"use strict";
var getValue = function () { return 2; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getValue(); }
    if (salary === void 0) { salary = 1; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(60);
getBonus(20, 40);
getBonus(20, 40, 10);
//# sourceMappingURL=lesson10.js.map