$(document).ready(function () {
    var btnFinish = $('<button></button>').text('Finish')
        .addClass('btn btn-info')
        .on('click', function () {
            alert('Finish Clicked');
        });
    var btnCancel = $('<button></button>').text('Cancel')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#form__action--wizard').smartWizard("reset");
        });
    // SmartWizard initialize
    $('#form__action--wizard').smartWizard({
        selected: 0,
        enableURLhash: false,
        theme: 'dots',
        transition: {
            animation: 'fade', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
        },
        // toolbarSettings: {
        //     toolbarPosition: 'both', // both bottom
        //     toolbarExtraButtons: [btnFinish, btnCancel]
        // }
    });

});