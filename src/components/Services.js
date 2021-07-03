import React from 'react';
import Innerbanner from './Innerbanner';
import Card from './Card';
import Sdata from './Sdata';
export default function Services() {
    return (
        <>
            <Innerbanner name="Our service" page="service"/>
            <section className="service_area section_padding">
                <div className="container">
                    <div className="row gy-5">
                        {
                            Sdata.map((val,ind)=>{
                                return <Card key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />
                            })
                        }
                    </div>
                </div>

            </section>

        </>
    )
}
