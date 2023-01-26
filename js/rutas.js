$(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.curso').show('1000');
        } else {
            $('.curso').not('.' + valor).hide('1000');
            $('.curso').filter('.' + valor).show('1000');
        }
    });

    let trabajo = $('#trabajo').offset().top,
        interes = $('#interes').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function() {
        let trabajo = $('#trabajo').offset().top,
            interes = $('#interes').offset().top,
            contacto = $('#contacto').offset().top;
    });
    /*
        $('#enlace-inicio').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });

        $('#enlace-trabajo').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajo - 50
            }, 600);
        });

        $('#enlace-interes').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: interes - 50
            }, 600);
        });

        $('#enlace-contacto').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto - 50
            }, 600);
        });
        */
});