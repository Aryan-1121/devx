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

  // each time the app refreshes 1st the default value of those 4 fields will be populated from Atom (0,0,0,0) and then after 100ms or so it will fetch from useEffect logic.
  // empty dependency array makes sure it will gets run the very 1st time the app refreshes 
  // useEffect(()=>{
  //   axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=1')
  //     .then(res =>{
  //       const fetchedNo = (parseInt(res.data.data[0].number));
  //       const valuesToBeSet = {
  //          network : fetchedNo % Math.floor(Math.random() * 250) ,
  //          jobs : fetchedNo % Math.floor(Math.random() * 50) ,
  //          messages : fetchedNo % Math.floor(Math.random() * 15) ,
  //          notifications : fetchedNo % Math.floor(Math.random() * 100) ,

  //       }
  //       setAllNotifications(valuesToBeSet);
  //     })
  // },[])

 

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
