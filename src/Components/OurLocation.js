import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { Location } from '../utils/Data';
import 'react-multi-carousel/lib/styles.css';
import LocationItem from "./LocationItem";
const OurLocation = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        < Container fluid className="p-0 d-flex flex-column align-items-center justify-content-center mb-2" >
            <h3 className='mt-4 mb-4 fw-bold'>Our Location</h3>
            <Container>
                <Carousel responsive={responsive}>
                    {Location.map((item, index) => {
                        return (<LocationItem key={index} item={item} />)
                    })}
                </Carousel>
            </Container>

        </Container >)
}

export default OurLocation;
