/* 
    This script is specific to the search staff page.
*/
import IdCookieHelper from '../IdCookieHelper';
import DraftMessageDrawer from '../DraftMessageDrawer';
import LazyLoader from '../LazyLoader';

const main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-index')) {

  const ch = new IdCookieHelper('CourierMessageUserIds');
  const dmd = new DraftMessageDrawer(ch.getCount());
  const loader = document.querySelector('loader');

  const usersTable = document.getElementById('table-select-staff');
  const usersTableBody = usersTable.getElementById('tbody');

  // TODO: This ...
  let currentPage = 1;

  const getSearchEndpoint = () => `https://<<SOME_URL>>/ad-staff?page=${currentPage}`;
  
  // Add listeners for the checkboxes
  document.getElementById('table-select-staff').addEventListener('change', ({target}) => {
    if (target.matches('input[type=checkbox]')) {
        const newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
        dmd.update(newTotal);
    }
  });

  const addRow = user => {
    const newRow = document.createElement('tr');
    // TODO: add tds into this row, using 'user' details.
    usersTableBody.append(newRow);
  }

  const addResultRows = rows => {
    rows.forEach(addRow);
  }

  if (loader) {
    new LazyLoader(loader, async (done) => {
  
      try {
        // Get the next page index
        currentPage++;
        const endpoint = getSearchEndpoint();

        // Do the search
        const response = await window.fetch(endpoint);
        const json = await response.json();

        addResultRows(json.rows);
        done(json.hasMoreRows);
      }
      catch(e) {        
        console.error(`Failed to lazy load page ${currentPage} of ad users`);
        console.error(e);
        // Ignore current failed page
        currentPage--;
        done(false);
      }
      
    }, { debug: false, peekDistance: 50 });
  }  
}
