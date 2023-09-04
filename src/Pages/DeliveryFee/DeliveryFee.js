import { Container, Button } from 'react-bootstrap';
import Header from "../../Components/Header";
import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import { getRequest } from '../../utils/ApiRequest';
const DeliveryFee = () => {
    const [manualLocation, setManualLocation] = useState(true);
    const [state, setState] = useState([]);
    // const [latitude, setLatitude] = useState(28.6130176);
    // const [longitude, setLongitude] = useState(77.2308992);
    const initialValues = {
        country: "",
        state: "",
        district: "",
        pincode: ""
    }

    const DeliveryFeeSecondFormDiv = ({ heading, desc, data }) => {
        return (<div style={{ borderRadius: "11px", minHeight: "150px", width: "250px", background: "#ffffff" }}>
            <div style={{ background: '#E7F6FF', height: "150px" }}></div>
            <div className='content p-2' >
                <h4>Welcome to Handover</h4>
                <p>Please provide your delivery location to see products at nearby</p>
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
                    // setLatitude(position.coords.latitude);
                    // setLongitude(position.coords.longitude);
                    console.log(position.coords.latitude)
                    console.log(position.coords.longitude)

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

    return (
        <section className='delivery-fee-section'>
            <Header page_name="delivery_fee" />
            <Container fluid className='p-0' style={{ height: "100vh" }}>
                <div className='d-flex'>
                    <div className="col-3 p-3 d-flex flex-column gap-3" style={{ background: "#ffffff", height: "95vh" }}>
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
                                                {state.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>)
                                                })}
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
                        </div>}

                    </div>
                    <div className="col-9" style={{ height: '100vh' }}>
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
                        <img src="./background_map.png" alt="Map" width="100%" height="796px" />
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
                <div className='delivery-fee-second-form d-flex gap-3'>
                    <DeliveryFeeSecondFormDiv />
                    <DeliveryFeeSecondFormDiv />
                    <DeliveryFeeSecondFormDiv />
                </div>

            </Container>

        </section>)
}
export default DeliveryFee;