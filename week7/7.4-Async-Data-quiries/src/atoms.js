
import axios from 'axios';
import { atom, selector } from 'recoil';
import { useEffect } from 'react';

//          ASYNCHRONOUS DATA QURIES -> when we want to initialize our atoms from axios/fetched data instead of harcoded default value
// default value of an atom needs to be sync or a selector(selector could be async)

// // sync call ->
// export const notifications = atom({
//     key : 'networkAtom',
//     // instead of giving hardcoded value here If i could make a fetch/axios call here 
//     default: {
//         // network:Math.floor(Math.random() * 250),
//         network:0,
//         jobs:0,
//         messages: 0,
//         notifications:0
//     }
// });



// async call (using selector) ->
// now instead of default(0,0,0,0) value we will see white/blank page untill the data is fetched 
export const notifications = atom({
    key: 'notifications',
    default: selector({
        key: 'networkAtomSelector',
        
        get: async () => {
                const res = await axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=1')
            const fetchedNo = res.data.data[0].number;
            const valuesToBeSet = {
                network: fetchedNo % Math.floor(Math.random() * 250),
                jobs: fetchedNo % Math.floor(Math.random() * 50),
                messages: fetchedNo % Math.floor(Math.random() * 15),
                notifications: fetchedNo % Math.floor(Math.random() * 100),
                
            }
            return valuesToBeSet;
        }
    })
})





export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({ get }) => {
        const allNotifications = get(notifications);

        return allNotifications.network + allNotifications.jobs + allNotifications.messages + allNotifications.notifications;
    }
})




