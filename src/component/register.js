import React, { Component,useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Register = () => {


    useEffect(() => {

      

    }, []);


    return (
        <>

<div className="wrapper">
  <Header/>
  <div>
  <main id="content" role="main">
    <div className="container space-2">
      <form method="post" action="#" id="form1" className="js-validate w-md-75 w-lg-50 mx-md-auto">
        <div className="aspNetHidden">
          <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" defaultValue />
        </div>
        <div className="aspNetHidden">
        </div>
        <div className="mb-4">
          <h2 className="h3 text-primary font-weight-normal mb-0">Registration <span className="font-weight-semi-bold" /></h2>
          <p>Register to your account</p>
        </div>
        <div className="js-form-message form-group">
          <label className="d-block" htmlFor="txtUserName">Username</label>
          <input name="username" type="text" maxLength={50} id="ContentPlaceHolder1_txtUserName" tabIndex={1} className="form-control form-control-sm" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Username" data-msg="Username is required." />               
        </div>
        <div className="js-form-message form-group">
          <label className="d-block" htmlFor="txtUserName">Email</label>
          <input name="email" type="email" maxLength={50} id="ContentPlaceHolder1_txtemail" tabIndex={1} className="form-control form-control-sm" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Email" data-msg="Email is required." />               
        </div>
        <div className="js-form-message form-group">
          <label className="d-block" htmlFor="txtPassword">
            <span className="d-flex justify-content-between align-items-center">
              Password
            </span>
          </label>
          <input name="password" type="password" maxLength={75} id="ContentPlaceHolder1_txtPassword" tabIndex={2} className="form-control form-control-sm" ria-label="********" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Password" data-msg="Your password is invalid. Please try again." />                
        </div>
        <div className="js-form-message form-group">
          <label className="d-block" htmlFor="txtPassword">
            <span className="d-flex justify-content-between align-items-center">
              Confirm Password
            </span>
          </label>
          <input name="confirm_password" type="password" maxLength={75} id="ContentPlaceHolder1_txtPassword" tabIndex={2} className="form-control form-control-sm" ria-label="********" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Confirm Password" data-msg="Your Confirm password is invalid. Please try again." />                
        </div>
        <div className="js-form-message">
          <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
            <input name="chkRemember" type="checkbox" id="ContentPlaceHolder1_chkRemember" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="ContentPlaceHolder1_chkRemember" data-toggle="tooltip" data-placement="bottom" data-title="Please do not check this box if you are using a public or shared PC">
              <span>Remember &amp; Auto Login
              </span>
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <div id="ContentPlaceHolder1_captchaDiv">
            <div className="g-recaptcha" data-sitekey="6LdghvAcAAAAAKdM_1kqW0KaoQOBFD8rTCo0sHM9" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-5 col-sm-6">
            <span className="text-muted text-nowrap">Don't have an account?</span>                   
            <a href={`${config.baseUrl}login`} className="text-nowrap">Click to Login</a>
          </div>
          <div className="col-7 col-sm-6 text-right">
            <input type="submit" name="ctl00$ContentPlaceHolder1$btnLogin" defaultValue="LOGIN" id="ContentPlaceHolder1_btnLogin" className="btn btn-sm btn-primary" />
          </div>
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
</div>
<Footer/>

</>

    )

}

export default Register;