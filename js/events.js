function createModalItem(data) {
    $('.modal').text(' ');

    var modal = '<div id="modal1" class="modal">' +
        '<div class="modal__header">' +
        '<span class="modal_close"><img src="img/close.png"></span>' +
        '</div>' +

        '<div class="modal__item">' +
        '<div class="item__title">' + data.title + '</div>' +
        '<img src=' + data.src + '>' +

        '<p>' + data.text + '</p></div></div>';

    $('.modal').append(modal);
}

$(document).ready(function () {

    $('.show-item').click(function (event) {
        event.preventDefault();

        var id = $(this).attr('data-id');
        $.get('data/data.json', function (data) {
            createModalItem(data[+id]);
        });

        $('#overlay').fadeIn(400,
            function () {
                $('.modal')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });

    $('.modal_close, #overlay').click(function () {
        $('.modal')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            });
    });


    $('.link__burger-menu').click(function () {
        $(this).css('display', 'none');
        $('.close__burger-menu').css('display', 'block');
        $('.main__menu').animate({width: '150'}, 600);
    });


    $('.close__burger-menu').click(function () {
        $(this).css('display', 'none');
        $('.main__menu').animate({width: '0'}, 600);
        $('.link__burger-menu').css('display', 'block');
    });

    $('.search_mobile').click(function () {
        $('.search').toggleClass('search-active');
    });

});


