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

  // * For login Page in index.html
  $.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {},
  });
});
