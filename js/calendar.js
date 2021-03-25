/* Календарь */

const CalendarItemArr = document.querySelectorAll('.calendar__item')
const CalendarEventsArr = document.querySelectorAll('.calendar__item-evenst')
const CalendarBack = document.querySelector('.calendar__event-active-background')


for (let i = 0; i < CalendarItemArr.length; i++) {
    CalendarItemArr[i].addEventListener("click", function () {
        if (!CalendarEventsArr[i]) {} else {
        CalendarItemArr[i].classList.add('calendar__item--active');
    }
         CalendarEventsArr.forEach(function (item) {
            item.style.display = "none";
        });

        if (!CalendarEventsArr[i]) {} else {
            CalendarEventsArr[i].style.display = "block";
            CalendarBack.style.display = "block";
        }
    });
}

CalendarBack.addEventListener("click", function () {

    CalendarEventsArr.forEach(function (item) {
        item.style.display = "none";
    });

    CalendarItemArr.forEach(function (item) {
        item.classList.remove('calendar__item--active');
    });
    
    CalendarBack.style.display = "none";
});

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

const monthItem = document.querySelectorAll('.page-header__month')
const mothPrev = document.querySelector('.page-header__month-arrow-prev')
const mothNext = document.querySelector('.page-header__month-arrow-next')

for (let i = 0; i < monthItem.length; i++) {
    if (monthItem[i].classList.contains('page-header__month--active') == true) {
        mothIndex = i;
    }
}

mothNext.addEventListener('click', nextMoth); 
mothPrev.addEventListener('click', prevMoth); 

function prevMoth(){
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex--; 
    if (mothIndex == -1) {mothIndex = (monthItem.length - 1) };
    monthItem[mothIndex].classList.add('page-header__month--active');
}

function nextMoth(){
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex++; 
    if (mothIndex == (monthItem.length)) {mothIndex = 0};
    monthItem[mothIndex].classList.add('page-header__month--active');
}

/* --------------------------*/