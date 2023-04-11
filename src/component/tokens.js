import React, { Component,useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Tokens = () => {


    useEffect(() => {

      

    }, []);


    return (
        <>

<div className="wrapper">
  <Header/>
  <main id="content" role="main">
    {/* Page Title */}    
    <div className="container">
      <div id="ContentPlaceHolder1_divTokensTitle" className="py-3">
        <div className="mb-1 mb-md-0">
          <h1 id="ContentPlaceHolder1_h1Tag" className="h4 d-flex align-items-center mb-0">Token Tracker<a className="u-label u-label--xs u-label--secondary rounded color-strong ml-2" href="#" target="_blank" rel="nofollow" data-toggle="tooltip" title="External link to CCC Information">CCC</a></h1>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    <div className="container space-bottom-2">
      {/* Card Tabs */}
      <div className="card">
        {/* Card Header */}
        <div id="ContentPlaceHolder1_searchBarDiv" className="card-header d-md-flex justify-content-between align-items-center">
          <div className="mb-1 mb-md-0">
            <h2 className="card-header-title">CCC Tokens By Market Capitalization</h2>
          </div>
          <div className="d-flex ml-auto">
            <div className="position-relative order-1 order-md-2">
              <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scccll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="Search for Token Name or Address">
                <i className="fa fa-search btn-icon__inner" />
              </a>
              <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{"width":"310px"}}>
                <form action="#" method="get" autoComplete="off" spellCheck="false" className="js-focus-state input-group input-group-sm w-100">
                  <input id="searchtoken" name="q" type="search" defaultValue className="form-control" placeholder="Search for Token Name or Address" onkeyup="handleTokenSearch(this);" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary" data-toggle="tooltip">Find</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Header */}
        <div className="card-body">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="transfers" role="tabpanel" aria-labelledby="tokens-tab">
              <div id="ContentPlaceHolder1_divpagingpanel" className="d-md-flex justify-content-between align-items-center mb-4">
                <p className="mb-2 mb-lg-0">
                  <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse" style={{"display":"none","margin-top":"4px"}}>&nbsp;</i>
                  Showing 63 Token Contracts (From a total of 26,580 Token Contracts)
                </p>
                <nav className="mb-4 mb-md-0" aria-label="page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled"><span className="page-link">First</span></li>
                    <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                    <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">2</strong></span></li>
                    <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href="busy?p=2" aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                    <li className="page-item"><a className="page-link" href="busy?p=2"><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                  </ul></nav>
              </div>
              <div className="stickyTableHead" id="divSTContainer">
                <div id="ContentPlaceHolder1_divresult" className="table-responsive mb-2 mb-md-0">
                  <table className="table table-text-normal table-hover" id="tblResult">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" width={1} className="token-sticky-header">#</th>
                        <th scope="col" width={30} className="token-sticky-header">Token</th>
                        <th scope="col" width={5} className="text-nowrap"><a href="busy?sort=price_usd&order=desc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for descending sort">Price</a></th>
                        <th scope="col" width={5} className="text-nowrap"><a href="busy?sort=percent_change_24h&order=desc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for descending sort">Change (%)</a></th>
                        <th scope="col" width={5} className="text-nowrap"><a href="busy?sort=24h_volume_usd&order=desc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for descending sort">Volume (24H)</a></th>
                        <th scope="col" width={5} className="text-nowrap"><strong><i className="fa fa-angle-down" /></strong>&nbsp;<a href="busy?sort=marketcap&order=asc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Sorted in descending order,
Click for ascending sort" style={{"-webkit-text-decoration":"underline","text-decoration":"underline"}}>Circulating Market Cap</a> <i className="far fa-question-circle text-muted" data-placement="right" data-boundary="viewport" data-toggle="tooltip" data-html="true" data-title="<p class='text-white text-left mb-0'>Calculated by multiplying the number of tokens in circulating supply aCCCss all chains with the current market price per token.</p>" data-original-title title /></th>
                        <th scope="col" width={5} className="text-nowrap">On-Chain Market Cap <i className="far fa-question-circle text-muted" data-placement="right" data-boundary="viewport" data-toggle="tooltip" data-html="true" data-title="<p class='text-white text-left mb-0'>Calculated by multiplying the token's Total Supply on chromescan Chain with the current market price per token.</p>" data-original-title title /></th>
                        <th scope="col" width={5} className="text-nowrap"><a href="busy?sort=holders&order=desc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for descending sort">Holders</a></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="media">
                            <img className="u-xs-avatar mr-2" src="token/images/tetherusdt_32.png" />
                            <div className="media-body">
                              <h3 className="h6 mb-0"><a className="text-primary" href={`${config.baseUrl}busy`}>Tether USD (CUSDT)</a></h3>
                              <p className="d-none d-md-block font-size-1 mb-0">Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-nowrap">
                          <span data-toggle="tooltip" data-html="true" data-title="$1.001" data-original-title title>$1.001</span>
                          <div className="small text-secondary">0.000035&nbsp;CUSDT<span className="d-block">14.486252&nbsp;CCC</span></div>
                        </td>
                        <td><span className="text-success text-nowrap"><i className="fa  fa-caret-up" /> 0.12%</span></td>
                        <td>$33,712,222,735.00</td>
                        <td>$79,665,289,943.00&nbsp;&nbsp;&nbsp;</td>
                        <td>$180,436,749.49&nbsp;&nbsp;&nbsp;</td>
                        <td>40,309</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form method="post" action="https://chromescancan.com/tokens" id="ctl00">
                <div className="aspNetHidden">
                </div>
                <div className="aspNetHidden">
                </div>
                <div id="ContentPlaceHolder1_divPagination" className="d-md-flex justify-content-between my-3">
                  <div className="d-flex align-items-center text-secondary mb-2 mb-md-0">
                    Show
                    <select name id className="custom-select custom-select-xs mx-2">
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option selected="selected" value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    Records
                  </div>
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled"><span className="page-link">First</span></li>
                    <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                    <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">2</strong></span></li>
                    <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href={`${config.baseUrl}tokens`} aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                    <li className="page-item"><a className="page-link" href={`${config.baseUrl}tokens`}><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                  </ul></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Tabs */}
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
<Footer/>


        </>

    )

}

export default Tokens;