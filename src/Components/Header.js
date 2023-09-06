import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../utils/Data";
import { getCurrentPage } from "../utils/functions";
const Header = ({ page_name }) => {
    return (
        <div className='header menu_item p-2 d-flex flex-wrap align-items-center justify-content-around gap-2' >
            <div className="col-md-3">
                <Link to="/">
                    <img src="./handover_logo.png" alt="HandOverLogo" />
                </Link>
            </div>
            <ul className='d-flex flex-wrap col-md-6 justify-content-around gap-2'>
                {HeaderMenu.map((item) => {
                    return (<li key={item.id}>
                        <Link to={item.link_url} style={{ color: getCurrentPage() === item.link_url ? "#F6911E" : "inherit" }}> {item.menu_name}</Link>
                    </li>
                    )
                })}
            </ul>
            
            <a href="">
            <img src="./whatsapp.png"></img>
            </a>
               
            {(page_name === "home" || page_name === "about-us" || 
            page_name === "delivery_partner" || page_name === "retailer") && <Button className='handover-button'>EMPLOYEE LOGIN</Button>}
            {(page_name === "delivery_fee" || page_name === "delivery_fee_form") && <Button className='rounded-pill handover-button' >Cities We Serve</Button>}
        </div >
    )
}

export default Header;