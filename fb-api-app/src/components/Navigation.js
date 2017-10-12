import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profile from './Profile';
import FriendsList from './FriendsList';


class Navigation extends Component {
    render(){
        return(
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/friendslist">Friends List</Link></li>
                </ul>
        )
    }
}

export default Navigation
