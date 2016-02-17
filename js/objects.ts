module objects{
    var points = {
        x : 10,
        y:20
    };

    var x = points.x;



    var rectangle = {
        h:10,
        w:20,
        calcArea: function () {
            return this.h * this.w;
        }
    }

    console.log("Output: " + rectangle.calcArea());
    
    var squareIt = function (rect : {h:number; w?: number}) {
        if(rect.w === undefined){
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }


    var q:number = squareIt({h:10});
    console.log("q: " + q);

    var q2:number = squareIt({h:10, w:40});
    console.log("q2: " + q2);


}
