function toggleClass(el, className) {
    el.classList.toggle(className);
}


function toggleVideo(el, className) {
    el.closest('.video-wrapper').classList.toggle('video-is-off');
    el.classList.toggle(className);
}


// Copy this
function ConfirmZebraByContentAjax(p_elem, p_content_id, p_url, p_name_form) {
    if (typeof name_form === "undefined") name_form = 'vswForm';
    let elem = document.getElementById(p_content_id);
    let title = p_elem.getAttribute("title");
    if (title == "null" || title == '') title = 'Thông báo';

    $.Zebra_Dialog({
        source: {
            inline: elem.innerHTML
        },
        type: "confirmation",
        overlay_close: !1,
        title: title,
        buttons: [{
            caption: "Có",
            callback: function () {
                $('#loading').show();
                var x = setInterval(function () { vsw_exec_cmd_ajax(url, name_form); clearInterval(x); }, 1000);
            }
        }, {
            caption: "Không",
            callback: function () {
            }
        }]
    })
}