const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // for the hamnav

  document.querySelector(".hamnav-icon").addEventListener("click", showConnect);

function showConnect() {
  document.querySelector(".hamnav").classList.remove("hide");
}

document
  .querySelector(".close")
  .addEventListener("click", closeConnect);

function closeConnect() {
  document.querySelector(".hamnav").classList.add("hide");
}