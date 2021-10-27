var _DECIMAL_DELIMITOR = ',';
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
            { caption: 'OK', callback: function () { location.reload(); } }
        ]
    });
}
function confirmZebra(title, content, redirect) {
    $.Zebra_Dialog(content, {
        'type': 'confirmation',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'Yes', callback: function () { location.href = redirect } },
            { caption: 'No', callback: function () { return } }
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
$(function () {
    $("[data-popup-open]").on("click", function (t) {
        var e = jQuery(this).attr("data-popup-open");
        $('[data-popup="' + e + '"]').fadeIn(350), t.preventDefault()
    }), $("[data-popup-close]").on("click", function (t) {
        var e = jQuery(this).attr("data-popup-close");
        $('[data-popup="' + e + '"]').fadeOut(350), t.preventDefault()
    })
})
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
function verify_multi_browser(f) {
    var errors = "";
    var i;
    for (i = 0; i < f.length; i++) {
        var e = f.elements[i];
        if ("radio" == e.getAttribute("type") && null != e.getAttribute("data-rule-required") && "true" == e.getAttribute("data-rule-required") && 0 == ischeckedform(t, e.name)) return "" != e.getAttribute("data-msg-required") ? alertZebraContent(e.getAttribute("data-msg-required")) : alertZebraContent("At least one " + e.name + " must be checked "), e.focus(), !1;
        if ("checkbox" == e.getAttribute("type") && null != e.getAttribute("data-rule-required") && "true" == e.getAttribute("data-rule-required") && 0 == ischeckedform(t, e.name)) return "" != e.getAttribute("data-msg-required") ? alertZebraContent(e.getAttribute("data-msg-required")) : alertZebraContent("At least one " + e.name + " must be checked "), e.focus(), !1;
        // If it is hour object
        if ((null != e.getAttribute("ishour") && "true" == e.getAttribute("ishour")) && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (IsHour(e, ':') == false) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("Hour is invalid");
                e.focus();
                return false;
            }
        }
        //kiem tra dinh dang so dien thoai - thonv add 06/06/2016
        if (null != e.getAttribute("isphone") && e.getAttribute("isphone") == "true" && (!((e.value == null) || (e.value == "") || isblank(e.value)))) {
            if (isphonenumber(e.value) == false || e.value.length > 11 || e.value.length < 9) {
                if (e.getAttribute("data-msg-required") != '') alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent(e.name + " is invalid.");
                e.focus();
                return false;
            }
        }
        // If it is email object
        if ((null != e.getAttribute("isemail") && e.getAttribute("isemail") == "true") && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (isemail(e.value) == false) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("Email is invalid");
                e.focus();
                return false;
            }
        }
        // if it is Date object
        if (null != e.getAttribute("isdate") && e.getAttribute("isdate") == "true") {
            if (!((e.value == null) || (e.value == "") || isblank(e.value))) {
                if (isdate(e.value) == false) {
                    if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                    else alertZebraContent("Date is invalid");
                    e.focus();
                    return false;
                }
            }
        }
        // if it is number object
        if ((e.getAttribute("isnumeric") || e.getAttribute("isdouble") || e.getAttribute("isfloat") || (e.getAttribute("min") != null) || (e.getAttribute("max") != null)) && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (!_DECIMAL_DELIMITOR) decimal_delimitor = ","; else decimal_delimitor = _DECIMAL_DELIMITOR;
            test_value = replace(e.value, decimal_delimitor, "");
            if (e.getAttribute("isdouble"))
                is_number = isdouble(test_value);
            else
                is_number = isnum(test_value);

            //phuonghv add 07.12.2017
            test_value = replace(test_value, '-', "");
            var v = parseFloat(test_value);

            var v_min = (e.getAttribute("min") != null) ? e.getAttribute("min") : 0;
            var v_max = (e.getAttribute("max") != null) ? e.getAttribute("max") : 0;

            if (!is_number || v < v_min || (v_max > 0 && v > v_max)) {
                errors += "- The field " + e.name + " must be a number";
                if (e.getAttribute("min") != null)
                    errors += " that is greater than " + e.getAttribute("min");
                if (e.getAttribute("min") != null && e.getAttribute("max") != null)
                    errors += " and less than " + e.getAttribute("max");
                else if (e.getAttribute("max") != null)
                    errors += " That is less than " + e.getAttribute("max");
                errors += ".\n";
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent(errors);
                e.focus();
                return false;
            }
        }
        // check maxlength
        if ((e.getAttribute("maxlength") != null && e.getAttribute("maxlength") != "") && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (e.value.length > e.getAttribute("maxlength")) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("The length of " + e.name + " must be less than " + e.getAttribute("maxlength"));
                e.focus();
                return false;
            }
        }
        // check multiple selectbox must be not empty
        if (e.getAttribute("checkempty") && e.getAttribute("type") == "select-multiple" && e.length == 0) {
            if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
            else alertZebraContent(e.name + " must be not empty");
            e.focus();
            return false;
        }
        // Check for text, textarea
        if (((e.getAttribute("type") == "password") || (e.getAttribute("type") == "text") || (e.getAttribute("type") == "textbox") || (e.getAttribute("type") == "textarea") || (e.getAttribute("type") == "select-one")) && (e.getAttribute("data-rule-required") != null && e.getAttribute("data-rule-required") == "true")) {
            if ((e.value == null) || (e.value == "") || isblank(e.value)) {

                if (e.getAttribute("data-msg-required") != null) {
                    alertZebraContent(e.getAttribute("data-msg-required"));
                }
                else { alertZebraContent(e.name + " must be not empty"); }
                if (e.getAttribute("type") != "select-one") {
                    e.focus();
                } else {
                    $('#s2id_' + e.id).addClass("select2-container-active");
                }
                return false;
            }
        }
    }
    return true;
}
function verify_control_in_parent(parent_id) {
    var t = document.getElementById(parent_id).getElementsByTagName('*');
    var i, n = "";
    for (i = 0; i < t.length; i++) {
        var e = t[i];
        var tagName = e.tagName.toLowerCase();
        if (tagName != 'select' && tagName != 'input' && tagName != 'textarea') {
            continue;
        }
        if ("radio" == e.getAttribute("type") && null != e.getAttribute("data-rule-required") && "true" == e.getAttribute("data-rule-required") && 0 == ischeckedhtml(t, e.name)) return "" != e.getAttribute("data-msg-required") ? alertZebraContent(e.getAttribute("data-msg-required")) : alertZebraContent("At least one " + e.name + " must be checked "), e.focus(), !1;
        if ("checkbox" == e.getAttribute("type") && null != e.getAttribute("data-rule-required") && "true" == e.getAttribute("data-rule-required") && 0 == ischeckedhtml(t, e.name)) return "" != e.getAttribute("data-msg-required") ? alertZebraContent(e.getAttribute("data-msg-required")) : alertZebraContent("At least one " + e.name + " must be checked "), e.focus(), !1;
        // If it is hour object
        if ((null != e.getAttribute("ishour") && "true" == e.getAttribute("ishour")) && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (IsHour(e, ':') == false) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("Hour is invalid");
                e.focus();
                return false;
            }
        }
        //kiem tra dinh dang so dien thoai - thonv add 06/06/2016
        if (null != e.getAttribute("isphone") && e.getAttribute("isphone") == "true" && (!((e.value == null) || (e.value == "") || isblank(e.value)))) {
            if (isphonenumber(e.value) == false || e.value.length > 11 || e.value.length < 9) {
                if (e.getAttribute("data-msg-required") != '') alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent(e.name + " is invalid.");
                e.focus();
                return false;
            }
        }
        // If it is email object
        if ((null != e.getAttribute("isemail") && e.getAttribute("isemail") == "true") && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (isemail(e.value) == false) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("Email is invalid");
                e.focus();
                return false;
            }
        }
        // if it is Date object
        if (null != e.getAttribute("isdate") && e.getAttribute("isdate") == "true") {
            if (!((e.value == null) || (e.value == "") || isblank(e.value))) {
                if (isdate(e.value) == false) {
                    if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                    else alertZebraContent("Date is invalid");
                    e.focus();
                    return false;
                }
            }
        }
        // if it is number object
        if ((e.getAttribute("isnumeric") || e.getAttribute("isdouble") || e.getAttribute("isfloat") || (e.getAttribute("min") != null) || (e.getAttribute("max") != null)) && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (!_DECIMAL_DELIMITOR) decimal_delimitor = ","; else decimal_delimitor = _DECIMAL_DELIMITOR;
            test_value = replace(e.value, decimal_delimitor, "");
            if (e.getAttribute("isdouble"))
                is_number = isdouble(test_value);
            else
                is_number = isnum(test_value);

            //phuonghv add 07.12.2017
            test_value = replace(test_value, '-', "");
            var v = parseFloat(test_value);

            var v_min = (e.getAttribute("min") != null) ? e.getAttribute("min") : 0;
            var v_max = (e.getAttribute("max") != null) ? e.getAttribute("max") : 0;

            if (!is_number || v < v_min || (v_max > 0 && v > v_max)) {
                errors += "- The field " + e.name + " must be a number";
                if (e.getAttribute("min") != null)
                    errors += " that is greater than " + e.getAttribute("min");
                if (e.getAttribute("min") != null && e.getAttribute("max") != null)
                    errors += " and less than " + e.getAttribute("max");
                else if (e.getAttribute("max") != null)
                    errors += " That is less than " + e.getAttribute("max");
                errors += ".\n";
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent(errors);
                e.focus();
                return false;
            }
        }
        // check maxlength
        if ((e.getAttribute("maxlength") != null && e.getAttribute("maxlength") != "") && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (e.value.length > e.getAttribute("maxlength")) {
                if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
                else alertZebraContent("The length of " + e.name + " must be less than " + e.getAttribute("maxlength"));
                e.focus();
                return false;
            }
        }
        // check multiple selectbox must be not empty
        if (e.getAttribute("checkempty") && e.getAttribute("type") == "select-multiple" && e.length == 0) {
            if (e.getAttribute("data-msg-required") != null) alertZebraContent(e.getAttribute("data-msg-required"));
            else alertZebraContent(e.name + " must be not empty");
            e.focus();
            return false;
        }
        //console.log(e);
        // Check for text, textarea
        if (((e.getAttribute("type") == "password") || (e.getAttribute("type") == "text") || (e.getAttribute("type") == "textbox") || (e.getAttribute("type") == "textarea") || (e.getAttribute("type") == "select-one")) && (e.getAttribute("data-rule-required") != null && e.getAttribute("data-rule-required") == "true")) {
            if ((e.value == null) || (e.value == "") || isblank(e.value)) {

                if (e.getAttribute("data-msg-required") != null) {
                    alertZebraContent(e.getAttribute("data-msg-required"));
                }
                else { alertZebraContent(e.name + " must be not empty"); }
                if (e.getAttribute("type") != "select-one") {
                    e.focus();
                } else {
                    $('#s2id_' + e.id).addClass("select2-container-active");
                }
                return false;
            }
        }
    }
    return !0
}
function isChecked(t) {
    1 == t ? document.forms[0].boxchecked.value++ : document.forms[0].boxchecked.value--
}
function ischeckedform(t, e) {
    var n = !1,
        a = 0;
    for (a = 0; a < t.length; a++) {
        var r = t.elements[a];
        if (r.name == e && r.checked) {
            n = !0;
            break
        }
    }
    return n
}
function ischeckedhtml(t, e) {
    var n = !1,
        a = 0;
    for (a = 0; a < t.length; a++) {
        var r = t[a];
        if (r.name == e && r.checked) {
            n = !0;
            break
        }
    }
    return n
}
function isblank(t) {
    var e;
    for (e = 0; e < t.length; e++) {
        var n = t.charAt(e);
        if (" " != n && "\n" != n && "\t" != n) return !1
    }
    return !0
}
function IsHour(t, e) {
    var n = t.length,
        a = t.value,
        r = "";
    return 0 != n && (separator_pos = a.indexOf(e, 1), 0 != separator_pos && (theHour = a.substr(0, separator_pos), r = a.substr(separator_pos + 1, separator_pos + 3), !(parseInt(theHour) > 24 || parseInt(r) > 60)))
}
/*
 * Ham kiem tra dinh dang so dien thoai
 * thonv add 06.06.2016
 */
function isphonenumber(inputtxt) {
    var phoneno = /\(?([0-9]{3,4})\)?([0-9]{3})?([0-9]{3,4})$/;
    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}
//Checking email;
function isemail(email) {
    var invalidChars = "/ :,;";

    if (email == "") {
        return false;
    }
    for (i = 0; i < invalidChars.length; i++) {
        badChar = invalidChars.charAt(i);
        if (email.indexOf(badChar, 0) > -1) {
            return false;
        }
    }
    atPos = email.indexOf("@", 1)
    if (atPos == -1) {
        return false;
    }
    if (email.indexOf("@", atPos + 1) > -1) {
        return false;
    }
    periodPos = email.indexOf(".", atPos);
    if (periodPos == -1) {
        return false;
    }
    if (periodPos + 3 > email.length) {
        return false;
    }
    return true;
}
function isdate(t) {
    var e, n, a, r, o, _, l, u, s, d = !1,
        c = new Array("-", " ", "/", "."),
        h = new Array(12);
    if (h[0] = "Jan", h[1] = "Feb", h[2] = "Mar", h[3] = "Apr", h[4] = "May", h[5] = "Jun", h[6] = "Jul", h[7] = "Aug", h[8] = "Sep", h[9] = "Oct", h[10] = "Nov", h[11] = "Dec", "" == (e = t)) return !1;
    for (s = 0; s < c.length; s++)
        if (-1 != e.indexOf(c[s])) {
            if (3 != (n = e.split(c[s])).length) return 1, !1;
            a = n[0], r = n[1], o = n[2], d = !0
        }
    if (0 == d) {
        if (!(e.length > 5)) return !1;
        a = e.substr(0, 2), r = e.substr(2, 2), o = e.substr(4)
    }
    if (2 == o.length && (o = "20" + o), !isnum(a)) return 2, !1;
    if (_ = parseInt(a, 10), isNaN(_)) return 2, !1;
    if (!isnum(r)) return 3, !1;
    if (l = parseInt(r, 10), isNaN(l)) {
        for (i = 0; i < 12; i++) r.toUpperCase() == h[i].toUpperCase() && (l = i + 1, r = h[i], i = 12);
        if (isNaN(l)) return 3, !1
    }
    if (!isnum(o)) return 4, !1;
    if (u = parseInt(o, 10), isNaN(u)) return 4, !1;
    if (l > 12 || l < 1) return 5, !1;
    if ((1 == l || 3 == l || 5 == l || 7 == l || 8 == l || 10 == l || 12 == l) && (_ > 31 || _ < 1)) return 6, !1;
    if ((4 == l || 6 == l || 9 == l || 11 == l) && (_ > 30 || _ < 1)) return 7, !1;
    if (2 == l) {
        if (_ < 1) return 8, !1;
        if (1 == LeapYear(u)) {
            if (_ > 29) return 9, !1
        } else if (_ > 28) return 10, !1
    }
    return !0
}
function LeapYear(t) {
    if (t % 100 == 0) {
        if (t % 400 == 0) return !0
    } else if (t % 4 == 0) return !0;
    return !1
}
function isdouble(t) {
    if ("" == t) return !1;
    if (count_char(t, ".") > 1) return !1;
    for (i = 0; i < t.length; i++) {
        if ("." != t.charAt(i) && t.charAt(i) < "0") return !1;
        if ("." != t.charAt(i) && t.charAt(i) > "9") return !1
    }
    return !0
}
function isfloat(t) {
    if ("" == t) return !1;
    if (count_char(t, ".") > 1) return !1;
    if (count_char(t, "-") > 1) return !1;
    if (t.indexOf("-") > 0) return !1;
    for (t = t.substring(1), i = 0; i < t.length; i++) {
        if ("." != t.charAt(i) && t.charAt(i) < "0") return !1;
        if ("." != t.charAt(i) && t.charAt(i) > "9") return !1
    }
    return !0
}
function isnum(t) {
    if ("" == t) return !1;
    if (count_char(t, ".") > 1) return !1;
    for (i = 0; i < t.length; i++)
        if ("." != t.charAt(i)) {
            if (t.charAt(i) < "0") return !1;
            if (t.charAt(i) > "9") return !1
        }
    return !0
}
function count_char(t, e) {
    if ("" == t) return 0;
    var n, a, r;
    for (a = 0, n = t; n.indexOf(e, 0) >= 0;) a++ , r = n.indexOf(e, 0) + 1, n = n.substring(r);
    return a
}
function char2number(t) {
    var e;
    return e = replace(t, ",", ""), isfloat(e) || (e = 0), isNaN(e) && (e = 0), e
}
function InputNumberOnly(t) {
    var e = t.which ? t.which : event.keyCode;
    return e >= 48 && e <= 57 || 46 == e
}
function replace(t, e, n) {
    var a = t.length,
        r = e.length;
    if (0 == a || 0 == r) return t;
    var o = t.indexOf(e);
    if (!o && e != t.substring(0, r)) return t;
    if (-1 == o) return t;
    var _ = t.substring(0, o) + n;
    return o + r < a && (_ += replace(t.substring(o + r, a), e, n)), _
}
function openWindow(t, e, n, a) {
    a = void 0 == typeof a ? "new_window" : a, v_top = parseInt((screen.height - n) / 2 - 15), v_left = parseInt((screen.width - e) / 2), window.open(t, a, "width=" + e + ", height=" + n + ",top=" + v_top + ",left=" + v_left + ",toolbar=no,status=yes,menubar=no,scrollbars=yes,resizable=yes")
}
function date_compare(t, e) {
    return date1 = new Date(ddmmyyyy_to_mmddyyyy(t)), date2 = new Date(ddmmyyyy_to_mmddyyyy(e)), year1 = 1 * date1.getFullYear(), month1 = 1 * date1.getMonth(), day1 = 1 * date1.getDate(), year2 = 1 * date2.getFullYear(), month2 = 1 * date2.getMonth(), day2 = 1 * date2.getDate(), year1 > year2 ? -1 : year1 < year2 ? 1 : month1 > month2 ? -1 : month1 < month2 ? 1 : day1 > day2 ? -1 : day1 < day2 ? 1 : 0
}
function list_have_element(t, e, n) {
    try {
        if ("" == t) return -1;
        if (t == e) return 1;
        if (-1 == t.indexOf(n)) return -1;
        arr_value = t.split(n);
        for (var a = 0; a < arr_value.length; a++)
            if (arr_value[a] == e) return a
    } catch (t) { }
    return -1
}
function list_append(t, e, n) {
    var a = t;
    return e += "", "" == a ? a = e : "" != e && (a = a + n + e), a
}
function set_date(t, e) {
    return dt_date = new Date(t), dt_date.setDate(e), dt_date.toLocaleString()
}
function get_date(t) {
    return dt_date = new Date(t), dt_date.getDate(), dt_date.getDate()
}
function tinh_so_nam(t, e) {
    return "" == t || "" == e ? 0 : (date1 = new Date(ddmmyyyy_to_mmddyyyy(t)), date2 = new Date(ddmmyyyy_to_mmddyyyy(e)), year1 = 1 * date1.getFullYear(), year2 = 1 * date2.getFullYear(), year2 < year1 ? void 0 : (so_nam = year2 - year1, so_nam))
}
function tinh_so_thang(t, e) {
    return "" == t || "" == e ? 0 : (date1 = new Date(ddmmyyyy_to_mmddyyyy(t)), date2 = new Date(ddmmyyyy_to_mmddyyyy(e)), year1 = 1 * date1.getFullYear(), month1 = 1 * date1.getMonth(), day1 = 1 * date1.getDate(), year2 = 1 * date2.getFullYear(), month2 = 1 * date2.getMonth(), day2 = 1 * date2.getDate(), year2 < year1 ? void 0 : (so_thang = 12 * (year2 - year1), so_thang += month2 - month1, so_thang))
}
function tinh_so_ngay(t, e) {
    if ("" == t || "" == e) return 0;
    date1 = new Date(ddmmyyyy_to_mmddyyyy(t)), date2 = new Date(ddmmyyyy_to_mmddyyyy(e));
    var n = date1.getTime(),
        a = date2.getTime() - n;
    return Math.round(a / 864e5)
}
function add_day_date(t, e) {
    return isdate(t) ? (dt_date = new Date(ddmmyyyy_to_mmddyyyy(t)), v_date = dt_date.getDate(), dt_date.setDate(e + v_date), (dt_date.getDate() < 10 ? "0" + dt_date.getDate() : dt_date.getDate()) + "/" + (dt_date.getMonth() + 1 < 10 ? "0" + (dt_date.getMonth() + 1) : dt_date.getMonth() + 1) + "/" + dt_date.getFullYear()) : ""
}
function phonenumber(t) {
    var e = /^0\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})$/;
    return !!t.value.match(e) || (alertZebraContent("Số điện thoại không đúng."), $("#C_PHONE").focus(), !1)
}
function valid_and_format_hour(t) {
    if (v_value = t.value, v_value.length <= 2) {
        if (!isnum(v_value) || v_value > 24) return void (t.value = "");
        2 == v_value.length && (t.value = v_value + ":")
    }
}
function mmddyyyy_to_ddmmyyyy(t) {
    return strSeparator = "", -1 != t.indexOf("/") && (strSeparator = "/"), -1 != t.indexOf("-") && (strSeparator = "-"), -1 != t.indexOf(".") && (strSeparator = "."), "" == strSeparator ? "" : (parts = t.split(strSeparator), day = parts[1], month = parts[0], year = parts[2], day + strSeparator + month + strSeparator + year.substr(0, 4))
}
function ddmmyyyy_to_mmddyyyy(t) {
    return strSeparator = "", -1 != t.indexOf("/") && (strSeparator = "/"), -1 != t.indexOf("-") && (strSeparator = "-"), -1 != t.indexOf(".") && (strSeparator = "."), "" == strSeparator ? "" : (parts = t.split(strSeparator), day = parts[0], month = parts[1], year = parts[2], month + strSeparator + day + strSeparator + year.substr(0, 4))
}
function vsw_form_name_submit(action_form, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $("#" + name_form).validate({
        highlight: function (element, errorClass, validClass) {
            var thisAlert = $(element).parent();
            $(element).focus();
            $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
            $(thisAlert).addClass('alert-validate');
            $(thisAlert).addClass('active');
            $(thisAlert).addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            var thisAlert = $(element).parent();
            $(thisAlert).attr("data-validate", "");
            $(thisAlert).removeClass('alert-validate');
            $(thisAlert).removeClass('active');
            $(thisAlert).addClass("has-success").removeClass("has-error");
        }
        //, submitHandler: function () {
        //    $('#loading').show();
        //    $("#" + name_form).find("input, textarea, select").removeAttr("disabled");
        //    if (action_form != '') {
        //        document.getElementById("_vsw_action").value = action_form;
        //    }
        //    eval("document." + name_form + ".submit()");
        //}
    });
    if ($("#" + name_form).valid()) // check if form is valid
    {
        $('#loading').show();
        $("#" + name_form).find("input, textarea, select").removeAttr("disabled");
        if (action_form != '') {
            document.getElementById("_vsw_action").value = action_form;
        }
        eval("document." + name_form + ".submit()");
    }
}
function vsw_form_name_submit_no_validate(action_form, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $('#loading').show();
    $("#" + name_form).find("input, textarea, select").removeAttr("disabled");
    if (action_form != '') {
        document.getElementById("_vsw_action").value = action_form;
    }
    eval("document." + name_form + ".submit()");
}
function vsw_form_name_submit_ajax(url, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $("#" + name_form).validate({
        highlight: function (element, errorClass, validClass) {
            var thisAlert = $(element).parent();
            $(element).focus();
            $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
            $(thisAlert).addClass('alert-validate');
            $(thisAlert).addClass('active');
            $(thisAlert).addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            var thisAlert = $(element).parent();
            $(thisAlert).attr("data-validate", "");
            $(thisAlert).removeClass('alert-validate');
            $(thisAlert).removeClass('active');
            $(thisAlert).addClass("has-success").removeClass("has-error");
        }
    });
    if ($("#" + name_form).valid()) // check if form is valid
    {
        $('#loading').show();
        var dataToPost = $("#" + name_form).serialize();
        $.ajax({
            url: url,
            data: dataToPost,
            type: "POST",
            dataType: "json",
            success: function (data) {
                $('#loading').hide();
                if (data.message.trim() != '') {
                    if (data.status == "Success") {
                        alertZebraType('Th&#244;ng b&#225;o', data.message, 'information');
                    } else {
                        alertZebra('Th&#244;ng b&#225;o', data.message);
                    }
                }

                if (data.js.trim() != '') {
                    eval(data.js);
                }
            },
            error: function () {
                $('#loading').hide();
            }
        });
    }
}
//--------Chuyen focus toi doi tuong tiep theo-----------------------
// f = form name; 0 = cuurent object name
function change_focus(f, o, event) {
    var ret1 = "";
    var j = 0;
    var i = 0;
    var b = 0;
    first_object_id = -1;
    //try{
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
    //}catch(e){}
}
// Disable tat ca cac phan tu cua mot form
// f: ten form
function disable_all_elements(f) {
    var i;
    for (i = 0; i < f.length; i++) {
        if (f.elements[i].type != "hidden")
            f.elements[i].readOnly = true;
        if (f.elements[i].type == "button")
            f.elements[i].disabled = true;
        if (f.elements[i].type == "submit")
            f.elements[i].disabled = true;
    }
    return;
}
//--------Set focus at the first field of the form "f" -----------------------
function set_focus(f) {
    var i = 0;
    while (i < f.length) {
        var e = f.elements[i];
        if (((e.type == 'text') || (e.type == 'textarea')) && (!e.disabled) && (!e.readOnly)) {
            e.focus();
            return true;
        }
        i = i + 1;
    }
    return false;
}
/*
** Returns the caret (cursor) position of the specified text field.
** Return value range is 0-oField.value.length.
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
function FormatPhone(t, e) {
    var n;
    n = void 0 === e ? window.event.keyCode : window.event ? e.keyCode : e.which;
    var a = t.value.length;
    if (8 == n || 37 == n || 39 == n || 40 == n) return 1;
    theStr = "";
    for (var r = 0; r < a; r++) theChar = t.value.charCodeAt(r), theChar >= 48 & theChar <= 57 && (theStr += t.value.substring(r, r + 1));
    return (a = theStr.length) >= 4 && (theone = theStr.substring(0, 4), thetwo = theStr.substring(4, 7), thethree = theStr.substring(7), t.value = theone + " " + thetwo + " " + thethree), 1
}
function change_captcha() {
    var t = Math.floor(999999 * Math.random());
    document.getElementById("imgValidCode").src = "/Tools/Security.aspx?Code=" + t
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
function ShowOpenDiaLog(p_url, p_width, p_height, p_function_close) {
    var ranNum = Math.floor(999999 * Math.random());
    p_url += (p_url.indexOf("?") > -1 ? "&" : "?") + "rnd=" + ranNum, $.colorbox({
        overlayClose: !1,
        closebutton: !1,
        width: p_width,
        height: p_height,
        iframe: !0,
        href: p_url,
        onClosed: function () {
            null != p_function_close && "" != p_function_close && eval("window.parent." + p_function_close + "()")
        }
    })
}
function ShowOpenDiaLogFixHeight(p_url, p_width, p_function_close) {
    var ranNum = Math.floor(999999 * Math.random());
    p_url += (p_url.indexOf("?") > -1 ? "&" : "?") + "rnd=" + ranNum, $.colorbox({
        overlayClose: !1,
        closebutton: !1,
        width: p_width,
        height: "90%",
        iframe: !0,
        href: p_url,
        onClosed: function () {
            null != p_function_close && "" != p_function_close && eval("window.parent." + p_function_close + "()")
        }
    })
}
function refress_parent() {
    parent.location.reload()
}
function upload_avatar() {
    $("#postedFile").click();
}
function AvartarIsLoaded(t) {
    var e = document.getElementById("postedFile").files[0],
        n = new FileReader;
    n.onloadend = function () {
        $("#img_avatar").attr("src", n.result)
    }, e && n.readAsDataURL(e)
}
function CloseColorbox() {
    parent.jQuery.fn.colorbox && parent.jQuery.fn.colorbox.close()
}
function WindowRefressPage() {
    parent.location.reload()
}
$(document).ready(function () {
    $(".select2").select2();
    /*datwpicker*/
    $('.mydatepicker').datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true,
        todayBtn: true
    });
    $('.mydatepicker-years').datepicker({
        todayHighlight: true,
        autoclose: true,
        format: 'yyyy',
        viewMode: 'years',
        minViewMode: 'years'
    });
});
/* Mã hóa ký tự từ utf8 = > base64*/
function utf8_to_b64(str) {
    if (str == '') return '';
    return window.btoa(unescape(encodeURIComponent(str)));

}
/* dịch ngược mã hóa ký tự từ base64 = > utf8*/
function b64_to_utf8(str) {
    if (str == '') return '';
    return decodeURIComponent(escape(window.atob(str)));

}
//hàm cộng dồn các checkbox được checked
function isChecked(isitchecked) {
    if (isitchecked == true) {
        document.forms[0].boxchecked.value++;
    }
    else {
        document.forms[0].boxchecked.value--;
    }

}
//hàm checkall checkbox
function checkAll(n, fldName) {
    if (!fldName) {
        fldName = 'cb';
    }
    var f = document.forms[0];
    var c = f.toggle.checked;
    var n2 = 0;
    for (i = 0; i < n; i++) {
        cb = eval('f.' + fldName + '' + i);
        if (cb) {
            cb.checked = c;
            n2++;
        }
    }
    if (c) {
        document.forms[0].boxchecked.value = n2;
    } else {
        document.forms[0].boxchecked.value = 0;
    }

}
function vsw_checkAll(form, field, value) {
    for (i = 0; i < form.elements.length; i++) {
        if (form.elements[i].name == field) {
            form.elements[i].checked = value;
            if (form.elements[i].disabled)
                form.elements[i].checked = false;
        }
    }

}
//hàm set giá trị mặc định cho VSWArrDefault
function VSWCheckDefaultValue(value, name) {
    if (typeof (VSWArrDefault) != 'undefined') {
        for (var i = 0; i < VSWArrDefault.length; i++) {
            if (i == VSWArrDefault.length - 1) break;

            if (VSWArrDefault[i] == value && VSWArrDefault[i + 1] == name)
                return true;

            i++;
        }
    }
    return false;

}
//hàm Redirect url
function VSWRedirect(control, value, name) {
    $('#loading').show();
    var sURL = '';

    if (value && value != '' && value != '')
        sURL += '?' + (name ? name : 'RecordID') + '=' + value;

    if (typeof (VSWArrQT) != 'undefined') {
        for (var i = 0; i < VSWArrQT.length; i++) {
            if (i == VSWArrQT.length - 1) break;

            if (name && name == VSWArrQT[i + 1]) {
                i++;
                continue;
            }

            if ('PageIndex' == VSWArrQT[i + 1]) {
                i++;
                continue;
            }

            if (VSWArrQT[i] != '' && VSWArrQT[i] != '')
                if (!VSWCheckDefaultValue(VSWArrQT[i], VSWArrQT[i + 1]))
                    sURL += (sURL.indexOf('?') > -1 ? '&' : '?') + VSWArrQT[i + 1] + '=' + VSWArrQT[i].trim();

            i++;
        }
    }

    if (typeof (VSWArrVar_QS) != 'undefined') {
        for (var i = 0; i < VSWArrVar_QS.length; i++) {
            if (i == VSWArrVar_QS.length - 1) break;

            var obj = document.getElementById(VSWArrVar_QS[i]);
            if (obj != null) {
                var _value = obj.value;
                if (!VSWCheckDefaultValue(_value, VSWArrVar_QS[i + 1]))
                    sURL += (sURL.indexOf('?') > -1 ? '&' : '?') + VSWArrVar_QS[i + 1] + '=' + _value;
            }

            i++;
        }
    }

    if (typeof (VSWControllerLink) != 'undefined') {
        if (control)
            sURL = '/' + VSWControllerLink + '/' + control + (sURL != '' ? ('?' + utf8_to_b64(sURL)) : '');
        else
            sURL = '/' + VSWControllerLink + (sURL != '' ? ('?' + utf8_to_b64(sURL)) : '');

        window.location.href = sURL;
    } else {
        if (control) sURL = '/' + control + (sURL != '' ? ('?' + utf8_to_b64(sURL)) : '');
        else
            sURL = '/Index' + (sURL != '' ? ('?' + utf8_to_b64(sURL)) : '');
        window.location.href = '/' + VSWController + sURL;
    }

}
function exec_filter_remove(t) {
    $('#loading').show();
    if (typeof (VSWControllerLink) != 'undefined') {
        if (t)
            sURL = '/' + VSWControllerLink + '/' + t;
        else
            sURL = '/' + VSWControllerLink;

        window.location.href = sURL;
    } else {
        if (t) sURL = '/' + t;
        else
            sURL = '/Index';
        window.location.href = '/' + VSWController + sURL;
    }
}
function getListCommand_DataTable(id, commands = '') {
    if (commands.toLocaleLowerCase() == '') {
        commands = "colvis|print"
    };
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
    var table = $('#' + id.replace('#', '')).DataTable({
        paging: false,
        info: false,
        dom: 'Bfrtip',
        buttons: [arrayButtons]
    });
    return table;
}
function ConfirmZebraForm(e, action_form, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $.Zebra_Dialog(e, {
        type: "confirmation",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [{
            caption: "Có",
            callback: function () {
                vsw_form_name_submit(action_form, name_form);
            }
        }, {
            caption: "Không",
            callback: function () {
            }
        }]
    })
}
function ConfirmZebraAjax(e, url, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $.Zebra_Dialog(e, {
        type: "confirmation",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [{
            caption: "Có",
            callback: function () {
                $('#loading').show();
                var x = setInterval(function () { vsw_exec_cmd_ajax(url, name_form); clearInterval(x); }, 1000);
            }
        }, {
            caption: "Không",
            callback: function () {
            }
        }]
    })
}
function ConfirmZebraAjaxNotCurrentParams(e, url, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $.Zebra_Dialog(e, {
        type: "confirmation",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [{
            caption: "Có",
            callback: function () {
                $('#loading').show();
                var x = setInterval(function () { vsw_exec_cmd_ajax_not_current_params(url, name_form); clearInterval(x); }, 1000);
            }
        }, {
            caption: "Không",
            callback: function () {
            }
        }]
    })
}
function vsw_exec_cmd_ajax(url, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $('#loading').show();
    var dataToPost = $("#" + name_form).serialize();
    var i = window.location.href.indexOf('?');
    if (i > -1) {
        var queryString = window.location.href.substring(i + 1);
        if (queryString != '') {
            url = url + '?' + queryString;
        }
    }
    $.ajax({
        url: url,
        data: dataToPost,
        type: "POST",
        dataType: "json",
        success: function (data) {
            $('#loading').hide();
            if (data.message.trim() != '') {
                if (data.status == "Success") {
                    alertZebraType('Th&#244;ng b&#225;o', data.message, 'information');
                } else {
                    alertZebra('Th&#244;ng b&#225;o', data.message);
                }
            }

            if (data.js.trim() != '') {
                eval(data.js);
            }
        },
        error: function () {
            $('#loading').hide();
        }
    });
}
function vsw_exec_cmd_ajax_not_current_params(url, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $('#loading').show();
    var dataToPost = $("#" + name_form).serialize();
    $.ajax({
        url: url,
        data: dataToPost,
        type: "POST",
        dataType: "json",
        success: function (data) {
            $('#loading').hide();
            if (data.message.trim() != '') {
                if (data.status == "Success") {
                    alertZebraType('Th&#244;ng b&#225;o', data.message, 'information');
                } else {
                    alertZebra('Th&#244;ng b&#225;o', data.message);
                }
            }

            if (data.js.trim() != '') {
                eval(data.js);
            }
        },
        error: function () {
            $('#loading').hide();
        }
    });
}
function vsw_exec_cmd_ajax_width_params(url, params) {
    $('#loading').show();
    $.ajax({
        url: url,
        data: params,
        type: "POST",
        dataType: "json",
        success: function (data) {
            $('#loading').hide();
            if (data.message.trim() != '') {
                if (data.status == "Success") {
                    alertZebraType('Th&#244;ng b&#225;o', data.message, 'information');
                } else {
                    alertZebra('Th&#244;ng b&#225;o', data.message);
                }
            }

            if (data.js.trim() != '') {
                eval(data.js);
            }
        },
        error: function () {
            $('#loading').hide();
        }
    });
}
function vsw_exec_cmd(action_form, name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    $('#loading').show();
    $("#" + name_form).find("input, textarea, select").removeAttr("disabled");
    if (action_form != '') {
        document.getElementById("_vsw_action").value = action_form;
    }
    eval("document." + name_form + ".submit()");
}
function getNodeValue(t) {
    try {
        return t.item(0).firstChild.nodeValue
    } catch (t) {
        return ""
    }
}
function format_name(p_object) {
    str = p_object.value;
    var pieces = str.split(" ");
    for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    //$('#'+p_object.id).val(pieces.join(" "));
    p_object.value = pieces.join(" ");
}
function setDatePicker(t) {
    $('.' + t).datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true,
        todayBtn: true
    });
}
function format_string_to_money(t) {
    t.value = FormatCurrency(t.value)
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
function lam_tron_so(p_value) {
    v_value = Math.round(p_value);
    return v_value;
}
function lam_tron_so_usd(p_value) {
    v_value = (Math.round(p_value * 100)) / 100;
    if (v_value == Math.round(v_value)) {
        v_value = v_value;
    }
    return v_value;
}
function formatDollar(t) {
    return t.split("").reverse().reduce(function (t, e, n, a) {
        return e + (!n || n % 3 ? "" : ".") + t
    }, "")
}
function checkNumber(t, e) {
    $(document).ready(function () {
        $(t).keypress(function (t) {
            return 8 != t.which && 0 != t.which && (t.which < 48 || t.which > 57) && ($(e).html("Chỉ nhập số!.").show().fadeOut("slow"), !1)
        })
    })
}
function isIE() {
    return "Microsoft Internet Explorer" == navigator.appName
}
function tinh_so_ngay(t, e) {
    if ("" == t || "" == e) return 0;
    date1 = new Date(ddmmyyyy_to_mmddyyyy(t)), date2 = new Date(ddmmyyyy_to_mmddyyyy(e));
    var n = date1.getTime(),
        a = date2.getTime() - n;
    return Math.round(a / 864e5)
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
function AdjustHour(t, e) {
    var n = t.value.length;
    theStr = t.value, 1 == n && (theHour = "0" + theStr.substring(0, 1), theMinute = "00", t.value = theHour + e + theMinute), 2 != n && 3 != n || (theHour = theStr.substring(0, 2), theMinute = "00", t.value = theHour + e + theMinute), 4 == n && (theHour = theStr.substring(0, 2), theMinute = "0" + theStr.substring(3, 4), t.value = theHour + e + theMinute)
}
function FormatCurrency(t) {
    var e, n;
    t = t.toString().replace(/\$|\,/g, ""), isNaN(t) && (t = "0"), e = t == (t = Math.abs(t));
    var a = t.toString().split(".");
    a.length > 1 ? (n = new String(a[1])).length < 2 && (n += "0") : n = "", t = a[0];
    for (var r = 0; r < Math.floor((t.length - (1 + r)) / 3); r++) t = t.substring(0, t.length - (4 * r + 3)) + "," + t.substring(t.length - (4 * r + 3));
    return ret_value = "" == n ? (e ? "" : "-") + t : (e ? "" : "-") + t + "." + n, ret_value
}
function load_requied_dn(t) {
    if (t == "" || t == "KH_CA_NHAN_HO_GIA_DINH" || t == "CBNV") {
        $("#box_title_doanh_nghiep").hide();
        $("#C_MA_DOANH_NGHIEP").attr("data-rule-required", "false");
        $("#C_TEN_DOANH_NGHIEP").attr("data-rule-required", "false");
        $("#C_MST").attr("data-rule-required", "false");
        $("#C_DIA_CHI_DN").attr("data-rule-required", "false");
        $("#C_EMAIL").attr("data-rule-required", "false");
        $("#required_email").attr("style", "display: none;");
        if (t == "CBNV") {
            $("#lbl_customer_code").html('Mã nhân viên:<span class="required">*</span>');
            $("#lbl_customer_name").html('Tên nhân viên:<span class="required">*</span>');
            $("#C_MA_KHACH_HANG").attr("data-rule-required", "true");
            $("#box_noi_ct").attr("style", "");
            $("#C_ADDRESS_TT").attr("data-rule-required", "true");
            $("#C_TEN_KHACH_HANG").attr("data-msg-required", "Nhập tên nhân viên");
        } else {
            $("#lbl_customer_code").html('Mã khách hàng:');
            $("#lbl_customer_name").html('Tên khách hàng:<span class="required">*</span>');
            $("#C_MA_KHACH_HANG").attr("data-rule-required", "false");
            $("#box_noi_ct").attr("style", "display: none;");
            $("#C_ADDRESS_TT").attr("data-rule-required", "false");
            $("#C_TEN_KHACH_HANG").attr("data-msg-required", "Nhập tên khách hàng");
        }
    } else {
        $("#box_title_doanh_nghiep").show();
        $("#C_MA_DOANH_NGHIEP").attr("data-rule-required", "true");
        $("#C_TEN_DOANH_NGHIEP").attr("data-rule-required", "true");
        $("#C_MST").attr("data-rule-required", "true");
        $("#C_DIA_CHI_DN").attr("data-rule-required", "true");
        $("#C_EMAIL").attr("data-rule-required", "true");
        $("#required_email").attr("style", "");
        $("#lbl_customer_code").html('Mã khách hàng:');
        $("#lbl_customer_name").html('Tên khách hàng:<span class="required">*</span>');
        $("#C_MA_KHACH_HANG").attr("data-rule-required", "false");
        $("#box_noi_ct").attr("style", "display: none;");
        $("#C_ADDRESS_TT").attr("data-rule-required", "false");
        $("#C_TEN_KHACH_HANG").attr("data-msg-required", "Nhập tên khách hàng");
    }
}
function ngaysinh_onchange() {
    for (var total_pham_vi = char2number(document.forms[0].TotalRowPhamVi.value), i = 0; i < parseFloat(total_pham_vi); i++) {
        var FK_DM_PHAM_VI_BAO_HIEM = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        gia_tri_bh_onchange(i, FK_DM_PHAM_VI_BAO_HIEM)
    }
}
function check_so_tuoi() {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        e = document.forms[0].C_HIEU_LUC_DEN_NGAY.value,
        n = document.forms[0].C_DATE_OF_BIRTH.value;
    if (isdate(n) && isdate(e)) {
        dt_ngay_sinh = new Date(ddmmyyyy_to_mmddyyyy(n)), yyyyns = dt_ngay_sinh.getFullYear(), mmns = dt_ngay_sinh.getMonth() + 1, ddns = dt_ngay_sinh.getDate();
        var a = new Date(ddmmyyyy_to_mmddyyyy(e)),
            r = a.getDate(),
            o = a.getMonth() + 1,
            _ = a.getFullYear() - yyyyns,
            i = _ - 65;
        if (_ < 18) return alertZebraContent("Khách hàng phải đủ 18 tuổi."), void $("#C_DATE_OF_BIRTH").focus();
        if (i > 0) {
            alertZebraContent("Tuổi khách hàng đã quá " + i + " tuổi so với số tuổi cho phép được cấp đơn bảo hiểm.");
            var l = (r < 10 ? "0" + r.toString() : r.toString()) + "/" + (o < 10 ? "0" + o.toString() : o.toString()) + "/" + (year - i);
            isdate(l) || (l = "01/" + (parseFloat(o) + 1 < 10 ? "0" + (parseFloat(o) + 1).toString() : (parseFloat(o) + 1).toString()) + "/" + (year - i)), date_compare(t, l) > 0 && (document.forms[0].C_HIEU_LUC_DEN_NGAY.value = l), $("#C_DATE_OF_BIRTH").focus()
        }
    }
}
function gttt_onchange(value) {
    if (value == 'HO-CHIEU') {
        $("#box_noi_cap_cmt").prop("style", "display:none;");
        $("#box_noi_cap_hc").prop("style", "");
    } else {
        $("#box_noi_cap_cmt").prop("style", "");
        $("#box_noi_cap_hc").prop("style", "display:none;");
    }
}
function so_tien_vay_onchange(p_object) {
    var v_value = parseFloat(char2number(p_object.value)),
        total_pham_vi = parseFloat(char2number(document.forms[0].TotalRowPhamVi.value)),
        policy_type = document.forms[0].C_POLICY_TYPE.value;

    for (var i = 0; i < parseFloat(total_pham_vi); i++) {
        var so_tien_max = parseFloat(char2number(eval("document.forms[0].C_MAX_MONEY" + i + ".value")));
        if (so_tien_max <= 0) so_tien_max = v_value;
        eval("document.forms[0].C_GIA_TRI_BH" + i + ".value = '" + (v_value > so_tien_max ? so_tien_max : v_value) + "'");
        if (document.forms[0].C_GIA_TRI_BH) {
            document.forms[0].C_GIA_TRI_BH.value = (v_value > so_tien_max ? so_tien_max : v_value);
            format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH"));
        }
        format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
        var FK_DM_PHAM_VI_BAO_HIEM = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        gia_tri_bh_onchange(i, FK_DM_PHAM_VI_BAO_HIEM);
    }
}
function load_thoi_han_onchange() {
    var t = document.forms[0].C_THOI_HAN.value,
        e = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (isdate(e)) {
        dt_date = new Date(ddmmyyyy_to_mmddyyyy(e)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        for (var n = parseFloat(month) + parseFloat(t); n > 12;) year = parseFloat(year) + 1, n -= 12;
        var a = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year;
        isdate(a) || ((n = parseFloat(n) + 1) > 12 && (n -= 12, year = parseFloat(year) + 1), a = "01/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year), document.forms[0].C_HIEU_LUC_DEN_NGAY.value = a
    }
    check_so_tuoi(), load_pham_vi_bao_hiem(), load_phi_bh()
}
function load_phi_bh() {
    for (var tong_phi = 0, total_pham_vi = char2number(document.forms[0].TotalRowPhamVi.value), i = 0; i < parseFloat(total_pham_vi); i++) {
        var phi_bh = char2number(eval("document.forms[0].C_PHI_BH" + i + ".value"));
        tong_phi += parseFloat(phi_bh)
    }
    var phi_bh_thoi_han = tong_phi;
    document.forms[0].C_PHI_BH_THOI_HAN.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc) ? (v_so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc), v_so_thang > 12 ? load_phi_bh_1_nam() : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM))) : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM)), kieu_thanh_toan_onchange()
}
function kieu_thanh_toan_onchange() {
    var tong_tien_dkbs = 0;
    if (document.forms[0].C_TONG_TIEN_DKBS) {
        tong_tien_dkbs = parseFloat(char2number(document.forms[0].C_TONG_TIEN_DKBS.value));
    }
    var kieutt = parseFloat(document.forms[0].C_KIEU_TT.value),
        v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    if (!isdate(v_ngay_bat_dau)) return document.forms[0].C_KIEU_TT.value = "1", $("#C_KIEU_TT").select2(), alertZebraContent("Nhập ngày bắt đầu hiệu lực."), $("#box_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide(), void $("#C_HIEU_LUC_TU_NGAY").focus();
    if (!isdate(v_ngay_ket_thuc)) return document.forms[0].C_KIEU_TT.value = "1", $("#C_KIEU_TT").select2(), alertZebraContent("Nhập ngày kết thúc hiệu lực."), $("#box_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide(), void $("#C_HIEU_LUC_DEN_NGAY").focus();
    var so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc),
        count = char2number(document.forms[0].TotalRowLTT.value),
        list_ltt_delete = document.forms[0].ListLTTDelete.value,
        lantt = document.forms[0].LanTT.value,
        so_tien_thoi_han = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value)),
        so_tien_1_nam = parseFloat(char2number(document.forms[0].C_PHI_BH_NAM.value));
    if (kieutt < 2) {
        for (var k = 0, i = 0; i < count; i++) -1 == list_have_element(list_ltt_delete, i, ",") && (0 == k ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + (so_tien_thoi_han + tong_tien_dkbs) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), $("#C_LAN_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_PHI_BH_LTT" + i).attr("disabled", "disabled"), $("#C_PHI_BH_LTT" + i).attr("readonly", "readonly")) : (list_ltt_delete += ("" == list_ltt_delete ? "" : ",") + i.toString(), $("#cbltt" + i).val(""), $("#cbltt" + i).prop("checked", !1), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("data-rule-required", "false"), $("#tr_ltt_" + i).hide()), k++);
        lantt = 1, $("#box_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide()
    } else {
        $("#box_dinh_ky_dong_phi").show(), $("#toolbar-list_ltt").show();
        var dong_phi_dinh_ky = getValueFromRadioButton("C_DONG_PHI_DINH_KY");
        "" == dong_phi_dinh_ky && (dong_phi_dinh_ky = "HANG-NAM", $("#C_DONG_PHI_DINH_KY0").prop("checked", !0));
        for (var k = 0, ngay_thanh_toan = "", i = 0; i < count; i++) -1 == list_have_element(list_ltt_delete, i, ",") && (0 == k ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + ("HANG-NAM" == dong_phi_dinh_ky ? (so_tien_1_nam + tong_tien_dkbs) : so_tien_thoi_han) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), ngay_thanh_toan = eval("document.forms[0].C_NGAY_THANH_TOAN_LTT" + i + ".value"), "HANG-NAM" == dong_phi_dinh_ky ? ($("#C_LAN_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("readonly", "readonly")) : ($("#C_LAN_THANH_TOAN_LTT" + i).removeAttr("disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).removeAttr("readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).removeAttr("disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).removeAttr("readonly"), $("#C_PHI_BH_LTT" + i).removeAttr("disabled"), $("#C_PHI_BH_LTT" + i).removeAttr("readonly"))) : (list_ltt_delete += ("" == list_ltt_delete ? "" : ",") + i.toString(), $("#cbltt" + i).val(""), $("#cbltt" + i).prop("checked", !1), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("data-rule-required", "false"), $("#tr_ltt_" + i).hide()), k++);
        if (lantt = 1, "HANG-NAM" == dong_phi_dinh_ky) {
            var so_nam = parseFloat(so_thang) / 12,
                so_thang_con_lai = so_thang - 12,
                so_tien_con_lai = so_tien_thoi_han - so_tien_1_nam,
                so_tien_1_ngay = 0 == so_thang_con_lai ? so_tien_con_lai : so_tien_con_lai / so_thang_con_lai,
                so_tien_ky_thanh_toan = 0,
                total_row_add = so_nam - 1;
            total_row_add != parseInt(total_row_add) && (total_row_add = parseInt(total_row_add) + 1);
            for (var i = 0; i < total_row_add; i++) {
                var so_phi_thanh_toan = 0;
                i == total_row_add - 1 ? so_phi_thanh_toan = parseInt(so_tien_con_lai) - parseInt(so_tien_ky_thanh_toan) : (so_thang_con_lai > 12 ? (so_phi_thanh_toan = 12 * so_tien_1_ngay, so_thang_con_lai -= 12) : so_phi_thanh_toan = so_thang_con_lai * so_tien_1_ngay, so_phi_thanh_toan = Math.round(so_phi_thanh_toan)), so_tien_ky_thanh_toan += so_phi_thanh_toan;
                var so_ngay_cong_them = 365 * (i + 1) + parseFloat(Sys_ThoiGianChamPhi),
                    date = add_day_date(v_ngay_bat_dau, so_ngay_cong_them);
                date_compare(date, v_ngay_ket_thuc) < 0 && (date = v_ngay_ket_thuc);
                var s = ' <tr id="tr_ltt_' + count + '">';
                s += '<td align="center">';
                s += '<div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
                s += '<input type = "checkbox" id = "cbltt' + count + '" name = "cidltt" value = "' + count + '">';
                s += '<div class="state p-success" style="opacity: 1;">';
                s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
                s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
                s += '</svg><label></label></div></div> ';
                s += '<input type = "hidden" name = "PK_LICH_THANH_TOAN_BH_LTT' + count + '" value = "">';
                s += '<input type="hidden" name="FK_BANG_KE' + count + '" value="">';
                s += '<input type="hidden" name="C_NGAY_THU_PHI' + count + '" value=""></td>';
                s += '<td><input type="text" class="form-control text-center" autocomplete="off" name="C_LAN_THANH_TOAN_LTT' + count + '" disabled="disabled" readonly="readonly" value="' + (parseFloat(lantt) + 1) + '" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
                s += '<td align="center"><div class="input-group h-100">';
                s += '<input type="text" class="form-control mydatepicker" autocomplete="off" disabled="disabled" readonly="readonly" onchange="check_date_ltt();" onkeyup="FormatDate(this,event)" id="C_NGAY_THANH_TOAN_LTT' + count + '" name="C_NGAY_THANH_TOAN_LTT' + count + '" value="' + date + '" data-rule-required="true" data-msg-required="Nhập ngày thanh toán." maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
                s += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
                s += '<td align="center"><input type="text" class="form-control text-right" autocomplete="off" onkeyup="format_money(this,event)" name="C_PHI_BH_LTT' + count + '" value="' + so_phi_thanh_toan + '" onblur="load_so_tien_con_lai(' + count + ')" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
                s += '<td align="center">';
                s += '<div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
                s += '<input type = "checkbox" id="C_TRANG_THAI_THU_PHI' + count + '" name="C_TRANG_THAI_THU_PHI' + count + '" type="checkbox" value="1">';
                s += '<div class="state p-success" style="opacity: 1;">';
                s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
                s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
                s += '</svg><label>Đã thu phí</label></div></div></td ></tr>';
                $("#list_ltt").append(s), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + count)), count++ , lantt++
            }
            $("#toolbar-list_ltt").hide()
        }
    }
    document.forms[0].TotalRowLTT.value = count, document.forms[0].ListLTTDelete.value = list_ltt_delete, document.forms[0].LanTT.value = lantt, setDatePicker("mydatepicker")
}
function check_date_ltt() {
    for (var count = char2number(document.forms[0].TotalRowLTT.value), list_ltt_delete = document.forms[0].ListLTTDelete.value, v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value, v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value, ngay_gan_nhat = "", k = 0, i = 0; i < count; i++)
        if (-1 == list_have_element(list_ltt_delete, i, ",")) {
            var ngay_thanh_toan = eval("document.forms[0].C_NGAY_THANH_TOAN_LTT" + i + ".value");
            if ("" != ngay_gan_nhat && "" != ngay_thanh_toan) {
                if (date_compare(ngay_gan_nhat, ngay_thanh_toan) < 1) return alertZebraContent("Ngày thanh toán của các kỳ phải lần lượt."), $("#C_NGAY_THANH_TOAN_LTT" + i).val(""), $("#C_NGAY_THANH_TOAN_LTT" + i).focus(), !1;
                if (isdate(v_ngay_ket_thuc) && isdate(ngay_thanh_toan) && date_compare(v_ngay_ket_thuc, ngay_thanh_toan) > 1) return alertZebraContent("Ngày thanh toán phải nhỏ hơn ngày kết thúc hiệu lực bảo hiểm."), $("#C_NGAY_THANH_TOAN_LTT" + i).val(""), $("#C_NGAY_THANH_TOAN_LTT" + i).focus(), !1
            }
            "" != ngay_thanh_toan && (ngay_gan_nhat = ngay_thanh_toan)
        }
}
function load_so_tien_con_lai(index) {
    for (var tong_phi = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value)), count = parseFloat(char2number(document.forms[0].TotalRowLTT.value)), list_ltt_delete = document.forms[0].ListLTTDelete.value, so_tien = 0, i = 0; i < count; i++)
        if (-1 == list_have_element(list_ltt_delete, i, ",")) {
            var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
            so_tien += parseFloat(so_tien_theo_dong)
        }
    var flag = !1,
        k = 0,
        so_tien_cl = 0;
    if (so_tien <= tong_phi) {
        for (var i = 0; i < count; i++)
            if (-1 == list_have_element(list_ltt_delete, i, ",")) {
                var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
                if (0 == so_tien_theo_dong && i > index) {
                    var so_tien_con_lai = parseFloat(tong_phi) - parseFloat(so_tien) + parseFloat(so_tien_theo_dong);
                    eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + so_tien_con_lai + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), flag = !1;
                    break
                }
                flag = !0, k = i, so_tien_cl = parseFloat(tong_phi) - parseFloat(so_tien) + parseFloat(so_tien_theo_dong)
            }
        flag && k != index && (eval("document.forms[0].C_PHI_BH_LTT" + k + ".value = '" + so_tien_cl + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + k)))
    } else
        for (var so_tien_chenh = parseFloat(so_tien) - parseFloat(tong_phi), i = 0; i < count; i++)
            if (-1 == list_have_element(list_ltt_delete, i, ",")) {
                var so_tien_theo_dong = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value")));
                if (i > index && (so_tien_theo_dong > so_tien_chenh ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + (so_tien_theo_dong - so_tien_chenh) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), so_tien_chenh = 0) : (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '0'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), so_tien_chenh -= so_tien_theo_dong), so_tien_chenh <= 0)) break
            }
}
function ngay_bat_dau_onchange() {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        e = document.forms[0].C_HIEU_LUC_DEN_NGAY.value,
        n = document.forms[0].C_THOI_HAN.value;
    if (isdate(t) && isdate(e) && (v_so_thang = tinh_so_thang(t, e), v_so_thang > n)) {
        alertZebraContent("Thời hạn bảo hiểm không được lớn hơn thời hạn vay."), dt_date = new Date(ddmmyyyy_to_mmddyyyy(t)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        for (var a = parseFloat(month) + parseFloat(n); a > 12;) year = parseFloat(year) + 1, a -= 12;
        var r = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year;
        isdate(r) || ((a = parseFloat(a) + 1) > 12 && (a -= 12, year = parseFloat(year) + 1), r = "01/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year), document.forms[0].C_HIEU_LUC_DEN_NGAY.value = r, $("#C_HIEU_LUC_DEN_NGAY").focus()
    }
    load_pham_vi_bao_hiem(), load_phi_bh()
}
function ngay_ket_thuc_onchange() {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        e = document.forms[0].C_HIEU_LUC_DEN_NGAY.value,
        n = document.forms[0].C_THOI_HAN.value;
    if (isdate(t) && isdate(e) && (v_so_thang = tinh_so_thang(t, e), v_so_thang > n)) {
        alertZebraContent("Thời hạn bảo hiểm không được lớn hơn thời hạn vay."), dt_date = new Date(ddmmyyyy_to_mmddyyyy(t)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        for (var a = parseFloat(month) + parseFloat(n); a > 12;) year = parseFloat(year) + 1, a -= 12;
        var r = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year;
        isdate(r) || ((a = parseFloat(a) + 1) > 12 && (a -= 12, year = parseFloat(year) + 1), r = "01/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year), document.forms[0].C_HIEU_LUC_DEN_NGAY.value = r, $("#C_HIEU_LUC_DEN_NGAY").focus()
    }
    check_so_tuoi(), load_pham_vi_bao_hiem(), load_phi_bh()
}
function change_khoi_khach_hang(value) {
    if (value == 'KH-CA-NHAN') {
        $('#phamvibaohiem').hide();
        $('#tbl_trocap').hide();
        $('#box_phamvi_cn').show();
        $('#nth2').hide();
        $("#C_GIA_TRI_BH").attr("data-rule-required", "true");
        $("#C_NGUOI_HUONG_2").attr("data-rule-required", "false");
        $("#C_DIA_CHI_NGUOI_HUONG_2").attr("data-rule-required", "false");
        $("#C_QUAN_HE_NGUOI_HUONG_2").attr("data-rule-required", "false");
        $("#lbl_nth1").html('Người thụ hưởng:<span class="required">*</span>');
        $("#C_NGUOI_HUONG_1").attr("data-msg-required", "Nhập người thụ hưởng.");
        $("#C_DIA_CHI_NGUOI_HUONG_1").attr("data-msg-required", "Nhập địa chỉ người thụ hưởng.");
    } else {
        $('#phamvibaohiem').show();
        $('#tbl_trocap').show();
        $('#box_phamvi_cn').hide();
        $('#nth2').show();
        $("#C_GIA_TRI_BH").attr("data-rule-required", "false");

        if ($("#C_MA_NGAN_HANG").val() !== 'BANK_VN0028') {
            $("#C_NGUOI_HUONG_2").attr("data-rule-required", "true");
            $("#C_DIA_CHI_NGUOI_HUONG_2").attr("data-rule-required", "true");
            $("#C_QUAN_HE_NGUOI_HUONG_2").attr("data-rule-required", "true");
        };
        $("#lbl_nth1").html('Người thụ hưởng1:<span class="required">*</span>');
        $("#C_NGUOI_HUONG_1").attr("data-msg-required", "Nhập người thụ hưởng thứ nhất.");
        $("#C_DIA_CHI_NGUOI_HUONG_1").attr("data-msg-required", "Nhập địa chỉ người thụ hưởng thứ nhất.");
    }
}
function file_upload_onclick() {
    if (document.forms[0].C_TYPE_FILE) {
        document.forms[0].C_TYPE_FILE.value = '';
    }
    $("#file_upload").click()
}
function file_upload_by_type_onclick(p_type_file) {
    if (document.forms[0].C_TYPE_FILE) {
        document.forms[0].C_TYPE_FILE.value = p_type_file;
    }
    $("#file_upload").click()
}
function images_upload_by_type_onclick(p_type_file, p_type_file_image, p_link_custom_image) {
    if (document.forms[0].C_TYPE_FILE) {
        document.forms[0].C_TYPE_FILE.value = p_type_file;
    }
    if (document.forms[0].C_FILE_ANH_TYPE_IMAGE) {
        document.forms[0].C_FILE_ANH_TYPE_IMAGE.value = p_type_file_image;
    }
    if (document.forms[0].c_link_custom_image) {
        document.forms[0].c_link_custom_image.value = p_link_custom_image;
    }
    $("#images_upload").click();
}
function LoadTaiLieu(t) {
    load_tai_lieu_ajax()
}
function delete_file(t) {
    var e = document.forms[0].ListTaiLieuDelete.value;
    e = list_append(e, t, ","), document.forms[0].ListTaiLieuDelete.value = e, $("#tailieu" + t).hide()
}
function getValueFromRadioButton(t) {
    for (var e = document.getElementsByName(t), n = 0; n < e.length; n++) {
        var a = e[n];
        if (a.checked) return a.value
    }
    return ""
}
function btn_add_tyle_onclick() {
    var t = document.forms[0].TotalRowTyLe.value,
        s = ' <tr id="tr_tyle_' + t + '">';
    s += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    s += '<input type = "checkbox" id="cb' + t + '" name="cid" value="' + t + '">';
    s += '<div class="state p-success" style="opacity: 1;">';
    s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    s += '</svg><label></label></div></div></td>';
    s += '<td><select style="width: 100%;" id="C_NGAN_HANG' + t + '" name="C_NGAN_HANG' + t + '" class="form-control form-control-sm select2 w100pi"><option value="">Chọn ngân hàng</option>' + list_ngan_hang + "</select></td> ";
    s += '<td><select style="width: 100%;" id="C_KHOI_KHACH_HANG' + t + '" name="C_KHOI_KHACH_HANG' + t + '" class="form-control form-control-sm select2 w100pi">' + list_khoi_kh + "</select></td> ";
    s += '<td><select style="width: 100%;" id="C_GOI_BH' + t + '" name="C_GOI_BH' + t + '" class="form-control form-control-sm select2 w100pi">' + list_goi_bh + "</select></td> ";
    s += '<td><select style="width: 100%;" id="C_NHOM_KH' + t + '" name="C_NHOM_KH' + t + '" class="form-control form-control-sm select2 w100pi">' + list_nhom_kh + "</select></td> ";
    s += '<td><select style="width: 100%;" id="C_DOI_TUONG' + t + '" name="C_DOI_TUONG' + t + '" class="form-control form-control-sm select2 w100pi">' + list_doi_tuong + "</select></td> ";
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_TU' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_DEN' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_TUOI_TU' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_TUOI_DEN' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeypress="return InputNumberOnly(event);" name="C_TY_LE' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_PHI' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += "</tr>";
    $("#list_tyle").append(s), $("#C_GOI_BH" + t).select2(), $("#C_NGAN_HANG" + t).select2(), $("#C_KHOI_KHACH_HANG" + t).select2(), $("#C_NHOM_KH" + t).select2(), document.forms[0].TotalRowTyLe.value = parseFloat(t) + 1
}
function btn_del_tyle_onclick() {
    for (var t = document.forms[0].ListTyleDelete.value, e = document.getElementsByName("cid"), n = 0; n < e.length; n++) e[n].checked && "" != e[n].value && ($("#tr_tyle_" + n).hide(), t += ("" == t ? "" : ",") + n.toString(), $("#cb" + n).val(""), $("#cb" + n).prop("checked", !1));
    document.forms[0].ListTyleDelete.value = t
}
function btn_add_ltt_onclick() {
    for (var count = char2number(document.forms[0].TotalRowLTT.value), lantt = document.forms[0].LanTT.value, tong_phi = char2number(document.forms[0].C_PHI_BH_THOI_HAN.value), list_ltt_delete = document.forms[0].ListLTTDelete.value, so_tien = 0, i = 0; i < count; i++)
        if (-1 == list_have_element(list_ltt_delete, i, ",")) {
            var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
            so_tien += parseFloat(so_tien_theo_dong)
        }
    var so_tien_con_lai = parseFloat(tong_phi) - parseFloat(so_tien);
    var s = ' <tr id="tr_ltt_' + count + '">';
    s += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    s += '<input type = "checkbox" id="cbltt' + count + '" name="cidltt" value="' + count + '">';
    s += '<div class="state p-success" style="opacity: 1;">';
    s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    s += '</svg><label></label></div></div>';
    s += '<input type="hidden" name="PK_LICH_THANH_TOAN_BH_LTT' + count + '" value=""><input type="hidden" name="FK_BANG_KE' + count + '" value="">';
    s += '<input type="hidden" name="C_NGAY_THU_PHI' + count + '" value="">';
    s += '<input type="hidden" name="C_LAN_THANH_TOAN_LTT' + count + '" value="' + (parseFloat(lantt) + 1) + '"></td>';
    s += '<td align="center"><div class="input-group h-100">';
    s += '<input type="text" class="form-control mydatepicker" autocomplete="off" onchange="check_date_ltt();" onkeyup="FormatDate(this,event)" id="C_NGAY_THANH_TOAN_LTT' + count + '" name="C_NGAY_THANH_TOAN_LTT' + count + '" value="" data-rule-required="true" data-msg-required="Nhập ngày thanh toán." maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    s += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    s += '<td align="center"><input type="text" class="form-control text-right" onkeyup="format_money(this,event)" name="C_PHI_BH_LTT' + count + '" value="' + so_tien_con_lai + '" onblur="load_so_tien_con_lai(' + count + ')" autocomplete="off" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td align="center">';
    s += '<div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    s += '<input type = "checkbox" id="C_TRANG_THAI_THU_PHI' + count + '" name="C_TRANG_THAI_THU_PHI' + count + '" type="checkbox" value="1">';
    s += '<div class="state p-success" style="opacity: 1;">';
    s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    s += '</svg><label>Đã thu phí</label></div></div></td></tr>';
    $("#list_ltt").append(s), setDatePicker("mydatepicker"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + count)), document.forms[0].TotalRowLTT.value = parseFloat(count) + 1, document.forms[0].LanTT.value = parseFloat(lantt) + 1
}
function btn_del_ltt_onclick() {
    for (var list_ltt_delete = document.forms[0].ListLTTDelete.value, list_id_delete = document.getElementsByName("cidltt"), lantt = document.forms[0].LanTT.value, so_tien = 0, i = 0; i < list_id_delete.length; i++)
        if (list_id_delete[i].checked && "" != list_id_delete[i].value) {
            list_ltt_delete += ("" == list_ltt_delete ? "" : ",") + i.toString(), $("#cbltt" + i).val(""), $("#cbltt" + i).prop("checked", !1), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("data-rule-required", "false"), $("#tr_ltt_" + i).hide();
            var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
            so_tien += parseFloat(so_tien_theo_dong), lantt -= 1
        }
    document.forms[0].ListLTTDelete.value = list_ltt_delete, document.forms[0].LanTT.value = lantt;
    for (var count = char2number(document.forms[0].TotalRowLTT.value), list_ltt_delete = document.forms[0].ListLTTDelete.value, k = 0, so_tien_td = 0, i = 0; i < count; i++) -1 == list_have_element(list_ltt_delete, i, ",") && (so_tien_td = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value")), k = i);
    var so_tien_tong = parseFloat(so_tien) + parseFloat(so_tien_td);
    eval("document.forms[0].C_PHI_BH_LTT" + k + ".value = '" + so_tien_tong + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + k))
}
function btn_add_tyle_ngan_hang_onclick() {
    var t = document.forms[0].TotalRowTyLe.value,
        e = ' <tr id="tr_tyle_' + t + '">';
    e += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    e += '<input type = "checkbox" id="cb' + t + '" name="cid" value="' + t + '">';
    e += '<div class="state p-success" style="opacity: 1;">';
    e += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    e += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    e += '</svg><label></label></div></div></td>';
    e += '<td><select style="width:100%;" id="C_LOAI_HINH_BAO_HIEM' + t + '" name="C_LOAI_HINH_BAO_HIEM' + t + '" class="form-control form-control-sm select2 w100pi">' + list_loaihinh_bh + "</select></td> ";
    e += '<td><input type="text" autocomplete="off" class="form-control" name="C_MA_PHAM_VI' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><select style="width:100%;" id="C_NHOM_KH' + t + '" name="C_NHOM_KH' + t + '" class="form-control form-control-sm select2 w100pi">' + list_nhom_kh + "</select></td> ";
    e += '<td><div class="input-group h-100"><input type="text" class="form-control mydatepicker" autocomplete="off" name = "C_TU_NGAY' + t + '" value = ""  onkeyup="FormatDate(this,event)" maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    e += '<td><div class="input-group h-100"><input type="text" class="form-control mydatepicker" autocomplete="off" name="C_DEN_NGAY' + t + '" value=""  onkeyup="FormatDate(this,event)" maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_TU' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_DEN' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeypress="return InputNumberOnly(event);" name="C_TY_LE' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeypress="return InputNumberOnly(event);" name="C_HOA_HONG' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeypress="return InputNumberOnly(event);" name="C_DAI_LY' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += "</tr>";
    $("#list_tyle").append(e), $("#C_LOAI_HINH_BAO_HIEM" + t).select2(), $("#C_NHOM_KH" + t).select2(), setDatePicker("mydatepicker"), document.forms[0].TotalRowTyLe.value = parseFloat(t) + 1
}
function btn_del_tyle_ngan_hang_onclick() {
    for (var t = document.forms[0].ListTyleDelete.value, e = document.getElementsByName("cid"), n = 0; n < e.length; n++) e[n].checked && "" != e[n].value && ($("#tr_tyle_" + n).hide(), t += ("" == t ? "" : ",") + n.toString(), $("#cb" + n).val(""), $("#cb" + n).prop("checked", !1));
    document.forms[0].ListTyleDelete.value = t
}
function btn_add_tyle_can_bo_onclick() {
    var t = document.forms[0].TotalRowTyLe.value,
        e = ' <tr id="tr_tyle_' + t + '">';
    e += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    e += '<input type = "checkbox" id="cb' + t + '" name="cid" value="' + t + '">';
    e += '<div class="state p-success" style="opacity: 1;">';
    e += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    e += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    e += '</svg><label></label></div></div></td>';
    e += '<td><select style="width:100%;" id="C_LOAI_HINH_BAO_HIEM' + t + '" name="C_LOAI_HINH_BAO_HIEM' + t + '" class="form-control form-control-sm select2 w100pi">' + list_loaihinh_bh + "</select></td> ";
    e += '<td><input type="text" autocomplete="off" class="form-control" name="C_MA_PHAM_VI' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><select style="width:100%;" id="C_NHOM_KH' + t + '" name="C_NHOM_KH' + t + '" class="form-control form-control-sm select2 w100pi">' + list_nhom_kh + "</select></td> ";
    e += '<td><div class="input-group h-100"><input type="text" class="form-control mydatepicker" autocomplete="off" name = "C_TU_NGAY' + t + '" value = ""  onkeyup="FormatDate(this,event)" maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    e += '<td><div class="input-group h-100"><input type="text" class="form-control mydatepicker" autocomplete="off" name="C_DEN_NGAY' + t + '" value=""  onkeyup="FormatDate(this,event)" maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_TU' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" name="C_SO_TIEN_DEN' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeypress="return InputNumberOnly(event);" name="C_TY_LE' + t + '" value="" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    e += "</tr>";
    $("#list_tyle").append(e), $("#C_LOAI_HINH_BAO_HIEM" + t).select2(), $("#C_NHOM_KH" + t).select2(), setDatePicker("mydatepicker"), document.forms[0].TotalRowTyLe.value = parseFloat(t) + 1
}
function btn_del_tyle_can_bo_onclick() {
    for (var t = document.forms[0].ListTyleDelete.value, e = document.getElementsByName("cid"), n = 0; n < e.length; n++) e[n].checked && "" != e[n].value && ($("#tr_tyle_" + n).hide(), t += ("" == t ? "" : ",") + n.toString(), $("#cb" + n).val(""), $("#cb" + n).prop("checked", !1));
    document.forms[0].ListTyleDelete.value = t
}
function load_so_tien_con_lai(index) {
    for (var tong_phi = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value)), count = parseFloat(char2number(document.forms[0].TotalRowLTT.value)), list_ltt_delete = document.forms[0].ListLTTDelete.value, so_tien = 0, i = 0; i < count; i++)
        if (-1 == list_have_element(list_ltt_delete, i, ",")) {
            var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
            so_tien += parseFloat(so_tien_theo_dong)
        }
    var flag = !1,
        k = 0,
        so_tien_cl = 0;
    if (so_tien <= tong_phi) {
        for (var i = 0; i < count; i++)
            if (-1 == list_have_element(list_ltt_delete, i, ",")) {
                var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
                if (0 == so_tien_theo_dong && i > index) {
                    var so_tien_con_lai = parseFloat(tong_phi) - parseFloat(so_tien) + parseFloat(so_tien_theo_dong);
                    eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + so_tien_con_lai + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), flag = !1;
                    break
                }
                flag = !0, k = i, so_tien_cl = parseFloat(tong_phi) - parseFloat(so_tien) + parseFloat(so_tien_theo_dong)
            }
        flag && k != index && (eval("document.forms[0].C_PHI_BH_LTT" + k + ".value = '" + so_tien_cl + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + k)))
    } else
        for (var so_tien_chenh = parseFloat(so_tien) - parseFloat(tong_phi), i = 0; i < count; i++)
            if (-1 == list_have_element(list_ltt_delete, i, ",")) {
                var so_tien_theo_dong = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value")));
                if (i > index && (so_tien_theo_dong > so_tien_chenh ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + (so_tien_theo_dong - so_tien_chenh) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), so_tien_chenh = 0) : (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '0'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), so_tien_chenh -= so_tien_theo_dong), so_tien_chenh <= 0)) break
            }
}
function load_hieu_luc_thoi_han_vay() {
    var t = document.forms[0].C_THOI_HAN.value;
    if (document.forms[0].C_THOI_HAN_VAY_TU_NGAY) {
        var e = document.forms[0].C_THOI_HAN_VAY_TU_NGAY.value;
        if (isdate(e)) {
            dt_date = new Date(ddmmyyyy_to_mmddyyyy(e)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
            for (var n = parseFloat(month) + parseFloat(t); n > 12;) year = parseFloat(year) + 1, n -= 12;
            var a = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year;
            isdate(a) || ((n = parseFloat(n) + 1) > 12 && (n -= 12, year = parseFloat(year) + 1), a = "01/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year), document.forms[0].C_THOI_HAN_VAY_DEN_NGAY.value = a
        }
    }
}
function change_ten_chu_xe() {
    if (document.forms[0].chu_xe) {
        var ten_chu_xe = document.forms[0].chu_xe.value;
        if (ten_chu_xe == '') {
            var ten_kh = document.forms[0].C_TEN_KHACH_HANG.value;
            document.forms[0].chu_xe.value = ten_kh;
        }
    }
}
function change_cmnd_chu_xe() {
    if (document.forms[0].cmnd_chu_xe) {
        var cmnd_chu_xe = document.forms[0].cmnd_chu_xe.value;
        if (cmnd_chu_xe == '') {
            var cmnd = document.forms[0].C_CMT.value;
            document.forms[0].cmnd_chu_xe.value = cmnd;
        }
    }
}
function change_dia_chi_chu_xe() {
    if (document.forms[0].dia_chi_chu_xe) {
        var dia_chi_chu_xe = document.forms[0].dia_chi_chu_xe.value;
        if (dia_chi_chu_xe == '') {
            var dia_chi = document.forms[0].C_ADDRESS.value;
            document.forms[0].dia_chi_chu_xe.value = dia_chi;
            if (document.forms[0].c_dia_chi_nhan_hoa_don) {
                document.forms[0].c_dia_chi_nhan_hoa_don.value = dia_chi;
            }
        }
    }
}
function load_hieu_luc_bh_onchange() {
    var t = document.forms[0].C_THOI_HAN.value,
        e = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (isdate(e)) {
        dt_date = new Date(ddmmyyyy_to_mmddyyyy(e)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        for (var n = parseFloat(month) + parseFloat(t); n > 12;) year = parseFloat(year) + 1, n -= 12;
        var a = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year;
        if (!isdate(a)) {
            n = parseFloat(n) + 1;
            if (n > 12) {
                n = n - 12;
                year = parseFloat(year) + 1;
            }
            a = "01/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year;
        }
        document.forms[0].C_HIEU_LUC_DEN_NGAY.value = a;
    }
}
function gia_tri_thu_te_onchange(p_object) {
    var v_value = char2number(p_object.value);
    if (document.forms[0].C_GIA_TRI_BH0) {
        document.forms[0].C_GIA_TRI_BH0.value = v_value;
        format_string_to_money(document.forms[0].C_GIA_TRI_BH0);
        load_phi_bh_xcg();
    }
}
function thoi_han_bat_dau_onchange() {
    var t = document.forms[0].C_THOI_HAN_VAY_TU_NGAY.value,
        e = document.forms[0].C_THOI_HAN_VAY_DEN_NGAY.value,
        n = document.forms[0].C_THOI_HAN.value;
    if (isdate(t) && n > 0) {
        dt_date = new Date(ddmmyyyy_to_mmddyyyy(t)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        for (var a = parseFloat(month) + parseFloat(n); a > 12;) year = parseFloat(year) + 1, a -= 12;
        var r = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year;
        isdate(r) || ((a = parseFloat(a) + 1) > 12 && (a -= 12, year = parseFloat(year) + 1), r = "01/" + (a < 10 ? "0" + a.toString() : a.toString()) + "/" + year), document.forms[0].C_THOI_HAN_VAY_DEN_NGAY.value = r, $("#C_THOI_HAN_VAY_DEN_NGAY").focus()
    }
}
function change_ten_nguoi_nhan_hoa_don() {
    if (document.forms[0].C_NGUOI_NHAN_HOA_DON) {
        var v_NGUOI_NHAN_HOA_DON = document.forms[0].C_NGUOI_NHAN_HOA_DON.value;
        if (v_NGUOI_NHAN_HOA_DON == '') {
            var name = document.forms[0].C_TEN_KHACH_HANG.value;
            document.forms[0].C_NGUOI_NHAN_HOA_DON.value = name;
        }
    }
}
function change_dien_thoai_nguoi_nhan_hoa_don() {
    if (document.forms[0].C_DIEN_THOAI_NHAN_HOA_DON) {
        var V_DIEN_THOAI_NHAN_HOA_DON = document.forms[0].C_DIEN_THOAI_NHAN_HOA_DON.value;
        if (V_DIEN_THOAI_NHAN_HOA_DON == '') {
            var phone = document.forms[0].C_PHONE.value;
            document.forms[0].C_DIEN_THOAI_NHAN_HOA_DON.value = phone;
        }
    }
}
function change_dia_chi_nguoi_nhan_hoa_don() {
    if (document.forms[0].c_dia_chi_nhan_hoa_don) {
        var c_dia_chi_nhan_hoa_don = document.forms[0].c_dia_chi_nhan_hoa_don.value;
        if (c_dia_chi_nhan_hoa_don == '') {
            var C_ADDRESS = document.forms[0].C_ADDRESS.value;
            document.forms[0].c_dia_chi_nhan_hoa_don.value = C_ADDRESS;
        }
    }
}
function change_image_360(index) {
    $("#myCar").vc3dEye({
        imagePath: "/Content/images/cars/",
        totalImages: 51,
        imageExtension: "png",
        currentIndex: index,
        currentImage: index
    });
}
function close_popup(p_control) {
    $('[data-popup="' + p_control + '"]').fadeOut(350);
}
function LoadImages(t) {
    load_images_ajax();
}
function delete_images(t) {
    var e = document.forms[0].ListImagesDelete.value;
    e = list_append(e, t, ","), document.forms[0].ListImagesDelete.value = e, $("#images" + t).hide()
}
function lightgallery(p_box_id, p_first_id) {
    $('#' + p_box_id).lightGallery();
    $('#' + p_first_id).trigger('click');
}
function load_file_upload() {
    $("#postedFile").click();
}
function fileuploadLoaded(e) {
    var test_value = $("#postedFile").val();
    var extension = test_value.split('.').pop().toLowerCase();
    if ($.inArray(extension, ['xls', 'xlsx', 'csv','XLS','XLSX','CSV']) == -1) {
        alertZebraContent("File dữ liệu không hợp lệ!");
        return false;
    }
    ConfirmZebraForm('Xác nhận thực hiện thao tác!', 'importexcel');
};
function btn_import_taisan_onclick() {
    $("#file_import").click()
}
function close_taisan() {
    var total_taisan = document.forms[0].TotalRowTaisan.value;
    var list_delete = document.forms[0].ListTaisanDelete.value;
    var total = 0;
    for (var i = 0; i < total_taisan; i++) {
        if (list_have_element(list_delete, i, ',') == -1) {// Neu chua co trong danh sach
            var sotien = parseFloat(char2number(eval("document.forms[0].C_SOTIEN_TAI_SAN" + i + ".value")));
            total += sotien;
        }
    }
    document.forms[0].C_GIA_TRI_BH1.value = total;
    format_string_to_money(document.forms[0].C_GIA_TRI_BH1);
    gia_tri_bh_onchange('1', document.forms[0].FK_DM_PHAM_VI_BAO_HIEM1.value);
}
function so_tien_vay_ntn_onchange(p_object) {
    var v_value = parseFloat(char2number(p_object.value)),
        total_pham_vi = parseFloat(char2number(document.forms[0].TotalRowPhamVi.value))

    var so_tien_tham_gia = lam_tron_so(v_value * 110 / 100);
    var gia_tri_tham_dinh = parseFloat(char2number(document.forms[0].C_GIA_TRI_DINH_GIA.value));
    if (gia_tri_tham_dinh > 0 && gia_tri_tham_dinh < so_tien_tham_gia) so_tien_tham_gia = gia_tri_tham_dinh;
    for (var i = 0; i < parseFloat(total_pham_vi); i++) {
        var so_tien_max = parseFloat(char2number(eval("document.forms[0].C_MAX_MONEY" + i + ".value")));
        if (so_tien_max <= 0) so_tien_max = so_tien_tham_gia;
        eval("document.forms[0].C_GIA_TRI_BH" + i + ".value = '" + (so_tien_tham_gia > so_tien_max ? so_tien_max : so_tien_tham_gia) + "'");
        format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
        var FK_DM_PHAM_VI_BAO_HIEM = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        gia_tri_bh_ntn_onchange(i, FK_DM_PHAM_VI_BAO_HIEM);
    }
}
function gia_tri_dinh_gia_ntn_onchange(p_object) {
    var gia_tri_tham_dinh = parseFloat(char2number(p_object.value)),
        total_pham_vi = parseFloat(char2number(document.forms[0].TotalRowPhamVi.value))

    var v_value = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    var so_tien_tham_gia = lam_tron_so(v_value * 110 / 100);
    if (gia_tri_tham_dinh > 0 && gia_tri_tham_dinh < so_tien_tham_gia) so_tien_tham_gia = gia_tri_tham_dinh;
    for (var i = 0; i < parseFloat(total_pham_vi); i++) {
        var so_tien_max = parseFloat(char2number(eval("document.forms[0].C_MAX_MONEY" + i + ".value")));
        if (so_tien_max <= 0) so_tien_max = so_tien_tham_gia;
        eval("document.forms[0].C_GIA_TRI_BH" + i + ".value = '" + (so_tien_tham_gia > so_tien_max ? so_tien_max : so_tien_tham_gia) + "'");
        format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
        var FK_DM_PHAM_VI_BAO_HIEM = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        gia_tri_bh_onchange(i, FK_DM_PHAM_VI_BAO_HIEM);
    }
}
function load_phi_bh_ntn() {
    for (var tong_phi = 0, total_pham_vi = char2number(document.forms[0].TotalRowPhamVi.value), i = 0; i < parseFloat(total_pham_vi); i++) {
        var phi_bh = char2number(eval("document.forms[0].C_PHI_BH" + i + ".value"));
        tong_phi += parseFloat(phi_bh)
    }
    var phi_bh_thoi_han = tong_phi;
    document.forms[0].C_PHI_BH_THOI_HAN.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc) ? (v_so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc), v_so_thang > 12 ? load_phi_bh_1_nam_ntn() : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM))) : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM))
}
function change_text_pvbh() {
    var p_type_house = $("#C_TYPE_HOUSE option:selected").text();
    var p_dia_chi = document.forms[0].C_ADDRESS_HOUSE.value;
    var namepv = document.forms[0].C_TEN_PHAM_VI0.value;
    var fullnamepv = namepv + ' ' + p_type_house + ' - ' + p_dia_chi;
    $('#ten_pham_vi_text_0').html(fullnamepv);
}
function capitalize_text(p_object) {
    var uppercaseFirstLetter = p_object.value.toLowerCase().charAt(0).toUpperCase();
    p_object.value = uppercaseFirstLetter + p_object.value.toLowerCase().slice(1);

    var p_type_house = $("#C_TYPE_HOUSE option:selected").text();
    var namepv = '';
    if (document.forms[0].C_TEN_PHAM_VI0) {
        namepv = document.forms[0].C_TEN_PHAM_VI0.value;
    }
    var fullnamepv = namepv + ' ' + p_type_house + ' - ' + p_object.value;
    $('#ten_pham_vi_text_0').html(fullnamepv);
}
function loai_su_doi_onchange() {
    var loai_sua_doi = document.forms[0].C_KIEU_SUA_DOI.value;
    var total_pham_vi = parseFloat(char2number(document.forms[0].TotalRowPhamVi.value));
    if (loai_sua_doi == 'TANG_PHI' || loai_sua_doi == 'GIAM_PHI') {
        for (var i = 0; i < parseFloat(total_pham_vi); i++) {
            $("#C_GIA_TRI_BH" + i).removeAttr("disabled");
            $("#C_GIA_TRI_BH" + i).removeAttr("readonly");
            $("#C_TY_LE_PHI" + i).removeAttr("disabled");
            $("#C_TY_LE_PHI" + i).removeAttr("readonly");
            $("#C_PHI_BH" + i).removeAttr("disabled");
            $("#C_PHI_BH" + i).removeAttr("readonly");
            if (eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value")) {
                $("#C_TIEN_CHUA_VAT" + i).removeAttr("disabled");
                $("#C_TIEN_CHUA_VAT" + i).removeAttr("readonly");
            }
            if (eval("document.forms[0].C_TIEN_VAT" + i + ".value")) {
                $("#C_TIEN_VAT" + i).removeAttr("disabled");
                $("#C_TIEN_VAT" + i).removeAttr("readonly");
            }
            if (eval("document.forms[0].C_VAT" + i + ".value")) {
                $("#C_VAT" + i).removeAttr("disabled");
                $("#C_VAT" + i).removeAttr("readonly");
            }
        }
    } else {
        for (var i = 0; i < parseFloat(total_pham_vi); i++) {
            $("#C_GIA_TRI_BH" + i).attr("disabled", "disabled");
            $("#C_GIA_TRI_BH" + i).attr("readonly", "readonly");
            $("#C_TY_LE_PHI" + i).attr("disabled", "disabled");
            $("#C_TY_LE_PHI" + i).attr("readonly", "readonly");
            $("#C_PHI_BH" + i).attr("disabled", "disabled");
            $("#C_PHI_BH" + i).attr("readonly", "readonly");
            if (eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value")) {
                $("#C_TIEN_CHUA_VAT" + i).attr("disabled", "disabled");
                $("#C_TIEN_CHUA_VAT" + i).attr("readonly", "readonly");
            }
            if (eval("document.forms[0].C_TIEN_VAT" + i + ".value")) {
                $("#C_TIEN_VAT" + i).attr("disabled", "disabled");
                $("#C_TIEN_VAT" + i).attr("readonly", "readonly");
            }
            if (eval("document.forms[0].C_VAT" + i + ".value")) {
                $("#C_VAT" + i).attr("disabled", "disabled");
                $("#C_VAT" + i).attr("readonly", "readonly");
            }
        }
    }
}
function addClassByClick(p_object, p_class, p_class_active) {
    $('.' + p_class).removeClass(p_class_active);
    $(p_object).addClass(p_class_active)
}
function btn_add_taisan_onclick() {
    var t = document.forms[0].TotalRowTaisan.value,
        e = ' <tr id="tr_taisan_' + t + '">';
    e += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    e += '<input type = "checkbox" id="cbtaisan' + t + '" name="cidtaisan" value="' + t + '">';
    e += '<div class="state p-success" style="opacity: 1;">';
    e += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    e += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    e += '</svg><label></label></div></div></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_TEN_TAI_SAN' + t + '" name="C_TEN_TAI_SAN' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>'
        , e += '<td><input type="text" autocomplete="off" class="form-control text-right" onkeyup="format_money(this,event)" id = "C_SOTIEN_TAI_SAN' + t + '" name = "C_SOTIEN_TAI_SAN' + t + '" value = "" onkeydown = "change_focus(document.forms[0],this,event)" ></td> '
        , e += "</tr>", $("#list_taisan").append(e), document.forms[0].TotalRowTaisan.value = parseFloat(t) + 1
}
function btn_del_taisan_onclick() {
    for (var t = document.forms[0].ListTaisanDelete.value, e = document.getElementsByName("cidtaisan"), n = 0; n < e.length; n++) e[n].checked && "" != e[n].value && ($("#tr_taisan_" + n).hide(), t += ("" == t ? "" : ",") + n.toString(), $("#cbtaisan" + n).val(""), $("#cbtaisan" + n).prop("checked", !1));
    document.forms[0].ListTaisanDelete.value = t
}
function load_nhom_kh_motor(t) {
    if (t == "KH_VAY_MUA_XE") {
        $("#box_cif").attr("style", "");
        $("#box_tthdtd").attr("style", "");
        $("#box_nth").show();
        $("#C_MA_KHACH_HANG").attr("data-rule-required", "true");
    } else {
        $("#box_cif").hide();
        $("#box_tthdtd").hide();
        $("#box_nth").hide();
        $("#C_MA_KHACH_HANG").attr("data-rule-required", "false");
    }
}
function chang_required_bks() {
    if (!document.forms[0].c_is_bien_kiem_soat.checked) {
        $("#required_bks").show();
        $("#bien_kiem_soat").attr("data-rule-required", "true");
        $("#required_sk").hide();
        $("#so_khung").attr("data-rule-required", "false");
        $("#required_sm").hide();
        $("#so_may").attr("data-rule-required", "false");
    } else {
        $("#required_bks").hide();
        $("#bien_kiem_soat").attr("data-rule-required", "false");
        $("#required_sk").show();
        $("#so_khung").attr("data-rule-required", "true");
        $("#required_sm").show();
        $("#so_may").attr("data-rule-required", "true");
    }
}
function require_tthd() {
    if (document.forms[0].c_lay_hoa_don.checked) {
        if (document.forms[0].C_NGUOI_NHAN_HOA_DON) {
            $('#C_NGUOI_NHAN_HOA_DON').attr("data-rule-required", "true");
        }
        if (document.forms[0].c_dia_chi_nhan_hoa_don) {
            $('#c_dia_chi_nhan_hoa_don').attr("data-rule-required", "true");
        }
        if (document.forms[0].C_MST2) {
            $('#C_MST2').attr("data-rule-required", "true");
            $('#required_mst').show();
        }
        $('#required_name_hoa_don').show();
        $('#required_dia_chi_hoa_don').show();
    }
    else {
        if (document.forms[0].C_NGUOI_NHAN_HOA_DON) {
            $('#C_NGUOI_NHAN_HOA_DON').attr("data-rule-required", "false");
        }
        if (document.forms[0].c_dia_chi_nhan_hoa_don) {
            $('#c_dia_chi_nhan_hoa_don').attr("data-rule-required", "false");
        }
        if (document.forms[0].C_MST2) {
            $('#C_MST2').attr("data-rule-required", "false");
            $('#required_mst').hide();
        }
        $('#required_name_hoa_don').hide();
        $('#required_dia_chi_hoa_don').hide();
    }
}
function display_so_loai(value) {
    if (value == 'KHAC') {
        $("#box_so_loai").prop("style", "");
        $("#nhan_hieu_xe").attr("data-rule-required", "true");
    } else {
        $("#box_so_loai").prop("style", "display:none;");
        $("#nhan_hieu_xe").attr("data-rule-required", "false");
    }
}
function gia_tri_thu_te_motor_onchange(p_object) {
    var v_value = char2number(p_object.value);
    if (document.forms[0].C_GIA_TRI_BH0) {
        document.forms[0].C_GIA_TRI_BH0.value = v_value;
        format_string_to_money(document.forms[0].C_GIA_TRI_BH0);
        document.forms[0].C_GIA_TRI_BH0.onchange();
    }
}
function file_upload_by_images_onclick(p_type_file, p_type_file_image, p_link_custom_image) {
    if (document.forms[0].C_TYPE_FILE) {
        document.forms[0].C_TYPE_FILE.value = p_type_file;
    }
    if (document.forms[0].C_FILE_ANH_TYPE_IMAGE) {
        document.forms[0].C_FILE_ANH_TYPE_IMAGE.value = p_type_file_image;
    }
    if (document.forms[0].c_link_custom_image) {
        document.forms[0].c_link_custom_image.value = p_link_custom_image;
    }
    $("#images_upload").click();
}
function show_pham_vi_by_code(p_code, p_object) {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
        if (c_ma_pham_vi == p_code) {
            if (eval("document.forms[0].cbk_pham_vi" + i)) {
                if (p_object.checked) {
                    eval("document.forms[0].cbk_pham_vi" + i + ".checked = true");
                } else {
                    eval("document.forms[0].cbk_pham_vi" + i + ".checked = false");
                }
                eval("document.forms[0].cbk_pham_vi" + i + ".onclick();");
            }
        }
    }
}
function show_pham_vi_motor(index) {
    if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).removeClass('css_fieldset_noborder');
    } else {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).addClass('css_fieldset_noborder');
    }
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (ma_pham_vi == 'MVA') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#lai_phu_xe").attr("data-rule-required", "true");
            $("#required_songuoilp").show();
        } else {
            $("#lai_phu_xe").attr("data-rule-required", "false");
            $("#required_songuoilp").hide();
        }
    } else if (ma_pham_vi == 'MCA') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#hang_xe").attr("data-rule-required", "true");
            $("#thang_san_xuat").attr("data-rule-required", "true");
            $("#nam_san_xuat").attr("data-rule-required", "true");
            $("#gia_tri_thuc_te").attr("data-rule-required", "true");
        } else {
            $("#hang_xe").attr("data-rule-required", "false");
            $("#thang_san_xuat").attr("data-rule-required", "false");
            $("#nam_san_xuat").attr("data-rule-required", "false");
            $("#gia_tri_thuc_te").attr("data-rule-required", "false");
        }
    }
    else if (ma_pham_vi == 'MVH') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            if (eval("document.forms[0].C_SO_GCN" + index + "")) {
                $("#C_SO_GCN" + index).attr("data-rule-required", "true");
            }
            if (eval("document.forms[0].C_HIEU_LUC_TU_GIO" + index + "")) {
                $("#C_HIEU_LUC_TU_GIO" + index).attr("data-rule-required", "true");
            }
            if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + "")) {
                $("#C_HIEU_LUC_TU_NGAY" + index).attr("data-rule-required", "true");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_GIO" + index + "")) {
                $("#C_HIEU_LUC_DEN_GIO" + index).attr("data-rule-required", "true");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + "")) {
                $("#C_HIEU_LUC_DEN_NGAY" + index).attr("data-rule-required", "true");
            }
            $("#lai_phu_xe").attr("data-rule-required", "true");
            $("#required_songuoilp").show();
        } else {
            if (eval("document.forms[0].C_SO_GCN" + index + "")) {
                $("#C_SO_GCN" + index).attr("data-rule-required", "false");
            }
            if (eval("document.forms[0].C_HIEU_LUC_TU_GIO" + index + "")) {
                $("#C_HIEU_LUC_TU_GIO" + index).attr("data-rule-required", "false");
            }
            if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + "")) {
                $("#C_HIEU_LUC_TU_NGAY" + index).attr("data-rule-required", "false");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_GIO" + index + "")) {
                $("#C_HIEU_LUC_DEN_GIO" + index).attr("data-rule-required", "false");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + "")) {
                $("#C_HIEU_LUC_DEN_NGAY" + index).attr("data-rule-required", "false");
            }
            $("#lai_phu_xe").attr("data-rule-required", "false");
            $("#required_songuoilp").hide();
        }
    }
    load_pham_vi_bao_hiem_motor();
}
function show_hide_box(p_control_div, p_control_icon) {
    if ($('#' + p_control_icon).hasClass('fa-plus-circle')) {
        $('#' + p_control_icon).removeClass('fa-plus-circle');
        $('#' + p_control_icon).addClass('fa-minus-circle');
        $('#' + p_control_div).toggle('show');
    } else {
        $('#' + p_control_icon).removeClass('fa-minus-circle');
        $('#' + p_control_icon).addClass('fa-plus-circle');
        $('#' + p_control_div).toggle('show');
    }
}
function show_div(p_control_div_hide, p_control_icon_hide, p_control_div_show, p_control_icon_show) {
    if ($('#' + p_control_icon_hide).hasClass('fa-minus-circle')) {
        $('#' + p_control_icon_hide).removeClass('fa-minus-circle');
        $('#' + p_control_icon_hide).addClass('fa-plus-circle');
        $("#" + p_control_div_hide).hide("slow", function () {
            // Animation complete.
        });
    }

    if ($('#' + p_control_icon_show).hasClass('fa-plus-circle')) {
        $('#' + p_control_icon_show).removeClass('fa-plus-circle');
        $('#' + p_control_icon_show).addClass('fa-minus-circle');
        $("#" + p_control_div_show).show("slow", function () {
            // Animation complete.
        });
    }
}
function load_requied_dn_xcg(t) {
    "" == t || "KH_CA_NHAN_HO_GIA_DINH" == t ? (
        $("#label_name_customer").html('Tên khách hàng: <span class="required">*</span>')
        , $("#C_TEN_KHACH_HANG").attr("data-msg-required", "Nhập tên khách hàng")
        , $("#box_chuc_vu").hide()
        , $("#box_cmt").show()
        , $("#C_CMT").attr("data-rule-required", "true")
        , $("#box_doanh_nghiep").hide()
        , $("#C_TEN_DOANH_NGHIEP").attr("data-rule-required", "false")
        , $("#C_MST").attr("data-rule-required", "false")
    )
        : (
            $("#label_name_customer").html('Người đại diện: <span class="required">*</span>')
            , $("#C_TEN_KHACH_HANG").attr("data-msg-required", "Nhập người đại diện")
            , $("#box_chuc_vu").show()
            , $("#box_cmt").hide()
            , $("#C_CMT").attr("data-rule-required", "false")
            , $("#box_doanh_nghiep").show()
            , $("#C_TEN_DOANH_NGHIEP").attr("data-rule-required", "true")
            , $("#C_MST").attr("data-rule-required", "true")
        )
}
function change_title_nsx() {
    var v_nguon_goc_xe = document.forms[0].nguon_goc_xe.value;
    if (v_nguon_goc_xe == 'XE-NOI-DIA') {
        $('#title_nsx').html('Năm đăng ký: <span class="required">*</span>');
        $('#nam_san_xuat').attr("data-msg-required", "Nhập năm đăng ký");
        //$('#thang_sx').show();
        //$("#thang_san_xuat").attr("optional", "false");
    } else {
        $('#title_nsx').html('Năm sản xuất: <span class="required">*</span>');
        $('#nam_san_xuat').attr("data-msg-required", "Nhập năm sản xuất");
        //$('#thang_sx').hide();
        //$("#thang_san_xuat").attr("optional", "true");
    }
}
function btn_add_ltt_xcg_onclick() {
    for (var count = char2number(document.forms[0].TotalRowLTT.value), lantt = document.forms[0].LanTT.value, tong_phi = char2number(document.forms[0].C_PHI_BH_THOI_HAN.value), list_ltt_delete = document.forms[0].ListLTTDelete.value, so_tien = 0, i = 0; i < count; i++)
        if (-1 == list_have_element(list_ltt_delete, i, ",")) {
            var so_tien_theo_dong = char2number(eval("document.forms[0].C_PHI_BH_LTT" + i + ".value"));
            so_tien += parseFloat(so_tien_theo_dong)
        }
    var so_tien_con_lai = parseFloat(tong_phi) - parseFloat(so_tien);
    var s = ' <tr id="tr_ltt_' + count + '">';
    s += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    s += '<input type = "checkbox" id="cbltt' + count + '" name="cidltt" value="' + count + '">';
    s += '<div class="state p-success" style="opacity: 1;">';
    s += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    s += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    s += '</svg><label></label></div></div>';
    s += '<input type="hidden" name="PK_LICH_THANH_TOAN_BH_LTT' + count + '" value=""><input type="hidden" name="FK_BANG_KE' + count + '" value="">';
    s += '<input type="hidden" name="C_NGAY_THU_PHI' + count + '" value=""></td>';
    s += '<td><input type="text" autocomplete="off" class="form-control text-center" name="C_LAN_THANH_TOAN_LTT' + count + '" value="' + (parseFloat(lantt) + 1) + '" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td align="center"><div class="input-group h-100">';
    s += '<input type="text" class="form-control mydatepicker" autocomplete="off" onchange="check_date_ltt();" onkeyup="FormatDate(this,event)" id="C_NGAY_THANH_TOAN_LTT' + count + '" name="C_NGAY_THANH_TOAN_LTT' + count + '" value="" data-rule-required="true" data-msg-required="Nhập ngày thanh toán." maxlength="10" onkeydown="change_focus(document.forms[0],this,event)">';
    s += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></td>';
    s += '<td align="center"><input type="text" class="form-control text-right" onkeyup="format_money(this,event)" name="C_PHI_BH_LTT' + count + '" value="' + so_tien_con_lai + '" onblur="load_so_tien_con_lai(' + count + ')" autocomplete="off" onkeydown="change_focus(document.forms[0],this,event)"></td> ';
    s += '<td align="center"><b style="color: red">Chưa thu phí</b></td></tr>';
    $("#list_ltt").append(s), setDatePicker("mydatepicker"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + count)), document.forms[0].TotalRowLTT.value = parseFloat(count) + 1, document.forms[0].LanTT.value = parseFloat(lantt) + 1
}
function show_hide_box_pham_vi(index) {
    if ($('#icon_listphamvi' + index).hasClass('fa-plus-circle')) {
        $('#icon_listphamvi' + index).removeClass('fa-plus-circle');
        $('#icon_listphamvi' + index).addClass('fa-minus-circle');
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).removeClass('css_fieldset_noborder');
    } else {
        $('#icon_listphamvi' + index).removeClass('fa-minus-circle');
        $('#icon_listphamvi' + index).addClass('fa-plus-circle');
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).addClass('css_fieldset_noborder');
    }
}
function show_pham_vi(index) {
    if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).removeClass('css_fieldset_noborder');
        $('#icon_listphamvi' + index).removeClass('fa-plus-circle');
        $('#icon_listphamvi' + index).addClass('fa-minus-circle');
    } else {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).addClass('css_fieldset_noborder');
        $('#icon_listphamvi' + index).removeClass('fa-minus-circle');
        $('#icon_listphamvi' + index).addClass('fa-plus-circle');
    }
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (ma_pham_vi == 'MVA') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#lai_phu_xe").attr("optional", "false");
            $("#required_songuoilp").show();
        } else {
            $("#lai_phu_xe").attr("optional", "true");
            $("#required_songuoilp").hide();
        }
    }
    if (ma_pham_vi == 'MV') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#gia_tri_thuc_te").attr("optional", "false");
            $("#required_mv").show();
        } else {
            $("#gia_tri_thuc_te").attr("optional", "true");
            $("#required_mv").hide();
        }
        load_phi_bh_xcg();
    } else if (ma_pham_vi == 'MVH') {
        //if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
        //    $("#C_SO_GCN" + index).attr("optional", "false");
        //} else {
        //    $("#C_SO_GCN" + index).attr("optional", "true");
        //}
        load_phi_bh_tnds_xcg();
    } else {
        load_phi_bao_hiem_all();
    }
}
function change_button_save() {
    if (document.forms[0].c_is_draff.checked) {
        $('#btn_save_top').html('<span><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;&nbsp;Lưu nháp</span>');
        $('#btn_save_bottom').html('<span><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;&nbsp;Lưu nháp</span>');
        $("#btn_save_top").attr("onclick", "vsw_form_name_submit('Save');return false;");
        $("#btn_save_bottom").attr("onclick", "vsw_form_name_submit('Save');return false;");
    } else {
        $('#btn_save_top').html('<span><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;&nbsp;Lưu và trình duyệt KS</span>');
        $('#btn_save_bottom').html('<span><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;&nbsp;Lưu và trình duyệt KS</span>');
        $("#btn_save_top").attr("onclick", "ConfirmZebraForm('Xác nhận đã kiểm tra thông tin đơn chính xác và chuyển đơn sang kiểm soát LPB.','Save');return false;");
        $("#btn_save_bottom").attr("onclick", "ConfirmZebraForm('Xác nhận đã kiểm tra thông tin đơn chính xác và chuyển đơn sang kiểm soát LPB.','Save');return false;");
    }
}
function ngay_bat_dau_dl_onchange() {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (isdate(t)) {
        dt_date = new Date(ddmmyyyy_to_mmddyyyy(t)), year = dt_date.getFullYear(), month = dt_date.getMonth() + 1, day = dt_date.getDate();
        year = parseFloat(year) + 1;
        var r = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (month < 10 ? "0" + month.toString() : month.toString()) + "/" + year;
        if (isdate(r)) {
            document.forms[0].C_HIEU_LUC_DEN_NGAY.value = r;
            $("#C_HIEU_LUC_DEN_NGAY").focus();
        }
    }
    load_phi_bh_dl();
}
function btn_add_person_onclick() {
    var t = document.forms[0].TotalRowPerson.value,
        e = ' <tr id="tr_person_' + t + '">';
    e += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    e += '<input type = "checkbox" id="cbperson' + t + '" name="cbperson" value="' + t + '">';
    e += '<div class="state p-success" style="opacity: 1;">';
    e += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    e += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    e += '</svg><label></label></div></div></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_TEN_NGUOI_TG' + t + '" name="C_TEN_NGUOI_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += '<td>';
    e += '<div class="col-md-12 input-group h-100 validate-input" data-validate="">';
    e += '<input type="text" class="form-control mydatepicker" autocomplete="off" id="C_NGAY_SINH_TG' + t + '" name="C_NGAY_SINH_TG' + t + '" value="" maxlength="10" onkeyup="FormatDate(this,event)" onkeydown="change_focus(document.forms[0],this,event)" />';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div>';
    e += '</div>';
    e += '</td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_HO_CHIEU_TG' + t + '" name="C_HO_CHIEU_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_EMAIL_TG' + t + '" name="C_EMAIL_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_DIA_CHI_TG' + t + '" name="C_DIA_CHI_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += "</tr>", $("#list_person tbody").append(e), setDatePicker("mydatepicker"), document.forms[0].TotalRowPerson.value = parseFloat(t) + 1
}
function btn_del_person_onclick() {
    for (var t = document.forms[0].ListPersonsDelete.value, e = document.getElementsByName("cbperson"), n = 0; n < e.length; n++) e[n].checked && "" != e[n].value && ($("#tr_person_" + n).hide(), t += ("" == t ? "" : ",") + n.toString(), $("#cbperson" + n).val(""), $("#cbperson" + n).prop("checked", !1));
    document.forms[0].ListPersonsDelete.value = t
}
function btn_add_person_covid_onclick() {
    var t = document.forms[0].TotalRowPerson.value,
        e = ' <tr id="tr_person_' + t + '">';
    e += '<td align="center"><div class="pretty p-svg p-curve checkbox-blue" style="margin-right: 0;">';
    e += '<input type = "checkbox" id="cbperson' + t + '" name="cbperson" value="' + t + '">';
    e += '<div class="state p-success" style="opacity: 1;">';
    e += '<svg class="svg svg-icon" viewBox="0 0 20 20">';
    e += '<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>';
    e += '</svg><label></label></div></div></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_TEN_NGUOI_TG' + t + '" name="C_TEN_NGUOI_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += '<td>';
    e += '<select style="width: 100%" class="form-control form-control-sm select2 w100pi" id="C_GENDER_TG' + t + '" name = "C_GENDER_TG' + t + '" onkeydown = "change_focus(document.forms[0],this,event)" >';
    e += '<option value="0">Chọn giới tính</option>';
    e += listgender;
    e += '</select >';
    e += '</td>';

    e += '<td>';
    e += '<div class="col-md-12 input-group h-100 validate-input" data-validate="">';
    e += '<input type="text" class="form-control mydatepicker" autocomplete="off" id="C_NGAY_SINH_TG' + t + '" name="C_NGAY_SINH_TG' + t + '" value="" maxlength="10" onkeyup="FormatDate(this,event)" onkeydown="change_focus(document.forms[0],this,event)" />';
    e += '<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div>';
    e += '</div>';
    e += '</td>';

    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_HO_CHIEU_TG' + t + '" name="C_HO_CHIEU_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += '<td><input type="text" autocomplete="off" class="form-control text_input" id="C_PHONE_TG' + t + '" name="C_PHONE_TG' + t + '" value="" onkeydown = "change_focus(document.forms[0],this,event)" ></td>';
    e += "</tr>", $("#list_person tbody").append(e), $("#C_GENDER_TG" + t).select2(), setDatePicker("mydatepicker"), document.forms[0].TotalRowPerson.value = parseFloat(t) + 1
}
function btn_import_person_onclick() {
    $("#file_import").click()
}
function close_person() {
    var total = document.forms[0].TotalRowPerson.value;
    var list_delete = document.forms[0].ListPersonsDelete.value;
    var count = 0;
    for (var i = 0; i < total; i++) {
        if (list_have_element(list_delete, i, ',') == -1) {
            count++;
        }
    }
    $('#C_SO_NGUOI').val(count);
    $('#C_SO_NGUOI').trigger('change');
}
function check_unit(index) {
    if (!$('#unit_index' + index).is(':checked')) {
        $('#unit_money' + index).val('0');
    }
    reset_money();
}
function change_unit_money(index) {
    var value = parseFloat(char2number($('#unit_money' + index).val()));
    var total_money_rest = parseFloat($('#total_money_rest').val());
    total_money_rest = total_money_rest + value;
    if (value > total_money_rest || total_money_rest == 0) {
        value = total_money_rest;
        $('#unit_money' + index).val(value.f_formatMoney(0, ".", ","));
    }
    if (value > 0) {
        $('#unit_index' + index).prop('checked', true);
    }
    else {
        $('#unit_index' + index).prop('checked', false);
    }
    reset_money();
}
function move_money(index) {
    var value = parseFloat($('#total_money_rest').val());
    var unit_money = parseFloat(char2number($('#unit_money' + index).val()));
    if (value > 0) {
        $('#unit_index' + index).prop('checked', true);
        $('#unit_money' + index).val((unit_money + value).f_formatMoney(0, ".", ","))
    }
    reset_money();
}
function show_don_vi(pagesize, totalsize, name_form) {
    $('#loading').show();
    var ins = [];
    $.each($("input[name='cid']:checked"), function () {
        ins.push($(this).val());
    });
    if (ins.length > 0) {
        var totalmoney = 0;
        for (var i = 0; i < pagesize; i++) {
            var pk_id = $('#ins_pk' + i).val();
            if (ins.indexOf(pk_id) > -1) {
                var ins_money = parseFloat(char2number($('#ins_money' + i).val()));
                totalmoney += ins_money;
            }
        }
        load_money_sd(totalmoney);
    }
    else if (pagesize >= totalsize) {
        var totalmoney = parseFloat($('#total_money_in_page').val());
        load_money_sd(totalmoney);
    } else {
        if (typeof name_form === "undefined") name_form = 'vswForm';
        var dataToPost = $("#" + name_form).serialize();
        try {
            $.ajax({
                url: '/ModInsuranceBaoAnTinDungMirae/GetMoney',
                data: dataToPost,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    $('#loading').hide();
                    var totalmoney = parseFloat(data.total);
                    load_money_sd(totalmoney);
                },
                error: function () {
                    $('#loading').hide();
                }
            });
        } catch (e) {
            alert('Lỗi thực hiện.');
        }
    }
}
function load_money_sd(totalmoney) {
    var totalunit = parseFloat($('#count_unit').val());
    var total_sd = 0;
    for (var i = 0; i < totalunit; i++) {
        var unit_money = parseFloat(char2number($('#unit_money' + i).val()));
        total_sd += unit_money;
    }
    $('#total_money_text').html(totalmoney.f_formatMoney(0, ".", ","));
    $('#total_money_sd').html(total_sd.f_formatMoney(0, ".", ","));
    $('#total_money_cl').html((totalmoney - total_sd).f_formatMoney(0, ".", ","));
    $('#total_money_rest').val((totalmoney - total_sd));
    $('#total_money_all').val((totalmoney));
    $('[data-popup="popup-donvi"]').fadeIn(350);
    $('#loading').hide();
}
function reset_money() {
    var totalmoney = parseFloat($('#total_money_all').val());
    var totalunit = parseFloat($('#count_unit').val());
    var total_sd = 0;
    for (var i = 0; i < totalunit; i++) {
        var unit_money = parseFloat(char2number($('#unit_money' + i).val()));
        total_sd += unit_money;
    }
    $('#total_money_sd').html(total_sd.f_formatMoney(0, ".", ","));
    $('#total_money_cl').html((totalmoney - total_sd).f_formatMoney(0, ".", ","));
    $('#total_money_rest').val((totalmoney - total_sd));
}
function load_thoi_hanvnvon_onchange() {
    var t = parseFloat(document.forms[0].C_THOI_HAN.value),
        e = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (isdate(e)) {
        dt_date = new Date(ddmmyyyy_to_mmddyyyy(e));
        var newdate = new Date(dt_date);
        newdate.setDate(newdate.getDate() + t);

        var year = newdate.getFullYear(), n = newdate.getMonth() + 1, day = newdate.getDate();
        var a = (day < 10 ? "0" + day.toString() : day.toString()) + "/" + (n < 10 ? "0" + n.toString() : n.toString()) + "/" + year;
        document.forms[0].C_HIEU_LUC_DEN_NGAY.value = a;
    }
    check_so_tuoi(), load_pham_vi_bao_hiem_vnvon(), load_phi_bh_vnvon()
}
function load_phi_bh_vnvon() {
    for (var tong_phi = 0, total_pham_vi = char2number(document.forms[0].TotalRowPhamVi.value), i = 0; i < parseFloat(total_pham_vi); i++) {
        var phi_bh = char2number(eval("document.forms[0].C_PHI_BH" + i + ".value"));
        tong_phi += parseFloat(phi_bh)
    }
    var phi_bh_thoi_han = tong_phi;
    document.forms[0].C_PHI_BH_THOI_HAN.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM);
    kieu_thanh_toan_onchange();
}
function so_tien_vay_onchange_vnvon(p_object) {
    var v_value = parseFloat(char2number(p_object.value)),
        total_pham_vi = parseFloat(char2number(document.forms[0].TotalRowPhamVi.value)),
        policy_type = document.forms[0].C_POLICY_TYPE.value;

    for (var i = 0; i < parseFloat(total_pham_vi); i++) {
        var so_tien_max = parseFloat(char2number(eval("document.forms[0].C_MAX_MONEY" + i + ".value")));
        if (so_tien_max <= 0) so_tien_max = v_value;
        eval("document.forms[0].C_GIA_TRI_BH" + i + ".value = '" + (v_value > so_tien_max ? so_tien_max : v_value) + "'");
        if (document.forms[0].C_GIA_TRI_BH) {
            document.forms[0].C_GIA_TRI_BH.value = (v_value > so_tien_max ? so_tien_max : v_value);
            format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH"));
        }
        format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
        var FK_DM_PHAM_VI_BAO_HIEM = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        gia_tri_bh_onchange_vnvon(i, FK_DM_PHAM_VI_BAO_HIEM);
    }
}
function change_email_nhan_gcn() {
    if (document.forms[0].C_ADDRESS_HOUSE) {
        var C_ADDRESS_HOUSE = document.forms[0].C_ADDRESS_HOUSE.value;
        if (C_ADDRESS_HOUSE == '') {
            var C_EMAIL = document.forms[0].C_EMAIL.value;
            document.forms[0].C_ADDRESS_HOUSE.value = C_EMAIL;
        }
    }
    if (document.forms[0].C_STREET) {
        var C_STREET = document.forms[0].C_STREET.value;
        if (C_STREET == '') {
            var C_EMAIL = document.forms[0].C_EMAIL.value;
            document.forms[0].C_STREET.value = C_EMAIL;
        }
    }
}
function chang_mst() {
    if (document.forms[0].C_MST2) {
        var C_MST2 = document.forms[0].C_MST2.value;
        if (C_MST2 == '') {
            var C_MST = document.forms[0].C_MST.value;
            document.forms[0].C_MST2.value = C_MST;
        }
    }
}
function set_requied_gcntnds(p_this) {
    if (p_this.checked) {
        $('#reqEmail').show();
        $('#label_sogcnbh_tnds').hide();
        $('#div_sogcnbh_tnds').hide();
        $('#div_sogcnbh_tnds input').attr("data-rule-required", "false");
        $('#div_email_tnds input').attr("data-rule-required", "true");
    } else {
        $('#reqEmail').hide();
        $('#label_sogcnbh_tnds').show();
        $('#div_sogcnbh_tnds').show();
        $('#div_sogcnbh_tnds input').attr("data-rule-required", "true");
        $('#div_email_tnds input').attr("data-rule-required", "false");
    }
}
function change_doi_tuong() {
    var obj = $('#doi_tuong_tham_gia').val();
    var so_cho_ngoi = $('#so_cho_ngoi').val();
    document.getElementById("lai_phu_xe").value = 10;
    if (obj === 'ONE') {
        if (eval($('#lai_phu_xe'))) {
            document.getElementById("lai_phu_xe").value = 1;
        }
    }
    if (obj === 'ALL') {
        if (eval($('#lai_phu_xe'))) {
            document.getElementById("lai_phu_xe").value = so_cho_ngoi;
        }
    }
}

function chang_required_bks_new() {
    if (!document.forms[0].c_is_bien_kiem_soat.checked) {
        $("#required_bks").show();
        $("#bien_kiem_soat").attr("data-rule-required", "true");
    } else {
        $("#required_bks").hide();
        $("#bien_kiem_soat").attr("data-rule-required", "false");
    }
}

function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
        date.setDate(0);
    }
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return today;
}

function change_month(idx) {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var ma_pham_vi = '';

        if ($('#C_MA_PHAM_VI' + i)[0]) {
            if (eval("document.forms[0].C_MA_PHAM_VI" + i + ".value")) {
                ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
            }
            if (ma_pham_vi == 'MVH') {
                var thoi_han_bh = eval("document.forms[0].Thoi_han_bh.value");
                var v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + i + ".value");
                var kt = addMonths(new Date(ddmmyyyy_to_mmddyyyy(v_ngay_bat_dau)), thoi_han_bh);
                eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + i + ".value='" + kt + "'");
                eval("document.forms[0].C_HIEU_LUC_DEN_NGAY.value='" + kt + "'");
                eval("document.forms[0].C_HIEU_LUC_TU_NGAY.value='" + v_ngay_bat_dau + "'");
                if (idx == 1) {
                    load_pham_vi_bao_hiem_tnds_motor();
                } else {
                    load_phi_bh_tnds_xcg_new();
                }
            }
            if (ma_pham_vi == 'MVA') {
                $("#C_GIA_TRI_BH" + i).trigger("onchange");
            }
        }
    }
}

function change_time() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var ma_pham_vi = '';

        if ($('#C_HIEU_LUC_DEN_GIO' + i)[0]) {
            var val = eval("document.forms[0].C_HIEU_LUC_TU_GIO" + i + ".value");
            eval("document.forms[0].C_HIEU_LUC_DEN_GIO" + i + ".value='" + val + "'");
            eval("document.forms[0].C_HIEU_LUC_TU_GIO.value='" + val + "'");
            eval("document.forms[0].C_HIEU_LUC_DEN_GIO.value='" + val + "'");
        }
    }
}

function InputNumberOnlyFrom1To2(t) {
    var e = t.which ? t.which : event.keyCode;
    return e >= 49 && e <= 50 || 46 == e
}

function change_title_nsx_tnds() {
    var v_nguon_goc_xe = document.forms[0].nguon_goc_xe.value;
    if (v_nguon_goc_xe == 'XE-NOI-DIA') {
        $('#title_nsx').html('Năm đăng ký:');
        //$('#thang_sx').show();
        //$("#thang_san_xuat").attr("optional", "false");
    } else {
        $('#title_nsx').html('Năm sản xuất:');
        //$('#thang_sx').hide();
        //$("#thang_san_xuat").attr("optional", "true");
    }
}

function load_gia_tri_bh_MVA(t, idx) {
    var a = t;
    if ($('#C_MA_PHAM_VI' + idx)[0]) {
        if (eval("document.forms[0].C_MA_PHAM_VI" + idx + ".value")) {
            ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + idx + ".value");
        }
        if (ma_pham_vi == 'MVA') {
            eval("document.forms[0].C_GIA_TRI_BH" + idx + ".value='" + t + "'");
        }
    }
}

function ltt_gcndt(p_this) {
    if (p_this.checked) {
        $("#lbXacNhanThuPhi").hide()
            , $("#ckXacNhanThuPhi").show()
            , $("#c_xac_nhan_thu_phi").prop("checked", false);
    } else {
        $("#lbXacNhanThuPhi").show()
            , $("#ckXacNhanThuPhi").hide()
            , $("#c_xac_nhan_thu_phi").prop("checked", false);
    }
}

function show_pham_vi_TNDS_New(index) {
    if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).removeClass('css_fieldset_noborder');
        $('#icon_listphamvi' + index).removeClass('fa-plus-circle');
        $('#icon_listphamvi' + index).addClass('fa-minus-circle');
    } else {
        $('#listphamvi' + index).toggle('show');
        $('#fieldset_listphamvi' + index).addClass('css_fieldset_noborder');
        $('#icon_listphamvi' + index).removeClass('fa-minus-circle');
        $('#icon_listphamvi' + index).addClass('fa-plus-circle');
    }
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (ma_pham_vi == 'MVA') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#lai_phu_xe").attr("optional", "false");
            $("#required_songuoilp").show();
        } else {
            $("#lai_phu_xe").attr("optional", "true");
            $("#required_songuoilp").hide();
        }
    }
    if (ma_pham_vi == 'MV') {
        if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
            $("#gia_tri_thuc_te").attr("optional", "false");
            $("#required_mv").show();
        } else {
            $("#gia_tri_thuc_te").attr("optional", "true");
            $("#required_mv").hide();
        }
        load_phi_bh_xcg_();
    } else if (ma_pham_vi == 'MVH') {
        //if (eval("document.forms[0].cbk_pham_vi" + index + ".checked")) {
        //    $("#C_SO_GCN" + index).attr("optional", "false");
        //} else {
        //    $("#C_SO_GCN" + index).attr("optional", "true");
        //}
        load_phi_bh_tnds_xcg_new();
    } else if (ma_pham_vi == 'MVA') {
        var p_id = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + index + ".value");
        gia_tri_bh_lp_onchange(index, p_id)
    } else {
        load_phi_bao_hiem_all();
    }
}

function load_file_upload_DT() {
    $("#postedFileDT").click();
}
function fileuploadLoaded_DT(e) {
    var test_value = $("#postedFileDT").val();
    var extension = test_value.split('.').pop().toLowerCase();
    if ($.inArray(extension, ['xls', 'xlsx', 'csv', 'XLS', 'XLSX', 'CSV']) == -1) {
        alertZebraContent("File dữ liệu không hợp lệ!");
        return false;
    }
    $.Zebra_Dialog("Xác nhận thực hiện thao tác!", {
        type: "confirmation",
        overlay_close: !1,
        title: 'Thông báo',
        buttons: [{
            caption: "Có",
            callback: function () {
                var url = 'importexcelDT';
                var name_form = 'vswForm';
                $('#loading').show();
                var dataToPost = $("#" + name_form).serialize();
                var formData = new FormData();
                var files = $("#postedFileDT").get(0).files;
                formData.append("postedFileDT", files[0]);
                var i = window.location.href.indexOf('?');
                if (i > -1) {
                    var queryString = window.location.href.substring(i + 1);
                    if (queryString != '') {
                        url = url + '?' + queryString;
                    }
                }
                $.ajax({
                    url: url,
                    contentType: false,
                    data: formData,
                    processData: false,
                    type: "POST",
                    success: function (data) {
                        $('#loading').hide();
                        if (data.message.trim() != '') {
                            if (data.status == "Success") {
                                alertZebraReload_new('Th&#244;ng b&#225;o', data.message, 'information');
                            } else {
                                alertZebraReload_new('Th&#244;ng b&#225;o', data.message);
                            }
                        }
                        if (data.js.trim() != '') {
                            eval(data.js);
                        }
                    },
                    error: function () {
                        $('#loading').hide();
                        location.reload();
                    }
                });
            }
        }, {
            caption: "Không",
            callback: function () {
                location.reload();
            }
        }]
    })
    //ConfirmZebraForm('Xác nhận thực hiện thao tác!', 'importexcelDT');
};

function alertZebraReload_new(title, content) {
    new $.Zebra_Dialog(content, {
        'type': 'information',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'OK', callback: function () { location.reload(); } }
        ]
    });
}

function change_month_tc() {
    var month = 12;
    var goiBH = eval("document.forms[0].C_GOI_BH.value");
    if (goiBH > 0)
        month = 12 * goiBH;
    var v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY.value");
    var kt = addMonths(new Date(ddmmyyyy_to_mmddyyyy(v_ngay_bat_dau)), month);
    eval("document.forms[0].C_HIEU_LUC_DEN_NGAY.value='" + kt + "'");
}

function change_time_tc() {
    var val = eval("document.forms[0].C_HIEU_LUC_TU_GIO.value");
    eval("document.forms[0].C_HIEU_LUC_DEN_GIO.value='" + val + "'");
}

function tinh_so_tuoi() {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        e = document.forms[0].C_NGAY_CAP.value,
        n = document.forms[0].C_DOB.value;
    if (isdate(n) && isdate(e)) {
        dt_ngay_sinh = new Date(ddmmyyyy_to_mmddyyyy(n)), yyyyns = dt_ngay_sinh.getFullYear(), mmns = dt_ngay_sinh.getMonth() + 1, ddns = dt_ngay_sinh.getDate();
        var a = new Date(ddmmyyyy_to_mmddyyyy(t)),
            r = a.getDate(),
            o = a.getMonth() + 1,
            _ = a.getFullYear() - yyyyns
        if ((o - mmns) > 0) {
            _++;
        }
        return _;
    }
    return 0;
}