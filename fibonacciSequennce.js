function evenFibonacciSum(limit) {
    let a = 1, b = 2, total = 0;
    while (a <= limit) {
        if (a % 2 === 0) {
            total += a;
        }
        [a, b] = [b, a + b];
    }
    return total;
}
console.log(evenFibonacciSum(4000000)); // Outputs: 4613732
