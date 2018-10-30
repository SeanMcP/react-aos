import React from 'react';

import withAOS from './component/withAOS';
// import useAOS from './useAOS';
import AOS from './component/AOS';

function App() {
    // useAOS();
    return (
        <div className="App">
            <header>
                <h1>Hello from <code>react-aos</code>!</h1>
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
