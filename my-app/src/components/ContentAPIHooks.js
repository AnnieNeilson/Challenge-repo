import React, { Component, useState, useEffect } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Loader from './Loader';
import axios from 'axios';
import PostItemAPI from './PostItemsAPI';
import API_KEY from '../secrets';


function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() =>{
      fetchImages();
      }, []);
      
    const fetchImages = async () => {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
      const fetchedPosts = response.data.hits;
      
      setIsLoaded(true);
      setFetchedPosts(fetchedPosts);
      setSavedPosts(fetchedPosts);
    }

    const handleSearch = (e) => {
      const name = e.target.value.toLowerCase();
      const filteredPosts = savedPosts.filter((post)=>{
        return post.name.toLowerCase().includes(name);
      })
      setFetchedPosts(filteredPosts)
    }

    return (
      <div className={css.Content}>

        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchInput'>Search:</label>
              <input type="search" 
              id="searchInput" 
              placeholder="By Author"
              onChange={ (e) => handleSearch(e)}></input>
              <h4>Posts found: {fetchedPosts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {isLoaded ?
            <PostItemAPI savedPosts={fetchedPosts} /> :
            <Loader />}
        </div>
      </div>
    )
  }


export default ContentAPIHooks