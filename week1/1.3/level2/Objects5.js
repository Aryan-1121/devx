// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);                //  Object is an global interface/class  given by JS and we can consider keys method to be static method therefore we can access it using its class name (just for understanding pusrpose not sure if it works like this )
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);// its an array where every set of key : value is another array-> [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");           // property is the name of key -> it tells true/false whether the key is there or not in the object
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });           // we can add new property (key: value pair) in existing object 
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  

const user = {
    userName : "aryan",
    age : 34
}

console.log(user.hasOwnProperty("userName"));
console.log(user.hasOwnProperty("gender"));
