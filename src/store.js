import createStore from 'redux-zero';

const TODOS = [
   {
      id: 0,
      name: 'board 1'
   },
   {
    id: 1,
    name: 'poiuy'
 },
 {
    id: 2,
    name: 'listaaaa'
 },
 {
    id: 3,
    name: 'aspdwelifjw'
 },
 {
    id: 4,
    name: 'aaaa'
 },
 {
    id: 5,
    name: 'felkwjfekw'
 }
];

const initialState = {
   todos: TODOS,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;