// const modal_bg = document.querySelector(".modal-background")

// $('.nav_bar--list_item').click(function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass('one');
//   $('body').addClass('modal-active');
// })

// $('#modal-container').click(function(e){
//   if (e.target == modal_bg) {
//     $(this).addClass('out');
//     $('body').removeClass('modal-active');
//   }
// })

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

// $('.header_link').click(function(event){
//   event.preventDefault();
//   var buttonName = event.target.getAttribute('href');
//   [...modals].map(modal => {
//    let name = modal.getAttribute('data-name');
//    if (name === buttonName) {
//     $(modal).removeAttr('class').addClass('one');
//     $('body').addClass('modal-active');
//    }
//   })
// })

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

