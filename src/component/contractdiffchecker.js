import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Contractdiffchecker = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <div>
            <main id="content" role="main">
              {/* Header Area */}
              {/* End Header Area */}
              <form method="post" action="#" id="ctl00">
                {/* Page Title */}
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                    <div className="mb-1 mb-md-0">
                      <h1 className="h4 mb-0">
                        Contract Diff Checker
                      </h1>
                    </div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb small p-0 mb-0" id="olBreadCrumb">
                      </ol>
                    </nav>
                  </div>
                </div>
                {/* End Page Title */}
                <div className="container space-1 space-bottom-2">
                  <div id="ContentPlaceHolder1_divSummary" className="row mx-gutters-sm-1 mb-3">
                    <div className="col-md-12">
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0 contAddress">
                      <label>Contract Address 1</label>
                      <div className="input-group input-group-sm mb-4">
                        <input id="txtContAddres1" type="text" className="form-control" placeholder="Enter Contract Address 1 and Press Enter" aria-label="Enter Contract Address 1 and Press Enter" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">Lookup</button>
                        </div>
                      </div>
                      <div className="card p-4">
                        <div id="ContentPlaceHolder1_divBlankConent1" className="text-center w-lg-75 w-xl-50 mx-auto space-1">
                          <img id="empty-nodata-state-1" width={75} className="mb-3" src="images/svg/components/empty-nodata-state.svg" alt />
                          <p className="mb-0">Please enter a contract address above to load the contract details and source code.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 contAddress">
                      <label>Contract Address 2</label>
                      <div className="input-group input-group-sm mb-4">
                        <input id="txtContAddres2" type="text" className="form-control" placeholder="Contract Address 2" aria-label="Contract Address 2" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">Lookup</button>
                        </div>
                      </div>
                      <div className="card p-4">
                        <div id="ContentPlaceHolder1_divBlankConent2" className="text-center w-lg-75 w-xl-50 mx-auto space-1">
                          <img id="empty-nodata-state-2" width={75} className="mb-3" src="images/svg/components/empty-nodata-state.svg" alt />
                          <p className="mb-0">Please enter a contract address above to load the contract details and source code.</p>
                        </div>
                      </div>
                    </div>
                    <div className="top d-none">
                      <strong>Context size (optional):</strong>
                      <input type="text" id="contextSize" defaultValue />
                    </div>
                    <div className="col-12 mt-4">
                      <div id="diffoutput" className="table-responsive" />
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button type="button" className="btn btn-sm btn-secondary divDiff" style={{ "display": "none" }}>Compare Difference</button>
                      <button type="button" className="btn btn-sm btn-secondary btnback" style={{ "display": "none" }}>Back</button>
                    </div>
                  </div>
                </div>
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
      </div>
      <Footer />

    </>

  )

}

export default Contractdiffchecker;