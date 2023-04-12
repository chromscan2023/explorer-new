import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Apis = () => {


  useEffect(() => {



  }, []);


  return (
    <>


      <div className="wrapper">
        <Header />
        <main id="content" role="main">
          <div className="container space-top-1 space-bottom-2">
            <form method="post" action="#" id="ctl00" className="js-validate mt-2" noValidate="novalidate">
              <div className="text-center mb-3">
                <div className="w-md-75 w-lg-75 mx-md-auto ">
                  <h1 className="h3">Verify &amp; Publish Contract Source Code</h1>
                  <small className="d-block text-muted color-strong">COMPILER TYPE AND VERSION SELECTION</small>
                </div>
              </div>
              <div className="border-top py-4">
                <div className="row">
                  <div className="col-md-1 offset-md-1 text-secondary mt-3 mb-2">
                    <img src="images/undraw/undraw_Security_on_s9ym.svg" width={115} align="left" style={{ "margin-top": "-15px", "margin-bottom": "10px", "margin-right": "10px" }} />
                  </div>
                  <div className="col-md-9 text-secondary mt-3 mb-2 ml-2">
                    Source code verification provides <b>transparency</b> for users interacting with smart contracts.
                    By uploading the source code, CronoScan will match the compiled code with that on the blockchain.
                    Just like contracts, a "smart contract" should provide end users with more information on what they are "digitally signing" for and give users an opportunity to audit the code to independently verify that it actually does what it is supposed to do.
                    <p><br />Please be informed that advanced settings (e.g. bytecodeHash: "none" or viaIR: "true") can be accessed via Solidity (Standard-Json-Input) verification method. More information can be found under Solidity's "Compiler Input and Output JSON Description" documentation section.</p>
                  </div>
                </div>
                <div className="w-md-75 w-lg-50 mx-md-auto mt-2">
                  <div className="js-form-message form-group">
                    <label className="d-block" htmlFor="txtUserName">Please enter the Contract Address you would like to verify</label>
                    <input name="ctl00$ContentPlaceHolder1$txtContractAddress" maxLength={42} id="ContentPlaceHolder1_txtContractAddress" className="form-control form-control-sm" required placeholder="0x..." defaultValue data-success-class="u-has-success" data-error-class="u-has-error" data-rule-minlength={40} type="search" data-msg-minlength="Invalid Length" data-msg="Required" data-name="txtContractAddress" data-rule-maxlength={42} />
                  </div>
                  <div className="js-form-message form-group">
                    <label className="d-block mt-4">Please select Compiler Type</label>
                    <select name="ctl00$ContentPlaceHolder1$ddlCompilerType" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddlCompilerType\',\'\')', 0)" id="ContentPlaceHolder1_ddlCompilerType" className="custom-select custom-select-sm mb-1" required>
                      <option selected="selected" value>[Please Select]</option>
                      <option value={1} title="A simple interface for solidity code that fits or concatenated into a single file">Solidity (Single file)</option>
                      <option value={2} title="Support for multi-part/file solidity code with imports">Solidity (Multi-Part files)</option>
                      <option value={3} title="The recommended way to interface with the Solidity compiler especially for more complex and automated setups">Solidity (Standard-Json-Input)</option>
                      <option value={4} title="Experimental support for the Vyper smart contract development language">Vyper (Experimental)</option>
                    </select>
                    <div id="tooltip_container" />
                  </div>
                  <span id="ContentPlaceHolder1_licenseType">
                    <div className="js-form-message form-group" style={{ "display": "block" }}>
                      <label className="d-block mt-4">Please select Open Source License Type <a href={`${config.baseUrl}contract-license-types`} target="_blank" data-toggle="tooltip" title="Contract Source Code License Type, click for more info"><i className="far fa-info-circle" /></a></label>
                      <select name="ctl00$ContentPlaceHolder1$ddlLicenseType" id="ContentPlaceHolder1_ddlLicenseType" title="Select a suitable license type" className="custom-select custom-select-sm" required data-msg="Required" data-error-class="u-has-error" data-success-class="u-has-success">
                        <option value>[Please Select]</option>
                        <option value={1}>1) No License (None)</option>
                        <option value={2}>2) The Unlicense (Unlicense)</option>
                        <option value={3}>3) MIT License (MIT)</option>
                        <option value={4}>4) GNU General Public License v2.0 (GNU GPLv2)</option>
                        <option value={5}>5) GNU General Public License v3.0 (GNU GPLv3)</option>
                        <option value={6}>6) GNU Lesser General Public License v2.1 (GNU LGPLv2.1)</option>
                        <option value={7}>7) GNU Lesser General Public License v3.0 (GNU LGPLv3)</option>
                        <option value={8}>8) BSD 2-clause "Simplified" license (BSD-2-Clause)</option>
                        <option value={9}>9) BSD 3-clause "New" Or "Revised" license (BSD-3-Clause)</option>
                        <option value={10}>10) Mozilla Public License 2.0 (MPL-2.0)</option>
                        <option value={11}>11) Open Software License 3.0 (OSL-3.0)</option>
                        <option value={12}>12) Apache 2.0 (Apache-2.0)</option>
                        <option value={13}>13) GNU Affero General Public License (GNU AGPLv3)</option>
                        <option value={14}>14) Business Source License (BSL 1.1)</option>
                      </select>
                    </div>
                  </span>
                  <p align="center" className="mt-3">
                    <span className="custom-control custom-checkbox align-items-center text-muted mb-2">
                      <input name="chkTermsOfUse" type="checkbox" id="chkTermsOfUse" className="custom-control-input align-items-center" defaultChecked="checked" />
                      <label className="custom-control-label" htmlFor="ContentPlaceHolder1_chkRemember">
                        <span>I agree to the <a href="#">terms of service</a></span>
                      </label>
                    </span>
                    <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Continue" onclick="var isValid = validatecheck(); if (isValid) {buttonclicked = true;};" id="ContentPlaceHolder1_btnSubmit" className="btn btn-primary mr-2" />
                    <input type="submit" name="ctl00$ContentPlaceHolder1$btnReset" value="Reset" id="ContentPlaceHolder1_btnReset" formNoValidate="formnovalidate" className="btn btn-soft-secondary" />
                  </p>
                </div>
                <input type="hidden" name="ctl00$ContentPlaceHolder1$libcounter" id="ContentPlaceHolder1_libcounter" defaultValue={1} />
              </div>
            </form>
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

export default Apis;