import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";



const Login = () => {
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
                            <h2>Log in</h2>
                            <p>
                                By continuing, you agree to our User Agreement and Privacy Policy.
                            </p>
                            <div className="contact mt-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="form__input ">
                                        <input
                                            type="text"
                                            placeholder="Enter your username or password"
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="password"
                                            placeholder="password"
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
                                        <Link to="/home">LOG IN</Link>
                                    </button>
                                    <p>Not an user already? <Link to="/signup">Sign Up</Link></p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;
