function sumFirstLast(input) {
    let result = Number(input[0]) + Number(input[input.length - 1])
    return result
}

function evenPositions(arr) {
    let result = arr.filter((el, i) => i % 2 === 0).join(' ')
    return result
}

function evenPositions2(arr) {
    let result = [];
    for (let i in arr)
        if (i % 2 == 0)
            result.push(arr[i]);
    return result.join(' ');
}

function negativePositiveNums(arr) {
    let result = []
    for (let num of arr) {
        if (num >= 0) {
            result.push(num)
        } else {
            result.unshift(num)
        }
    }
    return result.join('\n')
}

function firstAndLastK(arr) {
    let n = arr.shift()
    console.log(arr.slice(0, n).join(' '))
    console.log(arr.slice(arr.length - n, arr.length).join(' '))
}

function lastKNumberSeq(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        result[i] = result
            .slice(Math.max(0, result.length - k), i + k)
            .reduce((a, b) => { return a + b }, 0)
    }
    return result
}

function processOddNumbers(arr) {
    let result = arr.filter((num, i) => i % 2 === 1)
        .map(x => 2 * x)
        .reverse()


    return result.join(' ')
}

function twoSmallesNums(arr) {
    console.log(
        arr.sort((a, b) => a - b).slice(0, 2)
    )
}

function biggestElement(matrix) {
    let n = Number.NEGATIVE_INFINITY
    matrix.forEach(
        r => r.forEach(
            c => n = Math.max(n, c)
        )
    )
    return n
}

function matrixMaxNum(matrix) {
    let result = matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)[0]
    return result
}

function diagonalSums(matrix) {
    let normalDiag = 0
    let oppositeDiag = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                normalDiag += matrix[row][col]
                oppositeDiag += matrix[row][matrix.length - 1 - row]
            }
        }
    }
    return normalDiag + ' ' + oppositeDiag
}