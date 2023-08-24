import { Container } from "react-bootstrap"
const HandOverStatistics = () => {
    return (<div className='retailer-statistics pt-5 pb-5' style={{ background: "#0d6efd" }}>
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
                    <div style={{ position: "absolute", top: 50 }}><img width="320px" src="./dash.png" alt="DashedLine" /></div>
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

    </div>)
}

export default HandOverStatistics;