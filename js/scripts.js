

$(document).ready(function(){
	$(".slider").simpleSlider();
});


// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }



// $(".message-from-abcci").typed({
// 	stringsElement: '#typed-strings'
// });


$(function(){
  $("#typed-strings").typed({
    strings: ["Our objectives is to enhance trade relation between the two countries: France and Bangladesh. We facilitate and support companies to develop trade and investment and provide access to prospective partners and information to achieve their goal. <br> Ultimate Bangladeshi Business Network. America Bangladesh Chamber of Commerce & Industry work with leading organization to deliver the very best services in business information and trade between America and Bangladesh. <br> We will work with government agencies of both countries to remove trade barriers(tariff and non-tariff) that U.S. companies face when exporting to Bangladesh."], // ^{number} denotes time in ms to wait

    // typing speed
    typeSpeed: 5,

    // time before typing starts
    startDelay: 0,

    // backspacing speed
    backSpeed: 0,

    // time before backspacing
    backDelay: 50,

    // loop
    loop: false,

    // false = infinite
    loopCount: false,

    // show cursor
    showCursor: true,

    // character for cursor
    cursorChar: "",

    // attribute to type (null == text)
    attr: null,

    // either html or text
    contentType: 'html',

    // call when done callback function
    callback: function() {

       $('.resource').delay(500).fadeIn('slow');
      setTimeout (function () {
        $('.typed-effect + .typed-cursor').css({'opacity': '0', 'animation': 'none'});
      }, 1300);

    },

    // starting callback function before each string
    preStringTyped: function() {},

    //callback for every typed string
    onStringTyped: function() {},

    // callback for reset
    resetCallback: function() {}
  });
  setTimeout ( function() {
    $(".testing-typed").typed({
    strings: ["Testing. ^333Testing. ^111 1, ^111 2, ^111 3."], // ^{number} denotes time in ms to wait

    // typing speed
    typeSpeed: 120,

    // time before typing starts
    startDelay: 0,

    // backspacing speed
    backSpeed: 0,

    // time before backspacing
    backDelay: 800,

    // loop
    loop: true,

    // false = infinite
    loopCount: false,

    // show cursor
    showCursor: true,

    // character for cursor
    cursorChar: "",

    // attribute to type (null == text)
    attr: null,

    // either html or text
    contentType: 'html',

    // call when done callback function
    callback: function() {},

    // starting callback function before each string
    preStringTyped: function() {},

    //callback for every typed string
    onStringTyped: function() {},

    // callback for reset
    resetCallback: function() {}
  });
  }, 6500);
});
