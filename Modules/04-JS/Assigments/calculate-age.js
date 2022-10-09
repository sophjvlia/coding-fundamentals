function calculateAge(date) {
    let formattedDate = date.split("/")
    let birthDate = new Date(formattedDate[2], formattedDate[1], formattedDate[0])
    let currentDate = new Date().getTime() 
    let difference = currentDate - birthDate
    let currentAge = Math.floor(difference / 1000 / 60 / 60 / 24 /365.25)

    return currentAge
}

console.log(calculateAge("20/7/2002"))  
console.log(calculateAge("10/1/1979")) 