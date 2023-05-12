/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

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
          quantity: 0
        }
      }).then(function (data) {
        addToCartJS(1, addFreeGiftId);
      });
    } else {
      addToCartJS(1, $(this).data("variantid"));
    }
  }
});
$(document).on("click", ".isTheCurrentProduct", function () {
  var _document$querySelect;
  (_document$querySelect = document.querySelector("[data-gift-item]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector(".cart__item__remove").click();
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
  fetch(theme.routes.root + "cart.js").then(this.handleErrors).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response.total_price <= freeGiftlimit && $(".free-pdp.cart-item").length > 0) {
      $(".free-pdp.cart-item").each(function (index, element) {
        updateData[$(this).attr("data-id")] = 0;
      });
      $.ajax({
        type: "POST",
        url: "/cart/update.js",
        data: {
          updates: updateData
        },
        dataType: "json",
        success: function success(cart) {
          location.reload();
        },
        error: function error(err) {
          location.reload();
        }
      });
    }
  })["catch"](function (error) {
    return console.log(error);
  });
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
  var data = JSON.stringify({
    quantity: qty,
    id: variantID
  });
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

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/main": 0,
/******/ 			"assets/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknaked_sundays"] = self["webpackChunknaked_sundays"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;