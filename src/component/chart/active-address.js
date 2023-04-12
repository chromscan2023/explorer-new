import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../coreFiles/config';
import Header from '../../directives/header';
import Footer from '../../directives/footer';

const Activeaddress = () => {


    useEffect(() => {



    }, []);


    return (
        <>

            <div className="wrapper">

                <Header />
                <div>
                    <main id="content" role="main">
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center border-bottom py-3">
                                <div className="mb-1 mb-md-0">
                                    <h1 className="h4 mb-0"><span className="d-block">Active chromescan Chain Addresses</span></h1>
                                </div>
                                <nav id="ContentPlaceHolder1_breadcrumb" aria-label="breadcrumb">
                                    <ol className="breadcrumb small p-0 mb-0">
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);">Charts &amp;  Stats</a></li>
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);" id="ContentPlaceHolder1_aChartRegion">Blockchain Data</a></li>
                                        <li className="breadcrumb-item active">Daily Active chromescan Chain Address</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card mt-3 mb-4">
                                <div className="card-body"><span>The Active chromescan Chain Address chart shows the daily number of unique addresses that were active on the network as a sender or receiver.</span></div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 text-center">
                                            <p className="mt-2 mb-2"><i className="fa fa-lightbulb mr-2" /> Lowest number of  <b>4,945</b>  addresses on Wednesday, November 10, 2021</p>
                                            <hr className="d-block d-md-none hr-space-lg" />
                                        </div>
                                        <div className="col-md-6 text-center u-ver-divider u-ver-divider--left u-ver-divider--none-md">
                                            <p className="mt-2 mb-2"><i className="fa fa-lightbulb mr-2" /> Highest number of  <b>60,959</b>  addresses on Wednesday, April 6, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body space-bottom-1">
                                    <div className="content" id="containerchart" style={{ "height": "550px", "min-width": "310px" }} />
                                </div>
                            </div>
                            <div className="my-4 text-right">Download: <a href="JavaScript:void(0);">CSV Data</a> (Attribution Required) &nbsp;&nbsp;&nbsp;</div>
                            <br />
                        </div>
                    </main>
                    <div id="push" />
                    <div className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" id="emailSubscribeModalBox" aria-hidden="true">
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="text-center py-5-alt px-4">
                                        <div id="emailSubscribeModalBoxText" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />


        </>

    )

}

export default Activeaddress;