$(document).ready(function() {
  var playerchoice = "x";
  
  $("#modal").dialog({
    resizable: false,
    height: 140,
    modal: true,
    autoOpen:true,
    buttons: {
      "X": function() {
        playerchoice = "X";
        $(this).dialog("close");
    },
      "O": function() {
        $(this).dialog("close");
        playerchoice = "O";
      }
    }
  })
  
  $("span").click(function() {
    $('modal').style.display = "none";
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