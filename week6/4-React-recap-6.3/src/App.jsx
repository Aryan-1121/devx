import { useState } from 'react'

function App() {

const [cryptoData, setCryptoData] = useState({});
const [bankData, setBankData] = useState({});

// fetch('https://google.com', async(res) =>{
//   const json = await res.json();
//   // setBankData(json);
//   // eg. let json data be -> {income : 200}
//   setBankData({income : 200})
// });

// simulating fectch req. to a setTimeout otherwise since url is incorrect it will give error

setTimeout( ()=>{
  console.log('re-render form bank Data');

  setBankData({income : 200});
}, 3000);

setTimeout(()=>{
  console.log('re-render form Crypto Data');

  setCryptoData({
    returns: 100
  });
}, 1000);

// PROBLEM   ->   each time setBankData and setCrptoData gets updated a whole App re-render occur then again these 2 gets updated then again whole app re-render and this goes on infinitely -> TO SOLVE THIS ISSUE WE HAVE {USEeFFECT}

const incomeTax = (bankData.income + cryptoData.returns) * 0.3 ; 




  return (
    <div>
      your Income Tax returns are  : {incomeTax}

    </div>
  )
}

export default App
