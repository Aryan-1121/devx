import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const [allNotifications, setAllNotifications] = useRecoilState(notifications);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

 

  return (
    <div>
      <button> Home</button>


      <button> My Network ( {allNotifications.network >= 100 ? '99+' : allNotifications.network } )</button>
      <button> Jobs ( {allNotifications.jobs} )</button>
      <button> Messaging ( {allNotifications.messages} )</button>
      <button> Notification ( {allNotifications.notifications} )</button>


      <button> Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App
