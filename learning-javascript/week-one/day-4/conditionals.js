let uang = 500;
let uang2 = 500;
let harga = 700;

if(uang == harga){
    console.log('anda dapat membeli ini');
}else if(uang2 === harga){
    console.log('anda tidak dapat membeli ini');
}else{
    console.log('maaf anda tidak memiliki uang')
}



let text = prompt('enter text');
let myText = '';
let Text = text.toLowerCase();

switch(Text){
    case "a":
        myText = alert('saya a');
        break;
    case "b":
        myText = alert('saya b');
        break;
    case "c":
        myText = alert('saya c');
        break;
        default:
            alert('anda bukan siapa siapa!')        
}