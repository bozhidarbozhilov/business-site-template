let counter=(function(){
    let x=1;

    const add = function(){
        return x+=1;
    }

    add.reset = ()=>x=0;

    return add;

})();



const slideInterval = 10000;

const resetSlider = setInterval(function (){
    let sliderElement=document.querySelector('.slider');
    let newSliderElement = sliderElement.cloneNode(true);
    let i=counter();
    let imgUrl = `url(/assets/images/slider${i}.jpg)`;

    newSliderElement.style.backgroundImage = `${imgUrl}`;
    if(i==3){
        counter.reset();
    }
    sliderElement.parentNode.replaceChild(newSliderElement, sliderElement);
    
},slideInterval);


// const getFigures= function(){
//     const figures = document.querySelectorAll('.slider__img');
//     return figures;
// }

// function moveForward() {
//     var pointer = 0;
//     var figures = getFigures();
//     for (var i = 0; i < figures.length; i++) {
//     if (figures[i].className == ‘visible’) {
//     figures[i].className = ‘hidden’;
//     pointer = i;
//     }
//     }
//     if (++pointer == figures.length) {
//     pointer = 0;
//     }
//     figures[pointer].className = ‘visible’;
//     setTimeout(moveForward, slideInterval);
//    }



// startPlayback();
