import React, {Components} from 'react';
import graph from 'fb-react-sdk';
//const url = "http://rest.learncode.academy/api/alien/friends"

const accesToken = "EAAFXNUBvlXABANsPrfvaVhnregUZAmitz9WQ27QYj0C3XPjhnoDVky82A4BoyytbZBIO08jhAOwprn9NYdILFPpRQFZC1q8PTlC20KM3D1jDwyAbEaWMRxwR14KZAdSknCyJZB67xtZCjhqR2dLMjpZCDdMSZBX79zzXnoQrEI67f4p8M1FgtPdrM3sidroaryLQysLHyZAmwzgZDZD";
const fields ="fields=gender,hometown,family";
const fbapi ="https://graph.facebook.com";
const apiversion = "v2.0";
const userid="636670303104398";
const url = fbapi+'/'+apiversion+'/'+userid+'?'+fields+'&access_token='+accesToken

const Api = {
    
    
    get(){
        let myHeaders = new Headers();
        //myHeaders.append('Content-Type', 'application/json');
        //myHeaders.append('Accept', 'application/json');
        
        let myInit = {
            method : "GET",
            headers : myHeaders
        }
        return fetch("https://graph.facebook.com/v2.10/482787365219932?fields=picture{url},name,app_name,category&access_token="+accesToken)
    },
    
    fbget(){
        let node = "636670303104398";
        let field = "fields=picture,posts{picture,permalink_url,description,comments,name},name";
        let token = "EAACEdEose0cBABsjlcRCsKVYPZAhUAsXGuxHY7qZAGoR2XmyJCLNGpWVVRxhq4sapNhpTx4hZAEl0qM1EMEbdRgSL4eWNRhaim4nhMkb3hB3M6BQ2eHlSQVtPJMrC8QPValzx6pR6Y3K4VNJw6YUNwjGWwmS3DWIVPziHhucFRgMv0PU2i3ulWQqkAJ9JgZD";
        return fetch(fbapi+'/'+node+'?'+field+'&access_token='+token);
    }
    
}

export default Api;
