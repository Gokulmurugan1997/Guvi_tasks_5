class Uber{
    constructor(distance,rate,waitingtime){
        this.distance = distance;
        this.rate = rate;
        this.waitingtime = waitingtime;
        
    }
    getride(){
        return(`The distance of the ride ${this.distance}km with the rate of ${this.rate}rs per km with the waiting period of ${this.waitingtime}ms` )
    }
    getprice(){
        return(`The price for ${this.distance}km including waiting charge is ${(this.distance*this.rate)+(this.waitingtime*10)}rs for the destination you requetsed`)
    }
}

const uber= new Uber(10,10,5);

console.log(uber.getride());
console.log(uber.getprice());