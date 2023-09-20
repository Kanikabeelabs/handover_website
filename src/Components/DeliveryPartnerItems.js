
import { Overlay, Tooltip } from 'react-bootstrap';
import { useState, useRef } from 'react';
const DeliveryPartnerItems = ({ img_url, heading, description, link }) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [target, setTarget] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        setTarget(target === null ? e.target : null); // Toggle the target
        setPopoverOpen(!popoverOpen);
    };

    const handleHide = () => {
        setPopoverOpen(false);
    };

    return (<div
        className="handover-shadow-div p-3 d-flex flex-row gap-2 justify-content-center"
        style={{ width: "340px" }}>
        <div><img src={img_url} alt={heading} /></div>
        <div>
            <p className="fw-bold m-0">{heading}</p>
            <p className="m-0 p-0" style={{ fontWeight: "200" }}>{description.slice(0, 50) + '...'}</p>
            <a ref={target}
                href="#"
                onClick={handleClick}
            >
                Read More
            </a>
            <Overlay
                target={target}
                show={popoverOpen}
                placement="top"
                onHide={handleHide}
                rootClose // This allows the overlay to close when clicking outside it
            >
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        {description}
                    </Tooltip>
                )}
            </Overlay>

        </div>
    </div>)
}

export default DeliveryPartnerItems;