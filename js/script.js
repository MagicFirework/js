"use strict";
// 1 обьявление переменных

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value ");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};
let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0, // процент посреднику
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  count: 0,

  isError: false,
  array: [],
  //1 Клик
  init: () => {
    appData.addTitle();
    appData.getRollback();
    startBtn.addEventListener("click", () => {
      // Добавить что-то, чтобы  при клике сначало сбрасывало предыдущие вычесления
      appData.checkSelected();
    });
    buttonPlus.addEventListener("click", appData.addScreenBlock);
  },
  //2 отбор выбранных инпутов
  checkSelected: () => {
    screens = document.querySelectorAll(".screen");

    const arrayLeft = [];
    const arrayRight = [];

    screens.forEach((screen) => {
      // Нашли все инпуты и селекты внутри которых также инпуты
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      // Из всех возможных инпутов нашли только те, которые остались выбранными и выбрали их value
      const selectedLeft = select.options[select.selectedIndex].value;
      const selectedRight = input.value;

      // Все выбранные инпуты закинули по массивам
      arrayLeft.push(selectedLeft);
      arrayRight.push(selectedRight);
    });

    // обьеденили массивы в один единый массив
    appData.array = [...arrayLeft, ...arrayRight];

    appData.checkValues();
  },
  //3 проверка выбранных инпутов на пустые значения или на число
  checkValues: () => {
    appData.isError = false;

    appData.array.forEach((input) => {
      if (input.trim() === "" || isNaN(input)) {
        appData.isError = true;
      }
    });

    if (!appData.isError) {
      appData.start();
    } else {
      alert("Ошибка");
    }
  },

  addTitle: () => {
    document.title = title.textContent; //меняем тайтл в хеде
  },
  getRollback: () => {
    inputRange.addEventListener("input", () => {
      inputRangeValue.textContent = inputRange.value + "%";
    });
  },

  // 4 старт
  start: () => {
    appData.addServices();
    appData.addScreens();
    appData.addPrices();
    appData.getServicePercentPrices();
    appData.showResult();
  },

  showResult: () => {
    total.value = appData.screenPrice + "руб";
    totalCount.value = appData.count;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber + "руб";
    fullTotalCount.value = appData.fullPrice + "руб";
    totalCountRollback.value = appData.servicePercentPrice + "руб";
  },
  addScreens: () => {
    screens = document.querySelectorAll(".screen");
    // переопределяем переменную чтобы в коллекцию добавлялись новые данные

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index + 1,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addScreenBlock: () => {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addServices: () => {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addPrices: () => {
    // for (let key of appData.screens) {
    //   appData.screenPrice += key.price;
    // }

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.rollback = +inputRange.value;

    appData.count = appData.screens.reduce((sum, item) => {
      return sum + item.count;
    }, 0);
  },

  getServicePercentPrices: () => {
    appData.servicePercentPrice =
      appData.fullPrice -
      Math.ceil(appData.fullPrice * (appData.rollback / 100));
  },
  logger: () => {
    for (let key in appData) {
      // console.log(key, appData[key]);
    }
  },
};
//2 обьявление функций

//3 Выполняем функции и переопределяем значение переменных

appData.init();
//4 выводим консоль
