import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

// I could have done same thing using useState
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom);



  return (
    <div>
      <button> Home</button>


      <button> My Network ( {networkCount >= 100 ? '99+' : networkCount} )</button>
      <button> Jobs ( {jobsCount} )</button>
      <button> Messaging ( {messageCount} )</button>
      <button> Notification ( {notificationCount} )</button>


      <button> Me </button>
    </div>
  )
}

export default App
