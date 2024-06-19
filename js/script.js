
const modal_bg = document.querySelector(".modal-background")
const modals = document.querySelectorAll("#modal-container")

$('.nav_bar--link').click(function(event){
  event.preventDefault();
  var buttonName = event.target.getAttribute('href');
  [...modals].map(modal => {
   let name = modal.getAttribute('data-name');
   if (name === buttonName) {
    $(modal).removeAttr('class').addClass('one');
    $('body').addClass('modal-active');
   }
  })
})


$('.header_link').click(function(event){
  event.preventDefault();
  var buttonName = event.target.getAttribute('href');
  [...modals].map(modal => {
   let name = modal.getAttribute('data-name');
   if (name === buttonName) {
    $(modal).removeAttr('class').addClass('one');
    $('body').addClass('modal-active');
   }
  })
})

$('.modal-background').click(function(e){
    [...modals].map(modal => {
        if (modal.classList[0] === 'one') {
          $(modal).addClass('out');
          $('body').removeClass('modal-active');
        }
    }) 
})

//////////nav open close
const openBtn = document.querySelector(".nav_btn");
const closeBtn = document.querySelector(".nav_btn_close");
const navBar = document.querySelector(".nav_bar")

openBtn.addEventListener('click' , function () {
   navBar.style.animation ='open_nav 1s forwards';
})

closeBtn.addEventListener('click' , function () {
  navBar.style.animation ='close_nav 1s forwards';
})

document.addEventListener('click' , function (e)  {
  const element =  e.target.closest('header');
  if (element != null) {
    console.log(navBar.style.animation);
      if (element.classList.value == 'header' && navBar.style.animation == '1s ease 0s 1 normal forwards running open_nav') {
        navBar.style.animation ='close_nav 1s forwards';
      }
    }
})