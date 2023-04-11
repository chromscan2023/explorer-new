import React, { Component,useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../coreFiles/config';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Home = () => {


    useEffect(() => {

      

    }, []);


    return (
        <>

<div className="wrapper">
<Header sethideSearch={true}/>
  <main id="content" role="main">
    <section className="bg-img-hero-main bg-dark">
      <div className="container space-top-2 space-bottom-3">
        {/* Search */}
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-md-12 col-lg-7  ">
            <div className="pr-lg-4 pr-xll-5">
              <h1 className="h4 mb-3 text-white ">
                The Official Chromescan Explorer
              </h1>
              <form className="mb-3" action="#" method="GET">
                <div className="input-group input-group-shadow">
                  <div className="input-group-prepend d-none d-md-block">
                    {/* Select */}
                    <select name="f" className="custom-select custom-arrow-select input-group-text font-size-base filterby text-left">
                      <option selected value={0}>All Filters</option>
                      <option value={1}>Addresses</option>
                      <option value={2}>Tokens</option>
                      <option value={3}>Name Tags</option>
                      <option value={4}>Labels</option>
                      <option value={5}>Websites</option>
                    </select>
                    {/* End Select */}
                  </div>
                  <input id="txtSearchInput" type="text" className="form-control searchautocomplete" placeholder="Search by Address / Txn Hash / Block / Token" aria-describedby="button-header-search" name="q" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            {/* Ads */}
            <div className="d-none d-lg-block text-center pl-lg-4 pl-xll-5">
              <a className="d-inline-block d-sm-none position-relative text-dark" target="_blank" href="#"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"left":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_321x101.jpeg" alt="Ads" width={321} height={101} /></a>
              <a className="d-none d-sm-inline-block d-lg-none position-relative text-dark" target="_blank" href="#"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"left":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_730x90.png" alt="Ads" width={730} height={90} /></a>
              <a className="d-none d-lg-inline-block position-relative text-dark" target="_blank" href="#"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"right":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_321x101.jpeg" alt="Ads" width={321} height={101} /></a>
            </div>
            {/* End Ads */}
          </div>
        </div>
        {/* End Search */}
      </div>
    </section>
    <div className="container space-bottom-1 mt-n5">
      {/* Stats */}
      <div id="ContentPlaceHolder1_mainboxes" className="card mb-4">
        <div className="card-body ">
          <div className="row mx-gutters-md-1">
            <div className="col-md-6 col-lg-4">
              <div className="media align-items-center ">
                <figure className="u-sm-avatar mr-2">
                  <div className="u-xs-avatar mx-auto">
                    <img src="images/smalllogo.png" width="28px" style={{"margin-left":"-4px"}} />
                  </div>
                </figure>
                <div className="media-body">
                  <h2 className="font-size-1 text-uppercase text-secondary mb-0">CCC Price</h2>
                  <a className="text-size-1 text-link" href={`${config.baseUrl}chart/price`} rel="tooltip" data-toggle="tooltip" data-placement="bottom" title="View Historical CCC Price">$0.07<span className="text-secondary"> @ 0.000002 CUSDT</span><span className="text-success small"> (+0.33%)</span></a>
                </div>
              </div>
              <hr className="hr-space-lg" />
              <div className="media align-items-center">
                <figure className="u-sm-avatar mr-2">
                  <img src="images/svg/icons/icon-8e06d.svg" alt="Market Cap" />
                </figure>
                <div className="media-body">
                  <h2 className="font-size-1 text-uppercase text-secondary mb-0">Market Cap
                  </h2>
                  <span className="text-size-1">$133,500.00 <span className="text-secondary">(89000 CCC)</span></span>                                
                </div>
              </div>
              <hr className="d-block d-md-none hr-space-lg" />
            </div>
            <div className="col-md-6 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-md">
              <div className="media align-items-center">
                <figure className="u-sm-avatar mr-2">
                  <img src="images/svg/icons/icon-2-1e06d.svg" alt="Network Difficulty" />
                </figure>
                <div className="media-body">
                  <h2 className="font-size-1 text-uppercase text-secondary mb-0">Transactions</h2>
                  <a href={`${config.baseUrl}txs`} className="text-size-1 text-link" rel="tooltip" data-toggle="tooltip" data-placement="left" data-html="true" title="Total Transactions Counter<br>(Update every 5 mins)">71.12 M</a><span className="text-secondary small" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title="Transactions per Second"> (0.5 TPS)</span>
                </div>
              </div>
              <hr className="hr-space-lg" />
              <div className="media align-items-center">
                <figure className="u-sm-avatar mr-2">
                  <img src="images/svg/icons/icon-51e06d.svg" alt="SVG" />
                </figure>
                <div className="media-body">
                  <h2 className="font-size-1 text-uppercase text-secondary mb-0">Latest Block</h2>
                  <a className="text-size-1 text-link" href={`${config.baseUrl}blocks`} rel="tooltip" data-placement="bottom" title="The latest Block No"><span id="lastblock">7633239</span></a>
                  <a data-toggle="tooltip" href={`${config.baseUrl}chart/blocktime`} className="small text-secondary  text-link" data-placement="right" data-title="Average Block Time (The latest 5000 blocks)">(<span id="avgblocktime">5.6s</span>)</a>
                </div>
              </div>
              <hr className="d-block d-md-none hr-space-lg" />
            </div>
            <div className="col-md-12 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-lg">
              <hr className="d-none d-md-block d-lg-none my-4" />
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="font-size-1 text-uppercase text-secondary mb-0">chromescan Chain TRANSACTION HISTORY LAST 14 DAYS</h2>
                <div className="position-relative float-right z-index-2">
                  <a id="customchartsinvoker" className="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" role="button" aria-controls="customcharts" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-target="#customcharts" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scccll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                    <i className="fa fa-ellipsis-v btn-icon__inner" />
                  </a>
                  <div id="customcharts" className="dropdown-menu dropdown-menu-right dropdown-unfold" aria-labelledby="customchartsinvoker">
                    <a className="dropdown-item" href={`${config.baseUrl}chart/tx`}>View Detailed Chart</a>
                  </div>
                </div>
              </div>
              <div>
                <div id="container-1" className style={{"height":"106px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Stats */}
      {/* Ads */}
      <div className="d-block d-lg-none text-center pl-lg-4 pl-xll-5 mb-4">
        <a className="d-inline-block d-sm-none position-relative text-dark" target="_blank" href="https://goto.etherscan.com/rd/GFVEA2VRYS1PTV3ZNQTG43HFK"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"left":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_321x101.jpeg" alt="Ads" width={321} height={101} /></a>
        <a className="d-none d-sm-inline-block d-lg-none position-relative text-dark" target="_blank" href="https://goto.etherscan.com/rd/GFVEA2VRYS1PTV3ZNQTG43HFK"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"left":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_730x90.png" alt="Ads" width={730} height={90} /></a>
        <a className="d-none d-lg-inline-block position-relative text-dark" target="_blank" href="https://goto.etherscan.com/rd/GFVEA2VRYS1PTV3ZNQTG43HFK"><span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{"right":"1rem"}}>Ad</span><img className="img-fluid rounded" src="assets/images/gen/cryptocom_jun22_Ferro_321x101.jpeg" alt="Ads" width={321} height={101} /></a>
      </div>
      {/* End Ads */}
      {/* Lastest Blocks & Transactions */}
      <div className="row mb-5">
        {/* Blocks */}
        <div id="ContentPlaceHolder1_divBlocks" className="col-lg-6 mb-4 mb-lg-0">
          <div className="card shadow-lg border-0 h-100">
            {/* Card Header */}
            <div className="card-body p-4">
              <h2 className="card-header-title">Latest Blocks</h2>
              <hr className="hr-space my-4" />
              {/* End Card Header */}
              <div className="js-sCCCllbar overflow-hidden pr-4 mr-n4 " style={{"height":"420px"}}>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary"><span className="btn-icon__inner text-dark">BK</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none">Block</span> <a href={`${config.baseUrl}block`}>7633239</a><span className="d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap"> 18 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-nowrap"><span className="d-block mb-1 mb-sm-0">Validated By  <a className="hash-tag text-truncate" href={`${config.baseUrl}address`}>0x4f87a3f99bd1e58d01de1c38b7f83cb967e816c2</a></span><a href={`${config.baseUrl}txs7063`} data-toggle="tooltip" title="Transactions in this Block">2 txns </a> <span className="small text-secondary">in 5 secs</span><span className="d-inline-block d-sm-none"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">1<b>.</b>36426 CCC</span></span></div>
                      <div className="d-none d-sm-block"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">1<b>.</b>36426 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary"><span className="btn-icon__inner text-dark">BK</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none">Block</span> <a href={`${config.baseUrl}block`}>7633238</a><span className="d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap"> 23 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-nowrap"><span className="d-block mb-1 mb-sm-0">Validated By  <a className="hash-tag text-truncate" href={`${config.baseUrl}address`}>0x81e3e543647e466a5abc824f5844ab0a091b6c6c</a></span><a href={`${config.baseUrl}txs09a0`} data-toggle="tooltip" title="Transactions in this Block">5 txns </a> <span className="small text-secondary">in 6 secs</span><span className="d-inline-block d-sm-none"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">4<b>.</b>77365 CCC</span></span></div>
                      <div className="d-none d-sm-block"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">4<b>.</b>77365 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary"><span className="btn-icon__inner text-dark">BK</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none">Block</span> <a href={`${config.baseUrl}block`}>7633231</a><span className="d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap"> 1 min ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-nowrap"><span className="d-block mb-1 mb-sm-0">Validated By  <a className="hash-tag text-truncate" href={`${config.baseUrl}address`}>0x4a4bfe298808c9482676c75d4df1282498a5d1a6</a></span><a href={`${config.baseUrl}txsbaa2`} data-toggle="tooltip" title="Transactions in this Block">6 txns </a> <span className="small text-secondary">in 6 secs</span><span className="d-inline-block d-sm-none"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">4<b>.</b>17299 CCC</span></span></div>
                      <div className="d-none d-sm-block"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">4<b>.</b>17299 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary"><span className="btn-icon__inner text-dark">BK</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none">Block</span> <a href={`${config.baseUrl}block`}>7633230</a><span className="d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap"> 1 min ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-nowrap"><span className="d-block mb-1 mb-sm-0">Validated By  <a className="hash-tag text-truncate" href={`${config.baseUrl}address`}>0xca5cf03d081197be24ef707081fbd7f3f11eb02d</a></span><a href={`${config.baseUrl}txs12b1`} data-toggle="tooltip" title="Transactions in this Block">2 txns </a> <span className="small text-secondary">in 6 secs</span><span className="d-inline-block d-sm-none"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">2<b>.</b>451 CCC</span></span></div>
                      <div className="d-none d-sm-block"><span className="u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Block Reward">2<b>.</b>451 CCC</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-space my-4" />
              <a className="btn btn-xs btn-block btn-soft-primary " href={`${config.baseUrl}blocks`}>View all blocks</a>
            </div>
          </div>
        </div>
        {/* End Blocks */}
        {/* Blocks */}
        {/* End Blocks */}
        {/* Transactions */}
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 h-100">
            {/* Card Header */}
            <div className="card-body p-4">
              <h2 className="card-header-title">Latest Transactions</h2>
              <hr className="hr-space my-4" />
              <div className="js-sCCCllbar overflow-hidden pr-4 mr-n4 " style={{"height":"420px"}}>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}tx`}>0x6e670fe05c9712b5333c5dd5fdbe8bba6d2c3b3b6e61149d7c9d966715827c0b</a><span className="d-none d-sm-block small text-secondary">18 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}address`}>0xd61bee54ad293239993d075c53d7057109c441cd</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}address`} className="hash-tag text-truncate">0x3637758e769b79d14ccc100fb3527b55015683d8</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">0 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}busy`}>0xa03516fa9012538b42ff7a0333c0dbf1905072e5a33fe3acd9afb28fa06ee9fb</a><span className="d-none d-sm-block small text-secondary">23 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}busy`}>0x7678172f49278b2529312f0b0b6f668ae34a3671</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}busy`} className="hash-tag text-truncate">0xdccd6455ae04b03d785f12196b492b18129564bc</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">0 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}busy`}>0x41f0ebc20999584020453fb80f0bfc0ab2e264d8c5b47bc3ae001697d18f5b4e</a><span className="d-none d-sm-block small text-secondary">23 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}busy`}>0x6db508a54db945d6c073bfd35f27bf434ba976ae</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}busy`} className="hash-tag text-truncate">0xa6ff77fc8e839679d4f7408e8988b564de1a2dcd</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">0 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}busy`}>0xe45a0da976a93d64465a3c0612c076a08f38e8b6182e0e80eae8a65097f4df63</a><span className="d-none d-sm-block small text-secondary">29 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}busy`}>0xb9bfc33dd9f99a984bfb15575773298a94b9944b</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}busy`} className="hash-tag text-truncate">0xa683fdfd9286eedfea81cf6da14703da683c44e5</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">0 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}busy`}>0xb32302617ad63037c45ae2cf7d624c0a8756b296c0e0b6e0a79b46d8467dffb5</a><span className="d-none d-sm-block small text-secondary">29 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}busy`}>0x1c09583c82b3019e9ac1306740e9bc745dacc576</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}busy`} className="hash-tag text-truncate">0xb2354a130ec539cb2b89d9ac5c1ae30b3b2c16ae</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">1,500 CCC</span></div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row">
                  <div className="col-sm-4">
                    <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                      <div className="d-none d-sm-flex mr-2"><span className="btn  btn-icon btn-soft-secondary rounded-circle"><span className="btn-icon__inner text-dark">TX</span></span></div>
                      <div className="media-body"><span className="d-inline-block d-sm-none mr-1">TX#</span><a className="hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate" href={`${config.baseUrl}busy`}>0x5eadb09b31c9bb3cb5ede5d9b7646ee4692a7dfd35524e949923dd029e2d02fb</a><span className="d-none d-sm-block small text-secondary">29 secs ago</span></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="text-nowrap mr-4 mb-1 mb-sm-0"><span>From <a className="hash-tag text-truncate" href={`${config.baseUrl}busy`}>0x04d5906588aad07919aee4361c23be092bba2767</a></span><span className="d-sm-block">To <a href={`${config.baseUrl}busy`} className="hash-tag text-truncate">0xf880dc58a5fc2cccd1513077686d30787eae430a</a></span></div>
                      <div><span className="u-label u-label--xs u-label--badge-in  u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="Amount">1 CCC</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-space my-4" />
              <a className="btn btn-xs btn-block btn-soft-primary " href={`${config.baseUrl}txs`}>View all transactions</a>
            </div>
          </div>
        </div>
        {/* End Transactions */}
      </div>
      {/* End Lastest Blocks & Transactions */}
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

export default Home;