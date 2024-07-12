document.addEventListener('DOMContentLoaded', function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = [
        {
            src: './media/project-1.png',
            w: 1600,
            h: 900
        },
        // Add more images here
    ];

    var options = {
        index: 0
    };

    document.querySelectorAll('a').forEach(function (el, index) {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            options.index = index;
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    });
});
