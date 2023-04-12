import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Charts = () => {


  useEffect(() => {



  }, []);


  return (
    <>


      <div className="wrapper">
        <Header />
        <main id="content" role="main">
          <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
          <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" value="Date Time (UTC)" />
          <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" value="Click to show Age Format" />
          <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" value="Click to show Datetime Format" />
          <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" value="Gas Price in Gwei" />
          <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in CCC" />
          <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
          <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center py-3">
              <div className="mb-1 mb-md-0">
                <h1 className="h4 mb-0">Chromescan Chain  Charts &amp;  Statistics</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small p-0 mb-0">
                  <li className="breadcrumb-item active">Charts &amp;  Stats</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="container space-bottom-2">
            {/* Blockchain Data */}
            <div className="card mb-4" id="blockchainData">
              <div className="card-header">
                <h2 className="card-header-title">Blockchain Data</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/active-address`}>Daily Transactions Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/active-address`}>
                        <img className="img-fluid w-100" src="images/charts/transactionhistoryc1b6.svg" alt="Daily Transactions Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/active-address`}>CCC Daily Token Transfer Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/active-address`}>
                        <img className="img-fluid w-100" src="images/charts/tokenerc-20txns8812.svg" alt="CCC Daily Token Transfer Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/address`}>Unique Addresses Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/address`}>
                        <img className="img-fluid w-100" src="images/charts/addressc1b6.svg" alt="Unique Addresses Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/block`}>Average Block Size Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/blocksizec1b6.svg" alt="Average Block Size Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/blocktime`}>Average Block Time Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/blocktimec1b6.svg" alt="Average Block Time Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/block`}>Average Gas Price Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/gaspricec1b6.svg" alt="Average Gas Price Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/block`}>Average Gas Limit Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/gaslimitc1b6.svg" alt="Average Gas Limit Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/block`}>Daily Gas Used Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/gasusedc1b6.svg" alt="Daily Gas Used Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/block`}>Block Count and Rewards Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/block`}>
                        <img className="img-fluid w-100" src="images/charts/blockcountc1b6.svg" alt="Block Count and Rewards Chart" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href="#">Daily Active chromescan Chain Address</a>
                      </div>
                      <a className="card-body" href="#">
                        <img className="img-fluid w-100" src="images/charts/tokenerc-20txns8812.svg" alt="active-address" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Network Data */}
            <div className="card mb-4" id="networkData">
              <div className="card-header">
                <h2 className="card-header-title">Network Data</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href="#">Network Utilization Chart</a>
                      </div>
                      <a className="card-body" href="#">
                        <img className="img-fluid w-100" src="images/charts/networkutilizationc1b6.svg" alt="Network Utilization Chart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Validators Data */}
            <div className="card mb-4" id="validatorsData">
              <div className="card-header">
                <h2 className="card-header-title">Validators Data</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}stat/miner`}>Top 25 Validators by Blocks</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}stat/miner`}>
                        <img className="img-fluid w-100" src="images/charts/validatorsc1b6.svg" alt="Top Validators" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contracts Data */}
            <div className="card mb-4" id="Contracts_Data">
              <div className="card-header">
                <h2 className="card-header-title">Contracts Data</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-3 ">
                    <div className="card h-100 w-100">
                      <div className="card-header bg-light">
                        <a href={`${config.baseUrl}chart/address`}>Verified Contracts Chart</a>
                      </div>
                      <a className="card-body" href={`${config.baseUrl}chart/address`}>
                        <img className="img-fluid w-100" src="images/charts/verified-contractse5c1.svg" alt="chromescan Daily Verified Contracts Chart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="share-bottom" className="share-btn socialmediabutton-down" style={{ "position": "relative", "right": "2px", "top": "-10px" }} />
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

export default Charts;