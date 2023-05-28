let x = 10;
let y = 20;
let z = x + y;

document.getElementById("demo").innerHTML = z;

let myFirstName = "mochamad";
let myMiddeName = "iqbal";
let myLastName = "hernadi";

console.log(myFirstName + ' ' + myMiddeName);

let a = 5;
let b = 5;
let c = 6;

document.getElementById("demo1").innerHTML =
(a == b) + "<br>" + (a == c);

function firstTime(){
    alert('hello word');
}
firstTime();

let shoe = {name:"vans", size:"39", color:"black"};

document.getElementById('demo2').innerHTML = "the name of shoe is " + shoe.name;

function displayDate(){
    document.getElementById('demo3').innerHTML = Date();
}
