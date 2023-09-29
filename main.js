//№1

"use strict"
function sumOfArrayElements(arr) {
    const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const result = sumOfArrayElements(myArray);
  console.log("Сумма элементов массива:", result);



//№2
function getDivisors(number) {
    const divisors = [];
    
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    
    return divisors;
  }
  
  const myNumber = 12;
  const result2 = getDivisors(myNumber);
  console.log(`Делители числа ${myNumber}:`, result2);


//№3
function stringToCharArray(str) {
    return Array.from(str);
  }
  
  const myString = "hello, world";
  const result3 = stringToCharArray(myString);
  console.log("Массив символов строки:", result3);
  

//№4
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const myString4 = "hello, world";
  const reversed = reverseString(myString4);
  console.log("Перевернутая строка:", reversed);


//№5
function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
  
    const firstLetter = str[0].toUpperCase();
    const restOfStr = str.slice(1);
  
    return firstLetter + restOfStr;
  }
  
  const myString5 = "hello, world";
  const capitalized = capitalizeFirstLetter(myString5);
  console.log("Строка с заглавной первой буквой:", capitalized);
  
  

//№6
function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const myString6 = "hello, world";
  const result6 = capitalizeWords(myString6);
  console.log("Строка с заглавной первой буквой каждого слова:", result6);


//№7
function fillArrayWithNumbers(n) {
    if (n <= 0) {
      return [];
    }
  
    const result = [];
  
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  const n = 5;
  const numberArray = fillArrayWithNumbers(n);
  console.log("Массив целых чисел:", numberArray);


//№8
function sumOfDigits(number) {
    const numStr = number.toString();
    let sum = 0;
  
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
  
    return sum;
  }
  
  const myNumber8 = 12345;
  const result8 = sumOfDigits(myNumber8);
  console.log("Сумма цифр числа:", result8);
  
  

//№9
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  const myYear = 2023;
  const isLeap = isLeapYear(myYear);
  if (isLeap) {
    console.log(`${myYear} - високосный год`);
  } else {
    console.log(`${myYear} - не високосный год`);
  }
  
  

//№10
function secondsToDays(seconds) {
    const secondsInADay = 86400;
    const days = Math.floor(seconds / secondsInADay);
    return days;
  }
  
  const mySeconds = 172800;
  const days = secondsToDays(mySeconds);
  console.log(`${mySeconds} секунд - это примерно ${days} суток.`);



//№11
function getRandomElementFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    return arr[randomIndex];
  }
  
  const myArray11 = [1, 2, 3, 4, 5];
  const randomElement = getRandomElementFromArray(myArray11);
  console.log("Случайный элемент из массива:", randomElement);
  


//№12
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  const myNumber12 = 10;
  const isPrimeNumber = isPrime(myNumber12);
  if (isPrimeNumber) {
    console.log(`${myNumber12} - простое число`);
  } else {
    console.log(`${myNumber12} - не простое число`);
  }
  
