import { memo, useCallback, useEffect, useMemo, useState } from 'react'


//    lets suppose we want to update/re-write the dom element which react already gave us 
    // (ideally should not do this , but lets say we havea scenario which requires this )
    // ideally we should just use useState and other hooks which monitor it 

function App() {
  const [income, setIncome] = useState(5000);

    setTimeout(()=>{
      document.getElementById('incomeDiv').innerHTML = 900;
    }, 5000);

   return (
    <div>
      income is : <div id='incomeDiv'> { income }  </div>
    </div>
  )
}




export default App
