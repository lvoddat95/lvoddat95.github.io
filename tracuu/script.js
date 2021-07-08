// Select2 
!function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define("select2/i18n/vi", [], function () { return { inputTooLong: function (n) { return "Vui lòng xóa bớt " + (n.input.length - n.maximum) + " ký tự" }, inputTooShort: function (n) { return "Vui lòng nhập thêm từ " + (n.minimum - n.input.length) + " ký tự trở lên" }, loadingMore: function () { return "Đang lấy thêm kết quả…" }, maximumSelected: function (n) { return "Chỉ có thể chọn được " + n.maximum + " lựa chọn" }, noResults: function () { return "Không tìm thấy kết quả" }, searching: function () { return "Đang tìm…" }, removeAllItems: function () { return "Xóa tất cả các mục" } } }), n.define, n.require }();


$(function(){

	if ($('[select2]').length > 0) {
	    if (!$().select2) {
	        console.warn('Warning - Select2 Js is not loaded.');
	        return;
	    }
	    $($('[select2]')).select2({ 
	        language: "vi",
	        minimumResultsForSearch: 5,
	    });
	}

	$("#button").click(function() {
		$("#result").slideDown('500', function() {
			$('html, body').animate({
		        scrollTop: $("#result").offset().top
		    }, 500);
		});
	    
	});


});
