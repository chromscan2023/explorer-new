import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../coreFiles/config';
import Header from '../../directives/header';
import Footer from '../../directives/footer';

const Miner = () => {


    useEffect(() => {



    }, []);


    return (
        <>

            <div className="wrapper">

                <Header />
                <div>
                    <main id="content" role="main">
                        <input type="hidden" name="hdnAgeText" id="hdnAgeText" defaultValue="Age" />
                        <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" defaultValue="Date Time (UTC)" />
                        <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" defaultValue="Click to show Age Format" />
                        <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" defaultValue="Click to show Datetime Format" />
                        <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" defaultValue="Gas Price in Gwei" />
                        <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" defaultValue="(Gas Price * Gas Used by Txns) in CRO" />
                        <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" defaultValue="Gas Price" />
                        <input type="hidden" name="hdnTxnText" id="hdnTxnText" defaultValue="Txn Fee" />
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center border-bottom py-3">
                                <div className="mb-1 mb-md-0">
                                    <h1 className="h4 mb-0">Top 25 Validators by Blocks</h1>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb small p-0 mb-0">
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);">Charts &amp;  Stats</a></li>
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);">Top Statistics</a></li>
                                        <li className="breadcrumb-item active">Top 25 Validators by Blocks</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container space-bottom-2 mt-3">
                            <div className="card mt-3 mb-4">
                                <div className="card-body"><span>Top 25 Validators by Blocks breakdown the top 25 miner by the number of blocks each validator validated and the percentage validated on the Chromescan network. The chart can be viewed in last 24 hours,  last 7 days and last 14 days. </span></div>
                            </div>
                            <form method="post" action="#">
                                <div className="d-flex align-items-center text-secondary mb-2">
                                    <i className="fa fa-filter mr-1" />
                                    Range: &nbsp;
                                    <select name="ctl00$ContentPlaceHolder1$ddlRangeSelect" className="custom-select custom-select-xs mx-2">
                                        <option value={1}>Last 24 Hours</option>
                                        <option selected="selected" value={7}>Last 7 Days</option>
                                        <option value={14}>Last 14 Days</option>
                                    </select>
                                </div>
                            </form>
                            <div className="card">
                                <div className="card-body">
                                    <div id="ContentPlaceHolder1_chartdiv" className="col-md-12 mb-3" style={{ "padding": "0px", "margin": "0px" }}>
                                        <div id="container" className="mb-2 h-25" />
                                    </div>
                                    <div className="d-md-flex justify-content-between align-items-center mb-4">
                                        <p className="mb-2 mb-md-0"><i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ "display": "none" }} />(A total of 114,847 blocks Validated By 27 Validators in the last 7 days)</p>
                                        <ul className="pagination pagination-sm mb-0">
                                            <li className="page-item disabled"><a href="JavaScript:void(0);" id="ContentPlaceHolder1_pageLinkFirst" className="page-link" aria-label="First">First</a></li>
                                            <li className="page-item disabled"><span className="page-link">Page <b>1</b> of <b>2</b></span></li>
                                            <li className="page-item"><a href="JavaScript:void(0);" id="ContentPlaceHolder1_pageLinkNext" className="page-link" aria-label="Next"><i className="fa fa-chevron-right small" /><span className="sr-only">Next</span></a></li>
                                            <li className="page-item"><a href="JavaScript:void(0);" id="ContentPlaceHolder1_pageLinkLast" className="page-link">Last<span className="sr-only">Last</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="table-responsive mb-2 mb-md-0">
                                            <table className="table table-hover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Rank</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Blocks Validated</th>
                                                        <th scope="col">Percentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td><a href={`${config.baseUrl}`}>0x27da67fe85ae7971bd5fe1d6e442b5dc0ad7b086</a></td>
                                                        <td><a href={`${config.baseUrl}`}>23,283</a></td>
                                                        <td>20.2731%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Miner;