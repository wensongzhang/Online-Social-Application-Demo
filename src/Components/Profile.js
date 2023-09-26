import React from 'react';
import {getHeaders} from './utils';

class Profile extends React.Component {  

    constructor(props) {
        super(props);
        this.state = { profile: null };
        this.fetchProfile = this.fetchProfile.bind(this);
    }

    componentDidMount() {
        this.fetchProfile();
    }

    fetchProfile() {
        fetch('/api/profile', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ profile: data });
            })
    }

    render () {
        if (!this.state.profile) {
            return (
                <div></div>  
            );
        }
        return (
            
            <div>
                <img className="pic"
                    src={ this.state.profile.thumb_url } 
                    alt={ 'Profile pic for ' + this.state.profile.username } />
                <h1>{ this.state.profile.username }</h1>    
            </div>  
        );
    }
}

export default Profile;