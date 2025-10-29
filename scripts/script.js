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

const faqBlock = document.querySelectorAll('.faq__item')
const faqContent = document.querySelector('.faq__content')
faqBlock.forEach(item => {
  item.addEventListener('click', function() {
    const faqContent = this.querySelector('.faq__content');
    const faqImage = this.querySelector('.faq__icon')
    if (faqContent.style.maxHeight === '200px'){
      faqContent.style.maxHeight = ('0px')
      faqImage.classList.remove = ('open')
    } else {
      faqContent.style.maxHeight = ('200px')
      faqImage.classList.add = ('open')
    }
  })
})

const languageRu = document.querySelectorAll('.header__lang--ru, .burger-menu__lang--ru');
const languageEn = document.querySelectorAll('.header__lang--en, .burger-menu__lang--en');

languageRu.forEach(element =>{
  element.addEventListener('click', () => {
    languageRu.forEach(ru => ru.classList.add('lang-active'));
    languageEn.forEach(en => en.classList.remove('lang-active'));
    
  })
})

languageEn.forEach(element =>{
  element.addEventListener('click', () => {
    languageEn.forEach(en => en.classList.add('lang-active'));
    languageRu.forEach(ru => ru.classList.remove('lang-active'));
  })
})

const burgerMenuImage = document.querySelector('.header__burger-image');
const burgerMenu = document.querySelector('.burger-menu');

function setIcon() {
  if (burgerMenu.classList.contains('burger-menu--open')) {
    burgerMenuImage.src = `/images/svg/burger-opened.svg`;
  } else {
    burgerMenuImage.src = `/images/svg/burger-menu.svg`;
  }
}

function setHoverIcon() {
  if (burgerMenu.classList.contains('burger-menu--open')) {
    burgerMenuImage.src = `/images/svg/burger-opened-hover.svg`;
  } else {
    burgerMenuImage.src = `/images/svg/burger-menu-hover.svg`;
  }
}

setIcon()
burgerMenuImage.addEventListener('mouseover', setHoverIcon);
burgerMenuImage.addEventListener('mouseout', setIcon);

burgerMenuImage.addEventListener('click', () => {
  if(burgerMenu.classList.contains('burger-menu--open')){
    burgerMenu.classList.remove('burger-menu--open')
    setIcon();
  }else{
    burgerMenu.classList.add('burger-menu--open')
    setIcon();
  }
})

