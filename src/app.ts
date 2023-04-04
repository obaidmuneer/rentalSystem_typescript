abstract class Vehical {
    constructor(
        private _make: string,
        private _model: number,
        private _year: number,
        private _engine: number,
        private _rented?: boolean,
    ) { }

    get make() { return this._make }
    get year() { return this._year }
    get model() { return this._model }
    get engine() { return this._engine }
    get rented() { return this._rented }

    set make(value: string) {
        if (!value) throw new Error("MAKE value must be provided");
        this._make = value
    }

    set year(value: number) {
        if (!value) throw new Error("YEAR value must be provided");
        this._year = value
    }

    set model(value: number) {
        if (!value) throw new Error("YEAR value must be provided");
        this._year = value
    }

    abstract rentalRate(): number

    rentVehical(vehical: string) {
        if (this._rented) {
            console.log(`${vehical} is already rented`);
            return
        }
        this._rented = true
        console.log(`${vehical} rented`);
    }

    returnVehical(vehical: string) {
        if (this._rented) {
            console.log(`${vehical} returned`);
            this._rented = false
            return
        }
        console.log("Something is wrong");
    }
}

class Car extends Vehical {
    constructor(
        make: string,
        model: number,
        year: number,
        engine: number,
        private _color: string,
        rented?: boolean,
    ) {
        super(make, model, year, engine, rented)
    }

    get color() { return this._color }

    set color(v: string) {
        if (!v) {
            console.log('COLOR must be provided');
            return
        }
        this._color = v;
    }

    rentalRate(): number {
        return 700
    }
}

class Motorcycle extends Vehical {
    constructor(
        make: string,
        model: number,
        year: number,
        engine: number,
        private _seat: number,
        rented?: boolean,
    ) {
        super(make, model, year, engine, rented)
    }

    get seat() { return this._seat }

    rentalRate(): number {
        return 400
    }
}

class Truck extends Vehical {
    constructor(
        make: string,
        model: number,
        year: number,
        engine: number,
        private _canCarryLoad: string,
        rented?: boolean,
    ) {
        super(make, model, year, engine, rented)
    }

    get canCarryLoad() { return this._canCarryLoad }

    rentalRate(): number {
        return 1000
    }
}

const bike = new Motorcycle('honda', 2020, 2021, 125, 4)
console.log('bike rent:', bike.rentalRate());
bike.rentVehical('bike')
console.log(bike);
bike.returnVehical('bike')

const car = new Car('suzuki', 1998, 1999, 1700, 'red')
console.log('car rent:', car.rentalRate());
console.log(car);
car.rentVehical('car')
console.log(car);
car.returnVehical('car')


const truck = new Truck('Hondai', 1700, 1700, 2500, '4 ton')
console.log('truck rent:', truck.rentalRate());
console.log(truck);
car.rentVehical('truck')
console.log(truck);
car.returnVehical('truck')
