$('.slideOne').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slideTwo').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        }else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger').addEventListener('click', function(){
        document.querySelector('.navMenu').classList.toggle('open')
    });
});

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger2').addEventListener('click', function(){
        document.querySelector('.nav2').classList.toggle('open')
    })
})