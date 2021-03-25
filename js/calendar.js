/* Календарь */

const CalendarItemArr = document.querySelectorAll('.calendar__item')
const CalendarEventsArr = document.querySelectorAll('.calendar__item-evenst')
const CalendarBack = document.querySelector('.calendar__event-active-background')


for (let i = 0; i < CalendarItemArr.length; i++) {
    CalendarItemArr[i].addEventListener("click", function () {
        if (!CalendarEventsArr[i]) {} else {
            CalendarItemArr[i].classList.add('calendar__item--active');
        }

        if (!CalendarEventsArr[i]) {} else {
            CalendarEventsArr[i].classList.add('events-show');
            CalendarBack.style.display = "block";
        }
    });
}

function eventHidden() {
    CalendarEventsArr.forEach(function (item) {
        item.classList.remove('events-show');
        item.classList.remove('events-hidden');
    });

    CalendarItemArr.forEach(function (item) {
        item.classList.remove('calendar__item--active');
    });

    CalendarBack.style.display = "none";
}

CalendarBack.addEventListener("click", function () {

    for (let i = 0; i < CalendarEventsArr.length; i++) {
        if (CalendarEventsArr[i].classList.contains('events-show') == true) {
            CalendarEventsArr[i].classList.add('events-hidden');
            break
        }
    };

    setTimeout(eventHidden, 700);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {

        for (let i = 0; i < CalendarEventsArr.length; i++) {
            if (CalendarEventsArr[i].classList.contains('events-show') == true) {
                CalendarEventsArr[i].classList.add('events-hidden');
                setTimeout(eventHidden, 700);
                break
            }
        };
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

function prevMoth() {
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex--;
    if (mothIndex == -1) {
        mothIndex = (monthItem.length - 1)
    };
    monthItem[mothIndex].classList.add('page-header__month--active');
}

function nextMoth() {
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex++;
    if (mothIndex == (monthItem.length)) {
        mothIndex = 0
    };
    monthItem[mothIndex].classList.add('page-header__month--active');
}

/* --------------------------*/