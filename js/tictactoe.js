$(document).ready(function() {
  var playerchoice;

  $('#tttModal').dialog('open');

  $("#tttModal").dialog({
    resizable: false,
    height: 140,
    modal: true,
    autoOpen:true,
    buttons: {
      "X": function() {
      $(this).dialog("close");
      playerchoice = "X";
    },
      "O": function() {
        $(this).dialog("close");
        playerchoice = "O";
      }
    }
  })


  $("td").click(function() {
    if ($(this).text() === "") {
      $(this).text(playerchoice);
      computerTurn();
    } else {
      alert("choose another space");
    }
  })

  function computerTurn() {

  }

})
