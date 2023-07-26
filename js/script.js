/* CARROSSEL */

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 2,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* AVALIAÇÃO */
  
var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('valor-avaliacao'));
  }
});

/* MENU */ 
function clickMenu(){
  if (itens.style.display == 'block'){
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}