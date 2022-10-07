function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }

    return sum;
}

let array1 = [1, 2, 3, 4]
let array2 = [-3, 5, 19, -6]

console.log(sum(array1))
console.log(sum(array2))   