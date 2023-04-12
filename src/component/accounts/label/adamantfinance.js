import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../coreFiles/config';
import Header from '../../../directives/header';
import Footer from '../../../directives/footer';

const Adamantfinance = () => {


    useEffect(() => {



    }, []);


    return (
        <>

            <div className="wrapper">

                <Header />
                <main id="content" role="main">
                    <div className="container">
                        <div className="d-md-flex justify-content-between align-items-center py-3">
                            <div className="mb-1 mb-md-0">
                                <h1 className="h4 font-weight-normal mb-0">
                                    Accounts&nbsp;<span className="small text-secondary">Adamant Finance</span>
                                </h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb small p-0 mb-0">
                                    <li className="breadcrumb-item"><a href="JavaScript:void(0);"><i className="fa fa-cloud" /> Label Cloud</a></li>
                                    <li className="breadcrumb-item active">Adamant Finance</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="border-top" />
                    </div>
                    <div className="container space-bottom-2">
                        <div className="card mb-3">
                            <div className="card-body"><span><a href="#">Adamant Finance</a> is a non-custodial yield optimizer platform that provides users with an easy and safe way to maximize their yield farming income.</span></div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div id="ContentPlaceHolder1_topPageDiv" className="d-md-flex justify-content-between">
                                    <p className="mb-2 mb-md-0">
                                        <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ "display": "none" }} />
                                    </p>
                                    <nav aria-label="page navigation">
                                    </nav>
                                </div>
                                <div className="tab-content" id="tabContent">
                                    <div className="tab-pane fade show active" id="subcattab-0" role="tabpanel" aria-labelledby="0-tab">
                                        <div className="table-responsive mb-2 mb-md-0 paywall-mask" id="paywall_mask_table-subcatid-0">
                                            <table className="table table-hover" style={{ "width": "100%" }} id="table-subcatid-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" width={370}>Address</th>
                                                        <th className="remove-icon" scope="col">Name Tag</th>
                                                        <th scope="col"> Balance</th>
                                                        <th scope="col"> Txn Count</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd">
                                                        <td><span style={{ "white-space": "nowrap" }}><i data-toggle="tooltip" title="Contract" className="far fa-file-alt text-secondary mr-1" /><a href="JavaScript:void(0);">0xd6b3c3607b9b645f540e09c94094beb22cadabc1</a></span></td>
                                                        <td>Adamant Finance: Airdrop Timelock</td>
                                                        <td>0 CCC</td>
                                                        <td>3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="signInPopUp_table-subcatid-0" className="tab-pane fade show active row justify-content-center align-items-center">
                                            <div className="col d-none d-lg-block"><img className="img-fluid mx-4" src="././images/svg/bg/bg1-left-side26e8.svg" alt /></div>
                                            <div className="col-10 col-sm-8 col-lg-7 col-xl-5">
                                                <div className="text-center py-5 my-5-alt">
                                                    <h4 className="font-weight-bold">Sign In for Continued Access</h4>
                                                    <p className="h5 text-secondary mb-4">No worries, it's absolutely <strong>free</strong> and takes a minute! <br className="-none d-md-inline-block" />Register a <a className="text-primary" href="JavaScript:void(0);">Free Account</a> today.</p>
                                                    <div className="mb-3"><a className="btn btn-primary transition-3d-hover text-nowrap text-uppercase px-4 py-2" href="../../login.html">Sign In</a></div>
                                                </div>
                                            </div>
                                            <div className="col d-none d-lg-block"><img className="img-fluid mx-4" src="././images/svg/bg/bg1-right-side26e8.svg" alt /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right text-secondary px-3 mt-3"><span>Note : Labels source attribution required if used externally</span></div>
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
            <Footer />


        </>

    )

}

export default Adamantfinance;