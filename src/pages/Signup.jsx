import React, { useRef } from "react";
import { Link } from "react-router-dom";


import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";



const Signup = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <CommonSection></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="m-auto text-center">
                            <h2>Sign Up</h2>
                            <p>
                                Sign Up to our website by filling the given details
                            </p>
                            <div className="contact mt-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="form__input ">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="password"
                                            placeholder="Type a password"
                                            ref={emailRef}
                                        />
                                    </div>


                                    <button
                                        className="send__btn"
                                        style={{
                                            border: "none",
                                            padding: "7px 25px",
                                            borderRadius: "5px",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <Link to="/login">SIGN UP</Link>
                                    </button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Signup;
