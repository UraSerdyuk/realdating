import './components/menu';
import firstAnimation from './components/test';
import secondAnimation from './components/test_3';
import thirdAnimation from './components/test2_4_to_check';
import fourthAnimation from './components/test_4-script_test';

secondAnimation();

var windowTop = 0;
var windowHeight = $(window).height();
var vuePos;

let qq = true;
let ee = true;
let rr = true;

$(window).scroll(function() {
  windowTop = $(this).scrollTop();
  vuePos = windowTop + windowHeight/2;
  if (vuePos > $('#fourthAnimation').offset().top) {
    if(rr) {
      fourthAnimation();
      rr = false;
    }
  } else if (vuePos > $('#thirdAnimation').offset().top) {
    if(qq) {
      thirdAnimation();
      qq = false;
    }
  } else if (vuePos > $('#firstAnimation').offset().top) {
    if (ee) {
      firstAnimation();
      ee = false;
    }
  }
});

//parallax effect for blocks

$(window).on('scroll', function() {
  myParallax();
});

function myParallax() {

  let wScroll = $(window).scrollTop();

  $('.parallax-block1').css('top', (wScroll*-0.125) + 150 + 'px');
  $('.parallax-block2').css('top', (wScroll*0.125) - 25 + 'px');
  $('.parallax-block3').css('top', (wScroll*0.125) - 450 + 'px');
  $('.parallax-block4').css('top', (wScroll*-0.125) + 200 + 'px');
  $('.parallax-block5').css('top', (wScroll*0.125) - 350 + 'px');
  $('.parallax-block6').css('top', (wScroll*0.125) - 200 + 'px');
}

