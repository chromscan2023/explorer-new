import React, { Component, useEffect, useState } from 'react'
import config from '../coreFiles/config';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [hideSearch, sethideSearch] = useState(props.sethideSearch || false)
    useEffect(() => {

    }, [])


    return (
        <>
            <header id="header" className="u-header ">
                <div className="u-header__section py-1 ">
                    <div id="logoAndNav" className="container">
                        <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space ">
                            <div className="w-lg-auto">
                                <a className="navbar-brand " href={`${config.baseUrl}`} target="_parent" aria-label="chromescan">
                                    <img id="logo-header" width={160} src="images/chromescan.png" alt="Logo" />
                                </a>
                                <div id="ethPrice" className={!hideSearch || 'd-none'}>
                                    <div className="d-none d-md-inline-block u-label u-label--price rounded mt-1 ml-n1 text-nowrap">
                                        <span className="text-dark">CCC: $0.07</span><span data-toggle="tooltip" data-placement="top" data-title="Changes in the last 24 hours"><span className="text-success"> (+0.33%)</span></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="navbar-toggler btn u-hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                                    <span id="hamburgerTrigger" className="u-hamburger__box">
                                        <span className="u-hamburger__inner" />
                                    </span>
                                </button>
                            </div>
                            <div className="d-flex flex-column w-100">
                                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse order-md-2">
                                    <ul className="navbar-nav u-header__navbar-nav px-2 px-md-0">
                                        <li id="LI_default" className="nav-item u-header__nav-item active" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                                            <a className="nav-link u-header__nav-link" href={`${config.baseUrl}`} aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Home</a>
                                        </li>
                                        <li id="LI_blockchain" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                                            <a id="blockchainMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Blockchain</a>
                                            <ul id="blockchainSubMenu" className="hs-sub-menu u-header__sub-menu  u-header__sub-menu--spacer" aria-labelledby="blockchainMegaMenu" style={{ "min-width": "230px" }}>
                                                <li id="LI12"><a href={`${config.baseUrl}txs`} className="nav-link u-header__sub-menu-nav-link">Transactions</a></li>
                                                <li id="LI14"><a href={`${config.baseUrl}txsInternal`} className="nav-link u-header__sub-menu-nav-link">Contract Internal Transactions</a></li>
                                                <li className="dropdown-divider" />
                                                <li id="LI_blocks">
                                                    <a id="navBlocks" className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}blocks`} aria-haspopup="true" aria-expanded="false" aria-controls="navSubBlocks">View Blocks</a>
                                                </li>
                                                <li id="LI8" className="d-none"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}404`} >View Uncles</a></li>
                                                <li className="divider" />
                                                <li className="dropdown-divider" />
                                                <li id="LI_accountall"><a href={`${config.baseUrl}accounts`} className="nav-link u-header__sub-menu-nav-link">Top Accounts</a></li>
                                                <li id="LI_contract_verified"><a href={`${config.baseUrl}contractsVerified`} className="nav-link u-header__sub-menu-nav-link">Verified Contracts</a></li>
                                            </ul>
                                        </li>
                                        <li id="LI_Tokens" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                                            <a id="testTokensMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="testTokensSubMenu">Tokens</a>
                                            <ul id="testTokensSubMenu" className="hs-sub-menu u-header__sub-menu  u-header__sub-menu--spacer" aria-labelledby="testTokensMegaMenu" style={{ "min-width": "230px" }}>
                                                <li id="LI18"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokens`} >CCC Tokens By MarketCap</a></li>
                                                <li id="LI3"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokentxns`} >View CCC Transfers</a></li>
                                                <li className="dropdown-divider" />
                                                <li id="LI42"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}token-nfts`} >CCC Top Tokens</a></li>
                                                <li id="LI40"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokentxns-nft`} >View CCC Transfers</a></li>
                                                <li className="dropdown-divider" />
                                                <li id="LI30"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokens-nft1155`} >CCC Top Tokens</a></li>
                                                <li id="LI33"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokentxns-nft1155`} >View CCC Transfers <sup /></a></li>
                                            </ul>
                                        </li>
                                        <li id="LI_resources" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                                            <a id="resourcesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="resourcesSubMenu">Resources</a>
                                            <ul id="resourcesSubMenu" className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer" aria-labelledby="resourcesMegaMenu" style={{ "min-width": "230px" }}>
                                                <li id="LI_charts2"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}charts`} >Charts &amp;  Stats</a></li>
                                            </ul>
                                        </li>
                                        <li id="LI_Misc" className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="right">
                                            <a id="moreMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">More</a>
                                            <div className="hs-mega-menu w-80 u-header__sub-menu" aria-labelledby="moreMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-sm-6 col-md-4 col-lg mb-4 mb-lg-0">
                                                        <span className="u-header__sub-menu-title">Developers</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li id="LI11"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}apis`} ><i className="fa fa-angle-right small mr-1" />APIs</a></li>
                                                            <li id="LI20"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}verifyContract`} ><i className="fa fa-angle-right small mr-1" />Verify Contract</a></li>
                                                            <li id="LI23"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}opcode-tool`} ><i className="fa fa-angle-right small mr-1" />Byte to Opcode</a></li>
                                                            <li id="LI15"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}pushTx`} ><i className="fa fa-angle-right small mr-1" />Broadcast TXN</a></li>
                                                            <li id="LI7"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}vyper`} ><i className="fa fa-angle-right small mr-1" />Vyper Online Compiler</a></li>
                                                            <li id="LI6"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}contractdiffchecker`} ><i className="fa fa-angle-right small mr-1" />Contract Diff Checker</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4 col-lg mb-4 mb-lg-0">
                                                        <span className="u-header__sub-menu-title">Tools</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li id="LI41"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}labelcloud`} ><i className="fa fa-angle-right small mr-1" />Label Word Cloud</a></li>
                                                            <li id="LI29"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}verifiedSignatures`} ><i className="fa fa-angle-right small mr-1" />Verified Signature</a></li>
                                                            <li id="LI28"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}tokenapprovalchecker`} ><i className="fa fa-angle-right small mr-1" />Token Approvals <sup><span className="badge badge-secondary font-size-default ml-1">Beta</span></sup></a></li>
                                                            <li id="LI50"><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}unitconverter`} ><i className="fa fa-angle-right small mr-1" />Unit Converter </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Resources - Mega Menu */}
                                        </li>
                                        <li className="u-header__nav-separator" />
                                        <li className="nav-item my-2 my-md-0">
                                            <a className="u-header__nav-link" href={`${config.baseUrl}login`} >
                                                <i className="fa fa-user-circle mr-1" />Sign In
                                            </a>
                                        </li>
                                        <li className="u-header__nav-separator" />
                                        <li className="nav-item hs-has-sub-menu u-header__nav-item my-md-n1" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                                            <a id="explorersWithDropdown" className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle--mobile pr-0" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="explorersDropdown">
                                                <span className="btn btn-sm btn-icon btn-soft-primary cursor-pointer d-none d-md-inline-block">
                                                    <img className="u-xs-avatar btn-icon__inner" src="images/smalllogo.png" alt="Logo1" />
                                                </span>
                                                <span className="d-inline-block d-md-none">Explorers</span>
                                            </a>
                                            <ul id="explorersDropdown" className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer dropdown-menu-md-right animated fadeOut" aria-labelledby="explorersWithDropdown" style={{ "min-width": "200px", "display": "none" }}>
                                                <li><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}`}>chromescan Mainnet</a></li>
                                                <li><a className="nav-link u-header__sub-menu-nav-link" href={`${config.baseUrl}`}>chromescan Testnet</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                <div id="form1" className={!hideSearch || 'd-none'}>
                                    <form className="w-100 w-lg-55 order-md-1 ml-md-auto mt-2 mb-2 mb-md-0" action="https://chromescan.com/search" method="GET" autoComplete="off" spellCheck="false">
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend d-none d-md-block">
                                                {/* Select */}
                                                <select name="f" className="custom-select custom-select-sm  custom-arrow-select input-group-text font-size-base filterby text-left">
                                                    <option selected value={0}>All Filters</option>
                                                    <option value={1}>Addresses</option>
                                                    <option value={2}>Tokens</option>
                                                    <option value={3}>Name Tags</option>
                                                    <option value={4}>Labels</option>
                                                    <option value={5}>Websites</option>
                                                </select>
                                                {/* End Select */}
                                            </div>
                                            <input type="text" className="form-control searchautocomplete" id="txtSearchInput" name="q" placeholder="Search by Address / Txn Hash / Block / Token" aria-label="Search by Address / Txn Hash / Block / Token" aria-describedby="button-header-search" onkeyup="handleSearchText(this);" />
                                            <input type="hidden" defaultValue id="hdnSearchText" />
                                            <input id="hdnIsTestNet" value="False" type="hidden" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">
                                                    <span className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )

}
export default Header;