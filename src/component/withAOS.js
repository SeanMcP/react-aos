import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function withAOS(Component) {
    class HOC extends React.Component {
        componentDidMount() {
            AOS.init();
        }
        render() {
            return <Component />;
        }
    }
    return HOC;
}

export default withAOS;