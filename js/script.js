"use strict";
// 1 обьявление переменных

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10, // процент посреднику
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getTitle();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.logger();
  },
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "        каЛьКулятОР веРстКи      "
      );
    } while (!isNaN(appData.title));

    for (let i = 0; i < 2; i++) {
      let text;
      let num;
      if (i === 0) {
        text = "Простые";
        num = "10000";
      } else if (i === 1) {
        text = "Сложные";
        num = "20000";
      }

      let price = 0;
      let name;
      do {
        name = prompt("Какие типы экранов нужно разработать?", `${text}`);
      } while (!isNaN(name));

      do {
        price = prompt("Сколько будет стоить данная работа?", `${num}`);
      } while (!appData.isNumber(price));

      price = appData.delWord(price);
      appData.screens.push({ id: i + 1, name: name, price: +price });
    }

    for (let i = 0; i < 2; i++) {
      let price = 0;

      let name;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?", "SEO");
      } while (!isNaN(name));

      let uniqueName = `Услуга ${i + 1} - ${name}`;

      do {
        price = prompt("Сколько это будет стоить?", "1000");
      } while (!appData.isNumber(price));

      price = appData.delWord(price);
      appData.services[uniqueName] = +price;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    // for (let key of appData.screens) {
    //   appData.screenPrice += key.price;
    // }

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  delWord: function (num) {
    return num.replace(/[^0-9]/g, "");
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
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice -
      Math.ceil(appData.fullPrice * (appData.rollback / 100));
  },
  logger: function () {
    for (let key in appData) {
      // console.log(key, appData[key]);
    }
  },
};
const title = document.getElementsByTagName("h1");
const startBtn = document.getElementsByClassName("handler_btn").start;
const resetBtn = document.getElementsByClassName("handler_btn").reset;
const plus = document.querySelector(".screen-btn");
let numbers = document.querySelectorAll(".other-items.number");
let percent = document.querySelectorAll(".other-items.percent");
const rollback = document.querySelector('.rollback > div > [type="range"]');
const rollbackValue = document.querySelector(
  ".rollback > div > span.range-value"
);
let allInputs;
let screen = document.querySelectorAll(".screen");

//2 обьявление функций

const getTotalInputs = function () {
  //перебрал массив allInputs  (.getElementsByClassName)
  allInputs = document.getElementsByClassName("total-input");
  for (var i = 0; i < allInputs.length; i++) {
    console.log(allInputs[i]);
  }
};
percent.forEach(function (item) {
  //перебрал массив percent (queryselector)
  console.log(item);
});
numbers.forEach(function (item) {
  //перебрал массив numbers (queryselector)
  console.log(item);
});
screen.forEach(function (item) {
  //перебрал массив screen (queryselector)
  console.log(item);
});

//3 Выполняем функции и переопределяем значение переменных
appData.start();
title[0].innerHTML = appData.title;
allInputs = getTotalInputs();

//4 выводим консоль
