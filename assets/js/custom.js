/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */

$(document).ready(function() {
	$("#input-chk-all").click(function(){
	    $('.input-chk').not(this).prop('checked', this.checked);
	});
	$.extend( $.validator.messages, {
		required: "Thông tin bắt buộc.",
		remote: "Hãy sửa cho đúng.",
		email: "Vui lòng nhập địa chỉ email hợp lệ.",
		url: "Vui lòng nhập URL hợp lệ.",
		date: "Vui lòng nhập một ngàyhợp lệ.",
		dateISO: "Vui lòng nhập ngày (ISO).",
		number: "Vui lòng nhập số.",
		digits: "Vui lòng nhập chữ số.",
		creditcard: "Vui lòng nhập số thẻ tín dụng.",
		equalTo: "Vui lòng nhập thêm lần nữa.",
		extension: "Phần mở rộng không đúng.",
		maxlength: $.validator.format( "Vui lòng nhập từ {0} kí tự trở xuống." ),
		minlength: $.validator.format( "Vui lòng nhập từ {0} kí tự trở lên." ),
		rangelength: $.validator.format( "Vui lòng nhập từ {0} đến {1} kí tự." ),
		range: $.validator.format( "Vui lòng nhập từ {0} đến {1}." ),
		max: $.validator.format( "Vui lòng nhập từ {0} trở xuống." ),
		min: $.validator.format( "Vui lòng nhập từ {0} trở lên." )
	} );
});
