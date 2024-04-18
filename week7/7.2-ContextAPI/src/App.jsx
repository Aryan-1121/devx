
import { countAtom } from './store/atoms/count';
import { RecoilRoot, useRecoilState,useSetRecoilState, useRecoilValue } from "recoil";
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
  //actually this component doesn't need both count and setCount, it only needs to use setCount, and for count we can use function wala logic
  // const [count, setCount] = useRecoilState(countAtom);  

  // earlier Button component was also re-rendering bcs it was using count state var. but no more
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}> increase </button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}> decrease  </button>  </div>
}


export default App
