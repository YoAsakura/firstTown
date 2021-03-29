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
const monthMargin = document.querySelector('.page-header__month-margin')
const monthBox = document.querySelector('.page-header__month-wrapper')
const notEventsDesc = document.querySelector('.not-events-desc')
const caldendarHeaderBack = document.querySelector('.page-header--calendar')

for (let i = 0; i < monthItem.length; i++) {
    if (monthItem[i].classList.contains('page-header__month--active') == true) {
        mothIndex = i;
    }
}

backImageIndex = 0;
currentMargin = 0;

monthBox.style.width = (((monthItem[mothIndex].offsetWidth) * 3) + 30) + 'px';

mothNext.addEventListener('click', nextMoth);
mothPrev.addEventListener('click', prevMoth);

backImageIndex = 1;
caldendarHeaderBack.style.background = 'linear-gradient(rgba(1, 90, 184, 0.4), rgba(1, 90, 184, 0.4)), center center / cover no-repeat url(../image/calendar' + backImageIndex + '.jpg';

function prevMoth() {
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex--;

    if (mothIndex == -1) {
        mothIndex = 11;
        currentMargin = (((monthItem[mothIndex].offsetWidth) * 9) + 90);

        monthMargin.style.marginLeft = "-" + currentMargin + 'px';
        monthBox.style.width = (((monthItem[mothIndex].offsetWidth) * 3) + 30) + 'px';
    };

    if (mothIndex <= 9) {
        currentMargin = currentMargin - (monthItem[mothIndex].offsetWidth + 10);
        monthMargin.style.marginLeft = "-" + currentMargin + 'px';
    }

    backImageIndex--;
    if (backImageIndex < 1) {
        backImageIndex = 12
    }
    caldendarHeaderBack.style.background = 'linear-gradient(rgba(1, 90, 184, 0.4), rgba(1, 90, 184, 0.4)), center center / cover no-repeat url(../image/calendar' + backImageIndex + '.jpg';
    monthItem[mothIndex].classList.add('page-header__month--active');
    monthGG();
    notEventsDescFoo()
}

function nextMoth() {
    monthItem[mothIndex].classList.remove('page-header__month--active');
    mothIndex++;

    if (mothIndex >= 12) {
        mothIndex = 0
        currentMargin = 0;
        monthMargin.style.marginLeft = 0;
    };

    if ((mothIndex >= 2) && (mothIndex <= 10)) {
        currentMargin = currentMargin + (monthItem[mothIndex].offsetWidth + 10);
        monthMargin.style.marginLeft = "-" + currentMargin + 'px';
    }

    WidthEl = monthItem[mothIndex].offsetWidth;

    monthItem[mothIndex].classList.add('page-header__month--active');
    backImageIndex++;
    if (backImageIndex > 12) {
        backImageIndex = 1
    }
    caldendarHeaderBack.style.background = 'linear-gradient(rgba(1, 90, 184, 0.4), rgba(1, 90, 184, 0.4)), center center / cover no-repeat url(../image/calendar' + backImageIndex + '.jpg';

    monthGG();
    notEventsDescFoo()
}


function monthGG() {
    monthItem.forEach(function (item) {
        if (item.classList.contains('page-header__month--active') == true) {
           var currentMonth = item.classList[1];
            CalendarItemArr.forEach(function (item) {
                if (item.classList.contains(currentMonth) == false) {
                    item.style.display = 'none';
                } else if (item.classList.contains(currentMonth) == true) {
                    item.style.display = 'flex';
                }
            })
        }
    })
}

function notEventsDescFoo() {
    for (let i=0; i < monthItem.length; i++) {
      if  (monthItem[i].classList.contains('page-header__month--active') == true) {
        var currentMonth = monthItem[i].classList[1];
            for (let i = 0; i < CalendarItemArr.length; i++) {
                if (CalendarItemArr[i].classList.contains(currentMonth) == false) {
                    notEventsDesc.style.display = 'block';
                } else {
                    notEventsDesc.style.display = 'none';
                    break
                }
            }
        }
    }
}

notEventsDescFoo()
monthGG();
/* --------------------------*/