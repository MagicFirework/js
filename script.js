"use strict";
alert("lesson 3");
const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
const rollback = 6; // процент посреднику
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const agent = fullPrice * (rollback / 100);
const servicePercentPrice = Math.ceil(fullPrice - agent);

console.log("Добрейшего денечка!");
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Назваие проекта: " + title);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Адаптив на сайте: " + adaptive);
console.log("Доп. услуга: " + service1 + " " + servicePrice1 + " рублей");
console.log("Доп. услуга: " + service2 + " " + servicePrice2 + " рублей");
console.log("Стоимость разработки сайта: " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log("Процент отката посреднику за работу: " + agent + " рублей");

console.log(
  "Итогоая стоимость с учетом отката посреднику: " +
    servicePercentPrice +
    " рублей"
);

let discount5 = fullPrice * (5 / 100);
let discount10 = fullPrice * (10 / 100);

if (fullPrice >= 30000) {
  console.log("Общая суммма заказа: " + fullPrice + " рублей");
  console.log("Даем скидку в 10%");
  console.log("Скидка: " + discount10 + " рублей");
  console.log("Итого: " + (fullPrice - discount10) + " рублей");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Общая суммма заказа: " + fullPrice + " рублей");
  console.log("Даем скидку в 5%");
  console.log("Скидка: " + discount5 + " рублей");
  console.log("Итого: " + (fullPrice - discount5) + " рублей");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Общая суммма заказа: " + fullPrice + " рублей");
  console.log("Скидка не предусмотрена");
  console.log("Итого: " + fullPrice + " рублей");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
