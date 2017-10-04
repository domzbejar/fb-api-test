import React, {Component} from 'react';
//import graph from 'fb-react-sdk';
//import {AppRegistry, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
//import {ShareDialog,LoginManager,LoginButton, Login, } from 'react-native-fbsdk';
//import com.facebook.FacebookSdk;
//import com.facebook.CallbackManager;
//import com.facebook.appevents.AppEventsLogger;

const FbLogin = {
    
    button(){
       return(
        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
       )
    },
    
}

export default FbLogin