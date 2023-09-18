import { Container, Button } from 'react-bootstrap';
import Header from "../../Components/Header";
import { Formik, Form, Field } from 'formik';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { getRequest } from '../../utils/ApiRequest';

const DeliveryFee = () => {
    const [manualLocation, setManualLocation] = useState(false);
    const [state, setState] = useState([]);
    const [district, setDistrict] = useState([]);
    const [latitude, setLatitude] = useState(28.6130176);
    const [longitude, setLongitude] = useState(77.2308992);
    const initialValues = {
        country: "",
        state: "",
        district: "",
        pincode: ""
    }
    // const MapMarker = () => <div className="map-marker">📍</div>; // Custom marker component



    const DeliveryFeeSecondFormDiv = ({ heading, desc, data, image }) => {
        return (
            <div className='handover-shadow-div' style={{ borderRadius: "11px", minHeight: "150px", width: "250px", background: "#ffffff" }}>
                <div style={{ height: "150px", }}>
                    <img src={image} alt={heading} width={"100%"} />
                </div>
                <div className='content p-2' >
                    <h6><b>{heading}</b></h6>
                    <p style={{ fontSize: 14, color: "#676767", fontFamily: "Poppins" }}>{desc}</p>
                </div>
            </div>)
    }

    const handleManualLocation = () => {
        setManualLocation(!manualLocation)
    }

    const handleDetectLocation = () => {
        if (navigator.geolocation) {
            // Get current position
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    // console.log(position.coords.latitude)
                    // console.log(position.coords.longitude)

                },
                error => {
                    console.log(error.message)
                    alert("Please give the required permission to fetch the location");
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }
    useEffect(() => {
        const getState = async () => {
            let response = await getRequest('/api/v1/map/states');
            if (response.status === 200)
                setState(response?.data?.data);
        }
        getState();
    }, []);
    const getDistrict = async (state) => {
        let response = await getRequest(`/api/v1/map/districts?states=${state}`);
        if (response.status === 200)
            setDistrict(response?.data?.data);

    }
    return (
        <section className='delivery-fee-section'>
            <Header page_name="delivery_fee" />
            <Container fluid className='p-0' style={{ height: "100vh" }}>
                <div className='d-flex'>
                    <div className="col-md-3 col-12 p-3 d-flex flex-column gap-3" style={{
                        background: "#ffffff", height: "95vh", zIndex: '89080'
                    }}>
                        <div className='delivery-fee-form-first-section p-3' >
                            <img src="./delivery_fee_logo.png" alt="Delivery Fee Logo" />
                            <h5>Welcome to HandOver</h5>
                            <span style={{ fontSize: "16px", textAlign: "center", color: "#4D606A" }}>Please provide your delivery location to see products at nearby</span>
                            <Button className='handover-button rounded-pill' onClick={handleDetectLocation}>Detect Location</Button>
                            <Button className='handover-button-type-2 rounded-pill' onClick={handleManualLocation}>Search Delivery Location</Button>
                        </div>

                        {manualLocation && <div>
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
                                                <option value="india">India</option>
                                            </select>
                                            {errors.country && <div className="form-error">{errors.country}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <select name="option" id="option"
                                                className='custom-form-input'
                                                onChange={(e) => getDistrict(e.target.value)}>
                                                <option value="">State</option>
                                                {state.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>)
                                                })}
                                            </select>
                                            {errors.state && <div className="form-error">{errors.state}</div>}

                                        </div>

                                        <div className="d-flex flex-column">
                                            <select name="option" id="option" className='custom-form-input'>
                                                <option value="">District</option>
                                                {district.map((item) => {
                                                    return (<option key={item._id} value={item.name}>{item.name}</option>)
                                                })}
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
                        </div>}

                    </div>
                    <div className="col-9 d-md-block d-none " style={{ height: '100vh' }}>
                        {/* <MapContainer center={[latitude,longitude]} zoom={2} style={{ height: '100vh' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                            A popup for the marker.
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                        <img src="./background_map.PNG" alt="Map" width="100%" height="796px" />
                        {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: '' }} // Replace with your API key
                            defaultCenter={{
                                lat: latitude,
                                lng: longitude
                            }}
                            center={{
                                lat: latitude,
                                lng: longitude
                            }}
                            defaultZoom={12}
                        >
                            <MapMarker lat={latitude} lng={longitude} /> 
                        </GoogleMapReact> */}
                    </div>
                </div>

                <div className='delivery-fee-second-form d-md-block d-none '>
                    <Container className='p-2' style={{ maxWidth: "800px" }}>
                        <div className='head '>
                            <h5><b>Roz Ki Delivery Handover Banaye Easy With Affordable Delivery Fee</b></h5>
                        </div>
                        <div className='d-flex gap-3'>
                            <DeliveryFeeSecondFormDiv heading="2-wheeler Delivery Fleet" image="./2wheeler.png" desc={"Seeking hyperlocal delivery services at a low cost? Trust Handover’s two-wheeler delivery fleet that delivers orders to your customers on time."} />
                            <DeliveryFeeSecondFormDiv heading="3-wheeler Delivery Fleet" image="./3wheeler.png" desc={"Want a 3-wheeler delivery fleet to deliver cartons of fruits and vegetables, light construction materials and alike? Contact Handover!"} />
                            <DeliveryFeeSecondFormDiv heading="4-wheeler Delivery Fleet" image="./4wheeler.png" desc={"Want a 4-wheeler delivery fleet to deliver cartons of fruits and vegetables, light construction materials and alike? Contact Handover!"} />
                        </div>
                    </Container>
                </div>

            </Container>

        </section>)
}
export default DeliveryFee;