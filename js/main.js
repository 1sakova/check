// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду

// вывод:
// 1
// 12
// 123
// let num = 123;
// {
// }
// console.log(num);

// !task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// let str = "#";
// for (let i = 0; i < 7; i++) {
// str+="#"
// console.log(str);
// }

// task 3
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет
// let arr = [
//       {name: 'Jack', age: 15},
//       {name: 'Helen', age: 34},
//       {name: 'Tom', age: 20},
//       {name: 'Bob', age: 54},
//       {name: 'Jessica', age: 13}
// ]

// console.log(`Hello ${name}the grand sale has begun,prices are reduced by 20%!`);

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}], задача, отфильтровать массив, оставив только строки и числа
// let arr = [
// 	1,
// 	10,
// 	true,
// 	"hello",
// 	"JS",
// 	null,
// 	false,
// 	0,
// 	{ title: "Samsung", price: 1000 },
// ];
// for (let i of arr) {
// 	if ((i = bool.str)) {
// 		console.log(true);
// 	} else if ((i = bool.num)) {
// 		console.log(true);
// 	}
// }

// !task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!', вывести в консоль символы у которых четный индекс
// let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
// let count = "";
// for (let i in str) {
// 	if (i % 2 === 0) {
// 		count=i
// 	}
//   console.log(count);
// }

// task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов
// const names = [
// 	[
// 		["Helen", "Tom"],
// 		["Jack", "Peter"],
// 	],
// 	[
// 		["Jessica", "Bob"],
// 		["Jimm", "John"],
// 	],
// 	[
// 		["Alexa", "Jessy"],
// 		["David", "Paul"],
// 	],
// ];
// const result = [];
// for (let i = 0; i < names.length; i++)
// 	for (let j = 0; j < names[i].length; j++) {
// 		result = result.concat(names[i][j]);
// 	}
// console.log(result);
// !task 7
// Проверьте все ли элементы в массиве number
// [1,2,3,4,5] --> true
// [1,"2","3",4,5] --> false
// let arr = [1,2,3,4,5]
// let result = false
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     result = true;
//   }
// }
// console.log(result);

// task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]
// let arr = [12, 74, 44, 28, 59];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
// if(i)
// }

// task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

// let n = 3
// let str= "hello"
// for(let i in arr){
//   console.log(n);

// }

// вывод:
// "hellohellohello"

// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10
// let result = n.join(-)
// fo
// console.log(result);

// 1-2-3-4-5-6-7-8-9-10

// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

// task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"
// let str = "Hello my name is John";
// let maxStr = (str[0]);
// for (let i of str) {
// 	if (maxStr.length > str.length) {
// 		maxStr = str[i];
// 	}
// }
// console.log(maxStr );

// task 14
// Так же найдите самый короткий элемент этого же массива
// let str = "Hello my name is John";
// let minStr = str[0];
// for (let i of str) {
// 	if (minStr.length < str.length[i]) {
// 		minStr = i;
// 	}
// }
// console.log(minStr);
