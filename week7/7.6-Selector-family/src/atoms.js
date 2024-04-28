
import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios'

// atomFamily  -> multiple dynamic atoms (also cache the atom once calcultaed)
// selector Family -> used with atomFamily where we have multiple/dynamic atoms to deal with and comimng from some other BE server 

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default: selectorFamily({
        key: 'todosSelectorFamily',
        get: function(id){
            return async function({get}){
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                return res.data.todo;
            }
        }
    })
});

