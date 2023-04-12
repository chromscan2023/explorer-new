import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Tokensnft = () => {


  useEffect(() => {



  }, []);


  return (
    <>

      <div className="wrapper">
        <Header />
        <main id="content" role="main">
          {/* Page Title */}
          <div className="container py-3">
            <div className="d-sm-flex align-items-center">
              <div className="mb-2 mb-sm-0">
                <h1 className="h4 d-flex align-items-center mb-0">Non-Fungible&nbsp;Token Tracker<span className="u-label u-label--xs u-label--secondary rounded color-strong ml-2">CCC721</span></h1>
              </div>
            </div>
          </div>
          {/* End Page Title */}
          <div className="container space-bottom-2">
            {/* Card Tabs */}
            <div className="card">
              {/* Card Header */}
              <div className="card-header d-md-flex justify-content-between align-items-center">
                <div className="mb-1 mb-md-0">
                  <h2 className="card-header-title">Non-Fungible Tokens (NFT)</h2>
                </div>
                <div className="d-flex ml-auto">
                  {/* Search */}
                  <div className="position-relative order-1 order-md-2">
                    <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scccll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="Search for Token Name or Address">
                      <i className="fa fa-search btn-icon__inner" />
                    </a>
                    <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{ "width": "310px" }}>
                      <form action="https://Chrome Scan.com/tokens-nft" method="get" autoComplete="off" spellCheck="false" className="js-focus-state input-group input-group-sm w-100">
                        <input id="searchtoken" name="q" type="search" defaultValue className="form-control" placeholder="Search for Token Name or Address" onkeyup="handleTokenSearch(this);" />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-primary">Find</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Search */}
                </div>
              </div>
              {/* End Card Header */}
              {/* Card Body */}
              <div className="card-body">
                {/* Pagination & more */}
                <div id="ContentPlaceHolder1_divpagingpanel" className="d-md-flex justify-content-between align-items-lg-center mb-4">
                  <p className="mb-2 mb-md-0">
                    <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ "display": "none" }} />
                    A total of 2,566  CCC-721 Token Contracts found
                  </p>
                  {/* Pagination */}
                  <nav className="mb-4 mb-md-0" aria-label="page navigation">
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled"><span className="page-link">First</span></li>
                      <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                      <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">52</strong></span></li>
                      <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href={`${config.baseUrl}busy`} aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                      <li className="page-item"><a className="page-link" href={`${config.baseUrl}busy`}><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                    </ul></nav>
                  {/* End Pagination */}
                </div>
                {/* End Pagination & more */}
                {/* Table */}
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="transfers" role="tabpanel" aria-labelledby="tokens-nft-tab">
                    <div className="stickyTableHead" id="divSTContainer">
                      <div id="ContentPlaceHolder1_divresult" className="table-responsive mb-2 mb-md-0">
                        <table className="table table-text-normal table-hover" id="tblResult">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" width={1} className="token-sticky-header">#</th>
                              <th scope="col" className="token-sticky-header">Token</th>
                              <th scope="col" width={100} className="text-nowrap"><i className="fa fa-angle-down" style={{ "color": "gray" }} /> <a href="busy?sort=24h&order=asc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for ascending sort">Transfers (24H)</a></th>
                              <th scope="col" width={100} className="text-nowrap"><a href="tokens-nft.html?sort=7d&order=desc" data-toggle="tooltip" data-boundary="viewport" data-html="true" title="Click for descending sort">Transfers (2D)</a></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <div className="media">
                                  <img className="u-xs-avatar mr-2" src="images/main/empty-token.png" />
                                  <div className="media-body">
                                    <h3 className="h6 mb-0">
                                      <div className="token-wrap"><a className="text-primary" href={`${config.baseUrl}token/0x57256d5243bd11972705c31aca63ecc7d388e4d8`} data-boundary="viewport" data-html="true" data-toggle="tooltip" title="0x57256d5243bd11972705c31aca63ecc7d388e4d8">InventorbotComponentBackground</a></div>
                                    </h3>
                                  </div>
                                </div>
                              </td>
                              <td>6,894</td>
                              <td>6,894</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Show entries & more */}
                    <form method="post" action="https://Chrome Scan.com/tokens-nft" id="ctl00">
                      <div className="aspNetHidden">
                      </div>
                      <div className="aspNetHidden">
                      </div>
                      <div id="ContentPlaceHolder1_divPagination" className="d-md-flex justify-content-between align-items-center my-3">
                        {/* Show entries */}
                        <div className="d-flex align-items-center text-secondary mb-3 mb-md-0">
                          Show
                          <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" id="ContentPlaceHolder1_ddlRecordsPerPage" className="custom-select custom-select-xs mx-2">
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option selected="selected" value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                          Records
                        </div>
                        {/* End Show entries */}
                        {/* Pagination */}
                        <ul className="pagination pagination-sm mb-0">
                          <li className="page-item disabled"><span className="page-link">First</span></li>
                          <li className="page-item disabled"><span className="page-link"><i className="fa fa-chevron-left small" /></span><span className="sr-only">Previous</span></li>
                          <li className="page-item disabled"><span className="page-link text-nowrap">Page  <strong className="font-weight-medium">1</strong> of <strong className="font-weight-medium">52</strong></span></li>
                          <li className="page-item" data-toggle="tooltip" title="Go to Next"><a className="page-link" href="tokens.html?p=2" aria-label="Next"><span aria-hidden="True"><i className="fa fa-chevron-right small" /></span> <span className="sr-only">Next</span></a></li>
                          <li className="page-item"><a className="page-link" href="tokens.html?p=52"><span aria-hidden="True">Last</span> <span className="sr-only">Last</span></a></li>
                          {/* End Pagination */}
                        </ul></div>
                    </form>
                    {/* End Show entries & more */}
                  </div>
                </div>
                {/* End Table */}
              </div>
              {/* End Card Body */}
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
      <Footer />


    </>

  )

}

export default Tokensnft;