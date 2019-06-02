function multiplyNums(a, b) {
    let result = a * b
    return result
}

function fitBottles(n, k) {
    console.log(Math.ceil(n / k))
}

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes")
        return
    }
    console.log("no")
}

function calcArea(r) {
    let area = Math.PI * r * r
    console.log(area)
    console.log(area.toFixed(2))
}

function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c))
    console.log(area)
}

function cone(r, h) {
    let s = Math.sqrt(r * r + h * h)
    let volume = Math.PI * r * r * h / 3
    console.log("volume = " + volume)
    let area = Math.PI * r * (r + s)
    console.log("area = " + area)
}

function oddEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    }
    else if (Math.abs(num % 2) === 1) {
        console.log("odd")
    }
    else {
        console.log("invalid")
    }
}

function friutOrVeg(name) {
    switch (name) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'parsley':
        case 'garlic':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;

    }
}

function colorfulNumbers(n) {
    let result = '<ul>\n'
    for (let i = 1; i <= n; i++) {
        let color = i % 2 === 0 ? 'green' : 'blue'
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`

    }
    result += '/<ul>'
    return result
}
console.log(colorfulNumbers(5))

function mathLog(num) {
    for (let x of num) {
        console.log(Math.log2(x))
    }
}

function lastMath(num) {
    let prime = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false
            break
        }
    }
    return prime && num > 1
}