class PersonDetail{
    constructor(fname,lname,age,department,college,address,interests){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.department=department;
        this.college=college;
        this.address=address;
        this.interests=interests;
    }
    getDetails(){
        return(`The person with name ${this.fname} ${this.lname} with age ${this.age} was studying in ${this.college} ${this.department} department. He is from ${this.address} has interested in ${this.interests}}`)
    }
}
const persondetails=new PersonDetail ("gokul","murugan","26","mechanical","GCE","Tamilnadu","cricket");
console.log(persondetails.getDetails());