import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Posts component created');
        this.state = {
            posts: null
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        // fetch posts
        console.log('Posts component mounted');
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('/api/posts', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ posts: data });
        })
    }
 render() {
     if(this.state.posts === null){
         return (
             <div id="posts">
                Posts are loading...
            </div>
         )
     }
     else {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => (<Post post={post} key={'post-' + post.id} />))
                }
            </div>
        );
     }
    
    }
}

export default Posts;