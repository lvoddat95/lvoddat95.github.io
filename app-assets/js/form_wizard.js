var FormWizard = function() {

    //
    // Setup module components
    //

    // Wizard
    var _componentWizard = function() {
        if (!$().steps) {
            console.warn('Warning - steps.min.js is not loaded.');
            return;
        }


        //
        // Wizard with validation
        //

        // Stop function if validation is missing
        if (!$().validate) {
            console.warn('Warning - validate.min.js is not loaded.');
            return;
        }

        // Show form
        var form = $('.steps-validation').show();

        // Initialize wizard
        $('.steps-validation').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                current: "Bước đầu:",
                pagination: "Phân trang",
                finish: "Kết thúc",
                next: "Tiếp theo <i class='icon-arrow-right14' />",
                previous: "<i class='icon-arrow-left13' /> Quay lại",
                loading: "Loading ...",
                finish: '<i class="icon-floppy-disk" /> Cập nhập'
            },
            transitionEffect: 'fade',
            autoFocus: true,
            // onStepChanging: function (event, currentIndex, newIndex) {

            //     // Allways allow previous action even if the current form is not valid!
            //     if (currentIndex > newIndex) {
            //         return true;
            //     }

            //     // Needed in some cases if the user went back (clean up)
            //     if (currentIndex < newIndex) {

            //         // To remove error styles
            //         form.find('.body:eq(' + newIndex + ') label.error').remove();
            //         form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
            //     }

            //     form.validate().settings.ignore = ':disabled,:hidden';
            //     return form.valid();
            // },
            // onFinishing: function (event, currentIndex) {
            //     form.validate().settings.ignore = ':disabled';
            //     return form.valid();
            // },
            onFinished: function (event, currentIndex) {
                if ($('#modal_form').length == 0 ) return;
                var v_tr = $('#ban_chao_list tbody tr').length + 1;
                $('#ban_chao_list tbody').append('<tr> <td class="text-center">'+v_tr+'</td><td>71C05150</td><td>Xe khác</td><td>2019</td><td>1,690,000</td><td>166,000</td> <td>1,856,000</td> <td align="center"><a href="javascript:;" title="Xem chi tiết" class="btn bg-primary btn-labeled btn-labeled-left mr-2"><b><i class="icon-file-eye"></i></b> Xem</a> <a href="javascript:;" title="Xóa đối tượng" onclick="_xoa_dong(this);" class="btn bg-danger-300 btn-labeled btn-labeled-left mr-2"><b><i class="icon-trash"></i></b> Xóa</a></td> </tr>');
                $('#modal_form').modal('hide');
            }
        });


        // Initialize validation
        $('.steps-validation').validate({
            ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
            errorClass: 'validation-invalid-label',
            highlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },

            // Different components require proper error label placement
            errorPlacement: function(error, element) {

                // Unstyled checkboxes, radios
                if (element.parents().hasClass('form-check')) {
                    error.appendTo( element.parents('.form-check').parent() );
                }

                // Input with icons and Select2
                else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
                    error.appendTo( element.parent() );
                }

                // Input group, styled file input
                else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
                    error.appendTo( element.parent().parent() );
                }

                // Other elements
                else {
                    error.insertAfter(element);
                }
            },
            rules: {
                email: {
                    email: true
                }
            }
        });
    };

    var _componentCustom = function() {
      
    }

    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentWizard();
            _componentCustom();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormWizard.init();
});
