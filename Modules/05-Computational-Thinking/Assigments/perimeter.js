function perimeter(shape, num) {
    const square = "s"
    const circle = "c" 

    return shape === square ? num * 4
           : shape === circle ? num * 6.28
           : "Enter a valid shape."       
}

console.log(perimeter("s", 7)) 
console.log(perimeter("c", 4))
console.log(perimeter("c", 9)) 