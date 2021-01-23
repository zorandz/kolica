const cartContainer = document.querySelector('.cart-container');
const cartList = document.querySelector('.cart-list');
const arrows = document.querySelectorAll(".arrow");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");

eventListeners();

function eventListeners(){
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
        arrow1.classList.toggle("arrow-up");
        arrow1.classList.toggle("none");
        arrow2.classList.toggle("arrow-down");
        arrow2.classList.toggle("none");
    });   
}

arrow2.addEventListener('click', ()=> {
    if (window.matchMedia("(max-width: 700px)").matches) {
        cartContainer.scrollBy(0, 80);
       
      } else {
        cartContainer.scrollBy(0, 140);
      }
})

arrow1.addEventListener('click', ()=> {
    if (window.matchMedia("(max-width: 700px)").matches) {
        cartContainer.scrollBy(0, -80);
       
      } else {
        cartContainer.scrollBy(0, -140);
      }
})

