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
      if (count === 5) {
        clearInterval(intervalId);
      }
    }
  }, 1000);

  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();
