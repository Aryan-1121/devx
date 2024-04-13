import { useEffect, useState } from 'react'

function App() {

  const [cryptoData, setCryptoData] = useState({});
  const [bankData, setBankData] = useState({});


  useEffect(function () {
    setTimeout(() => {
      console.log('re-render form bank Data');
      setBankData({ income: 200 });
    }, 3000);

  }, []);

  // empty dependency array means render only once in the starting 

  useEffect(() => {
    setTimeout(() => {
      console.log('re-render form Crypto Data');
      setCryptoData({
        returns: 100
      });
    }, 1000);

  }, [])


  // we could  have used single useEffect instead of 2 by puting both logic inside 1 useEffect only 

  const incomeTax = (bankData.income + cryptoData.returns) * 0.3;

  return (
    <div>
      your Income Tax returns are  : {incomeTax}

    </div>
  )
}

export default App
