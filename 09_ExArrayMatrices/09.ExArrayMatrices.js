function arrayDelimiter(array) {
    let delimiter = array.pop()
    let result = array.join(delimiter)
    return result
}

function printNthElement(array) {
    let n = Number(array.pop())
    for (let a = 0; a < array.length; a += n) {
        console.log(array[a])

    }
}