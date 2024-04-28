
import { atomFamily } from 'recoil';
import { TODOS } from './todos';

// atomFamily  -> multiple dynamic atoms (also cache the atom once calcultaed)

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default: id=> {
        return TODOS.find(x => x.id === id )
    },
});

