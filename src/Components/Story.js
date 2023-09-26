import React from 'react';

class Story extends React.Component {  
    
    render () {
        if (!this.props.story) {
            return (
                <div></div>  
            );
        }
        return (
            <div className='story'>
                <img src={ this.props.story.user.thumb_url } 
                    className="pic" 
                    alt={ 'profile pic for ' + this.props.story.user.username } 
                    />
                <p>{ this.props.story.user.username }</p>
            </div>
        );     
    }
}

export default Story;