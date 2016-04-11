$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var petsInput = $("#pets").val();
  });
});
