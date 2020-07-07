/* ------------------------------------------------------------------------------
 *
 *  # Datatables data sources
 *
 *  Demo JS code for datatable_data_sources.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableDataSources = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableDataSources = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            responsive: true,
            dom: '<"datatable-header"fl><"datatable-body"t><"datatable-footer"ip>',
            language: {
                decimal:        "",
                emptyTable:     "Không có dữ liệu trong bảng",
                info:           "Hiển thị _START_ - _END_ trên _TOTAL_ bản ghi",
                infoEmpty:      "Không có bản ghi nào",
                infoFiltered:   "(filtered from _MAX_ total entries)",
                infoPostFix:    "",
                thousands:      ",",
                lengthMenu:     "Hiển thị danh sách _MENU_ bản ghi",
                loadingRecords: "Đang tải...",
                processing:     "Đang xử lý...",
                search:         "",
                searchPlaceholder: 'Nhập từ khóa...',
                zeroRecords:    "Không tìm thấy hồ sơ phù hợp",
                paginate: {
                    first:      "Đầu",
                    last:       "Cuối",
                    next:       "Sau >>",
                    previous:   "<< Trước"
                },
                aria: {
                    sortAscending:  ": kích hoạt để sắp xếp cột tăng dần",
                    sortDescending: ": kích hoạt để sắp xếp cột giảm dần"
                },
                buttons: {
                    copyTitle: 'Đã thêm vào clipboard',
                    copyKeys: 'Nhấn ctrl hoặc <i>\u2318</i> + C để sao chép dữ liệu từ bảng vào khay nhớ tạm của bạn. Để hủy, bấm vào tin nhắn này hoặc nhấn Esc.',
                    copySuccess: {
                        _: 'Sao chép %d dòng ',
                        1: 'Sao chép 1 dòng '
                    }
                }
            }
        });

        var table = $('.datatable').DataTable( {
            responsive: {
                details: {
                    type: 'column'
                }
            },
            columnDefs: [
                {
                    className: 'control not-desktop text-center',
                    orderable: false,
                    targets:   0
                },
            ],
            "lengthMenu": [
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
            ],
        });

        var table = $('.datatable-right').DataTable( {
            responsive: {
                details: {
                    type: 'column',
                    target: -1
                }
            },
            columnDefs: [
                {
                    className: 'control not-desktop text-center',
                    orderable: false,
                    targets: -1
                },
            ],
            "lengthMenu": [
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
            ],
        });

        // HTML sourced data
        let v_table = $('.datatable-html').DataTable({
            "lengthMenu": [
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
                [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
            ],
            buttons: [
                { 
                    extend: 'copy', 
                    text: 'Sao chép bảng',
                    exportOptions: {
                        columns: [ 1, 2, 3, 4, 5, 6, 7 ]
                    }
                },
                { 
                    extend: 'csv', 
                    text: 'Xuất file Csv',
                    exportOptions: {
                        columns: [ 1, 2, 3, 4, 5, 6, 7 ]
                    }
                },
                { 
                    extend: 'excel', 
                    text: 'Xuất file Excel',
                    exportOptions: {
                        columns: [ 1, 2, 3, 4, 5, 6, 7 ]
                    }
                },
                { 
                    extend: 'pdf', 
                    text: 'Xuất file Pdf',
                    exportOptions: {
                        columns: [ 1, 2, 3, 4, 5, 6, 7 ]
                    }
                },
                { 
                    extend: 'print', 
                    text: 'In bảng',
                    exportOptions: {
                        columns: [ 1, 2, 3, 4, 5, 6, 7 ]
                    }
                },
            ]
        });


    };

    // Select2 for length menu styling
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.dataTables_length select').select2({
            language: "vi",
            minimumResultsForSearch: Infinity,
            width: 'auto'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDatatableDataSources();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableDataSources.init();
});