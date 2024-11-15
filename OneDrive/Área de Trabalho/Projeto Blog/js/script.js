const bx = document.querySelector('.bx');
const menuMobile = document.querySelector('.menu-mobile');
const linkMenuMobile = document.querySelectorAll('.link-menu-mobile');

bx.addEventListener('click', () => {
  bx.classList.toggle('active');
  menuMobile.classList.toggle('showmenu');
});


linkMenuMobile.forEach((item)=>{
    item.addEventListener('click', () => {
      console.log("testou")
      
        menuMobile.classList.remove('showmenu');
        bx.classList.toggle('active');
    })
})