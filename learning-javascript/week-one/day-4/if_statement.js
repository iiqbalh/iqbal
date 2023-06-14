

// // function bilangan(num) {
// //     if (typeof num !== 'number') {
// //         console.log('Param num tidak boleh kosong')
// //         return
// //     }

// //     if (num % 2 === 0){
// //         console.log('ini bilangan genap')
// //     } else {
// //         console.log('ini bilangan ganjil')
// //     }

// // }

// // const value = 8
// // bilangan('')

// // Soal 1
// /**
//  * Buat sebuah function dengan nama bilangan yang menerima nilai dengan tipe data number
//  * Tentukan bilangan ganjil atau genap dari nilai tsb
//  * contoh kembalian dari function "Bilangan", Ini adalah bilangan Ganjil/Genanp
//  */


// // Pelajari hela for loop -> for
// // Soal 2
// /**
//  * Buat sebuah function yang menerima sebuah number untuk mengeluarkan deret angka bilang ganji dan genap
//  * contoh: Jika function tsb diinputkan 10, maka keluarannya
//  * Ganji: [1,3,5,7,9]
//  * Genap: [2,4,6,8,10]
//  */


// // const genap = ["0", "2", "4", "6", "8", "10"];
// // const obj = {a: 1, b: 3}


// // selama nilai i kurang dari 4, jalan





// function bilangan(num){
// 	// let gen = [];
// 	// let gan = [];

// 	// for(let i = 0; i <= num; i++){
// 	// 	if(i % 2 === 0){
// 	// 		gen.push(i)
// 	// 	}else{
// 	// 		// gan.push(i)
// 	// 	}
// 	// }

// 	// console.log('genap: ', gen);
// 	// console.log('ganjil; ', gan);
// }

// function fullName(firtName, lastName) {
// 	// return `${firtName} ${lastName}`
// 	console.log(firtName + ' ' + lastName)
// }
// const num = 6
// // bilangan(num);
// // console.log(fullName('iqbal', 'hernadi'));
// // const result = fullName('iqbal', 'hernadi')
// // console.log(result)

// fullName('iqbal', 'hernadi')

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Enter your age: ', num => {

// 	let angka = 18;
// 	let arr = [];
// 	let arr2 = [];

// 	if (num % 2 === 0) {
// 		// console.log('You are old enough to drive.')
// 		for(let i = 1; i <= angka; i++){
// 			if (i % 2 === 0){
// 			arr.push(i);
// 			}
// 		}
// 		console.log("umur genap ,", arr)
// 	}

// 	if (num % 2 === 1) {
// 		// console.log(`You are left with ${18 - num} years to drive.`)
// 		for(let i = 1; i <= angka; i++){
// 			if (i % 2 === 1){
// 			arr2.push(i);
// 			}
// 		}
// 		console.log("umur ganjil ,", arr2)
// 	}

//   readline.close();
// });

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


