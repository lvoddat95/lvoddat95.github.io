$(document).ready(function () {

    function setClasses(index, steps) {
        if (index < 0 || index > steps) return;
        if (index == 0) {
            $("#prev").prop('disabled', true).css({
                "visibility": "hidden",
                "opacity": "0"
            });
        } else {
            $("#prev").prop('disabled', false).css({
                "visibility": "visible",
                "opacity": "1"
            });
        }
        if (index == steps) {
            $("#next").html('Hoàn thành');
        } else {
            $("#next").html('Tiếp tục <i class="far fa-fw fa-long-arrow-right"></i>');
        }
        $(".step-wizard ul li").each(function () {
            $(this).removeClass();
        });
        $(".step-wizard ul li:lt(" + index + ")").each(function () {
            $(this).addClass("done");
        });
        $(".step-wizard ul li:eq(" + index + ")").addClass("active");
        $(".step-wizard .step-panel").each(function () {
            $(this).hide();
        });
        $(".step-wizard .step-panel:eq(" + index + ")").show();
        var p = index * (100 / steps);
        $("#progressbar").width(p + '%');
    }

    $(".step-wizard ul button").click(function (e) {
        e.preventDefault();
        var step = $(this).find("div.step-number")[0].innerText;
        var steps = $(".step-wizard ul li").length;
        setClasses(step - 1, steps - 1);
    });

    $("#prev").click(function (e) {
        e.preventDefault();
        var step = $(".step-wizard ul li.active div.step-number")[0].innerText;
        var steps = $(".step-wizard ul li").length;
        setClasses(step - 2, steps - 1);
        scroll_to_element( $('.step-nav'), 700 );
    });

    $("#next").click(function (e) {
        e.preventDefault();
        if ($(this).text() == 'Hoàn thành') {
            alert("submit the form?!?")
        } else {
            var step = $(".step-wizard ul li.active div.step-number")[0].innerText;
            var steps = $(".step-wizard ul li").length;
            setClasses(step, steps - 1);
        }
        console.log($(this));
        scroll_to_element( $('.step-nav'), 700 );
    });

    // initial state setup
    setClasses(0, $(".step-wizard ul li").length);

    // $(".btn-mua").click(function (e) {
    //     e.preventDefault();
    //     scroll_to_element( $('#entry__form'), 700 );
    // });
});

var scroll_to_element = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}