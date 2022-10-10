function getDay(date1, date2) {
    let firstDate = new Date(date1);
    let secondDate = new Date(date2);

    let timeDifference = secondDate - firstDate;
    let dayDifference = timeDifference / (1000 * 3600 * 24);

    return dayDifference
} 

console.log(getDay("June 14, 2019", "June 20, 2019"))
console.log(getDay("December 29, 2018", "January 1, 2019"))
console.log(getDay("July 20, 2019", "July 30, 2019")) 