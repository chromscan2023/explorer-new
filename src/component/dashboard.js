import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : "{}"

    useEffect(() => {



    }, []);

console.log('user',user)
    return (
        <>
            <div className="wrapper">

                <Header />

                <section>
                    <div className="row py-4 mx-4 ">
                        <div className="slot my-2 d-sm-flex justify-content-between">
                            <div className="profile-nav d-flex">
                                <div className="dash mx-2">
                                    <span className="mx-1">
                                        {/* <FontAwesomeIcon icon={faHouse} /> */}
                                    </span>

                                    <a href="" className="purple-text">My Dashboard </a>
                                </div>
                                <div className="watch mx-2">
                                    <span className="mx-1">
                                        {/* <FontAwesomeIcon icon={faEye} /> */}
                                    </span>
                                    <a href="" >Watchlist</a>
                                </div>
                                <div className="profile mx-2">
                                    <span className="mx-1">
                                        {/* <FontAwesomeIcon icon={faUser} /> */}
                                    </span>
                                    <a href="" className="purple-text">My Profile</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>

                    <div className="row py-4 me-5">
                        <div className="col-12 mx-4 d-flex align-items-center ">
                            <div className="overview-tab text-white mx-2">
                                <a href="">
                                    <span className="mx-1">
                                        <i className="fa-sharp fa-solid fa-house text-white"></i>
                                    </span>
                                    <span className="text-white"> Overview </span>
                                </a>
                            </div>

                            <div className="acc-settings mx-2">
                                <a href="">
                                    <span className="mx-1">
                                        <i className="fa-solid fa-user-gear"></i>
                                    </span>
                                    <span>Account Settings </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-4" style={{ background: "#FFFFFF", border: "1px solid #E9E9E9", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.06)", borderRadius: "10px" }}>

                        <div className="col-12 d-flex justify-content-between my-3 px-4  flex-column">
                            <div className="account-head">
                                <h4 className="gold-text fw-6">
                                    Account Overview
                                </h4>
                                <p>
                                    Below are the username, email and overview information for your account.
                                </p>
                            </div>

                            <div className="acc-details">

                                <div className="details-div d-flex justify-content-between py-2" style={{ borderBottom: "1px solid lightgrey" }}>
                                    <div className="col-3">
                                        <span>
                                            <i className="fa-regular fa-circle-user"></i>
                                        </span>
                                        Your username:
                                    </div>
                                    <div className="col-8 fw-6">
                                        {user.user}
                                    </div>
                                </div>

                            </div>

                            <div className="acc-details">

                                <div className="details-div d-flex justify-content-between py-2" style={{ borderBottom: "1px solid lightgrey" }}>
                                    <div className="col-3 ">
                                        <span>
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        Your Email Address:
                                    </div>
                                    <div className="col-8 d-flex justify-content-between fw-6">
                                        {user.email}

                                        <i className="fa-solid fa-pen"></i>
                                    </div>
                                </div>

                            </div>

                            <div className="acc-details">

                                <div className="details-div d-flex justify-content-between py-2" style={{ borderBottom: "1px solid lightgrey" }}>
                                    <div className="col-3">
                                        <span>
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        Address Watch List:
                                    </div>
                                    <div className="col-8 d-flex justify-content-between">

                                        0 Address Alert(s)

                                        <i className="fa-solid fa-pen"></i>
                                    </div>
                                </div>

                            </div>

                            <div className="acc-details">

                                <div className="details-div d-flex justify-content-between py-2" style={{ borderBottom: "1px solid lightgrey" }}>
                                    <div className="col-3">
                                        <span>
                                            <i className="fa-regular fa-bell"></i>
                                        </span>
                                        Email Notification Limit:
                                    </div>
                                    <div className="col-8 d-flex justify-content-between">
                                        0 emails sent out 100 daily limit available emails sent out

                                        <span className="email-alerts">

                                            0 Address Alert(s)

                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="acc-details">

                                <div className="details-div d-flex justify-content-between py-2">
                                    <div className="col-3">
                                        <span>
                                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                        </span>
                                        Last Login:
                                    </div>
                                    <div className="col-8">
                                        <i className="bi bi-clock"></i>
                                        {user.timestamp}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/**<Footer />*/}
                {/* <Footerv2 /> */}

            </div>
            <Footer />
        </>

    )

}


export default Dashboard;