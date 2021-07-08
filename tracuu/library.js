//zebradialog
function alertZebra(title, content) {
    $.Zebra_Dialog(content, {
        'type': 'warning',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: "OK" }
        ]
    });
}
function alertZebraRedirect(title, content, redirect) {
    $.Zebra_Dialog(content, {
        'type': 'information',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'OK', callback: function () { location.href = redirect } }
        ]
    });
}
function alertZebraReload(title, content) {
    $.Zebra_Dialog(content, {
        'type': 'information',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'OK', callback: function () { reload(); } }
        ]
    });
}
function alertZebraReloadUrl(title, content) {
    $.Zebra_Dialog(content, {
        'type': 'information',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'OK', callback: function () { location.reload(); } }
        ]
    });
}
function alertZebraCallFunction(title, content, p_function) {
    $.Zebra_Dialog(content, {
        'type': 'information',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'OK', callback: function () { eval(p_function); } }
        ]
    });
}
function confirmZebra(title, content, redirect) {
    $.Zebra_Dialog(content, {
        'type': 'confirmation',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'Không', callback: function () { return } },
            { caption: 'Có', callback: function () { location.href = redirect } }
        ]
    });
}
function alertZebraContent(e) {
    $.Zebra_Dialog(e, {
        type: "warning",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [{
            caption: "OK"
        }]
    })
}
function alertZebraType(title, content, type) {
    $.Zebra_Dialog(content, {
        'type': (type == '' ? 'warning' : type),
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: "OK" }
        ]
    });
}
function alertZebraTypeCloseColorbox(title, content, type) {
    $.Zebra_Dialog(content, {
        'type': (type == '' ? 'warning' : type),
        'overlay_close': false,
        'title': title,
        'buttons': [
            {
                caption: "OK",
                callback: function () {
                    CloseColorbox()
                }
            }
        ]
    });
}
function alertZebraTypeWindowRefressPage(title, content, type) {
    $.Zebra_Dialog(content, {
        'type': (type == '' ? 'warning' : type),
        'overlay_close': false,
        'title': title,
        'buttons': [
            {
                caption: "OK",
                callback: function () {
                    WindowRefressPage()
                }
            }
        ]
    });
}
function CloseColorbox() {
    parent.jQuery.fn.colorbox && parent.jQuery.fn.colorbox.close()
}
function WindowRefressPage() {
    parent.location.reload()
}
function ConfirmZebra(e, p_function) {
    $.Zebra_Dialog(e, {
        type: "confirmation",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [
            {
                caption: "Không",
                callback: function () {
                }
            }
            , {
                caption: "Có",
                callback: function () {
                    eval(p_function);
                }
            }]
    })
}
//show popup
$(function () {
    $("[data-popup-open]").on("click", function (t) {
        var e = jQuery(this).attr("data-popup-open");
        $('[data-popup="' + e + '"]').fadeIn(350), t.preventDefault()
    }), $("[data-popup-close]").on("click", function (t) {
        var e = jQuery(this).attr("data-popup-close");
        $('[data-popup="' + e + '"]').fadeOut(350), t.preventDefault()
    })
})
//show validate form
$(function () {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });
    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
})
//Chỉ cho phép nhập số
function InputNumberOnly(t) {
    var e = t.which ? t.which : event.keyCode;
    return e >= 48 && e <= 57 || 46 == e
}
/*
** Trả về vị trí con trỏ của trường văn bản đã chỉ định.
** Phạm vi giá trị trả về là 0-oField.value.length.
*/
function doGetCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return iCaretPos;
}
/*
* Dat vi tri con tro chuot tai vi tri nhap lieu.
*/
function setCaretPosition(oField, caretPos) {
    if (oField != null) {
        if (oField.createTextRange) {
            var range = oField.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (oField.selectionStart) {
                oField.focus();
                oField.setSelectionRange(caretPos, caretPos);
            }
            else
                oField.focus();
        }
    }
}
//	Ham FormatMoney tu dong them dau "," vao text box khi nhap gia tri co kien la "Tien"
//	Khi do TextBox co dang : "123,456,789"
//	Khi goi : onkeyup="JavaScript:FormatMoney(this)"
function format_money(Obj, event) {
    _DECIMAL_DELIMITOR = ",";
    var theKey;
    //var keyCode = (document.layers) ? keyStroke.which : event.keyCode;
    if (typeof (event) == "undefined") {
        theKey = window.event.keyCode;
    }
    else {
        theKey = (window.event) ? event.keyCode : event.which;
    }
    //var theKey = event.keyCode;
    // lay vi tri con tro 
    var v_vi_tri_con_tro = doGetCaretPosition(Obj);
    var v_is_vi_tri_con_tro_o_cuoi = (v_vi_tri_con_tro == Obj.value.length) ? 1 : 0;
    //phuonghv add 20/08/2016  tim va thay the cac ky tu khong phai la kieu so ve rong.
    Obj.value = Obj.value.replace(/[^0-9,.-]/g, '');
    var theStringNum = Obj.value;
    theSecondStringNum = "";
    // Neu ki tu dau tien la "." thi bo qua
    if (theStringNum == ".") {
        Obj.value = "";
        return;
    }
    var the_first_char = theStringNum.substr(0, 1);
    if (the_first_char == "-") {
        theStringNum = theStringNum.substr(1, theStringNum.length - 1);
    } else {
        the_first_char = "";
    }
    var theLen = theStringNum.length;

    pos = theStringNum.indexOf(".", 0)
    if (pos > 0) {
        arr_numstr = theStringNum.split(".");
        theFirstStringNum = theStringNum.substr(0, pos);
        theSecondStringNum = theStringNum.substr(pos + 1, theStringNum.length - pos);
        if (theSecondStringNum.substr(theSecondStringNum.length - 1, 1) == ".") {
            Obj.value = the_first_char + theStringNum.substr(0, theStringNum.length - 1);
            return;
        }
        theStringNum = theFirstStringNum;
    }
    //Chi nhan cac ky tu la so
    if ((theKey >= 48 && theKey <= 57) || (theKey >= 96 && theKey <= 105) || (theKey == 8)) {
        var theNewString;
        var theSubString;
        var LastIndex;
        LastIndex = 0;
        theSubString = ""
        // Thay the ky tu ","
        for (var i = 0; i < theStringNum.length; i++) {
            if (theStringNum.substring(i, i + 1) == _DECIMAL_DELIMITOR)		// Tim ky tu ","
            {
                theSubString = theSubString + theStringNum.substring(LastIndex, i)
                LastIndex = i + 1;
            }
        }
        theSubString = theSubString + theStringNum.substring(LastIndex, theStringNum.length) // Lay mot doan cuoi cung (vi doan cuoi cung khong co ky tu ",")
        theStringNum = theSubString;

        theNewString = ""
        if (theStringNum.length > 3)
            while (theStringNum.length > 3) {
                theSubString = theStringNum.substring(theStringNum.length - 3, theStringNum.length);
                theStringNum = theStringNum.substring(0, theStringNum.length - 3);
                theNewString = _DECIMAL_DELIMITOR + theSubString + theNewString;
                //phuonghv add 20/08/2016 neu vi tri o cuoi thi tu dong cong them 1 vi them phan tach phan nghin boi dau ,
                if (v_is_vi_tri_con_tro_o_cuoi == 1) {
                    v_vi_tri_con_tro++;
                }

            }
        if (pos > 0)
            theNewString = theStringNum + theNewString + "." + theSecondStringNum;
        else
            theNewString = theStringNum + theNewString;

        if (theLen > 3)
            Obj.value = the_first_char + theNewString;
        try {
            Obj.onchange();
        } catch (e) { ; }
    }
    // //phuonghv add 20/08/2016 dat lai vi tri con tro chuot vao vi tri nhap lieu
    setCaretPosition(Obj, v_vi_tri_con_tro);
}
Number.prototype.f_formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
//Ham FormatDate dinh dang hien thi kieu thoi gian "Ngay/Thang/Nam" trong khi nhap du lieu
//Ham nay chi cho phep nhap cac ki tu dang so, neu nhap bat ky ki tu nao khac se khong nhan
//Ham nay duoc goi trong su kien onKeyUp cua cac text_box. onKeyUp="FormatDate(this,'/')"
//Tham so:
//	-txt_obj (Object): doi tuong text box nhap du lieu kieu thoi gian
//	-separator_char (character): dau ngan cach giua ngay, thang va nam (Vi du: dau ":", dau "/", dau "|", dau "-", ...)
function FormatDate(txt_obj, event) {
    var separator_char = "/";
    //Lay gia tri ma ASCII cua phim an
    var theKey;
    //var keyCode = (document.layers) ? keyStroke.which : event.keyCode;
    if (typeof (event) == "undefined") {
        theKey = window.event.keyCode;
    }
    else {
        theKey = (window.event) ? event.keyCode : event.which;
    }
    //var theKey = event.keyCode;
    var theLen = txt_obj.value.length;
    //Neu an phim BackSpace, Up, Down, Left, Right, Home, End thi khong xu ly
    if (theKey == 8 || theKey == 37 || theKey == 39 || theKey == 40) { return 1; }
    //Loai bo cac ki tu khong phai ky tu so (ke ca dau phan cach ngay thang nam)
    theStr = "";
    for (var i = 0; i < theLen; i++) {
        theChar = txt_obj.value.charCodeAt(i);
        if (theChar >= 48 & theChar <= 57) {
            theStr = theStr + txt_obj.value.substring(i, i + 1);
        }
    }
    theLen = theStr.length;
    // Xu ly tao format theo dang thoi gian dd/mm/yyyy
    if (theLen >= 4) {
        theDate = theStr.substring(0, 2);
        theMonth = theStr.substring(2, 4);
        theYear = theStr.substring(4);
        txt_obj.value = theDate + separator_char + theMonth + separator_char + theYear;
    } else {
        if (theLen >= 2) {
            theDate = theStr.substring(0, 2);
            theMonth = theStr.substring(2);
            txt_obj.value = theDate + separator_char + theMonth;
        } else {
            txt_obj.value = theStr;
        }
    }
    return 1;
}
function FormatHour(t, e, n) {
    var a;
    a = void 0 === n ? window.event.keyCode : window.event ? n.keyCode : n.which;
    var r = t.value.length;
    if (8 == a || 37 == a || 39 == a || 40 == a) return 1;
    theStr = "";
    for (var o = 0; o < r; o++) theChar = t.value.charCodeAt(o), theChar >= 48 & theChar <= 57 && (theStr += t.value.substring(o, o + 1));
    if ((r = theStr.length) >= 2) {
        if (theHour = theStr.substring(0, 2), theHour >= 24) return alertZebraContent("Ban nhap gio khong dung (Gio phai nho hon 24)"), void (t.value = "");
        if (theMinute = theStr.substring(2), theMinute > 59) return alertZebraContent("Ban nhap phut khong dung (Phut phai nho hon 60)"), void (t.value = "");
        t.value = theHour + e + theMinute
    } else t.value = theStr;
    return 1
}
function FormatPhone(t, e) {
    var n;
    n = void 0 === e ? window.event.keyCode : window.event ? e.keyCode : e.which;
    var a = t.value.length;
    if (8 == n || 37 == n || 39 == n || 40 == n) return 1;
    theStr = "";
    for (var r = 0; r < a; r++) theChar = t.value.charCodeAt(r), theChar >= 48 & theChar <= 57 && (theStr += t.value.substring(r, r + 1));
    return (a = theStr.length) >= 4 && (theone = theStr.substring(0, 4), thetwo = theStr.substring(4, 7), thethree = theStr.substring(7), t.value = theone + " " + thetwo + " " + thethree), 1
}
$(document).ready(function ($) {
    "use strict";
    awe_lazyloadImage();
});
/********************************************************
# LAZY LOAD
********************************************************/
function awe_lazyloadImage() {
    setTimeout(function () {
        var i = $("[data-lazyload]");
        i.length > 0 && i.each(function () {
            var i = $(this), e = i.attr("data-lazyload");
            i.appear(function () {
                i.removeAttr("height").attr("src", e);
            }, {
                accX: 0,
                accY: 120
            }, "easeInCubic");
        });
        var e = $("[data-lazyload2]");
        e.length > 0 && e.each(function () {
            var i = $(this), e = i.attr("data-lazyload2");
            i.appear(function () {
                i.css("background-image", "url(" + e + ")");
            }, {
                accX: 0,
                accY: 120
            }, "easeInCubic");
        });
    }, 500);
} window.awe_lazyloadImage = awe_lazyloadImage;
$(document).ready(function () {
    $('.select2').each(function (i, obj) {
        if (!$(obj).data('select2')) {
            $(obj).select2();
        }
    });
    /*datwpicker*/
    $('.mydatepicker').each(function (i, obj) {
        if (!$(obj).data('mydatepicker')) {
            $('.mydatepicker').datepicker({
                format: 'dd/mm/yyyy',
                todayHighlight: true,
                autoclose: true,
                todayBtn: true
            });
        }
    });
    $('.mydatepicker-years').each(function (i, obj) {
        if (!$(obj).data('mydatepicker-years')) {
            $('.mydatepicker-years').datepicker({
                todayHighlight: true,
                autoclose: true,
                format: 'yyyy',
                viewMode: 'years',
                minViewMode: 'years'
            });
        }
    });
    // Js Tool tip
    $('[data-toggle="tooltip"]').tooltip();
});
function setDatePicker(t) {
    $('.' + t).datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true,
        todayBtn: true
    });
}
/* Mã hóa ký tự từ utf8 = > base64*/ function utf8_to_b64(str) {     if (str == '') return '';     return window.btoa(unescape(encodeURIComponent(str)));
 } /* dịch ngược mã hóa ký tự từ base64 = > utf8*/ function b64_to_utf8(str) {     if (str == '') return '';     return decodeURIComponent(escape(window.atob(str)));
 }
//hàm cộng dồn các checkbox được checked function isChecked(isitchecked) {     if (isitchecked == true) {         document.forms[0].boxchecked.value++;     }     else {         document.forms[0].boxchecked.value--;     }
 } //hàm checkall checkbox function checkAll(fldName) {     if (!fldName) {         fldName = 'cb';     }     var f = document.forms[0];     var c = f.toggle.checked;     var n2 = 0;     var n = 0;     if (f.PageSize) {         n = parseInt(f.PageSize.value);
    } else {         n = $('input[name*="cid"]').length;
    }     for (i = 0; i < n; i++) {         cb = eval('f.' + fldName + '' + i);         if (cb) {             cb.checked = c;             n2++;         }     }     if (c) {         document.forms[0].boxchecked.value = n2;     } else {         document.forms[0].boxchecked.value = 0;     }
 }
function change_captcha() {
    var t = Math.floor(999999 * Math.random());
    document.getElementById("imgValidCode").src = "/Tools/Security.aspx?Code=" + t
}
function ShowOpenDiaLog(p_url, p_width, p_height, p_function_close) {
    var ranNum = Math.floor(999999 * Math.random());
    p_url += (p_url.indexOf("?") > -1 ? "&" : "?") + "rnd=" + ranNum, $.colorbox({
        overlayClose: !1,
        width: p_width,
        height: p_height,
        iframe: !0,
        href: p_url,
        onClosed: function () {
            null != p_function_close && "" != p_function_close && eval("window.parent." + p_function_close + "()")
        }
    })
}
//--------Chuyen focus toi doi tuong tiep theo-----------------------
// f = form name; 0 = cuurent object name
function change_focus(f, o, event) {
    var ret1 = "";
    var j = 0;
    var i = 0;
    var b = 0;
    first_object_id = -1;
    try {
        var keyCode;
        //var keyCode = (document.layers) ? keyStroke.which : event.keyCode;
        if (typeof (event) == "undefined") {
            keyCode = window.event.keyCode;
        }
        else {
            keyCode = (window.event) ? event.keyCode : event.which;
        }
        if (keyCode == '13') {
            event.preventDefault();
        }
        // Neu la phim Enter, Down, Up
        if ((keyCode == '9' && o.type == 'select-one') || (o.type != 'select-one' && (keyCode == '40' || keyCode == '38' || keyCode == '13'))) {
            b = 0;
            while (i >= 0 && (i < f.length) && (j < 2)) {
                var e = f.elements[i];
                // Xac dinh ID cua field dau tien co kieu khong phai la hidden
                if (e.type != 'hidden' && first_object_id == -1) first_object_id = i;
                // Tim de vi tri cua doi tuong hien tai
                if ((b == 0) && (e.name == o.name) && (e.type != 'hidden')) {
                    o.blur();
                    b = 1;
                    if (keyCode != '38') {
                        i = i + 1;
                        if (i == f.length) i = first_object_id;
                    } else {
                        if (i == first_object_id) i = f.length - 1; else i = i - 1;
                    }
                    var e = f.elements[i];
                }
                if (b == 1) {
                    if ((e.type != 'hidden') && (!e.readOnly) && (!e.disabled) && (e.hide != 'true')) {
                        e.focus();
                        return true;
                    }
                }
                if (keyCode != '38') {
                    i = i + 1;
                    if (i == f.length) { i = 0; j = j + 1; }
                } else {
                    i = i - 1;
                    if (i == first_object_id) { i = f.length - 1; j = j + 1; }
                }
            }
        }
        return true;
    } catch (e) { }
}
//calljs DataTable
function getListCommand_DataTable() {
    var commands = "colvis|print";
    var arrayButtons = [];
    var commandButons = commands.split('|');
    for (var i = 0; commandButons.length > 0 && i < commandButons.length; i++) {
        if (commandButons[i] && commandButons[i].indexOf("colvis") > -1) {
            arrayButtons.push({ //colvis
                extend: 'colvis',
                key: {
                    shiftKey: true,
                    key: '7'
                },
                columnText: function (dt, idx, title) {
                    return (idx + 1) + ': Cột ' + title;
                },
                text: '<i class="fa fa-columns"></i>',
                titleAttr: 'Ẩn & Hiện cột trong bảng',
                postfixButtons: [
                    //    {
                    //    extend: 'colvisGroup',
                    //    text: 'Trạng thái',
                    //    show: [1, 2, 7],
                    //    hide: [0, 3, 4, 5, 6, 8]
                    //},
                    {
                        extend: 'colvisRestore',
                        text: 'Hiển thị tất cả'
                    }]
            });
        }
        else if (commandButons[i] && commandButons[i].indexOf("print") > -1) {
            arrayButtons.push({ // Print
                text: '<i class="fa fa-print"></i>',
                titleAttr: 'Xuất bản In',
                key: {
                    shiftKey: true,
                    key: '6'
                },
                autoPrint: true,
                extend: 'print',
                exportOptions: {
                    columns: [':visible', 1],
                    orthogonal: 'export'
                },
                customize: function (win) {
                    $(win.document.body).find('h1')
                        .css('display', 'none')
                        .css('font-size', 'inherit')
                        .css('text-align', 'center')
                        .css('margin', '10px');
                    $(win.document.body)
                        .css('margin', '15px');
                }
            });
        }
    }
    return arrayButtons;
}
function SetDataTable(p_control_id) {
    var arrayButtons = getListCommand_DataTable()
    var table = $('#' + p_control_id.replace('#', '')).DataTable({
        paging: false,
        info: false,
        dom: 'Bfrtip',
        buttons: [arrayButtons],
        aoColumnDefs: [
            {
                "bSortable": false,
                "aTargets": ["sorting_disabled"]
            }
        ]
    });
    return table;
}
function IdentityDataTable(table, column_index) {
    table.on('order.dt search.dt', function () {
        table.column(column_index, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
}
function vsw_filter_reset(action) {
    $('#loading').show();     window.location.href = action;
}
$(document).ready(function () {
    $('input, select, textarea').on('focusin', function () {
        $(this).data('val', $(this).val());
    });
    $('input, select, textarea').on('change', function () {
        $(this).addClass('changed');
    });
});
function change_pagesize(url, value, name_control) {
    angular.element(document.getElementById('body_angular')).scope().vsw_filter_angular(url, value, name_control);
}
function change_pageindex(url, value, name_control) {
    angular.element(document.getElementById('body_angular')).scope().vsw_filter_angular(url, value, name_control);
}
function togger_table(p_control_id, p_control_icon_id) {
    if ($('#' + p_control_icon_id).hasClass('fa-plus-circle')) {
        $('#' + p_control_icon_id).removeClass('fa-plus-circle');
        $('#' + p_control_icon_id).addClass('fa-minus-circle');
        $('#' + p_control_id).toggle('show');
    } else {
        $('#' + p_control_icon_id).removeClass('fa-minus-circle');
        $('#' + p_control_icon_id).addClass('fa-plus-circle');
        $('#' + p_control_id).toggle('show');
    }
}
$(document).ready(function () {
    $('.showloading').click(function () {
        $('#loading').show();
    });
});
/*tab*/ var _type = 1;  function changeTab(type, boxId, aId, count, classBox, classA) {     _type = type;     $('#' + boxId + type).removeClass("display-none");     $('#' + boxId + type).addClass("display");     document.getElementById(aId + type).className = classA;      for (var i = 1; i <= count; i++) {         if (i != type) {             $('#' + boxId + i).removeClass("display");             $('#' + boxId + i).addClass("display-none");             document.getElementById(aId + i).className = classBox;         }     }
 } var length = 90;
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > length) {
        $('.menu_main').addClass("menu_w40");
    } else {
        $('.menu_main').removeClass("menu_w40");
    }
});