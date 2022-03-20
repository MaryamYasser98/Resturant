
let nav = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');


menu.onclick = () => {
  menu.classList.toggle('fa-times')
  nav.classList.toggle('active');
}


window.onscroll = () => {

  menu.classList.remove('fa-times')
  nav.classList.remove('active');
  theme.classList.remove('active')
}




var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    }
  },
});



// ************** food part ******************//

let preview_container = document.querySelector('.food-container');
// let preview_box = preview_container.querySelectorAll('.preview');
let preview_box = document.querySelectorAll('.food-container .preview');

document.querySelectorAll('.food .slide').forEach(food => {

  food.onclick = () => {
    preview_container.style.display = 'flex';

    let name = food.getAttribute('data-name');

    preview_box.forEach(preview => {
      let targrt = preview.getAttribute('data-target');
      if (name == targrt) {
        preview.classList.add('active')
      }
    });//end preview

  }//end on click
})//end of food


let close_preview = preview_container.querySelector('#close-preview');
close_preview.onclick = () => {
  preview_container.style.display = 'none';
  preview_box.forEach(close => {
    close.classList.remove('active')
  })//end of foeach
}//end onclick





var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  spaceBetween: 20,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    }
  },
});



let theme = document.querySelector('.theme-toggle')
let togglebtn = document.querySelector('.toggle-btn')

togglebtn.onclick = () =>{
  theme.classList.toggle('active')
}

document.querySelectorAll('.theme-toggle .theme-btn').forEach(btn =>{
  btn.onclick = () =>{
      var color = btn.style.background;
      document.querySelector(':root').style.setProperty('--main-color',color)
  }
})











