
import { atom } from 'recoil';


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

