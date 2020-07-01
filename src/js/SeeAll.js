var showMoreTableButtons = document.querySelectorAll('button[data-showall-table-id]');

showMoreTableButtons.forEach(showAllButton => {
  var tableId = showAllButton.getAttribute("data-showall-table-id");
  var defaultItemLimit = 10;

  var table = document.getElementById(tableId);
  if (table) {
    var passedItemLimit = showAllButton.getAttribute("data-showall-item-limit");
    var parsedItemLimit = parseInt(passedItemLimit, 10);
    var limitToUse = isNaN(parsedItemLimit) ? defaultItemLimit : parsedItemLimit;
    var tableLength = table.rows.length;

    for (var i = 1, row; row = table.rows[i]; i++) {
      if (i > limitToUse) {
        row.style.display = "none";
      }
    }

    if (tableLength <= (limitToUse+1)) { showAllButton.style.display = "none"; }

    showAllButton.addEventListener('click', (el) => {
      el.preventDefault();

      Array.from(table.rows).forEach(function(row) {
        row.style.display = "table-row";
      });
    });
  }
});
