const slider = document.querySelectorAll('.reviews');
var counter = 0;
slider.forEach((slide, index)=>{
    slide.style.left = `${index*35}%`;
});

function PrevImage(){
    if(counter<=0){
        counter = slider.length-1;
        SlideImage();
       
    }
    else{
        counter--;
        SlideImage();
    }
    console.log(counter);
}

function NextImage(){
    if(slider.length>counter + 1){
        counter++;
        SlideImage();
    }
    else{
        counter = 0;
        SlideImage();
    }
   console.log(counter);
}

const SlideImage = () =>{
    slider.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}