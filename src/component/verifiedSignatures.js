import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const VerifiedSignatures = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <div>
            <main id="content" role="main">
              <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
              <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" value="Date Time (UTC)" />
              <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" value="Click to show Age Format" />
              <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" value="Click to show Datetime Format" />
              <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" value="Gas Price in Gwei" />
              <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in CCC" />
              <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
              <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
              <section id="wave-bg" className="bg-dark" style={{ "background-image": "url(images/svg/components/abstract-shapes-20ee2f.svg?v=0.2.0)" }}>
                <div className="container space-top-1 space-bottom-2">
                  <div className="row justify-content-between align-items-center mb-5-alt">
                    <div className="col-md-12 col-lg-5 text-center text-lg-left">
                      <h1 className="h4 d-flex justify-content-center justify-content-lg-start align-items-center text-white mb-1">
                        <span className="mr-2">Verified Signatures</span>
                        <span className="d-none d-lg-inline-block-alt small mr-2">✍️</span>
                      </h1>
                      <p className="text-white-70 mb-3 mb-lg-0">View, sign and verify message signatures using a chromescan address.</p>
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-right">
                      <a id="btnAddSignature" className="btn btn-sm btn-light font-size-base mr-1" href="#" title="Generate a new message signature.">
                        <i className="fas fa-file-signature mr-1" />Sign Message
                      </a>
                      <a id="btnVerifySignature" className="btn btn-sm btn-light font-size-base" href="#" title="Verify a new message signature.">
                        <i className="fas fa-file-check mr-1" />Verify Signature
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container space-bottom-2 mt-n6">
                <div className="card mb-5-alt">
                  <div className="card-header d-md-flex justify-content-between align-items-center">
                    <div className="mb-1 mb-md-0">
                      <h2 className="card-header-title">Published Verified Signatures</h2>
                    </div>
                    <div className="d-flex ml-auto">
                      <div className="position-relative order-1 order-md-2">
                        <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scccll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                          <i className="fa fa-search btn-icon__inner" />
                        </a>
                        <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{ "width": "325px" }}>
                          <form action="#" method="get" autoComplete="off" spellCheck="false" className="js-focus-state input-group input-group-sm w-100">
                            <input id="searchAddress" className="form-control" name="q" type="search" defaultValue placeholder="Search by Address or ID" onkeyup="handleTokenSearch(this);" />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-primary" data-toggle="tooltip">Find</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card Header */}
                  <div className="card-body">
                    <div className="tab-content" id="tabContent">
                      <div id="verifiedSignatures" className="tab-pane active" role="tabpanel" aria-labelledby="verifiedSignaturesTab">
                        <div id="ContentPlaceHolder1_divTopPagination" className="d-md-flex justify-content-between align-items-center mb-3">
                          <p className="mb-md-0">
                            <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ "display": "none" }} />
                            A total of 100 Verified Signatures found
                          </p>
                          <nav className="mb-4 mb-md-0" aria-label="page navigation">
                            <ul className="pagination pagination-sm mb-0">
                              <li className="page-item disabled"><span className="page-link">First</span></li>
                              <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                              <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">2</strong></span></li>
                              <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href={`${config.baseUrl}verifiedSignatures`} aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                              <li className="page-item"><a className="page-link" href="verifiedSignatures.html?p=2"><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                            </ul></nav>
                        </div>
                        <div id="ContentPlaceHolder1_divTableResult" className="table-responsive mb-3">
                          <table id="mytable" className="table table-align-middle table-hover">
                            <thead className="thead-light">
                              <tr>
                                <th scope="col" width={20}>ID</th>
                                <th scope="col">
                                  <a href="javascript:;" onclick="switchAgeToDateTime(this)" id="lnkAgeDateTime">Age</a>
                                </th>
                                <th scope="col" width={350}>Address</th>
                                <th scope="col">Message</th>
                                <th scope="col" width={20}>Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#100</td>
                                <td className="showDate " style={{ "display": "none !important" }}><span rel="tooltip" data-toggle="tooltip" data-placement="bottom" title="1 day 5 hrs ago">2023-03-29 6:43:07</span></td>
                                <td style={{}} className="showAge "><span rel="tooltip" data-toggle="tooltip" data-placement="bottom" title="2023-03-29 6:43:07">1 day 5 hrs ago</span></td>
                                <td>
                                  <a href={`${config.baseUrl}address`} data-toggle="tooltip" data-boundary="viewport" data-html="true" title="0x466cdbde82c6bd1b51c972127e7fe232814418e5">
                                    <span className="hash-tag text-truncate">0x466cdbde82c6bd1b51c972127e7fe232814418e5</span>
                                  </a>
                                </td>
                                <td>
                                  <span className="hash-tag hash-tag--xl text-truncate" data-toggle="tooltip" data-boundary="viewport" data-html="false" data-placement="top" title="345709asdfjh457ah5">345709asdfjh457ah5</span>
                                </td>
                                <td>
                                  <a className="btn btn-xs btn-soft-secondary" href="#">
                                    View Signature <i className="far fa-chevron-right small ml-1" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div id="ContentPlaceHolder1_pageRecords">
                          <form method="post" action="#" id="ctl00">
                            <div className="aspNetHidden">
                              <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" defaultValue />
                              <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" defaultValue />
                              <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" defaultValue />
                              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" defaultValue />
                            </div>
                            <div className="aspNetHidden">
                              <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="EEB59793" />
                              <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="KdV3TCn534883ccAEEvx/ziY2mDExzXy3CdJLSR2hKQwokvF4RtpnK5grb8LZ3vshF5lt+1p1joRAK26yMDDSZUadoPu7sn9hp92I6PrNd6tJSAr6PN3hZhpsSk+AORPJSDP7fQVsatQyHQsuROijNPOL9ce3KVrBThyk8Nzd1banOHazNKTvOv6F1dMrYzA1q85meK/wHe5HmLBYfHhFg==" />
                            </div>
                            <div className="d-md-flex justify-content-between align-items-center mb-3">
                              <div className="d-flex align-items-center text-secondary mb-3 mb-md-0">
                                Show
                                <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddlRecordsPerPage\',\'\')', 0)" id="ContentPlaceHolder1_ddlRecordsPerPage" className="custom-select custom-select-xs mx-2">
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option selected="selected" value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>
                                Records
                              </div>
                              <nav className="mb-4 mb-md-0" aria-label="page navigation">
                                <ul className="pagination pagination-sm mb-0">
                                  <li className="page-item disabled"><span className="page-link">First</span></li>
                                  <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                                  <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">2</strong></span></li>
                                  <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href="verifiedSignatures.html?p=2" aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                                  <li className="page-item"><a className="page-link" href="verifiedSignatures.html?p=2"><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                                </ul></nav>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step-1.Modal: Connect Wallet */}
              <div className="modal fade" id="connectWalletModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark">Connect a Wallet</h5>
                      <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <button type="button" value="metamask" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center" data-dismiss="modal">
                        <span className="text-dark">MetaMask</span>
                        <img width={25} src="images/svg/brands/metamask.svg" alt />
                      </button>
                      <button type="button" value="walletconnect" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center" data-dismiss="modal">
                        <span className="text-dark">WalletConnect</span>
                        <img width={25} src="images/svg/brands/walletconnect.svg" alt />
                      </button>
                      <button type="button" value="defiwallet" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center defi-icon" data-dismiss="modal">
                        <span className="text-dark">DeFi Wallet</span>
                        <img src="images/defi-wallet-logo.png" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal: Connect Wallet */}
              <div className="modal fade" id="signMessageModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark">Sign Message</h5>
                      <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group mb-4">
                        <label htmlFor="addressInput">Address</label>
                        <input type="text" className="form-control" id="addressInput" readOnly />
                        <div className="font-size-1 text-secondary mt-2">
                          The above address is connected to your Web3 wallet.
                        </div>
                      </div>
                      <div className="js-form-message form-group">
                        <label className="d-flex justify-content-between align-items-center" htmlFor="txtRawMessage">
                          Message To Sign
                        </label>
                        <textarea id="txtRawMessage" className="form-control form-control-sm" name="txtRawMessage" rows={3} cols={20} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Enter your message here..." defaultValue={""} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a className="btn btn-sm btn-white font-size-base mr-2" data-dismiss="modal" href="javascript:;">Cancel</a>
                      <button type="button" id="btnSignMessage" className="btn btn-sm btn-primary font-size-base">Sign Message</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step-3 Modal: Publish Signed Message */}
              <div className="modal fade" id="signMessageExtendedModal" tabIndex={-1} aria-labelledby="signMessageExtendedModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark" id="signMessageExtendedModalLabel">Publish Signed Message</h5>
                      <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="alert alert-success d-flex align-items-baseline" role="alert">
                        <i className="far fa-check-circle mr-2" />Message has been successfully signed.
                      </div>
                      <div id="publishSignedMessageError" />
                      <div id="toPublishSignedMessage" className="alert alert-secondary d-flex align-items-baseline mt-n2" role="alert">
                        <i className="far fa-info-circle mr-2" />
                        <span>You may publish the Signed Message on <label style={{ "-webkit-text-transform": "capitalize", "text-transform": "capitalize" }}> chromescancan</label> by clicking "<strong>Publish</strong>" button below to continue. The Signed Message will then be accessible via a public URL.</span>
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtSignedAddress">
                          Address
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy address to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtSignedAddress" data-class-change-target="#spanCopySignedAddressIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopySignedAddressIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <input type="text" className="form-control" id="txtSignedAddress" name="txtSignedAddress" readOnly />
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtSignedMessage">
                          Signed Message
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy message to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtSignedMessage" data-class-change-target="#spanCopySignedMessageIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopySignedMessageIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <textarea className="form-control" id="txtSignedMessage" name="txtSignedMessage" rows={3} readOnly defaultValue={""} />
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtSignedMessageHash">
                          Signature Hash
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy message hash to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtSignedMessageHash" data-class-change-target="#spanCopySignedMessageHashIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopySignedMessageHashIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <textarea className="form-control" id="txtSignedMessageHash" name="txtSignedMessageHash" rows={3} readOnly defaultValue={""} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a className="btn btn-sm btn-white font-size-base mr-2" data-dismiss="modal" href="javascript:;">Close</a>
                      <button type="button" id="btnPublishSignedMessage" className="btn btn-sm btn-primary font-size-base">Publish</button>
                      <a id="btnViewDuplicatedSignature" className="btn btn-sm btn-primary font-size-base d-none" href="#">View Signature</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal: Publish Signed Message */}
              <div className="modal fade" id="verifySignatureModal" tabIndex={-1} role="dialog" aria-labelledby="verifySignatureModalLabel">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark" id="verifySignatureModalLabel">Verify Signature</h5>
                      <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <form id="verifySignatureForm" className="js-validate" action="#">
                      <div className="modal-body">
                        <div id="verifyError" />
                        <div className="js-form-message form-group mb-4">
                          <label htmlFor="txtVerifyAddress">Address</label>
                          <div className="js-focus-state">
                            <input type="text" id="txtVerifyAddress" className="form-control" maxLength={42} required="required" name="txtVerifyAddress" data-msg="Address is required" data-error-class="u-has-error" data-success-class="u-has-success" data-rule-minlength={40} data-rule-maxlength={42} data-msg-minlength="Invalid Length" placeholder="0x..." />
                          </div>
                        </div>
                        <div className="js-form-message form-group mb-4">
                          <label htmlFor="txtVerifyMessage">Message</label>
                          <div className="js-focus-state">
                            <textarea name="txtVerifyMessage" id="txtVerifyMessage" className="form-control input-group input-group-sm mb-2" required="required" rows={3} maxLength={60000} data-msg="Required" data-error-class="u-has-error" data-success-class="u-has-success" defaultValue={""} />
                          </div>
                        </div>
                        <div className="js-form-message form-group mb-4">
                          <label htmlFor="txtVerifyMessageHash">Signature Hash</label>
                          <div className="js-focus-state">
                            <input type="text" name="txtVerifyMessageHash" id="txtVerifyMessageHash" className="form-control" required="required" maxLength={133} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" data-msg="Signature is required" data-error-class="u-has-error" data-success-class="u-has-success" data-rule-minlength={132} data-rule-maxlength={133} data-msg-minlength="Invalid Length" />
                          </div>
                        </div>
                        <label>Options</label>
                        <div className="custom-control custom-radio mb-2">
                          <input type="radio" id="clientOnly" name="saveOption" className="custom-control-input" defaultChecked />
                          <label className="custom-control-label" htmlFor="clientOnly">Client-side verification only (not shared publicly)</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="verifyAndPublish" name="saveOption" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="verifyAndPublish">Verify &amp; publish (will then be accessible via a public URL)</label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a className="btn btn-sm btn-white font-size-base mr-2" data-dismiss="modal" href="javascript:;" formNoValidate="formnovalidate">Cancel</a>
                        <button type="submit" id="btnSubmitVerifySignature" className="btn btn-sm btn-primary font-size-base">Continue</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Modal: Signature Verification */}
              <div className="modal fade" id="verifiedSignatureModal" tabIndex={-1} aria-labelledby="verifiedSignatureModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark" id="verifiedSignatureModalLabel">Signature Verification</h5>
                      <button type="button" className="close close-md" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div id="verifyResult" />
                      <div id="publishVerifiedMessageError" />
                      <div id="toPublishVerifiedMessage" className="alert alert-secondary d-flex align-items-baseline mt-n2" role="alert">
                        <i className="far fa-info-circle mr-2" />
                        <span>You may publish the Verified Message on <label style={{ "-webkit-text-transform": "capitalize", "text-transform": "capitalize" }}> chromescancan</label> by clicking "<strong>Publish</strong>" button below to continue. The Verified Message can be later accessed via a public URL.</span>
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtVerifiedAddress">
                          Signer Address
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy address to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtVerifiedAddress" data-class-change-target="#spanCopyVerifiedAddressIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopyVerifiedAddressIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <input type="text" className="form-control" id="txtVerifiedAddress" name="txtVerifiedAddress" readOnly />
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtVerifiedMessage">
                          Signature Message
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy message to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtVerifiedMessage" data-class-change-target="#spanCopyVerifiedMessageIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopyVerifiedMessageIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <textarea className="form-control" id="txtVerifiedMessage" name="txtVerifiedMessage" rows={3} readOnly defaultValue={""} />
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center" htmlFor="txtVerifiedMessageHash">
                          Signature Hash
                          <a className="js-clipboard ml-auto text-secondary small border rounded py-1 px-2" href="javascript:;" title="Copy message hash to clipboard." data-toggle="tooltip" data-type="tooltip" data-clipboard-target="#txtVerifiedMessageHash" data-class-change-target="#spanCopyVerifiedMessageHashIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <i id="spanCopyVerifiedMessageHashIcon" className="far fa-copy" /> Copy
                          </a>
                        </label>
                        <textarea className="form-control" id="txtVerifiedMessageHash" name="txtVerifiedMessageHash" rows={3} readOnly defaultValue={""} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a className="btn btn-sm btn-white font-size-base mr-2" data-dismiss="modal" href="javascript:;">Close</a>
                      <button type="button" id="btnPublishVerifiedMessage" className="btn btn-sm btn-primary font-size-base">Publish</button>
                      <a id="btnViewDuplicatedVerifiedMessage" className="btn btn-sm btn-primary font-size-base d-none" href="#">View Signature</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal: Signature Verification */}
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
      </div>
      <Footer />

    </>

  )

}

export default VerifiedSignatures;