// eg of JSON 

const user ={
    "name": "Aryan",
    "age" : 23,
    "gender" : "male"
}

// console.log(user["name"]);
// console.log(user.name);

//   but if i want to send this data -> then i would convert this into a string to send and then the other side maybe convert it back to a json object ;




// const toBeSentUser = '{"name": "joker", "age": 23, "gender": "female"}'
// // now i cant use console.log(user["name"]);    or console.log(user.name);      coz its now a string but i can do console.log(users["0"]) -> this will give char;
// // console.log(users["7"]);


// //      to convert json object to string or vice-versa JSON class gives some methods 

// const converteddJonUser = JSON.parse(toBeSentUser);
// console.log(typeof(converteddJonUser));
// console.groupCollapsed(converteddJonUser);




//        KEY PART OF JSON OBJECT ALSO NEEDS TO BE IN DOUBLE QUOTES 


const jsonUser = {
    name: "Aryan",
    age : 23,
    gender: "male"
}

const jsonUser2 = {
    "name": "supermaen",
    "age" : 23,
    "gender": "male"
}
// JSON.stringify   -> convert json object to string 

const jsonToString = JSON.stringify(jsonUser);

console.log(typeof(jsonToString));
console.log(jsonToString);


const jsonToString2 = JSON.stringify(jsonUser2);

console.log(typeof(jsonToString2));
console.log(jsonToString2);





// function jsonMethods(jsonString) {
//     console.log("Original JSON String:", jsonString);
  
//     // Parsing JSON string to JavaScript object
//     let parsedObject = JSON.parse(jsonString);
//     console.log("After JSON.parse():", parsedObject);
  
//     // Stringifying JavaScript object to JSON string
//     let jsonStringified = JSON.stringify(parsedObject);
//     console.log("After JSON.stringify():", jsonStringified);
//   }
  
//   // Example Usage for JSON Methods
//   const sampleJSONString =
//     '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
//   jsonMethods(sampleJSONString);
  