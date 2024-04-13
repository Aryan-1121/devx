import { useEffect, useMemo, useState } from 'react'

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



//    this will only gets re-computed iff either of  cryptoData1 or cryptoData2 changes
  const cryptoReturns = useMemo(()=>{
    // this will render only twice -> when cryptoData1 &  cryptoData2 changes 
    console.log('render for cryptoReturns ');
    return cryptoData1.returns + cryptoData2.returns;
  }, [cryptoData1, cryptoData2]);



  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      your Income Tax returns are  : {incomeTax}

    </div>
  )
}

export default App
