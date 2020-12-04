import { randomNumbers } from '../src/Random'

import { repeatRuns } from '../src/RepeatRuns'

test('randomNumbers', () => {
    repeatRuns(() => {
        const count = Math.floor(Math.random() * 100)
        const result = randomNumbers(count)
        expect(result.length).toEqual(count)
    })
})
