class Engine{
    constructor(public horsePower:number, public engineType:string){
    }
}
/**
 * Some comments
 */
class Car{

    private _engine:HTMLAllCollection;

    constructor(engine:Engine){
        this.engine = engine; // calls setter
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(value:Engine){
        if(value == undefined){
            throw 'Pls supply engine';
        }else{
            this._engine = value;
        }
    }

    start():void {
        alert('Car engine started: ' + this._engine.engineType);
    }
}

window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);

    alert(car.engine.engineType);
    car.start();
}
