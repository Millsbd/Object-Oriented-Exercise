class Vehicle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    honk() {
        return 'Beep.'
    }
    toString() {
        return `The vehicle is a ${this.a} ${this.b} from ${this.c}.`
    }
}
// Create a class which accepts 3 arugments, make, model, year. 

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    }
    }
    // extend the class to add the number of wheels property using this. **THE SUPER MUST BE INSIDE THE CONSTRUCTOR AND RUN BEFORE YOU USE THIS!!**

    class MotorCycle extends Vehicle {
        constructor(a,b,c){
            super(a,b,c);
            this.numWheels = 2;
        }
        revEngine(){
            return 'VROOOM!!'
        }
        }
    // Same process but added a new method

    class Garage {
        constructor(capacity){
            this.capacity = capacity;
            this.vehicles = [];
        }
        add(vehicle){
            if(vehicle instanceof Vehicle){
                this.vehicles.push(vehicle);
                return 'Vehicle Added!'
            }
            else if (this.capacity > this.vehicles.length){
                return 'No Room Here!!'
    // ***Why does the else if need this. in both places instead of CAPAPCITY > VEHICLES.LENGTH??***
            }
            else{
                return 'Only Vehicles allowed in Here!!'
            }
        }
    }

    // create the class called garage and use constructor to set the property for capacity using this, create an empty array using this. 

    // When a vehicle is added check if it exists in the vehicle class and if the garage is at capacity. 

    let myGarage = new Garage(3);
    let addVehicle = new Vehicle ('ford', 'truck', 2001);
    let addVehicle1 = new Vehicle ('nissan', 'truck', 2001);
    let addVehicle2 = new Vehicle ('honda', 'truck', 2001);
    let addVehicle3 = new Vehicle ('mazda', 'truck', 2001);

    // in order to pass validation I have to create variables I can enter in the myGarage.add(varible name)