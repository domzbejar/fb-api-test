import React, {Component} from 'react';
import FacebookCallback from './FacebookCallback';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        FacebookCallback.loadSdk()
    }
    render(){
        return(
            <div>
            <h1>Profile </h1>
            <h1>Hello {this.props.name}</h1>
            <img src={this.props.picture}/>
            <ul>
                <li>GENDER: {this.props.gender}</li>
                <li>EMAIL: {this.props.email}</li>
            </ul>
            </div>
        )
    }
}

export default Profile
