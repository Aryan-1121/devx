
import { atom, selector } from 'recoil';


export const networkAtom = atom({
    key : 'networkAtom',
    default: 103
});


export const jobsAtom = atom({
    key : 'jobsAtom',
    default: 0
});


export const notificationAtom = atom({
    key : 'notificationAtom',
    default: 0
});


export const messagingAtom = atom({
    key : 'messagingAtom',
    default: 6
});



            //  SELCTOR -> replaced the use of useMemo to minimize re-render (don't re-render when the state variable in dependency array is not changed )

            // SELECTOR IS DERIVED DIRECTLY FROM OTHER ATOMS (no wajood of itself)

export const totalNotificationSelector = selector({
    key:'totalNotificationSelector',
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);

        return  networkAtomCount+  jobsAtomCount+ notificationAtomCount +  messagingAtomCount ;
    } 
})




