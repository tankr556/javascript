function calculatrice(a, b, op) {
    switch (op) {
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case '*':
            return a * b
            break;
        case '/':
            return a / b
            break;

    }
}
console.log(calculatrice(5, 5, '+'));