import React, { Component } from 'react';
import { addTodo, removePlayer, abuse } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const Boards = ({ todos }) => {
   const todoList = todos.map((todo,index) => 
   <div className="text-center">
   <ul key={todo.id} className="mark"> 
       <div className="row">
       <li className="col-lg-12">{todo.name}</li>
       </div>
       <li><div className="row"> 
            <div className="col-lg-6 col-sx-12">
                <button className="text-right" onClick={() => removePlayer(index)}>X</button>
            </div>
            <div className="col-lg-6 col-sx-12">
                <button className="text-left" onClick={() => abuse()}>Cancel</button>
            </div>
           </div>
       </li> 
    </ul>
    </div>
    );
   const onSubmit = e => {
      e.preventDefault();
      addTodo(this.name.value)
   };
   return (
      <div className="wrapper">
         <header>
             <div
id="147-hola-este-es-un-tablero-de-prueba"
className="board"
data-reactid=".0.0.1.0.1.1.$147-hola-este-es-un-tablero-de-prueba">
</div>
   <h3>New board</h3>
            <form onSubmit={onSubmit}>
            <div className="group">
                <br/>
               <input
                  type="text"
                  name="name"
                  ref={e => (this.name = e)}
                  required
                  className="input form-control"
               />
            </div>
            <div className="group">  
                <br/>
               <button type="submit" name="submit" value="submit" >
                  Create Board
               </button>
               </div>
            </form>
         </header>
         <div className="main">
            <ul id="invitedList" className="comments">
                {todoList}
            </ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(Boards);