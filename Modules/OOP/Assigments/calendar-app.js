// This is my best attempt on the calendar app assignment.
// There is a slight bug when choosing number 5 to quit the app.


const prompt = require('prompt-sync')({sigint:true});

var eventList = [];

class Event {
    constructor(date, event) {
        this.date = date;
        this.event = event;
    }

    addEvent() {
        let event = [this.date, this.event];
        eventList.splice(eventList.length, 0, event);
    }
}

function displayCalendarApp() {
  console.log(`
  --------- CALENDAR APP ----------
  What would you like to do?
  1. View my event list.
  2. Add a new event.
  3. Edit an event.
  4. Delete an event.
  5. Quit app.
  `)

  var userInput = prompt('Enter (1/2/3/4/5): ');

  switch(userInput) {
      case '1':
          for (var i = 0; i < eventList.length; i++) {
          if (eventList === []) {
              console.log('You have 0 events!');
          } else {
              console.log(`${i}. ${eventList[i][0]} - ${eventList[i][1]}`);
          }
          };
          displayCalendarApp();
      case '2':
          let addEvent = prompt('Enter your event: ');
          let addDate = prompt('Enter your date: ');
          let event = new Event(addDate, addEvent);
          event.addEvent();
          console.log(eventList);
          displayCalendarApp();
      case '3':
          let editEvent = prompt('Enter the event number you would like to edit: ');
          let newEvent = prompt('Change the event to: ');
          let newDate = prompt('Change the date to: ');
          let changeEvent = [newDate, newEvent];
          eventList[Number(editEvent - 1)] = changeEvent;
          console.log(eventList);
          displayCalendarApp(); 
      case '4': 
          let deleteEvent = prompt('Enter the event number you want to delete: ');
          eventList.splice(Number(deleteEvent - 1), 1);
          console.log(eventList);
          displayCalendarApp();
      case '5': 
          break;
  }
}

displayCalendarApp();
