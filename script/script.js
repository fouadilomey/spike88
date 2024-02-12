

/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 

  let docTitle = document.title;
  window.addEventListener("blur", () =>{
    document.title = "back to earn money👩‍💻";
  })
  window.addEventListener("focus", () =>{
    document.title = docTitle;
  })

  
  /*
inspiration
https://cz.pinterest.com/pin/830703093792161391/
*/
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

swiper.slideTo(1, false, false);




console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);


$(document).ready(function(){
  // Adjusting carousel height dynamically based on window height
  $(window).on('load resize', function(){
    var windowHeight = $(window).height();
    $('#client-testimonial-carousel').height(windowHeight * 0.5); // Adjust as needed
  });
});

$(function() {
  $('.scroll-pane').jScrollPane();
});


// Function to generate a random integer between min and max (inclusive)
const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create animated circles and append them to the body
function gimme() {
  let svg = ``;
  // Generate 30 circles
  for (let i = 0; i < 30; i++) {
    // Generate circle with random radius and brightness
    svg += `<circle cx="0" cy="0" r="${randInt(5,30)}" fill="aqua" filter="brightness(${randInt(100,250)}%)">
      <animate attributeName="cx" values="0%; 100%; 0%" dur="${randInt(300,400)/10}s" begin="-${randInt(1,400)/10}s" repeatCount="indefinite" />
      <animate attributeName="cy" values="0%; 100%; 0%" dur="${randInt(200,350)/10}s" begin="-${randInt(50,200)/10}s" repeatCount="indefinite" />
    </circle>`;
  }
  // Append the SVG to the body
  document.body.innerHTML += svg;
}

// Call the gimme function to generate circles (commented out for now)
// gimme();
