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
          <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
          <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" value="Date Time (UTC)" />
          <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" value="Click to show Age Format" />
          <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" value="Click to show Datetime Format" />
          <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" value="Gas Price in Gwei" />
          <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in CCC" />
          <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
          <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
          <div className="container py-5">
            {/* Title */}
            <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-4">
              <h1 className="h2">chromescancan Developer APIs</h1>
            </div>
            {/* End Title */}
            <div className="w-lg-75 mx-md-auto mb-4">
              <div className="row">
                <div className="col-6 col-sm-3 mb-5 mb-sm-0">
                  {/* Icon Blocks */}
                  <div className="text-center">
                    <figure className="u-avatar mx-auto mb-3">
                      <img src="images/svg/icons/icon-1e06d.svg?v=23.3.4.0" alt="SVG" />
                    </figure>
                    <h3 className="h6 font-weight-normal">Access Blockchain Data</h3>
                  </div>
                  {/* End Icon Blocks */}
                </div>
                <div className="col-6 col-sm-3 mb-5 mb-sm-0">
                  {/* Icon Blocks */}
                  <div className="text-center">
                    <figure className="u-avatar mx-auto mb-3">
                      <img src="images/svg/icons/icon-21e06d.svg?v=23.3.4.0" alt="SVG" />
                    </figure>
                    <h3 className="h6 font-weight-normal">Building DAPPs</h3>
                  </div>
                  {/* End Icon Blocks */}
                </div>
                <div className="col-6 col-sm-3">
                  {/* Icon Blocks */}
                  <div className="text-center">
                    <figure className="u-avatar mx-auto mb-3">
                      <img src="images/svg/icons/icon-2e06d.svg?v=23.3.4.0" alt="SVG" />
                    </figure>
                    <h3 className="h6 font-weight-normal">Verify Contracts</h3>
                  </div>
                  {/* End Icon Blocks */}
                </div>
                <div className="col-6 col-sm-3">
                  {/* Icon Blocks */}
                  <div className="text-center">
                    <figure className="u-avatar mx-auto mb-3">
                      <img src="images/svg/icons/icon-25e06d.svg?v=23.3.4.0" alt="SVG" />
                    </figure>
                    <h3 className="h6 font-weight-normal">Community Driven</h3>
                  </div>
                  {/* End Icon Blocks */}
                </div>
              </div>
            </div>
            <div className="row">
              {/* Account Sidebar */}
              <div className="col-md-3">
                <div className="list-group list-group-lg mb-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="list-group-item list-group-item-action active" id="tab-intro" data-toggle="tab" href="#intro" role="tab" aria-controls="intro" aria-selected="true" onclick="javascript:updatehash('');">Introduction</a>
                  <a className="list-group-item list-group-item-action" id="accounts-tab" data-toggle="tab" href="#accounts" role="tab" aria-controls="accounts" aria-selected="false" onclick="javascript:updatehash('accounts');">Accounts</a>
                  <a className="list-group-item list-group-item-action" id="contracts-tab" data-toggle="tab" href="#contracts" role="tab" aria-controls="contracts" aria-selected="false" onclick="javascript:updatehash('contracts');">Contracts</a>
                  <a className="list-group-item list-group-item-action" id="transactions-tab" data-toggle="tab" href="#transactions" role="tab" aria-controls="transactions" aria-selected="false" onclick="javascript:updatehash('transactions');">Transactions</a>
                  <a className="list-group-item list-group-item-action" id="blocks-tab" data-toggle="tab" href="#blocks" role="tab" aria-controls="blocks" aria-selected="false" onclick="javascript:updatehash('blocks');">Blocks</a>
                  <a className="list-group-item list-group-item-action" id="logs-tab" data-toggle="tab" href="#logs" role="tab" aria-controls="logs" aria-selected="false" onclick="javascript:updatehash('logs');">Logs</a>
                  <a className="list-group-item list-group-item-action" id="proxy-tab" data-toggle="tab" href="#proxy" role="tab" aria-controls="proxy" aria-selected="false" onclick="javascript:updatehash('proxy');">GETH/Parity Proxy</a>
                  <a className="list-group-item list-group-item-action" id="tokens-tab" data-toggle="tab" href="#tokens" role="tab" aria-controls="tokens" aria-selected="false" onclick="javascript:updatehash('tokens');">Tokens</a>
                  <a className="list-group-item list-group-item-action" id="stats-tab" data-toggle="tab" href="#stats" role="tab" aria-controls="stats" aria-selected="false" onclick="javascript:updatehash('stats');">Stats</a>
                  <a className="list-group-item list-group-item-action" id="rpc-tab" data-toggle="tab" href="#rpc" role="tab" aria-controls="rpc" aria-selected="false" onclick="javascript:updatehash('rpc');">Public RPC Nodes</a>
                </div>
              </div>
              {/* End Account Sidebar */}
              {/* Account Content */}
              <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  {/* Introduction */}
                  <div className="card tab-pane fade show active" id="intro" role="tabpanel" aria-labelledby="tab-intro">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Introduction</h2>
                    </div>
                    <div className="card-body px-4">
                      <br />
                      <p>introduction </p>
                      <br />
                    </div>
                  </div>
                  {/* End Introduction */}
                  {/* API PRO */}
                  <div className="card tab-pane fade" id="APIpro" role="tabpanel" aria-labelledby="APIpro-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">API PRO Subscription<span className="badge badge-success ml-1"> New</span></h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="alert alert-info mb-2" role="alert"><span className="text-wrap">The following is a list of additional API endpoints available under the API PRO subscription. To upgrade your API plan, please <a href="#"><b>Contact Us</b></a> for additional information.</span></div>
                      <div className="alert alert-info mb-2 d-none" role="alert"><span className="text-wrap">The chromescancan API Pro is coming soon. To express your interest in the API Pro plan, kindly <a href="#"><b>contact us</b></a> to join the waiting list.</span></div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Historical CCC Balance for a single Address By BlockNo</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=account&amp;action=balancehistory&amp;address=0x0000000000000000000000000000000000001004&amp;blockno=1000&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Average Block Size</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyavgblocksize&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Block Count and Rewards</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyblkcount&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Block Rewards</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyblockrewards&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Average Block Time for A Block to be Included in the chromescan Chain Chain</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyavgblocktime&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Historical CCC-Token TotalSupply by ContractAddress &amp; BlockNo</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=tokensupplyhistory&amp;contractaddress=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51&amp;blockno=4000000&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Historical CCC-Token Account Balance for TokenContractAddress by BlockNo</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=account&amp;action=tokenbalancehistory&amp;contractaddress=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51&amp;address=0x7bb89460599dbf32ee3aa50798bbceae2a5f7f6a&amp;blockno=4000000&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Token Holder List by ContractAddress</h3>
                        <div className="mb-1">Return the current token holder and number of tokens held</div>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=token&amp;action=tokenholderlist&amp;contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;page=1&amp;offset=10000&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Token Info by ContractAddress</h3>
                        <div className="mb-1">Only return token info for a token contract that is updated on chromescancan</div>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=token&amp;action=tokeninfo&amp;contractaddress=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Average Gas Limit</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyavggaslimit&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get chromescan Chain Chain Daily Total Gas Used</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailygasused&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Average Gas Price</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailyavggasprice&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Network Transaction Fee</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailytxnfee&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily New Address Count</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailynewaddress&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Network Utilization</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailynetutilization&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Daily Transaction Count</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=dailytx&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get CCC Historical Price</h3>
                        <p className="mb-0">[Parameters] startdate and enddate format 'yyyy-MM-dd'</p>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=stats&amp;action=CCCdailyprice&amp;startdate=2020-10-01&amp;enddate=2020-10-31&amp;sort=asc&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Address CCC Token Holding</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=account&amp;action=addresstokenbalance&amp;address=0x99817ce62abf5b17f58e71071e590cf958e5a1bf&amp;page=1&amp;offset=100&amp;apikey=YourApiKeyToken{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Address ERC721 Token Holding</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=account&amp;action=addresstokennftbalance&amp;address=0x99817ce62abf5b17f58e71071e590cf958e5a1bf&amp;page=1&amp;offset=100&amp;apikey=YourApiKeyToken{"                               "}{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Address ERC721 Token Inventory By Contract Address</h3>
                        <pre className="text-break-all">{"                                    "}https://api.chromescancan.com/api?module=account&amp;action=addresstokennftinventory&amp;address=0x99817ce62abf5b17f58e71071e590cf958e5a1bf&amp;contractaddress=0x5e74094cd416f55179dbd0e45b1a8ed030e396a1&amp;page=1&amp;offset=100&amp;apikey=YourApiKeyToken{"                               "}{"\n"}{"                                "}</pre>
                        <div className="alert alert-warning"><span className="text-danger">*</span> The above API endpoint is throttled to 2 calls/second regardless of API Pro tier.</div>
                      </div>
                    </div>
                  </div>
                  {/* End API PRO */}
                  {/* Account */}
                  <div className="card tab-pane fade" id="accounts" role="tabpanel" aria-labelledby="accounts-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Account APIs</h2>
                    </div>
                    <div className="card-body  px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get CCC Balance for a single Address</h3>
                        <pre className="text-break-all">{"                                    "}<a href="http://api.chromescancan.com/api?module=account&action=balance&address=0x0000000000000000000000000000000000001004&apikey=YourApiKeyToken">https://api.chromescancan.com/api?module=account&amp;action=balance&amp;address=0x0000000000000000000000000000000000001004&amp;tag=latest&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                      </div>
                    </div>
                  </div>
                  {/* End Account */}
                  {/* Contracts */}
                  <div className="card tab-pane fade" id="contracts" role="tabpanel" aria-labelledby="contracts-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Contract APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Contract ABI for <a href={`${config.baseUrl}contractsVerified`}>Verified Contract Source Codes</a></h3>
                        <pre className="text-break-all">{"                                    "}<a href="http://api.chromescancan.com/api?module=contract&action=getabi&address=0x0000000000000000000000000000000000001004&apikey=YourApiKeyToken">https://api.chromescancan.com/api?module=contract&amp;action=getabi&amp;address=0x0000000000000000000000000000000000001004&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                      </div>
                    </div>
                  </div>
                  {/* End Contracts */}
                  {/* Transactions */}
                  <div className="card tab-pane fade" id="transactions" role="tabpanel" aria-labelledby="transactions-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Transaction APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Check Transaction Receipt Status</h3>
                        <p className="mb-0">Note: status: 0 = Fail, 1 = Pass.</p>
                        <pre className="text-break-all">{"                                    "}<a href="http://api.chromescancan.com/api?module=transaction&action=gettxreceiptstatus&txhash=0xe9975702518c79caf81d5da65dea689dcac701fcdd063f848d4f03c85392fd00&apikey=YourApiKeyToken">https://api.chromescancan.com/api?module=transaction&amp;action=gettxreceiptstatus&amp;txhash=0xe9975702518c79caf81d5da65dea689dcac701fcdd063f848d4f03c85392fd00&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                      </div>
                    </div>
                  </div>
                  {/* End Transactions */}
                  {/* Blocks */}
                  <div className="card tab-pane fade" id="blocks" role="tabpanel" aria-labelledby="blocks-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Blocks APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Block And Uncle Rewards by BlockNo</h3>
                        <pre className="text-break-all">{"                                    "}<a href="http://api.chromescancan.com/api?module=block&action=getblockreward&blockno=2150000&apikey=YourApiKeyToken">https://api.chromescancan.com/api?module=block&amp;action=getblockreward&amp;blockno=2150000&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                      </div>
                    </div>
                  </div>
                  {/* End Blocks */}
                  {/* Event Logs */}
                  <div className="card tab-pane fade" id="logs" role="tabpanel" aria-labelledby="logs-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Logs APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <p className="mb-0">The Event Log API was designed to provide an alternative to the native <a href="#" target="_blank">eth_getLogs</a>. Below are the list of supported filter parameters:</p>
                      </div>
                    </div>
                  </div>
                  {/* End Event Logs */}
                  {/* Proxy */}
                  <div className="card tab-pane fade" id="proxy" role="tabpanel" aria-labelledby="proxy-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Geth/Parity Proxy APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <p className="mb-0">The following are the limited list of supported Proxied APIs for Geth available through chromescancan.</p>
                      </div>
                    </div>
                  </div>
                  {/* End Proxy */}
                  {/* Tokens */}
                  <div className="card tab-pane fade" id="tokens" role="tabpanel" aria-labelledby="tokens-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Token Info APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get CCC-Token TotalSupply (aka MaxSupply)  by ContractAddress</h3>
                        <pre className="text-break-all">{"                                    "}<a href="#">https://api.chromescancan.com/api?module=stats&amp;action=tokensupply&amp;contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                      </div>
                    </div>
                  </div>
                  {/* End Tokens */}
                  {/* Stats */}
                  <div className="card tab-pane fade" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">General Stats APIs</h2>
                    </div>
                    <div className="card-body px-4">
                      <div className="mb-4">
                        <br />
                        <h3 className="h6 font-weight-bold">Get Total Supply of CCC on the chromescan Chain Chain</h3>
                        <pre className="text-break-all">{"                                    "}<a href="#">https://api.chromescancan.com/api?module=stats&amp;action=supply&amp;apikey=YourApiKeyToken</a>{"\n"}{"                                "}</pre>
                        <p className="mb-0">(Result returned in Wei, to get value in CCC divide the  returned results by 1000000000000000000)</p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats */}
                  <div className="card tab-pane fade" id="rpc" role="tabpanel" aria-labelledby="rpc-tab">
                    <div className="card-header">
                      <h2 className="h5 mb-0">Public chromescancan RPC Nodes</h2>
                    </div>
                    <div className="card-body px-4">
                    </div>
                  </div>
                </div>
              </div>
              {/* End Account Content */}
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

      <Footer />


    </>

  )

}

export default Apis;