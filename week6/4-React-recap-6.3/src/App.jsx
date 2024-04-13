import { useEffect, useState } from 'react'

function App() {

  const [cryptoData1, setCryptoData1] = useState({});
  const [cryptoData2, setCryptoData2] = useState({});
  
  const [bankData, setBankData] = useState({});





  useEffect(() => {
    setCryptoData1({ returns: 100 });
}, [])


useEffect(() => {
  setCryptoData2({ returns: 200 });
}, [])


useEffect(function () {
  setTimeout(() => {
    console.log('re-render form bank Data');
    setBankData({ income: 200 });
  }, 4000);

}, []);


  const cryptoReturns = cryptoData1.returns + cryptoData2.returns;    // PROBLEM  : this should not re-run when incomeTax is being calculated bcs this value didn't changed  
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      your Income Tax returns are  : {incomeTax}

    </div>
  )
}

export default App
