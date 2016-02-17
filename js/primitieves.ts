module primitives{
    var data : any;
    var info;
    
    var doSomething = function (arg) {
        return arg;
    }

    //var x = doSomething(5);
    var age:number = 21;
    var score: number = 34.56;


    function getArrayLength(x: string[]) {
        var length:number = x.length;
        return length;
    }

    var names: string [] = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));



    var guitarSales:any = null;
    var animal = null;
    var orderDate: Date = null;

    var quantity:number;
    var company = undefined;
    console.log(quantity);
    console.log(company);
}