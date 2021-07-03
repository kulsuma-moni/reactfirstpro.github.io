import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
           <section className="footer_area text-center">
                <p>Copyright © <NavLink className="copy_right" to="">orbit 2021</NavLink> . All Rights Reserved</p>
           </section> 
        </>
    )
}

export default Footer;
