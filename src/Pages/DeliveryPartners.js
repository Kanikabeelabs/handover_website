
import { Container,Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HandOverStatistics from "../Components/HandOverStatistics";
import LocationItem from "../Components/LocationItem";
import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';
import {DeliveryPartnersData} from "../utils/Data";
const DeliveryPartners = () =>{
    const initialValues = {
        option: "",
        user_name: "",
        mobile_number:"",
        email_address: "",
        description: ""
    }
    const DeliveryPartnerItems = ({img_url,heading ,description,link}) =>{
      return( <div
        className="handover-shadow-div p-3 d-flex flex-row gap-2 
        align-items-center 
        justify-content-center"
        style={{ width: "340px"}}>
        <div><img src={img_url} alt={heading} /></div>
        <div>
        <p className="fw-bold m-0">{heading}</p>
        <p className="m-0 p-0" style={{ textAlign: "justify", fontWeight: "200" }}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    </div>)
    }
    return( <section className='delivery-partner-section'>
     <Container fluid className="p-0">
            <Header page_name="delivery_partner" />
                {/* First Section */}
                <Container fluid className="p-0" style={{minHeight:"780px"}}>
                    <Container fluid  className="d-flex justify-content-center p-0"   
                        style={{background:"#0d6efd",minHeight:"500px",position:"relative"}}>
                        <div className="contact-us-form-div" style={{position:"absolute",top:"100px"}} >
                        <h1 className='fw-bold' style={{color:"#ffffff"}}>Get In <span style={{color:'#F6911E'}}>Touch</span></h1>
                        <p style={{width:"300px",color:"#ffffff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="handover-shadow-div p-3 d-flex  flex-wrap">
                            <div className='col-md-5 col-12 d-flex '>
                                <img src="./contact_us.png" alt="ContactUs" width="100%" />
                            </div>
                            <div className='col-md-7 col-12 d-flex flex-column p-3'>
                                        <h5 className="mb-4">GET IN TOUCH</h5>
                                        <Formik
                                            initialValues={initialValues}
                                        // validationSchema={userValidationSchema}
                                        // onSubmit={handleSubmit}
                                        >
                                            {({ errors, setFieldValue }) => (
                                                <Form className=" d-flex flex-column  gap-3">
                                                    <div className="row">
                                                        <div className="d-flex flex-column col-md-6 col-12">
                                                            <label htmlFor="option" className='mb-2'>Choose a option</label>
                                                            <select name="option" id="option" className='custom-form-input' onChange={(event) => setFieldValue("option", event.target.value)}>
                                                                <option value="volvo">Volvo</option>
                                                                <option value="saab">Saab</option>
                                                                <option value="mercedes">Mercedes</option>
                                                                <option value="audi">Audi</option>
                                                            </select>
                                                            {errors.option && <div className="form-error">{errors.option}</div>}

                                                        </div>

                                                        <div className="d-flex flex-column col-md-6 col-12">
                                                            <label className="form-label" htmlFor="user_name"> User Name</label>
                                                            <Field id="user_name"
                                                                type="text" placeholder="Enter User Name"
                                                                name="user_name"
                                                                className="custom-form-input" />
                                                            {errors.user_name && <div className="form-error">{errors.user_name}</div>}
                                                        </div>
                                                    </div> 
                                                    
                                                    <div className="row">
                                                        <div className="d-flex flex-column col-md-6 col-12">
                                                        <label className="form-label" htmlFor="mobile_number"> Mobile Number</label>
                                                        <Field id="mobile_number"
                                                            type="text" placeholder="Enter Mobile Number"
                                                            name="mobile_number"
                                                            className="custom-form-input" />
                                                        {errors.mobile_number && <div className="form-error">{errors.mobile_number}</div>}
                                                        </div>

                                                        <div className="d-flex flex-column col-md-6 col-12">
                                                        <label className="form-label" htmlFor="email_address"> Email</label>
                                                        <Field id="email_address"
                                                            type="email" placeholder="Enter Email Address"
                                                            name="email_address"
                                                            className="custom-form-input" />
                                                        {errors.email_address && <div className="form-error">{errors.email_address}</div>}
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-column">
                                                        <label className="form-label" htmlFor="description"> Description</label>
                                                        <Field id="description"
                                                            as="textarea" placeholder="Type your message"
                                                            name="description"
                                                            rows={3}
                                                            className="custom-form-input" />
                                                        {errors.description && <div className="form-error">{errors.description}</div>}
                                                    </div>

                                                    <div className='d-flex justify-content-center gap-4'>
                                                        <Button variant="secondary" className='cancel-button'>Cancel</Button>
                                                        <Button variant="primary" style={{width:"50%"}}>Submit</Button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                            </div>
                        </div>
                        </div>
                    </Container>
                    
                </Container>
                 {/* Second Section */}
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h1>Handover में Delivery Partner बनने के फायदे</h1>
                    <div className='row' style={{width:"100%"}}>
                        <div className='d-flex flex-column gap-3 align-items-center col-md-4 col-12 '>
                            {DeliveryPartnersData.slice(0,3).map((item,index)=>{
                                return(<DeliveryPartnerItems 
                                    key={item.id}
                                    img_url={item.img_url}
                                    heading={item.heading}
                                    description={item.description}
                                    link={item.link_url} />)
                            })}
                        </div>
                        <div className='col-md-4 col-12'>
                            <div style={{width:"100%"}}>
                                <img src="./smartphone.png" alt="SmartPhone" width="100%"/></div>
                        </div>
                        <div className='d-flex flex-column gap-3 align-items-center col-md-4 col-12 '>
                            {DeliveryPartnersData.slice(3,7).map((item,index)=>{
                                return(<DeliveryPartnerItems 
                                    key={item.id}
                                    img_url={item.img_url}
                                    heading={item.heading}
                                    description={item.description}
                                    link={item.link_url} />)
                            })}
                        </div>
                    </div>
                </div>
                {/* Statistics Section */}
                <HandOverStatistics/>
                {/* Careers */}
                <Container  className="p-0 d-flex flex-column gap-2 align-items-center " style={{position:"relative"}}>
                    <h3 className='mt-4 mb-4 fw-bold'>Our Careers</h3>
                    <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality.</p>
                     <div className='mt-2'>
                        <div style={{width:"100%"}}>
                            <img src="./career_banner.png" alt="Career Banner" style={{width:"100%"}}/>
                        </div>
                     </div>
                     <div className="d-none d-md-block" style={{position:"absolute",bottom:"110px",left:"80px"}}> 
                        <img src="./handover_logo.png" alt="HandOver Logo" width="200px"/>
                     </div>
                     <div className='align-self-start text-start' style={{marginLeft:"100px"}}> 
                        <p style={{fontSize:"27px",color:"#4F4F4F"}}> Find Opportunties for you</p>
                        <Button variant="primary">Explore Opportunties</Button>
                    </div>
                    <div className='handover-shadow-div contact-us-form-div p-2 d-none d-md-block' 
                    style={{width:"350px",position:"absolute",bottom:"30px",right:"100px"}}>
                        <div className='d-flex flex-row gap-2'>
                            <img src="./retailer_profile.png"alt="HandOver Profile" width="80px" height="80px"/>
                            <div>
                                <h5>WHAT OUR PEOPLE SAY</h5>
                                <p>Lorem ipsum dolor sit amet .
                                  The graphic and typographic operators know
                                   this well, in reality.</p>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* Location Section */}
                <Container fluid className="p-0 d-flex flex-column align-items-center justify-content-center">
                    <h3 className='mt-4 mb-4 fw-bold'>Our Location</h3>
                    <div className='d-flex flex-row flex-wrap gap-1 align-items-center justify-content-center pb-2'>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (<LocationItem key={index} />)
                    })}
                    </div>
                    
                </Container>
            <Footer />
     </Container>
  </section>)
}

export default DeliveryPartners;