    
/// functoin need -> to kind of follow DRY (dont repeat yourself ), also it looks clean and easy to maintain and read
//      takes input , does some task on it , returnds output 

function findSum(n){
    let ans = 0 ;
    for(let i =0; i<=n;i++){
        ans += i; 
    }
    return ans;
}


// const sum = findSum(10);
console.log(findSum(10));





















































