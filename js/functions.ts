module functions {

    var squareIt:
        (rect: {h:number; w?:number}) => number;

    var rectA = {h:7};
    var rectB = {h:7, w: 12};

    squareIt = function (rect) {
        if(rect.w !== undefined){
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}
