
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import BlogDiv from "./Components/BlogDiv";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const Description = () => {
    const navigate = useNavigate();
    const FeaturedText = () => {
        return (<div>
            <h6>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
            </h6>
            <div className='d-flex justify-content-between'>
                <p style={{ color: "#828282" }}>4 Oct,2022 </p>
                <p style={{ color: "#F6911E" }}>Read More </p>
            </div>
        </div>
        )
    }
    return (
        <section className='Handover_blogpage_description'>
            {/* ---------------------------Header--------------------------- */}
            <Header />
            <Container>
                <div className="row mt-5 p-0">
                    <div className="d-flex align-items-center gap-2 my-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/blogs")}>
                        <img src="./back_arrow.png" alt="Back Arrow" />
                        <p className="p-0 m-0">Back</p>
                    </div>
                    <div className="col-md-8 col-12">
                        <BlogDiv />
                        <div className="mt-5">
                            <p style={{ fontWeight: "300", textAlign: "justify" }}>In this Java web application tutorial I'll show you how to create
                                dynamic websites using the core technologies of Java web programming.
                                If you want to create your own interactive websites, if you know some
                                Java and you want to take your skills to the next level, or if you want
                                hot skills for the job marketplace, this Java web application tutorial
                                course is for you..#devents&rlz=1C1ONGR_enIN1010IN1010&oqfdfd
                            </p>
                            <p style={{ fontWeight: "300", textAlign: "justify" }}>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making
                                it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).


                            </p>

                            <p style={{ fontWeight: "300", textAlign: "justify" }}>In this Java web application tutorial I'll show you how to create
                                dynamic websites using the core technologies of Java web programming.
                                If you want to create your own interactive websites, if you know some
                                Java and you want to take your skills to the next level, or if you want
                                hot skills for the job marketplace, this Java web application tutorial
                                course is for you..#devents&rlz=1C1ONGR_enIN1010IN1010&oqfdfd
                            </p>
                            <p style={{ fontWeight: "300", textAlign: "justify" }}>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making
                                it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).


                            </p>

                            <p style={{ fontWeight: "300", textAlign: "justify" }}>In this Java web application tutorial I'll show you how to create
                                dynamic websites using the core technologies of Java web programming.
                                If you want to create your own interactive websites, if you know some
                                Java and you want to take your skills to the next level, or if you want
                                hot skills for the job marketplace, this Java web application tutorial
                                course is for you..#devents&rlz=1C1ONGR_enIN1010IN1010&oqfdfd
                            </p>
                            <p style={{ fontWeight: "300", textAlign: "justify" }}>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making
                                it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).


                            </p>

                            <p style={{ fontWeight: "300", textAlign: "justify" }}>In this Java web application tutorial I'll show you how to create
                                dynamic websites using the core technologies of Java web programming.
                                If you want to create your own interactive websites, if you know some
                                Java and you want to take your skills to the next level, or if you want
                                hot skills for the job marketplace, this Java web application tutorial
                                course is for you..#devents&rlz=1C1ONGR_enIN1010IN1010&oqfdfd
                            </p>
                            <p style={{ fontWeight: "300", textAlign: "justify" }}>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making
                                it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).


                            </p>
                        </div>

                        <div className="py-5">
                            <h4 className="my-3">MORE FOR YOU TO READ</h4>
                            <div className="d-flex gap-1 flex-wrap row w-100 ">
                                {[1, 2].map((item) => {
                                    return (<div className="col-md-4 col-12">
                                        <BlogDiv key={item} />
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-0">
                        <div className="p-3" style={{
                            background: "#F5F5F5"
                        }}>
                            <h5 className="mb-5">Featured</h5>
                            <div className="d-flex flex-column gap-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                                    return (<>
                                        <FeaturedText key={item} />
                                        {item !== 10 && <hr className="separator" />}
                                    </>)

                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

            <Footer />
        </section >
    )
}
export default Description;