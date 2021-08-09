import React, { useState, useEffect } from 'react';
import './footer.scss'
function Footer(props) {
    // const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }   
    }, []);

    return (
        <div className='footer'>

         <div className="footer-left">
              <img  src="./assets/logo-black-icon.svg" height="70%" alt="" />
        </div>
          <div className='footer-right'>
            <div className='footer-icons display-block'>
                <i className="fas fa-envelope"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-behance"></i>
                <i className="fab fa-dribbble"></i>
            </div>
            <div>
                +44 (0) 20 8347 7777 
            </div>
            <div className='display-none'> 
                |
            </div>
            <div>
                hello@fishfinger.me
            </div>
            <div className='footer-icons display-none'>
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