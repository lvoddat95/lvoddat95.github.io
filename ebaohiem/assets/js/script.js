function toggleClass(el, className) {
    el.classList.toggle(className);
}


function toggleVideo(el, className) {
    el.closest('.video-wrapper').classList.toggle('video-is-off');
    el.classList.toggle(className);
}
