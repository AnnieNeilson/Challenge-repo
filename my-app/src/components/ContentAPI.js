import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Loader from './Loader';
import axios from 'axios';
import PostItemAPI from './PostItemsAPI';
import API_KEY from '../secrets';

class ContentAPI extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: [],
     }
    }
    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages(){
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
      const fetchedPosts = response.data.hits;
      console.log(response)
      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
      })
    }

    handleSearch = (e) => {
      const name = e.target.value.toLowerCase();
      const filteredPosts = this.state.savedPosts.filter((post)=>{
        return post.user.toLowerCase().includes(name);
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
              onChange={ (e) => this.handleSearch(e)}></input>
              <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {this.state.isLoaded ?
            <PostItemAPI savedPosts={this.state.posts} /> :
            <Loader />}
        </div>
      </div>
    )
  }
}

export default ContentAPI