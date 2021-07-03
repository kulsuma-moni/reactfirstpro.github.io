import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="card">
                <div className="img_conteiner">
                    <img src={props.imgsrc} className="card-img-top" alt="service"/>
                </div>
                
                <div class="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="#" className="btn service_btn">Read more</NavLink>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Card;
