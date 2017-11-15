import store from './store';
import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxPvNJMZq-Dm3u9JFfNFWZj1qfPwXpnN0",
    authDomain: "trello-app-222e9.firebaseapp.com",
    databaseURL: "https://trello-app-222e9.firebaseio.com",
    projectId: "trello-app-222e9",
    storageBucket: "trello-app-222e9.appspot.com",
    messagingSenderId: "436017078459"
  };
  firebase.initializeApp(config);
  
export const addTodo = (name) => {
   let oldList = store.getState().todos;
   const newList = oldList.concat({
      id: oldList.length,
      name: name
   });
   store.setState({
      todos: newList
   });
};

export const removePlayer = (index) => {
	const addTodo =  store.getState().todos.filter( (item, idx) => idx != index );

	store.setState({
		todos: addTodo
	})
}

export const abuse = () =>{
     alert("Tell us the reason in the next link : www.sdcjsdjcs.com");
 }
