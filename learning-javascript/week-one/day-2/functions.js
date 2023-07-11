// function firstTime(){
//     alert('hello word');
// }
// firstTime;


// EXERCISES

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


// let a = 'iqbal'
// let b = 19

// function letsLearnScope() {
//     if(true){
//         let a = 'hernadi'
//         let b = 19
//         console.log(a, b)
//     }
//     console.log(a, b);
// }

// letsLearnScope()
// console,log(a, b)


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
  



// function declaration

// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


// function calculateAge(birthYear, currentYear = 2019) {
//     let age = currentYear - birthYear
//     return age
//   }
//   console.log('Age: ', calculateAge(1819))



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