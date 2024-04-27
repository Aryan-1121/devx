import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const [allNotifications, setAllNotifications] = useRecoilState(notifications);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(()=>{
    axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=1')
      .then(res =>{
        const fetchedNo = (parseInt(res.data.data[0].number));
        const valuesToBeSet = {
           network : fetchedNo % Math.floor(Math.random() * 150) ,
           jobs : fetchedNo % Math.floor(Math.random() * 50) ,
           messages : fetchedNo % Math.floor(Math.random() * 15) ,
           notifications : fetchedNo % Math.floor(Math.random() * 100) ,

        }
        setAllNotifications(valuesToBeSet);
      })
  },[])

 

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
