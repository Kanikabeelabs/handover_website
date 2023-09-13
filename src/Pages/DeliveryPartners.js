
import { Container, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HandOverStatistics from "../Components/HandOverStatistics";
import LocationItem from "../Components/LocationItem";
import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';
import { DeliveryPartnersData } from "../utils/Data";
import { contactUsSchemaValidation } from "../utils/Validations";
import { postRequest } from '../utils/ApiRequest';
const DeliveryPartners = () => {
    const initialValues = {
        option: "",
        user_name: "",
        email_address: "",
        mobile: "",
        description: ""
    }

    const handleSubmit = async (values, { resetForm }) => {
        let formData = new FormData();
        formData = {
            name: values.user_name,
            email: values.email_address,
            description: values.description,
            mobile: values.mobile,
            option: values.option

        }
        try {
            let response = await postRequest("/api/v1/contactus", formData);
            if (response.status === 201) {
                alert("You have successfully submitted the form");
                resetForm();
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleCancel = (resetForm) => {
        resetForm();
    }
    const DeliveryPartnerItems = ({ img_url, heading, description, link }) => {
        return (<div
            className="handover-shadow-div p-3 d-flex flex-row gap-2 
        align-items-center 
        justify-content-center"
            style={{ width: "340px" }}>
            <div><img src={img_url} alt={heading} /></div>
            <div>
                <p className="fw-bold m-0">{heading}</p>
                <p className="m-0 p-0" style={{ textAlign: "justify", fontWeight: "200" }}>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>)
    }
    return (<section className='delivery-partner-section'>
        <Container fluid className="p-0">
            <Header page_name="delivery_partner" />
                {/* First Section */}
                <Container fluid className="p-0" style={{minHeight:"800px"}}>
                    <Container fluid  className="d-flex justify-content-center p-0"   
                        style={{background:"#0d6efd",minHeight:"500px",position:"relative"}}>
                        <div className="contact-us-form-div" style={{position:"absolute",top:"100px"}} >
                        <h1 className='fw-bold' style={{color:"#ffffff"}}>Every Mile Earns <span style={{color:'#F6911E'}}>You!</span></h1>
                        <p style={{width:"300px",color:"#ffffff"}}>Maximise your earnings by choosing multiple locations for order pick-ups. It will help you earn more.</p>
                        <div className="handover-shadow-div p-3 d-flex  flex-wrap">
                            <div className='col-md-5 col-12 d-flex '>
                                <img src="./contact_us.png" alt="ContactUs" width="100%" />
                            </div>
                            <div className='col-md-7 col-12 d-flex flex-column p-3'>
                                        <h5 className="mb-4">GET IN TOUCH</h5>
                                        <Formik
                                          initialValues={initialValues}
                                          validationSchema={contactUsSchemaValidation}
                                          onSubmit={handleSubmit}
                                      >
                                          {({ errors,values, setFieldValue,resetForm }) => (
                                                <Form className=" d-flex flex-column  gap-3">
                                                    <div className="row">
                                                    <div className="d-flex flex-column col-md-6 col-12">
                                                        <label htmlFor="option">Choose a option</label>
                                                        <select name="option" 
                                                            id="option" className='custom-form-input mt-2' 
                                                            onChange={(event) => setFieldValue("option", event.target.value)}
                                                            value={values.option}>
                                                            <option value="">Choose an Option</option>
                                                            <option value="delivery_partner">Delivery Partner</option>
                                                            <option value="retailer">Retailer</option>
                                                            <option value="customer">Customer</option>
                                                            <option value="other">Other</option>
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
                                                        <label className="form-label" htmlFor="mobile"> Mobile Number</label>
                                                        <Field id="mobile"
                                                            type="text" placeholder="Enter Mobile Number"
                                                            name="mobile"
                                                            className="custom-form-input" />
                                                        {errors.mobile && <div className="form-error">{errors.mobile}</div>}
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
                                                        <Button variant="secondary" className='cancel-button' type="button" onClick={()=>handleCancel(resetForm)}>Cancel</Button>
                                                        <Button variant="primary" type="submit" style={{width:"50%"}}>Submit</Button>
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
                    <h3 className='mt-4 mb-4 fw-bold'>Careers @Handover</h3>
                    <p>Besides offering a promising ‘Delivery Partner’ job, Handover, as a brand, has many more opportunities up for grabs. These could be in operations, finance, technology, etc. So, if you know how to deliver multiple tasks and are a problem-solver, we would like to talk to you! Send your resume now!</p>
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