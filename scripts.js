"use strict";
  
$(document).ready(() => {

  let selectedTable;

  // ASSIGNING TABLE NUMBER UPON CLICK & SHOWING FORM
  $(".table").click((event) => {
    selectedTable = $(event.target);
    if ($(selectedTable).hasClass("available")) {
      $("#table-num").text($(event.target).val())
      $(".popup").fadeIn(750);
    }
  })

  // CLICKING X TO GET OUT OF FORM
  $("#trash").click(() => {
    $(".popup").fadeOut(750);
  });  

  // WHEN SAVE IS CLICKED -> HIDES FORM, CHANGES CLASS, LOGS INFO, CLEARS FORM
  $(".save").click(() => {
    $(".popup").fadeOut(750);
    selectedTable.addClass("reserved");
    selectedTable.removeClass("available");
    let partyName = $("#name").val();
    let partySize = $("#size").val();
    console.log(partyName, partySize);
    $('input').val('');
  })

});







