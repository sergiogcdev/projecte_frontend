$(document).ready(function(){
    var $container = $('.grid');
    $container.imagesLoaded( {
        // options...
    },
    function() {
        $container.masonry({
            itemSelector: '.grid-item',
        });
    });
});