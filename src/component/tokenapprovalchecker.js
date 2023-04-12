import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Tokenapprovalchecker = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <main id="content" role="main">
            <form method="post" action="#" id="ctl00" className="js-validate">
              <div style={{ "min-height": "50vh" }}>
                <div className="space-1 space-md-1">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <h1 className="h4 mb-3"><i className="fas fa-user-check mr-1" />Token Approvals </h1>
                        <p className="lead">
                          Review and revoke your token approvals for any dApp.
                        </p>
                        <div className="mb-5-alt js-form-message input-group mb-2">
                          <input name="txtSearchInput" maxLength={255} id className="form-control" type="text" aria-describedby="button-header-search" required data-msg="Search for your address" data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Search by Address" />
                          <div className="input-group-append">
                            <button id className="btn btn-primary" type="submit"><i className="fa fa-search" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="unapproveModal" tabIndex={-1} role="dialog" aria-labelledby="unapproveModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="modal-title">
                        <h5>Revoke Approval</h5>
                      </div>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="txtToken">Token:</label>
                        <input type="text" className="form-control" id="txtToken" disabled />
                        <span id="errorTxtToken" className="invalid-feedback" style={{ "display": "none" }}>Please enter a valid Bsc Address</span>
                        <label htmlFor="txtSpender" className="mt-1">Spender:</label>
                        <input type="text" className="form-control" id="txtSpender" disabled />
                        <span id="errorTxtSpender" className="invalid-feedback" style={{ "display": "none" }}>Please enter a valid Bsc Address</span>
                        <button type="button" className="btn btn-sm btn-primary mt-2" id="btnUnapprove">Revoke</button>
                        <a className="btn btn-sm btn-primary mt-2" id="btnViewTx" style={{ "display": "none" }} href="#" target="_blank">View your transaction</a>
                      </div>
                      <div className="alert alert-danger mt-2" role="alert" id="errorDiv" style={{ "display": "none" }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Select wallet modal box */}
              <div className="modal fade" id="connectWalletModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Connect a Wallet
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <button type="button" value="metamask" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center" data-dismiss="modal">
                        <span className="text-dark d-flex align-items-center">MetaMask <span className="badge badge-soft-secondary badge-custom-wallet ml-2">Popular</span>
                        </span>
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
              {/* End Select wallet modal box */}
            </form>
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

export default Tokenapprovalchecker;