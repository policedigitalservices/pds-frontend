/**********************************************************************************/
/*  Wire up tables so that whole row can be clicked, rather than individual cells
/**********************************************************************************/

// Get all table rows that should be clickable
const rowsToLinkify = document.querySelectorAll('table[data-linkable-cell] > tbody > tr');

// Event listener to handle click
const handleRowClick = e => {

  // Find the column that should contain the link
  const table = e.target.closest('table');
  const colToParse = table.getAttribute('data-linkable-cell');

  // Get the clicked row, as maybe a td clicked.
  const row = e.target.closest('tr');

  try {
      // Try and find the link that should be clicked.
    const col = parseInt(colToParse,10) + 1;
    const link = row.querySelector(`td:nth-child(${col}) a`);
    
    // Click the link or report failure to find
    if (link) {
        link.click();
    } else {
        console.error('No link found in column specified by [data-linkable-cell]');
    }
  }
  catch {
    // Warn of invalid column specified.
	console.error('Invalid value specified by [data-linkable-cell]');
  }
};

// Wire up the listeners
rowsToLinkify.forEach(row => row.addEventListener('click', handleRowClick));