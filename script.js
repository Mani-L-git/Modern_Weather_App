const api_key = '0de2a162592e71048cf79043a371348d';

const form = document.querySelector(".input");
const windspeed = document.querySelector(".windspeed");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");

function input(e){
    e.preventDefault();

    const word = document.querySelector("#inputValue").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        var descp = data.weather[0].description;
        var tempt = data.main.temp;
        var wind_Speed = data.wind.speed;

        desc.innerHTML = "Desc: " + descp;  
        temp.innerHTML = "Temp: " + Math.floor(tempt - 273.15) + "°C";
        windspeed.innerHTML = "Wind Speed: " + wind_Speed + " m/s";
    });
}

form.addEventListener('submit', input);




/* function alerting(){
  alert("Welcome js")
} */



/* let a = 10; 
const name = 'mani';
var age = 27;
console.log("The value stored in var a is :",a); */

/* let b=20;
let c=15;
console.log(b*c); */

// Loops 
/* for(let i=0;i<9;i++)
{
    console.log(i);   
} */

//while loop
/* let i=5;
while(i!=0)
{
    console.log(i);
    i--;
}
 */

//Array
/* let fruits = ['mango','apple','grapes'];
fruits.push('pine');
fruits.pop();
console.log(fruits[1]);
fruits.forEach((i)=>{
    console.log(i);
}) */


//Function 
/* function add(a,b)
{
    return a+b;
}
let res = add(2,3);
console.log(res); */

//Map - transform an arr
// - return a new arr
// - does not modify the original arr

/* let fruits = ['mango','apple','grapes'];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(fruits,upperFruits); */

// Filter  - Filter based on  some condition
// Return a new Array with only the items that match the condition 
/* const numbers = [10,20,30,40,50,60,70,80,,90,100,110,120,130,140,150]
const greaterthan30 = numbers.filter(num=>num>30 && num<110);
console.log(greaterthan30); */


//Reduce - reduce an arr to a single arr
//Used for sum ,product etc
/* const arr = [1,2,3,4,5,6];
const sum = arr.reduce((acc,num)=>acc+num,10)
console.log(sum); */
// acc(accumulutor) starts from 0 by default
// num - each num gets add to acc
/*
1st iteration : acc =0;num =1
result-> 1 , acc = result =1;

2nd iteration :1+2=3
result -> 3 ,acc=3
*/

//Objects is a collection of data in key-value pairs
/* const person ={
    name: "mani",
    age : 20,
    Designation : "student",
};
person.state ="TamilNadu"; // add key
person.age=21; // updating key
console.log(person);
console.log(person.name);// dot notation
console.log(person["name"]);// sqr bracket notation
delete person.state; // deleting key
console.log(person);
console.log(Object.keys(person)); // only keys show
console.log(Object.values(person)); // only show values */


/* // Accessing the dom
const heading = document.getElementById('title');
const button = document.getElementById("detail");
//change the text
heading.innerText = "Welcome to DOM"; 
heading.style.fontSize = "100px";
detail.addEventListener('click',function(){
    alert("Button clicked")
}); */


