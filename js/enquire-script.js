enquire.register("screen and (min-width: 320px) and (max-width: 480px)", {
    match : function() {
        $('ul.lista-navegacion button.toggle-menu').css("display", "block");
        $('ul.lista-navegacion button.toggle-menu span').removeClass('fa fa-times-circle');
        $('ul.lista-navegacion button.toggle-menu span').addClass('fa fa-plus-circle');
        $('li.items-cambiantes').css('display', 'none');
    },
    unmatch : function() {
        $('ul.lista-navegacion button.toggle-menu').css("display", "none");
        $('li.items-cambiantes').css('display', 'inline-block');
    }
});