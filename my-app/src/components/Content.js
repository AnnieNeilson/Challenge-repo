import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItems';
import Loader from './Loader';

class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: []
     }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleSearch = (event) => {
      const inputText = event.target.value.toLowerCase()
        console.log(inputText)
      const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(inputText)
        })
        this.setState({
            posts: filteredPosts
        })
    }

  render() {
    return (
      <div className={css.Content}>

        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchInput'>Search:</label>
              <input type="search" 
              id="searchInput" 
              placeholder="By Author"
              onChange={ (event) => this.handleSearch(event)}></input>
              <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {this.state.isLoaded ?
            <PostItem savedPosts={this.state.posts} /> :
            <Loader />}
        </div>
      </div>
    )
  }
}

export default Content