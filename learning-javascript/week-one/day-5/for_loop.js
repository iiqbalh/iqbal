
let arr = [];
let sum = 0;
let sum2 = 0;

for(let i = 0; i <= 100; i++){
  if(i % 2 === 0){
    sum += i
  }
}

for(let i = 0; i <= 100; i++){
  if(i % 2 === 1){
    sum2 += i
  }
}

arr.push(sum)
arr.push(sum2)

console.log(arr);