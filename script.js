console.log("Hello");

let number = 5; // Assign any number here
 
if (5 > 0) {
   console.log ('5 is greater than 0');
} else if (5 > 0) {

} else if( 5 > 0 ){
    console.log ("5 is smaller than 10 but bigger than 0");

} else if (5 > 0 ){
    console.log(" 5 is bigger than 0 but smaller than 10")

}else  if (5 == 0){
  console.log ("5 is 0" ); 

}else{
console.log (' 5 is bigger than 0 and it positive number');

}

var grade = 'Monday';

switch ( day ) {
    case 'sunday':
        console.log('day 1 ');
        break;
    case 'Monday':
        console.log('day 2');
        break;
    case 'Tuesday ' :
        console.log ('Faiday 3');
        break;
    case 'Wednesday':
        console.log(' day 4 ');
        break;
    case 'Thursday':
        console.log('day 5 ');
        break;
    case 'Friday':
    Console.log(' day 5 ')
    break;
    case 'Saturday':
   Console.log(' day 6 ')
default:
  console.log('Unknown day');

}       

myCustomLabel : {
    for (var i = 0; i < 5; i++) {
      if (i === 3) {
        break myCustomLabel; // Exits the loop as well as the myCustomLabel  block when i is 3
      }
      console.log(i);
    }

    let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    console.log ( globalvar );
    console.log ( localVar );
    // Access globalVar and localVar inside the function
}
  }

