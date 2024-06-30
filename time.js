import * as all from './location.js';

export function getDayOfWeek(dateString) {

    let date = new Date(dateString);

    let daysOfWeek = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    let dayIndex = date.getDay();

    let dayName = daysOfWeek[dayIndex];

    // all.displayData(dayName);
    return dayName;
}

 let dateString;

 let dayOfWeek = getDayOfWeek(dateString);
// console.log(dayOfWeek);