function solve(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
}

function printRectangleAreaAndPerimeter(sideA, sideB) {

    console.log(sideA * sideB);
    console.log(2 * sideA + 2 * sideB);
}

function calcDistance(input) {
    let V1 = input[0]
    let V2 = input[1]
    let T = input[2] / 3600

    let S1 = V1 * T
    let S2 = V2 * T

    console.log(Math.abs(S1 - S2) * 1000)
}

function gradToDegrees(grad) {
    let gradModular = grad % 400
    let degrees = gradModular * 0.9
    let degreeOutput = degrees > 0 ? degrees : 360 + degrees
    return degreeOutput
}

function calcDistanceBetweenTwoPoints([firstPointX, firstPointY, firstPointZ, secondPointX, secondPointY, secondPointZ]) {

    return Math.sqrt(
        Math.pow(secondPointX - firstPointX, 2) +
        Math.pow(secondPointY - firstPointY, 2) +
        Math.pow(secondPointZ - firstPointZ, 2));
}
function calcDeposit([sum, interest, months, years]) {

    // Formula: P * (1 + i/n)^(nt)
    let p = sum;
    let i = interest / 100;
    let n = 12 / months;

    let compoundInterest = p * Math.pow((1 + i / n), n * years);
    return compoundInterest.toFixed(2);
}

function roundsNums(input) {
    let number = input[0]
    let roundTo = input[1]
    if (roundTo > 15) {
        roundTo = 15
    }
    let result = Number(number.toFixed(roundTo))
    return result
}

function inchesToFeet(num) {
    let result = `${Math.floor(num / 12)}'-${num % 12}"`
    return result
}
console.log(inchesToFeet(11))

function musicTrack(input) {
    let artist = input[0]
    let trackName = input[1]
    let duration = input[2]
    let result = `Now Playing: ${trackName} - ${artist} [${duration}]`
    return result
}
function composeImgUrl(input) {
    let result = `<img src="${input[0]}" alt="${input[1]}">`
    return result
}
function convertBinaryToDecimal(binaryNum) {

    return parseInt(binaryNum, 2);
}
function generateObject(args) {

    let obj = {};

    for (let i = 0; i < args.length; i += 2) {

        obj[args[i]] = args[i + 1];
    }

    return obj;
}

console.log(generateObject(['name', 'Pesho', 'age', '23', 'gender', 'male']))

function lastMonth([day, month, year]) {
    let newDate = new Date(year, month - 1, 0)
    let daysCount = newDate.getDay() + newDate.getMonth()
    return daysCount
}
function printTriangleOfDollars(rows) {

    for (let row = 0; row < rows; row++) {

        console.log("$".repeat(row + 1));
    }
}

function printMultiplicationTable(n) {

    let html = "<table border=\"1\">\n";

    for (let row = 0; row < n + 1; row++) {

        html += "  <tr>";

        for (let col = 0; col < n + 1; col++) {

            if (row === 0 && col === 0) {

                html += "<th>x</th>";
            } else if (row === 0) {

                html += `<th>${col}</th>`;
            } else {

                if (col === 0) {

                    html += `<th>${row}</th>`;
                } else {

                    html += `<td>${row * col}</td>`;
                }
            }
        }

        html += "</tr>\n";
    }

    html += "</table>";

    return html;
}

function printFigureOf4Squares(n) {

    let totalRows = n;
    if (n % 2 === 0) {

        totalRows -= 1;
    }

    let result = "";
    let dashOrSpaceCount = ((2 * n - 1) - 3) / 2; // total symbols on row minus the three "+" or "|" then divided by two
    let middleRow = Math.floor((n - 1) / 2);

    for (let row = 0; row < totalRows; row++) {

        let plusOrPipe = "|";
        let dashOrSpace = " ";

        // first row, middle row, last row
        if (row === 0 || row === middleRow || row === totalRows - 1) {

            plusOrPipe = "+";
            dashOrSpace = "-";
        }

        result += `${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}\n`;
    }

    return result;
}