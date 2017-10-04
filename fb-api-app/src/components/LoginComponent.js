import React from 'react';
const FB = window.FB

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  

  loadFbLoginApi() {
    
        window.fbAsyncInit = function() {
            this.FB.init({
                appId            : '377361202648432',
                autoLogAppEvents : true,
                status           : true,
                xfbml            : true,
                version          : 'v2.9'
            });
            this.FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    console.log(response.status);
                  } else if (response.status === 'not_authorized') {
                      console.log("Please log into this app.");
                  } else {
                      console.log("Please log into this facebook.");
                  }
            });
            this.FB.api('/me', function(response) {
                console.log(JSON.stringify(response));
                console.log('Successful login for: ' + response.name);
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

  componentDidMount() {
        this.loadFbLoginApi()

    }

    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
      });
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

    checkLoginState() {
      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }

    handleFBLogin() {
        FB.login(this.checkLoginState());
        }

    render() {
        return (
                <div>
                    <h1>WELCOME</h1>
                    <p id="status"></p>
                    <div id="fb-root"></div>
                    <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
                </div>
               );
    }
}

export default LoginComponent;