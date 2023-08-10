const CategoryItem = ({ imgURL, heading, desc }) => {
    return (<div
        className="handover-small-section p-5 d-flex flex-column 
        align-items-center 
        justify-content-center"
        style={{ width: "340px", zIndex: "984" }}>
        <img src={imgURL} alt="image" />
        <p className="fw-semi-bold">{heading}</p>
        <p style={{ textAlign: "justify", fontWeight: "200" }}>{desc}</p>
    </div>)
}
export default CategoryItem;