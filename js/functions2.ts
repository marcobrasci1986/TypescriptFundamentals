module functions2{
    interface SquareFunction{
        (x:number): number;
    }
    var squareItBasic: SquareFunction = (num) => num * num;


    interface Rectangle{
        h: number;
        w?:number;
    }
    var rectA:Rectangle = {h:7};
    var rectB:Rectangle = {h:7, w: 12};



    var squareIt:(rect: Rectangle) => number;

    squareIt = function (rect) {
        if(rect.w !== undefined){
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }

    //console.log(squareIt(rectA));
    //console.log(squareIt(rectB));

    interface Person{
        name:string;
        age?:number;
        kids:number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p:Person = {
        name: 'Coleen',
        age:40,
        kids:4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger : function (years:number) {
            this.age = this.age - years;
        },
        greet : function (msg:string) {
            return msg + ", " + this.name;
        }
    }

    var pets = p.calcPets();
    console.log(pets);

    p.makeYounger(15);
    console.log(p.age);

    console.log(p.greet("Hello"));


}