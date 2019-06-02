function insideVolume(arr) {


    function isPointInsideFigure(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        let result = (x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2)
        return result
    }



    for (let i = 0; i < arr.length; i += 3) {
        let x = arr[i]
        let y = arr[i + 1]
        let z = arr[i + 2]

        if (isPointInsideFigure(x, y, z)) {
            console.log("inside");
        }
        else {
            console.log("outside");
        }
    }
}

function speedLimit(speed, area) {

    function getLimitFromZone(zone) {
        switch (area) {

            case 'city':
                return 50

            case 'interstate':
                return 90

            case 'motorway':
                return 130

            case 'residential':
                return 20

        }
    }
    let speedLimit = getLimitFromZone(area)
    let speedDiff = Number(speed - speedLimit);

    if (speedDiff <= 0) {
        return ""
    } else if (speedDiff <= 20) {
        return "speeding";
    } else if (speedDiff <= 40) {
        return "excessive speeding";
    } else {
        return "reckless driving";
    }

}