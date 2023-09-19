import { Container, Button } from 'react-bootstrap';
import CategoryItem from "../Home/Components/CategoryItem";
import HandOverStatistics from "../../Components/HandOverStatistics";
import NoticeSection from '../../Components/NoticeSection';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { HomePageSection2, keyFeatures, whyHandover, FAQ } from "../../utils/Data";
import { contactUsSchemaValidation } from "../../utils/Validations";
import { postRequest } from '../../utils/ApiRequest';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
const Home = () => {
    const [openItems, setOpenItems] = useState([]);
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
            console.log(response)
            alert("You have successfully submitted the form");
            resetForm();
        } catch (err) {
            console.log(err)
        }


    }

    const handleCancel = (resetForm) => {
        resetForm();
    }

    const toggleItem = (itemId) => {
        if (openItems.includes(itemId)) {
            // If the item is already open, close it
            setOpenItems(openItems.filter((id) => id !== itemId));
        } else {
            // If a new item is opened, close all others and open the new one
            setOpenItems([itemId]);
        }
    };
    return (
        <section className='handover-homepage'>
            <Header page_name="home" />
            <Container fluid className="p-0" >
                {/*  ------------------------header ---------------------------------------*/}
                <Container fluid
                    style={{
                        backgroundImage: `url("./main_website.png")`,
                        backgroundSize: 'cover',
                        minHeight: '700px'
                    }}>

                    {/*  ------------------------First Section ---------------------------------------*/}
                    <Container style={{ paddingTop: "100px", maxWidth: '1600px' ,postion:"relative"}} >
                        <p className="handover-main-heading">Delivery Tension?</p>
                        <span style={{ color: "#F6911E" }} className="handover-main-heading">#handover </span>
                        <span className="handover-main-heading">Karo</span>

                        <p style={{
                            color: "#3C3C3C",
                            maxWidth: "400px",
                            fontWeight: "300"
                        }}> All delivery solutions in one place.</p>
                        <div className='search-box-section d-flex align-items-center flex-wrap'>
                            <div className='search-box p-2' >
                                <img src="./location.png" alt="locationLogo" />
                                <input style={{ border: "none", outline: "none", marginLeft: "5px" }}
                                    type="text" placeholder="Location" />
                            </div>
                            <div className='p-2' style={{ background: "#F6911E", color: "#ffffff" }}>
                                Search
                            </div>
                        </div>

                        <div className='video-section d-flex gap-3 mt-4 pb-3' style={{ flexWrap: 'wrap' }}>
                            <iframe width="250" title="video1" height="200" src="https://www.youtube.com/embed/AaldFQmUjPA" frameBorder="0" allowFullScreen></iframe>
                            <iframe width="250" height="200" title="video2" src="https://www.youtube.com/embed/IO79wiKGTEc" frameBorder="0" allowFullScreen></iframe>
                        </div>

                        {/* <div className='handover-shadow-div p-2 d-none d-md-block' 
                            style={{width:"200px",position:"absolute",top:"100px",right:"150px"}}> 
                            <div className='d-flex gap-2 align-items-center'><img src="./object_icon.png" alt="Object Icon" /> 
                            <h5>On-time Delivery</h5>
                            </div>
                            <p className='m-0 p-0'>Ensured via advanced route optimisation software</p>
                        </div> */}

                        {/* <div className='handover-shadow-div p-2 d-none d-md-block' style={{width:"200px",
                            position:"absolute",top:"400px",left:"870px"}}> 
                            <div className='d-flex gap-2 align-items-center'><img src="./location_icon.png" alt="Location Icon" /> 
                            <h5>Location Detection</h5>
                            </div>
                            <p className='m-0 p-0'>Know where the shipment is at different points of time</p>
                        </div> */}
                    </Container>
                </Container>

                <Container style={{ maxWidth: "1800px", position: "relative" }}>
                    {/*  ------------------------Second Section ---------------------------------------*/}
                    <div className='second-section'>
                        <div className='d-flex flex-column align-items-center justify-content-center homeover-section' >
                            <p className='second-section-heading'>So Many Order Delivery Needs, One Solution handover</p>
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
                            <p style={{ maxWidth: "350px", fontWeight: "300" }}>handover’s Delivery Partners can choose multiple locations to get maximum orders, which will help them earn more.</p>
                            <div style={{ width: "80%" }}><img src="./key_features.png" width="100%" alt="KeyFeature" /></div>
                        </div>
                        <div className='col-md-6  col-12'>
                            <h3 className='mt-5 mb-5'>Key Features</h3>
                            <div className='d-flex  flex-column gap-3'>
                                {keyFeatures.map((item, index) => {
                                    return (<div key={index} className='d-flex details2 gap-5 align-items-center handover-shadow-div p-3'>
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
                            <h3 className='fw-bold' style={{ maxWidth: "350px", textAlign: 'center', height: "80px" }}>
                                Frequently Asked Questions (FAQs)</h3>
                            <img src="./faq_image.png" alt="Image1" />
                            <div>
                                {FAQ.map((item) => {
                                    return (
                                        <div key={item.id} className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                            style={{ maxWidth: "600px" }} >
                                            <div style={{ fontWeight: "300", maxWidth: "550px" }}>
                                                <p><b>{item.heading}</b></p>
                                                {openItems.includes(item.id) ? (
                                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                ) : null}
                                            </div>

                                            <div style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                onClick={() => toggleItem(item.id)}>
                                                <img src="./show_more.png" alt="ShowMore" />
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                    style={{ maxWidth: "600px" }} >
                                    <p style={{ fontWeight: "300", maxWidth: "550px" }}>
                                        <b>Is Handover Special? How?</b>
                                        <br />
                                        Yes, it is! Handover has made the entire delivery system cost-efficient and transparent by reviving interactions between businesses and their customers.</p>
                                    <div style={{ width: "20px", height: "20px" }}>
                                        <img src="./show_more.png" alt="ShowMore" />
                                    </div>
                                </div>
                                <div className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                    style={{ maxWidth: "600px" }} >
                                    <p style={{ fontWeight: "300", maxWidth: "550px" }}>
                                        <b>How Can Businesses Register with Handover?</b>
                                        <br /> Businesses can register with Handover on its official website and app.</p>
                                    <div style={{ width: "20px", height: "20px" }}>
                                        <img src="./show_more.png" alt="ShowMore" />
                                    </div>
                                </div>
                                <div className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                    style={{ maxWidth: "600px" }} >
                                    <p style={{ fontWeight: "300", maxWidth: "550px" }}>
                                        <b>What is the Registration Process for Businesses with Handover?</b>
                                        <br />
                                        <b>On Website</b> <br />Click on the ‘Retailers’ icon<br />Choose ‘Retailer’ from the drop-down<br />Mention your name, email address and mobile number, and click on ‘Send Message’<br />We will verify the details before registering your business for delivery services<br /><br /><b>On App</b><br />Download the Handover Business App from the Google Play Store<br />After giving location permission access and doing mobile number authentication, enter your name, the business name, the type of business, etc.<br />After successful verification of these details, we will get you registered for delivery services.
                                    </p>
                                    <div style={{ width: "20px", height: "20px" }}>
                                        <img src="./show_more.png" alt="ShowMore" />
                                    </div>
                                </div>
                                <div className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                    style={{ maxWidth: "600px" }} >
                                    <p style={{ fontWeight: "300", maxWidth: "550px" }}>
                                        <b>
                                            Do I Need to Recharge the Wallet for Delivery Services?
                                        </b> <br />
                                        Yes! Businesses must recharge their wallets for uninterrupted delivery services. Delivery charges are automatically deducted from the wallet.</p>
                                    <div style={{ width: "20px", height: "20px" }}>
                                        <img src="./show_more.png" alt="ShowMore" />
                                    </div>
                                </div>
                                <div className='handover-shadow-div p-4 mb-2 d-flex justify-content-between'
                                    style={{ maxWidth: "600px" }} >
                                    <p style={{ fontWeight: "300", maxWidth: "550px" }}>
                                        <b>How Do I Know My Wallet Recharge Status?</b> <br />
                                        Visit the ‘Recharge Wallet’ section on the Handover Business App to know the balance left for deliveries. </p>
                                    <div style={{ width: "20px", height: "20px" }}>
                                        <img src="./show_more.png" alt="ShowMore" />
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column align-items-center'>
                            <h3 className='fw-bold' style={{ maxWidth: "350px", textAlign: 'center', height: "80px" }}>Why handover</h3>
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

                <Container className='d-flex align-items-center' fluid style={{ height: "600px", position: "relative" }}>
                    <Container className='p-5' style={{ background: "#ECF8FF", borderRadius: "11px" }}>
                        <p>Our Retailer App caters to local businesses across various categories,
                            including food, grocery, and apparels.<br></br> Whether you run a small café,
                            a neighborhood grocery store, a boutique, a bulk distributor of FMCG
                            products<br></br> or doing business from home, our app is designed to meet your specific needs. We offer delivery via
                            <br></br>Two-Wheelers, Three-Wheelers, Four-Wheelers, Trucks at nominal charges. Streamline your delivery process through
                            <br></br>our intuitive platform, gain Visibility to get more orders and list your product for our end users in Handover
                            <br></br>Business app.
                        </p>
                        <h5 className='mt-3'>Download the handover Mobile App For Free</h5>
                        <a href="https://play.google.com/store/apps/details?id=com.handover.retailer" className='mt-3'>
                            <img src="./playstore.png" alt="PlayStore" />
                        </a>
                    </Container>
                    <div className="d-md-block d-none" style={{
                        position: "absolute",
                        right: "238px"
                    }}>
                        <img src="./mobile_phone.png" alt="Mobile Phone" />
                    </div>
                </Container>

                {/*  ------------------------News Section ---------------------------------------*/}
                {/* <NoticeSection /> */}

                {/*  ------------------------Contact Us Section ---------------------------------------*/}
                <Container className='handover-contact-us-section pt-5 pb-5'>
                    <Container className="row" style={{
                        maxWidth: "1400px", margin: "0px"
                    }}>
                        <div className='col-md-6 d-flex flex-column align-items-end'>
                            <img src="./contact_us.png" alt="ContactUs" width="100%" />
                        </div>
                        <div className='handover-shadow-div col-md-6 d-flex flex-column p-5'>
                            <h5 className="mb-4">REQUEST FORM</h5>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={contactUsSchemaValidation}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, values, setFieldValue, resetForm }) => (
                                    <Form className="contact-us-form d-flex flex-column gap-3">
                                        <div className="d-flex flex-column">
                                            <label htmlFor="option">Choose a option</label>
                                            <select name="option"
                                                id="option" className='custom-form-input'
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
                                                type="email" placeholder="Enter email address"
                                                name="email_address"
                                                className="custom-form-input" />
                                            {errors.email_address && <div className="form-error">{errors.email_address}</div>}
                                        </div>

                                        <div className="d-flex flex-column">
                                            <label className="form-label" htmlFor="mobile"> Mobile Number</label>
                                            <Field id="mobile"
                                                type="text" placeholder="Enter mobile number"
                                                name="mobile"
                                                className="custom-form-input" />
                                            {errors.mobile && <div className="form-error">{errors.mobile}</div>}
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
                                            <Button variant="secondary" className='cancel-button' type="button" onClick={() => handleCancel(resetForm)}>Cancel</Button>
                                            <Button variant="primary" type="submit" style={{ width: "50%" }}>Send Message</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>

                    </Container>
                </Container>
                <Footer />
            </Container>

        </section>
    )
}

export default Home;