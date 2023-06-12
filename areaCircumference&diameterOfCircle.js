const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const areaOfCircles = radius.map(area);
const circumferenceOfCircles = radius.map(circumference);
const diameterOfCircles = radius.map(diameter);

console.log('area', areaOfCircles);
console.log('area', circumferenceOfCircles);
console.log('area', diameterOfCircles);