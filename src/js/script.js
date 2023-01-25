$(document).ready(function(){
$('.review__carousel').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Timer

var countdown = 30 * 60 * 1000;
var timerId = setInterval(function(){
  countdown -= 1000;
  var min = Math.floor(countdown / (60 * 1000));
  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);

  if (countdown <= 0) {
     alert("30 min!");
     clearInterval(timerId);
  } else {
     $("#countTime").html(min + " : " + sec);
  }

}, 1000);