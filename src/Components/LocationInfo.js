import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Location } from "../utils/Data";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const LocationInfo = () => {
    const location28 = Location.find(location => location.id === 28);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const location_name = queryParams.get('location_name');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='location_info_section'>
            {console.log(location28)}
            {console.log(location_name)}
            {/* ---------------------------Header--------------------------- */}
            <Header />
            {/* -------------------------------first section--------------------- */}
            <Container className="p-5 location_info">
                <Row>
                    <div className='col-md-8 col-12'>
                        <div>
                            <h1>Deilvery service in</h1>
                            <h1 style={{ color: "#F6911E" }}>Muzaffarpur</h1>
                        </div>
                        {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                        <p>#1 Choice for All Your Delivery Needs – Food Delivery, Grocery Delivery
                            & More in Muzaffarpur.</p>
                        <p>Looking for people who can deliver goods to the customers on time in
                            Muzaffarpur? Or are searching for delivery jobs in Muzaffarpur? Handover
                            welcomes both of you. We ensure food delivery jobs, grocery delivery jobs and related work in the city.</p>
                        <p>As a shopkeeper, you can now feel free to entertain maximum orders to boost your sales. Handover Champs are there to deliver across Muzaffarpur. For us, the size of the business does not matter. Small or big business, we support all through our delivery services. Join Handover, take its services and share your views on the same.</p>

                        <div>
                            <img src='./location-details.png' alt="Location_detail" width="100%"></img>
                        </div>

                        <div>
                            <h1>Exploring</h1>
                            <h1 style={{ color: "#F6911E" }}>Muzaffarpur</h1>
                        </div>

                        <p>Let’s Check Out Muzaffarpur and Its Specialties</p>
                        <p>Muzaffarpur, a popular city in the state of Bihar, is known for its Litchis.
                            Once it was the part of glorious civilisation of ancient India and has now become the economic hub of modern Bihar. Muzaffarpur has been the 3rd most populous district of Bihar. Moreover, the city has been ruled by different dynasties till independence. But the modern Muzaffarpur city was established by the British empire in 1875 and named after its revenue officer Muzaffar Khan. There are numerous historical places in Muzaffarpur where visitors come every year.</p>

                        <div>
                            <img src='./location-details.png' alt="Location_detail" width="100%"></img>
                        </div>

                        <Row>
                            <h6>Interesting facts</h6>
                            <Col className='d-flex flex-column gap-4 mt-3'>
                                <div>
                                    <span><b>Population:  </b></span> <span style={{ fontWeight: "300" }}>4870000 (approx.)</span>
                                </div>
                                <div>
                                    <span><b>Popular sites: </b></span>
                                    <span style={{ fontWeight: "300" }}>Ashoka Pillar, Litchi gardens,Ramna Devi andir,etc. </span>
                                </div>
                            </Col>
                            <Col>
                                <img src='./location-map.png' alt="Location_map" width="100%"></img>
                            </Col>
                        </Row>
                    </div>

                    <div className='col-md-3 col-12'>
                        <h6>Head Office</h6>
                        <div>
                            <span>Location: </span>
                            <span style={{ fontWeight: "300" }}>HANDOVER MOBILITY PRIVATE LIMITED 216-A, IV/F, L/S GAUTAM NAGAR New Delhi Delhi 110049</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span style={{ fontWeight: "300" }}>Info @handover.in</span>
                        </div>

                        <div className='my-2'>
                            <h6>FIND US ON FACEBOOK</h6>
                            <img src='./location-handover.png' alt="Facebook_logo" width="100%" ></img>
                        </div>

                        <div>
                            <h6>RECENT POSTS</h6>
                            <p>In-house vs Third-party Delivery Service – Which is Better?</p>
                            <p>Top Challenges Faced in 4-wheeler Logistics Services</p>
                            <p>Top Tips to Ensure On-time Delivery Services</p>
                            <p>Types of  logistics services in india</p>
                            <p>The Role of delivery partner in your business growth</p>
                        </div>

                        <div>
                            <h6>LIFE @ HANDOVER</h6>
                            <iframe width="250" title="video1" height="200" src="https://www.youtube.com/embed/AaldFQmUjPA" frameBorder="0" allowFullScreen></iframe>
                        </div>

                    </div>
                </Row>
            </Container>
            <Footer />
        </section >
    );
}

export default LocationInfo;