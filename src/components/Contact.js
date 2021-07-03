import React,{useState} from 'react';
import Innerbanner from './Innerbanner';
import contactImg from '../images/2480553.jpg'
const Contact = () => {
        const [data, setData] = useState({
            fullname:"",
            phone:"",
            email:"",
            massage:""
        });
        const InputEvent =(event)=>{
            const {name,value}=event.target;
            setData((preval)=>{
                return{
                    ...preval,
                    [name]:value,
                }
            });
        };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(
            `User name is ${data.fullname}. User phone number is ${data.phone}. User email is ${data.email}. User massage is ${data.massage}`
        )
    };
    return (
            <>
                <Innerbanner name="Contact us" page="contact" />
                <section className="contact_area section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="hero_img">
                                    <img src={contactImg} alt="contact" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact_form">
                                    <form onSubmit={formSubmit}>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Full name</label>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput1"
                                            name="fullname" 
                                            value={data.fullname}
                                            onChange={InputEvent}
                                            placeholder="Enter your name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput2" className="form-label">Phone</label>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput2"
                                            name="phone" 
                                            value={data.phone}
                                            onChange={InputEvent} 
                                            placeholder="Enter your phone number"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput3" className="form-label">Email address</label>
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            id="exampleFormControlInput3" 
                                            name="email" 
                                            value={data.email}
                                            onChange={InputEvent}
                                            placeholder="name@example.com"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                                            <textarea 
                                            className="form-control" 
                                            name="massage" 
                                            value={data.massage}
                                            onChange={InputEvent}
                                            id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="submit_btn">
                                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    );
};

export default Contact;
