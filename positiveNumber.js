function smallestMultiple(n) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return a * b / gcd(a, b);
    }

    let lcmNum = 1;
    for (let i = 1; i <= n; i++) {
        lcmNum = lcm(lcmNum, i);
    }
    return lcmNum;
}
console.log(smallestMultiple(20)); 