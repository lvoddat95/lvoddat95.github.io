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
            dom: '<"datatable-header"f><"datatable-body"t><"datatable-footer"<"datatable-li"li>p>',
            language: {
                decimal:        "",
                emptyTable:     "Không có dữ liệu trong bảng",
                info:           " Tổng số _TOTAL_ bản ghi",
                infoEmpty:      "Không có bản ghi nào",
                infoFiltered:   "(filtered from _MAX_ total entries)",
                infoPostFix:    "",
                thousands:      ",",
                lengthMenu:     " _MENU_ ",
                loadingRecords: "Đang tải...",
                processing:     "Đang xử lý...",
                search:         "",
                searchPlaceholder: 'Tìm kiếm nhanh ...',
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

        var v_datatable = $('.datatable').DataTable( {
            autoWidth: false,
            responsive: {
                details: {
                    type: 'column'
                },
                breakpoints: [
                    {name: 'desktop', width: Infinity},
                    {name: 'tablet-l', width: 1200},
                    {name: 'tablet-p', width: 992},
                    {name: 'mobile-l', width: 576},
                    {name: 'mobile-p', width: 320}
                ]
            },
            columnDefs: [
                {
                    className: 'control not-desktop text-center',
                    orderable: false,
                    targets:   0
                },
            ],
            lengthMenu: [
                [10, 20, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
                [10, 20, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
            ]
        });

          
        $( "[datatable-collapse]" ).on("shown.bs.collapse", function() {
            $.each($.fn.dataTable.tables(true), function(){
                $(this).DataTable().columns.adjust().draw();
            });
            v_datatable;
        });


        $('[datatable-modal]').on('shown.bs.modal', function(e){
            $($.fn.dataTable.tables(true)).DataTable()
               .columns.adjust()
               .responsive.recalc();
         });

        var table_right = $('.datatable-right').DataTable( {
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

        // // HTML sourced data
        // let v_table = $('.datatable-html').DataTable({
        //     "lengthMenu": [
        //         [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
        //         [10, 25, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
        //     ],
        //     buttons: [
        //         { 
        //             extend: 'copy', 
        //             text: 'Sao chép bảng',
        //             exportOptions: {
        //                 columns: [ 1, 2, 3, 4, 5, 6, 7 ]
        //             }
        //         },
        //         { 
        //             extend: 'csv', 
        //             text: 'Xuất file Csv',
        //             exportOptions: {
        //                 columns: [ 1, 2, 3, 4, 5, 6, 7 ]
        //             }
        //         },
        //         { 
        //             extend: 'excel', 
        //             text: 'Xuất file Excel',
        //             exportOptions: {
        //                 columns: [ 1, 2, 3, 4, 5, 6, 7 ]
        //             }
        //         },
        //         { 
        //             extend: 'pdf', 
        //             text: 'Xuất file Pdf',
        //             exportOptions: {
        //                 columns: [ 1, 2, 3, 4, 5, 6, 7 ]
        //             }
        //         },
        //         { 
        //             extend: 'print', 
        //             text: 'In bảng',
        //             exportOptions: {
        //                 columns: [ 1, 2, 3, 4, 5, 6, 7 ]
        //             }
        //         },
        //     ]
        // });


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

    function hideEmptyColumns(selector) {
        var emptyColumnsIndexes = []; // store index of empty columns here
        // check each column separately for empty cells
        $(selector).find('th').each(function(i) {
            // get all cells for current column
            var cells = $(this).parents('table').find('tr td:nth-child(' + (i + 1) + ')');
            var emptyCells = 0;
     
            cells.each(function(cell) {
                // increase emptyCells if current cell is empty, trim string to remove possible spaces in cell
                if ($(this).html().trim() === '') {
                    emptyCells++;
                }
            });
     
            // if all cells are empty push current column to emptyColumns
            if (emptyCells === $(cells).length) {
                emptyColumnsIndexes.push($(this).index());
            }
        });
     
        // only make changes if there are columns to hide
        if (emptyColumnsIndexes.length > 0) {
            /* add class never to all empty columns
                never is a special class of the Responsive extension:
                Columns with class never will never be visible, regardless of the browser width, and the data will not be shown in a child row
            */
            $((selector).DataTable().columns(emptyColumnsIndexes).header()).addClass('never');
            // Recalculate the column breakpoints based on the class information of the column header cells, class never will now be available to Responsive extension
            $(selector).DataTable().columns.adjust().responsive.rebuild();
            // immediatly call recalc to have Responsive extension updae the display for the cahnge in classes
            $(selector).DataTable().columns.adjust().responsive.recalc();
        }
    }


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