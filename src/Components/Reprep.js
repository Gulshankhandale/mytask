import React, { Component } from 'react'
import axios from 'axios';

export default class Reprep extends Component {

    state = {
        Posts:[]
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res =>{
            const Posts = res.data;
            this.setState({Posts})
            console.log(res);
        })
        .catch(err =>{
            console.log(err)
        })
    }
  render() {

   

    
    return (

      <div>
        List
        {
            this.state.Posts
            .map(post =>{
                <p key={post.id}>{post.title}</p>
            })
        }
      </div>
    )
  }
}
