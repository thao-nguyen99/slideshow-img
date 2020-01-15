var slideIndex=0;
showSlide(slideIndex);

function showSlide(n){
  var slide_div=document.querySelectorAll('.slide');
  var dot=document.querySelectorAll('.dot');
  for (var i=0; i<slide_div.length; i++){
    slide_div[i].style.display= 'none';
  }
  
  if (slideIndex>slide_div.length-1){
    slideIndex=0;
  }
  if (slideIndex<0){
    slideIndex=slide_div.length-1;
  }
  for (i=0; i<dot.length; i++){
    dot[i].classList.remove('active');
  }
  slide_div[slideIndex].style.display="block";
  dot[slideIndex].className+=" active";
  
};

var nextBtn=document.querySelector('.next');
nextBtn.addEventListener('click', function next(){
  
  showSlide(slideIndex+=1);
});
var preBtn=document.querySelector('.pre');
preBtn.addEventListener('click', function pre (){
 showSlide(slideIndex-=1);
})

function currentDot(n){
 showSlide(slideIndex=n);
};

