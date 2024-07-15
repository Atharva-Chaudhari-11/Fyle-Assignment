
  // Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 5,
});

// Function to handle dot click and change slide
function currentSlide(index) {
  swiper.slideTo(index); // Change slide
  updateDots(index); // Update dots' active state
}

// Function to update dots' active state
function updateDots(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
      if (i == index) {
          dot.classList.add('active-dot');
      } else {
          dot.classList.remove('active-dot');
      }
  });
}

// Initial active dot
updateDots(0);

// Update dots and slide when clicking on dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
      currentSlide(idx);
  });
});

// Synchronize dots with swiper slide change
swiper.on('slideChange', () => {
  updateDots(swiper.realIndex);
});



$(document).ready(function() {
  var modal = $('#myModal');
  var openModalButton = $('#openModal');
  var closeModalButton = $('#closeModal');

  openModalButton.on('click', function() {
      modal.show();
  });

  closeModalButton.on('click', function() {
      modal.hide();
  });

  $(window).on('click', function(event) {
      if ($(event.target).is(modal)) {
          modal.hide();
      }
  });
});



//hover cards
$('.card-hover').hover(function() {
  $(this).addClass('show');
}, function() {
  $(this).removeClass('show');
});
//animation

let currentIndex = 0;
const $cardsSlider = $('.slider');
const $cards = $('.cards-slider');
const cardCount = $cards.length;
const cardWidth = $cards.outerWidth(true);
const containerWidth = $('.cards-container').width();
const visibleCards = Math.floor(containerWidth / cardWidth);
const maxIndex = cardCount - visibleCards;

function slideCards() {
   currentIndex++;
   if (currentIndex > 2) {
       currentIndex = 0;
   }
   const newTransformValue = currentIndex * cardWidth;
   $cardsSlider.css('transform', 'translateX(' + newTransformValue * 3 + 'px)');
}

setInterval(slideCards,3333);

