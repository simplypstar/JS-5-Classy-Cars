// base/parent class
class Vehicle {
    constructor (model) {
        this.model = model
    }

   drive() {
        return `$(this.model) drives`
    }
}

class Sedan extends Vehicle {
    condtructor(model, backupCamera){
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }

    drive() {
        return `${this.model} drives`
    }
}

class Suv extends Vehicle {
    condtructor(model, offloadPackage){
        super(model)
        this.model = model
        this.offroadPackagee = offroadPackage
    }

    drive() {
        return `${this.model} drives`
    }
}

class truck extends Vehicle {
    condtructor(model, offloadPackage){
        super(model)
        this.model = model
        this.towingCapacity = this.towingCapacity
    }

    drive() {
        return `${this.model} drives`
    }
}

class EVSadan  extends Vehicle {
    condtructor(model, backupCamera){
        super(model)
        this.model = model
        this.backupCamera = this.backupCamera  
    }

    drive() {
        return `${this.model} drives`
    }

    recharge(){
        return `${this.model} recharged`
    }
}