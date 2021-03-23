/* Календарь */

const CalendarItemArr = document.querySelectorAll('.calendar__item')
const CalendarEventsArr = document.querySelectorAll('.calendar__item-evenst')
const CalendarBack = document.querySelector('.calendar__event-active-background')


for (let i = 0; i < CalendarItemArr.length; i++) {
    CalendarItemArr[i].addEventListener("click", function () {
        CalendarItemArr[i].classList.add('calendar__item--active');

        CalendarEventsArr.forEach(function (item) {
            item.style.display = "none";
        });
        if (!CalendarEventsArr[i]) {} else {
            CalendarEventsArr[i].style.display = "block";
            CalendarBack.style.display = "block";
        }
    });
}

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        CalendarBack.style.display = "none";
        CalendarEventsArr.forEach(function (item) {
            item.style.display = "none";
            CalendarItemArr.forEach(function (item) {
                item.classList.remove('calendar__item--active');
            });
        });
    }
});


/* --------------------------*/