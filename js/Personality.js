const personalityScience = document.querySelectorAll('.personaluty__areas-item');
const personNotActiveBox = document.querySelector('.personality__person-not-active-box');
const person = personNotActiveBox.querySelectorAll('.person');
const personalityBox = document.querySelector('.personality__box');
const personalityWrapper = document.querySelector('.personality__wrapper');
const scienceArr = ['all', 'science', 'sport', 'culture', 'public', 'education']

for (let i = 0; i < personalityScience.length; i++) {
    personalityScience[i].addEventListener('click', function () {
        personalityScience.forEach(function (item) {
            if (item.classList.contains('personaluty__areas-item--active') == true) {
                item.classList.remove('personaluty__areas-item--active');
            }
        });
        personalityScience[i].classList.add('personaluty__areas-item--active');
        PersonRemove();
        PersonAdd();
    })
};

function PersonRemove() {
    personalityBox.textContent = '';
}

function PersonAdd() {
    num = -1;
    personalityScience.forEach(function (item, i) {
        if (item.classList.contains('personaluty__areas-item--active') == true) {
            i + 1;
            num + i;
            var pers = scienceArr[i];
            if (pers == 'all') {
                person.forEach(function (item) {
                var clone = item.cloneNode(true);
                personalityBox.appendChild(clone);
                })
            }
        }
        person.forEach(function (item) {
            if (item.classList.contains(pers) == true) {
                var clone = item.cloneNode(true);
                personalityBox.appendChild(clone);
            }
        })
    });
}

PersonAdd();