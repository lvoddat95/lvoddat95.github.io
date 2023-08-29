$(document).ready(function () {
    SumFee();
});


function SumFee() {
    let $total_fee = $total_fee_vat = $vat_fee = 0;
    $.each($('.ChuongTrinh'), function (index, elem) {
        if (elem.checked == true) {
            let fee = parseFloat($(elem).attr('data-fee'));
            $total_fee += fee;
        }
    });

    $vat_fee = 0.1 * $total_fee;

    $total_fee_vat = $total_fee + $vat_fee;

    $('.total_phi').text(parseFloat($total_fee).f_formatMoney(0, ".", ",") + ' VNĐ')
    $('.total_phi_vat').text(parseFloat($total_fee_vat).f_formatMoney(0, ".", ",") + ' VNĐ')
}

var LoaiChuyenDiOnChange = function (elem) {
    var self = elem;
    console.log(elem.value);
    if (elem.value == 'khu-hoi') {
        $('#NgayVeBox').slideDown();
    } else {
        $('#NgayVeBox').slideUp();
    }
}

var GoiBaoHiemOnChange = function (elem) {
    if (elem.value != 'ca-nhan') {
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", false);
    } else {
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", true);
    }
}

var ChuongTrinhOnChange = function (elem, program) {
    if (elem.value == 'ct2') {
        $('#' + program).find('.chuong-trinh-2').show();
        $('#' + program).find('.chuong-trinh-1').hide();
    } else {
        $('#' + program).find('.chuong-trinh-1').show();
        $('#' + program).find('.chuong-trinh-2').hide();
    }
    let fee = $(elem).data('fee');
    $('#' + program).find('.total-txt').text(parseInt(fee).f_formatMoney(0, ".", ",") + ' VNĐ');

    SumFee();
}


var XuatHoaDonOnChange = function (elem) {
    if ($(elem).is(":checked")) {
        $('#form-xuat-hoa-don').show();
    } else {
        $('#form-xuat-hoa-don').hide();

    }
}

var LoaiChuyenKhachHangOnChange = function (elem) {
    if (elem.value == 'doanh-nghiep') {
        $('#hoa-don-doanh-nghiep').show();
        $('#hoa-don-ca-nhan').hide();
    } else {
        $('#hoa-don-doanh-nghiep').hide();
        $('#hoa-don-ca-nhan').show();
    }
}


var UploadFile = function (elem) {
    const file = elem.files[0];
    const preview = $(elem).parent().find('.upload-img-preview');

    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
        // Create a FileReader object
        const reader = new FileReader();

        // Set the image source when the file is loaded
        reader.onload = function (e) {
            preview.show().attr('src', e.target.result);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    }else{
        preview.hide().attr('src', '');
    }
}


var ThongTinChuXeOnChange = function (elem) {
    if ($(elem).is(":checked")) {
        $('.payment-title').text('2. Thông tin chủ xe');
        $('.label-tt-chu-xe').hide();
        $('.label-tt-lai-xe').hide();
        $('.box-tt-lai-xe').slideUp();
    } else {
        $('.payment-title').text('2. Thông tin chủ xe / lái xe');
        $('.label-tt-chu-xe').show();
        $('.label-tt-lai-xe').show();
        $('.box-tt-lai-xe').slideDown();
    }
}