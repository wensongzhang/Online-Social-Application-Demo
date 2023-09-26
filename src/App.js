import React from 'react';
import Posts from './Components/Posts.js';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import Stories from './Components/Stories';
import Suggestions from './Components/Suggestions';

class App extends React.Component {  

    render () {
        return (
            <div>

            <nav className="main-nav">
                <NavBar />
            </nav>

            <aside>
                <header>
                    <Profile />
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        <Suggestions />
                        {/* Suggestions */}
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    <Stories />
                    {/* Stories */}
                </header>
                {/* <Posts /> */}
            </main>

            </div>
        );
    }
}

export default App;