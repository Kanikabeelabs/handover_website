
import { Container,Button } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import "./Retailer.css";
import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';

const Retailer = () =>{
    const initialValues = {
        option: "",
        user_name: "",
        mobile_number:"",
        email_address: "",
        description: ""
    }
    return( <section className='retailer-section'>
    <Header page_name="about-us" />
    <Container fluid className="p-0" style={{minHeight:"900px"}}>
        <Container fluid  className="d-flex justify-content-center p-0" fulid  
            style={{background:"#0d6efd",height:"500px",position:"relative"}}>
            <Container style={{position:"absolute",top:"100px"}} >
            <h1 className='fw-bold' style={{color:"#ffffff"}}>Get In <span style={{color:'#F6911E'}}>Touch</span></h1>
            <p style={{width:"300px",color:"#ffffff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="handover-shadow-div p-3 d-flex  flex-wrap">
                <div className='col-md-6 col-12 d-flex  align-items-end'>
                    <img src="./contact_us.png" alt="ContactUs" width="100%" />
                </div>
                <div className='col-md-6 col-12 d-flex flex-column p-3'>
                            <h5 className="mb-4">GET IN TOUCH</h5>
                            <Formik
                                initialValues={initialValues}
                            // validationSchema={userValidationSchema}
                            // onSubmit={handleSubmit}
                            >
                                {({ errors, setFieldValue }) => (
                                    <Form className=" d-flex flex-column gap-3">
                                        <div className="d-flex gap-2 justify-content-between align-items-center ">
                                            <div className="d-flex flex-column col-md-6 col-12">
                                                <label for="option" className='mb-2'>Choose a option</label>
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
                                        
                                        <div className="d-flex gap-2 justify-content-between align-items-center ">
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
                                                type="email" placeholder="Enter Enter"
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
                                            <Button variant="secondary">Cancel</Button>
                                            <Button variant="primary">Submit</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
            </div>
            </Container>
        
    </Container>
    </Container>
    
    <Footer />
  </section>)
}

export default Retailer;