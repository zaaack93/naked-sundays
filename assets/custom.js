/*
 * Broadcast Theme
 *
 * Use this file to add custom Javascript to Broadcast.  Keeping your custom
 * Javascript in this fill will make it easier to update Broadcast. In order
 * to use this file you will need to open layout/theme.liquid and uncomment
 * the custom.js script import line near the bottom of the file.
 */

(function () {
  // Add custom code below this line
  let count = 0;
  let intervalId = setInterval(function () {
    if (document.querySelector(".stamped-badge") !== null) {
      window.dispatchEvent(new Event("resize"));
      clearInterval(intervalId);
    } else {
      // Increment the count
      count++;

      // If the count reaches 5, stop the interval
      if (count === 10) {
        clearInterval(intervalId);
      }
    }
  }, 1000);


  // status drawer
  //drawer status
document.addEventListener(
  'theme:cart:change',
  function (event) {
    if(document.querySelector('.header__cart__status_drawer')!=null){
      if(event.detail.cart.item_count==0){
        document.querySelector('.header__cart__status_drawer').innerHTML = ''
      }
      else if (event.detail.cart.item_count==1){
        document.querySelector('.header__cart__status_drawer').innerHTML = `(${event.detail.cart.item_count} ITEM)`;
      }
      else if (event.detail.cart.item_count>1){
        document.querySelector('.header__cart__status_drawer').innerHTML = `(${event.detail.cart.item_count} ITEMS)`;
      }
    }

    //gift functionnaly
    if(window.location.pathname=='/cart'){
      if(document.querySelector('[data-gift-item].is-removed')){
        const elements = document.querySelectorAll('.add-btn-text')
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('disabled');
          elements[i].classList.remove('isTheCurrentProduct');
          elements[i].innerHTML='Add to cart';
        }
        document.querySelector('.btn-wrap').innerHTML="";
      }
    }
    //if only item in the cart is gift item i should clear the cart
    if(event.detail.cart.item_count==1 && document.querySelector('[data-gift-item]') && document.querySelector('[data-gift-item].is-removed')==null){
      document.querySelector('[data-gift-item]')?.querySelector('.cart__item__remove').click();
    }
})

  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();
