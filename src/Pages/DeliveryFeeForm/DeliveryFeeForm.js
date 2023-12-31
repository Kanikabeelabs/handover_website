import { Container ,Button } from "react-bootstrap";
import Header from "../../Components/Header";
import { Formik, Form, Field } from 'formik';

const DeliveryFeeForm = () => {
    const initialValues={
        pickup_location:"",
        dropoff_location:"",
        product_category:"",
        product_category_2:"",
        product_category_3:"",
        item_weight:"",
        description:""
    }
    return (<section className="handover-delivery-fee-form">
        <Header page_name="delivery_fee_form"/>
        <Container fluid style={{ backgroundImage: `url("./background_map.png")`,
                 backgroundSize: 'cover'}}>
            <Container style={{maxWidth:"500px",margin:"0px auto" ,padding:"50px 0px"}}>
            <div className="FormDiv">
                <div className="pickup-outer-div">
                    <div className="d-flex gap-2 align-items-center" style={{padding:"20px"}}>
                        <img src="./back_arrow.png" alt=" Arrow" width="20px" height="20px"></img>
                        <h4 className="m-0">Delivery Fee</h4>
                        {/* <text className="fee m-2">Delivery Fee</text> */}
                    </div>
                    <hr className="m-0"></hr>
                    <div className="p-5">
                    <Formik 
                            initialValues={initialValues}
                            // validationSchema={userValidationSchema}
                            // onSubmit={handleSubmit}
                            >
                                {({ errors, setFieldValue }) => (
                                    <Form className="contact-us-form d-flex flex-column gap-3">
                                        <div className="d-flex flex-column">
                                            <Field id="pickup_location"
                                                type="text" placeholder="Pick up Location"
                                                name="pickup_location"
                                                className="custom-form-input" />
                                            {errors.pickup_location && <div className="form-error">{errors.pickup_location}</div>}
                                        </div>

                                        <div className="d-flex flex-column">
                                            <Field id="dropoff_location"
                                                type="text" placeholder="Drop off Location"
                                                name="dropoff_location"
                                                className="custom-form-input" />
                                            {errors.dropoff_location && <div className="form-error">{errors.dropoff_location}</div>}
                                        </div>
                                        
                                        <div className="d-flex gap-2  ">
                                            <select name="option" id="option" className='custom-form-input w-49' onChange={(event)=>setFieldValue("product_category",event.target.value)}>
                                                <option value="volvo">Product List </option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            <select name="option" id="option" className='custom-form-input w-49' onChange={(event)=>setFieldValue("product_category_2",event.target.value)}>
                                                <option value="volvo">Product Category </option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>

                                        </div>

                                        <div className="d-flex gap-2  ">
                                            <select name="option" id="option" className='custom-form-input w-49' onChange={(event)=>setFieldValue("product_category_3",event.target.value)}>
                                                <option value="volvo">Item Weight </option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                
                                        </div>
                                     
                                        <div className="d-flex flex-column">
                                            <Field id="description"
                                                as="textarea" placeholder="Type your message"
                                                name="description"
                                                rows={2}
                                                className="custom-form-input" />
                                            {errors.description && <div className="form-error">{errors.description}</div>}
                                        </div>

                                        <div className='d-flex justify-content-center gap-4'>
                                            <Button className="cancel w-50  p-3" style={{background:"#E3E1E1",border:"none",color:"#000000"}}>Cancel</Button>
                                            <Button className="submit w-50  p-3" style={{background:"#F48120",border:"none"}}>Submit</Button>
                                        </div>
                                    </Form>
                                )}
                    </Formik>
                    </div>

                </div>

                <div className="pickup-outer-div p-4 mt-4 d-flex align-items-center justify-content-center">
                <iframe width="375" title="video1" 
                height="249" src="https://www.youtube.com/embed/AaldFQmUjPA" frameBorder="0" allowFullScreen></iframe>

                </div>
            </div>
            </Container>
           
        </Container>
    </section>
     
    
    )
};

export default DeliveryFeeForm;