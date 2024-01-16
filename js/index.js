let x = 20;
let y = 20;

let hasCar = true;

if( x > y) 
    console.log("X is greater than Y");
 else if(x == y) {
    console.log("numbers are equal");

if (x != 20 || hasCar && y >=15 )
console.log("X dose't equal to 25");

} else 
    console.log("numbers are not equal");

let str = "David";
switch(str){
   case "George":
    console.log("Name George");
   break;
   case "Goblin":
    console.log("Name Goblin");
   break;
   case "Mark":
    console.log("Name Mark");
   break;
   default:
    console.log("There is no one like " + str)
    break;
}

let nums = 26;

let result = nums > 25 ? "Big" : "small";
console.log(result);