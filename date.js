/* const todayDate = new Date();
console.log(todayDate);

console.log(Date.now()); // кол-во милисекунд, прошедших с 1 января 1970 г.

const date1 = new Date("2022-01-28"); // год - месяц - день
console.log(date1);

const date2 = new Date("12/25/2001"); // месяц/день/год
console.log(date2);

const date3 = new Date("1999-06-17T19:00:25"); // год - месяц - деньTчасы:минуты:секунды
console.log(date3);

const date4 = new Date(2002, 0, 07, 14, 15, 55); // год, месяц (0-январь, 11-декабрь), день, часы, минуты, секунды, милисекунды
console.log(date4);
// если дата установлена неверно, то вернётся объект с текстом "Invalid Date"

// Разница между двумя датами в милисекундах
console.log(date1 - date3); // 713710775000

// Разница между двумя датами в днях
console.log(Math.round((date1 - date3)/24/60/60/1000)); // 8261 день

// Конвертация милисекунд в дату/время
console.log(new Date(713710775000)); // Thu Aug 13 1992 20:59:35 GMT+0800 (Красноярск, летнее время)

// получение вчерашней даты
console.log(new Date(Date.now() - 86400000));

// получение завтрашней даты
console.log(new Date(Date.now() + 86400000)); */

// Задача. Определение того, на какой день недели приходился день рождения пользователя
/* const userDate = prompt("Enter your date of birthday in year-month-day", "1990-11-21");
// Date - это object, поэтому кастим его в String
const birthday = String(new Date(userDate)) === 'Invalid Date' ? 'error' : new Date(userDate);
console.log(birthday);
if (birthday !== 'error') {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    alert(`You were born in ${days[birthday.getDay()]}`);
}
else {
    alert(`Incorrect date`);
} */

// Задача. Задать дату и вычислить в каких месяцах этот день выпадает на тот же день недели
const currentDate = new Date();
const mutableDate = new Date();
// const month = currentDate.getMonth();
// const weekDay = currentDate.getDay();
// деструктаризация
const [month, weekDay] = [currentDate.getMonth(), currentDate.getDay()];
for (let i = 0; i < 12; i++) {
    if (i === month) continue; // пропускаем текущий месяц (избавимся от вывода текущего месяца)
    mutableDate.setMonth(i);
    if (weekDay === mutableDate.getDay()) {
        console.log(mutableDate, mutableDate.toLocaleDateString());
    }
}