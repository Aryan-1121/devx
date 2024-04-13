import { memo, useCallback, useEffect, useMemo, useState } from 'react'


// PROBLEM :    any time a component renders its all children gets render doesn't matter weather the child's prop gets updated or not / or even when child doesn't uses any props 


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
    console.log('re-render form bank Data after 4-sec');
    setBankData({ income: 200 });
  }, 4000);

}, []);


//  SOLUTION :
//      useCallback is not about minimizing the amount of code that is going to run 
//    useCallback is about not rendering a child component, if the function hasn't/ doesn't need to change across renders 

  const cryptoReturns =useCallback( function(){
    return cryptoData1.returns + cryptoData2.returns;
  }, [cryptoData1, cryptoData2]);

   return (
    <div>
      <CryptoCalculator cryptoReturns= { cryptoReturns } />
    </div>
  )
}

// PROBLEM : if I try using memo from react where a component is taking a function as a prop then it will not work as expected bcs reference of existing function in virtual DOM and new Dom when re-render occur from parent is different, hence it will mark both things as different eveen if the content is same within -> this sohuld not happen 

const CryptoCalculator = memo(function({ cryptoReturns}){
  console.log('child re-renders ( props not changing)');
  return <div>
    crypto returns is : {cryptoReturns()}
  </div>
})


export default App
