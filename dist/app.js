"use strict";
class Vehical {
    constructor(_make, _model, _year, _engine, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._engine = _engine;
        this._rented = _rented;
    }
    get make() { return this._make; }
    get year() { return this._year; }
    get model() { return this._model; }
    get engine() { return this._engine; }
    get rented() { return this._rented; }
    set make(value) {
        if (!value)
            throw new Error("MAKE value must be provided");
        this._make = value;
    }
    set year(value) {
        if (!value)
            throw new Error("YEAR value must be provided");
        this._year = value;
    }
    set model(value) {
        if (!value)
            throw new Error("YEAR value must be provided");
        this._year = value;
    }
    rentVehical(vehical) {
        if (this._rented) {
            console.log(`${vehical} is already rented`);
            return;
        }
        this._rented = true;
        console.log(`${vehical} rented`);
    }
    returnVehical(vehical) {
        if (this._rented) {
            console.log(`${vehical} returned`);
            this._rented = false;
            return;
        }
        console.log("Something is wrong");
    }
}
class Car extends Vehical {
    constructor(make, model, year, engine, _color, rented) {
        super(make, model, year, engine, rented);
        this._color = _color;
    }
    get color() { return this._color; }
    set color(v) {
        if (!v) {
            console.log('COLOR must be provided');
            return;
        }
        this._color = v;
    }
    rentalRate() {
        return 700;
    }
}
class Motorcycle extends Vehical {
    constructor(make, model, year, engine, _seat, rented) {
        super(make, model, year, engine, rented);
        this._seat = _seat;
    }
    get seat() { return this._seat; }
    rentalRate() {
        return 400;
    }
}
class Truck extends Vehical {
    constructor(make, model, year, engine, _canCarryLoad, rented) {
        super(make, model, year, engine, rented);
        this._canCarryLoad = _canCarryLoad;
    }
    get canCarryLoad() { return this._canCarryLoad; }
    rentalRate() {
        return 1000;
    }
}
const bike = new Motorcycle('honda', 2020, 2021, 125, 4);
console.log('bike rent:', bike.rentalRate());
bike.rentVehical('bike');
console.log(bike);
bike.returnVehical('bike');
const car = new Car('suzuki', 1998, 1999, 1700, 'red');
console.log('car rent:', bike.rentalRate());
console.log(car);
car.rentVehical('car');
console.log(car);
car.returnVehical('car');
const truck = new Truck('Hondai', 1700, 1700, 2500, '4 ton');
console.log('truck rent:', bike.rentalRate());
console.log(truck);
car.rentVehical('truck');
console.log(truck);
car.returnVehical('truck');
//# sourceMappingURL=app.js.map