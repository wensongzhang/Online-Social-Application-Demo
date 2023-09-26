import React from 'react';
import {getHeaders} from './utils';

class NavBar extends React.Component {  

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
            <nav className="main-nav">
                <h1>Photo App</h1>
                <ul>
                    <li>
                        <a href="https://photo-app-wensongzhang.herokuapp.com/api">API Docs</a>
                    </li>
                    <li><span>{ this.state.profile.username }</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul>
            </nav>      
        );
    }
}

export default NavBar;