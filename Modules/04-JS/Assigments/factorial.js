function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    return num;
}

console.log(factorial(5)) 
console.log(factorial(4)) 
console.log(factorial(1))  