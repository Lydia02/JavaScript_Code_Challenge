function largestPrimeFactor(n) {
    let factor = 2, lastFactor = 1;
    while (n > 1) {
        if (n % factor === 0) {
            lastFactor = factor;
            n /= factor;
            while (n % factor === 0) {
                n /= factor;
            }
        }
        factor++;
    }
    return lastFactor;
}
console.log(largestPrimeFactor(600851475143));
