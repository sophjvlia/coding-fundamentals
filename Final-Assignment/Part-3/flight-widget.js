const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: '13:20',
        destination: 'SINGAPORE',
        flight: 'SQ 8511',
        gate: 'L 38',
        remarks: 'ON TIME'
    },
    {
        time: '14:35',
        destination: 'SYDNEY',
        flight: 'QR 4965',
        gate: 'G 17',
        remarks: 'DELAYED'
    },{
        time: '14:45',
        destination: 'PERTH',
        flight: 'MXD 191',
        gate: 'H 51',
        remarks: 'CANCELLED'
    },
    {
        time: '14:50',
        destination: 'AMSTERDAM',
        flight: 'AF 8398',
        gate: 'K 02',
        remarks: 'ON TIME'
    },
    {
        time: '14:55',
        destination: 'SEOUL',
        flight: 'DL 7912',
        gate: 'E 24',
        remarks: 'ON TIME'
    }
];

const destinations = [
    'JAKARTA',
    'AUCKLAND',
    'PARIS',
    'TOKYO',
    'MELBOURNE',
    'LONDON',
    'BANGKOK',
    'SHANGHAI',
    'BERLIN',
    'ROME',
    'OMAN',
    'NEW YORK',
    'MADRID',
    'ABU DHABI',
    'TORONTO'
];
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED'];
let hour = 15;

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr');

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td');
            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div');

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index)
            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}

populateTable();

function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
    const numbers = '0123456789';

    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1);
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
    }

    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
    let displayHour = hour;

    if (hour < 24) {
        hour++;
    }

    if (hour >= 24) {
        hour = 1;
        displayHour = hour;
    }

    if (hour < 10) {
        displayHour = '0' + hour;
    }

    return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber();
}

function shuffle() {
    flights.shift();
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = '';
    populateTable();
}

setInterval(shuffle, 10000);