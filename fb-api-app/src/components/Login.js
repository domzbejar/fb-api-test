import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Profile from './Profile';
import MainContent from './MainContent';
import Navigation from './Navigation';
import FacebookApi from './FacebookApi';
import FacebookCallback from './FacebookCallback';

class Login extends Component {
    render(){
        return(
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
        )
    }
}

export default Login
