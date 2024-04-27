
import { atom, selector } from 'recoil';


export const notifications = atom({
    key : 'networkAtom',
    default: {
        // network:Math.floor(Math.random() * 250),
        network:0,
        jobs:0,
        messages: 0,
        notifications:0
    }
});



export const totalNotificationSelector = selector({
    key:'totalNotificationSelector',
    get: ({get}) =>{
        const allNotifications = get(notifications);

        return  allNotifications.network+  allNotifications.jobs+ allNotifications.messages +  allNotifications .notifications;
    } 
})




