import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LocationInfoData } from "../utils/Data";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const LocationInfo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const location_name = queryParams.get('location_name');
    const locationData = LocationInfoData.find(locations => locations.location === location_name);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='location_info_section'>
            {console.log(locationData)}
            {console.log(location_name)}
            {/* ---------------------------Header--------------------------- */}
            <Header />
            {/* -------------------------------first section--------------------- */}
            <Container className="p-5 location_info">
                <Row>
                    <div className='col-md-8 col-12'>
                        <div className='d-flex gap-3'>
                            <h1>Deilvery service in </h1>
                            <h1 style={{ color: "#F6911E", textTransform: "capitalize" }}>{location_name}</h1>
                        </div><br></br>
                        {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                        <h3 style={{color: "#F6911E"}}>{locationData?.heading1}</h3><br></br><br></br>
                        <p><b><b>{locationData?.des1}</b></b></p><br></br><br></br><br></br>
                        <p>{locationData?.des2}</p>

                        <div>
                            <img src='./location-details.png' alt="Location_detail" width="100%"></img>
                        </div>

                        <div className='d-flex gap-3'>
                            <h1>Exploring</h1>
                            <h1 style={{ color: "#F6911E", textTransform: "capitalize" }}>{location_name}</h1>
                        </div><br></br>

                        <h3 style={{color: "#F6911E"}}>{locationData?.subheading2}</h3><br></br>
                        <p>{locationData?.des3}</p><br></br><br></br>


                        <Row>
                            <h4>Interesting facts</h4>
                            <Col className='d-flex flex-column gap-4 mt-3'>
                                <div>
                                    <span><b>Population:  </b></span> <span style={{ fontWeight: "300" }}>{locationData?.population}</span>
                                </div>
                                <div>
                                    <span><b>Popular sites: </b></span>
                                    <span style={{ fontWeight: "300" }}>{locationData?.popularsites} </span>
                                </div>
                            </Col>
                            <Col>
                                <a href={locationData?.map_url}>
                                <img src={`./${location_name}_map.png`} alt="Location_map" width="100%"></img>

                                </a>
                            </Col>
                        </Row>
                    </div>

                    <div className='col-md-3 col-12'>
                        <h4>Head Office</h4><br></br>
                        <div>
                            <span>Location: </span>
                            <span style={{ fontWeight: "300" }}>HANDOVER MOBILITY PRIVATE LIMITED 216-A, IV/F, L/S GAUTAM NAGAR New Delhi Delhi 110049</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span style={{ fontWeight: "300" }}>Info @handover.in</span>
                        </div><br></br><br></br>

                        <div className='my-2'>
                            <h6>FIND US ON FACEBOOK</h6><br></br>
                            <img src='./location-handover.png' alt="Facebook_logo" width="100%" ></img>
                        </div><br></br><br></br><br></br>

                        {/* <div>
                            <h6>RECENT POSTS</h6>
                            <p>In-house vs Third-party Delivery Service – Which is Better?</p>
                            <p>Top Challenges Faced in 4-wheeler Logistics Services</p>
                            <p>Top Tips to Ensure On-time Delivery Services</p>
                            <p>Types of  logistics services in india</p>
                            <p>The Role of delivery partner in your business growth</p>
                        </div> */}

                        <div>
                            <h6>LIFE @ HANDOVER</h6><br></br>
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