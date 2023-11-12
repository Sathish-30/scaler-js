const areaOfTriangle = (side1 , side2 , side3) => {
    const s = (side1 + side2 + side3) / 2;
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3) );
}
const side1 = 5 ;
const side2 = 6  ;
const side3 = 7 ;
console.log(`The area of triangle of sides ${side1} , ${side2} , ${side3} is ${areaOfTriangle(side1,side2 , side3).toFixed(3)} square meters`)