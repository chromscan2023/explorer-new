import React, { Component, useEffect } from 'react'
import config from '../coreFiles/config';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import $ from 'jquery';


const Footer = () => {


    return (
        <>
            <footer className="bg-dark py-4">
                <div className="container">
                    <div className="row justify-content-sm-between align-items-center">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="d-flex align-items-center">
                                <img width={25} src="images/smalllogo.png" alt="Logo" />
                                <span className="h5 text-white mb-0 ml-3">Powered By Chrome Chain</span>
                            </div>
                        </div>
                        <div className="col-sm-6 align-self-bottom">
                            {/* Preferences */}
                            <div className="d-flex justify-content-sm-end align-items-center mb-4">
                                <span>
                                    <button type="button" className="btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2" onclick="addNetwork('web3');">
                                        <img className="mr-1" width={15} src="images/svg/brands/metamask.svg" alt="Metamask" />
                                        Add chromescan Network
                                    </button>
                                </span>
                                <a className="btn btn-xss btn-soft-light mr-2" href={`${config.baseUrl}busy`}>
                                    <i className="fa fa-cogs mr-1" />Preferences
                                </a>
                                <button id="darkModaBtn" type="button" data-toggle="tooltip" data-title="Day/Night Mode" className="btn btn-sm btn-icon btn-soft-light">
                                    <i id="darkModaBtnIcon" className="fa fa-moon" /></button>
                            </div>
                            {/* End Preferences */}
                        </div>
                    </div>
                    {/* End Fotoer Content */}
                    <hr className="opacity-md" />
                    <div className="row justify-content-between align-items-center font-size-1">
                        <div className="col-md-6 mb-2 mb-md-0 d-flex">
                            <p className="mb-0 text-white">
                                ChromeScan © 2023  (CCC-A)
                                <span className="mx-1">|</span> ⛏ Built by the same team behind <a className="text-primary" href="#" target="_blank"><b /></a> <span className="mx-1">|</span> <a className="text-white-70" href={`${config.baseUrl}busy`}>Donate</a> <i className="fas fa-heart text-danger" />
                            </p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"> <a className="unordered-list-text" rel="nofollow noopener" target="_blank" href={`${config.baseUrl}busy`}>Terms of Service</a> </li>
                                <li className="list-inline-item"> <a className="unordered-list-text" rel="nofollow noopener" target="_blank" href="#">Network Status</a> </li>
                                <li className="list-inline-item"> <a className="btn btn-sm btn-icon btn-soft-light btn-pill" href={`${config.baseUrl}busy`} data-toggle="tooltip" data-placement="top" title="Contact Us"> <i className="far fa-envelope btn-icon__inner" /> </a> </li>
                                <li className="list-inline-item"> <a className="btn btn-sm btn-icon btn-soft-light btn-pill" href="#" rel="nofollow noopener" target="_blank" data-toggle="tooltip" data-placement="top" title="Twitter"> <i className="fab fa-twitter btn-icon__inner" /> </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )

}
export default Footer;