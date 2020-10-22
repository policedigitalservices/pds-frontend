/* 
    This script is specific to the search staff page.
*/
import IdSessionStorageHelper from '../IdSessionStorageHelper';
import DraftMessageDrawer from '../DraftMessageDrawer';
import LazyLoader from '../LazyLoader';

const main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-index')) {

  const idSh = new IdSessionStorageHelper('CourierMessageUsers');
  const dmd = new DraftMessageDrawer(idSh.getCount());
  const loader = document.querySelector('.loader');

  const allCheckboxesInTable = Array.from(document.querySelectorAll("#table-select-staff [type=checkbox]"));

  // Check all items in the local storage
  const itemsThatShouldBeSelected = allCheckboxesInTable.filter(cb => idSh.hasId(cb.value));
  itemsThatShouldBeSelected.forEach(i => i.checked = true);

  const allCheckboxesSelected = () => allCheckboxesInTable.every(cb => cb.checked);
  
  // const allContactIds = () => allCheckboxesInTable.map(cb => cb.value);
  const allContacts = () => allCheckboxesInTable.map(cb => {
    return {
      id: cb.value,
      name: cb.getAttribute('data-contact-name')
    }
  });

  // Uses a passed in 'combiner' function to decided how to either add or remove selected results to those from other pages.
  const handleSelectiondChangeMerge = (combineFn) => {
    const allContactsDisplayed = allContacts();
    const existingContacts = idSh.getItems();
    const newItems = combineFn(existingContacts, allContactsDisplayed);  

    idSh.setItems(newItems);
    dmd.update(newItems.length);
  }

  // Remove all the ids that were contained in this results page.  Keep result from other pages selected
  const deselectAll = (toDeselect) => {
    toDeselect.forEach(toDeselect => toDeselect.checked = false);
    handleSelectiondChangeMerge((existingItems, allItemsForGroup) => existingItems.filter(({id}) => !allItemsForGroup.map(i => i.id).includes(id)));
  }

  // Add all the ids that were contained in this results page.  Keep result from other pages selected
  const selectAll = (toSelect) => {
    toSelect.forEach(toSelect => toSelect.checked = true);    

    handleSelectiondChangeMerge((existingItems, allItemsForGroup) => {

      // get all items on the page not in the existing results
      const groupItemsToAdd = allItemsForGroup.filter(({id}) => !existingItems.map(i => i.id).includes(id));

      // Merge the new items in
      return [...existingItems, ...groupItemsToAdd];
    });
  }

  const handleSelectAllChange = (e) => {
    const target = e.target;   

    target.checked ?
      selectAll(allCheckboxesInTable) :
      deselectAll(allCheckboxesInTable);
  }

  const toggleSelectAllCheckbox = document.querySelector('#cbSelectAll [type=checkbox]');
  if (toggleSelectAllCheckbox) {
    toggleSelectAllCheckbox.addEventListener('change', handleSelectAllChange);

    if (allCheckboxesSelected()) {
      toggleSelectAllCheckbox.checked = true;
    }
  }

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
  const staffTable = document.getElementById('table-select-staff');

  if (staffTable) {
    staffTable.addEventListener('change', ({target}) => {
      if (target.matches('input[type=checkbox]')) {
          const newTotal = target.checked ? idSh.add(target.value, target.getAttribute('data-contact-name')) : idSh.remove(target.value);
          if (toggleSelectAllCheckbox) {
            if (!target.checked) {
              // If unchecked deselect the check all.
              toggleSelectAllCheckbox.checked = false;
            } else if (allCheckboxesSelected()) {
              // If checked see if all are now selected.
              toggleSelectAllCheckbox.checked = true;
            }
          }
          dmd.update(newTotal);
      }
    });  }  

  const createCheckboxField = (value, checked, name) => {  
    const cell = document.createElement('td');
    cell.classList.add('checkbox-cell');
    const label = document.createElement('label');
    label.classList.add('checkbox');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = value;
    input.checked = checked;
    input.setAttribute('data-contact-name', name);
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
    const phoneCell = document.createElement('td');
    const phoneTextNode  = document.createTextNode(user.phoneNumberCount > 1 ? ` ${user.phoneNumber}` : user.phoneNumber);
    
    if (user.phoneNumberCount > 1) {
      const badge = document.createElement('em');
      badge.classList.add('badge');
      badge.textContent = user.phoneNumberCount;
      phoneCell.appendChild(badge);
    }

    phoneCell.appendChild(phoneTextNode);
    newRow.appendChild(phoneCell);
    newRow.appendChild(createCheckboxField(user.id, idSh.hasId(user.id), user.name));

    usersTableBody.appendChild(newRow);
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
