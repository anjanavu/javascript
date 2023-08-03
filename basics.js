console.log('Welcome to JavaScript');
var x=10;
var y=22;
var result=x%y;
console.log(result);
console.log(x++)

//object creation 1
let person={
    eyeColor:'brown',
    
    Height:5.2,
    age:23

}
console.log(person.eyeColor);
//object creation 2
let car=new Object();
car.model='hyundai',
car.color='black'
console.log(car)


var arr=['b','c','d'];
arr.pop(0);
console.log(arr);


function display(a){
    console.log("Hi My name is "+a);

}
display('Anjana');


let persons={
    fnam:'jaya',
    last:'Sree',
    fullName:function(){
        return this.fnam+this.last;

    }
}
console.log (persons.fullName());
var a=10;
var b=20;
var ans=a<b? console.log('value of a is greater'):console.log('condition fails');
console.log(ans);
