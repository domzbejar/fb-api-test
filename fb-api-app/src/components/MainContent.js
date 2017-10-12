import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import FriendsList from './FriendsList';
import Navigation from './Navigation';

class MainContent extends Component {
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <Switch>
                <Route exact path="/"
                    render={() =>
                        <Profile
                            name={this.props.name}
                            gender={this.props.gender}
                            email={this.props.email}
                            picture={this.props.picture}
                        />
                    }
                />
                <Route path="/friendslist"
                    render={()=>
                        <FriendsList
                            feed={this.props.feed}
                        />
                } />
            </Switch>
        )
    }
}

export default MainContent
