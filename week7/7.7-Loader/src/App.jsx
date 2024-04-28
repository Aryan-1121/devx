import './App.css'
import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {

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

function Todo({ id }) {
  // exactly similar to this we have useRecoilSetValueLoadabel and useRecoilStateLoadable
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
  // this currentTodo will have 2 important things 1st-> CONTENTS - actual data
  // 2nd -> STATE -> (loading/ hasValue / hasError)
  // so whenever we have currentTodo's state as 'loading' then we will log/ show loading... as string in div and will show value from BE when status changes to 'hasValue' 
  if (currentTodo.state === 'loading') {
    return <div>  LOADING...  </div>
  }
  else if (currentTodo.state === 'hasValue') {
    return <div>
      {currentTodo.contents.title}
      <br />
      {currentTodo.contents.description}
      <br />
      <br />
    </div>
  }
  else if( currentTodo.state === 'hasError'){
    return <div>
      an error came while fetching data from Back end :(
    </div>
  }
}
export default App
