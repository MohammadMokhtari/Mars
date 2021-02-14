$(document).ready(function () {
  // * For Header in index.html file
  $(selector).hover(
    function () {
      // over
    },
    function () {
      // out
    }
  );
  // ! For Footer in inde.html file
  $(selector).click(function (e) {
    e.preventDefault();
  });
});
