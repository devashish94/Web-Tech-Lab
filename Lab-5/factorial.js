console.log("Program for Factorial");
function fact(x) {
    if (x == 1 || x == 0) {
        return 1;
    }
    return x * fact(x - 1);
}
for (let i = 0; i < 12; i++) {
    console.log("Factorial of " + i + ": " + fact(i));
}
