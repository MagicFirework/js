"use strict";
// 1 обьявление переменных
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10; // процент посреднику
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

//2 обьявление функций
const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function () {
  title = prompt("Как называется ваш проект?", " кальКУлятоР веРстКи");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?", "");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      service1 = prompt("Какой первый тип услуги нужен?", "Первая услуга");
    } else if (i === 1) {
      service2 = prompt("Какой второй тип услуги нужен?", "Вторая услуга");
    }

    do {
      price = prompt("Сколько это будет стоить?", "");
    } while (!isNumber(price));
    sum += +price;
  }
  return sum;
};

function getFullPrice() {
  return +screenPrice + allServicePrices;
}

const getTitle = function () {
  return (
    title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
  );
};

const getServicePercentPrices = function () {
  return fullPrice - Math.ceil(fullPrice * (rollback / 100));
};

//3 Выполняем функции и переопределяем значение переменных
asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

//4 выводим консоль

console.log("Начальная сумма:", +screenPrice);
console.log("Сумма доп услуг:", allServicePrices);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("сумма с вычетом агента:", servicePercentPrice);

//6 моя консоль
