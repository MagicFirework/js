"use strict";
// 1 обьявление переменных

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10, // процент посреднику
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  asking: function () {
    let toNum;
    appData.title = prompt(
      "Как называется ваш проект?",
      " кальКУлятоР веРстКи"
    );
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );
    do {
      toNum = prompt("Сколько будет стоить данная работа?", "30000");
    } while (!appData.isNumber(toNum));
    appData.screenPrice = +toNum;
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt(
          "Какой первый тип услуги нужен?",
          "Первая услуга"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой второй тип услуги нужен?",
          "Вторая услуга"
        );
      }

      do {
        price = prompt("Сколько это будет стоить?", "1000");
      } while (!appData.isNumber(price));
      sum += +price;
    }
    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase()
    );
  },
  getServicePercentPrices: function () {
    return (
      appData.fullPrice -
      Math.ceil(appData.fullPrice * (appData.rollback / 100))
    );
  },
  logger: function () {
    for (let key in appData) {
      console.log(key, appData[key]);
    }
  },
  start: function () {
    appData.asking();
    appData.title = appData.getTitle();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  },
};

//2 обьявление функций

//3 Выполняем функции и переопределяем значение переменных
appData.start();

//4 выводим консоль

//6 моя консоль
