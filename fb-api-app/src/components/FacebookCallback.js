import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import Profile from './Profile';


const FacebookCallback = {
    
    

    loadSdk(){
         window.fbAsyncInit = function() {
            const FB = window.FB
            FB.init({
              appId            : '377361202648432',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v2.10'
            });
            FB.getLoginStatus(function(response){
                if(response.status==='connected'){
                    console.log('INIT: logged in')
                }else{
                    console.log('INIT: logged out')
                }
            });
            FB.Event.subscribe('auth.statusChange', function(response) {
                if(response.status==='connected'){
                    console.log('INIT: logged in')
                    FacebookCallback.getApi(response);
                }else{
                    console.log('INIT: logged out');
                    FacebookCallback.clearData()
                }
            });
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    },                      
    
    
    login(){
        window.FB.login(function(response) {
            console.log('logged in');
            console.log(response);
            FacebookCallback.getApi(response);
        }, {scope: 'public_profile,email'});
    },


    
    updateData(response){    
        this.setState({
            name: response.name,
            gender: response.gender,
            picture: response.picture.data.url,
            email: response.email,
            feed: response.feed.data
        })      
    },
    
    clearData(){    
        this.setState({
            name: '',
            gender: '',
            picture: '',
            email: '',
            feed:[]
        })      
    },
    
    
    getApi(response){
            let node = response.authResponse.userID;
            let token = response.authResponse.accessToken
            let queryFields = 'id,name,email,gender,picture,feed{picture}';
            window.FB.api(node,'get',{fields : queryFields ,access_token: token},function(response){
                console.log(response);
                //let image = '<img src='+response.feed.data[2].picture+' />';
                //document.getElementById('status').innerHTML=image;
                FacebookCallback.updateData(response);
            })
    },

    
    

    
}
export default FacebookCallback;