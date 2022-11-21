import datatableJson from './vi.json' assert {type: 'json'};

// Select2 
! function () {
	if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
	n.define("select2/i18n/vi", [], function () {
		return {
			inputTooLong: function (n) {
				return "Vui lòng xóa bớt " + (n.input.length - n.maximum) + " ký tự"
			},
			inputTooShort: function (n) {
				return "Vui lòng nhập thêm từ " + (n.minimum - n.input.length) + " ký tự trở lên"
			},
			loadingMore: function () {
				return "Đang lấy thêm kết quả…"
			},
			maximumSelected: function (n) {
				return "Chỉ có thể chọn được " + n.maximum + " lựa chọn"
			},
			noResults: function () {
				return "Không tìm thấy kết quả"
			},
			searching: function () {
				return "Đang tìm…"
			},
			removeAllItems: function () {
				return "Xóa tất cả các mục"
			}
		}
	}), n.define, n.require
}();


$(function () {

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

	// ----floatin input label in input and select

	$('.form-group').find('.floating-control').each(function (index, ele) {
		var $ele = $(ele);
		if ($ele.val() != '' || $ele.is(':selected') === true) {
			$ele.parents('.floating-group').addClass('focused');
		}
	})


	$('.floating-control').on('focus', function (e) {
		$(this).parents('.floating-group').addClass('focused');
	}).on('blur', function () {
		if ($(this).val().length > 0) {
			$(this).parents('.floating-group').addClass('focused');
		} else {
			$(this).parents('.floating-group').removeClass('focused');
		}
	});
	$('.floating-control').on('change', function (e) {
		if ($(this).is('select')) {
			if ($(this).val() === $("option:first", $(this)).val()) {
				$(this).parents('.floating-group').removeClass('focused');
			} else {
				$(this).parents('.floating-group').addClass('focused');
			}
		}
	})



	//---- select2 single----
	$('.customSelect').each(function () {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			language: "vi",
			minimumResultsForSearch: 5,
		}).on("select2:open", function (e) {
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if ($(this).find(':selected').val() === '') {
				$(this).parents('.floating-group').removeClass('focused');
			}
		});
	});

	//---- select2 multiple----
	$('.customSelectMultiple').each(function () {
		var dropdownParents = $(this).parents('.select2Part');
		// var placehldrget = $(this).attr("data-placeholder");
		$(this).select2({
			dropdownParent: dropdownParents,
			language: "vi",
			minimumResultsForSearch: 5,
			// placeholder: placehldrget,
			// tags: true,
			// closeOnSelect: false,
		}).on("select2:open", function (e) {
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if ($(this).val() != '') {
				$(this).parents('.floating-group').addClass('focused');
			} else {
				$(this).parents('.floating-group').removeClass('focused');
			}
		}).on("select2:select", function (e) {
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:unselect", function (e) {
			$(this).parents('.floating-group').addClass('focused');
		})
	});

	var table = $('.datatable').DataTable( {
        dom:            "Bfrtip",
        // scrollY:        "300px",
        scrollX:        true,
        // scrollCollapse: true,
        paging:         false,
        buttons:        [ 'colvis' ],
        // fixedColumns:   {
        //     left: 2
        // },
		"language": datatableJson
    });
	table.columns( [12,13,14,15,16] ).visible( false );
});

var onchange_san_pham = function (p_this) {
	let elemt = $(p_this);
	if (elemt.val() == "tre-chuyen-bay") {
		$("#tre-chuyen-bay").show();
		$("#an-tam-bay-cao").hide();
	} else {
		$("#an-tam-bay-cao").show();
		$("#tre-chuyen-bay").hide();
	}
}