import { Container, Button } from 'react-bootstrap';
import CategoryItem from "../Home/Components/CategoryItem";
import HandOverStatistics from "../../Components/HandOverStatistics";
import NoticeSection from '../../Components/NoticeSection';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { HomePageSection2, keyFeatures, whyHandover } from "../../utils/Data";
import { Formik, Form, Field } from 'formik';

const Home = () => {
    const initialValues = {
        option: "",
        user_name: "",
        email_address: "",
        description: ""
    }
    return (
        <section className='handover-homepage'>
            <Container fluid className="p-0">
                {/*  ------------------------header ---------------------------------------*/}
                <Container fluid style={{ background: "green" }} >
                    <Header page_name="home" />

                    {/*  ------------------------First Section ---------------------------------------*/}
<<<<<<< HEAD
                    <div className='bg' style={{ marginTop: "100px" }} >
                        {/* <img className='mainimg' src='./main_bg.svg'></img> */}
=======
                    <Container style={{ marginTop: "100px", maxWidth: '1800px' }} >
                        {/* <img src='./main_website.png' alt="main_banner"></img> */}
>>>>>>> 19435d0d4f381a2fe8c380d44ecffe639a8973b5
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
                                <img src="./location.png" alt="locationLogo" />
                                <input style={{ border: "none", outline: "none", marginLeft: "5px" }}
                                    type="text" placeholder="Location" />
                            </div>
                            <div className='p-2' style={{ background: "#F6911E", color: "#ffffff" }}>
                                Search
                            </div>
                        </div>

                        <div className='video-section d-flex gap-5 mt-4 pb-3' style={{ flexWrap: 'wrap' }}>
                            <iframe width="320" title="video1" height="240" src="https://www.youtube.com/embed/XWZwQM_Tssw" frameborder="0" allowfullscreen></iframe>
                            <iframe width="320" height="240" title="video2" src="https://www.youtube.com/embed/XWZwQM_Tssw" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </Container>
                </Container>

                <Container style={{ maxWidth: "1800px", position: "relative" }}>
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
                                    return (<div key={index} className='d-flex gap-5 align-items-center handover-shadow-div p-3'>
                                        <div>
                                            <img src={item.img} alt={item.heading} />
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
                <HandOverStatistics />

                {/*  ------------------------FAQ and Why Handover Section ---------------------------------------*/}
                <div className='handover-faq-and-whyhandover-section pt-5 pb-5' style={{ background: "#F5FCFF" }}>
                    <Container className="d-flex justify-content-between flex-wrap" style={{ maxWidth: "1500px" }}>
                        <div className='col-md-6 d-flex flex-column align-items-center '>
                            <h3 className='fw-bold' style={{ maxWidth: "350px", textAlign: 'center', height: "80px" }}>Frequently Asked Questions (FAQs)</h3>
                            <img src="./image2.png" alt="Image1" />
                            <div>
                                {[1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <div key={index} className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
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
                                        <div key={index} className='handover-shadow-div p-4 mb-2' style={{ maxWidth: "600px" }}>
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
                <NoticeSection />

                {/*  ------------------------Contact Us Section ---------------------------------------*/}
                <div className='handover-contact-us-section pt-5 pb-5'>
                    <Container className="d-flex justify-content-between flex-wrap" style={{ maxWidth: "1400px" }}>
                        <div className='col-md-6 d-flex flex-column align-items-end'>
                            <img src="./contact_us.png" alt="ContactUs" width="100%" />
                        </div>
                        <div className='handover-shadow-div col-md-6 d-flex flex-column p-5'>
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
                                            <select name="option" id="option" className='custom-form-input' onChange={(event) => setFieldValue("option", event.target.value)}>
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