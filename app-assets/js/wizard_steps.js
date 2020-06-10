/*=========================================================================================
    File Name: wizard-steps.js
    Description: wizard steps page specific js
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function() {

    // Validate steps wizard

    // Show form
    var form = $(".steps-validation").show();

    $(".steps-validation").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="step">#index#</span> #title#',
        labels: {
            current: "Bước đầu:",
            pagination: "Phân trang",
            finish: "Kết thúc",
            next: "Tiếp theo <i class='icon-arrow-right14' />",
            previous: "<i class='icon-arrow-left13' /> Quay lại",
            loading: "Loading ..."
        },
        onInit: function()
        {   
            $('#ngan_hang').on('change', function (e) {
                console.log(e);
            });
            $('.form-steps-select2').select2();
            $('[data-toggle="popover"]').popover();
        },
        // onStepChanging: function (event, currentIndex, newIndex)
        // {
        //     // Allways allow previous action even if the current form is not valid!
        //     if (currentIndex > newIndex)
        //     {
        //         return true;
        //     }
        //     // Forbid next action on "Warning" step if the user is to young
        //     if (newIndex === 3 && Number($("#age-2").val()) < 18)
        //     {
        //         return false;
        //     }
        //     // Needed in some cases if the user went back (clean up)
        //     if (currentIndex < newIndex)
        //     {
        //         // To remove error styles
        //         form.find(".body:eq(" + newIndex + ") label.error").remove();
        //         form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        //     }
        //     form.validate().settings.ignore = ":disabled,:hidden";
        //     return form.valid();
        // },
        // onFinishing: function (event, currentIndex)
        // {
        //     form.validate().settings.ignore = ":disabled";
        //     return form.valid();
        // },
        // onFinished: function (event, currentIndex)
        // {
        //     alert("Submitted!");
        // }
    });

    // // Initialize validation
    // $(".steps-validation").validate({
    //     ignore: 'input[type=hidden]', // ignore hidden fields
    //     errorClass: 'text-danger',
    //     successClass: 'text-success',
    //     highlight: function(element, errorClass) {
    //         $(element).removeClass(errorClass);
    //     },
    //     unhighlight: function(element, errorClass) {
    //         $(element).removeClass(errorClass);
    //     },
    //     errorPlacement: function(error, element) {
    //         error.insertAfter(element);
    //     },
    //     rules: {
    //         email: {
    //             email: true
    //         }
    //     }
    // });
        

});
