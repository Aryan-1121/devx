
// function timer(){

//     return new Promise(function(resolve){
//         setTimeout(resolve, 1000);
//     });
// }


// async function main(){
//     let counter =0; 

//     while (true){
//         let ans = await timer().then(function(){
//             console.log(++counter);
//     });
//     }
// }

// main();




//      recursion


// function Counter(){

//     let count =0; 
//     function updateCount(){
//         console.log(++count);
//         setTimeout(updateCount, 1000);
//     }

// updateCount();
// }

// Counter();


//  without recursion

function startCounter(){
    let count =0; 

    function updateCounter(){
        console.log(++count);
    }

    function nextCount(){
        setTimeout(function(){
            updateCounter();
            nextCount();
        },1000);
    }

    nextCount();
}

startCounter();




