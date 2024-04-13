import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'


//    lets suppose we want to update/re-write the dom element which react already gave us 
// (ideally should not do this , but lets say we havea scenario which requires this )
// ideally we should just use useState and other hooks which monitor it 


// using document.getElem... is wrong way of updating dom elemnts , react gives 'useRef' hook for it 
function App() {
  const [income, setIncome] = useState(5000);
  const divRef = useRef();

  useEffect(() => {

    setTimeout(() => {
      // document.getElementById('incomeDiv').innerHTML = 900;
      console.log(divRef.current);
      divRef.current.innerHTML = 800;
    }, 5000);
  }, [])

  return (
    <div>
      income is : <div ref={divRef}> {income}  </div>
    </div>
  )
}




export default App
