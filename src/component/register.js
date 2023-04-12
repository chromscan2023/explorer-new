import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';
import { createAccount } from '../services/api.user';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
const Register = () => {

  const [userData, setUserData] = useState({ username: '', password: '' })
  const [validation, setValidation] = useState({ type: '', message: "" })
  useEffect(() => {



  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((old) => {
      return { ...old, [name]: value }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (userData.email.length <= 0) {
      setValidation({ type: "email", message: "Please enter a valid email" });
      return;
    }
    // if (userData.email !== userData.email2) {
    //   setValidation("Emails must match");
    //   return;
    // }
    if (userData.username.length <= 0) {
      setValidation({ type: "username", message: "Please enter a valid username" });
      return;
    }
    if (userData.password.length <= 0) {
      setValidation({ type: "password", message: "Please enter a valid password" });
      return;
    }
    if (userData.password2.length <= 0) {
      setValidation({ type: "password2", message: "Please enter a confirm password" });
      return;
    }
    if (userData.password !== userData.password2) {
      setValidation({ type: "password", message: "Passwords must match" });
      return;
    }
    createAccount(userData.username, userData.email, userData.password).then(res => {
      if (res.status == "success") {
        console.log(res)
        toastr.success(res.message)
        setTimeout(() => {
           window.location.href = `${config.baseUrl}login`
        }, 1000);
       
      } else {
        toastr.error(res.message)
      }
    })
  }


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <main id="content" role="main">
            <div className="container space-2">
              <form method="post" onSubmit={e => submitForm(e)} id="form1" className="js-validate w-md-75 w-lg-50 mx-md-auto">
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
                  <input name="username" onChange={e => handleChange(e)} type="text" maxLength={50} id="ContentPlaceHolder1_txtUserName" tabIndex={1} className="form-control form-control-sm" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Username" data-msg="Username is required." />
                  <div className='validation_alert'>{validation.type == 'username' ? validation.message : ''}</div>
                </div>
                <div className="js-form-message form-group">
                  <label className="d-block" htmlFor="txtUserName">Email</label>
                  <input name="email" onChange={e => handleChange(e)} type="email" maxLength={50} id="ContentPlaceHolder1_txtemail" tabIndex={1} className="form-control form-control-sm" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Email" data-msg="Email is required." />
                  <div className='validation_alert'>{validation.type == 'email' ? validation.message : ''}</div>
                </div>
                <div className="js-form-message form-group">
                  <label className="d-block" htmlFor="txtPassword">
                    <span className="d-flex justify-content-between align-items-center">
                      Password
                    </span>
                  </label>
                  <input name="password" type="password" onChange={e => handleChange(e)} maxLength={75} id="ContentPlaceHolder1_txtPassword" tabIndex={2} className="form-control form-control-sm" ria-label="********" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Password" data-msg="Your password is invalid. Please try again." />
                  <div className='validation_alert'>{validation.type == 'password' ? validation.message : ''}</div>
               </div>
                <div className="js-form-message form-group">
                  <label className="d-block" htmlFor="txtPassword">
                    <span className="d-flex justify-content-between align-items-center">
                      Confirm Password
                    </span>
                  </label>
                  <input name="password2" type="password" onChange={e => handleChange(e)} maxLength={75} id="ContentPlaceHolder1_txtPassword" tabIndex={2} className="form-control form-control-sm" ria-label="********" required data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Confirm Password" data-msg="Your Confirm password is invalid. Please try again." />
                  <div className='validation_alert'>{validation.type == 'password2' ? validation.message : ''}</div>
                </div>
                {/* <div className="js-form-message">
                  <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                    <input name="chkRemember" type="checkbox" id="ContentPlaceHolder1_chkRemember" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="ContentPlaceHolder1_chkRemember" data-toggle="tooltip" data-placement="bottom" data-title="Please do not check this box if you are using a public or shared PC">
                      <span>Remember &amp; Auto Login
                      </span>
                    </label>
                  </div>
                </div> */}
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
                    <input type="submit" name="ctl00$ContentPlaceHolder1$btnLogin" value="SIGN UP" id="ContentPlaceHolder1_btnLogin" className="btn btn-sm btn-primary" />
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
      <Footer />

    </>

  )

}

export default Register;