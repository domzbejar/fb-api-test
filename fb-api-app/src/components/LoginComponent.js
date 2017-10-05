import React, {Component} from 'react';
const FB = window.FB;

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : 'User',
        id :'',
        change: true
    }
  }

  loadFbLoginApi() {

        window.fbAsyncInit = function() {
            var pageAccessToken;
            this.FB.init({
                appId            : '377361202648432',
                autoLogAppEvents : true,
                status           : true,
                xfbml            : true,
                version          : 'v2.9'
            })
            this.FB.getLoginStatus(function(response) {
                //this.statusChangeCallback(response);

                if (response.status === 'connected') {
                    const pageAccessToken = response.authResponse.accessToken;
                    let field = "fields=picture,posts,name";
                    let fbapi ="https://graph.facebook.com";
                    fetch(fbapi+'/me?'+field+'&access_token='+pageAccessToken).then((res)=>{
                        res.json().then((data)=>{
                            console.log(data);
                            let user = `<h1>Hello ${data.name}</h1>
                                        <img src=${data.picture.data.url} />
                                        <p>${ data.posts==null?"no post":data.posts.data[0].message}</p>`

                            document.getElementById('status').innerHTML=user;
                            
                        })
                    })
                 
                
                  } else if (response.status === 'not_authorized') {
                      console.log("Please log into this app.");
                  } else {
                      console.log("Please log into this facebook.");
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

  componentDidMount() {
        this.loadFbLoginApi()
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

    checkLoginState() {
      FB.getLoginStatus(function(response) {
        //this.statusChangeCallback(response);
        console.log(response)
      });
    }

    handleFBLogin() {
        this.FB.login(this.checkLoginState.bind(this));
    }

    render() {
        return (
                <div>
                <div id="status"></div>
                    <div
                        className="fb-login-button"
                        data-max-rows="1"
                        data-size="medium"
                        data-button-type="continue_with"
                        data-width="300px"
                        data-scope="public_profile, email"
                        data-auto-logout-link="true"
                        data-use-continue-as="false"
                    ></div>
                </div>
               );
    }
}

export default LoginComponent;