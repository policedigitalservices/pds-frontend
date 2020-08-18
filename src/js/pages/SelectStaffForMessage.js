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
  const loader = document.querySelector('.loader');

  const usersTable = document.getElementById('table-select-staff');
  let usersTableBody;
  if(usersTable) {
   usersTableBody = usersTable.querySelector('tbody');
  }

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

  const createCheckboxField = (value, checked) => {  
    const cell = document.createElement('td');
    cell.classList.add('checkbox-cell');
    const label = document.createElement('label');
    label.classList.add('checkbox');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = value;
    input.checked = checked;
    const span = document.createElement('span');
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(label);
    return cell;
  }

  const createCellWithText = text => {
    const cell = document.createElement('td');
    cell.innerText = "Put name here";
    return cell;
  }

  const addRow = user => {
    const newRow = document.createElement('tr');

    newRow.appendChild(createCellWithText('PUT NAME HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT COLLAR HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT EMAIL HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT PHONE HERE FROM USER'));
    newRow.appendChild(createCheckboxField('PUT COLLAR HERE', ch.hasId('PUT COLLAR HERE')));

    usersTableBody.append(newRow);
  }

  const addResultRows = rows => {
    rows.forEach(addRow);
  }

  /*

  // TODO: Restore this block of code once the end point is in place.

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
        done(!json.hasMoreRows);
      }
      catch(e) {        
        console.error(`Failed to lazy load page ${currentPage} of AD users`);
        console.error(e);
        // Ignore current failed page, so will try again
        currentPage--;
        done(true); // Call done with more to load.
        // TODO: What to do here. If enpoint is down, we would get lots of console errors at the moment....
      }
      
    }, { debug: false, peekDistance: 50 });
  }  
  */
}
