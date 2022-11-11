function fibonacci(num) {
    var x = 0;
    var y = 1;
    var z;
    var i = 2;
    while (i < num) {
        z = x + y;
        x = y;
        y = z;

        i = i + 1;
    }
    return y;
}

var num = 9;
answer = fibonacci(num);
console.log("The 9th term of the fibonacci series is: ", answer);