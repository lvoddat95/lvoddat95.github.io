function load_ty_le_giam_mien_thuong(value) {
    var dataString = 'SoTienMienThuong=' + value;
    $.ajax({
        type: "get",
        url: "/Ajax/GetTyLeMienThuong.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                var total = $(this).find('Params').text();
                $("#total_phi_vcx").html(content);
                $("#total_phi_vcx_buy").html(content);
                $("#TOTAL_VCX").val(total);
                load_total_all_phi_oto();
            });
        },
        error: function (req) { }
    });
}

function load_ty_le_dkbs() {
    var inpfields = document.form_payment.getElementsByTagName('input');
    var nr_inpfields = inpfields.length;
    var list_dkbs = '';
    for (var i = 0; i < nr_inpfields; i++) {
        if (inpfields[i].type == 'checkbox' && inpfields[i].checked == true && inpfields[i].name == 'DieuKhoanBoSung') {
            list_dkbs += (list_dkbs == '' ? '' : ',') + inpfields[i].value;
        }
    }
    var dataString = 'ListDkbs=' + list_dkbs;
    $.ajax({
        type: "get",
        url: "/Ajax/GetTyLeDkbs.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                var total = $(this).find('Params').text();
                $("#total_phi_vcx").html(content);
                $("#total_phi_vcx_buy").html(content);
                $("#TOTAL_VCX").val(total);
                load_total_all_phi_oto();
            });
        },
        error: function (req) { }
    });
}

function load_phi_tai_nan_nguoi_ngoi_tren_xe(value) {
    var so_tien = document.form_payment.SoTienTNNNTX.value;
    var so_cho_ngoi = document.form_payment.SoChoNgoi.value;
    var ThoiHanBaoHiem = document.form_payment.ThoiHanBaoHiem.value;
    var dataString = 'TRANG_THAI=' + value + '&SOTIEN=' + so_tien + '&SoChoNgoi=' + so_cho_ngoi + '&ThoiHanBaoHiem=' + ThoiHanBaoHiem;
    $.ajax({
        type: "get",
        url: "/Ajax/GetPhiTNNNTX.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                var total = $(this).find('Params').text();
                $("#total_tnnntx_text").html(content);
                $("#total_tnnntx_buy").html(content);
                $("#TOTAL_TNNNTX").val(total);
                load_total_all_phi_oto();
            });
        },
        error: function (req) { }
    });
}

function load_phi_tndsbb_oto(value) {
    var dataString = 'TRANG_THAI=' + value;
    $.ajax({
        type: "get",
        url: "/Ajax/GetPhiTNDSBB.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                var total = $(this).find('Params').text();
                $("#total_tndsbb").html(content);
                $("#total_tndsbb_buy").html(content);
                $("#TOTAL_TNDSBB").val(total);
                load_total_all_phi_oto();
            });
        },
        error: function (req) { }
    });
}

function load_total_all_phi_oto() {
    var total_vcx = document.form_payment.TOTAL_VCX.value;
    var total_tnnntx = document.form_payment.TOTAL_TNNNTX.value;
    var total_tndsbb = document.form_payment.TOTAL_TNDSBB.value;
    var total = parseFloat(total_vcx) + parseFloat(total_tnnntx) + parseFloat(total_tndsbb);
    $('#total_all').html(total.f_formatMoney(0, ".", ",") + ' VNĐ');
}

function load_phi_tndsbb_xemay(LoaiXe = '', so_cho_ngoi = 0, ThoiHanBaoHiem = 12) {
    var dataString = 'LoaiXe=' + LoaiXe + '&SoChoNgoi=' + so_cho_ngoi + '&ThoiHanBaoHiem=' + ThoiHanBaoHiem;
    $.ajax({
        type: "get",
        url: "/Ajax/GetPhiTNDSBBXeMay.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                var total = $(this).find('Params').text();
                $("#total_tndsbb").html(content);
                $("#total_tndsbb_buy").html(content);
                $("#TOTAL_TNDSBB").val(total);
                load_total_all_phi_xemay();
            });
        },
        error: function (req) { }
    });
}
function load_total_all_phi_xemay() {
    var total_vcx = document.form_payment.TOTAL_VCX.value;
    var total_tnnntx = document.form_payment.TOTAL_TNNNTX.value;
    var total_tndsbb = document.form_payment.TOTAL_TNDSBB.value;
    var total = parseFloat(total_vcx) + parseFloat(total_tnnntx) + parseFloat(total_tndsbb);
    $('#total_all').html(total.f_formatMoney(0, ".", ",") + ' VNĐ');
}

function check_ma_giam_gia(value) {
    var dataString = 'Code=' + value;
    $.ajax({
        type: "get",
        url: "/Ajax/CheckSaleOff.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                $("#notesalecode").html(content);
            });
        },
        error: function (req) { }
    });
}

function imei_onkeyup(value) {
    $("#id_status_imei").removeClass();
    $('#id_status_imei').addClass('loading_imei');
    document.getElementById("id_status_imei").style.display = "block";
    if (value.length == 15) {
        var dataString = 'IMEI=' + value;
        $.ajax({
            type: "get",
            url: "/Ajax/CheckImei.html",
            data: dataString,
            dataType: "xml",
            success: function (req) {
                $(req).find('Item').each(function () {
                    var check = $(this).find('Html').text();
                    if (check == '1') {
                        $('#id_status_imei').removeClass('loading_imei');
                        $('#id_status_imei').addClass('fa');
                        $('#id_status_imei').addClass('fa-check');
                    } else {
                        $('#id_status_imei').removeClass('loading_imei');
                        $('#id_status_imei').addClass('fa');
                        $('#id_status_imei').addClass('fa-times');
                    }
                });
            },
            error: function (req) {
                $('#id_status_imei').removeClass('loading_imei');
                $('#id_status_imei').addClass('fa');
                $('#id_status_imei').addClass('fa-times');
            }
        });
    }
}

function load_tai_lieu_ajax(form_id) {
    $('#loading').show();
    var total_file = eval("document." + form_id + ".CountImages.value");
    var postData = new FormData();
    var ins = document.getElementById('file_upload').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("files[]", document.getElementById("file_upload").files[x]);
    }
    postData.append('ToTal', total_file);
    var ranNum = Math.floor(Math.random() * 999999);
    $.ajax({
        type: "post",
        url: "/Ajax/UploadImages.html",
        data: postData,
        dataType: "xml",
        cache: false,
        contentType: false,
        processData: false,
        success: function (req) {
            $(req).find('Item').each(function () {
                $('#loading').hide();
                var content = $(this).find('Html').text();
                var error = $(this).find('Params').text();
                var total = $(this).find('JS').text();
                $('#ul_list_images').append(content);
                eval("document." + form_id + ".CountImages.value = '" + total + "'");
                if (error != '') {
                    alert(error);
                }
            });
        },
        error: function (req) {
            $('#loading').hide();
        }
    });
}

function load_ty_le_dkbs_g14() {
    var inpfields = document.form_payment.getElementsByTagName('input');
    var nr_inpfields = inpfields.length;
    var list_dkbs = '';
    for (var i = 0; i < nr_inpfields; i++) {
        if (inpfields[i].type == 'checkbox' && inpfields[i].checked == true && inpfields[i].name == 'DieuKhoanBoSung') {
            list_dkbs += (list_dkbs == '' ? '' : ',') + inpfields[i].value;
        }
    }
    var dataString = 'ListDkbs=' + list_dkbs;
    $.ajax({
        type: "get",
        url: "/Ajax/GetTyLeDkbsG14.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                var content = $(this).find('Html').text();
                $("#total_phi_buy").html(content);
            });
        },
        error: function (req) { }
    });
}

function update_person_ajax(index, person_id) {
    $('#loading').show();
    var total = parseFloat(document.form_payment.Total_Persons.value);
    var Name = eval("document.form_payment.Name" + (index >= 0 ? index.toString() : "") + ".value");
    var Gender = eval("document.form_payment.Gender" + (index >= 0 ? index.toString() : "") + ".value");
    var Relationship = eval("document.form_payment.Relationship" + (index >= 0 ? index.toString() : "") + ".value");
    var Percent = eval("document.form_payment.Percent" + (index >= 0 ? index.toString() : "") + ".value");
    if (Name == '') {
        $('#loading').hide();
        alertZebra('Thông báo', 'Nhập họ và tên.');
        return;
    }
    if (Gender == '') {
        $('#loading').hide();
        alertZebra('Thông báo', 'Chọn giới tính.');
        return;
    }
    var dataString = 'PersonID=' + person_id + '&Index=' + index + '&Name=' + Name + '&Gender=' + Gender + '&Relationship=' + Relationship + '&Percent=' + Percent + '&Total=' + total;
    $.ajax({
        type: "get",
        url: "/Ajax/UpdatePerson.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                $('#loading').hide();
                var content = $(this).find('Html').text();
                var content_mobile = $(this).find('Params').text();
                if (index >= 0) {
                    $("#tr_person_destop_" + index).html(content);
                    $("#div_person_mobile_" + index).html(content_mobile);
                    $('#id_close_modal').click();
                    $(".modal-backdrop").remove();
                    return;
                } else {
                    $("#table_person tbody").append(content);
                    $("#table_person_mobile tbody").append(content_mobile);
                    document.form_payment.Total_Persons.value = (total + 1);
                    $('#modal_payment').hide();
                    $('#id_close_modal').click();
                    $(".modal-backdrop").remove();
                    return;
                }
            });
        },
        error: function (req) {
            $('#loading').hide();
        }
    });
}

function update_person_mobile_ajax(index, person_id) {
    $('#loading').show();
    var total = parseFloat(document.form_payment.Total_Persons.value);
    var Name = eval("document.form_payment.NameMobile" + (index >= 0 ? index.toString() : "") + ".value");
    var Gender = eval("document.form_payment.GenderMobile" + (index >= 0 ? index.toString() : "") + ".value");
    var Relationship = eval("document.form_payment.RelationshipMobile" + (index >= 0 ? index.toString() : "") + ".value");
    var Percent = eval("document.form_payment.PercentMobile" + (index >= 0 ? index.toString() : "") + ".value");
    if (Name == '') {
        $('#loading').hide();
        alertZebra('Thông báo', 'Nhập họ và tên.');
        return;
    }
    if (Gender == '') {
        $('#loading').hide();
        alertZebra('Thông báo', 'Chọn giới tính.');
        return;
    }
    var dataString = 'PersonID=' + person_id + '&Index=' + index + '&Name=' + Name + '&Gender=' + Gender + '&Relationship=' + Relationship + '&Percent=' + Percent + '&Total=' + total;
    $.ajax({
        type: "get",
        url: "/Ajax/UpdatePerson.html",
        data: dataString,
        dataType: "xml",
        success: function (req) {
            $(req).find('Item').each(function () {
                $('#loading').hide();
                var content = $(this).find('Html').text();
                var content_mobile = $(this).find('Params').text();
                if (index >= 0) {
                    $("#tr_person_destop_" + index).html(content);
                    $("#div_person_mobile_" + index).html(content_mobile);
                    $('#id_close_modal').click();
                    $(".modal-backdrop").remove();
                    return;
                } else {
                    $("#table_person tbody").append(content);
                    $("#table_person_mobile tbody").append(content_mobile);
                    document.form_payment.Total_Persons.value = (total + 1);
                    $('#modal_payment').hide();
                    $('#id_close_modal').click();
                    $(".modal-backdrop").remove();
                    return;
                }
            });
        },
        error: function (req) {
            $('#loading').hide();
        }
    });
}

function del_person_ajax(name, index, person_id) {
    $('#loading').show();
    $.Zebra_Dialog('Bạn muốn xóa người thụ hưởng ' + name + ' khỏi danh sách ?', {
        'type': 'confirmation',
        'overlay_close': false,
        'title': 'Thông báo',
        'buttons': [{
            caption: 'Yes',
            callback: function () {
                if (index < 0) {
                    $('#loading').hide();
                    alertZebra('Thông báo', 'Không có dòng nào để xóa.');
                    return;
                }
                var dataString = 'PersonID=' + person_id + '&Index=' + index;
                $.ajax({
                    type: "get",
                    url: "/Ajax/DeletePerson.html",
                    data: dataString,
                    dataType: "xml",
                    success: function (req) {
                        $(req).find('Item').each(function () {
                            $('#loading').hide();
                            $("#tr_person_destop_" + index).hide();
                            $("#div_person_mobile_" + index).hide();
                            return;
                        });
                    },
                    error: function (req) {
                        $('#loading').hide();
                    }
                });
            }
        }, {
            caption: 'No',
            callback: function () {
                return
            }
        }]
    });
}