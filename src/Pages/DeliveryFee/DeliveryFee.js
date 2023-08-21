import { Container, Button } from 'react-bootstrap';
import Header from "../../Components/Header";
import { Formik, Form, Field } from 'formik';

const DeliveryFee = () => {
    const initialValues = {
        country:"",
        state:"",
        district:"",
        pincode:""
    }

    const DeliveryFeeSecondFormDiv = ({heading,desc, data}) =>{
        return (<div style={{borderRadius:"11px",minHeight:"150px",width:"250px",background:"#ffffff"}}>
            <div style={{background:'#E7F6FF' ,height:"150px"}}></div>
            <div className='content p-2' >
                <h4>Welcome to Handover</h4>
                <p>Please provide your delivery location to see products at nearby</p>
            </div>
        </div>)
    }
    return(
    <section className='delivery-fee-section'>
        <Header page_name="delivery_fee" />
        <Container fluid className='p-0'>
            <div style={{height:"100vh",background:"green"}}>
                dfdf
            </div>
            <div className='delivery-fee-form px-3 py-3' > 
                    <div className='delivery-fee-form-first-section p-3' >
                        <img src="./delivery_fee_logo.png" alt="Delivery Fee Logo"/>
                        <h5>Welcome to HandOver</h5>
                        <span style={{fontSize:"16px",textAlign:"center",color:"#4D606A"}}>Please provide your delivery location to see products at nearby</span>
                        <Button className='handover-button rounded-pill'>Detect Location</Button>
                        <Button className='handover-button-type-2 rounded-pill'>Search Delivery Location</Button>
                    </div>

                    <div>
                    <Formik
                            initialValues={initialValues}
                            // validationSchema={userValidationSchema}
                            // onSubmit={handleSubmit}
                            >
                                {({ errors, setFieldValue }) => (
                                    <Form className="contact-us-form d-flex flex-column gap-3">
                                        <div className="d-flex flex-column">
                                            <select name="option" id="option" className='custom-form-input'>
                                                <option value="">Country</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            {errors.country && <div className="form-error">{errors.country}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <select name="option" id="option" className='custom-form-input'>
                                                <option value="">State</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            {errors.state && <div className="form-error">{errors.state}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <select name="option" id="option" className='custom-form-input'>
                                                <option value="">Distric</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            {errors.district && <div className="form-error">{errors.district}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <Field id="pincode"
                                                type="text" placeholder="Pincode"
                                                name="pincode"
                                                className="custom-form-input" />
                                            {errors.pincode && <div className="form-error">{errors.pincode}</div>}
                                        </div>

                                        <Button className='handover-button rounded-pill'>See Result</Button>
                                        <Button className='handover-button-type-2 rounded-pill'>Cities we Serve</Button>
                                    
                                    </Form>
                                )}
                    </Formik>
                    </div>
            </div>
            <div className='delivery-fee-second-form d-flex gap-3'> 
                <DeliveryFeeSecondFormDiv/>
                <DeliveryFeeSecondFormDiv/>
                <DeliveryFeeSecondFormDiv/>
            </div>
        </Container>
    </section>)
}
export default DeliveryFee;