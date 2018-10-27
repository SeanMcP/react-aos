import React from 'react';
import AOS from 'aos';

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