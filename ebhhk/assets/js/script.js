$(document).ready(function () {

    SumFee();

    formatTimeInput();

    // Thay đổi thông tin người được bảo hiểm khi nhập
    $('#ThongTinNguoiYeuCauBaoHiem').find('[data-field]').on('change', function () {
        let value = $(this).val();
        let field = $(this).data('field');

        if ($('input[name="IsNguoiDuocBH"]').is(":checked")) {
            if($('[data-field=' + field + ']').is('select')){
                if($('[name=' + field + ']').val() != value){
                    $('[name=' + field + ']').select2('val',value);
                }
            }else{
                $('[name=' + field + ']').val(value);
            }
        }
    });

});


// Kiểm tra check box "true" nếu là người mua bảo hiểm thì lấy thông tin sang người được bảo hiểm
var IsNguoiMuaBHOnChange = function (elem) {
    let $Name = $('[name="Name0"]');
    let $Gender = $('[name="Gender0"]');
    let $NgaySinh = $('[name="NgaySinh0"]');
    let $CMT = $('[name="CMT0"]');
    let $SDT = $('[name="SDT0"]');
    let $Email = $('[name="Email0"]');

    let NameNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $Name.attr('name') + ']')).val();
    let GenderNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $Gender.attr('name') + ']')).val();
    let NgaySinhNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $NgaySinh.attr('name') + ']')).val();
    let CMTNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $CMT.attr('name') + ']')).val();
    let SDTNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $SDT.attr('name') + ']')).val();
    let EmailNDBH =  $('#ThongTinNguoiYeuCauBaoHiem').find(('[data-field=' + $Email.attr('name') + ']')).val();

    if ($(elem).is(":checked")) {
        $Name.prop( "disabled", true ).val(NameNDBH);
        $Gender.prop( "disabled", true ).select2("val", GenderNDBH);
        $NgaySinh.prop( "disabled", true ).val(NgaySinhNDBH);
        $CMT.prop( "disabled", true ).val(CMTNDBH);
        $SDT.prop( "disabled", true ).val(SDTNDBH);
        $Email.prop( "disabled", true ).val(EmailNDBH);
    }else{
        $Name.prop( "disabled", false );
        $Gender.prop( "disabled", false );
        $NgaySinh.prop( "disabled", false );
        $CMT.prop( "disabled", false );
        $Email.prop( "disabled", false );
    }
}


// Hàm format định dạng nhập thời gian theo định dạng hh:mm
function formatTimeInput() {
    const timeInputs = document.getElementsByClassName('input-time');

    for (let i = 0; i < timeInputs.length; i++) {
        const timeInput = timeInputs[i];

        timeInput.addEventListener('keyup', function (event) {
            let timeValue = timeInput.value.trim();
            const keyCode = event.keyCode || event.which;

            // Kiểm tra nếu không phải là số hoặc phím ":" thì không hiển thị giá trị
            if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39 || keyCode === 9 || keyCode === 190 || keyCode === 110)) {
                timeInput.value = '';
                return;
            }

            // Định dạng giờ theo định dạng hh:ss
            if (timeValue.length === 2 && keyCode !== 8 && keyCode !== 46) {
                timeValue += ':';
            } else if (timeValue.length > 5) {
                timeValue = timeValue.slice(0, 5);
            }

            timeInput.value = timeValue;
        });
    }
}

// Hàm tính tổng phí
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

// Hàm thay đổi loại di chuyển
var LoaiChuyenDiOnChange = function (elem) {
    var self = elem;
    if (elem.value == 'khu-hoi') {
        $('#NgayVeBox').slideDown();
    } else {
        $('#NgayVeBox').slideUp();
    }
}

// Hàm thay đổi gói bảo hiểm
var GoiBaoHiemOnChange = function (elem) {
    if (elem.value != 'ca-nhan') {
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", false);
    } else {
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", true);
    }
}

// Hàm thay đổi chương trình bảo hiểm
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

// Hàm thay đổi nếu xuất hóa đơn
var XuatHoaDonOnChange = function (elem) {
    if ($(elem).is(":checked")) {
        $('#form-xuat-hoa-don').show();
    } else {
        $('#form-xuat-hoa-don').hide();

    }
}

// Hàm thay đổi loại chuyên khách hàng
var LoaiChuyenKhachHangOnChange = function (elem) {
    if (elem.value == 'doanh-nghiep') {
        $('#hoa-don-doanh-nghiep').show();
        $('#hoa-don-ca-nhan').hide();
    } else {
        $('#hoa-don-doanh-nghiep').hide();
        $('#hoa-don-ca-nhan').show();
    }
}








// JS BẢO HIỂM VẬT CHẤT Ô TÔ-----------------------------------------------------------------------------------------------------------------------------

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
    } else {
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


var load_event_onchange = function () {
    console.log("event here");
    console.log("Tham khao event: load_phi_tai_nan_nguoi_ngoi_tren_xe");
}