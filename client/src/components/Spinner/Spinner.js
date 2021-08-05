import React, { useState, useEffect } from 'react';
import './Spinner.scss'
function Spinner(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div className='loader'><img alt='loader' src='./assets/logo-black-icon.svg'/></div>
        </>
    )
}

export default Spinner;