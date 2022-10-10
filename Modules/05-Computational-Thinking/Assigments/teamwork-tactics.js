function possibleBonus(a, b) {
    if (a >= b || (a + 6) < b) {
        return false
    } else if (b <= (a + 6)) { 
        return true 
    }
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3)) 