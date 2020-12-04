export const randomNumbers = (amount: number): Array<number> => {
    const result: Array<number> = []
    for (var count = 0; count < amount; count++) {
        result.push(Math.random())
    }
    return result
}