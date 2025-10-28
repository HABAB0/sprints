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

const reviews = document.querySelectorAll('.reviews__item')
const container = document.querySelector('.reviews__items');
reviews.forEach(card => {
  card.addEventListener('click', () => {
    const leftReviews = document.querySelector('.reviews__item-left');
    const topReviews = document.querySelector('.reviews__item-top');
    const rightReviews = document.querySelector('.reviews__item-right');
    const bottomReviews = document.querySelector('.reviews__item-bottom');

    leftReviews.classList.replace('reviews__item-left', 'reviews__item-top');
    topReviews.classList.replace('reviews__item-top', 'reviews__item-right');
    rightReviews.classList.replace('reviews__item-right', 'reviews__item-bottom');
    bottomReviews.classList.replace('reviews__item-bottom', 'reviews__item-left');

  })
})

const structure = document.querySelector('.reviews__button')
const structureText = document.querySelector('.reviewers__structure-text')
structure.addEventListener('click', () => {
    const leftReviews = document.querySelector('.reviews__item-left');
    const topReviews = document.querySelector('.reviews__item-top');
    const rightReviews = document.querySelector('.reviews__item-right');
    const bottomReviews = document.querySelector('.reviews__item-bottom');

    leftReviews.classList.remove('reviews__item-left')
    topReviews.classList.remove('reviews__item-top')
    rightReviews.classList.remove('reviews__item-right')
    bottomReviews.classList.remove('reviews__item-bottom')
    structureText.style.display = ('block')
    structure.style.display = ('none')
})