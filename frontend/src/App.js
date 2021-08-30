import logo from './logo.svg';
import './App.css';
import {Container, Typography} from "@material-ui/core";
import Order from "./components/order";
import Header from "./components/header/header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";

class About extends React.Component{
    render() {
        return (
            <div>
                <h1>О нас</h1>
            </div>
        )
    }
}

function App() {
  return (
      <Router>
        <Header/>
          <Switch>
              <Route exact path='/' component={Order}/>
              <Route path='/about' component={About}/>
              <Route path='/login' component={SignIn}/>
              <Route path='/register' component={SignUp}/>
          </Switch>

          {/*<Typography variant="h2" align="center" gutterBottom>*/}
          {/*  Restaurant App*/}
          {/*</Typography>*/}
          {/*  <Order/>*/}

      </Router>
  );
}

export default App;
