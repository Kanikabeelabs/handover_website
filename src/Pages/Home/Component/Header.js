import { Button } from "react-bootstrap";
const Header = () => {
    return (
        <div className='header menu_item p-2 d-flex flex-wrap align-items-center justify-content-around gap-2' >
            <div className="col-md-3">
                <img src="./handover-logo.png" alt="HandOverLogo" />
            </div>
            <ul className='d-flex flex-wrap col-md-6 justify-content-around gap-2'>
                <li><a href="" style={{ color: "#F6911E" }}>DELIVERY FEE</a></li>
                <li><a href="">RETAILER</a></li>
                <li><a href="">DELIVERY PARTNERS</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">BLOGS</a></li>
            </ul>
            <Button className='handover-button'>EMPLOYEE LOGIN</Button>

        </div>
    )
}

export default Header;