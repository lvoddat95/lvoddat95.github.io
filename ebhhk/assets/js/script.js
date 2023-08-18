(function() {
    'use strict';

   
    // Your code here...
})();

var LoaiChuyenDiOnChange = function(elem){
    var self = elem;
    console.log(elem.value);
    if(  elem.value == 'khu-hoi' ){
        $('#NgayVeBox').slideDown();
    }else{
        $('#NgayVeBox').slideUp();
    }
}

var GoiBaoHiemOnChange = function(elem){
    if(elem.value != 'ca-nhan'){
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", false);
    }else{
        $('input[name="SoLuong"], input[name="SoLuongTreEm"]').prop("disabled", true);
    }
}

var ChuongTrinhOnChange= function(elem){
    if(elem.value == 'ct2'){
        $('#chuong-trinh-2').show();
        $('#chuong-trinh-1').hide();
        $('#total_phi').text("72,000 VNĐ");
    }else{
        $('#chuong-trinh-1').show();
        $('#chuong-trinh-2').hide();
        $('#total_phi').text("54,000 VNĐ");
    }
}