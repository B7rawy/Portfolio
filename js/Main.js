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





// el 3yeeen 
// el 3yeeen 
// el 3yeeen 
// el 3yeeen 

const TWO_PI = Math.PI * 2;

// canvas settings
var viewWidth = window.innerWidth,
    viewHeight = window.innerHeight,
    canvas = document.getElementById("canvas"),
    ctx,
    timeStep = (1/60),
    time = 0;

var eyes = [],
    eyeWidth = 160,
    eyeHeight = 58;

var eyesOpened = 0;

var mousePosition = {x:null, y:null};

window.onload = function() {
    initCanvas();
    addEventHandlers();

    createEyes();
    openRandomEye();

    requestAnimationFrame(loop);
};

function initCanvas() {
    var r = canvas.getBoundingClientRect();
    canvas.width = viewWidth = r.width;
    canvas.height = viewHeight = r.height;

    ctx = canvas.getContext('2d');
}

function addEventHandlers() {
    canvas.addEventListener('mousemove', function(e) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    });
    canvas.addEventListener('mouseover', function(e) {
        if (eyesOpened === 0) {
            openRandomEye();
        }
    });
    canvas.addEventListener('mouseout', function(e) {
        eyes.forEach(function(e) {
            e.close();
        });
    });
    canvas.addEventListener('click', function() {
        var eye = getEyeWithSomethingInIt();

        if (eye && eye.locked === false) {
            var tl = new TimelineMax({onComplete:closeSomeEyes});

            tl.add(eye.flinch());
            tl.add(eye.close());
            tl.add(openRandomEye());
            tl.add(openRandomEye(), '-=1');
        }
    });
    window.addEventListener('resize', resize);
}

function closeSomeEyes() {
    if (eyesOpened > 3) {
        closeRandomEye();
    }
}

function openRandomEye() {
    var eye = getRandomEye(false);

    return eye.open();
}

function closeRandomEye() {
    var eye = getRandomEye(true);

    return eye.close();
}

var resizeTID = -1;

function resize() {
    var r = canvas.getBoundingClientRect();
    canvas.width = viewWidth = r.width;
    canvas.height = viewHeight = r.height;

    clearTimeout(resizeTID);

    resizeTID = setTimeout(function() {

        TweenMax.killAll();
        eyes.length = 0;
        eyesOpened = 0;
        createEyes();
        openRandomEye();

    }, 1000);
}

function createEyes() {
    var spacingX = 80,
        spacingY = 160;

    var rowLength = Math.floor(viewWidth / (eyeWidth + spacingX)),
        colLength = Math.floor(viewHeight / spacingY),
        minX = (viewWidth - rowLength * (eyeWidth + spacingX)) * 0.5 + spacingX * 0.5,
        minY = (viewHeight - colLength * spacingY) * 0.5 + spacingY * 0.5;

    for (var y = 0; y < colLength; y++) {
        for (var x = 0; x < rowLength; x++) {
            var eye = new Eye(
                x * (eyeWidth + spacingX) + minX,
                y * (spacingY) + minY,
                eyeWidth,
                0
            );

            eyes.push(eye);
        }
    }
}

function update() {
    if (mousePosition.x === null) return;

    eyes.forEach(function(e) {
        e.update();
    });

    if (getEyeWithSomethingInIt()) {
        canvas.style.cursor = 'pointer';
    }
    else {
        canvas.style.cursor = 'default';
    }
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    eyes.forEach(function(e) {
        e.draw();
    });
}

function loop() {
    update();
    draw();
    time += timeStep;
    requestAnimationFrame(loop);
}

function Eye(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.irisColor = 'hsl(30,100%,50%)';
    this.flinchColor = '#f00';
    this.color = this.irisColor;
    this.bezierForce = 0.5;

    this.irisRadus = 28;
    this.irisAngle = 0;
    this.irisOffset = 0;
    this.pupilRadius = 20;

    this.locked = false;
    this.opened = false;
    this.gotSomethingInMyEye = false;
}
Eye.prototype = {
    set height(v) {
        this.h = v;
        this.hh = v * 0.5;
    },
    get height() {
        return this.h;
    },
    set width(v) {
        this.w = v;
        this.hw = v * 0.5;
    },
    get width() {
        return this.w;
    },
    update:function() {
        if (this.locked === true || this.h === 0) return;

        var dx = mousePosition.x - (this.x + this.hw),
            dy = mousePosition.y - this.y,
            angle = Math.atan2(dy, dx),
            dist = Math.sqrt(dx * dx + dy * dy);

        this.gotSomethingInMyEye = (dist < 26);
        this.irisOffset = Math.min(dist, 16);
        this.irisAngle = angle;
    },

    draw:function() {
        if (this.h === 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 8;
        ctx.lineWidth = 2;

        // first, make the eye shape and clip it
        this.makeEyeShape();
        ctx.clip();
        ctx.fill();
        // then draw the iris in the clipped shape
        this.drawIris();
        // then make the shape again, but this time, stroke it
        this.makeEyeShape();
        ctx.stroke();

        // making the shape twice is a little meh..
        // but any other way makes the edges of the clipped shape very pixelated
        // (at least in chrome)

        ctx.restore();
    },
    makeEyeShape:function() {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
            this.hw * this.bezierForce, 0,
            this.hw * (1 - this.bezierForce), -this.hh,
            this.hw, -this.hh
        );
        ctx.bezierCurveTo(
            this.hw * (1 + this.bezierForce), -this.hh,
            this.hw * (1 + (1 - this.bezierForce)), 0,
            this.w, 0
        );
        ctx.bezierCurveTo(
            this.hw * (1 + (1 - this.bezierForce)), 0,
            this.hw * (1 + this.bezierForce), this.hh,
            this.hw, this.hh
        );
        ctx.bezierCurveTo(
            this.hw * (1 - this.bezierForce), this.hh,
            this.hw * this.bezierForce, 0,
            0, 0
        );
    },
    drawIris:function() {
        var offsetX = Math.cos(this.irisAngle) * this.irisOffset,
            offsetY = Math.sin(this.irisAngle) * this.irisOffset;

        // iris
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.hw + offsetX, offsetY, this.irisRadus, 0, TWO_PI);
        ctx.fill();
        // pupil
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.hw + offsetX, offsetY, this.pupilRadius, 0, TWO_PI);
        ctx.fill();
    },
    open:function() {
        var tl = new TimelineMax({
            onComplete:function() {
                this.locked = false;
                this.opened = true;

                eyesOpened++;
            },
            onCompleteScope:this
        });

        tl.to(this, 1, {height:eyeHeight, ease:Back.easeOut}, 0);
        tl.to(this, 1, {pupilRadius:12, ease:Back.easeOut}, 0.5);

        this.locked = true;

        return tl;
    },
    close:function() {
        if (this.opened === false) return null;

        var tl = new TimelineMax({
            onComplete:function() {
                this.locked = false;
                this.opened = false;
                this.gotSomethingInMyEye = false;
                this.bezierForce = 0.5;
                this.color = this.irisColor;

                eyesOpened--;
            },
            onCompleteScope:this
        });

        tl.to(this, 0.3, {
            height:0,
            pupilRadius:20,
            irisOffset:0,
            irisAngle:0,
            ease:Cubic.easeIn});

        return tl;
    },
    flinch:function() {
        var tl = new TimelineMax({
            onUpdate:function() {
                this.irisAngle = Math.random() * TWO_PI;
                this.irisOffset = Math.random() * 6;
            },
            onUpdateScope:this
        });

        tl.to(this, 0.1, {height:this.h * 1.75, bezierForce:0.6, ease:Back.easeOut});
        tl.to(this, 0.1, {irisAngle:0, irisOffset:0}, 0.5);

        this.locked = true;
        this.color = this.flinchColor;

        return tl;
    }
};

function getRandomEye(opened) {
    var eye = null,
        i = 0;

    do {
        eye = eyes[Math.floor(Math.random() * eyes.length)];
    }
    while (++i < eyes.length && (eye.opened !== opened || eye.locked === true));

    return eye;
}

function getEyeWithSomethingInIt() {
    var eye;

    for (var i = 0; i < eyes.length; i++) {
        eye = eyes[i];

        if (eye.locked === false && eye.gotSomethingInMyEye) {
            return eye;
        }
    }

    return null;
};






console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 1 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);

