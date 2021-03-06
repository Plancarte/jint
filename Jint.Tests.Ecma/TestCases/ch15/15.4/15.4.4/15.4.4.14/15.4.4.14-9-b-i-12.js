/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-12.js
 * @description Array.prototype.indexOf - element to be retrieved is own accessor property that overrides an inherited data property on an Array-like object
 */


function testcase() {
        var obj = { length: 1 };

        try {
            Object.prototype[0] = false;
            Object.defineProperty(obj, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

            return 0 === Array.prototype.indexOf.call(obj, true);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
