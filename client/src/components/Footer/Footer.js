import React, { useState, useEffect } from 'react';
import './footer.css'
function Footer(props) {
    // const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }   
    }, []);

    return (
        <div className='footer'>

          <img src="./assets/logo-black-icon.svg" height="70%" alt="" />
          <div className='footer-left'>
            <div>
                +44 (0) 20 8347 7777 
            </div>
            <div> 
                |
            </div>
            <div>
                hello@fishfinger.me
            </div>
            <div className='footer-icons'>
                <i className="fas fa-envelope"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-behance"></i>
                <i className="fab fa-dribbble"></i>
            </div>
          </div>

        </div>
    )
}

export default Footer;