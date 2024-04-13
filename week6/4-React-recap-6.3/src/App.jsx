import { memo, useEffect, useMemo, useState } from 'react'


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
    console.log('re-render form bank Data');
    setBankData({ income: 200 });
  }, 4000);

}, []);



  const cryptoReturns = (()=>{
    console.log('render for cryptoReturns ');
    return cryptoData1.returns + cryptoData2.returns;
  });

  return (
    <div>
      parent rendering
      {/* <CryptoCalculator cryptoReturns= { cryptoReturns } /> */}
      <DummyWoProps />        

      {/* PROBLEM : even the DummyWoProps component re-renders after 4 sec when bankData re-renders which has nothing to do with this Component (DummyWoProps is independent of any props) */}

      {/* SOLUTION : memo from react (it skips the re-render when props of a child doesn't chage) */}

    </div>
  )
}


const CryptoCalculator = function({ cryptoReturns}){
  console.log('child with props (not changing)');
  return <div>
    crypto returns is : {cryptoReturns}
  </div>
}

// function DummyWoProps(){
//   console.log('dummy child w/o any props');
// }
const DummyWoProps = memo(()=>{
  // since we are using memo from react this will skip the re-render when its parent re-renders and its props doesn't change (in this case it doesn't have any props => no prop changed hence it will skip all re-renders when its parent gets re-render )
  console.log('dummy child w/o any props');
})






export default App
