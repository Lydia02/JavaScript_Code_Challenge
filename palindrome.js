function largestPalindromeProduct(digits) {
    let maxNum = 10 ** digits - 1;
    let minNum = 10 ** (digits - 1);
    let maxPalindrome = 0;

    for (let i = maxNum; i >= minNum; i--) {
        for (let j = i; j >= minNum; j--) {
            let product = i * j;
            if (product > maxPalindrome && product.toString() === product.toString().split('').reverse().join('')) {
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}
console.log(largestPalindromeProduct(3)); // Outputs: 906609
