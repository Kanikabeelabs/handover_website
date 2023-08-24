const LocationItem = () => {
    return (<div className='handover-location-item'
        style={{
            maxWidth: "300px",
            backgroundImage: `url("./our_location.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#ffffff",
            height: "400px"
        }} >
        <div className='p-3'>
            <div className="d-flex gap-2 align-items-center">
                <img src="./location_icon.png" alt="Location_Icon" />
                <h4 className="fw-bold"> Noida</h4>
            </div>
            <p style={{ fontWeight: "300" }}>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.

            </p>
        </div>
    </div >)
}

export default LocationItem;