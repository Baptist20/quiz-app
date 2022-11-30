// javasript to check if a number is positive or negative
var num = prompt();
if ( num == 0 ){
    console.log('then it is zero')
}
else if ( num > 0 ){
    console.log('then it is positive')
}
else {
    console.log('it is negative')
}



// javasript to alert biggest number among three numbers
var num = prompt() ;
var num2 = prompt() ;
var num3 = prompt() ;

if (num > num2){
    console.log(alert(num))
}
else if (num2 > num3){
    console.log(alert(num2));
}
else {
    console.log(alert(num3));
}



// javascript to tell if a number is even or odd
var num = prompt();
if (num % 2 == 0 ){
    console.log('The number is even')
}
else if ( num % 2 != 0 ){
    console.log('The number is odd')
}


// the length of an array 
var cars = ['volvo' , 'Benz' , 'Camry'];
console.log(cars.length);
// or
var cars = ['volvo' , 'Benz' , 'Camry'];
document.write(cars.length);


// replacing a string using an array property
var name = 'Hello my name is Daniel';
var nam = name.replace('Daniel', 'Baptist');
console.log(nam)