import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../coreFiles/config';
import Header from '../../../directives/header';
import Footer from '../../../directives/footer';

const Salemfinance = () => {


    useEffect(() => {



    }, []);


    return (
        <>

            <div className="wrapper">

                <Header />
                <div>
                    <main id="content" role="main">
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center py-3">
                                <div className="mb-1 mb-md-0">
                                    <h1 className="h4 font-weight-normal mb-0">
                                        Accounts&nbsp;<span className="small text-secondary">Salem Finance</span>
                                    </h1>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb small p-0 mb-0">
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);"><i className="fa fa-cloud" /> Label Cloud</a></li>
                                        <li className="breadcrumb-item active">Salem Finance</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="border-top" />
                        </div>
                        <div className="container space-bottom-2">
                            <div className="card mb-3">
                                <div className="card-body"><span><a href="JavaScript:void(0);">Salem Finance</a> is a Yield Farming Protocol currently on the Fantom and CCC Network. The final goal is to end up being an exchange where you'll be able to swap, enter NTFs auctions and obtain gas for expeditions in other networks.</span></div>
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
                                            <div className="table-responsive mb-2 mb-md-0 " id="paywall_mask_table-subcatid-0">
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
                                                            <td><span style={{ "white-space": "nowrap" }}><i data-toggle="tooltip" title="Contract" className="far fa-file-alt text-secondary mr-1" /><a href="JavaScript:void(0);">0xbd124d3b18a382d807a9e491c7f1848403856b08</a></span></td>
                                                            <td>Salem Finance: MasterChef</td>
                                                            <td>0 CCC</td>
                                                            <td>11,115</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td><span style={{ "white-space": "nowrap" }}><i data-toggle="tooltip" title="Contract" className="far fa-file-alt text-secondary mr-1" /><a href="JavaScript:void(0);">0x6978e9053e350e8dea6f929d04995e1c61903ab4</a></span></td>
                                                            <td>Salem Finance: Timelock</td>
                                                            <td>0 CCC</td>
                                                            <td>4</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <form method="post" action="#" id="ctl00">
                                    </form>
                                </div>
                            </div>
                            <div className="text-right text-secondary px-3 mt-3"><span>Note : Labels source attribution required if used externally</span></div>
                        </div>
                        <input type="hidden" id="hdnLabelFilter" defaultValue="salem-finance" />
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

export default Salemfinance;