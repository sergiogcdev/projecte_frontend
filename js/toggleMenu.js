$.toggleMenuFunc = function () {
    if($('ul.lista-navegacion button.toggle-menu span').hasClass('fa-plus-circle')){
        $('ul.lista-navegacion button.toggle-menu span').removeClass('fa fa-plus-circle');
        $('ul.lista-navegacion button.toggle-menu span').addClass('fa fa-times-circle');
        $('li.items-cambiantes').css('display', 'block');
        $('ul.lista-navegacion button.toggle-menu').css('background-color', '#c9372c');
        $('ul.lista-navegacion button.toggle-menu').css('border-color', '#c9372c');
    }
    else {
        $('ul.lista-navegacion button.toggle-menu span').removeClass('fa fa-times-circle');
        $('ul.lista-navegacion button.toggle-menu span').addClass('fa fa-plus-circle');
        $('li.items-cambiantes').css('display', 'none');
        $('ul.lista-navegacion button.toggle-menu').css('background-color', '#44c767');
        $('ul.lista-navegacion button.toggle-menu').css('border-color', '#18ab29');
    }
}

function toggleMenu() {
    $.toggleMenuFunc();
}
