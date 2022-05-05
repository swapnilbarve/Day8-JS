console.log("working...");
//CharAt

let str="Lakhwindher singh";
console.log(str.length);
console.log(str.charAt(2));

// endsWith
console.log(str.endsWith("h"));

//includes
let sentence = "Hello World";
console.log(sentence.includes("World"));

//indexOf , LastIndexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//Length
console.log(str.length);

//replace - Not going to manipulate the original String
console.log(str.replace("Lakhwindher", "Lucky"));

//search
console.log(str.search("singh"));

//substr
console.log(sentence.substr(1,4));//first value is the index position and second value is how many charecter from the index position mentioned in the first value

//substring
console.log(sentence.substring(0,7));// last index value is exclusive

console.log(sentence.substring(7,0));

//split
let email="sidhant.guptha@prepbytes.com"
console.log(email.split("@"));