// let x = 20;
// let y = 20;

// let hasCar = true;

// if( x > y) 
//     console.log("X is greater than Y");
//  else if(x == y) {
//     console.log("numbers are equal");

// if (x != 20 || hasCar && y >=15 )
// console.log("X dose't equal to 25");

// } else 
//     console.log("numbers are not equal");

// let str = "David";
// switch(str){
//    case "George":
//     console.log("Name George");
//    break;
//    case "Goblin":
//     console.log("Name Goblin");
//    break;
//    case "Mark":
//     console.log("Name Mark");
//    break;
//    default:
//     console.log("There is no one like " + str)
//     break;
// }

// let nums = 26;

// let result = nums > 25 ? "Big" : "small";
// console.log(result);

let array = [69, false, 3.14, "I'm white","F"];

let str = array.join(" + ");
console.log(str);

array.splice(1, 1);

console.log(array);

array[1] = true;
array[3] = "I'm black";
array[0] += 31;
console.log(array[3]+" "+array[1]);

array[5] = "yes";

array.pop();
array.push("Sam","Arta", 16);
// array.shift();
array.unshift();

// // array.length = 10;
delete array[6];

console.log(array);

// console.log(array.length);
// array.pop();

let arr = new Array(5,2);
console.log(arr);

let matrix = [
    [21],
    [7,"Carl Johnson"],
    [10.2, 2004, "San Andreas" ]
];

console.log(matrix[1] [1]+" "+matrix[2] [2]);

str = "Hello, world, 5, 0, qwerty";
let aray_split = str.split(", ")
console.log(aray_split);