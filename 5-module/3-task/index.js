function initCarousel() {
  let position = 0;
  let slideWidth = document.querySelector(".carousel__slide").offsetWidth;

  let left = document.querySelector(".carousel__arrow_left");
  let right = document.querySelector(".carousel__arrow_right");

  left.style.display = 'none';


  right.onclick = function() {
    position -= slideWidth;
    left.style.display = '';

    if (position <= -3 * slideWidth) {
      right.style.display = 'none';
  }

    document.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
  }



  left.onclick = function() {
    position += slideWidth;
    right.style.display = '';

    if (position == 0) left.style.display = 'none';

    document.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
    }
}
