import React, {Component} from 'react';


class FriendsList extends Component {
    render(){
        console.log(this.props.feed);
    
        return(
            <div>
            <h1>Friends List</h1>
            <ul>
            {this.props.feed.map((item,i)=>{
                return(
                    <li key={i}><img src={item.picture} /></li>
                )
            })}
            </ul>
            </div>
            
        )
    }
}

export default FriendsList
