
const slider = new A11YSlider(document.querySelector(".slider"), {
    autoplay:true,
    infinite:true,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
  });

const textSlider = document.querySelector('.text-slider');
const textItem = document.querySelectorAll('.text-slider__item');


let indexTxt = 0
const textItemLength = textItem.length;

function animateText(){
    // for(let i = 0; i < textItemLength; i++){
    //     textItem[i].classList.remove('translate');
    // }
    const movingAmount = textItem[0].getBoundingClientRect().height;
    textSlider.style.transform = `translateY(-${movingAmount * indexTxt}px)`
    if(indexTxt === textItemLength -1 ){
        indexTxt = 0
    }
    else{
        indexTxt++;
    }
    setTimeout(animateText,3000)
}
animateText();
// window.onload = animateText;
