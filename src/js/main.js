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

// // Attach event listeners to each checkbox
// const checkboxes = document.querySelectorAll('.top-filter-checks input[type="checkbox"][name="filter.p.product_type"]');
// const allCheckbox = document.querySelector('.top-filter-checks input[type="checkbox"][value="all"][name="filter.p.product_type"]');

// // Create an array to store the selected values
// let selectedValues = [];

// // Add event listeners to the checkboxes
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', (event) => {
//     const { value } = event.target;
    
//     if (event.target === allCheckbox) {
//       // If the "all" checkbox is checked, uncheck all the other checkboxes and remove the "filter.p.product_type" parameter from the URL
//       if (event.target.checked) {
//         checkboxes.forEach((checkbox) => {
//           if (checkbox !== allCheckbox && checkbox.checked) {
//             checkbox.checked = false;
//             const index = selectedValues.indexOf(checkbox.value);
//             if (index > -1) {
//               selectedValues.splice(index, 1);
//             }
//           }
//         });
        
//         urlSearchParams.delete('filter.p.product_type');
//       } else {
//         // If the "all" checkbox is unchecked, remove it from the selectedValues array and update the URL with the selected values
//         const index = selectedValues.indexOf(value);
//         if (index > -1) {
//           selectedValues.splice(index, 1);
//         }
        
//         if (selectedValues.length > 0) {
//           urlSearchParams.set('filter.p.product_type', selectedValues.join(','));
//         } else {
//           urlSearchParams.delete('filter.p.product_type');
//         }
//       }
//     } else {
//       // If a checkbox other than the "all" checkbox is checked, uncheck the "all" checkbox and update the selectedValues array and the URL
//       allCheckbox.checked = false;
      
//       const index = selectedValues.indexOf(value);
      
//       if (event.target.checked) {
//         if (index === -1) {
//           selectedValues.push(value);
//         }
//       } else {
//         if (index > -1) {
//           selectedValues.splice(index, 1);
//         }
//       }
      
//       if (selectedValues.length > 0) {
//         urlSearchParams.set('filter.p.product_type', selectedValues.join(','));
//       } else {
//         urlSearchParams.delete('filter.p.product_type');
//       }
//     }
    
//     // Replace the current URL with the updated URL
//     const queryString = urlSearchParams.toString().replaceAll('%2C', ',');
//     const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
//     window.history.replaceState(null, null, newUrl);
//   });
// });

// // When the page loads, check the checkboxes based on the URL parameters
// const urlSearchParams = new URLSearchParams(window.location.search);
// const selectedTypes = urlSearchParams.get('filter.p.product_type');

// if (selectedTypes) {
//   selectedValues = selectedTypes.split(',');
  
//   checkboxes.forEach((checkbox) => {
//     if (selectedValues.includes(checkbox.value)) {
//       checkbox.checked = true;
//     }
//   });
// } else {
//   allCheckbox.checked = true;
// }