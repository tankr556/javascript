var a = 65, b = 75, c = 55, d = 95, e = 66, f = 78, g = 78;
var t;
console.log("Enter your marks in Gujarati:65 ");
console.log("Enter your marks in English:75 ");
console.log("Enter your marks in Science:55 ");
console.log("Enter your marks in Computer:95 ");
console.log("Enter your marks in Mathematics:66 ");
console.log("Enter your marks in Social Science:78 ");
console.log("Enter your marks in Sanskrit:78 ");

var t = (a + b + c + d + e + f + g) / 700 * 100;
console.log("Your Percentage is", t);

if (t > 75 && t <= 100) {
    console.log("You are pass with A1 grade");
}
else if (t > 60 && t <= 75) {
    console.log("You are pass with B1 grade");
}
else if (t > 45 && t <= 60) {
    console.log("You are pass with C1 grade");
}
else if (t > 35 && t <= 45) {
    console.log("You are pass with D1 grade");
}
else {
    console.log("Your are Fail");
}
