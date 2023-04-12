import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Tx = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">

        <Header />
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
            {/* Page Title */}
            <div className="container py-3 mn-b3">
              {/*<div class="d-flex justify-content-between">*/}
              <div className="d-lg-flex justify-content-between align-items-center">
                <div className="mb-3 mb-lg-0">
                  <h1 className="h4 mb-0">Transaction Details </h1>
                </div>
                <div className="d-flex flex-wrap mt-1 mt-md-0 flex-wrap ml-md-auto">
                </div>
              </div>
            </div>
            {/* End Page Title */}
            {/* Ads */}
            <div className="container">
            </div>
            <div className="container space-bottom-2">
              <div className="card">
                {/* Card Header */}
                <div className="card-header sticky-card-header d-flex justify-content-between p-0">
                  {/* Tabs Nav */}
                  <ul className="nav nav-custom nav-borderless nav_tabs1" id="nav_tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" aria-controls="home" aria-selected="true" onclick="javascript:updatehash('');">Overview</a>
                    </li>
                    <li id="ContentPlaceHolder1_li_txreceiptlog" className="nav-item">
                      <a className="nav-link" id="eventlog-tab" data-toggle="tab" href="#eventlog" aria-controls="eventlog" aria-selected="false" onclick="javascript:updatehash('eventlog');">Logs (7)</a>
                    </li>
                    <li id="ContentPlaceHolder1_li_disqus" className="nav-item">
                      <a className="nav-link" id="comments-tab" href="#comments" data-toggle="tab" onclick="javascript:loaddisqus();">
                        <span className="disqus-comment-count" data-disqus-identifier="CronoScan_TxHash_0xd87141dfc32f77dc45825ff77e9479d72a310b989d44cced45d8f07420aa66b7_Comments">Comments
                          <span id="commentindicator" />
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* End Tabs Nav */}
                  <div className="d-flex mr-3 mt-3">
                    <div id="spinnerwait" style={{ "display": "none" }}>
                      <img src="../images/main/EllipsisSpinner3241d.svg?v=0.0.1" />
                    </div>
                  </div>
                </div>
                {/* End Card Header */}
                {/* Card Body */}
                <div className="tab-content" id="myTabContent">
                  {/* Tabe Pane */}
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {/* Content */}
                    <div id="ContentPlaceHolder1_maintable" className="card-body">
                      {/* TxHash */}
                      <div className="row align-items-center mt-1 mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="A TxHash or transaction hash is a unique 66 characters identifier that is generated whenever a transaction is executed." />Transaction Hash:</div>
                        <div className="col-md-9">
                          <span id="spanTxHash" className="mr-1">0xd87141dfc32f77dc45825ff77e9479d72a310b989d44cced45d8f07420aa66b7</span>
                          {/* Copy to Clipboard */}
                          <a className="js-clipboard text-secondary" href="javascript:;" data-toggle="tooltip" title="Copy TxHash to clipboard" data-content-target="#spanTxHash" data-class-change-target="#spanTxHashLinkIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <span id="spanTxHashLinkIcon" className="far fa-copy" />
                          </a>
                          {/* End Copy to Clipboard */}
                        </div>
                      </div>
                      {/* End TxHash */}
                      {/* TxReceipt Status */}
                      <div className="row align-items-center mb-4">
                        <div className="col-auto col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The status of the transaction." />Status:</div>
                        <div className="col col-md-9"><span className="u-label u-label--sm u-label--value u-label--success rounded" data-toggle="tooltip" title="A Status code indicating if the top-level call succeeded or failed (applicable for Post BYZANTIUM blocks only)"><i className="fa fa-check-circle font-size-1 mr-1" />Success</span></div>
                      </div>
                      {/* End TxReceipt Status */}
                      {/* Block Height */}
                      <div className="row align-items-center mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The number of the block in which the transaction was recorded. Block confirmation indicate how many blocks since the transaction is validated." />Block:</div>
                        <div className="col-md-9">
                          <a href={`${config.baseUrl}block`}>7633241</a> <span className="u-label u-label--xs u-label--badge-in u-label--secondary ml-1" data-toggle="tooltip" title="Number of blocks Validated since">38 Block Confirmations</span>
                        </div>
                      </div>
                      {/* End Block Height */}
                      {/* TimeStamp */}
                      <div id="ContentPlaceHolder1_divTimeStamp">
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The date and time at which a transaction is validated." />Timestamp:</div>
                          <div className="col-md-9">
                            <span id="clock" /><i className="far fa-clock mr-1" />3 mins ago (Mar-30-2023 11:58:58 AM +UTC)
                          </div>
                        </div>
                      </div>
                      {/* End TimeStamp */}
                      {/*L1 Details */}
                      {/* END L1 Details */}
                      <hr className="hr-space my-4" />
                      {/* From */}
                      <div className="row align-items-center mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The sending party of the transaction (could be from a contract address)." />From:</div>
                        <div className="col-md-9">
                          <span id="spanFromAdd" style={{ "display": "none" }}>0x854760dd04caa4eadad0e935d6e6f73105f557df</span><a id="addressCopy" className="mr-1" href="../address/0x854760dd04caa4eadad0e935d6e6f73105f557df.html">0x854760dd04caa4eadad0e935d6e6f73105f557df</a>
                          {/* Copy to Clipboard */}
                          <a className="js-clipboard text-secondary ml-1" href="javascript:;" data-toggle="tooltip" title="Copy From Address to clipboard" data-content-target="#spanFromAdd" data-class-change-target="#fromAddressLinkIcon" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle">
                            <span id="fromAddressLinkIcon" className="far fa-copy" />
                          </a>
                          {/* End Copy to Clipboard */}
                        </div>
                      </div>
                      {/* End From */}
                      {/* To */}
                      <div className="row mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The receiving party of the transaction (could be a contract address)." />Interacted With (To):</div>
                        <div className="col-md-9">
                          Contract <a id="contractCopy" href={`${config.baseUrl}address`} className="wordwrap mr-1">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a><span id="spanToAdd" style={{ "display": "none" }}>0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</span><i className="fa fa-check-circle text-success mx-1 mb-2" data-toggle="tooltip" data-placement="top" data-title="Contract Execution Completed" /><a className="js-clipboard text-muted ml-1" href="javascript: ;" data-toggle="tooltip" title="Copy To Address to clipboard" data-content-target="#spanToAdd" data-class-change-target="#spanToAddResult" data-success-text="Copied" data-default-class="far fa-copy" data-success-class="far fa-check-circle"> <span id="spanToAddResult" className="far fa-copy" /> </a>
                        </div>
                      </div>
                      {/* End To */}
                      <hr className="hr-space my-4" />
                      {/* Tokens Transfers */}
                      <div className="row mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                          <div className="d-flex align-items-center"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="List of token transferred in the transaction." /><span className="mr-1" data-toggle="tooltip" title="3 Token Transfers">Tokens Transferred: </span><span className="badge badge-pill badge-secondary align-midle">3</span></div>
                        </div>
                        <div className="col-md-9">
                          <ul className="list-unstyled mb-0" id="wrapperContent">
                            <li className="media align-items-baseline mb-2">
                              <span className="row-count text-secondary small mr-1"><i className="fa fa-caret-right" /></span>
                              <div className="media-body"><span className><b>From</b> </span><span className="hash-tag text-truncate  mr-1"><a href="../token/0xf78a326acd53651f8df5d8b137295e434b7c8ba527b8.html?a=0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef"><span className="hash-tag text-truncate hash-tag-custom-from tooltip-address" data-toggle="tooltip" title="0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</span></a></span><span className="mr-1"><b>To</b> </span><span className="hash-tag text-truncate "><a href="../token/0xf78a326acd53651f8df5d8b137295e434b7c8ba5d525.html?a=0x18ae87ae14279d42fcdde542c7faa65768434024"><span className="hash-tag text-truncate hash-tag-custom-to tooltip-address" data-toggle="tooltip" title="0x18ae87ae14279d42fcdde542c7faa65768434024">0x18ae87ae14279d42fcdde542c7faa65768434024</span></a></span><span className="mr-1"> <b>For</b> </span><span className="mr-1"><span data-toggle="tooltip" data-original-title="Current Price : $1.12 / MATIC">309.556112940618206072<button className="u-label u-label--value u-label--primary rounded mb-n1 ml-1" type="button" data-toggle="tooltip" data-placement="auto" onclick="tokenPriceButtonClick(this)" id="tokenpricebutton" data-original-title="Displaying current Value, Click to show value at Time of Tokens Transferred" data-other-title="Estimated Value at time of transfer" value=" ($347.08)"> ($346.70)</button></span> </span> <img src="../token/images/matic_32.png" className="mt-n1 mr-1" width={15} /><a href="../token/0xf78a326acd53651f8df5d8b137295e434b7c8ba5.html">Matic Token (MATIC)</a></div>
                            </li>
                            <li className="media align-items-baseline mb-2">
                              <span className="row-count text-secondary small mr-1"><i className="fa fa-caret-right" /></span>
                              <div className="media-body"><span className><b>From</b> </span><span className="hash-tag text-truncate  mr-1"><a href="../token/0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23d525.html?a=0x18ae87ae14279d42fcdde542c7faa65768434024"><span className="hash-tag text-truncate hash-tag-custom-from tooltip-address" data-toggle="tooltip" title="0x18ae87ae14279d42fcdde542c7faa65768434024">0x18ae87ae14279d42fcdde542c7faa65768434024</span></a></span><span className="mr-1"><b>To</b> </span><span className="hash-tag text-truncate "><a href="../token/0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23f4e1.html?a=0xa68466208f1a3eb21650320d2520ee8eba5ba623"><span className="hash-tag text-truncate hash-tag-custom-to tooltip-address" data-toggle="tooltip" title="0xa68466208f1a3eb21650320d2520ee8eba5ba623">0xa68466208f1a3eb21650320d2520ee8eba5ba623</span></a></span><span className="mr-1"> <b>For</b> </span><span className="mr-1"><span data-toggle="tooltip" data-original-title="Current Price : $0.07 / WCRO">5,141.137792210402118943 ($355.37)</span> </span> <img src="../token/images/cryptocom_32.png" className="mt-n1 mr-1" width={15} /><a href="../token/0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23.html">Wrapped CRO (WCRO)</a></div>
                            </li>
                            <li className="media align-items-baseline mb-2">
                              <span className="row-count text-secondary small mr-1"><i className="fa fa-caret-right" /></span>
                              <div className="media-body"><span className><b>From</b> </span><span className="hash-tag text-truncate  mr-1"><a href="../token/0xc21223249ca28397b4b6541dffaecc539bff0c59f4e1.html?a=0xa68466208f1a3eb21650320d2520ee8eba5ba623"><span className="hash-tag text-truncate hash-tag-custom-from tooltip-address" data-toggle="tooltip" title="0xa68466208f1a3eb21650320d2520ee8eba5ba623">0xa68466208f1a3eb21650320d2520ee8eba5ba623</span></a></span><span className="mr-1"><b>To</b> </span><span className="hash-tag text-truncate "><a href="../token/0xc21223249ca28397b4b6541dffaecc539bff0c5927b8.html?a=0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef"><span className="hash-tag text-truncate hash-tag-custom-to tooltip-address" data-toggle="tooltip" title="0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</span></a></span><span className="mr-1"> <b>For</b> </span><span className="mr-1"><span data-toggle="tooltip" data-original-title="Current Price : $1.00 / USDC">353.73977 ($353.74)</span> </span> <img src="../token/images/usdcbttc_32.png" className="mt-n1 mr-1" width={15} /><a href="../token/0xc21223249ca28397b4b6541dffaecc539bff0c59.html">USD Coin (USDC)</a></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr className="hr-space my-4" />
                      {/* Value */}
                      <div className="row align-items-center mb-4">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The value being transacted in CRO and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction." />Value:</div>
                        <div className="col-md-9">
                          <span id="ContentPlaceHolder1_spanValue"><span data-toggle="tooltip" title="The amount of CRO to be transferred to the recipient with the transaction"><span className="u-label u-label--value u-label--secondary text-dark rounded mr-1">0 CRO</span></span> ($0.00) </span>
                        </div>
                      </div>
                      {/* End Value */}
                      {/* Transaction Fee */}
                      <div id="ContentPlaceHolder1_divTxFee">
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Amount paid to the Validator for processing the transaction." />Transaction Fee:</div>
                          <div className="col-md-9">
                            <span id="ContentPlaceHolder1_spanTxFee"><span data-toggle="tooltip" title="Gas Price * Gas Used by Transaction">1<b>.</b>1952574359585 CRO ($0.08)</span></span>
                          </div>
                        </div>
                      </div>
                      {/* End Transaction Fee */}
                      <hr className="hr-space my-4" />
                      {/* Gas Price */}
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Cost per unit of gas specified for the transaction, in CRO and Gwei. The higher the gas price the higher chance of getting included in a block." />Gas Price:</div>
                        <div className="col-md-9">
                          <span id="ContentPlaceHolder1_spanGasPrice" title="The price offered to the Validator to purchase this amount of GAS （per GAS）" data-toggle="tooltip">0<b>.</b>000004781029743834 CRO (4,781<b>.</b>029743834 Gwei)</span>
                        </div>
                      </div>
                      {/* End Gas Price */}
                      {/* Ether Price */}
                      {/* End Ether Price */}
                      {/* Collapse */}
                      <div id="ContentPlaceHolder1_collapseContent" className="collapse">
                        {/* Gas Limit & Usage by Txn */}
                        <div className="row align-items-center my-4">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values." />Gas Limit &amp; Usage by Txn:</div>
                          <div className="col-md-9">
                            <span id="ContentPlaceHolder1_spanGasLimit" title="The amount of GAS supplied for this transaction to happen" data-toggle="tooltip">500,000</span>
                            <span className="mx-2 text-muted">|</span>
                            <span id="ContentPlaceHolder1_spanGasUsedByTxn" title="The amount of GAS used by this specific transaction alone" data-toggle="tooltip">250,000 (50%)</span>
                          </div>
                        </div>
                        {/* End Gas Limit & Usage by Txn */}
                        {/* Gas Fees */}
                        <div id="ContentPlaceHolder1_divGasFees" className="row align-items-center mb-4">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                            <i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively." />Gas Fees:
                          </div>
                          <div className="col-md-9">
                            <span className="mr-1 mb-1" data-toggle="tooltip" data-placement="top" title="0.000004781029559106 CRO"><span className="text-secondary">Base:</span> 4,781<b>.</b>029559106 Gwei</span>
                          </div>
                        </div>
                        {/* End Gas Fees */}
                        {/* Burnt & Txn Savings Fees */}
                        {/* End Burnt & Txn Savings Fees */}
                        <hr className="hr-space my-4" />
                        {/*txn type*/}
                        {/* Others */}
                        <div className="row mb-4">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                            <i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Other data related to this transaction." />Other Attributes:
                          </div>
                          <div className="col-md-9">
                            <span id="ContentPlaceHolder1_spanTxnType">
                              <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">Txn Type:
                                <span className="text-dark">0 (Legacy)</span>
                              </span>
                            </span>
                            <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">Nonce:
                              <span className="text-dark">4115</span>
                            </span>
                            <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">Position:
                              <span className="text-dark">3</span>
                            </span>
                          </div>
                        </div>
                        {/* End Others */}
                        {/* Input Data */}
                        <div className="row">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Additional information that is required for the transaction." />Input Data:</div>
                          <div className="col-md-9">
                            <div id="rawtab" data-target-group="inputDataGroup">
                              <span data-toggle="tooltip" title="The binary data that formed the input to the transaction, either the input data if it was a message call or the contract initialisation if it was a contract creation">
                                <textarea readOnly spellCheck="false" className="form-control bg-light text-secondary text-monospace p-3" rows={4} id="inputdata" defaultValue={""} /><span id="rawinput" style={{ "display": "none" }} />
                              </span>
                              <div id="ContentPlaceHolder1_btnconvert222" className="d-flex align-items-center mt-2">
                                <div className="position-relative mr-2">
                                  <span className="dropdown">
                                    <button className="btn btn-xss btn-secondary dropdown-toggle" type="button" id="btnconvert222_1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      View Input As
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnconvert222_1">
                                      <a id="convert_default" href="javascript:;" className="dropdown-item active" onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'default');">Default View</a>
                                      <a id="convert_utf" href="javascript:;" className="dropdown-item" onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'hex');">UTF-8</a>
                                      <a id="convert_original" href="javascript:;" className="dropdown-item" onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'original');">Original</a>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div id="decodetab" data-target-group="inputDataGroup" style={{ "display": "none", "opacity": "0" }}>
                              <div id="loadingtxframe">
                                <div id="overlayMain" align="center">
                                  <img src="../images/main/loadingblock.svg" alt="Loading" />
                                </div>
                              </div>
                              <div id="decodebox" style={{ "display": "none" }}>
                                <div className="js-scrollbar scrollbox">
                                  <div id="inputDecode" className="bg-light table-responsive" />
                                </div>
                                <a href="javascript:;" className="js-animation-link btn btn-xss btn-secondary mt-2" onclick="javascript:btnSwitchClick();"><i className="fa fa-undo txhash-icon" /> Switch Back</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Input Data */}
                      </div>
                      {/* End Collapse */}
                      <hr className="hr-space my-4" />
                      {/* Expand */}
                      <div id="ContentPlaceHolder1_collapsedLink_span">
                        <a className="d-block text-center text-md-left py-4 my-n4 collapsed" id="collapsedLink" href="#ContentPlaceHolder1_collapseContent" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="ContentPlaceHolder1_collapseContent">
                          <span>
                            Click to see <span className="card-arrow-more">More</span> <span className="card-arrow-less">Less</span>
                            <span className="card-btn-arrow card-btn-arrow--up ml-2">
                              <span className="fas fa-arrow-up small" />
                            </span>
                          </span>
                        </a>
                      </div>
                      {/* End Expand */}
                      <div id="ContentPlaceHolder1_privatenotediv">
                        <hr className="hr-space my-4" />
                        {/* Private Note */}
                        <div className="row">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0"><i className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Private note to keep track of the transaction. Only viewable to CronoScan's user who assign them." />Private Note: <i id="ContentPlaceHolder1_infoPrivateNote" className="fa fa-info-circle text-secondary" rel="tooltip" data-placement="right" style={{ "display": "none" }} title="You can attach a private note to this transaction which you can view when logged in" data-toggle="tooltip" /></div>
                          <div className="col-md-9">
                            To access the Private Note feature, you must be <a href="../login.html?returntx=0xd87141dfc32f77dc45825ff77e9479d72a310b989d44cced45d8f07420aa66b7">Logged In</a>
                          </div>
                        </div>
                      </div>
                      {/* End Private Note */}
                    </div>
                    {/* End Content */}
                    {/* Other Transactions */}
                    {/* End Other Transactions */}
                  </div>
                  {/* End Tabe Pane */}
                  {/* Tabe Pane */}
                  <div className="tab-pane fade" id="internal" role="tabpanel" aria-labelledby="internal-tab">
                    <div className="ml-auto float-right mr-4 mt-3 mb-4 d-none" id="divswitch" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Toggle between Simplified and Advanced view. The 'Advanced' view also shows zero value ETH transfers, while the 'Simple' view only shows ETH transfers with value. Name tags integration is not available in advanced view">
                      <div className="d-flex">
                        <label className="checkbox-switch mb-0" id="labelswitch" data-toggle="tooltip" data-placement="top" data-original-title title>
                          <input type="checkbox" className="checkbox-switch__input" id="customSwitch1" onclick="toggleMode();" />
                          <span className="checkbox-switch__slider" />
                        </label>
                        <span className="ml-1" id="toggletext">Simple</span>
                      </div>
                    </div>
                    <div className="card-body mt-1">
                      Invoked Transactions
                      <div id="ContentPlaceHolder1_divinternaltable" className="table-responsive mb-2 mb-md-0">
                        <table className="table table-hover table-align-middle">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Type Trace Address</th>
                              <th scope="col" width={180}>From</th>
                              <th scope="col" width={30} />
                              <th scope="col">To</th>
                              <th scope="col">Value</th>
                              <th scope="col">Gas Limit</th>
                            </tr>
                          </thead>
                          <tbody>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End Tabe Pane */}
                  {/* Tabe Pane */}
                  <div className="tab-pane fade" id="eventlog" role="tabpanel" aria-labelledby="eventlog-tab">
                    <div className="card-body">
                      <h6 className="font-weight-normal mb-4">
                        Transaction Receipt Event Logs
                      </h6>
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">7</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0xf78a326acd53651f8df5d8b137295e434b7c8ba5.html">0xf78a326acd53651f8df5d8b137295e434b7c8ba5</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-0"><a className="dropdown-item" href="../txs.html?ea=0xf78a326acd53651f8df5d8b137295e434b7c8ba5&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Name</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <p className="text-secondary text-monospace mb-0"><span id="funcname_0" style={{ "display": "inline-block", "margin-bottom": "6px" }} data-title="ABI Event Input">Transfer (index_topic_1 <span className="text-success">address</span> <span className="text-danger">src</span>, index_topic_2 <span className="text-success">address</span> <span className="text-danger">dst</span>,  <span className="text-success">uint256</span> <span className="text-danger">wad</span>)<a href="javascript:;" className="ml-1" data-toggle="tooltip" title="View source code" onclick="viewSourceCode(&quot;0xf78a326acd53651f8df5d8b137295e434b7c8ba5&quot;,&quot;Transfer&quot;);">View Source</a> </span></p>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</span></li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">1</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_0_1" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_0_1"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '0_1', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '0_1', '0x000000000000000000000000576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_0_1"><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span><span id="chunk_decodeori_0_1" style={{ "display": "none" }}><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span>
                                </li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">2</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_0_2" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_0_2"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '0_2', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '0_2', '0x00000000000000000000000018ae87ae14279d42fcdde542c7faa65768434024', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_0_2"><a href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a></span><span id="chunk_decodeori_0_2" style={{ "display": "none" }}><a href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a></span>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-2 d-md-flex justify-content-between ">
                                <span id="event_raw_data_1" className="text-monospace text-break" style={{ "display": "none" }}>0x000000000000000000000000000000000000000000000010c7f43c9ef43fcb78</span>
                                <div id="event_dec_data_1">
                                  <li className="d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">wad :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="wad (uint256 )">309556112940618206072</span></li>
                                </div>
                                <div className="d-flex align-items-start mt-3 mt-md-0 ml-md-3">
                                  <div className="btn-group btn-group-toggle" data-toggle="buttons"> <label className="btn btn-xs btn-secondary cursor-pointer active" onclick="javascript:convertEventData(&quot;dec&quot;, &quot;1&quot;);"> <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Dec </label> <label className="btn btn-xs btn-secondary cursor-pointer" onclick="javascript:convertEventData(&quot;hex&quot;, &quot;1&quot;);"> <input type="radio" name="options" id="option2" autoComplete="off" /> Hex</label> </div>
                                </div>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">8</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23.html">0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-1"><a className="dropdown-item" href="../txs.html?ea=0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Name</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <p className="text-secondary text-monospace mb-0"><span id="funcname_1" style={{ "display": "inline-block", "margin-bottom": "6px" }} data-title="ABI Event Input">Transfer (index_topic_1 <span className="text-success">address</span> <span className="text-danger">src</span>, index_topic_2 <span className="text-success">address</span> <span className="text-danger">dst</span>,  <span className="text-success">uint256</span> <span className="text-danger">wad</span>)<a href="javascript:;" className="ml-1" data-toggle="tooltip" title="View source code" onclick="viewSourceCode(&quot;0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23&quot;,&quot;Transfer&quot;);">View Source</a> </span></p>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</span></li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">1</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_1_1" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_1_1"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '1_1', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '1_1', '0x00000000000000000000000018ae87ae14279d42fcdde542c7faa65768434024', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_1_1"><a href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a></span><span id="chunk_decodeori_1_1" style={{ "display": "none" }}><a href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a></span>
                                </li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">2</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_1_2" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_1_2"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '1_2', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '1_2', '0x000000000000000000000000a68466208f1a3eb21650320d2520ee8eba5ba623', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_1_2"><a href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a></span><span id="chunk_decodeori_1_2" style={{ "display": "none" }}><a href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a></span>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-2 d-md-flex justify-content-between ">
                                <span id="event_raw_data_2" className="text-monospace text-break" style={{ "display": "none" }}>0x000000000000000000000000000000000000000000000116b39e8f1995098d1f</span>
                                <div id="event_dec_data_2">
                                  <li className="d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">wad :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="wad (uint256 )">5141137792210402118943</span></li>
                                </div>
                                <div className="d-flex align-items-start mt-3 mt-md-0 ml-md-3">
                                  <div className="btn-group btn-group-toggle" data-toggle="buttons"> <label className="btn btn-xs btn-secondary cursor-pointer active" onclick="javascript:convertEventData(&quot;dec&quot;, &quot;2&quot;);"> <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Dec </label> <label className="btn btn-xs btn-secondary cursor-pointer" onclick="javascript:convertEventData(&quot;hex&quot;, &quot;2&quot;);"> <input type="radio" name="options" id="option2" autoComplete="off" /> Hex</label> </div>
                                </div>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">9</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-2"><a className="dropdown-item" href="../txs.html?ea=0x18ae87ae14279d42fcdde542c7faa65768434024&topic0=0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1</span></li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-0">
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_3_1" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_3_1"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '3_1');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '3_1');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '3_1');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '3_1');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_3_1">000000000000000000000000000000000000000000002c491e079bb083c62a52</span><span style={{ "display": "none" }} id="chunk_ori_3_1">000000000000000000000000000000000000000000002c491e079bb083c62a52</span>
                                    </span></span></li>
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_3_2" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_3_2"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '3_2');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '3_2');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '3_2');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '3_2');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_3_2">0000000000000000000000000000000000000000000002b95bef70340d9d37f3</span><span style={{ "display": "none" }} id="chunk_ori_3_2">0000000000000000000000000000000000000000000002b95bef70340d9d37f3</span>
                                    </span></span></li>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">10</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0x18ae87ae14279d42fcdde542c7faa65768434024.html">0x18ae87ae14279d42fcdde542c7faa65768434024</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-3"><a className="dropdown-item" href="../txsb92d.html?ea=0x18ae87ae14279d42fcdde542c7faa65768434024&topic0=0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822</span></li>
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">1</span> <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_3_1">0x000000000000000000000000576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</span></li>
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">2</span> <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_3_2">0x000000000000000000000000a68466208f1a3eb21650320d2520ee8eba5ba623</span></li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-0">
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_4_1" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_4_1"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '4_1');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '4_1');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '4_1');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '4_1');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_4_1">0000000000000000000000000000000000000000000000000000000000000000</span><span style={{ "display": "none" }} id="chunk_ori_4_1">0000000000000000000000000000000000000000000000000000000000000000</span>
                                    </span></span></li>
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_4_2" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_4_2"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '4_2');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '4_2');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '4_2');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '4_2');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_4_2">000000000000000000000000000000000000000000000010c7f43c9ef43fcb78</span><span style={{ "display": "none" }} id="chunk_ori_4_2">000000000000000000000000000000000000000000000010c7f43c9ef43fcb78</span>
                                    </span></span></li>
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_4_3" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_4_3"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '4_3');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '4_3');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '4_3');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '4_3');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_4_3">000000000000000000000000000000000000000000000116b39e8f1995098d1f</span><span style={{ "display": "none" }} id="chunk_ori_4_3">000000000000000000000000000000000000000000000116b39e8f1995098d1f</span>
                                    </span></span></li>
                                <li>
                                  <span className="dropdown"><button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="convert_button_4_4" data-toggle="dropdown" aria-haspopup="True" aria-expanded="False">Hex</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_button_4_4"><a className="dropdown-item" href="javascript:funcOnclick('Hex', '4_4');">Hex</a><a className="dropdown-item" href="javascript:funcOnclick('Num', '4_4');">Number</a><a className="dropdown-item" href="javascript:funcOnclick('Text', '4_4');">Text</a><a className="dropdown-item" href="javascript:funcOnclick('Addr', '4_4');">Address</a></div>
                                    <span><i className="fa fa-long-arrow-alt-right mx-1" /><span className="text-monospace text-break" id="chunk_4_4">0000000000000000000000000000000000000000000000000000000000000000</span><span style={{ "display": "none" }} id="chunk_ori_4_4">0000000000000000000000000000000000000000000000000000000000000000</span>
                                    </span></span></li>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">11</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0xc21223249ca28397b4b6541dffaecc539bff0c59.html">0xc21223249ca28397b4b6541dffaecc539bff0c59</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-4"><a className="dropdown-item" href="../txs.html?ea=0xc21223249ca28397b4b6541dffaecc539bff0c59&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Name</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <p className="text-secondary text-monospace mb-0"><span id="funcname_4" style={{ "display": "inline-block", "margin-bottom": "6px" }} data-title="ABI Event Input">Transfer (index_topic_1 <span className="text-success">address</span> <span className="text-danger">src</span>, index_topic_2 <span className="text-success">address</span> <span className="text-danger">dst</span>,  <span className="text-success">uint256</span> <span className="text-danger">wad</span>)<a href="javascript:;" className="ml-1" data-toggle="tooltip" title="View source code" onclick="viewSourceCode(&quot;0xc21223249ca28397b4b6541dffaecc539bff0c59&quot;,&quot;Transfer&quot;);">View Source</a> </span></p>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</span></li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">1</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_4_1" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_4_1"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '4_1', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '4_1', '0x000000000000000000000000a68466208f1a3eb21650320d2520ee8eba5ba623', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_4_1"><a href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a></span><span id="chunk_decodeori_4_1" style={{ "display": "none" }}><a href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a></span>
                                </li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">2</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_4_2" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_4_2"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '4_2', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '4_2', '0x000000000000000000000000576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_4_2"><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span><span id="chunk_decodeori_4_2" style={{ "display": "none" }}><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-2 d-md-flex justify-content-between ">
                                <span id="event_raw_data_5" className="text-monospace text-break" style={{ "display": "none" }}>0x000000000000000000000000000000000000000000000000000000001515a3fa</span>
                                <div id="event_dec_data_5">
                                  <li className="d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">wad :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="wad (uint256 )">353739770</span></li>
                                </div>
                                <div className="d-flex align-items-start mt-3 mt-md-0 ml-md-3">
                                  <div className="btn-group btn-group-toggle" data-toggle="buttons"> <label className="btn btn-xs btn-secondary cursor-pointer active" onclick="javascript:convertEventData(&quot;dec&quot;, &quot;5&quot;);"> <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Dec </label> <label className="btn btn-xs btn-secondary cursor-pointer" onclick="javascript:convertEventData(&quot;hex&quot;, &quot;5&quot;);"> <input type="radio" name="options" id="option2" autoComplete="off" /> Hex</label> </div>
                                </div>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">12</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-5"><a className="dropdown-item" href="../txs7a4d.html?ea=0xa68466208f1a3eb21650320d2520ee8eba5ba623&topic0=0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Name</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <p className="text-secondary text-monospace mb-0"><span id="funcname_5" style={{ "display": "inline-block", "margin-bottom": "6px" }} data-title="ABI Event Input">Sync (<span className="text-success">uint112</span> <span className="text-danger">reserve0</span>,  <span className="text-success">uint112</span> <span className="text-danger">reserve1</span>)<a href="javascript:;" className="ml-1" data-toggle="tooltip" title="View source code" onclick="viewSourceCode(&quot;0xa68466208f1a3eb21650320d2520ee8eba5ba623&quot;,&quot;Sync&quot;);">View Source</a> </span></p>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1</span></li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-2 d-md-flex justify-content-between ">
                                <span id="event_raw_data_6" className="text-monospace text-break" style={{ "display": "none" }}>0x000000000000000000000000000000000000000000098774bfcfc32fb389dd56000000000000000000000000000000000000000000000000000000b8c88157a5</span>
                                <div id="event_dec_data_6">
                                  <li className="d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">reserve0 :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="reserve0 (uint112 )">11520005495512006050569558</span></li>
                                  <li className="mt-2 mt-sm-1 d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">reserve1 :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="reserve1 (uint112 )">793637902245</span></li>
                                </div>
                                <div className="d-flex align-items-start mt-3 mt-md-0 ml-md-3">
                                  <div className="btn-group btn-group-toggle" data-toggle="buttons"> <label className="btn btn-xs btn-secondary cursor-pointer active" onclick="javascript:convertEventData(&quot;dec&quot;, &quot;6&quot;);"> <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Dec </label> <label className="btn btn-xs btn-secondary cursor-pointer" onclick="javascript:convertEventData(&quot;hex&quot;, &quot;6&quot;);"> <input type="radio" name="options" id="option2" autoComplete="off" /> Hex</label> </div>
                                </div>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="media">
                        <div className="mt-1 mr-3"><span className="btn btn-icon btn-soft-success rounded-circle"><span className="btn-icon__inner">13</span></span></div>
                        <div className="media-body">
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-weight-bold mb-0">Address</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <a className="text-break mr-2" href="../address/0xa68466208f1a3eb21650320d2520ee8eba5ba623.html">0xa68466208f1a3eb21650320d2520ee8eba5ba623</a>
                              <span className="dropdown">
                                <button className="btn btn-xss btn-custom dropdown-toggle" type="button" id="matchDropdown-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search-plus" /></button>
                                <div className="dropdown-menu" aria-labelledby="matchDropdown-6"><a className="dropdown-item" href="../txs861a.html?ea=0xa68466208f1a3eb21650320d2520ee8eba5ba623&topic0=0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822">Matches Topic[0]</a></div>
                              </span>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Name</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <p className="text-secondary text-monospace mb-0"><span id="funcname_6" style={{ "display": "inline-block", "margin-bottom": "6px" }} data-title="ABI Event Input">Swap (index_topic_1 <span className="text-success">address</span> <span className="text-danger">sender</span>,  <span className="text-success">uint256</span> <span className="text-danger">amount0In</span>,  <span className="text-success">uint256</span> <span className="text-danger">amount1In</span>,  <span className="text-success">uint256</span> <span className="text-danger">amount0Out</span>,  <span className="text-success">uint256</span> <span className="text-danger">amount1Out</span>, index_topic_2 <span className="text-success">address</span> <span className="text-danger">to</span>)<a href="javascript:;" className="ml-1" data-toggle="tooltip" title="View source code" onclick="viewSourceCode(&quot;0xa68466208f1a3eb21650320d2520ee8eba5ba623&quot;,&quot;Swap&quot;);">View Source</a> </span></p>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-3">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="mb-0">Topics</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space mb-0">
                                <li><span className="u-label u-label--xs u-label--secondary rounded mr-1">0</span>&nbsp;<span className="text-monospace text-break">0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822</span></li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">1</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_6_1" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_6_1"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '6_1', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '6_1', '0x000000000000000000000000576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_6_1"><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span><span id="chunk_decodeori_6_1" style={{ "display": "none" }}><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span>
                                </li>
                                <li>
                                  <span className="u-label u-label--xs u-label--secondary rounded mr-1">2</span>
                                  <span className="dropdown">
                                    <button type="button" id="convert_decode_btn_6_2" className="btn btn-xss btn-custom dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"> Dec</button>
                                    <div className="dropdown-menu" aria-labelledby="convert_decode_btn_6_2"><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Dec', '6_2', '', true);">Decode </a><a className="dropdown-item" href="javascript: funcDecodeOnclick1('Hex', '6_2', '0x000000000000000000000000576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef', false);"> Hex</a></div>
                                  </span>
                                  <i className="fa fa-long-arrow-alt-right text-secondary mx-1" /><span className="text-monospace text-break" id="chunk_decode_6_2"><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span><span id="chunk_decodeori_6_2" style={{ "display": "none" }}><a href="../address/0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef.html">0x576d2bfe9ac3c0bb351b04acef3f5b6fa9d30cef</a></span>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                          <dl className="row align-items-baseline mb-0">
                            <dt className="col-md-2 col-lg-1 text-md-right">
                              <h6 className="font-italic mb-0">Data</h6>
                            </dt>
                            <dd className="col-md-10 mb-0">
                              <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-2 d-md-flex justify-content-between ">
                                <span id="event_raw_data_7" className="text-monospace text-break" style={{ "display": "none" }}>0x000000000000000000000000000000000000000000000116b39e8f1995098d1f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001515a3fa</span>
                                <div id="event_dec_data_7">
                                  <li className="d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">amount0In :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="amount0In (uint256 )">5141137792210402118943</span></li>
                                  <li className="mt-2 mt-sm-1 d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">amount1In :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="amount1In (uint256 )">0</span></li>
                                  <li className="mt-2 mt-sm-1 d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">amount0Out :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="amount0Out (uint256 )">0</span></li>
                                  <li className="mt-2 mt-sm-1 d-lg-flex"><span className="text-secondary rounded mr-1 text-truncate">amount1Out :</span><span className="text-monospace text-break d-block d-sm-inline-block" data-toggle="tooltip" title="amount1Out (uint256 )">353739770</span></li>
                                </div>
                                <div className="d-flex align-items-start mt-3 mt-md-0 ml-md-3">
                                  <div className="btn-group btn-group-toggle" data-toggle="buttons"> <label className="btn btn-xs btn-secondary cursor-pointer active" onclick="javascript:convertEventData(&quot;dec&quot;, &quot;7&quot;);"> <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Dec </label> <label className="btn btn-xs btn-secondary cursor-pointer" onclick="javascript:convertEventData(&quot;hex&quot;, &quot;7&quot;);"> <input type="radio" name="options" id="option2" autoComplete="off" /> Hex</label> </div>
                                </div>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="mb-5" />
                    </div>
                  </div>
                  {/* End Tabe Pane */}
                  {/* Tabe Pane */}
                  <div className="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                    <div className="card-body">
                      <p>Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting conversations.</p>
                      <br />
                      <div className="panel-body">
                        <div>
                          <div id="disqus_thread" />
                          <noscript>Please enable JavaScript to view the &lt;a href='#' rel='nofollow noopener'&gt;comments powered by Disqus&lt;/a&gt;.</noscript>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Tabe Pane */}
                </div>
              </div>
              <div className="container mt-4 text-center">
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

export default Tx;