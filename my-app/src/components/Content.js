import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItems';
import Loader from './Loader';

class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false
     }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

  render() {
    return (
      <div className={css.Content}>

        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            {this.state.isLoaded ?
            <PostItem savedPosts={savedPosts} /> :
            <Loader />}
        </div>
      </div>
    )
  }
}

export default Content