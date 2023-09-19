import { useNavigate } from "react-router-dom";
const LocationItem = ({ item }) => {
    const navigate = useNavigate();
    const link_url = item !== undefined ? item.link_url : './our_location.png';
    return (<div className='handover-location-item'
        style={{
            width: "300px",
            backgroundImage: `url(${link_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#ffffff",
            height: "400px"
        }}
        onClick={() => window.open(`/location-info?location_name=${item.location_name}`, '_blank')}

    // onClick={() => navigate(`/location-info?location_name=${item.location_name}`)}

    >
        <div className='p-3' >
            <div className="d-flex gap-2 align-items-center">
                <img src="./location_icon.png" alt="Location_Icon" />
                <h4 className="fw-bold" style={{ textTransform: "capitalize" }}>
                    {item !== undefined ? item.location_name : 'Noida'}</h4>
            </div>

        </div>
    </div >)
}

export default LocationItem;