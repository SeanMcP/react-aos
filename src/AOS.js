import React from 'react';
import PropTypes from 'prop-types';

import OPTIONS from './options';

function AOS({
    anchor,
    children,
    delay,
    duration,
    easing,
    mirror,
    offset,
    once,
    type,
    ...rest
}) {
    return (
        <div
            data-aos={type}
            data-aos-anchor-placement={anchor}
            data-aos-delay={`${delay}`}
            data-aos-duration={`${duration}`}
            data-aos-easing={easing}
            data-aos-mirror={mirror}
            data-aos-offset={`${offset}`}
            data-aos-once={once}
            {...rest}
        >
            {children}
        </div>
    );
}

AOS.propTypes = {
    anchor: PropTypes.oneOf(OPTIONS.anchor),
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.oneOf(OPTIONS.easing),
    mirror: PropTypes.bool,
    offset: PropTypes.number,
    once: PropTypes.bool,
    type: PropTypes.oneOf(OPTIONS.type).isRequired
}

export default AOS;