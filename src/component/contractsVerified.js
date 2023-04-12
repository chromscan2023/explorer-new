import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Contractsverified = () => {


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
                <h1 className="h4 mb-0">
                  Top Accounts by CCC Balance  &nbsp;<span className="small text-secondary" />
                  <p className="mb-0 text-break small">
                  </p>
                </h1>
              </div>
            </div>
          </div>
          <div className="container space-bottom-2">
            <span id="ContentPlaceHolder1_lblAdResult" />
            <div id="ContentPlaceHolder1_mainrow" className="card">
              <div className="card-body">
                {/* Reset Filters */}
                <div className="d-flex flex-wrap flex-xl-nowrap text-nowrap align-items-center ml-auto">
                </div>
                {/* End Reset Filters */}
                <div id="ContentPlaceHolder1_topPageDiv" className="d-md-flex justify-content-between mb-4">
                  <p className="mb-2 mb-md-0">
                    <span className="d-flex align-items-center">
                      <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ "display": "none" }} />
                      More than &gt; 71,115,461 transactions found</span><span className="d-block small">(Showing the last 500k records)</span>
                  </p>
                  {/* Pagination */}
                  <nav aria-label="page navigation">
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled"><span className="page-link">First</span></li>
                      <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                      <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">10000</strong></span></li>
                      <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href={`${config.baseUrl}txs`} aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                      <li className="page-item"><a className="page-link" href={`${config.baseUrl}txs`}><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                    </ul></nav>
                  {/* End Pagination */}
                </div>
                <div className="table-responsive mb-2 mb-md-0" id="paywall_mask">
                  <table className="table table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" width={1}>Address</th>
                        <th scope="col">Contract Name</th>
                        <th scope="col">Compiler</th>
                        <th scope="col">Version</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Txns</th>
                        <th scope="col">Setting</th>
                        <th scope="col">Verified</th>
                        <th scope="col">Audited <span data-toggle="tooltip" title="Smart Contracts Audit and Security" size={2}><i className="far fa-info-circle" /></span></th>
                        <th scope="col">License <a href={`${config.baseUrl}busy`} target="_blank" data-toggle="tooltip" title="Contract Source Code License Type, click for more info"><i className="far fa-info-circle" /></a></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span data-toggle="tooltip" title="Verified Code" size={2}><i className="fas fa-check-circle text-success" /></span> <a data-toggle="tooltip" title="0xdfee2128e3d441078dc286171f27f612b35fd7bd" href="busy#code" className="hash-tag text-truncate">0xdfee2128e3d441078dc286171f27f612b35fd7bd</a></td>
                        <td>YlideMailerV8</td>
                        <td>Solidity</td>
                        <td>0.8.17</td>
                        <td>0 CCC</td>
                        <td>1</td>
                        <td>-</td>
                        <td>3/30/2023</td>
                        <td>-</td>
                        <td>MIT</td>
                      </tr>
                      <tr>
                        <td><span data-toggle="tooltip" title="Verified Code" size={2}><i className="fas fa-check-circle text-success" /></span> <a data-toggle="tooltip" title="0x44cc60A1A81C1E64DE3c8be3Aa45a1E51ACfd5Eb" href="busy#code" className="hash-tag text-truncate">0x44cc60A1A81C1E64DE3c8be3Aa45a1E51ACfd5Eb</a></td>
                        <td>CverseAssets</td>
                        <td>Solidity(Json)</td>
                        <td><span data-boundary="viewport" data-toggle="tooltip" title="5 known solidity compiler vulnerabilities exists for this compiler version"><i className="fa fa-exclamation-triangle text-warning" /></span> 0.8.4</td>
                        <td>0 CCC</td>
                        <td>1</td>
                        <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle="tooltip" title="Optimization Enabled"><i className="fas fa-bolt btn-icon__inner" /></span> </td>
                        <td>3/30/2023</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="signInPopUp" className="row justify-content-center align-items-center" style={{ "display": "none" }}>
                  <div className="col d-none d-lg-block">
                    <img className="img-fluid mx-4" src="images/svg/bg/bg1-left-side26e8.svg?v=20.4.3.0" alt />
                  </div>
                  <div className="col-10 col-sm-8 col-lg-7 col-xl-5">
                    <div className="text-center py-5 my-5-alt">
                      <h4 className="font-weight-bold">Sign In for Continued Access</h4>
                      <p className="h5 text-secondary mb-4">
                        No worries, it's absolutely <strong>free</strong> and takes a minute!
                        <br className="-none d-md-inline-block" />
                        Register a <a className="text-primary" href={`${config.baseUrl}busy`}>Free Account</a> today.
                      </p>
                      <div className="mb-3">
                        <a className="btn btn-primary transition-3d-hover text-nowrap text-uppercase px-4 py-2" href={`${config.baseUrl}login`}>Sign In</a>
                      </div>
                    </div>
                  </div>
                  <div className="col d-none d-lg-block">
                    <img className="img-fluid mx-4" src="images/svg/bg/bg1-right-side26e8.svg?v=20.4.3.0" alt />
                  </div>
                </div>
                <div id="ContentPlaceHolder1_pageRecords">
                  <form method="post" action="https://chromescan.com/txs" id="ctl00">
                    <div className="d-md-flex justify-content-between my-3">
                      <div className="d-flex align-items-center text-secondary mb-2 mb-md-0">
                        Show
                        <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" id="ContentPlaceHolder1_ddlRecordsPerPage" className="custom-select custom-select-xs mx-2">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option selected="selected" value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                        Records
                      </div>
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">First</span></li>
                        <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                        <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">10000</strong></span></li>
                        <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                        <li className="page-item"><a className="page-link" href="#"><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                      </ul></div>
                  </form>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
                  <div className="d-flex align-items-center text-secondary" />
                  <div className="small text-muted">
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

      <Footer />


    </>

  )

}


export default Contractsverified;