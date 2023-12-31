// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock24(){
    console.log("24 hrs clock :");
    setInterval(()=>{
        const date = new Date();
        // console.log(`HH:${date.getHours()}  MM:${date.getMinutes()}  SS:${date.getSeconds()}`);

        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    }, 1000);
}


function clock12(){
    console.log("12 hrs clock :");
    setInterval(()=>{
        const date = new Date();
        let HH = date.getHours();
        let MM = date.getMinutes();

        console.log(`${HH%12}:${MM}:${date.getSeconds()} ${HH<12?"AM":"PM"}`);
    }, 1000);
}



// clock24();

clock12();















