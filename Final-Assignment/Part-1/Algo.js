// 1. Reverse A String Using Loops.

function reverse(string) {
    let reverseString = '';

    for (let i = string.length - 1; i >=0; i--) {
        reverseString += string[i];
    }

    return reverseString;
}

console.log(reverse('abcde'))
console.log(reverse('hello'))
console.log(reverse('Greetings from The Hacker Collective'))

// 2. Same Back And Forth

function sameBackAndForth(string) {
    let reverseString = '';

    for (let i = string.length - 1; i >=0; i--) {
        reverseString += string[i];
    }

    if (string === reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(sameBackAndForth("abba"))
console.log(sameBackAndForth("abcdefg"))

// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(number) {
    let reverseNumber = String(number).split('').reverse().join('');
    
    return parseInt(reverseNumber) * Math.sign(number); 
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))

// 4. SumArr - Find the sum of all items in an array, using loops.

function sumArr(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArr([1,2,3,4,5]))
console.log(sumArr([1000,2000,44,55,22]))
console.log(sumArr([123,456,789])) 

// 5. Angry Grandma

function deafGrandma(string) {
    let sentence = string + '!!';
    let newSentence = sentence.split(' ')
    .join('!! ')
    .toUpperCase();

    return newSentence;
}

console.log(deafGrandma("I have a bad feeling about this"))

// 6. What Is Missing

function whatIsMissing(str) {  
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0]);

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        };
    };

    return undefined;
}

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz"))
console.log(whatIsMissing("bcdf"))
console.log(whatIsMissing("abcdefghjklmno"))

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function swap(sentence, before, after) { 
    let sentenceArr = sentence.split(' ');
    let isUpper = (before[0].toUpperCase() === before[0]) && (after[0].toUpperCase() === after[0]);
    let isLower = (before[0].toLowerCase() === before[0]) && (after[0].toLowerCase() === after[0]);
    
    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i] == before && (isUpper || isLower)) {
            sentenceArr[i] = after;
        } else if (sentenceArr[i] == before && !isUpper) {
            sentenceArr[i] = after.charAt(0).toUpperCase() + after.slice(1);
        }
    }
    
    return sentenceArr.join(' ');
}

console.log(swap("His name is Tom", "Tom", "john"))
console.log(swap("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swap("This has a spellngi error", "spellngi", "spelling")) 