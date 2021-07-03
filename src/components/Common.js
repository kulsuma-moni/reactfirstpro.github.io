import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Common extends Component {
    render() {
        return (
            <>
                <section className="hero_area d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{this.props.name} <strong className="brand_name">CYBERCODE</strong></h1>
                                <p>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                                <div className="pt-3">
                                    <NavLink to={this.props.visit} className="btn get_start_btn">{this.props.bt_name}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2">
                                <div className="hero_img">
                                    <img src={this.props.imgsrc} alt="pair coder"/>
                                </div>
                                
                            </div>
                        </div>
                    </div> 
                </section>
            </>
        )
    }
}
