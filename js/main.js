
let offsetImg1 = $('.image1').offset().left;
const widthImg1 = $('.image1').width();
let windowWidth = $(window).width();
const naviHeight = $('.navi').outerHeight() + 60;

//get some elements
const intro = $('.intro');
const aboutMe = $('#aboutMe');
const navi = $('.navi');

let naviTop = intro.offset().top + intro.outerHeight();

//set  initial position of .intro
intro.css({ 'left': offsetImg1 + 30, 'top': naviHeight, 'font-size': widthImg1 / 20 });

//set initial position of navigation
navi.css('margin-left', offsetImg1);
navi.css('width', widthImg1);

//set initial font for resize
aboutMe.css('font-size', '40px');

if (windowWidth <= 414) {

    $('.img1').attr('src', 'img/img1small.jpg');
    $('.img2').attr('src', 'img/img2small.jpg');
    $('.img3').attr('src', 'img/img3small.jpg');
    $('.img4').attr('src', 'img/img4small.jpg');

}

function placeArrow() {

    const topPosition = intro.outerHeight();
    const leftPosition = intro.outerWidth();


    $('.fa-angle-double-down').css('width', $('.fa-angle-double-down').height());
    $('.fa-angle-double-down').css('top', topPosition - ($('.fa-angle-double-down').height()) / 2);
    $('.fa-angle-double-down').css('left', leftPosition - ($('.fa-angle-double-down').width()) / 2);

}

function adjustFontSize() {
    while ($('.contentAboutMe').height() >= aboutMe.height()) {
        aboutMe.css('font-size', '-=2px');
    }

    if ($('.contentAboutMe').height() <= aboutMe.height() * 0.75) {
        aboutMe.css('font-size', '+=2px');
    }


}

function showFoot() {

    windowWidth = $(window).width();
    if (windowWidth <= 414) {

        $('.img1').attr('src', 'img/img1small.jpg');
        $('.img2').attr('src', 'img/img2small.jpg');
        $('.img3').attr('src', 'img/img3small.jpg');
        $('.img4').attr('src', 'img/img4small.jpg');

    }
    else {
        $('.img1').attr('src', 'img/img1.jpg');
        $('.img2').attr('src', 'img/img2.jpg');
        $('.img3').attr('src', 'img/img3.jpg');
        $('.img4').attr('src', 'img/img4.jpg');
    }

    offsetImg1 = $('.image1').offset().left;
    const currentScroll = $(window).scrollTop();
    const offsetImg3 = $('.image3').offset().top;
    const heightImg2 = $('.image2').height();
    const widthImg1 = $('.image1').width();

    //set position of .intro and font-size
    const naviHeight = $('.navi').outerHeight() + 60;
    intro.css({ 'left': offsetImg1 + 30, 'top': naviHeight, 'font-size': widthImg1 / 20 });


    $('.foot').css('margin-left', offsetImg1);


    //set current position of navi
    navi.css('margin-left', offsetImg1);
    navi.css('width', $(window).width() - 2 * offsetImg1);

    //fade-out intro
    intro.css('opacity', 1 - $(window).scrollTop() / 500);

    //set initial font for resize
    aboutMe.css('font-size', '40px');


    //show .foot
    if (offsetImg3 - $(window).height() < currentScroll) {
        $('.foot').addClass('showFoot');
    }
    else $('.foot').removeClass('showFoot');

    adjustFontSize();

}

//toggle visibilty of #aboutMe and adjust font-size
function showInfo() {

    const chosenClassName = $(this).attr('class');
    if ($('.anyclass').hasClass('show')) {
        $('.anyclass').removeClass('show');
    }

    $('#' + chosenClassName).toggleClass('show');


    if ('#' + chosenClassName == '#aboutMe') {
        $('.modal').addClass('show');
        $('.intro').addClass('hideIntro');
        adjustFontSize();
    }


}

placeArrow();


$(window).on('scroll resize orientationchange', showFoot);
$('a').on('click', showInfo);

$('.anyclass').on('click', () => $('.anyclass').removeClass('show'));
$('.anyclass').on('click', () => $('.anyclass').removeClass('hideIntro'));
$('.anyclass').on('click', () => $('.modal').removeClass('show'));
$('.modal').on('click', () => $('.modal, .anyclass').removeClass('show'));
$('.modal').on('click', () => $('.anyclass').removeClass('hideIntro'));

$(window).on('resize orientationchange', placeArrow);