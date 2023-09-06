const BlogDiv = () => {
    return (<div className='handover-shadow-div' style={{
        maxWidth: "750px",
        position: "relative"
    }}>
        <div>
            <img src="./scooty1.png" alt="blogDiv" width="100%" />
        </div>
        <div className='p-4'>
            <div className='d-flex justify-content-between'>
                <p>It is a long established fact that a reader will be<br />
                    distracted by the readable content of a page .</p>
                <p style={{ color: "#828282" }}>oct 4, 2022</p>
            </div>
            <p style={{ color: "#F6911E" }}>Read More
            </p>
        </div>
        <div style={{
            backgroundImage: `url("./blog_rectangle.png")`,
            backgroundSize: 'cover',
            width: "120px",
            height: "30px",
            color: "#ffffff",
            padding: "5px",
            position: "absolute",
            bottom: "250px"
        }}>
            Heading 1
        </div>
    </div>)
}

export default BlogDiv;