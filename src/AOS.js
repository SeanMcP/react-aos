import React from 'react';
import PropTypes from 'prop-types';

import OPTIONS from './options';
import { createAttributes } from './utils';

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
    const attributes = createAttributes({
        anchor, delay, duration, easing, mirror, offset, once, type
    });
    return (
        <div
            {...attributes}
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
};

export default AOS;