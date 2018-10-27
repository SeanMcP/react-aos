import React, { useEffect } from 'react';
import AOS from 'aos';

function useAOS() {
    useEffect(() => {
        AOS.init()
    })
}

export default useAOS