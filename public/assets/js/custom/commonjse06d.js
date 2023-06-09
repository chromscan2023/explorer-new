﻿var strAge = $("#hdnAgeText").val();
var strDateTime = $("#hdnDateTimeText").val();

var strAgeTitle = $("#hdnAgeTitle").val();
var strDateTimeTitle = $("#hdnDateTimeTitle").val();

var ageClass = ".showAge";
var dateTimeClass = ".showDate";

var strTxnFee = $("#hdnTxnText").val();
var strGasPrice = $("#hdnGasPriceText").val();

function onDocumentReady() {
    if (strGlobal == null || strGlobal == "null" || strGlobal == strAge) {
        $("#lnkAgeDateTime").text(strAge);
        $("#lnkAgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (strGlobal == strDateTime) {
        $("#lnkAgeDateTime").text(strDateTime);
        $("#lnkAgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();

    if (strGlobalFee == null || strGlobalFee == "null" || strGlobalFee == strTxnFee) {
        $(".switch-txn-fee-gas-price").text(strTxnFee);
        $(".switch-txn-fee-gas-price").attr("title", $("#hdnTxnFeeTitle").val());
        $(".showTxnFee").show();
        $(".showGasPrice").hide();
    } else if (strGlobalFee == strGasPrice) {
        $(".switch-txn-fee-gas-price").text(strGasPrice);
        $(".switch-txn-fee-gas-price").attr("title", $("#hdnGasPriceTitle").val());
        $(".showTxnFee").hide();
        $(".showGasPrice").show();
    }
    $(".switch-txn-fee-gas-price").attr("data-toggle-commonjsfee", "tooltip");
    $("[data-toggle-commonjsfee='tooltip']").tooltip();
}

function onDateAgeDocumentReady(opts) {
    strGlobal = getCookie("etherscan_switch_age_datetime");
    var el = $(".hc_lnkAgeDateTime")
    var customAgeText = strAge
    var customDateTime = strDateTime

    if (typeof opts !== 'undefined') {
        if (opts.el) {
            el = $(opts.el)
        }

        if (opts.customAgeText) {
            customAgeText = opts.customAgeText
        }
        if (opts.customDateTime) {
            customDateTime = opts.customDateTime
        }
    }

    if (strGlobal == "" || strGlobal == strAge) {
        el.text(customAgeText);
        el.attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (strGlobal == strDateTime) {
        el.text(customDateTime);
        el.attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }

    el.attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function switchAgeToDateTime(data) {
    var strVal = $("#" + data.id).text();
    if (strVal == strAge) {
        $("#" + data.id).text(strDateTime);
        $("#" + data.id).attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).hide();
        sessionStorage.setItem("ShowAs", strDateTime);
    }
    else if (strVal == strDateTime) {
        $("#" + data.id).text(strAge);
        $("#" + data.id).attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
        sessionStorage.setItem("ShowAs", strAge);
    }
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#" + data.id).attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function switchAgeToDateTimeV2(self, opts) {
    var strVal = $("#" + self.id).text();
    var el = self ? $(self) : $(".hc_lnkAgeDateTime")
    var customAgeText = strAge
    var customDateTime = strDateTime
    var elParent = ""
    var elChild = ""

    if (typeof opts !== 'undefined') {
        if (opts.el) {
            el = $(opts.el)
        }
        if (opts.customAgeText) {
            customAgeText = opts.customAgeText
        }
        if (opts.customDateTime) {
            customDateTime = opts.customDateTime
        }
        if (opts.elParent) {
            elParent = opts.elParent
        }
        if (opts.elParent) {
            elChild = opts.elChild
        }
    }
    if (strVal == customAgeText) {
        el.text(customDateTime);
        el.attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).hide();
        setAgeDateTimeCookie(strDateTime);
    }
    else if (strVal == customDateTime) {
        el.text(customAgeText);
        el.attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
        setAgeDateTimeCookie(strAge);
    }
}

function setAgeDateTimeCookie(strValue) {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "etherscan_switch_age_datetime=" + strValue + ";" + expires + ";path=/";
}

function onAddressDocReady() {
    if (strGlobal == null || strGlobal == "null" || strGlobal == strAge) {
        $("#lnkTxAgeDateTime").text(strAge);
        $("#lnkTxAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkIntAgeDateTime").text(strAge);
        $("#lnkIntAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkValidatorSetAgeDateTime").text(strAge);
        $("#lnkValidatorSetAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinBlkAgeDateTime").text(strAge);
        $("#lnkMinBlkAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinUncAgeDateTime").text(strAge);
        $("#lnkMinUncAgeDateTime").attr("title", strDateTimeTitle);
        $("#hdnErc20").val(strAge);
        $(dateTimeClass).attr("style", "display:none !important");
        $(ageClass).show();
    }
    else if (strGlobal == strDateTime) {
        $("#lnkTxAgeDateTime").text(strDateTime);
        $("#lnkTxAgeDateTime").attr("title", strAgeTitle);
        $("#lnkIntAgeDateTime").text(strDateTime);
        $("#lnkIntAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinBlkAgeDateTime").text(strDateTime);
        $("#lnkMinBlkAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinUncAgeDateTime").text(strDateTime);
        $("#lnkMinUncAgeDateTime").attr("title", strAgeTitle);
        $("#lnkValidatorSetAgeDateTime").text(strDateTime);
        $("#lnkValidatorSetAgeDateTime").attr("title", strAgeTitle);
        $("#hdnErc20").val(strDateTime);
        $(ageClass).attr("style", "display:none !important");
        $(dateTimeClass).show();
    }
    $("#lnkTxAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkIntAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinBlkAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinUncAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkValidatorSetAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function switchAgeToDateTimeInAddPage(data) {
    var strVal = $("#" + data.id).text();
    if (strVal == strAge) {
        $("#lnkTxAgeDateTime").text(strDateTime);
        $("#lnkTxAgeDateTime").attr("title", strAgeTitle);
        $("#lnkIntAgeDateTime").text(strDateTime);
        $("#lnkIntAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinBlkAgeDateTime").text(strDateTime);
        $("#lnkMinBlkAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinUncAgeDateTime").text(strDateTime);
        $("#lnkMinUncAgeDateTime").attr("title", strAgeTitle);
        $("#lnkValidatorSetAgeDateTime").text(strDateTime);
        $("#lnkValidatorSetAgeDateTime").attr("title", strAgeTitle);
        $("#hdnErc20").val(strDateTime);
        $(dateTimeClass).show();
        $(ageClass).attr("style", "display:none !important");
        sessionStorage.setItem("ShowAs", strDateTime);

        if (document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime') != null) {
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').text = strDateTime;
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').title = strAgeTitle;
            $("#tokenpageiframe").contents().find(dateTimeClass).show();
            $("#tokenpageiframe").contents().find(ageClass).hide();
        }

        if (document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime') != null) {
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').text = strDateTime;
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').title = strAgeTitle;
            $("#tokenerc721_pageiframe").contents().find(dateTimeClass).show();
            $("#tokenerc721_pageiframe").contents().find(ageClass).hide();
        }

        if (allowErc1155 === "True" && document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime') != null) {
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').text = strDateTime;
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').title = strAgeTitle;
            $("#tokenerc1155_pageiframe").contents().find(dateTimeClass).show();
            $("#tokenerc1155_pageiframe").contents().find(ageClass).hide();
        }

        if (document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime') != null) {
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').text = strDateTime;
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').title = strAgeTitle;
            $("#loans_pageiframe").contents().find(dateTimeClass).show();
            $("#loans_pageiframe").contents().find(ageClass).hide();
        }
    }
    else if (strVal == strDateTime) {
        $("#lnkTxAgeDateTime").text(strAge);
        $("#lnkTxAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkIntAgeDateTime").text(strAge);
        $("#lnkIntAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinBlkAgeDateTime").text(strAge);
        $("#lnkMinBlkAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinUncAgeDateTime").text(strAge);
        $("#lnkMinUncAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkValidatorSetAgeDateTime").text(strAge);
        $("#lnkValidatorSetAgeDateTime").attr("title", strDateTimeTitle);
        $("#hdnErc20").val(strAge);
        $(dateTimeClass).attr("style", "display:none !important");
        $(ageClass).show();
        sessionStorage.setItem("ShowAs", strAge);

        if (document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime') != null) {
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').text = strAge;
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').title = strDateTimeTitle;
            $("#tokenpageiframe").contents().find(dateTimeClass).hide();
            $("#tokenpageiframe").contents().find(ageClass).show();
        }

        if (document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime') != null) {
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').text = strAge;
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').title = strDateTimeTitle;
            $("#tokenerc721_pageiframe").contents().find(dateTimeClass).hide();
            $("#tokenerc721_pageiframe").contents().find(ageClass).show();
        }

        if (allowErc1155 === "True" && document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime') != null) {
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').text = strAge;
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').title = strDateTimeTitle;
            $("#tokenerc1155_pageiframe").contents().find(dateTimeClass).hide();
            $("#tokenerc1155_pageiframe").contents().find(ageClass).show();
        }

        if (document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime') != null) {
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').text = strAge;
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').title = strDateTimeTitle;
            $("#loans_pageiframe").contents().find(dateTimeClass).hide();
            $("#loans_pageiframe").contents().find(ageClass).show();
        }
    }
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#lnkTxAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkIntAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinBlkAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinUncAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkValidatorSetAgeDateTime").attr("data-toggle-commonjs", "tooltip");

    
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function setGlobalValue(data) {
    var strVal = $("#" + data.id).val();
    if (strVal == "" || strVal == strAge) {
        sessionStorage.setItem("ShowAs", strAge);
        switchAgeDateTimeFromIframe(data);
    }
    else if (strVal == strDateTime) {
        sessionStorage.setItem("ShowAs", strDateTime);
        switchAgeDateTimeFromIframe(data);
    }
}

function switchAgeDateTimeFromIframe(data) {
    var strVal = $("#" + data.id).val();
    if (strVal == strDateTime) {
        $("#lnkTxAgeDateTime").text(strDateTime);
        $("#lnkTxAgeDateTime").attr("title", strAgeTitle);
        $("#lnkIntAgeDateTime").text(strDateTime);
        $("#lnkIntAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinBlkAgeDateTime").text(strDateTime);
        $("#lnkMinBlkAgeDateTime").attr("title", strAgeTitle);
        $("#lnkMinUncAgeDateTime").text(strDateTime);
        $("#lnkMinUncAgeDateTime").attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).attr("style", "display:none !important");

        if (document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime') != null) {
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').text = strDateTime;
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').title = strAgeTitle;
            $("#tokenpageiframe").contents().find(dateTimeClass).show();
            $("#tokenpageiframe").contents().find(ageClass).hide();
        }

        if (document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime') != null) {
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').text = strDateTime;
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').title = strAgeTitle;
            $("#tokenerc721_pageiframe").contents().find(dateTimeClass).show();
            $("#tokenerc721_pageiframe").contents().find(ageClass).hide();
        }

        if (allowErc1155 === "True" && document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime') != null) {
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').text = strDateTime;
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').title = strAgeTitle;
            $("#tokenerc1155_pageiframe").contents().find(dateTimeClass).show();
            $("#tokenerc1155_pageiframe").contents().find(ageClass).hide();
        }

        if (document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime') != null) {
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').text = strDateTime;
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').title = strAgeTitle;
            $("#loans_pageiframe").contents().find(dateTimeClass).show();
            $("#loans_pageiframe").contents().find(ageClass).hide();
        }
    }
    else if (strVal == strAge) {
        $("#lnkTxAgeDateTime").text(strAge);
        $("#lnkTxAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkIntAgeDateTime").text(strAge);
        $("#lnkIntAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinBlkAgeDateTime").text(strAge);
        $("#lnkMinBlkAgeDateTime").attr("title", strDateTimeTitle);
        $("#lnkMinUncAgeDateTime").text(strAge);
        $("#lnkMinUncAgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).attr("style", "display:none !important");
        $(ageClass).show();

        if (document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime') != null) {
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').text = strAge;
            document.getElementById('tokenpageiframe').contentWindow.document.getElementById('lnkErc20AgeDateTime').title = strDateTimeTitle;
            $("#tokenpageiframe").contents().find(dateTimeClass).hide();
            $("#tokenpageiframe").contents().find(ageClass).show();
        }

        if (document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime') != null) {
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').text = strAge;
            document.getElementById('tokenerc721_pageiframe').contentWindow.document.getElementById('lnkErc721AgeDateTime').title = strDateTimeTitle;
            $("#tokenerc721_pageiframe").contents().find(dateTimeClass).hide();
            $("#tokenerc721_pageiframe").contents().find(ageClass).show();
        }

        if (allowErc1155 === "True" && document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime') != null) {
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').text = strAge;
            document.getElementById('tokenerc1155_pageiframe').contentWindow.document.getElementById('lnkErc1155AgeDateTime').title = strDateTimeTitle;
            $("#tokenerc1155_pageiframe").contents().find(dateTimeClass).hide();
            $("#tokenerc1155_pageiframe").contents().find(ageClass).show();
        }

        if (document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime') != null) {
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').text = strAge;
            document.getElementById('loans_pageiframe').contentWindow.document.getElementById('lnkLoanAgeDateTime').title = strDateTimeTitle;
            $("#loans_pageiframe").contents().find(dateTimeClass).hide();
            $("#loans_pageiframe").contents().find(ageClass).show();
        }
    }
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#lnkTxAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkIntAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinBlkAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("#lnkMinUncAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function onAddTokenDocReady() {
    var obj = window.parent.document.getElementById('hdnErc20');
    if (obj.value == "" || obj.value == strAge) {
        $("#lnkErc20AgeDateTime").text(strAge);
        $("#lnkErc20AgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkErc20AgeDateTime").text(strDateTime);
        $("#lnkErc20AgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkErc20AgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function switchAgeToDateTimeAddToken(data) {
    var strVal = $("#" + data.id).text();
    if (strVal == strAge) {
        $("#" + data.id).text(strDateTime);
        $("#" + data.id).attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).hide();
        var obj = window.parent.document.getElementById('hdnErc20');
        obj.value = strDateTime;
        parent.setGlobalValue(obj);
    }
    else if (strVal == strDateTime) {
        $("#" + data.id).text(strAge);
        $("#" + data.id).attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
        var obj = window.parent.document.getElementById('hdnErc20');
        obj.value = strAge;
        parent.setGlobalValue(obj);
    }
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#" + data.id).attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function onERC721DocReady() {
    var obj = window.parent.document.getElementById('hdnErc20');
    if (obj.value == "" || obj.value == strAge) {
        $("#lnkErc721AgeDateTime").text(strAge);
        $("#lnkErc721AgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkErc721AgeDateTime").text(strDateTime);
        $("#lnkErc721AgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkErc721AgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function switchAgeToDateTimeERC721Token(data) {
    var strVal = $("#" + data.id).text();
    if (strVal == strAge) {
        $("#" + data.id).text(strDateTime);
        $("#" + data.id).attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).hide();
        var obj = window.parent.document.getElementById('hdnErc20');
        obj.value = strDateTime;
        parent.setGlobalValue(obj);
    }
    else if (strVal == strDateTime) {
        $("#" + data.id).text(strAge);
        $("#" + data.id).attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
        var obj = window.parent.document.getElementById('hdnErc20');
        obj.value = strAge;
        parent.setGlobalValue(obj);
    }
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#" + data.id).attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function onERC1155DocReady() {
    var obj = window.parent.document.getElementById('hdnErc20');
    if (obj.value == "" || obj.value == strAge) {
        $("#lnkErc1155AgeDateTime").text(strAge);
        $("#lnkErc1155AgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkErc1155AgeDateTime").text(strDateTime);
        $("#lnkErc1155AgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkErc1155AgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function clearGlobalValue() {
    strGlobal = null;
    sessionStorage.setItem("ShowAs", null);
}

function onTokenTxnsDocReady() {
    var obj = window.parent.document.getElementById('hdnTokenTxns2');
    if (obj.value == "" || obj.value == "null" || obj.value == strAge) {
        $("#lnkTokenTxnsAgeDateTime").text(strAge);
        $("#lnkTokenTxnsAgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkTokenTxnsAgeDateTime").text(strDateTime);
        $("#lnkTokenTxnsAgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkTokenTxnsAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function switchAgeToDateTimeTokenTxns(data) {
    var strVal = $("#" + data.id).text();
    if (strVal == strAge) {
        $("#" + data.id).text(strDateTime);
        $("#" + data.id).attr("title", strAgeTitle);
        $(dateTimeClass).show();
        $(ageClass).hide();
        var obj = window.parent.document.getElementById('hdnTokenTxns2');
        obj.value = strDateTime;
        parent.setGlobalTokenValue(obj);        
    }
    else if (strVal == strDateTime) {
        $("#" + data.id).text(strAge);
        $("#" + data.id).attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
        var obj = window.parent.document.getElementById('hdnTokenTxns2');
        obj.value = strAge;        
        parent.setGlobalTokenValue(obj);        
    }    
    $("[data-toggle-commonjs='tooltip']").tooltip('dispose');
    $("#" + data.id).attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip('toggle');
}

function onAddLoanDocReady() {
    var obj = window.parent.document.getElementById('hdnErc20');
    if (obj.value == "" || obj.value == strAge) {
        $("#lnkLoanAgeDateTime").text(strAge);
        $("#lnkLoanAgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkLoanAgeDateTime").text(strDateTime);
        $("#lnkLoanAgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkLoanAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function onDexTradeDocReady() {
    var obj = window.parent.document.getElementById('hdnTokenTxns2');
    if (obj.value == "" || obj.value == "null" || obj.value == strAge) {
        $("#lnkDexTradeAgeDateTime").text(strAge);
        $("#lnkDexTradeAgeDateTime").attr("title", strDateTimeTitle);
        $(dateTimeClass).hide();
        $(ageClass).show();
    }
    else if (obj.value == strDateTime) {
        $("#lnkDexTradeAgeDateTime").text(strDateTime);
        $("#lnkDexTradeAgeDateTime").attr("title", strAgeTitle);
        $(ageClass).hide();
        $(dateTimeClass).show();
    }
    $("#lnkDexTradeAgeDateTime").attr("data-toggle-commonjs", "tooltip");
    $("[data-toggle-commonjs='tooltip']").tooltip();
}

function setGlobalTokenValue(data) {
    var strVal = $("#" + data.id).val();
    if (strVal == "" || strVal == strAge) {
        sessionStorage.setItem("ShowAs", strAge);
        switchAgeDateTimeInTokenIframe(data);
    }
    else if (strVal == strDateTime) {
        sessionStorage.setItem("ShowAs", strDateTime);
        switchAgeDateTimeInTokenIframe(data);
    }
}

function switchAgeDateTimeInTokenIframe(data) {
    var strVal = $("#" + data.id).val();
    if (strVal == strDateTime) {
        if (document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime') != null) {
            document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime').text = strDateTime;
            document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime').title = strAgeTitle;
            $("#tokentxnsiframe").contents().find(dateTimeClass).show();
            $("#tokentxnsiframe").contents().find(ageClass).hide();
        }

        if (document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime') != null) {
            document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime').text = strDateTime;
            document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime').title = strAgeTitle;
            $("#dextrackeriframe").contents().find(dateTimeClass).show();
            $("#dextrackeriframe").contents().find(ageClass).hide();
        }        
    }
    else if (strVal == strAge) {
        if (document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime') != null) {
            document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime').text = strAge;
            document.getElementById('tokentxnsiframe').contentWindow.document.getElementById('lnkTokenTxnsAgeDateTime').title = strDateTimeTitle;
            $("#tokentxnsiframe").contents().find(dateTimeClass).hide();
            $("#tokentxnsiframe").contents().find(ageClass).show();
        }

        if (document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime') != null) {
            document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime').text = strAge;
            document.getElementById('dextrackeriframe').contentWindow.document.getElementById('lnkDexTradeAgeDateTime').title = strDateTimeTitle;
            $("#dextrackeriframe").contents().find(dateTimeClass).hide();
            $("#dextrackeriframe").contents().find(ageClass).show();
        }
    }
}

function switchTxFeeGasPrice(self) {
    var strVal = self ? $(self).text() : $(".switch-txn-fee-gas-price").text();
    if (strVal == strTxnFee) {
        $(".switch-txn-fee-gas-price").text(strGasPrice);
        $(".switch-txn-fee-gas-price").attr("title", $("#hdnGasPriceTitle").val());
        $(".showGasPrice").show();
        $(".showTxnFee").hide();
        sessionStorage.setItem("ShowFee", strGasPrice);
    }
    else if (strVal == strGasPrice) {
        $(".switch-txn-fee-gas-price").text(strTxnFee);
        $(".switch-txn-fee-gas-price").attr("title", $("#hdnTxnFeeTitle").val());
        $(".showGasPrice").hide();
        $(".showTxnFee").show();
        sessionStorage.setItem("ShowFee", strTxnFee);
    }

    if (self) {
        $(self).tooltip('dispose');
        $(self).attr("data-toggle-commonjsfee", "tooltip");
        $(self).tooltip('toggle');
    } else {
        $("[data-toggle-commonjsfee='tooltip']").tooltip('dispose');
        $(".switch-txn-fee-gas-price").attr("data-toggle-commonjsfee", "tooltip");
        $("[data-toggle-commonjsfee='tooltip']").tooltip('toggle');
    }

}

myFn_boxExpand = {
    actionParam: "",
    toggleAction: "",
    spinner: '<div class="popover popover-body pagecustom_popover" id="spinner-wrapper" style="height: 40px!important;"><i class="fas fa-circle-notch fa-spin spinner-wrapper__icon position-relativer text-primary fa-2x mb-2" style="top: unset"></i></div>',
    init: function (strElement, toggleAction, actionParam) {
        var self = this;
        self.actionParam = actionParam
        self.toggleAction = toggleAction
       
        $(strElement).on("click", function (e) {
            self.fnClick(e)
        });
    },
    fnClick: function (e) {
        var target = e.currentTarget
        $(target).off('click');
        e.preventDefault();
        e.stopPropagation();

        var self = this;
        self.fnProcess(e, function () {
            self.fnOnClick(target)
        });
    },
    fnOnClick: function (target) {
        var self = this;
        $(target).on("click", function (e) {
            self.fnClick(e)
        });
    },
    fnProcess_Popover: function (e, callback) {
        var self = this;
        var el = $(e.currentTarget);

        if (!el.attr("data-content")) {
            el.popover({
                trigger: 'manual',
                html: true,
                placement: 'right',
                content: self.spinner,
                boundary: "window"
            }).popover("show");

            var el_parent_tr = el.parents("tr");
            var str_el_next = el_parent_tr.find('.myFnExpandBox_searchVal').text()
            self.expandBox(0, str_el_next, function (data) {
                el.attr('data-content', data);
                el.popover("show")
            })

            el.click(function () {
                $(this).popover('toggle');
            }).blur(function () {
                //$(this).popover('hide');
                var _this = this;
                setTimeout(function () {
                    $(_this).popover('hide');
                }, 150);
            });
        }
    },
    fnProcess_Popover_Data: function (e, callback) {
        var self = this;
        var el = $(e.currentTarget);

        if (!el.attr("data-content")) {
            el.popover({
                trigger: 'manual',
                html: true,
                placement: 'right',
                content: self.spinner,
            }).popover("show");

            var el_parent_tr = el.parents("tr");
            var str_el_next = el_parent_tr.find('.myFnExpandBox_withData').attr("box-data");
            var str_el_headers = el_parent_tr.find('.myFnExpandBox_withData').attr("box-header");
            self.expandBoxWithData(str_el_next.split(','), str_el_headers.split(','), function (data) {
                el.attr('data-content', data);
                el.popover("show")
            })

            el.click(function () {
                $(this).popover('toggle');
            }).blur(function () {
                var _this = this;
                setTimeout(function () {
                    $(_this).popover('hide');
                }, 150);
            });
        }
    },
    fnProcess_Table: function (e, callback) {
        var self = this;
        var el = $(e.currentTarget);
        var el_parent_tr = el.parents("tr");
        var str_el_next = el_parent_tr.find('.myFnExpandBox_searchVal').text()
        var el_parent_tr__child_length = el_parent_tr.children().length;
        var el_parent_tr_next = ""

        if (el.hasClass("myfn_boxExpand_open")) {
            el_parent_tr_next = el_parent_tr.next(".myExpandBox");

            el.removeClass("myfn_boxExpand_open");
            el.addClass("fa-chevron-up");
            el.removeClass("fa-chevron-down");

            el_parent_tr_next.remove();
            callback()
        } else {
            el.addClass("myfn_boxExpand_open");
            el.removeClass("fa-chevron-up");
            el.addClass("fa-chevron-down");

            el_parent_tr.after('<tr class="myExpandBox"><td colspan="' + el_parent_tr__child_length + '" style="white-space: unset;padding-top:1.25rem;">' + self.spinner + '</td></tr>');
            self.expandBox(el_parent_tr__child_length, str_el_next, function (data) {
                el_parent_tr_next = el_parent_tr.next(".myExpandBox");
                el_parent_tr_next.remove();

                el_parent_tr.after(data);
                $.HSCore.components.HSClipboard.init('.js-clipboard');
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));
                callback()
            });
        }
    },
    fnProcess: function (e, callback) {
        var self = this;
        if (self.toggleAction == "popover") {
            self.fnProcess_Popover(e, callback)
        }
        else if (self.toggleAction == "popOverWithData") {
            self.fnProcess_Popover_Data(e, callback)
        }
        else {
            self.fnProcess_Table(e, callback)
        }
    },
    expandBoxWithData: function (dataArray, dataHeader, callback) {
        var strResult = "";
        if (dataArray.length == 0 || dataArray.length != dataHeader.length) {
            strResult += "<tr>";
            strResult += '<td>';
            strResult += "something wrong";
            strResult += "</td>";
            strResult += "</tr>";
        }
        else {
            strResult = generateTable(dataArray, dataHeader);
        }
        callback(strResult)

        function generateTable(dataArray, dataHeader) {
            var strResult = "<h4 class='h5 mb-3'>Additional Info</h4>";
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] == "") {
                    continue;
                }
                strResult += "<h5 class='font-size-1 font-weight-bold mb-1'>" + dataHeader[i] + ":</h5>";
                strResult += dataArray[i];
                strResult += "<hr class='hr-space'>";
            }
            return strResult;
        }
    },
    expandBox: function (colspan_number, strSearchVal, callback) {
        var tmp_overlayMain = window.parent.document.getElementById('overlayMain')
        if (tmp_overlayMain) {
            window.parent.document.getElementById('overlayMain').style.display = 'none';
        }
        var self = this;
        $.ajax({
            type: 'Get',
            url: '/txsHandler.ashx',
            data: { strSearchVal: strSearchVal, toggleAction: self.toggleAction, actionParam: self.actionParam },
        }).done(function (data, textStatus, xhr) {
            var strResult = "";
            if (colspan_number) {
                if (textStatus === "success") {
                    strResult += '<tr class="myExpandBox">';
                    strResult += '<td colspan="' + colspan_number + '" style="white-space: unset;">';
                    strResult += data;
                    strResult += "</td>";
                    strResult += "</tr>";
                } else {
                    strResult += "<tr>";
                    strResult += '<td colspan="' + colspan_number + '">';
                    strResult += "something wrong";
                    strResult += "</td>";
                    strResult += "</tr>";
                }
            } else {
                strResult = (data)
            }
            callback(strResult)

        });
    }
};
