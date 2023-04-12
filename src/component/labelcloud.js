import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Labelcloud = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <div>
            <main id="content" role="main">
              {/* Page Title */}
              <div className="container">
                <div className="py-3">
                  <h1 className="h4 mb-0">Label Word Cloud<span className="small text-secondary ml-1" /></h1>
                </div>
              </div>
              {/* End Page Title */}
              <div className="container space-bottom-2">
                <div id="ContentPlaceHolder1_mainDiv" className="card">
                  <div className="card-body p-4">
                    {/* Label Cloud Chart */}
                    <div className="w-100 mx-auto">
                      <div id="container" />
                    </div>
                    {/* End Label Cloud Chart */}
                    <hr className="hr-space-lg" />
                    {/* Search */}
                    <div className="mt-5 mb-4 pb-4">
                      <form className="w-100 w-lg-50 mx-auto" action>
                        <div className="input-group">
                          <input type="text" id="myInput2" aria-describedby="inputSearch" className="form-control" placeholder="Search Labels " />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <span className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* End Search */}
                    {/* Content */}
                    <div className="row mb-3">
                      <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                        <div className="dropdown">
                          <button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="adamant-finance" aria-haspopup="True" aria-expanded="False"><span>Adamant Finance <span className="badge badge-secondary ml-1">14</span></span></button>
                          <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Adamant Finance"><a className="py-1 px-3 d-block" href="accounts/label/adamant-finance.html"><span className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i className="far fa-file-alt btn-icon__inner mr-1" /></span>Accounts (14)</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pl-1 label" id="tagfooter" />
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
      </div>
      <Footer />

    </>

  )

}

export default Labelcloud;