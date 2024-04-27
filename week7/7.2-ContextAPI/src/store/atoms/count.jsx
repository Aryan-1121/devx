// this could be count.js no need to specify jsx
import { atom, selector } from 'recoil'

//  count related state variables will be defined here 

export const countAtom = atom({
    key: 'countAtom',
    default: 0
})


// selector are kind of useMemo of recoil 

export const evenSelector = selector({
    key: 'evenSelector',
    get:({get}) =>{
        const count = get(countAtom);
        return count%2==0; 

    }
})


