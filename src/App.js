import React from 'react';
import logo from './logo.svg';
import './App.css';

import withAOS from './component/withAOS';
// import useAOS from './useAOS';
import AOS from './component/AOS';

function App() {
    // useAOS();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <main>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <AOS type="fade">
                    <p>Lorem ipsum...</p>
                </AOS>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
            </main>
        </div>
    );
}

// export default App;
export default withAOS(App);
