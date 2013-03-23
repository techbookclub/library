var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'];

function createCalendar(year, month) {
  var currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(0);

  var date = new Date(year, month - 1, 1);

  var firstDay = date.getDay();

  var el = document.createElement('div');

  el.classList.add('calendar');

  var html = '';

  html += '<h1>' + MONTHS[month - 1] + '</h1>';

  html += '<table>';

  var nextMonth = false;
  var day = 1 - firstDay;
  for (var i = 1; i <= 6; i++) {
    html += '<tr>';
    for (var j = 0; j < 7; j++) {

      if ((day >= 1) && !nextMonth) {
        var disabled = (date < currentDate);

        html += '<td>';
        html += day;
      } else {
        html += '<td>';
      }

      day++;

      if ((day > 1) && !nextMonth) {
        date.setDate(day);
        if (date.getMonth() != (month - 1)) {
          nextMonth = true;
        }
      }
    }

    if (nextMonth) {
      break;
    }
  }
  html += '</table>';

  el.innerHTML += html;

  document.querySelector('.calendars').appendChild(el);
}

function main() {
  createCalendar(2012, 9);
  createCalendar(2012, 10);
  createCalendar(2012, 11);
  createCalendar(2012, 12);
  createCalendar(2013, 1);
  createCalendar(2013, 2);
  createCalendar(2013, 3);

  document.body.scrollTop = 99999;
}