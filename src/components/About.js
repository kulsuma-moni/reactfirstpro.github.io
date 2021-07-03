import React from 'react';
import aboutImg from '../images/About us page.gif';
import Common from './Common';
import Innerbanner from './Innerbanner';
export default function About() {
    return (
        <>
            <Innerbanner name="About us" page="about" />
            <Common name='Welcome to about page'
             bt_name='Contact us' 
             visit="/contact" 
             imgsrc={aboutImg} />
        </>
    )
}
