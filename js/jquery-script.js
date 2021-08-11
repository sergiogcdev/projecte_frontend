$( function() {
    $( "#tabs" ).tabs();
} );

$('.sintaxis-hyperlink').on('click', () => {
    toggleIcons('.sintaxis-hyperlink span');
    $('.sintaxis').toggle();
});
$('.poo-hyperlink').on('click', () => {
    toggleIcons('.poo-hyperlink span');
    $('.poo').toggle();
});
$('.interfaz-grafica-hyperlink').on('click', () => {
    toggleIcons('.interfaz-grafica-hyperlink span');
    $('.interfaz-grafica').toggle();
});
$('.jdbc-hyperlink').on('click', () => {
    toggleIcons('.jdbc-hyperlink span');
    $('.jdbc').toggle();
});
$('.jpa-hyperlink').on('click', () => {
    toggleIcons('.jpa-hyperlink span');
    $('.jpa').toggle();
});

function toggleIcons(myElement){
    if($(myElement).hasClass('fa-plus')){
        $(myElement).removeClass('fa-plus');
        $(myElement).addClass('fa-minus');
    }
    else {
        $(myElement).removeClass('fa-minus');
        $(myElement).addClass('fa-plus');
    }
}