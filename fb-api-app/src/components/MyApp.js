import React, {Component} from 'react';
import Api from './Api';
import facebook from './fbSDK';
import FbLogin from './FbLogin';


class MyApp extends Component {
    constructor(props){
        super(props);
        this.state ={
            key : 0,
            data : [],
            name : '',
            imgSrc : '',
            postList : [],
            item:[],
            all:[],
            comment:[],
            res:[]
           
        }
    }
    
    
    componentWillMount(){
        Api.fbget().then((res)=>{ 
            res.json().then((all)=>{
                this.setState({
                   all,
                   postList: all.posts.data,
                });
            })
        });
        
        
    }
    
    componentDidMount(){
        this.setState({
            res : this.state.postList.comments
        })
    }
    
    makelist(){
        for(let x = 0; x < this.state.postList.length; x++ ){
            let singlePost = this.state.postList[x]
            
            if(singlePost.comments){
                document.write(
                    `<li style="margin-bottom: 15px;" ><img src=${singlePost.picture} height=100 width=100 /> <br/>
                    
                    <h3>COMMENT COUNT: ${singlePost.comments.data.length}</h3>
                    : ${x}`
                );
                for(let y=0; y < singlePost.comments.data.length; y++){
                    document.write(
                        `<div>
                        <span>${singlePost.comments.data[y].message}</span>
                        <span><i style="font-size: 10px;">from ${singlePost.comments.data[y].from.name} !</i></span>
                        </div>`
                    );   
                }
                document.write(`</li>`);
                
            }else{
                document.write(
                    `<li style="color:red;margin-bottom: 15px;" >NO COMMENTS : ${x}</li>`
                );
            }
        }
    }
    
    showComments(postObj){
        //console.log(postObj.comments.length);
        if(postObj.comments){
            for(let x = 0; x < postObj.comments.length; x++){
                return "<p>"+postObj.comments[x].message+"</p><br/>";
            }
        }
    }
    
   
   //singlePost.comments.data[0].message  = "magkano shipment davaan"
    //singlePost.comments.data[1].message ="allan Vincent"
    
    render(){
            console.log(this.state.all)
            //console.log(this.state.postList[2])
            
            
            //console.log(com)
            const postlist  = this.state.postList.map((singlePost,key)=>{
                
                //({key}=={key}){
                   // for(let i = 0; i < singlePost.comments.data.length; i++){
                   //     document.write("<li>"+i+"</li>");    
                   // }
                //}
                
                return(
                    <li key={key}>
                        <img src={singlePost.picture} width='50px' height='50px' />
                        <ol>
                            
                        </ol>
                    </li>
                );
            })
            
        return(
            <div>
            <FbLogin />
            <ul>
            
            </ul>
            </div>
        )
    }
}
export default MyApp;