
import { atom, selector } from 'recoil';


export const notifications = atom({
    key : 'networkAtom',
    default: {
        network:Math.floor(Math.random() * 250),
        jobs:4,
        messages: 7,
        notifications:45
    }
});



export const totalNotificationSelector = selector({
    key:'totalNotificationSelector',
    get: ({get}) =>{
        const allNotifications = get(notifications);

        return  allNotifications.network+  allNotifications.jobs+ allNotifications.messages +  allNotifications .notifications;
    } 
})




