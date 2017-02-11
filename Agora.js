$("#add_button").on('click', function() {
  $(".transactionsTable").toggleClass("disappear");
});

$("#add_button").click(function() {
  $(".add_transaction").toggle();
  $(".horizontalDiv").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").addClass("addon");
});

$("#save").click(function() {
  $(".add_transaction").toggle();
  $(".transactionsTable").toggleClass("disappear");
  $(".horizontalDiv").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").removeClass("addon");
});

$("#cancel").click(function() {
  $(".add_transaction").toggle();
  $(".transactionsTable").toggleClass("disappear");
  $(".horizontalDiv").toggle();
  $("#add_heading").toggle();
  $("#mainDiv").removeClass("addon");
});

$("#edit_button").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
  $("#edit_button").toggle();
  $("#add_button").toggle();
  $("#cancel_button").toggle();
  $("#save_button").toggle();

});

$("#save_button").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
  $("#edit_button").toggle();
  $("#add_button").toggle();
  $("#cancel_button").toggle();
  $("#save_button").toggle();

});

$("#cancel_button").click(function() {
  $(".edit_textbox").toggle();
  $("span").toggle();
  $("#edit_button").toggle();
  $("#add_button").toggle();
  $("#cancel_button").toggle();
  $("#save_button").toggle();

});
