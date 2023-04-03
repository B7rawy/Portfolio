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
  


