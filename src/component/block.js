import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Block = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <div>
          <main id="content" role="main">
            <div className="container">
              <div className="d-md-flex justify-content-between align-items-center py-3">
                <div className="mb-1 mb-md-0">
                  <h1 className="h4 mb-0">
                    Blocks&nbsp;<span className="small text-secondary" />
                    <p className="mb-0 text-break small">
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="container space-bottom-2">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center p-0">
                  <ul className="nav nav-custom nav-borderless nav_tabs1" id="nav_tabs" role="tablist">
                    <li className="nav-item"><a className="nav-link active" href="#overview" data-toggle="tab" onclick="javascript:updatehash('');">Overview</a></li>
                    <li id="ContentPlaceHolder1_li_disqus" className="nav-item"><a className="nav-link" href="#comments" data-toggle="tab" onclick="javascript:loaddisqus();"><span className="disqus-comment-count" data-disqus-identifier="chromescancan_BlockNo_7633185_Comments">Comments</span><span id="commentindicator" /> </a></li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                    <div id="ContentPlaceHolder1_maintable" className="card-body">
                      <div className="row align-items-center  mt-1">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block." />Block Height:</div>
                        <div className="col-md-9">
                          <div className="d-flex">
                            <span className="font-weight-sm-bold mr-2">
                              7633185</span>
                            <a className="btn btn-xs btn-icon btn-soft-info mr-1" href="#" data-toggle="tooltip" title="View previous block"><i className="fa fa-chevron-left btn-icon__inner" /></a>
                            <a className="btn btn-xs btn-icon btn-soft-info mr-1" href="#" data-toggle="tooltip" title="View next block"><i className="fa fa-chevron-right btn-icon__inner" /></a>
                          </div>
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The date and time at which a block is validated." />Timestamp:</div>
                        <div className="col-md-9">
                          <i className="far fa-clock small mr-1" />7 mins ago (Mar-30-2023 11:53:42 AM +UTC)
                        </div>
                      </div>
                      <div id="ContentPlaceHolder1_div_tx_fieldname">
                        <hr className="hr-space mb-2" />
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves CCC value." />Transactions:</div>
                          <div id="ContentPlaceHolder1_div_tx_fieldvalue" className="col-md-9">
                            <a className="u-label u-label--value u-label--primary rounded my-1" href={`${config.baseUrl}busy`} data-toggle="tooltip" title="Click to view Transactions">7 transactions</a>  and  <a className="u-label u-label--value u-label--primary rounded my-1" href={`${config.baseUrl}busy`} data-toggle="tooltip" title="Click to view Internal Transactions">3 contract internal transactions</a>  in this block
                          </div>
                        </div>
                      </div>
                      <div id="ContentPlaceHolder1_minerDiv">
                        <hr className="hr-space mt-2" />
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Validated who successfully include the block onto the blockchain." />Validated By:</div>
                          <div className="col-md-9">
                            <a href={`${config.baseUrl}address`}>0x27da67fe85ae7971bd5fe1d6e442b5dc0ad7b086</a> in 6 secs
                          </div>
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="For each block, the miner is rewarded with a finite amount of CCC on top of the fees paid for all transactions in the block." />Block Reward:</div>
                        <div className="col-md-9">
                          4<b>.</b>620828869139169869 CCC
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center  d-none">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in chromescancan as it secures the blockchain." />Uncles Reward:</div>
                        <div className="col-md-9">
                          0
                        </div>
                      </div>
                      <hr className="hr-space d-none" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time." />Difficulty:</div>
                        <div className="col-md-9">
                          0
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Total difficulty of the chain until this block." />Total Difficulty:</div>
                        <div className="col-md-9">
                          0
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The block size is actually determined by the block's gas limit." />Size:</div>
                        <div className="col-md-9">
                          6,857 bytes
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The total gas used in the block and its percentage of gas filled in the block." />Gas Used:</div>
                        <div className="col-md-9">
                          967,923 (2.42%)
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row align-items-center">
                        <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Total gas limit provided by all transactions in the block." />Gas Limit:</div>
                        <div className="col-md-9">
                          40,000,000
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="collapse  " id="collapsePanel">
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The hash of the block header of the current block." />Hash:</div>
                          <div className="col-md-9">
                            0xe0b7c7f7485fab582365a607c76ebaf8c7580645d159d4fbd820fa841feb1e80
                          </div>
                        </div>
                        <hr className="hr-space" />
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The hash of the block from which this block was generated, also known as its parent block." />Parent Hash:</div>
                          <div className="col-md-9">
                            <a href={`${config.baseUrl}busy`}>0xf22a6e719f964e67624ead42e3e06922b65af30a2000f5727f8bd6ee14e622ae</a>
                          </div>
                        </div>
                        <hr className="hr-space" />
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="The mechanism which chromescancan Javascript RLP encodes an empty string." />Sha3Uncles:</div>
                          <div className="col-md-9">
                            0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
                          </div>
                        </div>
                        <hr className="hr-space" />
                        <div className="row align-items-center">
                          <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e"><i className="fal fa-question-circle text-secondary mr-1" data-container="body" data-toggle="popover" data-placement="top" data-original-title title data-content="Block nonce is a value used during mining to demonstrate proof of work for a block." />Nonce:</div>
                          <div className="col-md-9">
                            0x0000000000000000
                          </div>
                        </div>
                        <hr className="hr-space" />
                      </div>
                      <span id="ContentPlaceHolder1_collapsedLink_span">
                        <a className="d-block collapsed" id="collapsedLink" data-toggle="collapse" href="#collapsePanel" role="button" aria-expanded="false" aria-controls="collapsePanel">
                          <span>
                            Click to see <span className="card-arrow-more">more</span> <span className="card-arrow-less">less</span>
                            <span className="card-btn-arrow card-btn-arrow--up ml-2">
                              <span className="fas fa-arrow-up small" />
                            </span>
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                    <div className="card-body">
                      Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting conversations.<br />
                      <div id="disqus_thread" />
                      <noscript>Please enable JavaScript to view the &lt;a href='https://disqus.com/?ref_noscript' rel='nofollow'&gt;comments powered by Disqus&lt;/a&gt;.</noscript>
                    </div>
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

export default Block;