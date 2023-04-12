import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const PushTx = () => {


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
                <div className="border-bottom py-3 mb-3">
                  <div className="mb-2 mb-sm-0">
                    <h1 className="h4 mb-0">Broadcast Raw Transaction</h1>
                  </div>
                </div>
                <p className="mb-0">This page allows you to paste a Signed Raw Transaction in hex format (i.e. characters 0-9, a-f) and broadcast it over the Cronos Chain.</p>
              </div>
              {/* End Page Title */}
              <div className="container space-bottom-2">
                {/* Decode Form */}
                <div className="py-4">
                  <form method="post" action="#" id="ctl00" className="js-validate">
                    <div className="js-form-message mb-3">
                      <textarea name="ctl00$ContentPlaceHolder1$txtByteCode" rows={10} cols={20} id="ContentPlaceHolder1_txtByteCode" className="form-control w-100" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Enter signed transaction hex (0x..)" data-msg="Please enter contract bytecode" defaultValue={""} />
                    </div>
                    <div className="text-md-right">
                      <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Decode" id="ContentPlaceHolder1_btnSubmit" className="btn btn-sm btn-primary" />
                    </div>
                  </form>
                </div>
                {/* End Decode Form */}
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

export default PushTx;