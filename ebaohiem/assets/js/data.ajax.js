//load khach hang theo ma khach hang
function lay_cac_thong_tin_khach_hang_theo_ma_khach_hang(p_change) {
    p_change = (typeof (p_change) == 'undefined') ? "1" : p_change;
    if (p_change == "1") {
        $('#loading').show();
    }
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var ma_khach_hang = document.forms[0].C_MA_KHACH_HANG.value;
    if (ngan_hang == '') {
        if (p_change == "1") {
            alertZebraContent('Bạn phải chọn ngân hàng');
            $('#C_MA_NGAN_HANG').focus();
            $('#loading').hide();
        }
        return;
    }
    if (ma_khach_hang == '') {
        if (p_change == "1") {
            alertZebraContent('Bạn phải nhập mã khách hàng');
            $('#C_MA_KHACH_HANG').focus();
            $('#loading').hide();
        }
        return;
    }

    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadCustomerByCode?MAKHACHHANG=' + ma_khach_hang + '&NGANHANG=' + ngan_hang + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                $('#loading').hide();
                var xml = getNodeValue(getElementsByTagName('Html'));
                if (xml == '') {
                    if (p_change == "1") {
                        alertZebraContent('Không tồn tại khách hàng có mã: ' + ma_khach_hang);
                        //document.forms[0].C_NHOM_KH.value = '';
                        //$('#C_NHOM_KH').trigger("change");
                        //document.forms[0].C_DOI_TUONG.value = '';
                        //$('#C_DOI_TUONG').trigger("change");
                        //document.forms[0].C_PHAN_KHUC.value = '';
                        //$('#C_PHAN_KHUC').trigger("change");
                        //document.forms[0].C_EMAIL.value = '';
                        //document.forms[0].C_TEN_KHACH_HANG.value = '';
                        //document.forms[0].C_DATE_OF_BIRTH.value = '';
                        //document.forms[0].C_GENDER.value = 0;
                        //$('#C_GENDER').trigger("change");
                        //document.forms[0].C_ADDRESS.value = '';
                        //document.forms[0].C_PHONE.value = '';
                        //document.forms[0].C_CMT.value = '';
                        //document.forms[0].C_NGAY_CAP_CMT.value = '';
                        //document.forms[0].C_NOI_CAP_CMT.value = '';
                        //document.forms[0].FK_CUSTOMER.value = '';
                        //document.forms[0].C_TEN_DOANH_NGHIEP.value = '';
                        //document.forms[0].C_MST.value = '';
                        //document.forms[0].C_DIA_CHI_DN.value = '';
                        $('#C_MA_KHACH_HANG').focus();
                    }
                } else {

                    var pk_customer = $(xml).find("pk_customer").text();
                    var nhom_khach_hang = $(xml).find("nhom_khach_hang").text();
                    var doi_tuong = $(xml).find("doi_tuong").text();
                    var phan_khuc = $(xml).find("phan_khuc").text();
                    var email = $(xml).find("email").text();
                    var ten_kh = $(xml).find("ten_kh").text();
                    var ngay_sinh = $(xml).find("ngay_sinh").text();
                    var gioi_tinh = $(xml).find("gioi_tinh").text();
                    var dia_chi = $(xml).find("dia_chi").text();
                    var dien_thoai = $(xml).find("dien_thoai").text();
                    var cmt = $(xml).find("cmt").text();
                    var ngay_cap = $(xml).find("ngay_cap").text();
                    var noi_cap = $(xml).find("noi_cap").text();
                    var madn = $(xml).find("madn").text();
                    var tendn = $(xml).find("tendn").text();
                    var mst = $(xml).find("mst").text();
                    var dia_chi_dn = $(xml).find("dia_chi_dn").text();
                    var dia_chi_dn = $(xml).find("dia_chi_dn").text();
                    var chuc_vu = $(xml).find("chuc_vu").text();
                    var ma_cif = $(xml).find("ma_cif").text();
                    var type_cmt = $(xml).find("type_cmt").text();
                    var city = $(xml).find("city").text();
                    var dia_chi_tt = $(xml).find("dia_chi_tt").text();
                    if (document.forms[0].C_NHOM_KH) {
                        document.forms[0].C_NHOM_KH.value = nhom_khach_hang;
                        $('#C_NHOM_KH').trigger("change");
                    }
                    if (document.forms[0].C_DOI_TUONG) {
                        document.forms[0].C_DOI_TUONG.value = doi_tuong;
                        $('#C_DOI_TUONG').trigger("change");
                    }
                    if (document.forms[0].C_PHAN_KHUC) {
                        document.forms[0].C_PHAN_KHUC.value = phan_khuc;
                        $('#C_PHAN_KHUC').trigger("change");
                    }
                    if (document.forms[0].C_EMAIL) {
                        document.forms[0].C_EMAIL.value = email;
                    }
                    if (document.forms[0].C_TEN_KHACH_HANG) {
                        document.forms[0].C_TEN_KHACH_HANG.value = ten_kh;
                        format_name(document.forms[0].C_TEN_KHACH_HANG);
                    }
                    if (document.forms[0].C_DATE_OF_BIRTH) {
                        document.forms[0].C_DATE_OF_BIRTH.value = ngay_sinh;
                    }
                    if (document.forms[0].C_GENDER) {
                        document.forms[0].C_GENDER.value = gioi_tinh;
                        $('#C_GENDER').trigger("change");
                    }
                    if (document.forms[0].C_ADDRESS) {
                        document.forms[0].C_ADDRESS.value = dia_chi;
                    }
                    if (document.forms[0].C_PHONE) {
                        document.forms[0].C_PHONE.value = dien_thoai;
                    }
                    if (document.forms[0].C_CMT) {
                        document.forms[0].C_CMT.value = cmt;
                    }
                    if (document.forms[0].C_NGAY_CAP_CMT) {
                        document.forms[0].C_NGAY_CAP_CMT.value = ngay_cap;
                    }
                    if (document.forms[0].C_NOI_CAP_CMT) {
                        document.forms[0].C_NOI_CAP_CMT.value = noi_cap;
                    }
                    if (document.forms[0].FK_CUSTOMER) {
                        document.forms[0].FK_CUSTOMER.value = pk_customer;
                    }
                    if (document.forms[0].C_MA_DOANH_NGHIEP) {
                        document.forms[0].C_MA_DOANH_NGHIEP.value = madn;
                    }
                    if (document.forms[0].C_TEN_DOANH_NGHIEP) {
                        document.forms[0].C_TEN_DOANH_NGHIEP.value = tendn;
                    }
                    if (document.forms[0].C_MST) {
                        document.forms[0].C_MST.value = mst;
                    }
                    if (document.forms[0].C_DIA_CHI_DN) {
                        document.forms[0].C_DIA_CHI_DN.value = dia_chi_dn;
                    }
                    if (document.forms[0].C_CHUC_VU) {
                        document.forms[0].C_CHUC_VU.value = chuc_vu;
                    }
                    if (document.forms[0].C_MA_CIF) {
                        document.forms[0].C_MA_CIF.value = ma_cif;
                    }
                    if (document.forms[0].C_TYPE_CMT) {
                        document.forms[0].C_TYPE_CMT.value = type_cmt;
                        $('#C_TYPE_CMT').trigger("change");
                    }
                    if (document.forms[0].C_CITY) {
                        document.forms[0].C_CITY.value = city;
                        $('#C_CITY').trigger("change");
                    }
                    if (document.forms[0].C_NOI_CAPHC) {
                        document.forms[0].C_NOI_CAPHC.value = noi_cap;
                    }
                    if (document.forms[0].C_ADDRESS_TT) {
                        document.forms[0].C_ADDRESS_TT.value = dia_chi_tt;
                    }
                    change_ten_chu_xe();
                    change_cmnd_chu_xe();
                    change_dia_chi_chu_xe();
                    change_ten_nguoi_nhan_hoa_don();
                    change_dien_thoai_nguoi_nhan_hoa_don();
                    $('#C_HOP_DONG').focus();
                }
            }
        }
        , 'onError': function (req) { $('#loading').hide(); }
    })
}
function lay_cac_thong_tin_khach_hang_theo_cmt(p_change) {
    p_change = (typeof (p_change) == 'undefined') ? "1" : p_change;
    if (p_change == "1") {
        $('#loading').show();
    }
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var cmt = document.forms[0].C_CMT.value;
    if (ngan_hang == '') {
        if (p_change == "1") {
            alertZebraContent('Bạn phải chọn ngân hàng');
            $('#C_MA_NGAN_HANG').focus();
            $('#loading').hide();
        }
        return;
    }
    if (cmt == '') {
        if (p_change == "1") {
            alertZebraContent('Bạn phải nhập chứng minh thư hoặc hộ chiếu');
            $('#C_CMT').focus();
            $('#loading').hide();
        }
        return;
    }

    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadCustomerByCMT?CMT=' + cmt + '&NGANHANG=' + ngan_hang + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                $('#loading').hide();
                var xml = getNodeValue(getElementsByTagName('Html'));
                if (xml == '') {
                    if (p_change == "1") {
                        alertZebraContent('Không tồn tại khách hàng có cmt: ' + cmt);
                        //document.forms[0].C_MA_KHACH_HANG.value = '';
                        //document.forms[0].C_NHOM_KH.value = '';
                        //$('#C_NHOM_KH').trigger("change");
                        //document.forms[0].C_DOI_TUONG.value = '';
                        //$('#C_DOI_TUONG').trigger("change");
                        //document.forms[0].C_PHAN_KHUC.value = '';
                        //$('#C_PHAN_KHUC').trigger("change");
                        //document.forms[0].C_EMAIL.value = '';
                        //document.forms[0].C_TEN_KHACH_HANG.value = '';
                        //document.forms[0].C_DATE_OF_BIRTH.value = '';
                        //document.forms[0].C_GENDER.value = 0;
                        //$('#C_GENDER').trigger("change");
                        //document.forms[0].C_ADDRESS.value = '';
                        //document.forms[0].C_PHONE.value = '';
                        //document.forms[0].C_NGAY_CAP_CMT.value = '';
                        //document.forms[0].C_NOI_CAP_CMT.value = '';
                        //document.forms[0].FK_CUSTOMER.value = '';
                        //document.forms[0].C_TEN_DOANH_NGHIEP.value = '';
                        //document.forms[0].C_MST.value = '';
                        //document.forms[0].C_DIA_CHI_DN.value = '';
                        $('#C_CMT').focus();
                    }
                }
                else {
                    var pk_customer = $(xml).find("pk_customer").text();
                    var ma_khach_hang = $(xml).find("ma_khach_hang").text();
                    var nhom_khach_hang = $(xml).find("nhom_khach_hang").text();
                    var nhom_khach_hang = $(xml).find("nhom_khach_hang").text();
                    var doi_tuong = $(xml).find("doi_tuong").text();
                    var phan_khuc = $(xml).find("phan_khuc").text();
                    var email = $(xml).find("email").text();
                    var ten_kh = $(xml).find("ten_kh").text();
                    var ngay_sinh = $(xml).find("ngay_sinh").text();
                    var gioi_tinh = $(xml).find("gioi_tinh").text();
                    var dia_chi = $(xml).find("dia_chi").text();
                    var dien_thoai = $(xml).find("dien_thoai").text();
                    var ngay_cap = $(xml).find("ngay_cap").text();
                    var noi_cap = $(xml).find("noi_cap").text();
                    var madn = $(xml).find("madn").text();
                    var tendn = $(xml).find("tendn").text();
                    var mst = $(xml).find("mst").text();
                    var dia_chi_dn = $(xml).find("dia_chi_dn").text();
                    var chuc_vu = $(xml).find("chuc_vu").text();
                    var ma_cif = $(xml).find("ma_cif").text();
                    var type_cmt = $(xml).find("type_cmt").text();
                    var city = $(xml).find("city").text();
                    var dia_chi_tt = $(xml).find("dia_chi_tt").text();

                    document.forms[0].C_MA_KHACH_HANG.value = ma_khach_hang;
                    if (document.forms[0].C_NHOM_KH) {
                        document.forms[0].C_NHOM_KH.value = nhom_khach_hang;
                        $('#C_NHOM_KH').trigger("change");
                    }
                    if (document.forms[0].C_DOI_TUONG) {
                        document.forms[0].C_DOI_TUONG.value = doi_tuong;
                        $('#C_DOI_TUONG').trigger("change");
                    }
                    if (document.forms[0].C_PHAN_KHUC) {
                        document.forms[0].C_PHAN_KHUC.value = phan_khuc;
                        $('#C_PHAN_KHUC').trigger("change");
                    }
                    if (document.forms[0].C_EMAIL) {
                        document.forms[0].C_EMAIL.value = email;
                    }
                    if (document.forms[0].C_TEN_KHACH_HANG) {
                        document.forms[0].C_TEN_KHACH_HANG.value = ten_kh;
                        format_name(document.forms[0].C_TEN_KHACH_HANG);
                    }
                    if (document.forms[0].C_DATE_OF_BIRTH) {
                        document.forms[0].C_DATE_OF_BIRTH.value = ngay_sinh;
                    }
                    if (document.forms[0].C_GENDER) {
                        document.forms[0].C_GENDER.value = gioi_tinh;
                        $('#C_GENDER').trigger("change");
                    }
                    if (document.forms[0].C_ADDRESS) {
                        document.forms[0].C_ADDRESS.value = dia_chi;
                    }
                    if (document.forms[0].C_PHONE) {
                        document.forms[0].C_PHONE.value = dien_thoai;
                    }
                    if (document.forms[0].C_CMT) {
                        document.forms[0].C_CMT.value = cmt;
                    }
                    if (document.forms[0].C_NGAY_CAP_CMT) {
                        document.forms[0].C_NGAY_CAP_CMT.value = ngay_cap;
                    }
                    if (document.forms[0].C_NOI_CAP_CMT) {
                        document.forms[0].C_NOI_CAP_CMT.value = noi_cap;
                    }
                    if (document.forms[0].FK_CUSTOMER) {
                        document.forms[0].FK_CUSTOMER.value = pk_customer;
                    }
                    if (document.forms[0].C_MA_DOANH_NGHIEP) {
                        document.forms[0].C_MA_DOANH_NGHIEP.value = madn;
                    }
                    if (document.forms[0].C_TEN_DOANH_NGHIEP) {
                        document.forms[0].C_TEN_DOANH_NGHIEP.value = tendn;
                    }
                    if (document.forms[0].C_MST) {
                        document.forms[0].C_MST.value = mst;
                    }
                    if (document.forms[0].C_DIA_CHI_DN) {
                        document.forms[0].C_DIA_CHI_DN.value = dia_chi_dn;
                    }
                    if (document.forms[0].C_CHUC_VU) {
                        document.forms[0].C_CHUC_VU.value = chuc_vu;
                    }
                    if (document.forms[0].C_MA_CIF) {
                        document.forms[0].C_MA_CIF.value = ma_cif;
                    }
                    if (document.forms[0].C_TYPE_CMT) {
                        document.forms[0].C_TYPE_CMT.value = type_cmt;
                        $('#C_TYPE_CMT').trigger("change");
                    }
                    if (document.forms[0].C_CITY) {
                        document.forms[0].C_CITY.value = city;
                        $('#C_CITY').trigger("change");
                    }
                    if (document.forms[0].C_NOI_CAPHC) {
                        document.forms[0].C_NOI_CAPHC.value = noi_cap;
                    }
                    if (document.forms[0].C_ADDRESS_TT) {
                        document.forms[0].C_ADDRESS_TT.value = dia_chi_tt;
                    }
                    change_ten_chu_xe();
                    change_cmnd_chu_xe();
                    change_dia_chi_chu_xe();
                    change_ten_nguoi_nhan_hoa_don();
                    change_dien_thoai_nguoi_nhan_hoa_don();
                    $('#C_HOP_DONG').focus();
                }
            }
        }
        , 'onError': function (req) { $('#loading').hide(); }
    })
}
function load_pham_vi_bao_hiem() {
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var RecordID = document.forms[0].RecordID.value;
    var so_tien = 0;
    if (document.forms[0].C_SO_TIEN_VAY) {
        so_tien = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    }
    if (document.forms[0].C_GIA_TRI_BH0) {
        so_tien = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    }
    var khoi_kh = '';
    if (document.forms[0].C_KHOI_KHACH_HANG) {
        khoi_kh = document.forms[0].C_KHOI_KHACH_HANG.value;
    }
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var doi_tuong = '';
    if (document.forms[0].C_DOI_TUONG) {
        doi_tuong = document.forms[0].C_DOI_TUONG.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhamViBH?GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&KHOI_KH=' + khoi_kh + '&PolicyType=' + policy_type + '&SoTien=' + so_tien + '&SoThang=' + so_thang + '&RecordID=' + RecordID + '&NgaySinh=' + ngaysinh + '&DoiTuong=' + doi_tuong + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                var total = getNodeValue(getElementsByTagName('Params'));
                $('#phamvibaohiem').html(content);
                $('#TotalRowPhamVi').val(total);
                so_tien_vay_onchange(document.forms[0].C_GIA_TRI_BH0);
            }
        }
        , 'onError': function (req) { }
    })
}
function gia_tri_bh_onchange(index, phamvibaohiem) {
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var khoi_kh = '';
    if (document.forms[0].C_KHOI_KHACH_HANG) {
        khoi_kh = document.forms[0].C_KHOI_KHACH_HANG.value;
    }
    var doi_tuong = '';
    if (document.forms[0].C_DOI_TUONG) {
        doi_tuong = document.forms[0].C_DOI_TUONG.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhi?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&KHOI_KH=' + khoi_kh + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&DoiTuong=' + doi_tuong + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                if (eval("document.forms[0].C_VAT" + index)) {
                    var vat = eval("document.forms[0].C_VAT" + index + ".value");
                    if (phi <= 0) {
                        phi = lam_tron_so(giatribaohiem * tyle / 100);
                    }
                    var phi_chua_vat = lam_tron_so(phi / (1 + (vat / 100)));
                    var tien_vat = lam_tron_so(phi - phi_chua_vat);
                    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                    eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                }
                load_phi_bh();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_tai_lieu_ajax() {
    $('#loading').show();
    var total_file = document.forms[0].TotalRowTaiLieu.value;
    var postData = new FormData();
    var ins = document.getElementById('file_upload').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("files[]", document.getElementById("file_upload").files[x]);
    }
    var v_type_file = '';
    if (document.forms[0].C_TYPE_FILE) {
        v_type_file = document.forms[0].C_TYPE_FILE.value;
    }
    postData.append('TyleFile', v_type_file);
    postData.append('ToTal', total_file);
    var ranNum = Math.floor(Math.random() * 999999);

    $.ajax({
        type: "post",
        url: "/Ajax/UploadImages",
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
                if (content != '') {
                    $('#list_table_file').show();
                }
                $('#list_tailieu').append(content);
                document.forms[0].TotalRowTaiLieu.value = total;
                if (error != '') {
                    alertZebraContent(error);
                }
            });

        },
        error: function (req) { $('#loading').hide(); }
    });
}
function load_chi_nhanh(value, chi_nhanh) {
    if (value == "") {
        document.getElementById("C_CHI_NHANH").innerHTML = '<option value="">Chọn chi nhánh ngân hàng</option>';
        $("#C_CHI_NHANH").select2();
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadChiNhanh?C_MA_NGAN_HANG=' + value + '&CHI_NHANH=' + chi_nhanh + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("C_CHI_NHANH").innerHTML = '<option value="">Chọn chi nhánh ngân hàng</option>' + content;
                $("#C_CHI_NHANH").select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_pgd(value, chi_nhanh) {
    if (value == "") {
        document.getElementById("C_PHONG_GD").innerHTML = '<option value="">Chọn phòng giao dịch ngân hàng</option>';
        $("#C_PHONG_GD").select2();
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadChiNhanh?C_MA_NGAN_HANG=' + value + '&CHI_NHANH=' + chi_nhanh + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("C_PHONG_GD").innerHTML = '<option value="">Chọn phòng giao dịch ngân hàng</option>' + content;
                $("#C_PHONG_GD").select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_nguoi_thu_huong(value) {
    if (value == "") {
        document.forms[0].C_NGUOI_HUONG_1.value = '';
        document.forms[0].C_DIA_CHI_NGUOI_HUONG_1.value = '';
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadNguoiThuHuong?C_MA_NGAN_HANG=' + value + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var name = getNodeValue(getElementsByTagName('Html'));
                var address = getNodeValue(getElementsByTagName('Params'));
                document.forms[0].C_NGUOI_HUONG_1.value = name;
                document.forms[0].C_DIA_CHI_NGUOI_HUONG_1.value = address;
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bh_1_nam() {
    var phi_bh_toan_th = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value));
    var kieu_tt = '1';
    if (document.forms[0].C_KIEU_TT) {
        kieu_tt = document.forms[0].C_KIEU_TT.value;
    }
    if (kieu_tt == '1') {
        document.forms[0].C_PHI_BH_NAM.value = phi_bh_toan_th;
        format_string_to_money(document.forms[0].C_PHI_BH_NAM);
        kieu_thanh_toan_onchange();
        return;
    }
    var so_tien = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    if (document.forms[0].C_GIA_TRI_BH0) {
        so_tien = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    }
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var so_thang = '12';
    var khoi_kh = '';
    if (document.forms[0].C_KHOI_KHACH_HANG) {
        khoi_kh = document.forms[0].C_KHOI_KHACH_HANG.value;
    }
    var doi_tuong = '';
    if (document.forms[0].C_DOI_TUONG) {
        doi_tuong = document.forms[0].C_DOI_TUONG.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiBHMotNam?SoTien=' + so_tien.toString() + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&KHOI_KH=' + khoi_kh + '&DoiTuong=' + doi_tuong + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phibh = getNodeValue(getElementsByTagName('Html'));
                document.forms[0].C_PHI_BH_NAM.value = phibh;
                kieu_thanh_toan_onchange();
            }
        }
        , 'onError': function (req) { }
    })
}
$(document).ready(function () {
    $(function () {
        if (document.getElementById('C_MA_CAN_BO_NH')) {
            $("#C_MA_CAN_BO_NH").autocomplete({
                source: function (request, response) {
                    var ma_can_bo = document.forms[0].C_MA_CAN_BO_NH.value;
                    var ten_can_bo = document.forms[0].C_TEN_CAN_BO_NH.value;
                    var manganhang = document.forms[0].C_MA_NGAN_HANG.value;
                    if (ma_can_bo == "" && ten_can_bo == "") {
                        return;
                    }
                    var ranNum = Math.floor(Math.random() * 999999);
                    sLink = '/Ajax/LoadCanBoBan?C_MA_CAN_BO_BAN=' + ma_can_bo + '&C_TEN_CAN_BO=' + ten_can_bo + '&C_MGA_NGAN_HANG=' + manganhang + '&rnd=' + ranNum;

                    AjaxRequest.get({
                        'url': sLink
                        , 'onSuccess': function (req) {
                            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                                var content = getNodeValue(getElementsByTagName('Html'));
                                var output = "";
                                if (content != '') {
                                    output = jQuery.parseJSON(content);
                                }
                                response(output);
                            }
                        }
                        , 'onError': function (req) { }
                    })
                }
                , focus: function (event, ui) {
                    $("#C_MA_CAN_BO_NH").val(ui.item.code);
                    $("#C_TEN_CAN_BO_NH").val(ui.item.name);
                    if (document.forms[0].C_PHONE_CB) {
                        $("#C_PHONE_CB").val(ui.item.phone);
                    }
                    return false;
                },
                select: function (event, ui) {
                    $("#C_MA_CAN_BO_NH").val(ui.item.code);
                    $("#C_TEN_CAN_BO_NH").val(ui.item.name);
                    if (document.forms[0].C_PHONE_CB) {
                        $("#C_PHONE_CB").val(ui.item.phone);
                    }
                    return false;
                }
            }).data("autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .data("item.autocomplete", item)
                    .append("<a>" + item.fullname + "</a>")
                    .appendTo(ul);
            };
        }
        if (document.getElementById('C_TEN_CAN_BO_NH')) {
            $("#C_TEN_CAN_BO_NH").autocomplete({
                source: function (request, response) {
                    var ma_can_bo = document.forms[0].C_MA_CAN_BO_NH.value;
                    var ten_can_bo = document.forms[0].C_TEN_CAN_BO_NH.value;
                    var manganhang = document.forms[0].C_MA_NGAN_HANG.value;
                    if (ma_can_bo == "" && ten_can_bo == "") {
                        return;
                    }
                    var ranNum = Math.floor(Math.random() * 999999);
                    sLink = '/Ajax/LoadCanBoBan?C_MA_CAN_BO_BAN=' + ma_can_bo + '&C_TEN_CAN_BO=' + ten_can_bo + '&C_MGA_NGAN_HANG=' + manganhang + '&rnd=' + ranNum;

                    AjaxRequest.get({
                        'url': sLink
                        , 'onSuccess': function (req) {
                            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                                var content = getNodeValue(getElementsByTagName('Html'));
                                var content = getNodeValue(getElementsByTagName('Html'));
                                var output = "";
                                if (content != '') {
                                    output = jQuery.parseJSON(content);
                                }
                                response(output);
                            }
                        }
                        , 'onError': function (req) { }
                    })
                }
                , focus: function (event, ui) {
                    $("#C_MA_CAN_BO_NH").val(ui.item.code);
                    $("#C_TEN_CAN_BO_NH").val(ui.item.name);
                    if (document.forms[0].C_PHONE_CB) {
                        $("#C_PHONE_CB").val(ui.item.phone);
                    }
                    return false;
                },
                select: function (event, ui) {
                    $("#C_MA_CAN_BO_NH").val(ui.item.code);
                    $("#C_TEN_CAN_BO_NH").val(ui.item.name);
                    if (document.forms[0].C_PHONE_CB) {
                        $("#C_PHONE_CB").val(ui.item.phone);
                    }
                    return false;
                }
            }).data("autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .data("item.autocomplete", item)
                    .append("<a>" + item.fullname + "</a>")
                    .appendTo(ul);
            };
        }
    });
});
function load_can_bo_ban(object) {
    var ma_can_bo = document.forms[0].C_MA_CAN_BO_NH.value;
    var ten_can_bo = document.forms[0].C_TEN_CAN_BO_NH.value;
    var manganhang = document.forms[0].C_MA_NGAN_HANG.value;
    var divsearch = document.getElementById("div_search");
    if (typeof (divsearch) != 'undefined' && divsearch != null) {
        divsearch.parentNode.removeChild(divsearch);
    }
    if (ma_can_bo == "" && ten_can_bo == "") {
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadCanBoBan?C_MA_CAN_BO_BAN=' + ma_can_bo + '&C_TEN_CAN_BO=' + ten_can_bo + '&C_MGA_NGAN_HANG=' + manganhang + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $("#C_MA_CAN_BO_NH").autocomplete({
                    minLength: 0,
                    source: content,
                    focus: function (event, ui) {
                        $("#C_MA_CAN_BO_NH").val(ui.item.name);
                        return false;
                    },
                    select: function (event, ui) {
                        $("#C_MA_CAN_BO_NH").val(ui.item.name);

                        return false;
                    }
                })
                    .data("autocomplete")._renderItem = function (ul, item) {
                        return $("<li>")
                            .data("item.autocomplete", item)
                            .append("<a>" + item.name + "</a>")
                            .appendTo(ul);
                    };
            }
        }
        , 'onError': function (req) { }
    })
}
function load_child_menu(p_parent_code, p_type, p_select, p_type_default, p_control, p_html_first) {
    if (p_parent_code == '') {
        $('#' + p_control).html('<option value="">' + p_html_first + '</option>');
        $('#' + p_control + ' option').eq(0).prop('selected', true);
        $("#" + p_control).trigger("change");
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadChildMenu?C_PARENT_CODE=' + p_parent_code + '&C_TYPE=' + p_type + '&C_SELECT=' + p_select + '&C_TYPE_DEFAULT=' + p_type_default + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#' + p_control).html('<option value="">' + p_html_first + '</option>' + content);
                $("#" + p_control).select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bh_xcg() {
    var nhom_xe = '';
    if (document.forms[0].nhom_xcg) {
        nhom_xe = document.forms[0].nhom_xcg.value;
    }
    var ngaycap = document.forms[0].C_NGAY_CAP.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nganhang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_nam_san_xuat = parseFloat(document.forms[0].nam_san_xuat.value);
    var gia_tri_thuc_te = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    var v_ngay_bat_dau = '';
    var v_ngay_ket_thuc = '';
    if (document.forms[0].C_HIEU_LUC_TU_NGAY0) {
        v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY0.value;
    } else {
        v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    }
    if (document.forms[0].C_HIEU_LUC_DEN_NGAY0) {
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY0.value;
    } else {
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    }
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var today = new Date();
    var yeartoday = today.getFullYear();
    var month = today.getMonth() + 1;
    var month_san_xuat = parseFloat(document.forms[0].thang_san_xuat.value);
    if (month_san_xuat < 1) month_san_xuat = 1;
    if (month_san_xuat > 12) month_san_xuat = 12;
    var so_tuoi = 0;
    if (v_nam_san_xuat > 0) {
        so_tuoi = yeartoday - v_nam_san_xuat;
    }
    var so_thang_sx = month - month_san_xuat;
    if (so_thang_sx >= 0) {
        so_tuoi++;
    }
    var trong_tai = document.forms[0].trong_tai.value;
    if (trong_tai > 10000 && nhom_xe == 'OTO_HANG') {
        nhom_xe = 'OTO_KDVT';
    }
    var so_ngay = tinh_so_ngay(v_ngay_bat_dau, v_ngay_ket_thuc);
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiXCG?NhomXe=' + nhom_xe + '&NganHang=' + nganhang + '&PolicyType=' + policy_type + '&NgayCap=' + ngaycap + '&SoTuoi=' + so_tuoi + '&ThoiHan=' + so_thang + '&SoTien=' + gia_tri_thuc_te + '&SoNgay=' + so_ngay + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle_toan_thoi_han = parseFloat(getNodeValue(getElementsByTagName('Html')));
                var tyle_1_nam = parseFloat(getNodeValue(getElementsByTagName('Params')));
                var count_pv = document.forms[0].TotalRowPhamVi.value;
                for (var i = 0; i < count_pv; i++) {
                    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
                    if (ma_pham_vi == 'MV') {
                        var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + i + ".value")));
                        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + i + ".value")));
                        var phi_bh = lam_tron_so(gia_tri * tyle_toan_thoi_han / 100);
                        var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                        var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
                        var phi_nam = lam_tron_so(gia_tri * tyle_1_nam / 100);

                        eval("document.forms[0].C_TY_LE_PHI" + i + ".value='" + tyle_toan_thoi_han + "'");
                        eval("document.forms[0].C_PHI_BH" + i + ".value='" + phi_bh + "'");
                        eval("document.forms[0].C_TIEN_VAT" + i + ".value='" + tien_vat + "'");
                        eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value='" + phi_chua_vat + "'");
                        eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value='" + phi_nam + "'");
                        format_string_to_money(eval("document.forms[0].C_PHI_BH" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + i));
                        load_dksdbs(i);
                        break;
                    }
                }
                load_phi_bao_hiem_all();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bao_hiem_all() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    var total_phi_1_nam = 0;
    var total_phi = 0;
    for (var i = 0; i < count_pv; i++) {
        var check = false;
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            check = eval("document.forms[0].cbk_pham_vi" + i + ".checked");
        } else {
            var c_ma_pham_vi_parent = '';
            if (eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + "")) {
                c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + ".value");
            }
            if (c_ma_pham_vi_parent != '') {
                for (var j = 0; j < count_pv; j++) {
                    var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + j + ".value");
                    if (c_ma_pham_vi == c_ma_pham_vi_parent) {
                        if (eval("document.forms[0].cbk_pham_vi" + j)) {
                            check = eval("document.forms[0].cbk_pham_vi" + j + ".checked");
                        }
                        break;
                    }
                }
            }
        }
        var phi_1_nam = 0;
        var phi_bh = 0;
        if (eval("document.forms[0].C_PHI_BH_1_NAM" + i + "")) {
            phi_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value")));
        }
        if (eval("document.forms[0].C_PHI_BH" + i + "")) {
            phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + i + ".value")));
        }
        if (check) {
            total_phi_1_nam += phi_1_nam;
            total_phi += phi_bh;
            $('#tong_phi_ltt' + i).html(phi_bh.f_formatMoney(0, ".", ","));
        } else {
            $('#tong_phi_ltt' + i).html(0);
        }
    }
    document.forms[0].C_PHI_BH_NAM.value = total_phi_1_nam;
    var total_dkbs = parseFloat(char2number(document.forms[0].C_TONG_TIEN_DKBS.value));
    $('#dieu_khoan_sdbs_ltt').html(total_dkbs.f_formatMoney(0, ".", ","));
    document.forms[0].C_PHI_BH_THOI_HAN.value = (total_phi + total_dkbs);
    //document.forms[0].C_PHI_BH_THOI_HAN.value = (total_phi);
    format_string_to_money(document.forms[0].C_PHI_BH_NAM);
    format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    so_tien_muc_mien_thuong_onchange();
    //kieu_thanh_toan_xcg_onchange();
}
function load_phi_bh_theo_thoi_han(index) {
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (ma_pham_vi == 'MV') {
        load_phi_bh_xcg();
    } else {
        var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
        var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
        var v_ngay_bat_dau = '';
        var v_ngay_ket_thuc = '';
        if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
        } else {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY.value");
        }
        if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
        } else {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY.value");
        }
        var so_thang = 0;
        var so_nam = 0;
        if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
            if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                var tyle = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
                var phi_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
                if (so_nam > 0 && so_thang > 0) {
                    var so_thang_theo_nam = so_nam * 12;
                    var so_thang_con_lai = so_thang_theo_nam - so_thang;
                    if (so_thang_con_lai > 1) {
                        phi_bh = phi_bh_1_nam * so_nam;
                        tyle = tyle * so_nam;
                    } else if ((so_thang_con_lai * -1) > 1) {
                        phi_bh = phi_bh_1_nam * (so_nam + 1);
                        tyle = tyle * (so_nam + 1);
                    } else {
                        phi_bh = phi_bh_1_nam * so_nam;
                        tyle = tyle * so_nam;
                    }

                    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
                    var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                    var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

                    eval("document.forms[0].C_TY_LE_PHI" + index + ".value='" + tyle + "'");
                    eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
                    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
                    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
                    format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));

                    if (phi_1_nam < 1 && phi_bh > 0) {
                        eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh + "'");
                    }
                }
            }
        }
        load_phi_bao_hiem_all();
    }
}
function load_phi_bh_tnds_xcg() {
    var nhom_xe = '';
    if (document.forms[0].nhom_xcg) {
        nhom_xe = document.forms[0].nhom_xcg.value;
    }
    var loai_xe = '';
    if (document.forms[0].loai_xe) {
        loai_xe = document.forms[0].loai_xe.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiTNDSXCG?NhomXe=' + nhom_xe + '&LoaiXe=' + loai_xe + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phi_bh = parseFloat(getNodeValue(getElementsByTagName('Html')));
                var count_pv = document.forms[0].TotalRowPhamVi.value;
                for (var i = 0; i < count_pv; i++) {
                    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
                    if (ma_pham_vi == 'MVH') {
                        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + i + ".value")));
                        var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                        var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
                        var phi_nam = phi_bh;

                        eval("document.forms[0].C_PHI_BH" + i + ".value='" + phi_bh + "'");
                        eval("document.forms[0].C_TIEN_VAT" + i + ".value='" + tien_vat + "'");
                        eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value='" + phi_chua_vat + "'");
                        eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value='" + phi_nam + "'");
                        format_string_to_money(eval("document.forms[0].C_PHI_BH" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + i));
                        load_phi_bh_theo_thoi_han(i);
                        break;
                    }
                }
            }
        }
        , 'onError': function (req) { }
    })
}
function load_dksdbs(index) {
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nganhang = document.forms[0].C_MA_NGAN_HANG.value;
    var nhom_xcg = document.forms[0].nhom_xcg.value;
    var ngaycap = document.forms[0].C_NGAY_CAP.value;
    var v_nam_san_xuat = parseFloat(document.forms[0].nam_san_xuat.value);
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var today = new Date();
    var yeartoday = today.getFullYear();
    var so_tuoi = 0;
    if (v_nam_san_xuat > 0) {
        so_tuoi = yeartoday - v_nam_san_xuat;
    }
    var list_pham_vi = '';
    var list_id = document.getElementsByName('dksdbs' + index);
    for (var i = 0; i < list_id.length; i++) {
        if (list_id[i].checked) {
            var maphamvi = $('#C_MA_DIEU_KHOAN_' + index + '_' + i).val();
            list_pham_vi += (list_pham_vi != '' ? ',' : '') + maphamvi;
        }
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadDieuKhoan?PolicyType=' + policy_type + '&NhomXe=' + nhom_xcg + '&MaPhamVi=' + ma_pham_vi + '&NganHang=' + nganhang + '&SoTuoi=' + so_tuoi + '&PhamViCheck=' + list_pham_vi + '&GiaTRi=' + gia_tri + '&VAT=' + vat + '&NgayCap=' + ngaycap + '&Index=' + index + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                var total = getNodeValue(getElementsByTagName('Params'));
                $('#listdkbs' + index).html(content);
                $('#TotalRowDieuKhoan' + index).val(total);
                dieu_khoan_bo_sung_oncheck();
            }
        }
        , 'onError': function (req) { }
    })
}
function dieu_khoan_bo_sung_oncheck() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    var total_tyle_dkbs = 0;
    var total_phi_chua_vat_dkbs = 0;
    var total_tien_vat_dkbs = 0;
    var tong_so_tien_dieu_khoan = 0;
    for (var i = 0; i < count_pv; i++) {
        var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + i + ".value")));
        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + i + ".value")));
        var list_id = document.getElementsByName('dksdbs_' + i);
        var check = 0;
        for (var j = 0; j < list_id.length; j++) {
            $('#text_so_tien_dieu_khoan_' + i + '_' + j).html(0);
            $('#phi_dkbs_chua_vat' + i + '_' + j).html(0);
            $('#tien_vat_dkbs' + i + '_' + j).html(0);
            var tyle_vcx = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + i + ".value")));
            var phi_chua_vat_vcx = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value")));
            var tien_vat_vcx = parseFloat(char2number(eval("document.forms[0].C_TIEN_VAT" + i + ".value")));
            var phi_vat_vcx = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + i + ".value")));
            if (list_id[j].checked) {
                var tyle = parseFloat(char2number($('#C_TY_LE_' + i + '_' + j).val()));
                var so_tien_dieu_khoan = lam_tron_so(gia_tri * tyle / 100);
                var so_tien_text = so_tien_dieu_khoan.f_formatMoney(0, ".", ",");
                var phi_dkbs_chua_vat = lam_tron_so(so_tien_dieu_khoan / (1 + (vat / 100)));
                var tien_vat_dkbs = lam_tron_so(so_tien_dieu_khoan - phi_dkbs_chua_vat);

                $('#text_so_tien_dieu_khoan_' + i + '_' + j).html(so_tien_text);
                $('#vat_dkbs' + i + '_' + j).html(vat);
                $('#phi_dkbs_chua_vat' + i + '_' + j).html(phi_dkbs_chua_vat.f_formatMoney(0, ".", ","));
                $('#tien_vat_dkbs' + i + '_' + j).html(tien_vat_dkbs.f_formatMoney(0, ".", ","));
                total_tyle_dkbs += tyle;
                total_phi_chua_vat_dkbs += phi_dkbs_chua_vat;
                total_tien_vat_dkbs += tien_vat_dkbs;
                tong_so_tien_dieu_khoan += so_tien_dieu_khoan;
            }
            if (check == 0) {
                check = 1;
            }
        }
        var totalvcx = parseFloat(total_tyle_dkbs + tyle_vcx);
        totalvcx = (Math.round(totalvcx * 1000)) / 1000;
        if (check == 1) {
            $('#total_gt_vcx').html(gia_tri.f_formatMoney(0, ".", ","));
            $('#total_tyle_vcx').html((totalvcx));
            $('#total_phi_chua_vat_vcx').html((phi_chua_vat_vcx + total_phi_chua_vat_dkbs).f_formatMoney(0, ".", ","));
            $('#total_tien_vat_vcx').html((tien_vat_vcx + total_tien_vat_dkbs).f_formatMoney(0, ".", ","));
            $('#total_phi_co_vat_vcx').html((phi_vat_vcx + tong_so_tien_dieu_khoan).f_formatMoney(0, ".", ","));
        }
    }
    $('#total_tyle_dkbs').html(total_tyle_dkbs.f_formatMoney(2, ".", ","));
    $('#total_phi_chua_vat_dkbs').html(total_phi_chua_vat_dkbs.f_formatMoney(0, ".", ","));
    $('#total_tien_vat_dkbs').html(total_tien_vat_dkbs.f_formatMoney(0, ".", ","));
    $('#total_phi_co_vat_dkbs').html(tong_so_tien_dieu_khoan.f_formatMoney(0, ".", ","));

    document.forms[0].C_TONG_TIEN_DKBS.value = tong_so_tien_dieu_khoan;
    format_string_to_money(document.forms[0].C_TONG_TIEN_DKBS);
    load_phi_bao_hiem_all();
}
function load_nhom_kh(value) {
    var ranNum = Math.floor(Math.random() * 999999);
    var nhom_kh = '';
    var policy_type = '';
    if (document.forms[0].C_NHOM_KH) {
        nhom_kh = document.forms[0].C_NHOM_KH.value;
    }
    if (document.forms[0].C_POLICY_TYPE) {
        policy_type = document.forms[0].C_POLICY_TYPE.value;
    }
    sLink = '/Ajax/LoadNhomKH?C_MA_NGAN_HANG=' + value + '&C_NHOM_KH=' + nhom_kh + '&C_POLICY_TYPE=' + policy_type + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("C_NHOM_KH").innerHTML = '<option value="">Chọn nhóm khách hàng</option>' + content;
                $("#C_NHOM_KH").select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_goi_bh(value) {
    var ranNum = Math.floor(Math.random() * 999999);
    var goi_bh = '';
    if (document.forms[0].C_GOI_BH) {
        goi_bh = document.forms[0].C_GOI_BH.value;
    }
    sLink = '/Ajax/LoadGoiBH?C_MA_NGAN_HANG=' + value + '&C_GOI_BH=' + goi_bh + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("C_GOI_BH").innerHTML = content;
                $("#C_GOI_BH").select2();
                load_pham_vi_bao_hiem();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bh_theo_gia_tri(index) {
    var gia_tri_thuc_te = parseFloat(char2number(document.forms[0].gia_tri_thuc_te.value));
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var tyle_toan_thoi_han = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (gia_tri > 0 && tyle_toan_thoi_han > 0) {
        if (ma_pham_vi != 'MVH') {
            var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
            var phi_bh = lam_tron_so(gia_tri * tyle_toan_thoi_han / 100);
            if (ma_pham_vi != 'MVA') {
                var lai_phu_xe = 1;
                if (document.forms[0].lai_phu_xe) {
                    var lai_phu_xe = parseFloat(char2number(document.forms[0].lai_phu_xe.value));
                }
                if (lai_phu_xe < 1) lai_phu_xe = 1;
                phi_bh = phi_bh * lai_phu_xe;
            }
            var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
            var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
            var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
            eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
            eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
            eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
            if (ma_pham_vi != 'MV') {
                phi_bh_1_nam = phi_bh;
            } else {
                if (phi_bh_1_nam < 1) {
                    var v_ngay_bat_dau = '';
                    var v_ngay_ket_thuc = '';
                    if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
                        v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
                    } else {
                        v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY.value");
                    }
                    if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
                        v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
                    } else {
                        v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY.value");
                    }
                    var so_thang = 0;
                    var so_nam = 0;
                    if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
                        if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                            so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                            so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                            if (so_nam > 0 && so_thang > 0) {
                                var so_thang_theo_nam = so_nam * 12;
                                var so_thang_con_lai = so_thang_theo_nam - so_thang;
                                if ((so_thang_con_lai * -1) > 1) {
                                    so_nam = (so_nam + 1);
                                }
                                phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                            } else {
                                phi_bh_1_nam = phi_bh;
                            }
                        } else {
                            phi_bh_1_nam = phi_bh;
                        }
                    } else {
                        phi_bh_1_nam = phi_bh;
                    }
                } else {
                    if (gia_tri_thuc_te > gia_tri) {
                        phi_bh_1_nam = phi_bh;
                    }
                }
            }
            eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
            format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
            format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
            format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
            if (ma_pham_vi == 'MV') {
                load_dksdbs(index);
            }
            load_phi_bao_hiem_all();
        }
    }
    if (ma_pham_vi == 'MV') {
        if (gia_tri_thuc_te > gia_tri) {
            $('#note_pham_vi' + index).html('Cảnh báo tham gia dưới giá trị.');
        } else if (gia_tri_thuc_te < gia_tri) {
            $('#note_pham_vi' + index).html('STBH không được lớn hơn giá trị xe.');
        } else {
            $('#note_pham_vi' + index).html('');
        }
    }
}
function check_gia_tri_vcx(index) {
    var gia_tri_thuc_te = parseFloat(char2number(document.forms[0].gia_tri_thuc_te.value));
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var tyle_toan_thoi_han = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    if (ma_pham_vi == 'MV' && gia_tri > 7000000000) {
        alertZebraContent('Giá trị tham gia bảo hiểm phải nhỏ hơn 7 tỷ đồng');
        //$('#C_GIA_TRI_BH' + index).focus();
        return;
    }
}
function load_phi_bh_theo_ty_le(index) {
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var tyle_toan_thoi_han = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
    if (gia_tri > 0 && tyle_toan_thoi_han > 0) {
        var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
        if (ma_pham_vi != 'MVH') {
            var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
            var phi_bh = lam_tron_so(gia_tri * tyle_toan_thoi_han / 100);
            var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
            var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
            var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
            eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
            eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
            eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
            if (ma_pham_vi != 'MV') {
                phi_bh_1_nam = phi_bh;
            } else {
                if (phi_bh_1_nam < 1) {
                    var v_ngay_bat_dau = '';
                    var v_ngay_ket_thuc = '';
                    if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
                        v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
                    }
                    if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
                        v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
                    }
                    var so_thang = 0;
                    var so_nam = 0;
                    if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
                        if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                            so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                            so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                            if (so_nam > 0 && so_thang > 0) {
                                var so_thang_theo_nam = so_nam * 12;
                                var so_thang_con_lai = so_thang_theo_nam - so_thang;
                                if ((so_thang_con_lai * -1) > 1) {
                                    so_nam = (so_nam + 1);
                                }
                                phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                            } else {
                                phi_bh_1_nam = phi_bh;
                            }
                        } else {
                            phi_bh_1_nam = phi_bh;
                        }
                    } else {
                        phi_bh_1_nam = phi_bh;
                    }
                }
            }
            eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
            format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
            format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
            format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
            load_phi_bao_hiem_all();
        }
    }
}
function change_phi(index) {
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + index + ".value");
    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
    var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
    var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    if (ma_pham_vi == 'MVP' || ma_pham_vi_parent == 'MVP') {
        load_tong_mvp();
    }
    if (ma_pham_vi != 'MV' && ma_pham_vi != 'MVH') {
        phi_bh_1_nam = phi_bh;
    } else {
        if (phi_bh_1_nam < 1) {
            var v_ngay_bat_dau = '';
            var v_ngay_ket_thuc = '';
            if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
                v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
                v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
            }
            var so_thang = 0;
            var so_nam = 0;
            if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
                if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                    so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                    so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                    if (so_nam > 0 && so_thang > 0) {
                        var so_thang_theo_nam = so_nam * 12;
                        var so_thang_con_lai = so_thang_theo_nam - so_thang;
                        if ((so_thang_con_lai * -1) > 1) {
                            so_nam = (so_nam + 1);
                        }
                        phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                    } else {
                        phi_bh_1_nam = phi_bh;
                    }
                } else {
                    phi_bh_1_nam = phi_bh;
                }
            } else {
                phi_bh_1_nam = phi_bh;
            }
        }
    }
    eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
    load_phi_bao_hiem_all();
}
function change_phi_chua_vat(index) {
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + index + ".value");
    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
    var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var phi_chua_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value")));
    var tien_vat = lam_tron_so(phi_chua_vat * vat / 100);
    var phi_bh = lam_tron_so(phi_chua_vat + tien_vat);

    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
    if (ma_pham_vi == 'MVP' || ma_pham_vi_parent == 'MVP') {
        load_tong_mvp();
    }
    if (ma_pham_vi != 'MV' && ma_pham_vi != 'MVH') {
        phi_bh_1_nam = phi_bh;
    } else {
        if (phi_bh_1_nam < 1) {
            var v_ngay_bat_dau = '';
            var v_ngay_ket_thuc = '';
            if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
                v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
            }
            if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
                v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
            }
            var so_thang = 0;
            var so_nam = 0;
            if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
                if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                    so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                    so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                    if (so_nam > 0 && so_thang > 0) {
                        var so_thang_theo_nam = so_nam * 12;
                        var so_thang_con_lai = so_thang_theo_nam - so_thang;
                        if ((so_thang_con_lai * -1) > 1) {
                            so_nam = (so_nam + 1);
                        }
                        phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                    } else {
                        phi_bh_1_nam = phi_bh;
                    }
                } else {
                    phi_bh_1_nam = phi_bh;
                }
            } else {
                phi_bh_1_nam = phi_bh;
            }
        }
    }
    eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
    load_phi_bao_hiem_all();
}
function kieu_thanh_toan_xcg_onchange() {
    var count = parseFloat(char2number(document.forms[0].TotalRowLTT.value));
    var tong_phi = char2number(document.forms[0].C_PHI_BH_THOI_HAN.value);
    var list_ltt_delete = document.forms[0].ListLTTDelete.value;
    if (count < 2) {
        for (var i = 0; i < count; i++) {
            if (list_have_element(list_ltt_delete, i, ',') == -1) {
                eval("document.forms[0].C_PHI_BH_LTT" + i + ".value='" + tong_phi + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i));
            }
        }
    }

    /*
    var tong_tien_dkbs = 0;
    if (document.forms[0].C_TONG_TIEN_DKBS) {
        tong_tien_dkbs = parseFloat(char2number(document.forms[0].C_TONG_TIEN_DKBS.value));
    }
    var kieutt = parseFloat(document.forms[0].C_KIEU_TT.value);
    var v_ngay_bat_dau = "";
    var v_ngay_ket_thuc = "";
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + i)) {
            var ngay_hieu_luc = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + i + ".value");
            var ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + i + ".value");
            if (isdate(ngay_hieu_luc)) {
                if (v_ngay_bat_dau != "") {
                    if (date_compare(ngay_hieu_luc, v_ngay_bat_dau) > 0) {
                        v_ngay_bat_dau = ngay_hieu_luc;
                        v_ngay_ket_thuc = ngay_ket_thuc;
                    }
                }
                else {
                    v_ngay_bat_dau = ngay_hieu_luc;
                    v_ngay_ket_thuc = ngay_ket_thuc;
                }
            }
        }
    }
    if (!isdate(v_ngay_bat_dau)) return document.forms[0].C_KIEU_TT.value = "1", $("#C_KIEU_TT").select2(), alertZebraContent("Nhập ngày bắt đầu hiệu lực."), $("#tr_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide(), void $("#C_HIEU_LUC_TU_NGAY0").focus();
    if (!isdate(v_ngay_ket_thuc)) return document.forms[0].C_KIEU_TT.value = "1", $("#C_KIEU_TT").select2(), alertZebraContent("Nhập ngày kết thúc hiệu lực."), $("#tr_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide(), void $("#C_HIEU_LUC_DEN_NGAY0").focus();
    var so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc),
        count = char2number(document.forms[0].TotalRowLTT.value),
        list_ltt_delete = document.forms[0].ListLTTDelete.value,
        lantt = document.forms[0].LanTT.value,
        so_tien_thoi_han = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value)),
        so_tien_1_nam = parseFloat(char2number(document.forms[0].C_PHI_BH_NAM.value));
    so_tien_thoi_han = so_tien_thoi_han - tong_tien_dkbs;
    if (kieutt < 2) {
        for (var k = 0, i = 0; i < count; i++) -1 == list_have_element(list_ltt_delete, i, ",") && (0 == k ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + (so_tien_thoi_han + tong_tien_dkbs) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), $("#C_LAN_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_PHI_BH_LTT" + i).attr("disabled", "disabled"), $("#C_PHI_BH_LTT" + i).attr("readonly", "readonly")) : (list_ltt_delete += ("" == list_ltt_delete ? "" : ",") + i.toString(), $("#cbltt" + i).val(""), $("#cbltt" + i).prop("checked", !1), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("optional", "true"), $("#tr_ltt_" + i).hide()), k++);
        lantt = 1, $("#tr_dinh_ky_dong_phi").hide(), $("#toolbar-list_ltt").hide()
    } else {
        $("#tr_dinh_ky_dong_phi").show(), $("#toolbar-list_ltt").show();
        var dong_phi_dinh_ky = getValueFromRadioButton("C_DONG_PHI_DINH_KY");
        "" == dong_phi_dinh_ky && (dong_phi_dinh_ky = "HANG-NAM", $("#C_DONG_PHI_DINH_KY0").prop("checked", !0));
        for (var k = 0, ngay_thanh_toan = "", i = 0; i < count; i++) -1 == list_have_element(list_ltt_delete, i, ",") && (0 == k ? (eval("document.forms[0].C_PHI_BH_LTT" + i + ".value = '" + ("HANG-NAM" == dong_phi_dinh_ky ? (so_tien_1_nam + tong_tien_dkbs) : (so_tien_thoi_han+ tong_tien_dkbs)) + "'"), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i)), ngay_thanh_toan = eval("document.forms[0].C_NGAY_THANH_TOAN_LTT" + i + ".value"), "HANG-NAM" == dong_phi_dinh_ky ? ($("#C_LAN_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("disabled", "disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("readonly", "readonly"), $("#C_PHI_BH_LTT" + i).attr("disabled", "disabled"), $("#C_PHI_BH_LTT" + i).attr("readonly", "readonly")) : ($("#C_LAN_THANH_TOAN_LTT" + i).removeAttr("disabled"), $("#C_LAN_THANH_TOAN_LTT" + i).removeAttr("readonly"), $("#C_NGAY_THANH_TOAN_LTT" + i).removeAttr("disabled"), $("#C_NGAY_THANH_TOAN_LTT" + i).removeAttr("readonly"), $("#C_PHI_BH_LTT" + i).removeAttr("disabled"), $("#C_PHI_BH_LTT" + i).removeAttr("readonly"))) : (list_ltt_delete += ("" == list_ltt_delete ? "" : ",") + i.toString(), $("#cbltt" + i).val(""), $("#cbltt" + i).prop("checked", !1), $("#C_NGAY_THANH_TOAN_LTT" + i).attr("optional", "true"), $("#tr_ltt_" + i).hide()), k++);
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
                var s = ' <tr id="tr_ltt_' + count + '" style="background: #FFF;">';
                s += '<td align="center"><input type="checkbox" id="cbltt' + count + '" name="cidltt" value="' + count + '">', s += '<input type="hidden" name="PK_LICH_THANH_TOAN_BH_LTT' + count + '" value="">', s += '<input type="hidden" name="C_NGAY_THU_PHI' + count + '" value=""></td>', s += '<td class="control"><input class="text_input text-center" type="text" name="C_LAN_THANH_TOAN_LTT' + count + '" disabled="disabled" readonly="readonly" value="' + (parseFloat(lantt) + 1) + '" onkeydown="change_focus(document.forms[0],this,event)"></td> ', s += '<td class="control" align="center"><input class="text_input date_picker w90pi" type="text" disabled="disabled" readonly="readonly" onchange="check_date_ltt();" onkeyup="FormatDate(this,event)" optional="false" message="Nhập ngày thanh toán." id="C_NGAY_THANH_TOAN_LTT' + count + '" name="C_NGAY_THANH_TOAN_LTT' + count + '" value="' + date + '" onkeydown="change_focus(document.forms[0],this,event)"></td> ', s += '<td class="control" align="center"><input class="text_input text-right w90pi" type="text" disabled="disabled" readonly="readonly" onkeyup="format_money(this,event)" name="C_PHI_BH_LTT' + count + '" value="' + so_phi_thanh_toan + '" onblur="load_so_tien_con_lai(' + count + ')" onkeydown="change_focus(document.forms[0],this,event)"></td> ', s += '<td class="control" align="center"><input name="C_TRANG_THAI_THU_PHI' + count + '"  type="checkbox" value="1" /> Đã thu phí</td></tr>', $("#list_ltt").append(s), format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + count)), count++ , lantt++
            }
            $("#toolbar-list_ltt").hide()
        }
    }
    document.forms[0].TotalRowLTT.value = count, document.forms[0].ListLTTDelete.value = list_ltt_delete, document.forms[0].LanTT.value = lantt, setDatePicker("date_picker")
    */
}
function lay_cac_thong_tin_xe_theo_bien_so_xe(p_change) {
    p_change = (typeof (p_change) == 'undefined') ? "1" : p_change;
    if (p_change == "1") {
        $('#loading').show();
    }
    var bien_kiem_soat = document.forms[0].bien_kiem_soat.value;
    if (bien_kiem_soat == '') {
        if (p_change == "1") {
            alertZebraContent('Bạn phải nhập biển kiểm soát');
            $('#bien_kiem_soat').focus();
            $('#loading').hide();
        }
        return;
    }

    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadDataByBKS?BKS=' + bien_kiem_soat + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                $('#loading').hide();
                var xml = getNodeValue(getElementsByTagName('Html'));
                if (xml == '') {
                    if (p_change == "1") {
                        alertZebraContent('Xe chưa được nhập vào hệ thống');
                        $('#bien_kiem_soat').focus();
                    }
                }
                else {
                    var chu_xe = $(xml).find("chu_xe").text();
                    var cmnd_chu_xe = $(xml).find("cmnd_chu_xe").text();
                    var dia_chi_chu_xe = $(xml).find("dia_chi_chu_xe").text();
                    var nhom_xcg = $(xml).find("nhom_xcg").text();
                    var muc_dich = $(xml).find("muc_dich").text();
                    var loai_xe = $(xml).find("loai_xe").text();
                    var hang_xe = $(xml).find("hang_xe").text();
                    var nhan_hieu_xe = $(xml).find("nhan_hieu_xe").text();
                    var phien_ban = $(xml).find("phien_ban").text();
                    var nguon_goc_xe = $(xml).find("nguon_goc_xe").text();
                    var nam_san_xuat = $(xml).find("nam_san_xuat").text();
                    var trong_tai = $(xml).find("trong_tai").text();
                    var bien_kiem_soat = $(xml).find("bien_kiem_soat").text();
                    var c_is_bien_kiem_soat = $(xml).find("c_is_bien_kiem_soat").text();
                    var so_khung = $(xml).find("so_khung").text();
                    var so_may = $(xml).find("so_may").text();
                    var dung_tich = $(xml).find("dung_tich").text();
                    var mau_son = $(xml).find("mau_son").text();
                    var gia_tri_thuc_te = $(xml).find("gia_tri_thuc_te").text();
                    var c_is_new = $(xml).find("c_is_new").text();
                    var so_cho_ngoi = $(xml).find("so_cho_ngoi").text();
                    var lai_phu_xe = $(xml).find("lai_phu_xe").text();
                    var thang_san_xuat = $(xml).find("thang_san_xuat").text();

                    document.forms[0].chu_xe.value = chu_xe;
                    document.forms[0].dia_chi_chu_xe.value = dia_chi_chu_xe;
                    if (document.forms[0].cmnd_chu_xe) {
                        document.forms[0].cmnd_chu_xe.value = cmnd_chu_xe;
                    }
                    if (document.forms[0].nhom_xcg) {
                        document.forms[0].nhom_xcg.value = nhom_xcg;
                        $('#nhom_xcg').trigger("change");
                    }
                    if (document.forms[0].muc_dich) {
                        document.forms[0].muc_dich.value = muc_dich;
                        $('#muc_dich').trigger("change");
                    }
                    if (document.forms[0].loai_xe) {
                        document.forms[0].loai_xe.value = loai_xe;
                        $('#loai_xe').trigger("change");
                    }
                    if (document.forms[0].hang_xe) {
                        document.forms[0].hang_xe.value = hang_xe;
                        $('#hang_xe').trigger("change");
                    }
                    if (document.forms[0].nhan_hieu_xe) {
                        document.forms[0].nhan_hieu_xe.value = nhan_hieu_xe;
                        $('#nhan_hieu_xe').trigger("change");
                    }
                    //document.forms[0].phien_ban.value = phien_ban;
                    if (document.forms[0].nguon_goc_xe) {
                        document.forms[0].nguon_goc_xe.value = nguon_goc_xe;
                        $('#nguon_goc_xe').trigger("change");
                    }
                    if (document.forms[0].nam_san_xuat) {
                        document.forms[0].nam_san_xuat.value = nam_san_xuat;
                        $('#nam_san_xuat').trigger("change");
                    }
                    if (document.forms[0].trong_tai) {
                        document.forms[0].trong_tai.value = trong_tai;
                        $('#trong_tai').trigger("change");
                    }
                    document.forms[0].bien_kiem_soat.value = bien_kiem_soat;
                    document.forms[0].so_khung.value = so_khung;
                    document.forms[0].so_may.value = so_may;
                    if (document.forms[0].dung_tich) {
                        document.forms[0].dung_tich.value = dung_tich;
                        $('#dung_tich').trigger("change");
                    }
                    if (document.forms[0].mau_son) {
                        document.forms[0].mau_son.value = mau_son;
                        $('#mau_son').trigger("change");
                    }
                    if (document.forms[0].gia_tri_thuc_te) {
                        document.forms[0].gia_tri_thuc_te.value = gia_tri_thuc_te;
                    }
                    if (document.forms[0].so_cho_ngoi) {
                        document.forms[0].so_cho_ngoi.value = so_cho_ngoi;
                    }
                    if (c_is_bien_kiem_soat == 1) {
                        document.forms[0].c_is_bien_kiem_soat.checked = false;
                    } else {
                        document.forms[0].c_is_bien_kiem_soat.checked = true;
                    }
                    if (document.forms[0].c_is_new) {
                        if (c_is_new == 1) {
                            document.forms[0].c_is_new.checked = true;
                        } else {
                            document.forms[0].c_is_new.checked = false;
                        }
                    }
                    if (document.forms[0].lai_phu_xe) {
                        document.forms[0].lai_phu_xe.value = lai_phu_xe;
                    }
                    if (document.forms[0].thang_san_xuat) {
                        document.forms[0].thang_san_xuat.value = thang_san_xuat;
                    }
                    if (document.forms[0].gia_tri_thuc_te) {
                        $('#gia_tri_thuc_te').trigger("change");
                        $('#gia_tri_thuc_te').focus();
                    }
                }
            }
        }
        , 'onError': function (req) { $('#loading').hide(); }
    })
}
function load_images_ajax() {
    $('#loading').show();
    var total_file = document.forms[0].TotalRowImages.value;
    var postData = new FormData();
    var ins = document.getElementById('images_upload').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("files[]", document.getElementById("images_upload").files[x]);
    }
    var v_type_file = '';
    if (document.forms[0].C_TYPE_FILE) {
        v_type_file = document.forms[0].C_TYPE_FILE.value;
    }
    var v_type_file_image = '';
    if (document.forms[0].C_FILE_ANH_TYPE_IMAGE) {
        v_type_file_image = document.forms[0].C_FILE_ANH_TYPE_IMAGE.value;
    }
    var v_link_custom_image = '';
    if (document.forms[0].c_link_custom_image) {
        v_link_custom_image = document.forms[0].c_link_custom_image.value;
    }
    postData.append('TyleFile', v_type_file);
    postData.append('TyleFileImage', v_type_file_image);
    postData.append('ToTal', total_file);
    postData.append('LinkCustomImage', v_link_custom_image);
    var ranNum = Math.floor(Math.random() * 999999);

    $.ajax({
        type: "post",
        url: "/Ajax/UploadFileImages",
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
                var custom = $(this).find('Custom').text();
                $('#list_images').append(content);
                document.forms[0].TotalRowImages.value = total;
                if (error != '') {
                    alertZebraContent(error);
                }
                if (v_link_custom_image != '') {
                    $('#' + v_link_custom_image).append(custom);
                    if (total > 0) {
                        $('#div_' + v_link_custom_image).css("cursor", "zoom-in");
                        $('#div_' + v_link_custom_image).html("<a href=\"javascript:void(0)\" onclick=\"lightgallery('" + v_link_custom_image + "', '" + v_link_custom_image + "_image')\"><img src=\"/Content/images/image_tran.jpg\" alt=\"Backgroud\" /></a>");
                    }
                }
                $("#images_upload").val('');
            });

        },
        error: function (req) { $('#loading').hide(); }
    });
}
function so_tien_muc_mien_thuong_onchange() {
    var v_nguon_dich_vu = 'NGAN_HANG';
    var v_muc_mien_thuong = document.forms[0].C_MUC_MIEN_THUONG.value;
    var v_so_tien_muc_mien_thuong = document.forms[0].C_GIA_TRI_MUC_MIEN_THUONG.value;
    var v_so_tien_giam_mien_thuong_old = parseFloat(char2number(document.forms[0].C_SO_TIEN_GIAM_MIEN_THUONG.value));
    var v_phi_bh_vat_thoi_han = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value));
    v_phi_bh_vat_thoi_han = v_phi_bh_vat_thoi_han + v_so_tien_giam_mien_thuong_old;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadMucMienThuong?NGUON_DICH_VU=' + v_nguon_dich_vu + '&MUC_MIEN_THUONG=' + v_muc_mien_thuong + '&SOTIEN=' + v_so_tien_muc_mien_thuong + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = parseFloat(getNodeValue(getElementsByTagName('Html')));
                var v_so_tien_giam_muc_mien_thuong = Math.round((tyle * (v_phi_bh_vat_thoi_han)) / 100);
                document.forms[0].C_SO_TIEN_GIAM_MIEN_THUONG.value = v_so_tien_giam_muc_mien_thuong;
                $('#so_tien_giam_mien_thuong_ltt').html(v_so_tien_giam_muc_mien_thuong.f_formatMoney(0, ".", ","));
                document.forms[0].C_PHI_BH_THOI_HAN.value = (v_phi_bh_vat_thoi_han - v_so_tien_giam_muc_mien_thuong);
                format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
                kieu_thanh_toan_xcg_onchange();
            }
        }
        , 'onError': function (req) { }
    })
}
function add_signer() {
    $('#loading').show();
    var ma_can_bo = document.forms[0].C_CODE_SIGNER.value;
    var ten_can_bo = document.forms[0].C_NAME_SIGNER.value;
    var chuc_vu = document.forms[0].C_CHUC_VU_SIGNER.value;
    var noi_dung_uy_quyen = document.forms[0].C_SUMMARY_SIGNER.value;
    var manganhang = document.forms[0].C_MA_NGAN_HANG.value;
    var chinhanh = document.forms[0].C_MA_CHI_NHANH.value;
    var phonggd = document.forms[0].C_PHONG_GD.value;
    var email = document.forms[0].C_EMAIL_SIGNER.value;

    if (ma_can_bo == "") {
        alertZebraContent('Bạn phải nhập mã cán bộ');
        $('#loading').hide();
        return;
    }
    if (ten_can_bo == "") {
        alertZebraContent('Bạn phải nhập tên cán bộ');
        $('#loading').hide();
        return;
    }
    if (manganhang == "") {
        alertZebraContent('Bạn phải chọn ngân hàng');
        $('#loading').hide();
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/AddSigner?C_MA_CAN_BO_BAN=' + ma_can_bo + '&C_TEN_CAN_BO=' + ten_can_bo + '&C_CHUC_VU=' + chuc_vu + '&C_NOI_DUNG=' + noi_dung_uy_quyen + '&C_EMAIL=' + email + '&C_MA_NGAN_HANG=' + manganhang + '&C_MA_CHI_NHANH=' + chinhanh + '&C_PHONG_GD=' + phonggd + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var error = getNodeValue(getElementsByTagName('Params'));
                var content = getNodeValue(getElementsByTagName('Html'));
                var selected = getNodeValue(getElementsByTagName('JS'));
                if (error != '') {
                    alertZebraContent(error);
                } else {
                    $('#FK_NGUOI_KY_NGAN_HANG').append(content);
                    document.forms[0].FK_NGUOI_KY_NGAN_HANG = selected;
                    $('#FK_NGUOI_KY_NGAN_HANG').trigger("change");
                    document.forms[0].C_CODE_SIGNER.value = "";
                    document.forms[0].C_NAME_SIGNER.value = "";
                    document.forms[0].C_CHUC_VU_SIGNER.value = "";
                    document.forms[0].C_SUMMARY_SIGNER.value = "";
                }
                $('#loading').hide();
                $('[data-popup="popup-add-signer"]').fadeOut(350);
            }
        }
        , 'onError': function (req) { $('#loading').hide(); }
    })
}
function load_signer(value) {
    var ranNum = Math.floor(Math.random() * 999999);
    var Signer = '';
    if (document.forms[0].FK_NGUOI_KY_NGAN_HANG) {
        Signer = document.forms[0].FK_NGUOI_KY_NGAN_HANG.value;
    }
    var chinhanh = document.forms[0].C_MA_CHI_NHANH.value;
    var phonggd = document.forms[0].C_PHONG_GD.value;
    sLink = '/Ajax/LoadSigner?C_MA_NGAN_HANG=' + value + '&C_MA_CHI_NHANH=' + chinhanh + '&C_PHONG_GD=' + phonggd + '&C_SIGNER=' + Signer + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("FK_NGUOI_KY_NGAN_HANG").innerHTML = '<option value="0">Chọn người ký</option>' + content;
                $("#FK_NGUOI_KY_NGAN_HANG").select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_tong_mvp() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    var total_tyle_sub = 0;
    var total_phi_chua_vat_sub = 0;
    var total_tien_vat_sub = 0;
    var tong_so_tien = 0;
    for (var i = 0; i < count_pv; i++) {
        var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
        if (ma_pham_vi == "MVP") {
            var ty_le = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + i + ".value")));
            var phi_chua_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value")));
            var tien_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_VAT" + i + ".value")));
            var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + i + ".value")));
            total_tyle_sub += ty_le;
            total_phi_chua_vat_sub += phi_chua_vat;
            total_tien_vat_sub += tien_vat;
            tong_so_tien += phi_bh;
            for (var j = 0; j < count_pv; j++) {
                var ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + j + ".value");
                if (ma_pham_vi_parent == "MVP") {
                    var ty_le = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + j + ".value")));
                    var phi_chua_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + j + ".value")));
                    var tien_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_VAT" + j + ".value")));
                    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + j + ".value")));
                    total_tyle_sub += ty_le;
                    total_phi_chua_vat_sub += phi_chua_vat;
                    total_tien_vat_sub += tien_vat;
                    tong_so_tien += phi_bh;
                }
            }
        }
    }
    $('#total_tyle_tnds_tn').html((total_tyle_sub));
    $('#total_phi_chua_vat_tnds_tn').html((total_phi_chua_vat_sub).f_formatMoney(0, ".", ","));
    $('#total_tien_vat_tnds_tn').html((total_tien_vat_sub).f_formatMoney(0, ".", ","));
    $('#total_phi_co_vat_tnds_tn').html((tong_so_tien).f_formatMoney(0, ".", ","));
}
function load_muc_mien_thuong() {
    var nhom_xe = '';
    if (document.forms[0].nhom_xcg) {
        nhom_xe = document.forms[0].nhom_xcg.value;
    }
    var tyle = 0;
    if (document.forms[0].C_TY_LE_PHI0) {
        tyle = parseFloat(char2number(document.forms[0].C_TY_LE_PHI0.value));
    }
    var nganhang = document.forms[0].C_MA_NGAN_HANG.value;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadSelectMucMienThuong?NhomXe=' + nhom_xe + '&C_MA_NGAN_HANG=' + nganhang + '&C_TYLE=' + tyle + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                if (content != '') {
                    $('#C_GIA_TRI_MUC_MIEN_THUONG').html(content);
                    $("#C_GIA_TRI_MUC_MIEN_THUONG").select2();
                }
            }
        }
        , 'onError': function (req) { }
    })
}
function load_pham_vi_bao_hiem_motor() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
        var phamvibaohiem = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        var check = false;
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            check = eval("document.forms[0].cbk_pham_vi" + i + ".checked");
        }
        if (check) {
            eval("load_phi_motor_theo_pham_vi(" + i + ",'" + phamvibaohiem + "')");
            for (var j = 0; j < count_pv; j++) {
                var c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + j + ".value");
                var phamvibaohiem_sub = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + j + ".value");
                if (c_ma_pham_vi_parent == c_ma_pham_vi) {
                    eval("load_phi_motor_theo_pham_vi(" + j + ",'" + phamvibaohiem_sub + "')");
                }
            }
        }
    }
}
function load_phi_motor_theo_pham_vi(index, phamvibaohiem) {
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var loai_xe = document.forms[0].loai_xe.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
        if (isdate(eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value"))) {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
        }
    }
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
        if (isdate(eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value"))) {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
        }
    }
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhiMotor?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&LoaiXe=' + loai_xe + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
                var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
                var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
                var so_nguoi = parseFloat(char2number(document.forms[0].lai_phu_xe.value));
                var phi_bh = phi;
                if (phi <= 0) {
                    phi_bh = lam_tron_so(gia_tri * tyle / 100);
                }
                if (ma_pham_vi == 'MVA') {
                    phi_bh = phi_bh * (so_nguoi <= 0 ? 1 : so_nguoi);
                }
                var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi_bh + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));

                load_phi_bao_hiem_motor_all();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bao_hiem_motor_all() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    var total_phi_1_nam = 0;
    var total_phi = 0;
    for (var i = 0; i < count_pv; i++) {
        var phi_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value")));
        var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + i + ".value")));
        var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
        var check = false;
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            check = eval("document.forms[0].cbk_pham_vi" + i + ".checked");
        } else {
            var c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + ".value");
            if (c_ma_pham_vi_parent != '') {
                for (var j = 0; j < count_pv; j++) {
                    var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + j + ".value");
                    if (c_ma_pham_vi == c_ma_pham_vi_parent) {
                        if (eval("document.forms[0].cbk_pham_vi" + j)) {
                            check = eval("document.forms[0].cbk_pham_vi" + j + ".checked");
                        }
                        break;
                    }
                }
            }
        }

        if (check) {
            total_phi_1_nam += phi_1_nam;
            total_phi += phi_bh;
            $('#tong_phi_ltt' + i).html(phi_bh.f_formatMoney(0, ".", ","));
        } else {
            $('#tong_phi_ltt' + i).html(0);
        }
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            if (eval("document.forms[0].cbk_pham_vi" + i + ".checked")) {
                var ty_le = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + i + ".value")));
                var phi_bh_chua_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value")));
                var tien_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_VAT" + i + ".value")));
                var total_all_phi = 0;
                var total_all_ty_le = 0;
                var total_all_phi_bh_chua_vat = 0;
                var total_all_tien_vat = 0;
                total_all_phi = phi_bh;
                total_all_ty_le = ty_le;
                total_all_phi_bh_chua_vat = phi_bh_chua_vat;
                total_all_tien_vat = tien_vat;
                for (var j = 0; j < count_pv; j++) {
                    var c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + j + ".value");
                    if (c_ma_pham_vi_parent == c_ma_pham_vi) {
                        var phi_bh_sub = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + j + ".value")));
                        var ty_le_sub = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + j + ".value")));
                        var phi_bh_chua_vat_sub = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + j + ".value")));
                        var tien_vat_sub = parseFloat(char2number(eval("document.forms[0].C_TIEN_VAT" + j + ".value")));
                        total_all_phi += phi_bh_sub;
                        total_all_ty_le += ty_le_sub;
                        total_all_phi_bh_chua_vat += phi_bh_chua_vat_sub;
                        total_all_tien_vat += tien_vat_sub;
                    }
                }
                if (c_ma_pham_vi == "MCA") {
                    $('#total_tyle_tnds_tn').html((total_all_ty_le));
                    $('#total_phi_chua_vat_tnds_tn').html((total_all_phi_bh_chua_vat).f_formatMoney(0, ".", ","));
                    $('#total_tien_vat_tnds_tn').html((total_all_tien_vat).f_formatMoney(0, ".", ","));
                    $('#total_phi_co_vat_tnds_tn').html((total_all_phi).f_formatMoney(0, ".", ","));
                }
            }
        }
    }
    document.forms[0].C_PHI_BH_NAM.value = total_phi_1_nam;
    document.forms[0].C_PHI_BH_THOI_HAN.value = (total_phi);
    format_string_to_money(document.forms[0].C_PHI_BH_NAM);
    format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    kieu_thanh_toan_xcg_onchange();
}
function load_phi_bh_theo_ty_le_motor(index) {
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var tyle_toan_thoi_han = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
    if (gia_tri > 0 && tyle_toan_thoi_han > 0) {
        var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
        var phi_bh = lam_tron_so(gia_tri * tyle_toan_thoi_han / 100);
        var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
        var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
        var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
        eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
        eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
        eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");

        eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
        format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
        format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
        format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
        load_phi_bao_hiem_motor_all();
    }
}
function change_phi_motor(index) {
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
    var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
    var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
    load_phi_bao_hiem_motor_all();
}
function change_gia_tri_motor(index) {
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + ".value");
        var fk_pvbh = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        if (pham_vi_parent == pham_vi) {
            eval("document.forms[0].C_GIA_TRI_BH" + i + ".value='" + giatribaohiem + "'");
            format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
            load_phi_motor_theo_pham_vi(i, fk_pvbh);
        }
    }
}
function load_pham_vi_bao_hiem_ntn() {
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var RecordID = document.forms[0].RecordID.value;
    var so_tien = 0;
    if (document.forms[0].C_SO_TIEN_VAY) {
        so_tien = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    }
    if (document.forms[0].C_GIA_TRI_BH0) {
        so_tien = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    }
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhamViBHNTN?GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&SoTien=' + so_tien + '&SoThang=' + so_thang + '&RecordID=' + RecordID + '&NgaySinh=' + ngaysinh + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                var total = getNodeValue(getElementsByTagName('Params'));
                $('#phamvibaohiem').html(content);
                $('#TotalRowPhamVi').val(total);
                so_tien_vay_ntn_onchange(document.forms[0].C_GIA_TRI_BH0);
                change_text_pvbh();
            }
        }
        , 'onError': function (req) { }
    })
}
function gia_tri_bh_ntn_onchange(index, phamvibaohiem) {
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_thang = 0;
    if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
        so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhi?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                if (eval("document.forms[0].C_VAT" + index)) {
                    var vat = eval("document.forms[0].C_VAT" + index + ".value");
                    if (phi <= 0) {
                        phi = lam_tron_so(giatribaohiem * tyle / 100);
                    }
                    var phi_chua_vat = lam_tron_so(phi / (1 + (vat / 100)));
                    var tien_vat = lam_tron_so(phi - phi_chua_vat);
                    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                    eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                }
                load_phi_bh_ntn();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_phi_bh_1_nam_ntn() {
    var phi_bh_toan_th = parseFloat(char2number(document.forms[0].C_PHI_BH_THOI_HAN.value));
    var kieu_tt = '1';
    if (document.forms[0].C_KIEU_TT) {
        kieu_tt = document.forms[0].C_KIEU_TT.value;
    }
    if (kieu_tt == '1') {
        document.forms[0].C_PHI_BH_NAM.value = phi_bh_toan_th;
        format_string_to_money(document.forms[0].C_PHI_BH_NAM);
        return;
    }
    var so_tien = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    if (document.forms[0].C_GIA_TRI_BH0) {
        so_tien = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    }
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var so_thang = '12';
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiBHMotNam?SoTien=' + so_tien.toString() + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phibh = getNodeValue(getElementsByTagName('Html'));
                document.forms[0].C_PHI_BH_NAM.value = phibh;
            }
        }
        , 'onError': function (req) { }
    })
}
function LoadTaiSan(event) {
    $('#loading').show();
    var total_taisan = document.forms[0].TotalRowTaisan.value;
    var postData = new FormData();
    var ins = document.getElementById('file_import').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("file_import", document.getElementById("file_import").files[0]);
    }
    postData.append('ToTal', total_taisan);
    var ranNum = Math.floor(Math.random() * 999999);

    $.ajax({
        type: "post",
        url: "/Ajax/ImportTaiSan",
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
                $('#list_taisan').append(content);
                document.forms[0].TotalRowTaisan.value = total;
                if (error != '') {
                    alertZebraContent(error);
                }
            });

        },
        error: function (req) { $('#loading').hide(); }
    });
}
function change_phi_ntn(index) {
    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
    var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
    var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    if (phi_bh_1_nam < 1) {
        var v_ngay_bat_dau = '';
        var v_ngay_ket_thuc = '';
        if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
        }
        if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
        }
        var so_thang = 0;
        var so_nam = 0;
        if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
            if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                if (so_nam > 0 && so_thang > 0) {
                    var so_thang_theo_nam = so_nam * 12;
                    var so_thang_con_lai = so_thang_theo_nam - so_thang;
                    if ((so_thang_con_lai * -1) > 1) {
                        so_nam = (so_nam + 1);
                    }
                    phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                } else {
                    phi_bh_1_nam = phi_bh;
                }
            } else {
                phi_bh_1_nam = phi_bh;
            }
        } else {
            phi_bh_1_nam = phi_bh;
        }
    }
    eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
    //load_pham_vi_bao_hiem_ntn();
}
function change_phi_chua_vat_ntn(index) {
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + index + ".value");
    var phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + index + ".value")));
    var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
    var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
    var phi_chua_vat = parseFloat(char2number(eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value")));
    var tien_vat = lam_tron_so(phi_chua_vat * vat / 100);
    var phi_bh = lam_tron_so(phi_chua_vat + tien_vat);

    eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
    if (phi_bh_1_nam < 1) {
        var v_ngay_bat_dau = '';
        var v_ngay_ket_thuc = '';
        if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
        }
        if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
        }
        var so_thang = 0;
        var so_nam = 0;
        if (v_ngay_bat_dau != '' && v_ngay_ket_thuc != '') {
            if (isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc)) {
                so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc);
                so_nam = tinh_so_nam(v_ngay_bat_dau, v_ngay_ket_thuc);
                if (so_nam > 0 && so_thang > 0) {
                    var so_thang_theo_nam = so_nam * 12;
                    var so_thang_con_lai = so_thang_theo_nam - so_thang;
                    if ((so_thang_con_lai * -1) > 1) {
                        so_nam = (so_nam + 1);
                    }
                    phi_bh_1_nam = lam_tron_so(phi_bh / so_nam);
                } else {
                    phi_bh_1_nam = phi_bh;
                }
            } else {
                phi_bh_1_nam = phi_bh;
            }
        } else {
            phi_bh_1_nam = phi_bh;
        }
    }
    eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value='" + phi_bh_1_nam + "'");
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
    //load_pham_vi_bao_hiem_ntn();
}
function change_phi_pvbh(value, index) {
    eval("document.forms[0].C_PHI_BH" + index + ".value='" + value + "'");
}
function load_canbo() {
    var madonvi = document.getElementById("C_MA_DON_VI").value;
    var nganhang = document.getElementById("C_MA_NGAN_HANG").value;
    var chi_nhanh = document.getElementById("C_CHI_NHANH").value;
    var phonggd = document.getElementById("C_PHONG_GD").value;
    var nguoinhan = document.getElementById("C_NGUOI_NHAN").value;
    if (chi_nhanh == "" && phonggd == "") {
        document.getElementById("C_NGUOI_NHAN").innerHTML = '<option value="">Chọn người nhận bàn giao</option>';
        $("#C_NGUOI_NHAN").select2();
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadCanBo?C_MA_NGAN_HANG=' + nganhang + '&MADONVI=' + madonvi + '&CHI_NHANH=' + chi_nhanh + '&PHONGGD=' + phonggd + '&CANBO=' + nguoinhan + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("C_NGUOI_NHAN").innerHTML = '<option value="">Chọn người nhận bàn giao</option>' + content;
                $("#C_NGUOI_NHAN").select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function load_thong_tin_tt(fk_insurance, p_ma_don_vi, p_ma_ngan_hang, p_index, p_status) {
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadThongTinTT?C_MA_NGAN_HANG=' + p_ma_ngan_hang + '&C_MA_DON_VI=' + p_ma_don_vi + '&FK_INSURANCE=' + fk_insurance + '&C_TRANG_THAI_DON=' + p_status + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#thong_tin_tt' + p_index).html(content);
                $('[data-popup="popup-cuphap' + p_index + '"]').fadeIn(350);
            }
        }
        , 'onError': function (req) { }
    })
}
function load_thong_tin_tt_not_note(fk_insurance, p_ma_don_vi, p_ma_ngan_hang, p_index, p_status) {
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadThongTinTTNotNote?C_MA_NGAN_HANG=' + p_ma_ngan_hang + '&C_MA_DON_VI=' + p_ma_don_vi + '&FK_INSURANCE=' + fk_insurance + '&C_TRANG_THAI_DON=' + p_status + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#thong_tin_tt' + p_index).html(content);
                $('[data-popup="popup-cuphap' + p_index + '"]').fadeIn(350);
            }
        }
        , 'onError': function (req) { }
    })
}
function load_thong_tin_cb(pk_book, p_phong_gd, p_chi_nhanh, p_ma_ngan_hang) {
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadCanBo?C_MA_NGAN_HANG=' + p_ma_ngan_hang + '&CHI_NHANH=' + p_chi_nhanh + '&PHONGGD=' + p_phong_gd + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#pk_book_id').val(pk_book);
                $('#c_ma_nguoi_nhan_2').html(content);
                $('#c_ma_nguoi_nhan_2').select2();
                $('[data-popup="popup-canbo"]').fadeIn(350);
            }
        }
        , 'onError': function (req) { }
    })
}
function load_child_city(p_parent_id, p_type, p_select, p_control, p_html_first) {
    if (p_parent_id == '' || p_parent_id == '0') {
        $('#' + p_control).html('<option value="">' + p_html_first + '</option>');
        $('#' + p_control + ' option').eq(0).prop('selected', true);
        $("#" + p_control).trigger("change");
        return;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadChildCity?C_PARENT_ID=' + p_parent_id + '&C_TYPE=' + p_type + '&C_SELECT=' + p_select + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#' + p_control).html('<option value="">' + p_html_first + '</option>' + content);
                $("#" + p_control).select2();
            }
        }
        , 'onError': function (req) { }
    })
}
function LoadPerson(event) {
    $('#loading').show();
    var total_person = document.forms[0].TotalRowPerson.value;
    var postData = new FormData();
    var ins = document.getElementById('file_import').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("file_import", document.getElementById("file_import").files[0]);
    }
    postData.append('ToTal', total_person);
    var ranNum = Math.floor(Math.random() * 999999);

    $.ajax({
        type: "post",
        url: "/Ajax/ImportPerson",
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
                $('#list_person tbody').append(content);
                document.forms[0].TotalRowPerson.value = total;
                if (error != '') {
                    alertZebraContent(error);
                }
                var t = document.forms[0].ListPersonsDelete.value;
                if (t != "") {
                    var count_del = t.split(",").length;
                    total = total - parseFloat(count_del);
                }
                $('#C_SO_NGUOI').val(total);
            });

        },
        error: function (req) { $('#loading').hide(); }
    });
}
function load_phi_bh_dl() {
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_nguoi = parseFloat(char2number(document.forms[0].C_SO_NGUOI.value));
    var gia_tri = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH.value));
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiDL?FromDate=' + v_ngay_bat_dau + '&ToDate=' + v_ngay_ket_thuc + '&SoNguoi=' + so_nguoi + '&GiaTri=' + gia_tri + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phi_bh = parseFloat(getNodeValue(getElementsByTagName('Html')));
                var tyle = parseFloat(getNodeValue(getElementsByTagName('Params')));
                var count_pv = document.forms[0].TotalRowPhamVi.value;
                for (var i = 0; i < count_pv; i++) {

                    eval("document.forms[0].C_GIA_TRI_BH" + i + ".value='" + gia_tri + "'");
                    eval("document.forms[0].C_TY_LE_PHI" + i + ".value='" + tyle + "'");
                    eval("document.forms[0].C_PHI_BH" + i + ".value='" + phi_bh + "'");
                    format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
                    format_string_to_money(eval("document.forms[0].C_PHI_BH" + i));
                    break;
                }
                document.forms[0].C_PHI_BH_NAM.value = phi_bh;
                document.forms[0].C_PHI_BH_THOI_HAN.value = phi_bh;
                format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);

                var count = parseFloat(char2number(document.forms[0].TotalRowLTT.value));
                var list_ltt_delete = document.forms[0].ListLTTDelete.value;
                for (var i = 0; i < count; i++) {
                    if (list_have_element(list_ltt_delete, i, ',') == -1) {
                        eval("document.forms[0].C_PHI_BH_LTT" + i + ".value='" + phi_bh + "'");
                        format_string_to_money(eval("document.forms[0].C_PHI_BH_LTT" + i));
                    }
                }
            }
        }
        , 'onError': function (req) { }
    })
}
function LoadPersonCovid(event) {
    $('#loading').show();
    var total_person = document.forms[0].TotalRowPerson.value;
    var postData = new FormData();
    var ins = document.getElementById('file_import').files.length;
    for (var x = 0; x < ins; x++) {
        postData.append("file_import", document.getElementById("file_import").files[0]);
    }
    postData.append('ToTal', total_person);
    var ranNum = Math.floor(Math.random() * 999999);

    $.ajax({
        type: "post",
        url: "/Ajax/ImportPersonCovid",
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
                $('#list_person tbody').append(content);
                document.forms[0].TotalRowPerson.value = total;
                if (error != '') {
                    alertZebraContent(error);
                }
                var t = document.forms[0].ListPersonsDelete.value;
                if (t != "") {
                    var count_del = t.split(",").length;
                    total = total - parseFloat(count_del);
                }
                $('#C_SO_NGUOI').val(total);
            });

        },
        error: function (req) { $('#loading').hide(); }
    });
}
function load_pham_vi_bao_hiem_vnvon() {
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var so_thang = document.forms[0].C_THOI_HAN.value;
    var RecordID = document.forms[0].RecordID.value;
    var so_tien = 0;
    if (document.forms[0].C_SO_TIEN_VAY) {
        so_tien = parseFloat(char2number(document.forms[0].C_SO_TIEN_VAY.value));
    }
    if (document.forms[0].C_GIA_TRI_BH0) {
        so_tien = parseFloat(char2number(document.forms[0].C_GIA_TRI_BH0.value));
    }
    var khoi_kh = '';
    if (document.forms[0].C_KHOI_KHACH_HANG) {
        khoi_kh = document.forms[0].C_KHOI_KHACH_HANG.value;
    }
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var doi_tuong = '';
    if (document.forms[0].C_DOI_TUONG) {
        doi_tuong = document.forms[0].C_DOI_TUONG.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhamViBH?GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&KHOI_KH=' + khoi_kh + '&PolicyType=' + policy_type + '&SoTien=' + so_tien + '&SoThang=' + so_thang + '&RecordID=' + RecordID + '&NgaySinh=' + ngaysinh + '&DoiTuong=' + doi_tuong + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                var total = getNodeValue(getElementsByTagName('Params'));
                $('#phamvibaohiem').html(content);
                $('#TotalRowPhamVi').val(total);
                so_tien_vay_onchange_vnvon(document.forms[0].C_GIA_TRI_BH0);
            }
        }
        , 'onError': function (req) { }
    })
}
function gia_tri_bh_onchange_vnvon(index, phamvibaohiem) {
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var so_thang = document.forms[0].C_THOI_HAN.value;

    var khoi_kh = '';
    if (document.forms[0].C_KHOI_KHACH_HANG) {
        khoi_kh = document.forms[0].C_KHOI_KHACH_HANG.value;
    }
    var doi_tuong = '';
    if (document.forms[0].C_DOI_TUONG) {
        doi_tuong = document.forms[0].C_DOI_TUONG.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhi?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&KHOI_KH=' + khoi_kh + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&DoiTuong=' + doi_tuong + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                if (eval("document.forms[0].C_VAT" + index)) {
                    var vat = eval("document.forms[0].C_VAT" + index + ".value");
                    if (phi <= 0) {
                        phi = lam_tron_so(giatribaohiem * tyle / 100);
                    }
                    var phi_chua_vat = lam_tron_so(phi / (1 + (vat / 100)));
                    var tien_vat = lam_tron_so(phi - phi_chua_vat);
                    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                    eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                }
                load_phi_bh_vnvon();
            }
        }
        , 'onError': function (req) { }
    })
}

function load_phi_bh_lp_theo_gia_tri(idx) {
    if (typeof (idx) == "undefined") {
        var count_pv = document.forms[0].TotalRowPhamVi.value;
        for (var i = 0; i < count_pv; i++) {
            var ma_pham_vi = '';
            if ($('#C_MA_PHAM_VI' + i)[0]) {
                if (eval("document.forms[0].C_MA_PHAM_VI" + i + ".value")) {
                    ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
                }
                if (ma_pham_vi == 'MVA') {
                    load_phi_bh_lpx(i);
                }
            }
        }
    } else {
        load_phi_bh_lpx(idx);
    }

}


function gia_tri_bh_lp_onchange(index, phamvibaohiem) {
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var goi_bh = document.forms[0].C_GOI_BH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    var so_thang = 12;
    var thoi_han_bh = eval("document.forms[0].Thoi_han_bh.value");
    var so_cho_ngoi = eval("document.forms[0].lai_phu_xe.value");
    var y = thoi_han_bh / so_thang;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhi?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&GoiBH=' + goi_bh + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params')))) * so_cho_ngoi * y;
                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                if (eval("document.forms[0].C_VAT" + index)) {
                    var vat = eval("document.forms[0].C_VAT" + index + ".value");
                    if (phi <= 0) {
                        phi = lam_tron_so(giatribaohiem * tyle / 100) * so_cho_ngoi;
                    }
                    var phi_chua_vat = lam_tron_so(phi / (1 + (vat / 100)));
                    var tien_vat = lam_tron_so(phi - phi_chua_vat);
                    eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                    eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));
                    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                }
                load_phi_bh_lp_theo_gia_tri(index);
            }
        }
        , 'onError': function (req) { }
    })
}

function load_phi_bh_tnds() {
    for (var tong_phi = 0, total_pham_vi = char2number(document.forms[0].TotalRowPhamVi.value), i = 0; i < parseFloat(total_pham_vi); i++) {
        if ($('#C_PHI_BH' + i)[0]) {
            var phi_bh = char2number(eval("document.forms[0].C_PHI_BH" + i + ".value"));
            tong_phi += parseFloat(phi_bh)
        }
    }
    var phi_bh_thoi_han = tong_phi;
    document.forms[0].C_PHI_BH_THOI_HAN.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    isdate(v_ngay_bat_dau) && isdate(v_ngay_ket_thuc) ? (v_so_thang = tinh_so_thang(v_ngay_bat_dau, v_ngay_ket_thuc), v_so_thang > 12 ? load_phi_bh_1_nam_ntn() : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM))) : (document.forms[0].C_PHI_BH_NAM.value = phi_bh_thoi_han, format_string_to_money(document.forms[0].C_PHI_BH_NAM))
}



function load_phi_bh_lpx(index) {
    var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var tyle_toan_thoi_han = parseFloat(char2number(eval("document.forms[0].C_TY_LE_PHI" + index + ".value")));
    var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
    var so_cho_ngoi = eval("document.forms[0].lai_phu_xe.value");
    var thoi_han_bh = eval("document.forms[0].Thoi_han_bh.value");
    var y = thoi_han_bh / 12;
    if (gia_tri > 0) {
        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
        var phi_bh = lam_tron_so((gia_tri * tyle_toan_thoi_han / 100) * so_cho_ngoi) * y;
        var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
        var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
        var phi_bh_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + index + ".value")));
        eval("document.forms[0].C_PHI_BH" + index + ".value='" + phi_bh + "'");
        eval("document.forms[0].C_TIEN_VAT" + index + ".value='" + tien_vat + "'");
        eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value='" + phi_chua_vat + "'");
    }
    format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
    format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));

    load_phi_bao_hiem_tnds_all();
}



function load_phi_bh_tnds_xcg_new() {
    var so_cho_ngoi = '';
    if (document.forms[0].so_cho_ngoi) {
        so_cho_ngoi = document.forms[0].so_cho_ngoi.value;
    }
    var nhom_xe = '';
    if (document.forms[0].nhom_xcg) {
        nhom_xe = document.forms[0].nhom_xcg.value;
    }
    var loai_xe = '';
    if (document.forms[0].loai_xe) {
        loai_xe = document.forms[0].loai_xe.value;
    }
    var thoi_han_bh = eval("document.forms[0].Thoi_han_bh.value");
    var y = thoi_han_bh / 12;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiTNDSXCG?NhomXe=' + nhom_xe + '&LoaiXe=' + loai_xe + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phi_bh = parseFloat(getNodeValue(getElementsByTagName('Html')));
                var count_pv = document.forms[0].TotalRowPhamVi.value;
                for (var i = 0; i < count_pv; i++) {
                    var ma_pham_vi = '';
                    if (eval("document.forms[0].C_MA_PHAM_VI" + i)) {
                        ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
                    }
                    if (ma_pham_vi == 'MVH') {
                        var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + i + ".value")));
                        if (so_cho_ngoi > 25) {
                            phi_bh = lam_tron_so((4813000 + (30000 * (so_cho_ngoi - 25))) * (1 + (vat / 100)));
                        }
                        phi_bh = phi_bh * y;
                        var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                        var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);
                        var phi_nam = phi_bh;

                        eval("document.forms[0].C_PHI_BH" + i + ".value='" + phi_bh + "'");
                        eval("document.forms[0].C_TIEN_VAT" + i + ".value='" + tien_vat + "'");
                        eval("document.forms[0].C_TIEN_CHUA_VAT" + i + ".value='" + phi_chua_vat + "'");
                        eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value='" + phi_nam + "'");
                        format_string_to_money(eval("document.forms[0].C_PHI_BH" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + i));
                        format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + i));
                        load_phi_bao_hiem_tnds_all();
                        break;
                    }
                }
            }
        }
        , 'onError': function (req) { }
    })
}

function load_pham_vi_bao_hiem_tnds_motor() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    for (var i = 0; i < count_pv; i++) {
        var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
        var phamvibaohiem = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + i + ".value");
        var check = false;
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            check = eval("document.forms[0].cbk_pham_vi" + i + ".checked");
        }
        if (check) {
            eval("load_phi_tnds_motor_theo_pham_vi(" + i + ",'" + phamvibaohiem + "')");
            for (var j = 0; j < count_pv; j++) {
                var c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + j + ".value");
                var phamvibaohiem_sub = eval("document.forms[0].FK_DM_PHAM_VI_BAO_HIEM" + j + ".value");
                if (c_ma_pham_vi_parent == c_ma_pham_vi) {
                    eval("load_phi_tnds_motor_theo_pham_vi(" + j + ",'" + phamvibaohiem_sub + "')");
                }
            }
        }
    }
}
function load_phi_bao_hiem_tnds_all() {
    var count_pv = document.forms[0].TotalRowPhamVi.value;
    var total_phi_1_nam = 0;
    var total_phi = 0;
    for (var i = 0; i < count_pv; i++) {
        var check = false;
        if (eval("document.forms[0].cbk_pham_vi" + i)) {
            check = eval("document.forms[0].cbk_pham_vi" + i + ".checked");
        } else {
            var c_ma_pham_vi_parent = '';
            if (eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + "")) {
                c_ma_pham_vi_parent = eval("document.forms[0].C_MA_PHAM_VI_PARENT" + i + ".value");
            }
            if (c_ma_pham_vi_parent != '') {
                for (var j = 0; j < count_pv; j++) {
                    var c_ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + j + ".value");
                    if (c_ma_pham_vi == c_ma_pham_vi_parent) {
                        if (eval("document.forms[0].cbk_pham_vi" + j)) {
                            check = eval("document.forms[0].cbk_pham_vi" + j + ".checked");
                        }
                        break;
                    }
                }
            }
        }
        var phi_1_nam = 0;
        var phi_bh = 0;
        if (eval("document.forms[0].C_PHI_BH_1_NAM" + i + "")) {
            phi_1_nam = parseFloat(char2number(eval("document.forms[0].C_PHI_BH_1_NAM" + i + ".value")));
        }
        if (eval("document.forms[0].C_PHI_BH" + i + "")) {
            phi_bh = parseFloat(char2number(eval("document.forms[0].C_PHI_BH" + i + ".value")));
        }
        if (check) {
            total_phi_1_nam += phi_1_nam;
            total_phi += phi_bh;
            $('#tong_phi_ltt' + i).html(phi_bh.f_formatMoney(0, ".", ","));
        } else {
            $('#tong_phi_ltt' + i).html(0);
        }
    }
    document.forms[0].C_PHI_BH_NAM.value = total_phi_1_nam;
    var total_dkbs = parseFloat(char2number(document.forms[0].C_TONG_TIEN_DKBS.value));
    $('#dieu_khoan_sdbs_ltt').html(total_dkbs.f_formatMoney(0, ".", ","));
    document.forms[0].C_PHI_BH_THOI_HAN.value = (total_phi + total_dkbs);
    //document.forms[0].C_PHI_BH_THOI_HAN.value = (total_phi);
    format_string_to_money(document.forms[0].C_PHI_BH_NAM);
    format_string_to_money(document.forms[0].C_PHI_BH_THOI_HAN);
    kieu_thanh_toan_xcg_onchange();
}

function load_phi_tnds_motor_theo_pham_vi(index, phamvibaohiem) {
    var ngan_hang = document.forms[0].C_MA_NGAN_HANG.value;
    var loai_xe = document.forms[0].loai_xe.value;
    if (loai_xe == 'XE_MAY_DIEN') {
        loai_xe = 'MOTO2_U50';
    }
    var nhom_kh = document.forms[0].C_NHOM_KH.value;
    var policy_type = document.forms[0].C_POLICY_TYPE.value;
    var giatribaohiem = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
    var ngaysinh = document.forms[0].C_DATE_OF_BIRTH.value;
    var v_ngay_bat_dau = document.forms[0].C_HIEU_LUC_TU_NGAY.value;
    if (eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index)) {
        if (isdate(eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value"))) {
            v_ngay_bat_dau = eval("document.forms[0].C_HIEU_LUC_TU_NGAY" + index + ".value");
        }
    }
    var v_ngay_ket_thuc = document.forms[0].C_HIEU_LUC_DEN_NGAY.value;
    if (eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index)) {
        if (isdate(eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value"))) {
            v_ngay_ket_thuc = eval("document.forms[0].C_HIEU_LUC_DEN_NGAY" + index + ".value");
        }
    }
    var thoi_han_bh = eval("document.forms[0].Thoi_han_bh.value");
    var so_thang = 12;
    var y = thoi_han_bh / so_thang;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadTyLePhiMotor?SoTien=' + giatribaohiem + '&SoThang=' + so_thang + '&LoaiXe=' + loai_xe + '&NhomKH=' + nhom_kh + '&NganHang=' + ngan_hang + '&PolicyType=' + policy_type + '&NgaySinh=' + ngaysinh + '&FK_DanhMucPhamVi=' + phamvibaohiem + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var tyle = getNodeValue(getElementsByTagName('Html'));
                var phi = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                var vat = parseFloat(char2number(eval("document.forms[0].C_VAT" + index + ".value")));
                var gia_tri = parseFloat(char2number(eval("document.forms[0].C_GIA_TRI_BH" + index + ".value")));
                var ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + index + ".value");
                var so_nguoi = parseFloat(char2number(document.forms[0].lai_phu_xe.value));
                var phi_bh = phi * y;
                if (phi <= 0) {
                    phi_bh = lam_tron_so(gia_tri * tyle / 100);
                }
                if (ma_pham_vi == 'MVA') {
                    phi_bh = phi_bh * (so_nguoi <= 0 ? 1 : so_nguoi);
                }
                var phi_chua_vat = lam_tron_so(phi_bh / (1 + (vat / 100)));
                var tien_vat = lam_tron_so(phi_bh - phi_chua_vat);

                eval("document.forms[0].C_TY_LE_PHI" + index + ".value = '" + tyle + "'");
                eval("document.forms[0].C_PHI_BH" + index + ".value = '" + phi_bh + "'");
                format_string_to_money(eval("document.forms[0].C_PHI_BH" + index));
                eval("document.forms[0].C_TIEN_VAT" + index + ".value = '" + tien_vat + "'");
                format_string_to_money(eval("document.forms[0].C_TIEN_VAT" + index));
                eval("document.forms[0].C_TIEN_CHUA_VAT" + index + ".value = '" + phi_chua_vat + "'");
                format_string_to_money(eval("document.forms[0].C_TIEN_CHUA_VAT" + index));

                load_phi_bao_hiem_motor_all();
            }
        }
        , 'onError': function (req) { }
    })
}

function show_pham_vi_tnds_motor(index) {
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
    load_pham_vi_bao_hiem_tnds_motor();
}
//bh tiem chung
function load_phi_bh_tc() {
    var chuong_trinh = '';
    var goibh = '';
    if (document.forms[0].CHUONG_TRINH_BH) {
        chuong_trinh = document.forms[0].CHUONG_TRINH_BH.value;
    }
    if (document.forms[0].C_GOI_BH) {
        goibh = document.forms[0].C_GOI_BH.value;
    }
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        n = document.forms[0].C_DOB.value;
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhiBHTC?ChuongTrinh=' + chuong_trinh + '&GoiBH=' + goibh + '&HieuLucTu=' + t + '&NgaySinh=' + n + '&rnd=' + ranNum;
    //console.log(sLink);
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var phiBH = parseFloat(char2number(getNodeValue(getElementsByTagName('Html'))));
                var so_tien = parseFloat(char2number(getNodeValue(getElementsByTagName('Params'))));
                var count_pv = document.forms[0].TotalRowPhamVi.value;
                for (var i = 0; i < count_pv; i++) {
                    var ma_pham_vi = '';
                    if (eval("document.forms[0].C_MA_PHAM_VI" + i)) {
                        ma_pham_vi = eval("document.forms[0].C_MA_PHAM_VI" + i + ".value");
                    }
                    if (ma_pham_vi == 'A') {
                        eval("document.forms[0].C_PHI_BH" + i + ".value='" + phiBH + "'");
                        eval("document.forms[0].C_GIA_TRI_BH" + i + ".value='" + so_tien + "'");
                        format_string_to_money(eval("document.forms[0].C_PHI_BH" + i));
                        format_string_to_money(eval("document.forms[0].C_GIA_TRI_BH" + i));
                        break;
                    }
                }
                load_phi_bh_vnvon();
                load_dksdbs_tc(chuong_trinh, goibh, t, n);
            }
        }
        , 'onError': function (req) { }
    })
}

function load_dksdbs_tc(chuong_trinh, goibh, t, n) {
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadPhitfootBHTC?ChuongTrinh=' + chuong_trinh + '&GoiBH=' + goibh + '&HieuLucTu=' + t + '&NgaySinh=' + n + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                document.getElementById("listdkbs").innerHTML = content;
            }
        }
        , 'onError': function (req) { }
    })
}

function load_goi_bh_tc(p_control, p_html_first) {
    var t = document.forms[0].C_HIEU_LUC_TU_NGAY.value,
        n = document.forms[0].C_DOB.value;
    var goibh = '';
    if (document.forms[0].C_GOI_BH) {
        goibh = document.forms[0].C_GOI_BH.value;
    }
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/LoadGoiBHTC?GoiBH=' + goibh + '&HieuLucTu=' + t + '&NgaySinh=' + n + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                var content = getNodeValue(getElementsByTagName('Html'));
                $('#' + p_control).html('<option value="">' + p_html_first + '</option>' + content);
                $("#" + p_control).select2();
            }
        }
        , 'onError': function (req) { }
    })
}