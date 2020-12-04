export declare const randomRuns = 500;
export declare const repeatRuns: (run: () => void, overrideRuns?: number | undefined) => void;
export declare const repeatRunsChanged: <TestType>(run: () => [TestType, TestType], overrideRuns?: number | undefined) => [number, number];
export declare const repeatRunsTestChanged: <TestType>(test: () => [TestType, TestType], changedPercentMinimum: number, overrideRuns?: number | undefined) => void;
