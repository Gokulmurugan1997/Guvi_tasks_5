class Circle{
    constructor (radius,color){
            this.radius=radius;
            this.color=color;
            this.pie=3.14;

    }
    getRadius(){
        return(`the radius of circle is ${this.radius}`)
    }
    setRadius(rad){
        this.radius=rad;
    }
    getColor(){
        return (`the color of circle is ${this.color}`);
    }
    setColor (col){
        this.color=col;
    }
    getArea(){
        return(`The area of circle is ${this.pie*this.radius*this.radius}`)
    }
    getCirumferencce(){
        return(`The circumference of circle is ${2*this.pie*this.radius}`)
    }
}
 const circle= new Circle(1,"red");
 circle.setRadius(2);
 circle.setColor("white");
 console.log(circle.getArea());
 console.log(circle.getCirumferencce());
 console.log(circle.getColor());
 console.log(circle.getRadius());