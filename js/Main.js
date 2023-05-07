// Main Title
// Main Title
// Main Title

$( document ).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
} );



// CrosHairr
// CrosHairr
// CrosHairr
// CrosHairr

var browserPrefix = "";
var usrAg = navigator.userAgent;
if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
  browserPrefix = "-webkit-";
} else if (usrAg.indexOf("Opera") > -1) {
  browserPrefix = "-o";
} else if (usrAg.indexOf("Firefox") > -1) {
  browserPrefix = "-moz-";
} else if (usrAg.indexOf("MSIE") > -1) {
  browserPrefix = "-ms-";
}

$("body")
  .css({ cursor: "none" })
  .prepend('<div class="cursor"></div><div class="cursor-follower"></div>');

var cursor = $(".cursor"),
  follower = $(".cursor-follower");
var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });
    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});
$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$("a").on("mouseenter", function () {
  cursor.addClass("cursoractive");
  follower.addClass("followeractive");
});
$("a").on("mouseleave", function () {
  cursor.removeClass("cursoractive");
  follower.removeClass("followeractive");
});


// Mobile Menu
// Mobile Menu
// Mobile Menu
// Mobile Menu

  //javascript for navigation bar effect on scroll
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });




// Parallax Icons  
// Parallax Icons  
// Parallax Icons  

  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  };
  




// Project SLider 
// Project SLider 
// Project SLider 
// Project SLider 


  if(window.innerWidth < 1200) {
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,
        spaceBetween: 0,
        autoplay: 2500,
        loop: !0
    })
} else {
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        parallax: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,
        spaceBetween: 0,
        speed: 1500,
        parallax: !0,
        autoplay: 2500,
        loop: !0
    })
}











var textPaths = document.querySelectorAll('textPath');

textPaths.forEach(function(textPath) {
  var path = document.querySelector(textPath.getAttribute('href'));
  var pathLength = path.getTotalLength();

  function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset); 
  }

  updateTextPathOffset(pathLength);

  function onScroll(){
    requestAnimationFrame(function(){
      var rect = textPath.getBoundingClientRect();
      var scrollPercent = rect.y / window.innerHeight;
      updateTextPathOffset( scrollPercent * pathLength );
    });
  }

  window.addEventListener('scroll',onScroll);
});

 






// Smothe scrollee
// Smothe scrollee
// Smothe scrollee
// Smothe scrollee
// Smothe scrollee

// function init() {
//     new SmoothScroll(document, 120, 10);
//   }
  
//   function SmoothScroll(target, speed, smooth) {
//     if (target === document)
//       target =
//         document.scrollingElement ||
//         document.documentElement ||
//         document.body.parentNode ||
//         document.body; // cross browser support for document scrolling
  
//     var moving = false;
//     var pos = target.scrollTop;
//     var frame =
//       target === document.body && document.documentElement
//         ? document.documentElement
//         : target; // safari is the new IE
  
//     target.addEventListener("mousewheel", scrolled, { passive: false });
//     target.addEventListener("DOMMouseScroll", scrolled, { passive: false });
  
//     function scrolled(e) {
//       e.preventDefault(); // disable default scrolling
  
//       var delta = normalizeWheelDelta(e);
  
//       pos += -delta * speed;
//       pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling
  
//       if (!moving) update();
//     }
  
//     function normalizeWheelDelta(e) {
//       if (e.detail) {
//         if (e.wheelDelta)
//           return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
//         // Opera
//         else return -e.detail / 3; // Firefox
//       } else return e.wheelDelta / 120; // IE,Safari,Chrome
//     }
  
//     function update() {
//       moving = true;
  
//       var delta = (pos - target.scrollTop) / smooth;
  
//       target.scrollTop += delta;
  
//       if (Math.abs(delta) > 0.5) requestFrame(update);
//       else moving = false;
//     }
  
//     var requestFrame = (function () {
//       // requestAnimationFrame cross browser
//       return (
//         window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         function (func) {
//           window.setTimeout(func, 1000 / 50);
//         }
//       );
//     })();
//   }
  
//   window.addEventListener("DOMContentLoaded", init);








// Let's Play Poxes Move With mouse
// Let's Play Poxes Move With mouse
// Let's Play Poxes Move With mouse
// Let's Play Poxes Move With mouse
// Let's Play Poxes Move With mouse



  const cardWrapper = document.querySelectorAll('.card-wrapper');
  const speed = 0.06;
  
  cardWrapper.forEach((wrapper) => {
    const card = wrapper.querySelector('.card');
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 4;
    const centerY = rect.top + rect.height / 4;
  
    wrapper.addEventListener('mousemove', (event) => {
      const x = (event.clientX - centerX) * speed;
      const y = (event.clientY - centerY) * speed;
      card.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    wrapper.addEventListener('mouseleave', () => {
      card.style.transform = `translate(0px, 0px)`;
    });
  });






  


  