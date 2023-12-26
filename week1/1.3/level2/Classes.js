

// const dog = {
//     name:"doggie",
//     legCount : 2,
//     speaks :" bhoww bhoww "
// }


// // animal x bhow bhow 

// // console.log("animal "+ dog.name+" wiht " + dog.legCount +" legs does "+ dog.speaks);

// // if want it for cat 

// const cat = {
//     name:"catie",
//     legCount : 4,
//     speaks :" neww meww  "
// }


// // console.log("animal "+ cat.name+" wiht " + cat.legCount +" legs does "+ cat.speaks);

// //  untill now we are repeating thigs -> voilets DRY (dont repeat yourself)


// // hectin work lets just create a funtion which prints the details 

// function printStr(animal){
//     console.log("animal "+ cat.animal+" wiht " + animal.legCount +" legs does "+ animal.speaks);

// }


// printStr(dog);
// printStr(cat);



//  // if in future   there are many animals its hectic to write again again diffrent objects (dog, cat )   -> rather crate a blueprint with specific fields 






class Animal{
    constructor(name, legCount, speaks){
        this.name = name ;
        this.legCount = legCount;
        this.speaks = speaks;

    }
    // static is of class independetn of objects 
    static myType(){
        console.log("i am of type anima l ");
    }

    speak(){
        console.log(" hii there "+ this.speaks)
    }
}

let dog = new Animal("dog", 4, "bhow bhow w");          // creating object of the class Animal with name dog
let cat = new Animal ("cattie", 4, "meww meww");

dog.speak();
console.log(dog);


cat.speak();




class Alien{
    constructor(name, legCount, speaks){
        this.name = name ;
        this.legCount = legCount;
        this.speaks = speaks;

    }
    // static is of class independetn of objects 

    speak(){
        console.log(" hii there "+ this.speaks)
    }
}


Animal.myType();            // correct since static methods can be called with class name 
























