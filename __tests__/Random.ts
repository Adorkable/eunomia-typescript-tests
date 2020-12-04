import { randomNumbers } from '../src'

import { repeatRuns } from '../src'

test('randomNumbers', () => {
    repeatRuns(() => {
        const count = Math.floor(Math.random() * 100)
        const result = randomNumbers(count)
        expect(result.length).toEqual(count)
    })
})
