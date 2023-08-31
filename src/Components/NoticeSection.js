import { Container } from "react-bootstrap";
const NoticeSection = () => {
    return (<div className='handover-news-section pt-5 pb-5'>
        <Container style={{ maxWidth: "1500px" }}>
            <h3 className='fw-bold' style={{ textAlign: 'center', fontWeight: "600" }}>Latest <span style={{ color: "#F6911E" }}>News</span></h3>
            <div className='d-flex flex-column align-items-center justify-content-center'  >
                <div className='d-flex justify-content-around flex-wrap mt-5 gap-5' >
                    {[1, 2, 3].map((item, index) => {
                        return (
                            <div key={index} className='handover-shadow-div mb-2 d-flex flex-column justify-content-between'
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
    </div>)
}

export default NoticeSection;