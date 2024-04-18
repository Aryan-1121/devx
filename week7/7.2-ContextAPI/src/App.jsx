
import { countAtom } from './store/atoms/count';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// =>  CONTEXT API  does not make rendering more perfomant  => NOOOOOOOOO
//  => IT JUST MAKE CODE LOOK CLEANER (THAT IS GET RID OF PROP DRILLING)

// TO SUMMARISE THE PROBLEM - > it solves prop drilling but still re-render the children which is not using the state variable which got updated

// SOLUTION - state management library (recoil)

function App() {

  return (
    <div>
      {/* need to wrap everything which uses recoil stuff(state vars defined in atom) bbetween RecoilRoot */}
      <RecoilRoot>

        <Count />
      </RecoilRoot>
    </div>
  )
}

// now this component will not get re-render when not req. unlike earlier(will re-render only 1st time it gets rendered )
function Count() {
  console.log('couter got re-render');
  return <div>
    <CountRenderer  />
    <Buttons  />

  </div>
}

function CountRenderer() {
  // this component just need to use the value of count and not update so we will use useRecoilValue hook 
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  // this component needs both thing count and setCOunt  => useRecoilState
  const [count, setCount] = useRecoilState(countAtom);  

  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}> increase </button>

    <button onClick={() => {
      setCount(count - 1)
    }}> decrease  </button>  </div>
}


export default App
