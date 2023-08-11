import { Container } from "react-bootstrap";
import styles from "./Desktop8.css";
const Desktop8 = () => {
    return (<section className="handover-delivery-fee">
        <Container className="handover">
           <div>
            <div className="header">
                <img className="logo" src="./group-427321678@2x.png"></img>
                <div className="div5 ">Delivery Fee</div>
                <div className="div1">Retailer</div>
                <div className="div2">Delivery Partner</div>
                <div className="div3">About Us</div>
                <div className="div4">Blogs</div>
                <button className="button1">Cities We Serve</button>

            </div>

            <div className="div6">
                <img className="map" src="screenshot-20230725-at-1134-1@2x.png"></img>
                <div className="div7">
                    <div className="div8">
                        <img className="img" src="./img.svg"></img>
                        <text className="fee">Delivery Fee</text>
                    </div>

                    <input className="pickup" placeholder="Enter Pickup Location"></input>
                    <input className="drop" placeholder="Enter Drop Off Location"></input>
                    <select className="product1">
                        <option>Product Category</option>
                    </select>

                    <select className="product2">
                        <option>Product Category</option>
                    </select>

                    <select className="product3">
                        <option>Product Category</option>
                    </select>

                    <select className="product4">
                        <option>Item Weight</option>
                    </select>

                    <textarea className="msg" placeholder="Write a message..."></textarea>

                    <div className="action">
                        <button className="cancel">Cancel</button>
                        <button className="submit">Submit</button>
                    </div>
                </div>
            </div>

            <div className="last">
                <img className="lastimg" src="./img2.svg"></img>
            </div>
        </div>
        </Container>
    </section>
     
    
    )
};

export default Desktop8;