import React from 'react';
import Story from './Story';
import {getHeaders} from './utils';

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        this.state = { stories: null };
        this.fetchStories = this.fetchStories.bind(this);
    }

    componentDidMount() {
        this.fetchStories();
    }

    fetchStories() {
        fetch('/api/stories', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ stories: data });
            })
    }
    
    render () {
        if (!this.state.stories) {
            return (
                <div></div>  
            );
        }
        return (
            this.state.stories.map(story => (<Story story={story} key={'story-' + story.id} />)
            )
        );     
    }
}

export default Stories;