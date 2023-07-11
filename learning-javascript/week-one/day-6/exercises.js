// EXERCISES

// let challenge = "30 Days Of JavaScript"
// let challenges = "     30 Days Of JavaScript     ";
// let Challenge = "You cannot end a sentence with because because because is a conjunction"
// let comma = ", "

// lastIndex = challenge.length - 1;

// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(0, 2))
// console.log(challenge.substring(3, 6))
// console.log(challenge.substr(3, lastIndex))
// console.log(challenge.includes('Script'))
// console.log(challenge.includes('script'))
// console.log(challenge.split())
// console.log(challenge.split(' '))
// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt('J'))
// console.log(challenge.charCodeAt(lastIndex))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))
// console.log(Challenge.indexOf('because'))
// console.log(Challenge.lastIndexOf('because'))
// console.log(Challenge.search('because'))
// console.log(challenges)
// console.log(challenges.trim(' '))
// console.log(challenge.startsWith(30))
// console.log(challenge.startsWith('days'))
// console.log(challenge.endsWith('Script'))
// console.log(challenge.endsWith('Of'))
// console.log(challenge.match('a'))
// console.log(challenge.concat(comma, Challenge))
// console.log(challenge.repeat(2))




// EXERCISES

// let sen = "python and jargon"
// let sen1 = "I hope this course is not full of jargon."
// let quote = "There is no exercise better for the heart than reaching down and lifting people up.";
// let motherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
// const num = Math.floor(Math.random() * 100)
// const num1 = Math.floor(Math.random() * 61) + 39;
// const num2 = Math.floor(Math.random() * 255)


// console.log(Math.round('10'))
// console.log(Math.round('9.81'))
// console.log(quote)
// console.log(motherTeresa)
// console.log(sen.indexOf('on'))
// console.log(sen.lastIndexOf('on'))
// console.log(sen1.includes('jargon'))
// console.log(num)
// console.log(num1)
// console.log(num2)


// EXERCISES

// let sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

// result = sen.length;

// console.log(result)
// console.log(sen.match('because'))


// EXERSICES

// let arr = [];
// let sum = 0;
// let sum2 = 0;

// for(let i = 0; i <= 100; i++){
//   if(i % 2 === 0){
//     sum += i
//   }
// }

// for(let i = 0; i <= 100; i++){
//   if(i % 2 === 1){
//     sum2 += i
//   }
// }

// arr.push(sum)
// arr.push(sum2)

// console.log(arr);




// let fullName = "mochamad iqbal hernadi"
// let lastName = "hernadi"
// let country = "indonesia"
// let city = "bandung"
// let isMarried = false
// let year = 2023

// console.log(typeof fullName);
// console.log(typeof lastName);u
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof isMarried);
// console.log(typeof year);
// console.log(Math.round('10'))
// console.log(Math.round('9.8'))



// let num = 1 == 1
// let num2 = 2 == 2
// let num3 = 3 == 3
// let num4 = 1 == 2
// let num5 = 2 == 1
// let num6 = 3 == 0

// console.log(num)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)
// console.log(num6)

// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 <= 3)
// console.log(4 == 4)
// console.log(4 === 4)
// console.log(4 != 4)
// console.log(4 !== 4)
// console.log(4 != '4')
// console.log(4 == '4')
// console.log(4 === '4')

// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))


// let date = new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())




// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Enter your age: ', txt => {

//     let num = 18;

//     if(num <= txt){
//         console.log(`You are ${txt} old enough to drive.`)
//     }

//     if(num > txt){
//         console.log(`You are left with ${num - txt} years to drive.`)
//     }

//   readline.close();
// });




//EXERCISES 2

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('enter a month: ', season => {
// 	let weather = season.toLowerCase()

// 	switch(weather){
// 		case "september":
// 		case "october":
// 		case "november":		
// 		 console.log('the season is autumn');
// 		 break;
// 		case "december":
// 		case "january":
// 		case "february":	
// 		 console.log('the season is winter');
// 		 break;	
// 		case "march":
// 		case "april":
// 		case "may":	
// 		 console.log('the season is spring');
// 		 break;	
// 		case "june":
// 		case "july":
// 		case "august":	
// 		 console.log('the season is summer');
// 		 break;	 
// 	}

//   readline.close();
// });




// function fullName(firstName, lastName){
//     return `${firstName} ${lastName}`
// }

// console.log('iqbal', 'hernadi')



// function swapValues(arr = [1,2,3,4,5]){
//     let result = arr
//     return result
// }

// const reverse = ['a','b','c','d','e'];
// for (let i = 0; i < reverse.length; i++){
//     reverse[i] = reverse[i].toUpperCase();
// }
// // console.log(swapValues())
// console.log(swapValues(reverse))


// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//       //calling a function
//   console.log(sumArrayValues(numbers));



// function add(){
//     let sum = 0;
//     function plus() {sum += 1}
//     plus()
//    return sum;
// }

// console.log(add())


// const add = ( function () {
//     let co = 0;
//     return function () {co +=1; return co}
// })();

// console.log(add())
// console.log(add())
// console.log(add())


// function showDateTime(){
//     let date = Date()
//     return date
// }

// console.log(showDateTime())



// function modifyArry(arr2 = ['a', 'b', 'c', 'd', 'e']){
//     if (arr2.length < 5) {
//         console.log('item not found')
//     } else if (arr2.length === 5) {
//         console.log('there are 5 values')
//     }
// }

// modifyArry();



// function all(first, last, age, color) {
//     this.firstName = first;
//     this.lastName = last;
//     this.ages = age;
//     this.colors = color
// }

// const itsMine = new all("iqbal", "hernadi", 19, "brown");
// const itsYours = new all("vina", "febrianti", 19, "brown");

// itsMine.name = function() { 
//     return this.firstName + " " + this.lastName + " and " + this.ages + "yo";
// };

// itsYours.name = function() {
//     return this.firstName + " " + this.lastName + " and " + this.ages + "yo";
// };

// console.log("his name is", itsMine.name())
// console.log("her name is", itsYours.name())


// let shoe = {name:"vans", size:"39", color:"black"};

// document.getElementById('demo2').innerHTML = "the name of shoe is " + shoe.name ;

// const person = {
//     firstName: 'iqbal',
//     age: 19,
//     country: 'indonesia',
//     city:'bandung',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'empty',
//     address: {
//       street: 'bandung',
//       pobox: 2002,
//       city: 'bandung'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }
  
//   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//   //hasOwnProperty
  
//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)
// //   const values = Object.values(copyPerson)
// //   console.log(values)
// //   const entries = Object.entries(copyPerson)
// // console.log(entries)

// console.log(copyPerson.hasOwnProperty('city'))
// console.log(copyPerson.hasOwnProperty('score'))




// const dog = {
//     name: 'jetskie',
//     legs: 4,
//     color: 'black',
//     age: 14,
//     bark: true,
//     breed: false,
//     getInfoDog: function(){
//         return `my dog name is ${dog.name}, he is ${dog.color} and he is awlays bark, right? ${dog.bark}`
//     }
// }
// console.log(dog.getInfoDog())



// const num = [1,2,3,4,5];

// const sum = arr => {
//     let Sum = 0;
//     arr.forEach(function (element) {
//         Sum += element
//     });
//     return Sum;
// }

// console.log(sum(num))

// let sum = 0;
// const num = [1, 2, 3, 4];
// num.forEach(sub => sum += sub);
// console.log(sum);

// const arr = ["a", "b", "c", "d", "e"];
// arr.forEach(sub => console.log(sub.toUpperCase()))

// const arr = [1,2,3,4,5];
// const sub = arr.map(num => num * num)

// console.log(sub)


// const arr = ["iqbal", "vina"];

// const sub = arr.filter((ours) => ours.length === 5);
// console.log(sub)


// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ];

//   const scoresSum = scores.filter((scoreAll) => scoreAll.score > 90)
//   console.log(scoresSum)
//   const scoresSum1 = scores.find((scoreAll) => scoreAll.score > 95)
//   console.log(scoresSum1)


// const arr = [1,2,3,4,5];
// const sum = arr.reduce((acc, cur) => acc + cur, 0)
// console.log(sum)


// const arr = ["a", "b","c"];
// const sum = arr.every((nama) => typeof nama === "string")
// console.log(sum)


// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//   console.log(users)



// let empty1 = "";
// countries.forEach((sum) => console.log(sum))
// console.log(empty1)

// let empty2 = "";
// names.forEach((sum) => console.log(sum))
// console.log(empty2)

// let empty3 = "";
// numbers.forEach((sum) => console.log(sum))
// console.log(empty3)

// const countrie = countries.map((sum) => sum.toUpperCase())
// console.log(countrie)

// const countrie = countries.map((sum) => sum.length)
// console.log(countrie)

// const num = numbers.map((Sum) => Sum * Sum)
// console.log(num)

// const name = names.map((sum) => sum.toUpperCase())
// console.log(name)


// const countrie = countries.filter((sum) => sum.includes("land"))
// console.log(countrie)

// const countrie = countries.filter((sum) => sum.length === 6)
// console.log(countrie)

// const countrie = countries.filter((sum) => sum.startsWith('F'))
// console.log(countrie)


// const num = numbers.reduce((acc, cur) =>  acc + cur,0)
// console.log(num)

// const contrie = countries.reduce((acc, cur) =>  acc + cur,0)
// console.log(contrie)

// const product = products.sort(function (a, b){
//     if (a.price < b.price) return 1
//     if (a.price > b.price) return -1
//     return 0
// })
// console.log(products)

// const array = ["a", 1, "b", 2];
// const bools = [true, false, true, false];

// const sum = array.some((Sum) => Sum === 1)
// console.log(sum)
// const sum1 = array.every((Sum) => typeof Sum === 1)
// console.log(sum1)
// const sum = bools.some((Sum) => Sum === false)
// console.log(sum)
// const sum1 = bools.every((Sum) => Sum === true)
// console.log(sum1)

// const sum = names.some((Sum) => Sum.length)
// console.log(sum)

// const sum = countries.every((Sum) => Sum.includes('land'))
// console.log(sum)
// const sum1 = countries.some((Sum) => Sum.includes('land'))
// console.log(sum1)

// const sum = countries.find((Sum) => Sum.length > 6)
// console.log(sum)
// const sum = countries.findIndex((Sum) => Sum.includes('Norway'))
// console.log(sum)
// const sum = countries.findIndex((Sum) => Sum.includes('Russia'))
// console.log(sum)


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]


// const sum = products.reduce((acc, cur) => acc + cur,0)
// console.log(sum)

// const sum = products.map((Sum) => Sum).filter((Sum) => Sum).reduce((Sum) => Sum)
// console.log(sum)


// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

// let count = ages.length;
// const sum = ages.reduce((acc, cur) => acc + cur,0)
// const min = ages.find((Sum) => Sum < 25)
// const max = ages.find((Sum) => Sum > 37)


// console.log('Count:', count) // 25
// console.log('Sum: ', sum) // 744
// console.log('Min: ', min) // 24
// console.log('Max: ', max) // 38
// console.log('Range: ', range) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist())


// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ];  


// const langSet = new Set(languages);
// // console.log(langSet)
// // console.log(langSet.size)

// const counts = [];
// const count = [];

// for (const i of langSet) {
//     const Sum = languages.filter((sum) => sum === i)
//     console.log(Sum)
//     counts.push(`lang: ${i}, count: ${Sum.length}`)
//     count.push({lang: i, count: Sum.length})
// }

// console.log(counts)
// console.log(count)


// const countries = [
//     [1 ,'Sweden',],
//     [2 ,'Russia'],
//     [3 ,'Finland'],
//     [4 ,'Norway'],
//     [5 ,'Indo'],  
// ]

// const newSet = new Map(countries);
// console.log(newSet)
// console.log(newSet.size)

// for (const [numbers, countries] of newSet){
//     console.log(numbers, countries)
// }

// for (const [numbers, countries] of newSet){
//     if (numbers >= 2){
//         return numbers
//     }
//     console.log(numbers, countries)
// }





// const newSet = new Set();

// for (i = 0; i <= 10; i++){
//     newSet.add(i)
// }
// console.log(newSet)
// newSet.clear()
// console.log(newSet)


// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const c = [...b, ...a]
// const countries = ['Finland', 'Sweden', 'Norway']

// union
// let A = new Set(a);
// let B = new Set(b)
// let C = new Set(c);

// console.log(C)

// intersection
// let A = new Set(a);
// let B = new Set(b)
// let c = a.filter((sum) => B.has(sum))
// let d = a.filter((sum) => !B.has(sum))
// let C = new Set(c);
// let D = new Set(d)

// console.log(C)
// console.log(D)


// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]

// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// let [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor)

// let {width, height, area, perimeter} = rectangle;
// console.log(`width: ${width}, height: ${height}, area: ${area}, perimetere: ${perimeter}`)

// for(const {name, scores, skills, age} of users){
//     console.log(name, scores, skills, age)
// }

// const Sum = users.filter((sum) => sum.skills.length < 3)  
// console.log(Sum)

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
// let arr = student[2]
// console.log(arr)
// let [name, skills, jsScore, reactScore] = student;
 
// const Sum = jsScore.filter((sum) => sum == 90);
// console.log(Sum)

// console.log(name, skills, Sum, reactScore)

// const students = {
// name: 'David',
// age: 25,
// skills: {
//     frontEnd: [
//     { skill: 'HTML', level: 10 },
//     { skill: 'CSS', level: 8 },
//     { skill: 'JS', level: 8 },
//     { skill: 'React', level: 9 }
//     ],
//     backEnd: [
//     { skill: 'Node',level: 7 },
//     { skill: 'GraphQL', level: 8 },
//     ],
//     dataBase:[
//     { skill: 'MongoDB', level: 7.5 },
//     ],
//     dataScience:['Python', 'R', 'D3.js']
//   }
// };
// let {name, age, skills} = students;

// skills.frontEnd.push({skill: 'BootStrap', level: 8})
// skills.backEnd.push({skill: 'Express', level: 9})
// skills.dataBase.push({skill: 'SQL', level: 8})
// skills.dataScience.push('SQL')
// console.log(name, age, skills)


// let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const pattern =  /\d+/g
// const result =  txt.match(pattern)
// const Sum = result.reduce((acc, cur) => acc + cur,0)

// console.log(change)
// console.log(result)
// console.log(Sum)


// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
// let pat1 = /love/g
// let count = paragraph.match(pat1)



// console.log({word: Sum, count: count.length})




// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }

//   const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//   ]

//   const users = [
//     {
//       name: 'Asabeneh',
//       title: 'Programmer',
//       country: 'Finland',
//       city: 'Helsinki',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]


// console.group('User')
// console.table(user)
// console.groupEnd()

// console.group('Countries')
// console.table(countries)
// console.groupEnd()

// console.group('Users')
// console.table(users)
// console.groupEnd()

// console.assert(10 > 2 * 10)
// console.warn('this is warning')
// console.error('this is eror')

// let txt = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//   ]

// console.time('while loop')
// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++
// }
// console.timeEnd('while loop')

// console.time('for loop')
// for (let i = 0; i < txt.length; i++) {
//     console.log(txt[i][0], txt[i][1])
// }
// console.timeEnd('for loop')

// console.time('for of loop')
// for (const [nm, ct] of txt) {
//     console.log(nm, ct)
// }
// console.timeEnd('for of loop')

// console.time('forEach')
// txt.forEach((nm, ct) => console.log(nm, ct))
// console.timeEnd('forEach')


// class Animal{
//     constructor(name, age, color, legs){
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
// }

// const dog = new Animal('skye', 14, 'black', 4)
// const cat = new Animal('pupi', 7, 'brown', 4)


// console.log(dog)
// console.log(cat)

    
// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// let age = 250;
// let isMarried = true
// const student = {
//   firstName:'Asabeneh',
//   lastName:'Yetayehe',
//   age:250,
//   isMarried:true,
//   skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `

// const text = JSON.stringify(skills, undefined, 3)
// const text2 = JSON.stringify(age)
// const text3 = JSON.stringify(isMarried)
// const text4 = JSON.stringify(student, ['firstName', 'lastName', 'age', 'isMarried', 'skills'], 3)
// const text5 = JSON.parse(txt);

// let text = ""
// for (const x in text5){
//     text += x + ","
// }
// console.log(text)


// console.log(text)
// console.log(text2)
// console.log(text3)
// console.log(text4)
// console.log(all)
// console.log(Sum)
// console.table(text5)



// const personAccount = {
//     firstname: 'iqbal',
//     lastname: 'hernadi', 
//     incomes: 5000,
//     expenses: 4000,
//     totalIncome: function(){
//         return this.incomes
//     },
//     totalExpense: function(){
//         return this.expenses
//     },
//     accountInfo: function(){
//         return `My name is ${this.firstname} ${this.lastname}, my incomes: ${this.incomes} and my expenses: ${this.expenses}`
//     },
//     addIncome: function(){
//         sum1 = 3000;
//         sum1 += this.incomes  
//         return sum1
//     },
//     addExpense: function(){
//         sum2 = 5000;
//         sum2 += this.expenses
//         return sum2
//     },
//     accountBalance: function(){ 
//         return `${this.accountInfo()}, and now i have incomes: ${this.addIncome()} and expenes: ${this.addExpense()}`
//     }
// }

// console.log(personAccount.accountBalance())


//Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)




// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.includes('Node')) {
//         resolve('fullstack developer')
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })
  
//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))


// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(countriesAPI)
// .then(respon => respon.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))

// const catNames = async () => {
//     try {
//         const respon = await fetch(catsAPI)
//         const cats = await respon.json()
//         console.log(cats)
//     } catch (err) {
//         console.log(err)
//     }
// }
// catNames()

// function outerFunction () {
//     let count = 0;
//     function innerFunction () {
//         count++
//         return count
//     }
//     return innerFunction
// }
// const result = outerFunction()

// console.log(result())
// console.log(result())

// function outerFunction () {
//     let count = 0;
//     function plusOne () {
//         count++
//         return count
//     }
//     function minusOne () {
//         count--
//         return count
//     }
//     function plussOne () {
//         count++
//         return count
//     }
//     return {
//         plusOne:plusOne(),
//         plussOne:plussOne(),
//         minusOne:minusOne()
//     }
// }
// const result = outerFunction()

// console.log(result.plusOne)
// console.log(result.plussOne)
// console.log(result.minusOne)

// function personAccount () {
//     let firstname = 'iqbal'
//     let lastName = 'hernadi'
//     let incomes = 5000
//     let expens = 3500
//     function totalIncome () {
//         return incomes
//     }
//     function totalExpense () {
//         return expens
//     }
//     function accountInfo () {
//         return `My name is ${firstname} ${lastName}`
//     }
//     function addIncome () {
//         sum = 3000;
//         return sum += incomes
//     }
//     function addExpense () {
//         sum = 2000;
//         return sum += expens
//     }
//     function accountBalance () {
//        return `${accountInfo()}, My accountBalance ${totalIncome()}, the expens ${totalExpense()},
//         and now the incomes: ${addIncome()} and the expens: ${addExpense()}`
//     }
//     return {accBalance:accountBalance()}
// }

// const result = personAccount()
// console.log(result.accBalance)




// const parag1 = document.querySelectorAll("p");

// for (i = 0; i < parag1.length; i++) {
//     console.log(parag1[i].textContent = 'saya iqbal');
// }

// for (z = 0; z < parag1.length; z++) {
//     if (z % 2 === 0) {
//         parag1[z].style.color = 'violet';
//     } else {
//         parag1[z].style.color = 'red';
//     }
// }



// function changeColor() {
//  let x = document.getElementById("year");

//  if (x.style.color == "black") {
//   x.style.color = "red";
//   x.style.fontSize = "69px";
//  } else if (x.style.color == "red") {
//   x.style.color = "blue";
//  } else if (x.style.color == "blue") {
//   x.style.color = "black";
//  } else {
//     x.style.color = "black";
//  }
// }
// setInterval(changeColor, 1000);




// function changeBackgroundColor() {
// let z = document.getElementById('date');
// z.style.width = '300px'

//  if (z.style.backgroundColor == "blue") {
//     z.style.backgroundColor = "violet";
//  } else if (z.style.backgroundColor == "violet") {
//     z.style.backgroundColor = "green";
//  } else if (z.style.backgroundColor == "green") {
//     z.style.backgroundColor = "blue";
//  } else {
//     z.style.backgroundColor = "blue";
//  }
// }
// setInterval(changeBackgroundColor, 1000);


// let all = document.querySelectorAll("li");

// for (let i = 0; i < all.length; i++) {
//     all[i].style.listStyleType = 'none'
//     all[i].style.padding = '12px'
//     all[i].style.width = '500px'
//     if (i == 0){
//         all[i].style.backgroundColor = 'green'
//     } else if (i == 1) {
//         all[i].style.backgroundColor = 'yellow'
//     } else {
//         all[i].style.backgroundColor = 'red'
//     }
// }

        // let title
        // for (let i = 0; i < 3; i++) {
        //     title = document.createElement('h1')
        //     title.className = 'title'
        //     title.style.fontSize = '24px'
        //     title.textContent = i
        //     document.body.appendChild(title)
        // }

        function isPrime (n) {
            // if (n < 2) {
            //     return `${n} is not a prime`
            // }

            for (let i = 2; i < n; i++) {
                if (n % i === 0){
                    return `${n} is not a prime`
                }
            }
            return `${n} is a prime number`
        }

        console.log(isPrime(1))