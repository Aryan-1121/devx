let sum =0; 
for(let i=0; i<1000000000000; i++){
    sum=sum+i; 
}

console.log(sum);


// this will show that when node program runs it will use 1 cpu (core) to  99-100% since task is given  a lond process and js issingle threaded 
// can confirm it by using either top command or htop command on terminal(it gives live cpu usage stats )