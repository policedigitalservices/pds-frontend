if (document.getElementById("messageStatuses") != null) {
  (function(selector) {
    var table = document.getElementById("messageStatuses");
    for (var i = 0, row; (row = table.rows[i]); i++) {
      if (i >= 11) {
        row.style.display = "none";
      }
    }
    var seeAllStatusesButton = document.getElementById("seeAllStatusesBtn");
    if (table.rows.length <= 10) {
      seeAllStatusesButton.style.display = "none";
    }
    seeAllStatusesButton.addEventListener("click", function(el) {
      el.preventDefault();
      var table = document.getElementById("messageStatuses");
      for (var i = 0, row; (row = table.rows[i]); i++) {
        row.style.display = "table-row";
      }
    });
  })("messageStatuses");
}

if (document.getElementById("messageResponses") != null) {
  (function(selector) {
    var table = document.getElementById("messageResponses");
    for (var i = 0, row; (row = table.rows[i]); i++) {
      if (i >= 11) {
        row.style.display = "none";
      }
    }
    var seeAllStatusesButton = document.getElementById("seeAllResponsesBtn");
    if (table.rows.length <= 10) {
      seeAllStatusesButton.style.display = "none";
    }
    seeAllStatusesButton.addEventListener("click", function(el) {
      el.preventDefault();
      var table = document.getElementById("messageResponses");
      for (var i = 0, row; (row = table.rows[i]); i++) {
        row.style.display = "table-row";
      }
    });
  })("messageResponses");
}
