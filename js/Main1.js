
// Buzz Out Words
$(document).ready(function () {
  $('.buzz').each(function () {
    $(this).attr('data-buzz', $(this).text());
  });
});


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
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

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
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
};



// Project Slider
if (window.innerWidth < 1200) {
  new Swiper(".swiper-container", {
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
  new Swiper(".swiper-container", {
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



// Text Path Animation
var textPaths = document.querySelectorAll('textPath');
textPaths.forEach(function (textPath) {
  var path = document.querySelector(textPath.getAttribute('href'));
  var pathLength = path.getTotalLength();

  function updateTextPathOffset(offset) {
    textPath.setAttribute('startOffset', offset);
  }

  updateTextPathOffset(pathLength);

  function onScroll() {
    requestAnimationFrame(function () {
      var rect = textPath.getBoundingClientRect();
      var scrollPercent = rect.y / window.innerHeight;
      updateTextPathOffset(scrollPercent * pathLength);
    });
  }

  window.addEventListener('scroll', onScroll);
});




// Let's Play Boxes Move With Mouse
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



