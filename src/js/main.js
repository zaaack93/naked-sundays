$(document).on("click", ".ajax-add-to-cart", function () {
  if (!$(this).hasClass("isTheCurrentProduct")) {
    var addFreeGiftId = $(this).data("variantid");

    if ($(".cart-item.free-pdp").length > 0) {
      var deleteFreeIdKey = $(".free-pdp.cart-item ").attr("data-id");

      $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: {
          id: deleteFreeIdKey,
          quantity: 0,
        },
      }).then((data) => {
        addToCartJS(1, addFreeGiftId);
      });
    } else {
      addToCartJS(1, $(this).data("variantid"));
    }
  }
});
$(document).on("click", ".isTheCurrentProduct", function () {
  document
    .querySelector("[data-gift-item]")
    ?.querySelector(".cart__item__remove")
    .click();
});
$(document).on("click", ".imdone", function () {
  $(".congrates").click();
});

$(document).on("click", ".congrates", function () {
  $(this).toggleClass("open");
  $(this).closest(".free_gift_product").find(".gift_product").slideToggle();
});

if ($(".cart__inner").length > 0) {
  var freeGiftlimit = parseInt($(".cart").attr("data-giftcart-value"));
  var updateData = {};
  fetch(theme.routes.root + "cart.js")
    .then(this.handleErrors)
    .then((response) => response.json())
    .then((response) => {
      if (
        response.total_price <= freeGiftlimit &&
        $(".free-pdp.cart-item").length > 0
      ) {
        $(".free-pdp.cart-item").each(function (index, element) {
          updateData[$(this).attr("data-id")] = 0;
        });

        $.ajax({
          type: "POST",
          url: "/cart/update.js",
          data: {
            updates: updateData,
          },
          dataType: "json",
          success: function (cart) {
            location.reload();
          },
          error: function (err) {
            location.reload();
          },
        });
      }
    })
    .catch((error) => console.log(error));
}

function addToCartJS(qty, variantID) {
  var xhr = new XMLHttpRequest();
  var url = "/cart/add.js";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var parsedState = JSON.parse(xhr.responseText);
      location.reload();
    }
  };
  var data = JSON.stringify({ quantity: qty, id: variantID });
  xhr.send(data);
}

// Get all the spans with the specific class
// const spans = document.querySelectorAll('.buttons-to-check');
// // Loop through all the spans and add a click event listener to each of them
// spans.forEach(span => {
//   span.addEventListener('click', () => {
//     // Get the data attribute value from the clicked span
//     const dataAttrValue = span.getAttribute('data-for-id');

//     // Get the label element with the corresponding id
//     const label = document.querySelector(`label[for="${dataAttrValue}"]`);

//     // If the label element is found, trigger a click event on it
//     if (label) {
//       label.click();
//     }
//   });
// });
// Add a click event listener to all the spans with the specific class
$(document).on("click", ".buttons-to-check", function () {
  // Get the data attribute value from the clicked span
  const dataAttrValue = "label."+$(this).attr('data-for-id');

  // Get the label element with the corresponding id
  const label = $(dataAttrValue);
  // if(!$(label).parent('.sidebar__item').hasClass('!sidebar__item--active')){
  //   $(this).css({ background: "#E1DEF7" },{ border: "0.8px solid #EAE4FF" })
  // }
  // If the label element is found, trigger a click event on it
  if (label.length > 0) {
    label.click();
  }
});

//trigger click to all
$(document).on("click", "#label-for-all", function () {
  // Get the reset button
  const label = $(`a[data-filter-reset-all]`);
  // If the label element is found, trigger a click event on it
  if (label.length > 0) {
    label[0].click();
  }
});