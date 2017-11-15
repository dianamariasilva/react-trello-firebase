import React from 'react';
import './App.css';
import ReactDOM from  'react-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Boards from './Boards';
// import CheckoutView from './TesBoard'
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <Provider store={store} >
    <HashRouter>
      <Switch>
        <Route  exact path = "/" component={SignUp}/>
        <Route  path = "/signup" component={SignUp}/>
        <Route  path = "/signin" component={SignIn}/>
        <Route  path = "/boards" component={Boards}/>
        {/* <Route  path = "/carousel" component={CarouselView}/>
        <Route  path = "/details" component={CheckoutView}/> */}
      </Switch>
    </HashRouter>
  </Provider>
)

export default App;
