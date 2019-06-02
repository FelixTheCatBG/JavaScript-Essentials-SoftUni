function printTriangle(number) {
    function firstFunction(num) {
        console.log('*'.repeat(num))
    }
    for (let i = 1; i <= number; i++) {
        firstFunction(i)
    }
    for (let i = number - 1; i > 0; i--) {
        firstFunction(i)
    }
}
function printSquare(size = 5) {

    for (let row = 0; row < size; row++) {

        console.log("* ".repeat(size));
    }
}

function isPalindrome(input) {

    for (let index = 0; index < input.length / 2; index++) {

        if (input[index] !== input[input.length - 1 - index]) {
            return false;
        }

        return true;
    }
}

function getDayOfWeekNumber(day) {

    switch (day) {

        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4;
        case "Friday":
            return 5;
        case "Saturday":
            return 6;
        case "Sunday":
            return 7;
        default:
            return "error";
    }
}

function calculate(a, b, op) {

    let calc = function (a, b, op) {
        return op(a, b);
    };

    let add = function (a, b) {
        return a + b;
    };

    let subtract = function (a, b) {
        return a - b;
    };

    let multiply = function (a, b) {
        return a * b;
    };

    let divide = function (a, b) {
        return a / b;
    };

    switch (op) {

        case "+":
            return calc(a, b, add);

        case "-":
            return calc(a, b, subtract);

        case "*":
            return calc(a, b, multiply);

        case "/":
            return calc(a, b, divide);
    }
}

function dayOOfWeek(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let index = arr.indexOf(day)
    return index > -1 ? index + 1 : 'error'
}

function printWordsUppercase(input) {

    let words = input.toUpperCase().split(/\W+/);

    words = words.filter(w => w !== '');
    let result = words.join(", ");
    console.log(result);
}

printWordsUppercase('How,Are YOU?')

// words = words.filter(w => w !== '');