// task 1
class movie{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const movie1=new movie("vikram","AVM","PG");
console.log(movie1);

// task 2

class movie2{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if (this.rating==null){
            return(this.rating="PG")
    }
        else{
            return(this.rating=rating)
        }
}
}
const movie3=new movie2("vikram","AVM");

console.log(movie3);

// task 3

class Movie6{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        }
        getPG(){
           return (arr.filter(element=>Movie6.this.rating==PG))
        }
    }
 
const movies7=new Movie6("kgf", "sun", "R");
const movies8=new Movie6("kgf", "sun", "PG");
const movies9=new Movie6("beast", "moon", "PG");
const arr=[movies7, movies8, movies9];


        console.log(Movie6.getPG());
   

// task 4

class movie4{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if (this.rating==="PG"){
            return(this.rating="PG")
    }
        else{
            return(this.rating=rating)
        }
}
}
const movie5=new movie4("Casino Royale","Eon Productions","PG13");

console.log(movie5);