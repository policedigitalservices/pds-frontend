/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 * 
 *  data-showall-table-id="<<id of table to be effected>>"
 * 
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 * 
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *  
 */

var showMoreTableButtons = document.querySelectorAll('button[data-showall-table-id]');

showMoreTableButtons.forEach(showAllButton => {
  var tableId = showAllButton.getAttribute("data-showall-table-id");

  var table = document.getElementById(tableId);
  if (table) {

    var defaultItemLimit = 10;    
    var passedItemLimit = showAllButton.getAttribute("data-showall-item-limit");
    var parsedItemLimit = parseInt(passedItemLimit, 10);
    var limitToUse = isNaN(parsedItemLimit) ? defaultItemLimit : parsedItemLimit;
    
    // We dont want the headers
    var tableBody = table.tBodies[0];
    if (!tableBody) { return; }

    var tableBodyLength = tableBody.rows.length;
    
    for (var i = 1, bodyRow; bodyRow = tableBody.rows[i-1]; i++) {
      if (i > limitToUse) {
        bodyRow.style.display = "none";
      }
    }

    if (tableBodyLength <= limitToUse) { showAllButton.style.display = "none"; }

    showAllButton.addEventListener('click', (el) => {
      el.preventDefault();

      Array.from(tableBody.rows).forEach(function(bodyRow) {
        bodyRow.style.display = "table-row";
      });

      el.target.style.display = "none";
    });
  }
});
