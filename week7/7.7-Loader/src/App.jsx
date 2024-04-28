import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  const [count, setCount] = useState(0)

  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={3} />
    <Todo id={3} />
    <Todo id={3} />
    <Todo id={3} />
    <Todo id={3} />
    {/* even though we are using Todo with id=3 multiple times still the BE will be  hitted only once and then value will be cached for it and re-used when same thing is again needed to be fetched  */}
  </RecoilRoot>
}



function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return <div>
    {currentTodo.title}
    {currentTodo.description}
    <br />
  </div>

}


export default App
