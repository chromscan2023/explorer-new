import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Opcodetool = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <main id="content" role="main">
            {/* Page Title */}
            <div className="container">
              <div className="border-bottom py-3 mb-3">
                <div className="mb-2 mb-sm-0">
                  <h1 className="h4 mb-0">Bytecode to Opcode Disassembler</h1>
                </div>
              </div>
              <p className="mb-0">Attempts to decode the low level Contract ByteCodes to Opcodes</p>
            </div>
            {/* End Page Title */}
            <div className="container space-bottom-2">
              {/* Decode Form */}
              <div className="py-4">
                <form method="post" action="#" id="ctl00" className="js-validate">
                  <div className="js-form-message mb-3">
                    <textarea name="ctl00$ContentPlaceHolder1$txtByteCode" rows={10} cols={20} id="ContentPlaceHolder1_txtByteCode" className="form-control w-100" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Enter Contract Bytecode (0x..)" data-msg="Please enter contract bytecode" defaultValue={""} />
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
      <Footer />

    </>

  )

}

export default Opcodetool;