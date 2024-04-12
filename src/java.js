console.log("Java Script");
let name="Roshan"; //we can also use single quote
console.log(name);

let age=30;
let isApproved =true;

console.log (typeof name)

// object in java

let person = {
    name:'Roshan' ,
    age:30
}
person.name="John"
console.log(person);
console.log(person.name);
//brachet notation
person["name"]="Rudra";
console.log(person.name)

//list of objects
let selectedColors=['red','blue'] // arrays with 2 elemets
selectedColors[2]='green';
selectedColors[3]=1;
console.log(selectedColors)
console.log(selectedColors[0])

        //Function
function greet(name,lastname) {
    console.log("My name is "+name +' '+lastname);
}

greet('Roshan',"Shiwakoti");

    //return value in function
function square(number) {
    return number*number;
}
console.log(square(2));
var nachname="Shiwakoti"
console.log(nachname);

const x=439;
console.log(x);

//to print the current day and time
let newDate= new Date ();
console.log (newDate)
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime)


var day=newDate.getDay()
console.log(day);
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
console.log("Today is " +daylist[day]);

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//to learn the java and htmp together

        //to print the area of triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);