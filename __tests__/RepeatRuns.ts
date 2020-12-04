import { repeatRuns, repeatRunsChanged } from "../src"

test('repeatRuns', () => {
    let runs = Math.floor(Math.random() * 100)
    let count = 0
    
    repeatRuns(() => {
        count += 1
    }, runs)

    expect(count).toEqual(runs)
})

test('repeatRunsChanged', () => {
    let runs = Math.floor(Math.random() * 100)
    let count = 0
    
    let [, runsChanged] = repeatRunsChanged(() => {
        if (Math.random() > 0.5) {
            count += 1
            return [0, 1]
        } else {
            return [0, 0]
        }
    }, runs)

    expect(runsChanged).toEqual(count)
})

test('repeatRunsTestChanged', () => {
    // TODO: how do I test that the expect triggers?
})