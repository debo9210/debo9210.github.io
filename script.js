let date = new Date().getFullYear();

document.querySelector('.copy').innerText = date;

const { styler, spring, listen, pointer, value } = window.popmotion;

const brand = document.querySelector('.brand');
const divStyler = styler(brand);
const brandXY = value({ x: 0, y: 0 }, divStyler.set);

listen(brand, 'mousedown touchstart').start((e) => {
  e.preventDefault();
  pointer(brandXY.get()).start(brandXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({
    from: brandXY.get(),
    velocity: brandXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    // mass: 1,
    // damping: 10
  }).start(brandXY);
});

new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  effect: 'cube',
  //   slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
