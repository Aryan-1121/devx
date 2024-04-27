import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'

// I could have done same thing using useState
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);

  return (
    <div>
      <button> Home</button>


      <button> My Network({networkCount >= 100 ? '99+' : networkCount}) </button>
      <button> Jobs</button>
      <button> Messaging</button>
      <button> Notification</button>


      <button> Me </button>
    </div>
  )
}

export default App
