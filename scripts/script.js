const emojiId = ['emoji-easy', 'emoji-fast', 'emoji-quality'];

emojiId.forEach(id => {
  const img = document.getElementById(id);
  img.addEventListener('mouseover', () => {
    img.src = `/images/gif/${id}.gif`;
  });

  img.addEventListener('mouseout', () => {
    img.src = `/images/smile/${id}.png`;
  });
});

const sliderId = document.querySelectorAll('.how-works__element');
const sliderContainer = document.querySelector('.how-works__slider-elements')
sliderId.forEach( card => {
  const scrollElement = card.querySelectorAll('.how-works__scroll');
  scrollElement.forEach( (button,index) => {
    button.addEventListener('click', () => {
      sliderContainer.style.transform = `translateX(${-index * 100}%)`;
    })
  })
})

const reviews = document.querySelector('.reviews__item')
const leftReviews = ".reviews__item-oleg"
const topReviews = ".reviews__item-simen"
const rightReviews = ".reviews__item-inokenti"
const bottomReviews = ".reviews__item-sergay"
reviews.forEach((card,index) => {
  card.addEventListener('click', () => {
  })
})
