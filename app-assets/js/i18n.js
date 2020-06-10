// Select2 
!function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define("select2/i18n/vi", [], function () { return { inputTooLong: function (n) { return "Vui lòng xóa bớt " + (n.input.length - n.maximum) + " ký tự" }, inputTooShort: function (n) { return "Vui lòng nhập thêm từ " + (n.minimum - n.input.length) + " ký tự trở lên" }, loadingMore: function () { return "Đang lấy thêm kết quả…" }, maximumSelected: function (n) { return "Chỉ có thể chọn được " + n.maximum + " lựa chọn" }, noResults: function () { return "Không tìm thấy kết quả" }, searching: function () { return "Đang tìm…" }, removeAllItems: function () { return "Xóa tất cả các mục" } } }), n.define, n.require }();

// Validator 
(function (window, document, $) {
    'use strict';
    $.extend($.validator.messages, {
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
        maxlength: $.validator.format("Vui lòng nhập từ {0} kí tự trở xuống."),
        minlength: $.validator.format("Vui lòng nhập từ {0} kí tự trở lên."),
        rangelength: $.validator.format("Vui lòng nhập từ {0} đến {1} kí tự."),
        range: $.validator.format("Vui lòng nhập từ {0} đến {1}."),
        max: $.validator.format("Vui lòng nhập từ {0} trở xuống."),
        min: $.validator.format("Vui lòng nhập từ {0} trở lên.")
    });
})(window, document, jQuery);