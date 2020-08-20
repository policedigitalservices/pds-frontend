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

  let currentPage = 1;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const criteriaKey = 'criteria';
  
  let searchCriteriaString = urlParams.has(criteriaKey) ? `?criteria=${urlParams.get(criteriaKey)}` : '';

  const getSearchEndpoint = () => `${location.origin}/Force/Contacts/${currentPage}${searchCriteriaString}`;
  
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
    cell.innerText = text;
    return cell;
  }

  const addRow = user => {
    const newRow = document.createElement('tr');

    newRow.appendChild(createCellWithText(user.name));
    newRow.appendChild(createCellWithText(user.collar));
    newRow.appendChild(createCellWithText(user.email));
    newRow.appendChild(createCellWithText(user.phoneNumber));
    newRow.appendChild(createCheckboxField(user.collar, ch.hasId(user.collar)));

    usersTableBody.append(newRow);
  }

  const addResultRows = rows => {
    rows.forEach(addRow);
  }


  if (loader) {

    const loaderPageSize = loader.getAttribute("page-size");

    new LazyLoader(loader, async done => {
  
      try {
        // Get the next page index
        currentPage++;
        const endpoint = getSearchEndpoint();

        // Do the search
        const response = await window.fetch(endpoint);
        const results = await response.json();

        const hasResults = results.length > 0;

        // We dont know if there will be more results, but its likely if we return a full page of results
        let moreResultsLikely = hasResults;
        if (loaderPageSize) {
          // We may not have this attribute, but if we do check if the page is full. If not there should be no more results to fetch
          moreResultsLikely = results.length === parseInt(loaderPageSize, 10);
        }

        if (hasResults) {          
          addResultRows(results);
        }

        done(moreResultsLikely);  
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
}
