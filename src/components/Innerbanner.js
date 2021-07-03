import React from 'react';
import web from '../images/inner_banner.png';
import {NavLink} from 'react-router-dom';
function Innerbanner(props) {
    return (
        <>
        <section className="inner_banner section_padding text-center mb-5" style={{backgroundImage: `url(${web})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner_content">
                        <h2>{props.name}</h2>
                        <nav>
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item">
                                    <NavLink className="breadcrumb_link" to="/">Home</NavLink>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{props.page}</li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Innerbanner;
