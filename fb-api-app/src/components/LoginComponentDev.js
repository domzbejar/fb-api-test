import React, {Component} from 'react';
//const FB = window.FB;


class LoginComponentDev extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name : 'User',
        id :'',
        change: true,
        token : '---',
        pogi: 'ako',
    }
  }

  loadFbLoginApi() {
    window.fbAsyncInit = function() {
        const FB = this.FB;  
        FB.init({
          appId            :  '377361202648432',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.10'
        });
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              console.log('Logged in.');
                let pageAccessToken = response.authResponse.accessToken;
                let node = response.authResponse.userID;
                FB.api(node,{fields: 'id,email,name,cover,friends{email,photos}',access_token : pageAccessToken },function(response) {
                    //console.log(response.name);
                    if(response.name){
                        document.getElementById('name').innerHTML +=response.name
                    }
                });
            }else {
                document.getElementById('name').innerHTML +="UNKNOWN" 
            }
          });
      };
   
     
    
     
        console.log("Loading fb api");
          // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    
  }
  
    checkLoginState(response){
        //console.log('hello')
            this.FB.getLoginStatus(function(response){
                var accessToken = response.authResponse.accessToken;
                console.log(accessToken);    
            });
    };
  
    displayContents(response){
        this.setState({
            name : response
        })
    }
  
    componentDidMount() {
        this.loadFbLoginApi() 
    }

    statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
        this.testAPI();
      } else if (response.status === 'not_authorized') {
          console.log("Please log into this app.");
      } else {
          console.log("Please log into this facebook.");
      }
    }
    
    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      this.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
      });
    }

    statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
        this.testAPI.bind(this);
      } else if (response.status === 'not_authorized') {
          console.log("Please log into this app.");
      } else {
          console.log("Please log into this facebook.");
      }
    }

    

    handleFBLogin() {
        //this.FB.login(this.checkLoginState());
        this.FB.login(function(response) {
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             this.FB.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
    
    statusHandler(){
        this.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token 
          // and signed request each expire
          var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
        } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, 
          // but has not authenticated your app
        } else {
          // the user isn't logged in to Facebook.
        }
       });
    }
    

    render() {
        console.log(this.state.token);
        return (
                <div>
                <h1 id="name">Hello {this.state.pogi}</h1>
                <div id="status"></div>
                    <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
                </div>
               );
    }
}

export default LoginComponentDev;