function myFunction(){
    document.getElementById('demo1').innerHTML = Date();
}

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById('demo2').innerHTML = text.length;

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);

document.getElementById('demo3').innerHTML = part;

let str = "Apple, Banana, Kiwi";
document.getElementById("demo4").innerHTML = str.substring(7,13);

function myFunction2() {
    let text2 = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML =
    text2.replace("microsoft","W3Schools");
  }

  let text3 = "I love cats. Cats are very easy to love. Cats are very popular."
text3 = text3.replaceAll("Cats","Dogs");
text3 = text3.replaceAll("cats","dogs");

document.getElementById("demo6").innerHTML = text3;

let text4 = "a,b,c,d,e,f";
const myArray = text4.split(",");
document.getElementById("demo7").innerHTML = myArray[2];