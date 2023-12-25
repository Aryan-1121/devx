
//             ///                     BASIC ARRAY 


// const nameArray=["herro", "villian" , "joker" , "superman","harry potter"];
// const ageArray= [23,44,3,6,34];

// for(let i =0; i<ageArray.length; i++){
//     if(ageArray[i]%2==0){
//         console.log(nameArray[i]+" has a even age ->"+ ageArray[i]);
//     }
// }


        //          complex objectss with different datatypes



        //      OBJECT 

// const person1 = {
//         firstName : "hari",
//         lastName : "krishna",
//         age : 16,
//         gender : "male" 
//     }


// console.log(person1["firstName"]);

// console.log(person1["lastName"]);
// console.log(person1["age"]);
// console.log(person1["gender"]);


// console.log(person1);

// console.log(person1.firstName);



//          ARRAY OF OBJECTS

const persons = [
    {
    firstName : "hari",
        lastName : "krishna",
        age : 18,
        gender : "male" 
    },
    {
        firstName : "raman",
        lastName : "mishraa",
        age : 16,
        gender : "male" 
    },

    {
        firstName : "simran",
        lastName : "kumari",
        age : 18,
        gender : "female" 
    },

    {
        firstName : "hero",
        lastName : "singh",
        age : 26,
        gender : "male" 
    }     

]

for(let i =0 ; i<persons.length; i++){
    if(persons[i].gender == "male"){
        console.log(persons[i])
    }
    else {
        console.log (persons[i].firstName+ " is a female cadidate with age ="+ persons[i].age);
        console.log (persons[i]["firstName"]+"'s full name is ="+ persons[i].firstName +" "+persons[i].lastName);

    }
}

















































































