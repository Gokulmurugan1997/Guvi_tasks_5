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
var movies=[];
class movie6{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
        getPG() {
            if (this.rating=="PG"){
                return (movies.push(this.title))
        }
            return movies
        }
        
    
    }


const movie7=new movie6("vikram","AVM","R");

    console.log(movie7.getPG());

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