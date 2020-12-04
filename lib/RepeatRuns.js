"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatRunsTestChanged = exports.repeatRunsChanged = exports.repeatRuns = exports.randomRuns = void 0;
exports.randomRuns = 500;
var repeatRuns = function (run, overrideRuns) {
    var runs = overrideRuns !== undefined ? overrideRuns : exports.randomRuns;
    for (var count = 0; count < runs; count++) {
        run();
    }
};
exports.repeatRuns = repeatRuns;
var repeatRunsChanged = function (run, overrideRuns) {
    var changedCount = 0;
    var runs = overrideRuns !== undefined ? overrideRuns : exports.randomRuns;
    for (var count = 0; count < runs; count++) {
        var _a = run(), original = _a[0], changed = _a[1];
        if (original !== changed) {
            changedCount += 1;
        }
    }
    return [runs, changedCount];
};
exports.repeatRunsChanged = repeatRunsChanged;
var repeatRunsTestChanged = function (test, changedPercentMinimum, overrideRuns) {
    var _a = exports.repeatRunsChanged(test, overrideRuns), runs = _a[0], changed = _a[1];
    expect(changed).toBeGreaterThan(runs * changedPercentMinimum);
};
exports.repeatRunsTestChanged = repeatRunsTestChanged;
