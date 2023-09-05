function change_captcha() { var e = Math.floor(Math.random() * 999999); document.getElementById("imgValidCode").src = "/Tools/Security.aspx?Code=" + e } function remove_unicode(str) { str = str.toLowerCase(); str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"); str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"); str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i"); str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"); str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"); str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"); str = str.replace(/đ/g, "d"); str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-"); str = str.replace(/-+-/g, "-"); str = str.replace(/^\-+|\-+$/g, ""); return str; } function alertZebra(title, content) { $.Zebra_Dialog(content, { 'type': 'warning', 'overlay_close': false, 'title': title }); } function alertZebra2(title, content, redirect) { $.Zebra_Dialog(content, { 'type': 'information', 'overlay_close': false, 'title': title, 'buttons': [{ caption: 'OK', callback: function () { location.href = redirect } }] }); } function confirmZebra(title, content, redirect) { $.Zebra_Dialog(content, { 'type': 'confirmation', 'overlay_close': false, 'title': title, 'buttons': [{ caption: 'Yes', callback: function () { location.href = redirect } }, { caption: 'No', callback: function () { return } }] }); } function getNodeValue(o) { try { return o.item(0).firstChild.nodeValue; } catch (err) { return ''; } } function onTextBlur(keyId, value) { var Key = document.getElementById(keyId); if (Key.value == '') Key.value = value; } function onTextFocus(keyId, value) { var Key = document.getElementById(keyId); if (Key.value == value) Key.value = ''; } function increment(myInput) { myInput.value = (+myInput.value + 1) || 0; } function decrement(myInput) { if (myInput.value == 1) { alertZebra("Bạn phải mua ít nhất 1 sản phẩm.", "Cảnh báo"); return; } myInput.value = (myInput.value - 1) || 0; } var _type = 1; function changeTab(type, boxId, aId, count, classBox, classA) { _type = type; document.getElementById(boxId + type).style.display = ""; document.getElementById(aId + type).className = classA; for (var i = 1; i <= count; i++) { if (i != type) { document.getElementById(boxId + i).style.display = "none"; document.getElementById(aId + i).className = classBox; } } } var checkflag = false; function checkAll(field) { if (!checkflag) { for (i = 0; i < field.length; i++) { field[i].checked = true; } checkflag = true; } else { for (i = 0; i < field.length; i++) { field[i].checked = false; } checkflag = false; } } function del(url, name, index, returnpath) { confirmZebra('Thông báo', 'Bạn muốn xóa sản phẩm ' + name + ' khỏi giỏ hàng ?', url + '/Index/' + index + '?returnpath=' + returnpath); } function del_person(url, name, index) { confirmZebra('Thông báo', 'Bạn muốn xóa người thụ hưởng ' + name + ' khỏi danh sách ?', url + '/Index/' + index); } function goURL(url, returnpath) { if (returnpath == '') location.href = url; else location.href = url + '?returnpath=' + returnpath; } (function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk')); window.___gcfg = { lang: 'vi' }; (function () { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })(); function play_video(position, path, images, width, height, auto) { jwplayer(position).setup({ 'flashplayer': '/Data/flash/youtubeplayer.swf', 'file': path, 'image': images, 'autostart': auto, 'controlbar': 'bottom', 'width': '100%', 'aspectratio': '16:9' }); } function doSearch(p_url) {
    var keyword = document.getElementById('keyword'); var sURL = ''; if (keyword == null || keyword.value.length < 2) { alertZebra('Thông báo', 'Từ khóa phải nhiều hơn 1 ký tự.'); return; } else if (keyword.value == '{RS:Web_SearchText}') { alertZebra('Thông báo', 'Bạn chưa nhập từ khóa.'); return; } else
        sURL += ((sURL == '') ? '?' : '&') + 'keyword=' + keyword.value; window.location.href = p_url + sURL;
} function doSearchMangLuoi(p_url) { var city = document.getElementById('city'); var keyword = document.getElementById('keyword'); var sURL = ''; if (city == null || city.value.length < 1) { var sURL = ''; } else { sURL += ((sURL.indexOf('?') < 0) ? '?' : '&') + 'city=' + city.value; } if (keyword != null && keyword.value.length > 1) { sURL += ((sURL.indexOf('?') < 0) ? '?' : '&') + 'keyword=' + keyword.value; } window.location.href = p_url + sURL; } function verify_multi_browser(f) {
    $('.select2-selection--single').removeClass("select2-container-active"); var errors = ""; var i; for (i = 0; i < f.length; i++) {
        var e = f.elements[i]; if (e.getAttribute("type") == "radio" && (e.getAttribute("optional") != null && e.getAttribute("optional") == "false")) { if (ischecked(f, e.name) == false) { if (e.getAttribute("message") != '') alert(e.getAttribute("message")); else alert("At least one " + e.name + " must be checked "); e.focus(); return false; } } if (e.getAttribute("type") == "checkbox" && (e.getAttribute("optional") != null && e.getAttribute("optional") == "false")) { if (ischecked(f, e.name) == false) { if (e.getAttribute("message") != '') alert(e.getAttribute("message")); else alert("At least one " + e.name + " must be checked "); e.focus(); return false; } } if ((e.getAttribute("ishour")) && !((e.value == null) || (e.value == "") || isblank(e.value))) { if (IsHour(e, ':') == false) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert("Hour is invalid"); e.focus(); return false; } } if ((e.getAttribute("isemail")) && !((e.value == null) || (e.value == "") || isblank(e.value))) { if (isemail(e.value) == false) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert("Email is invalid"); e.focus(); return false; } } if (e.getAttribute("isdate")) { if (!((e.value == null) || (e.value == "") || isblank(e.value))) { if (isdate(e.value) == false) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert("Date is invalid"); e.focus(); return false; } } if (e.getAttribute("optional") == '' && isblank(e.value)) { if (e.getAttribute("message") != '') { alert(e.getAttribute("message") + '!'); } else { alert("Date is invalid"); e.focus(); } return false; } } if ((e.getAttribute("isnumeric") || e.getAttribute("isdouble") || e.getAttribute("isfloat") || (e.getAttribute("min") != null) || (e.getAttribute("max") != null)) && !((e.value == null) || (e.value == "") || isblank(e.value))) {
            if (!_DECIMAL_DELIMITOR) decimal_delimitor = ","; else decimal_delimitor = _DECIMAL_DELIMITOR; test_value = replace(e.value, decimal_delimitor, ""); if (e.getAttribute("isdouble")) is_number = isdouble(test_value); else
                is_number = isnum(test_value); var v = parseFloat(test_value); var v_min = (e.getAttribute("min") != null) ? e.getAttribute("min") : 0; var v_max = (e.getAttribute("max") != null) ? e.getAttribute("max") : 0; if (!is_number || v < v_min || (v_max > 0 && v > v_max)) { errors += "- The field " + e.name + " must be a number"; if (e.getAttribute("min") != null) errors += " that is greater than " + e.getAttribute("min"); if (e.getAttribute("min") != null && e.getAttribute("max") != null) errors += " and less than " + e.getAttribute("max"); else if (e.getAttribute("max") != null) errors += " That is less than " + e.getAttribute("max"); errors += ".\n"; if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert(errors); e.focus(); return false; }
        } if ((e.getAttribute("maxlength") != null && e.getAttribute("maxlength") != "") && !((e.value == null) || (e.value == "") || isblank(e.value))) { if (e.value.length > e.getAttribute("maxlength")) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert("The length of " + e.name + " must be less than " + e.getAttribute("maxlength")); e.focus(); return false; } } if (e.getAttribute("checkempty") && e.getAttribute("type") == "select-multiple" && e.length == 0) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert(e.name + " must be not empty"); e.focus(); return false; } if (((e.getAttribute("type") == "password") || (e.getAttribute("type") == "text") || (e.getAttribute("type") == "textbox") || (e.getAttribute("type") == "textarea") || (e.getAttribute("type") == "select-one")) && (e.getAttribute("optional") != null && e.getAttribute("optional") == "false")) { if ((e.value == null) || (e.value == "") || isblank(e.value)) { if (e.getAttribute("message") != null) alert(e.getAttribute("message")); else alert(e.name + " must be not empty"); if (e.getAttribute("type") != "select-one") { e.focus(); } else { $('#select2-' + e.id + '-container').parent().addClass("select2-container-active"); } return false; } }
    } return true;
} function isblank(s) { var i; for (i = 0; i < s.length; i++) { var c = s.charAt(i); if ((c != " ") && (c != "\n") && (c != "\t")) return false; } return true; } function ischecked(f, objname) {
    var tmpchecked = false; var i = 0
    for (i = 0; i < f.length; i++) { var e1 = f.elements[i]; if (e1.name == objname && e1.checked) { tmpchecked = true; break; } } return tmpchecked;
} function IsHour(txt_obj, separator_char) { var strLen = txt_obj.length; var theStr = txt_obj.value; var tbeHour = ""; var theMinute = ""; if (strLen == 0) { return false; } separator_pos = theStr.indexOf(separator_char, 1); if (separator_pos == 0) { return false; } else { theHour = theStr.substr(0, separator_pos); theMinute = theStr.substr(separator_pos + 1, separator_pos + 3); } if (parseInt(theHour) > 24 || parseInt(theMinute) > 60) { return false; } return true; } function isemail(email) {
    var invalidChars = "/ :,;"; if (email == "") { return false; } for (i = 0; i < invalidChars.length; i++) { badChar = invalidChars.charAt(i); if (email.indexOf(badChar, 0) > -1) { return false; } } atPos = email.indexOf("@", 1)
    if (atPos == -1) { return false; } if (email.indexOf("@", atPos + 1) > -1) { return false; } periodPos = email.indexOf(".", atPos); if (periodPos == -1) { return false; } if (periodPos + 3 > email.length) { return false; } return true;
} function isdate(the_date) { var strDatestyle = "EU"; var strDate; var strDateArray; var strDay; var strMonth; var strYear; var intday; var intMonth; var intYear; var booFound = false; var strSeparatorArray = new Array("-", " ", "/", "."); var intElementNr; var err = 0; var strMonthArray = new Array(12); strMonthArray[0] = "Jan"; strMonthArray[1] = "Feb"; strMonthArray[2] = "Mar"; strMonthArray[3] = "Apr"; strMonthArray[4] = "May"; strMonthArray[5] = "Jun"; strMonthArray[6] = "Jul"; strMonthArray[7] = "Aug"; strMonthArray[8] = "Sep"; strMonthArray[9] = "Oct"; strMonthArray[10] = "Nov"; strMonthArray[11] = "Dec"; strDate = the_date; if (strDate == "") { return false; } for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) { if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) { strDateArray = strDate.split(strSeparatorArray[intElementNr]); if (strDateArray.length != 3) { err = 1; return false; } else { strDay = strDateArray[0]; strMonth = strDateArray[1]; strYear = strDateArray[2]; } booFound = true; } } if (booFound == false) { if (strDate.length > 5) { strDay = strDate.substr(0, 2); strMonth = strDate.substr(2, 2); strYear = strDate.substr(4); } else { return false; } } if (strYear.length == 2) { strYear = '20' + strYear; } if (strDatestyle == "US") { strTemp = strDay; strDay = strMonth; strMonth = strTemp; } if (!isnum(strDay)) { err = 2; return false; } intday = parseInt(strDay, 10); if (isNaN(intday)) { err = 2; return false; } if (!isnum(strMonth)) { err = 3; return false; } intMonth = parseInt(strMonth, 10); if (isNaN(intMonth)) { for (i = 0; i < 12; i++) { if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) { intMonth = i + 1; strMonth = strMonthArray[i]; i = 12; } } if (isNaN(intMonth)) { err = 3; return false; } } if (!isnum(strYear)) { err = 4; return false; } intYear = parseInt(strYear, 10); if (isNaN(intYear)) { err = 4; return false; } if (intMonth > 12 || intMonth < 1) { err = 5; return false; } if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) { err = 6; return false; } if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) { err = 7; return false; } if (intMonth == 2) { if (intday < 1) { err = 8; return false; } if (LeapYear(intYear) == true) { if (intday > 29) { err = 9; return false; } } else { if (intday > 28) { err = 10; return false; } } } return true; } function isnum(passedVal) { if (passedVal == "") { return false; } if (count_char(passedVal, '.') > 1) return false; for (i = 0; i < passedVal.length; i++) { if (passedVal.charAt(i) == '.') continue; if (passedVal.charAt(i) < "0") { return false; } if (passedVal.charAt(i) > "9") { return false; } } return true; } function isdouble(passedVal) { if (passedVal == "") { return false; } if (count_char(passedVal, '.') > 1) return false; for (i = 0; i < passedVal.length; i++) { if (passedVal.charAt(i) != "." && passedVal.charAt(i) < "0") { return false; } if (passedVal.charAt(i) != "." && passedVal.charAt(i) > "9") { return false; } } return true; } function isfloat(passedVal) { if (passedVal == "") { return false; } if (count_char(passedVal, '.') > 1) return false; if (count_char(passedVal, '-') > 1) return false; if (passedVal.indexOf('-') > 0) return false; passedVal = passedVal.substring(1); for (i = 0; i < passedVal.length; i++) { if (passedVal.charAt(i) != "." && passedVal.charAt(i) < "0") { return false; } if (passedVal.charAt(i) != "." && passedVal.charAt(i) > "9") { return false; } } return true; } function vsw_form_submit() { $("#form_payment").validate({ highlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success"); }, unhighlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error"); }, submitHandler: function () { $('#loading').show(); $("#form_payment").find("input, textarea, button, select").removeAttr("disabled"); var vidFileBefore = document.getElementById("FileBeforeUpload"); if (vidFileBefore != null) { $('#note_before').hide(); var PathFileBefore = $('#FileBefore').val(); if (vidFileBefore.files.length == 0 && PathFileBefore == '') { alert('Nhập hình ảnh mặt trước.'); $('#loading').hide(); $('#note_before').show(); return; } } var vidFileAfter = document.getElementById("FileAfterUpload"); if (vidFileAfter != null) { $('#note_after').hide(); var PathFileAfter = $('#FileAfter').val(); if (vidFileAfter.files.length == 0 && PathFileAfter == '') { alert('Nhập hình ảnh mặt sau.'); $('#loading').hide(); $('#note_after').show(); return; } } document.form_payment.submit(); } }); } function vsw_form_submit_alert() { $('#loading').show(); if (verify_multi_browser(document.form_payment)) { $("#form_payment").find("input, textarea, button, select").removeAttr("disabled"); document.form_payment.submit(); } else { $('#loading').hide(); } } function format_money(Obj, event) {
    _DECIMAL_DELIMITOR = ","; var theKey; if (typeof (event) == "undefined") { theKey = window.event.keyCode; } else { theKey = (window.event) ? event.keyCode : event.which; } var v_vi_tri_con_tro = doGetCaretPosition(Obj); var v_is_vi_tri_con_tro_o_cuoi = (v_vi_tri_con_tro == Obj.value.length) ? 1 : 0; Obj.value = Obj.value.replace(/[^0-9,.-]/g, ''); var theStringNum = Obj.value; theSecondStringNum = ""; if (theStringNum == ".") { Obj.value = ""; return; } var the_first_char = theStringNum.substr(0, 1); if (the_first_char == "-") { theStringNum = theStringNum.substr(1, theStringNum.length - 1); } else { the_first_char = ""; } var theLen = theStringNum.length; pos = theStringNum.indexOf(".", 0)
    if (pos > 0) { arr_numstr = theStringNum.split("."); theFirstStringNum = theStringNum.substr(0, pos); theSecondStringNum = theStringNum.substr(pos + 1, theStringNum.length - pos); if (theSecondStringNum.substr(theSecondStringNum.length - 1, 1) == ".") { Obj.value = the_first_char + theStringNum.substr(0, theStringNum.length - 1); return; } theStringNum = theFirstStringNum; } if ((theKey >= 48 && theKey <= 57) || (theKey >= 96 && theKey <= 105) || (theKey == 8)) {
        var theNewString; var theSubString; var LastIndex; LastIndex = 0; theSubString = ""
        for (var i = 0; i < theStringNum.length; i++) {
            if (theStringNum.substring(i, i + 1) == _DECIMAL_DELIMITOR) {
                theSubString = theSubString + theStringNum.substring(LastIndex, i)
                LastIndex = i + 1;
            }
        } theSubString = theSubString + theStringNum.substring(LastIndex, theStringNum.length)
        theStringNum = theSubString; theNewString = ""
        if (theStringNum.length > 3) while (theStringNum.length > 3) { theSubString = theStringNum.substring(theStringNum.length - 3, theStringNum.length); theStringNum = theStringNum.substring(0, theStringNum.length - 3); theNewString = _DECIMAL_DELIMITOR + theSubString + theNewString; if (v_is_vi_tri_con_tro_o_cuoi == 1) { v_vi_tri_con_tro++; } } if (pos > 0) theNewString = theStringNum + theNewString + "." + theSecondStringNum; else
            theNewString = theStringNum + theNewString; if (theLen > 3) Obj.value = the_first_char + theNewString; try { Obj.onchange(); } catch (e) { ; }
    } setCaretPosition(Obj, v_vi_tri_con_tro);
} function FormatDate(t, e) { var n; n = void 0 === e ? window.event.keyCode : window.event ? e.keyCode : e.which; var a = t.value.length; if (8 == n || 37 == n || 39 == n || 40 == n) return 1; theStr = ""; for (var r = 0; r < a; r++)theChar = t.value.charCodeAt(r), theChar >= 48 & theChar <= 57 && (theStr += t.value.substring(r, r + 1)); return a = theStr.length, a >= 4 ? (theDate = theStr.substring(0, 2), theMonth = theStr.substring(2, 4), theYear = theStr.substring(4), t.value = theDate + "/" + theMonth + "/" + theYear) : a >= 2 ? (theDate = theStr.substring(0, 2), theMonth = theStr.substring(2), t.value = theDate + "/" + theMonth) : t.value = theStr, 1 } function doGetCaretPosition(oField) { var iCaretPos = 0; if (document.selection) { oField.focus(); var oSel = document.selection.createRange(); oSel.moveStart('character', -oField.value.length); iCaretPos = oSel.text.length; } else if (oField.selectionStart || oField.selectionStart == '0') iCaretPos = oField.selectionStart; return iCaretPos; } function setCaretPosition(oField, caretPos) {
    if (oField != null) {
        if (oField.createTextRange) { var range = oField.createTextRange(); range.move('character', caretPos); range.select(); } else {
            if (oField.selectionStart) { oField.focus(); oField.setSelectionRange(caretPos, caretPos); } else
                oField.focus();
        }
    }
} $(document).ready(function () { $("h3.toggle").click(function () { var value = 0; var targetContent = $(this).attr('for'); $("#" + targetContent).slideToggle(500); var targetcontrol = $(this).attr('data-control'); if (document.getElementById(targetcontrol).checked == true) { document.getElementById(targetcontrol).checked = false; $(this).removeClass('toggle_check'); value = 0; } else { document.getElementById(targetcontrol).checked = true; $(this).addClass('toggle_check'); value = 1; } var eventonchange = $(this).attr('data-onchange'); eval(eventonchange + "(" + value + ")"); }); }); Number.prototype.f_formatMoney = function (c, d, t) { var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0; return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ""); }; function vsw_form_name_submit(name_form) { $("#" + name_form).validate({ highlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success"); }, unhighlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error"); }, submitHandler: function () { $('#loading').show(); $("#" + name_form).find("input, textarea, button, select").removeAttr("disabled"); eval("document." + name_form + "submit()"); } }); } function dateCompare(p_str_date1, p_str_date2) { date1 = new Date(ddmmyyyy2mmddyyyy(p_str_date1)); date2 = new Date(ddmmyyyy2mmddyyyy(p_str_date2)); return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)); } function ddmmyyyy2mmddyyyy(vtheDate) {
    var theDate = vtheDate.replace(/_/gi, "0"); strSeparator = ""
    if (theDate.indexOf("/") != -1) strSeparator = "/"; if (theDate.indexOf("-") != -1) strSeparator = "-"; if (theDate.indexOf(".") != -1) strSeparator = "."; if (strSeparator == "") return ""; parts = theDate.split(strSeparator); day = parts[0]; month = parts[1]; year = parts[2]; return month + strSeparator + day + strSeparator + year;
} function isDate(strDate) {
    if (strDate.indexOf("/") == -1) { return false; } dt1 = strDate.split("/")
    dd1 = parseInt(dt1[0]); mm1 = parseInt(dt1[1]); yy1 = parseInt(dt1[2]); if (isNaN(dd1) || isNaN(mm1) || isNaN(yy1)) { return false; } dt2 = new Date(mm1 + '/' + dd1 + '/' + yy1)
    dd2 = dt2.getDate(); mm2 = dt2.getMonth() + 1; yy2 = dt2.getFullYear(); if (dd1 == dd2 && mm1 == mm2 && yy1 == yy2) return true; else
        return false;
} function format_string_to_money(t) { t.value = FormatCurrency(t.value) } function FormatCurrency(t) { var e, n; t = t.toString().replace(/\$|\,/g, ""), isNaN(t) && (t = "0"), e = t == (t = Math.abs(t)); var a = t.toString().split("."); a.length > 1 ? (n = new String(a[1])).length < 2 && (n += "0") : n = "", t = a[0]; for (var r = 0; r < Math.floor((t.length - (1 + r)) / 3); r++)t = t.substring(0, t.length - (4 * r + 3)) + "," + t.substring(t.length - (4 * r + 3)); return ret_value = "" == n ? (e ? "" : "-") + t : (e ? "" : "-") + t + "." + n, ret_value } function replace(t, e, n) { var a = t.length, r = e.length; if (0 == a || 0 == r) return t; var o = t.indexOf(e); if (!o && e != t.substring(0, r)) return t; if (-1 == o) return t; var _ = t.substring(0, o) + n; return o + r < a && (_ += replace(t.substring(o + r, a), e, n)), _ } function change_focus(t, e, n) { var a = 0, r = 0, o = 0; first_object_id = -1; var _; if ("9" == (_ = void 0 === n ? window.event.keyCode : window.event ? n.keyCode : n.which) && "select-one" == e.type || "select-one" != e.type && ("40" == _ || "38" == _ || "13" == _)) for (o = 0; r >= 0 && r < t.length && a < 2;) { if ("hidden" != (i = t.elements[r]).type && -1 == first_object_id && (first_object_id = r), 0 == o && i.name == e.name && "hidden" != i.type) { e.blur(), o = 1, "38" != _ ? (r += 1) == t.length && (r = first_object_id) : r == first_object_id ? r = t.length - 1 : r -= 1; var i = t.elements[r] } if (1 == o && "hidden" != i.type && !i.disabled && !i.disabled && "true" != i.hide) return i.focus(), !0; "38" != _ ? (r += 1) == t.length && (r = 0, a += 1) : (r -= 1) == first_object_id && (r = t.length - 1, a += 1) } return !0 } function char2number(p_str_value) { var v_ret_value; v_ret_value = replace(p_str_value, ",", ""); if (!isfloat(v_ret_value)) { v_ret_value = 0; } return v_ret_value; } function count_char(what_str, what_char) { if (what_str == "") return 0; var str; var count; var pos; count = 0; str = what_str; while (str.indexOf(what_char, 0) >= 0) { count++; pos = str.indexOf(what_char, 0) + 1; str = str.substring(pos); } return count; } function InputNumberOnly(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 46)) return true; return false;
} function vsw_form_validate_submit(form_id) { $("#" + form_id).validate({ highlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success"); }, unhighlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error"); }, submitHandler: function () { $('#loading').show(); $("#" + form_id).find("input, textarea, button, select").removeAttr("disabled"); eval("document." + form_id + ".submit()"); } }); } function send_claim_submit(form_id) { $("#" + form_id).validate({ highlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success"); }, unhighlight: function (element, errorClass, validClass) { $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error"); }, submitHandler: function () { $('#loading').show(); $("#" + form_id).find("input, textarea, button, select").removeAttr("disabled"); var vidFileBefore = document.getElementById("FileBeforeUpload"); if (vidFileBefore != null) { $('#note_before').hide(); var PathFileBefore = $('#FileBefore').val(); if (vidFileBefore.files.length == 0 && PathFileBefore == '') { alert('Nhập hình ảnh mặt trước.'); $('#loading').hide(); $('#note_before').show(); return; } } var vidFileAfter = document.getElementById("FileAfterUpload"); if (vidFileAfter != null) { $('#note_after').hide(); var PathFileAfter = $('#FileAfter').val(); if (vidFileAfter.files.length == 0 && PathFileAfter == '') { alert('Nhập hình ảnh mặt sau.'); $('#loading').hide(); $('#note_after').show(); return; } } eval("document." + form_id + ".submit()"); } }); } function list_count_element(the_list, the_separator) { if (the_list == "") return -1; arr_value = the_list.split(the_separator); if (arr_value.length > 0) { return arr_value.length; } return -1; } function cleanName(name) { name = name.replace(/\s+/gi, '-'); return name.replace(/[^a-zA-Z0-9.\-]/gi, ''); } function list_append(the_list, the_value, the_separator) { var list = the_list; the_value = the_value + ""; if (list == "") list = the_value; else if (the_value != "") list = list + the_separator + the_value; return list; } function file_upload_onclick() { $("#file_upload").click(); } function LoadTaiLieu(e, form_id) { load_tai_lieu_ajax(form_id); } function delete_file(t) { var e = document.form_claim_request.listDeleteFile.value; e = list_append(e, t, ","); document.form_claim_request.listDeleteFile.value = e; $("#tr_images_" + t).hide(); } $(document).ready(function () { $('ul.nav-title li').click(function () { var tab_id = $(this).attr('data-tab'); $('ul.nav-title li').removeClass('current'); $('.tab-content-nav-title').removeClass('current'); $(this).addClass('current'); $("#" + tab_id).addClass('current'); }) })
function buy_online_form(p_ma_ngan_hang) { $('#PayCode').val(p_ma_ngan_hang); $.Zebra_Dialog('Xác nhận thanh toán qua thẻ ' + p_ma_ngan_hang, { 'type': 'confirmation', 'overlay_close': false, 'title': 'Thông báo!', 'buttons': [{ caption: 'Đồng ý', callback: function () { $('#loading').show(); $("#form_payment").find("input, textarea, button, select").removeAttr("disabled"); document.form_payment.submit(); } }, { caption: 'Hủy', callback: function () { return } }] }); } function LoadNguoiThamGia(e) { $('#loading').show(); var test_value = $("#postedFile").val(); var extension = test_value.split('.').pop().toLowerCase(); if ($.inArray(extension, ['xls', 'xlsx']) == -1) { alert("File dữ liệu không hợp lệ!"); $('#loading').hide(); return false; } var postData = new FormData(); postData.append("postedFile", document.getElementById("postedFile").files[0]); var ranNum = Math.floor(Math.random() * 999999); $.ajax({ type: "post", url: "/Ajax/UploadNguoiThamGia.html", data: postData, dataType: "xml", cache: false, contentType: false, processData: false, success: function (req) { $(req).find('Item').each(function () { var content = $(this).find('Html').text().trim(); if (content != '') { alert(content); } $('#loading').hide(); if (content == '') { location.reload() } }); }, error: function (req) { $('#loading').hide(); } }); };
function LoadHS(e) {
    $('#loading').show();
    var test_value = $("#postedFile").val();
    var extension = test_value.split('.').pop().toLowerCase();
    if ($.inArray(extension, ['xls', 'xlsx']) == -1) {
        alert("File dữ liệu không hợp lệ!");
        $('#loading').hide();
        return false;
    }
    var postData = new FormData();
    postData.append("postedFile", document.getElementById("postedFile").files[0]);
    var ranNum = Math.floor(Math.random() * 999999);
    $.ajax({
        type: "post"
        , url: "/Ajax/UploadHS.html"
        , data: postData
        , dataType: "xml"
        , cache: false
        , contentType: false
        , processData: false
        , success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text().trim();
                if (content != '') {
                    alert(content);
                }
                $('#loading').hide();
                if (content == '') {
                    location.reload()
                }
            });
        }, error: function (req) { $('#loading').hide(); }
    });
};
$(document).ready(function () {
    //-------------- Box Promotion --------------
    //$(window).load(function () {

    var _boxPromotion = $(".box-promotion");
    var _boxPromotionItem = $(".box-promotion .box-promotion-item");
    var _boxPromotionImage = $(".box-promotion .box-promotion-item .box-banner img");
    var _boxPromotionClose = $(".box-promotion .box-promotion-close");

    var _widthSite = $(window).width();
    var _heightSite = $(window).height();

    var _widthBoxImage = $(_boxPromotionImage).width();
    var _heightBoxImage = $(_boxPromotionImage).height();

    if (_widthBoxImage < 100) _widthBoxImage = 500;
    if (_heightBoxImage < 100) _heightBoxImage = 300;

    $(_boxPromotionItem).css({
        "width": "" + _widthBoxImage + "px"
        , "height": "" + _heightBoxImage + "px"
        , "left": "" + (_widthSite - _widthBoxImage) / 2 + "px"
        , "top": "" + (_heightSite - _heightBoxImage) / 2 + "px"
    });

    setTimeout(function () {
        $(_boxPromotion).removeClass("box-promotion-active");
    }, 30000);

    $(_boxPromotion).click(function () {
        $(_boxPromotion).removeClass("box-promotion-active");
    });

    $(_boxPromotionClose).click(function () {
        $(_boxPromotion).removeClass("box-promotion-active");
    });

    $("html").keyup(function (e) {
        if (_boxPromotion != null)
            if (e.which == 27) {
                $(_boxPromotion).removeClass("box-promotion-active");

                _boxPromotion = null;
            }
    });
    //-------------- Kết thúc Box Promotion --------------
});

function LoadCovid(e) {
    $('#loading').show();
    var test_value = $("#postedFile").val();
    var extension = test_value.split('.').pop().toLowerCase();
    if ($.inArray(extension, ['xls', 'xlsx']) == -1) {
        alert("File dữ liệu không hợp lệ!");
        $('#loading').hide();
        return false;
    }
    var postData = new FormData();
    postData.append("postedFile", document.getElementById("postedFile").files[0]);
    var ranNum = Math.floor(Math.random() * 999999);
    $.ajax({
        type: "post"
        , url: "/Ajax/UploadCovid.html"
        , data: postData
        , dataType: "xml"
        , cache: false
        , contentType: false
        , processData: false
        , success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text().trim();
                if (content != '') {
                    alert(content);
                }
                $('#loading').hide();
                if (content == '') {
                    location.reload()
                }
            });
        }, error: function (req) { $('#loading').hide(); }
    });
};