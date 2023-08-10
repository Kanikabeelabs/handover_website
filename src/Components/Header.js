import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({page_name}) => {
    return (
        <div className='header menu_item p-2 d-flex flex-wrap align-items-center justify-content-around gap-2' >
            <div className="col-md-3">
                <Link to="/">               
                 <img src="./handover-logo.png" alt="HandOverLogo" />
                </Link>
            </div>
            <ul className='d-flex flex-wrap col-md-6 justify-content-around gap-2'>
                <li><Link to="/delivery-fee" style={{ color: "#F6911E" }}>DELIVERY FEE</Link></li>
                <li><Link to="">RETAILER</Link></li>
                <li><Link to="">DELIVERY PARTNERS</Link></li>
                <li><Link to="">ABOUT US</Link></li>
                <li><Link to="">BLOGS</Link></li>
            </ul>
            {page_name === "home" && <Button className='handover-button'>EMPLOYEE LOGIN</Button>}
            {(page_name === "delivery_fee" || page_name === "delivery_fee_form") && <Button className='rounded-pill handover-button' >Cities We Serve</Button>}
        </div>
    )
}

export default Header;