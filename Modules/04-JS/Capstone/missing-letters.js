function missingLetter(str) {  
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let startingPoint = alphabet.indexOf(str[0])

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i]
        }
    }

    return undefined
}

console.log(missingLetter("abce")) 
console.log(missingLetter("abcdefghjklmno"))
console.log(missingLetter("stvwx"))
console.log(missingLetter("bcdf"))
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"))