const currentDate =  new Date();
const month = 'Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь'.split(',');
const day = 'ПН,ВТ,СР,ЧТ,ПТ,СБ,ВС'.split(',');
let count = 0;

let sessionDataItem = document.querySelectorAll('.session-date-item');
sessionDataItem.forEach(function(item){ 
    //Fill month value
    let itemMonth = item.querySelector('.session-month');
    itemMonth.textContent = month[currentDate.getMonth()];

    //Fil days value
    let itemDay = item.querySelector('.session-day');
    itemDay.textContent = currentDate.getDate() + count;

    //Fill weekdays value
    let itemWeekDay = item.querySelector('.session-week');
    itemWeekDay.textContent =day[currentDate.getDay() + count];

    count++;
});
