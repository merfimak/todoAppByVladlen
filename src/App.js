import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {Alert} from './components/Alert';
import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import classes from './app.module.css';


function App() {
  return (

    <FirebaseState>
    <AlertState>
      <Router>
        <Navbar />
        <Alert />
          <div className={classes.container}>
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />  
            </Switch>
          </div>
      </Router>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
