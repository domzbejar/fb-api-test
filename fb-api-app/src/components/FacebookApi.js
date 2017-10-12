import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import FacebookCallback from './FacebookCallback';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Profile from './Profile';
import Login from './Login';



class FacebookApi extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'NO USER',
            loggedin : false,
            buttonStatus : 'Login to Facebook',
            gender: '---',
            email: '---',
            picture: '---',
            feed:[]
        }
       FacebookCallback.updateData = FacebookCallback.updateData.bind(this)
       FacebookCallback.clearData = FacebookCallback.clearData.bind(this)
    }
    componentDidMount(){
        FacebookCallback.loadSdk()
    }
    render(){
        return(
            <div>
            <Navigation/>
            <MainContent
                name={this.state.name}
                gender={this.state.gender}
                email={this.state.email}
                picture={this.state.picture}
                feed={this.state.feed}
            />
            <Login/>
            </div>
        )
    }
}

export default FacebookApi;