/* Мобильное меню */

const CalendarItemArr = document.querySelectorAll('.calendar__item')
const CalendarEventsArr = document.querySelectorAll('.calendar__item-evenst')
const CalendarBack = document.querySelector('.calendar__event-active-background')


for (let i = 0; i < CalendarItemArr.length; i++) {
    CalendarItemArr[i].addEventListener("click", function(){

        CalendarEventsArr.forEach(function(item) {
           item.style.display = "none";
          });

          if(!CalendarEventsArr[i]){} else {CalendarEventsArr[i].style.display = "block";
          CalendarBack.style.display = "block";}
    });
  }

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        CalendarBack.style.display = "none";
        CalendarEventsArr.forEach(function(item) {
            item.style.display = "none";
           });
    }
  });


/* --------------------------*/