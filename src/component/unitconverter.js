import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Unitconverter = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />

        <div>
          <main id="content" role="main">
            <div className="container mb-4">
              <div className="border-bottom py-3 mb-3">
                <div className="mb-2 mb-sm-0">
                  <h1 className="h4 d-flex mb-0">
                    <figure className="u-sm-avatar mr-2">
                    </figure>
                    <span>Unit Converter</span>
                  </h1>
                </div>
              </div>
              <p>
                CCC is often used in different denominations of its currency, such as Wei for interacting with smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them!
              </p>
            </div>
            <div className="container space-bottom-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-end mb-3">
                    <a id="btnReset" href={`${config.baseUrl}unitconverter`}>[Reset]</a>
                  </div>
                  <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control convertedValue" defaultValue={1000000000000000000} placeholder="baseCCC" aria-label="baseCCC" id="wei" clientidmode="static" />
                    <div className="input-group-append"> <span className="input-group-text">baseCCC(10)</span> </div>
                  </div>
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
      <Footer />

    </>

  )

}

export default Unitconverter;