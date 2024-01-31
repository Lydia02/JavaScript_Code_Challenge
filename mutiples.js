function sumOfMultiples(limit, a, b) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfMultiples(1000, 3, 5)); 
