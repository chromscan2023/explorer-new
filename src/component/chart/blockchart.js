import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../coreFiles/config';
import Header from '../../directives/header';
import Footer from '../../directives/footer';
import Highcharts from 'highcharts';
var litChartData = [{ y: 15433, formattedValue: '15,433', dt: 'Thursday, November 11, 2021', blockreward: '93,891<b>.</b>887 CRO ' }, { y: 15364, formattedValue: '15,364', dt: 'Friday, November 12, 2021', blockreward: '121,589<b>.</b>755 CRO ' }];


const Blockchart = () => {


    useEffect(() => {
        Highcharts.setOptions({
            lang: {
                numericSymbols: [" k", " M", " B", " T", " P", " E"]
            }
        });

        var chart = new Highcharts.chart({
            chart: {
                renderTo: 'containerchart',
                zoomType: 'x',
                resetZoomButton: {
                    position: {
                        align: 'left', // right by default
                        verticalAlign: 'top',
                        //x: -55,
                        //y: 10
                        x: 10,
                        y: 10
                    },
                    relativeTo: 'plot'
                }
            },
            title: {
                useHTML: true,
                text: ' Chromescan Chain Blockchain Explorer Block Count and Rewards Chart '
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Source: Chromescancan.com<br>Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: 14 * 24 * 3600000


            },
            yAxis: {
                title: {
                    text: 'Blocks Per Day '
                },

                min: 0,
                // 
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false
            },

            tooltip: {
                formatter: function () {
                    return '<span style="font-size:10px">' + this.point.dt + '</span><br><table><tr><td style="padding:0">' +

                        '[ <span style="color:' + this.series.color + '">Total Blocks : </a></span><b>' + this.point.formattedValue + '</b> ]<br>' +
                        ' ' + ' <br>' + 'Total Daily Block Rewards: <b>' + this.point.blockreward + '</b><br>' +
                        '</td></tr></table>';
                }
            },
            series: [{
                type: 'column',
                turboThreshold: 10000,
                name: 'Daily Transaction Count',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2022, 10, 8),
                data: litChartData
            }]
        });



        function generateAnnotationText(title, desc, url) {
            var text = '';

            if (title) {
                text += '<tr><td colspan=2 style="padding-bottom:5px;border-bottom:1px solid #D5D8DC;"><b><span style="font-size: 13px; font-weight: 900; font-family: arial;">' + title + '</span></b><br></td></tr>';
            }

            if (desc) {
                text += '<tr><td style="padding-top:6px;padding-bottom:2px;" valign="top">' + desc;
                if (url) {
                    text += " " + '<a href="' + url + '" target="_blank" rel="nofollow" class="button" style="color:black"><i class="fa fa-external-link-alt"></i></a>';
                }

                text += '</td></tr>';
            }
            else if (url) {
                text += '<br><div class="d-flex justify-content-end"><a href="' + url + '" target="_blank" rel="nofollow" class="button" style="color:black"><i class="fa fa-external-link-alt"></i></a></div>';
            }

            return text;
        }

        function getAnnotations() {
            var dataArray = [];
            //var chartdata = chart.series[0].data;
            var i, dataSubArray, add_Location, xCoordinate, yCoordinate;
            for (i = 0; i < dataArray.length; ++i) {
                dataSubArray = dataArray[i];
                add_Location = (i % 3) * 30;
                chart.addAnnotation({
                    id: dataSubArray['pointid'],
                    labels: [{
                        useHTML: true,
                        point: { x: dataSubArray['x'], y: dataSubArray['y'], xAxis: dataSubArray['xaxis'], yAxis: dataSubArray['yaxis'] },
                        text: generateAnnotationText(dataSubArray['title'], dataSubArray['desc'], dataSubArray['url']),
                        x: -100,
                        style: {
                            color: 'rgb(0,0,0)'
                        }
                    }],
                    labelOptions: {
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255)',
                        borderWidth: 1,
                        borderColor: '#ddd',
                        y: 0
                    }
                });
            };
        };

        getAnnotations()

    }, []);


    return (
        <>

            <div className="wrapper">

                <Header />
                <div>
                    <main id="content" role="main">
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center border-bottom py-3">
                                <div className="mb-1 mb-md-0">
                                    <h1 className="h4 mb-0"><span className="d-block">Chromescan Chain Blockchain Explorer Block Count and Rewards Chart</span></h1>
                                </div>
                                <nav id="ContentPlaceHolder1_breadcrumb" aria-label="breadcrumb">
                                    <ol className="breadcrumb small p-0 mb-0">
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);">Charts &amp;  Stats</a></li>
                                        <li className="breadcrumb-item"><a href="JavaScript:void(0);" id="ContentPlaceHolder1_aChartRegion">Blockchain Data</a></li>
                                        <li className="breadcrumb-item active">Chromescan Chain Blockchain Explorer Block Count and Rewards Chart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card mt-3 mb-4">
                                <div className="card-body"><span>The Chromescan Chain Block Count and Rewards Chart shows the historical number of blocks procduced daily on the  and the total block reward. </span></div>
                            </div>
                            <div className="card">
                                <div className="card-body space-bottom-1">
                                    <div className="content" id="containerchart" style={{ "height": "550px", "min-width": "310px" }} />
                                </div>
                            </div>
                            <div className="my-4 text-right">Download: <a href="JavaScript:void(0);">CSV Data</a> (Attribution Required) &nbsp;&nbsp;&nbsp;</div>
                            <br />
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

export default Blockchart;