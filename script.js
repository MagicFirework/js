const title = "Project Lesson";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 200;
const rollback = 6;
const fullPrice = 100000;
const adaptive = true;

alert("lesson 2");
console.log("Добрейшего денечка!");
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log(
  "Процент отката посреднику за работу " +
    fullPrice * (rollback / 100) +
    " рублей"
);
