const num = 266219; //Тип данных число

const str = num.toString(); // преобразуем число в строку
const arrayStr = Array.from(num.toString()); // делаем массив из строк
let arrayNum = Array.from(num.toString(), Number); // делаем массив из чисел

//Первый вариант умножения между собой цифр этого числа
//перебираем массив и множим
let result = 1;
for (let i = 0; i < arrayNum.length; i++) {
  result *= arrayNum[i];
}

//Второй Вариант умножения между собой цифр этого числа
let resultTwo = arrayNum.reduce((a, b) => a * b);

//Возводим в третью степень полученный резудьтат
let resultThree = result ** 3;

console.log(result);
console.log(resultThree);

//Вывоим первые 2 цифры полученного числа
console.log(resultThree.toString().substring(0, 2));
