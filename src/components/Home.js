import React, { Component } from 'react'
import heroImg from '../images/Pair programming.gif';
import Common from './Common';
export default class Home extends Component {
    render() {
        return (
            <>
                <Common name='Grow your business with' bt_name='get started' visit="/service" imgsrc={heroImg}/>
            </>
        )
    }
}
