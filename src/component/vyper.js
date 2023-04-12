import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Vyer = () => {


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
              <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in CRO" />
              <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
              <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
              <div className="container">
                <div className="border-bottom py-3 mb-3">
                  <div className="d-flex mb-2 mb-sm-0">
                    <h1 className="h4 mb-0">Vyper Online Compiler (Experimental)</h1>
                  </div>
                </div>
                <p className="mb-0">Compiles Vyper source code and outputs the ABI, ByteCode and Runtime Bytecode
                </p>
                <p className="mb-0">
                  <span id="spinwheel" style={{ "display": "none" }}>
                    <img src="images/spinnergear.svg" width={40} />
                    Please wait..</span>
                </p>
              </div>
              <div className="container space-bottom-2">
                <div className="py-4">
                  <form method="post" action="#" id="ctl00" className="js-validate">
                    <div className="js-form-message form-group">
                      <label htmlFor="ddlCompilerVersions" id="lblCompilerVersion">[Step 1] Select Compiler Version</label>
                      <div className="js-focus-state input-group input-group-sm mb-2 w-50">
                        <select name="ctl00$ContentPlaceHolder1$ddlCompilerVersions" id="ContentPlaceHolder1_ddlCompilerVersions" className="custom-select custom-select-sm" required data-msg="Compiler Version Required" data-error-class="u-has-error" data-success-class="u-has-success">
                          <option value>[Please Select]</option>
                          <option value="vyper:0.3.7">vyper:0.3.7</option>
                        </select>
                      </div>
                    </div>
                    <div className="js-form-message form-group mb-3">
                      <label htmlFor="txtSourceCode" id="lblSourceCode">[Step 2] Enter Source Code Below </label>
                      <div className="js-focus-state">
                        <textarea name="ctl00$ContentPlaceHolder1$txtSourceCode" rows={10} cols={20} id="ContentPlaceHolder1_txtSourceCode" className="form-control w-100" required data-msg="Please enter Source Code" data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Please enter Source Code" defaultValue={""} />
                      </div>
                    </div>
                    <div className="text-md-right">
                      <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Compile Vyper" onclick="var isValid = validatecheck(''); if (isValid) {var $btn = $('#spinwheel'); $btn.show(); window.location.hash = '#'; buttonclicked = true;};" id="ContentPlaceHolder1_btnSubmit" className="btn btn-sm btn-primary mr-2" />
                      <input type="reset" name="ctl00$ContentPlaceHolder1$btnReset" value="Reset" id="ContentPlaceHolder1_btnReset" className="btn btn-sm btn-soft-secondary" formNoValidate="formnovalidate" />
                    </div>
                    <div id="ContentPlaceHolder1_pnlDeploy" className="mt-2 text-md-right" style={{ "display": "none" }}>
                      Deploy Contract? <a href="#" id="connectWeb3Provider" style={{ "display": "none" }} onclick="connectProvider(); return false;">Connect to Web3 Provider</a><a href="#" id="submitContract" style={{ "display": "none" }} onclick="deployContract();">Broadcast</a>
                    </div>
                  </form>
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

export default Vyer;