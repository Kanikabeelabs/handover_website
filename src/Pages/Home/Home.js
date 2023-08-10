import { Container, Button } from 'react-bootstrap';
import CategoryItem from "../Home/Component/CategoryItem";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { HomePageSection2, keyFeatures, whyHandover } from "../../utils/Data";
import { Formik, Form, Field } from 'formik';

const Home = () => {
    const initialValues ={
        option:"",
        user_name:"",
        email_address:"",
        description:""
    }
    return (
        <section className='handover-homepage'>
            <Container fluid className="p-0">
                <Container style={{ maxWidth: "1800px", position: "relative" }}>
                    {/*  ------------------------header ---------------------------------------*/}
                    <Header page_name="home"/>

                    {/*  ------------------------First Section ---------------------------------------*/}
                    <div style={{ marginTop: "100px" }} >
                        <p style={{ color: "#F6911E" }} className="handover-main-heading">All Delivery</p>
                        <p className="handover-main-heading">Solutions In One</p>
                        <p className="handover-main-heading">Place You</p>
                        <p style={{
                            color: "#3C3C3C",
                            width: "400px",
                            fontWeight: "300"
                        }}> Lorem ipsum is simply dummpy text of the printing and typesetting industry</p>
                        <div className='search-box-section d-flex align-items-center'>
                            <div className='search-box p-2' >
                                <img src="./location.png" />
                                <input style={{ border: "none", outline: "none", marginLeft: "5px" }}
                                    type="text" placeholder="Location" />
                            </div>
                            <div className='p-2' style={{ background: "#F6911E", color: "#ffffff" }}>
                                Search
                            </div>
                        </div>

                        <div className='video-section d-flex gap-5 mt-4' style={{ flexWrap: 'wrap' }}>
                            <iframe width="320" height="240" src="https://www.youtube.com/embed/XWZwQM_Tssw" frameborder="0" allowfullscreen></iframe>
                            <iframe width="320" height="240" src="https://www.youtube.com/embed/XWZwQM_Tssw" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    {/*  ------------------------Second Section ---------------------------------------*/}
                    <div className='second-section'>
                        <div className='d-flex flex-column align-items-center justify-content-center homeover-section' >
                            <p className='second-section-heading'>So Many Order Delivery Needs, One Solution Handover</p>
                            <Container className='d-flex gap-3 justify-content-around mt-5 flex-wrap' style={{ maxWidth: "1600px" }}>
                                {HomePageSection2.map((item, index) => {
                                    return <CategoryItem key={index} imgURL={item.img} heading={item.heading} desc={item.desc} />
                                })}
                            </Container>
                        </div >

                        <div style={{
                            position: "absolute",
                            bottom: "68px",
                            right: "56%",
                        }} >
                            <img src="./rectangle.png" alt="Rectangle" />
                        </div>
                    </div>
                </Container>

                {/*  ------------------------Key Features Section ---------------------------------------*/}
                <div className='key-features-section pt-5 pb-5' style={{ background: "#F5FCFF" }}>
                    <Container className="d-flex justify-content-between flex-wrap" style={{ maxWidth: "1500px" }}>
                        <div className='col-md-6 col-12'>
                            <h1 className='fw-bold'>Key Features</h1>
                            <p style={{ width: "350px", fontWeight: "300" }}>Lorem ipsum is simply dummpy text of the printing and typesetting industry</p>
                            <div style={{ width: "80%" }}><img src="./key_features.png" width="100%" alt="KeyFeature" /></div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <Button className='mt-5 mb-5'>Key Features</Button>
                            <div className='d-flex flex-column gap-3'>
                                {keyFeatures.map((item, index) => {
                                    return (<div key={index} className='d-flex gap-5 align-items-center handover-small-section p-3'>
                                        <div>
                                            <img src={item.img} alt="image" />
                                        </div>
                                        <div>
                                            <p className="fw-semi-bold m-0 p-0">{item.heading}</p>
                                            <p style={{ textAlign: "justify", fontWeight: "200" }}>{item.desc}</p>
                                        </div>

                                    </div>)
                                })}
                            </div>
                        </div>
                    </Container>
                </div>

                {/*  ------------------------Retailer Statistics Section ---------------------------------------*/}
                <div className='retailer-statistics pt-5 pb-5' style={{ background: "#0d6efd" }}>
                    <div style={{
                        width: "fit - content",
                        margin: " 0 auto",
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "50px"
                    }}>
                        <p style={{
                            fontSize: "3rem", fontWeight: "600", color: "#ffffff", padding: "0px", margin: "0px",
                            textAlign: "center"
                        }}> 2023 in Numbers</p>

                    </div>
                    <Container className="d-flex flex-wrap justify-content-between nt-3 mb-3" style={{ maxWidth: "1500px" }}>

                        <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                            <div className='map_div'>
                                <p style={{ fontSize: "20px", textAlign: 'center' }}>Handover Retailers Statistics</p>
                                <div className='d-flex  justify-content-between'>
                                    <div>
                                        <h2>65100+</h2>
                                        <p>RETAILERS</p>
                                    </div>
                                    <div>
                                        <h2>1000+</h2>
                                        <p>PINCODES</p>
                                    </div>
                                </div>
                                <img width="320px" src="./dashed-line.png" alt="DashedLine" />
                                <div style={{ position: "absolute", transform: "rotate('90deg')" }}><img width="320px" src="./dashed-line.png" alt="DashedLine" /></div>
                                <div className='d-flex  justify-content-between'>
                                    <div>
                                        <h2>84370+</h2>
                                        <p>ORDER DELIVERED</p>
                                    </div>
                                    <div>
                                        <h2>100+</h2>
                                        <p>CITIES</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center' >
                            <img src="./handover_map.png" alt="HandoverMap" width="100%" />
                        </div>

                    </Container>

                    <p style={{
                        color: "#ffffff",
                        maxWidth: "950px",
                        margin: "0 auto",
                        textAlign: "center"
                    }}>We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, and Nashik.</p>

                </div>

                {/*  ------------------------FAQ and Why Handover Section ---------------------------------------*/}
                <div className='handover-faq-and-whyhandover-section pt-5 pb-5' style={{ background: "#F5FCFF" }}>
                    <Container className="d-flex justify-content-between flex-wrap" style={{ maxWidth: "1500px" }}>
                        <div className='col-md-6 d-flex flex-column align-items-center '>
                            <h3 className='fw-bold' style={{ maxWidth: "350px", textAlign: 'center', height: "80px" }}>Frequently Asked Questions (FAQs)</h3>
                            <img src="./image2.png" alt="Image1" />
                            <div>
                                {[1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <div key={index} className='handover-small-section p-4 mb-2 d-flex justify-content-between'
                                            style={{ maxWidth: "600px" }} >
                                            <p style={{ fontWeight: "300", maxWidth: "550px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt.</p>
                                            <div style={{ width: "20px", height: "20px" }}>
                                                <img src="./show_more.png" alt="ShowMore" />
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column align-items-center'>
                            <h3 className='fw-bold' style={{ maxWidth: "350px", textAlign: 'center', height: "80px" }}>Why Handover</h3>
                            <img src="./image2.png" alt="Image2" />
                            <div>
                                {whyHandover.map((item, index) => {
                                    return (
                                        <div key={index} className='handover-small-section p-4 mb-2' style={{ maxWidth: "600px" }}>
                                            <h5>{item.heading}</h5>
                                            <p style={{ fontWeight: "300" }}>{item.desc}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    </Container>
                </div>

                {/*  ------------------------News Section ---------------------------------------*/}
                <div className='handover-news-section pt-5 pb-5'>
                    <Container style={{ maxWidth: "1500px" }}>
                        <h3 className='fw-bold' style={{ textAlign: 'center', fontWeight: "600" }}>Latest <span style={{ color: "#F6911E" }}>News</span></h3>
                        <div className='d-flex flex-column align-items-center justify-content-center'  >
                            <div className='d-flex justify-content-around flex-wrap mt-5 gap-5' >
                                {[1, 2, 3].map((item, index) => {
                                    return (
                                        <div key={index} className='handover-small-section mb-2 d-flex flex-column justify-content-between'
                                            style={{ maxWidth: "450px" }} >
                                            <div><img src="./new1.png" alt="News1" width="100%" /></div>
                                            <div className='p-3'>
                                                <h5>Heading1</h5>
                                                <p style={{ fontWeight: "300" }}>Oct 22 | Post by : James lewis </p>
                                                <p style={{ fontWeight: "300" }}>Lorem Ipsum is simply
                                                    dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1500s, when an unknown printer took
                                                    a galley of type.
                                                </p>
                                                <div className='d-flex  gap-1'> <p style={{ color: '#F6911E' }}>Read More</p><div><img src="./right_arrow.png" alt="RightArrow" /></div></div>
                                            </div>


                                        </div>
                                    )
                                })}
                            </div>
                        </div >


                    </Container>
                </div>

                {/*  ------------------------Contact Us Section ---------------------------------------*/}
                <div className='handover-contact-us-section pt-5 pb-5'>
                    <Container className="d-flex justify-content-between flex-wrap" style={{ maxWidth: "1400px" }}>
                        <div className='col-md-6 d-flex flex-column align-items-end'>
                            <img src="./contact_us.png" alt="ContactUs" width="100%" />
                        </div>
                        <div className='handover-small-section col-md-6 d-flex flex-column p-5'>
                            <h5 className="mb-4">REQUEST FORM</h5>
                            <Formik
                            initialValues={initialValues}
                            // validationSchema={userValidationSchema}
                            // onSubmit={handleSubmit}
                            >
                                {({ errors, setFieldValue }) => (
                                    <Form className="contact-us-form d-flex flex-column gap-3">
                                        <div className="d-flex flex-column">
                                            <label for="option">Choose a option</label>
                                            <select name="option" id="option" className='custom-form-input' onChange={(event)=>setFieldValue("option",event.target.value)}>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            {errors.option && <div className="form-error">{errors.option}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <label className="form-label" htmlFor="user_name"> User Name</label>
                                            <Field id="user_name"
                                                type="text" placeholder="Enter User Name"
                                                name="user_name"
                                                className="custom-form-input" />
                                            {errors.user_name && <div className="form-error">{errors.user_name}</div>}
                                        </div>

                                        <div className="d-flex flex-column">
                                            <label className="form-label" htmlFor="email_address"> Email</label>
                                            <Field id="email_address"
                                                type="email" placeholder="Enter Enter"
                                                name="email_address"
                                                className="custom-form-input" />
                                            {errors.email_address && <div className="form-error">{errors.email_address}</div>}
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

                    </Container>
                </div>
                <Footer />
            </Container >

        </section >)
}

export default Home;