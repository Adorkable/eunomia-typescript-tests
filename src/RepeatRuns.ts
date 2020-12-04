export const randomRuns = 500

export const repeatRuns = (run: () => void, overrideRuns?: number) => {
    const runs = overrideRuns !== undefined ? overrideRuns : randomRuns
    for (let count = 0; count < runs; count++) {
        run()
    }
}

export const repeatRunsChanged = <TestType>(run: () => [TestType, TestType], overrideRuns?: number): [number, number] => {
    let changedCount = 0

    const runs = overrideRuns !== undefined ? overrideRuns : randomRuns

    for (let count = 0; count < runs; count++) {
        const [original, changed] = run()
        if (original !== changed) {
            changedCount += 1
        }
    }

    return [runs, changedCount]
}

export const repeatRunsTestChanged = <TestType>(test: () => [TestType, TestType], changedPercentMinimum: number, overrideRuns?: number) => {
    const [runs, changed] = repeatRunsChanged(test, overrideRuns)

    expect(changed).toBeGreaterThan(runs * changedPercentMinimum)
}