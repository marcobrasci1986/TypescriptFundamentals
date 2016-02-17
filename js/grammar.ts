declare var document;

document.title;

var x = 1;
var y;

var firstName = "John";
var lastName:string = "Papa";

var number1 = 100;
var number2:number = 20;

function addNumbers(n1:number,n2:number,n3:number) {
    var result = n1 + n2 + n3;
    var msg = "Sum : " + result;
    alert(msg);
}

addNumbers(number1, number2, 7);
