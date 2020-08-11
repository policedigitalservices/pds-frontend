/* 
    This script is specific to the search staff page.
*/

import IdCookieHelper from './IdCookieHelper';
import DraftMessageDrawer from './DraftMessageDrawer';
import LazyLoader from './LazyLoader';

const m = document.querySelector('main');

if (m && m.classList.contains('asc-staff-index')) {

  // TODO: Move all of the workings in here to scope to page. 

  // TODO: Add a cookie bar.
}



const ch = new IdCookieHelper('CourierMessageUserIds');
const dmd = new DraftMessageDrawer(ch.getCount());
// TODO: create the SelectListTags

document.querySelector('.test-checkboxes').addEventListener('change', ({target}) => {
    if (target.matches('input[type=checkbox]')) {
        const newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
        dmd.update(newTotal);
    }
});


//  SAMPLE OF DUMMY CODE THAT WAS RUNNING ON CODE PEN - FOR REMINDER OF HOW TO IMPLMENT 
/*

const contactsLoaderElement = document.getElementById('contacts-loader');

if (contactsLoaderElement) {
  const itemsList = document.querySelector('.items-list');
  
  const createDummyRow = id => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const header = document.createElement('h2');
    header.innerText = 'Test Item ' + id;
    const p = document.createElement('p');
    p.innerText = 'Nemo laborum asperiores molestiae earum accusantium alias provident commodi porro a illum soluta dolore ipsa, debitis deleniti beatae placeat possimus consequuntur dolorum? Laudantium accusamus nam numquam, perspiciatis quod dicta dolor.';
    itemDiv.appendChild(header);
    itemDiv.appendChild(p);
    return itemDiv;
  };
  
  const checkIfMore = () => {
    return itemsList.querySelectorAll('.items-list > .item').length < 100;
  }
  
  const insertDummyRows = () => {
    const maxRows = itemsList.querySelectorAll('.items-list > .item').length;
    
    for (let i = 0; i < 10; i++) {
      var dummyItem = createDummyRow(maxRows + i + 1);
      itemsList.appendChild(dummyItem);
    }
  };
  
  const handleSearchResults = (doneSearching) => {
      // Add in some dummy rows...
      insertDummyRows();
      const moreToLoad = checkIfMore();
      doneSearching(moreToLoad);
  };
  
  const contactsLoader = new CourierLazyLoader(contactsLoaderElement, (done) => {
    
    setTimeout(() => {
      handleSearchResults(done);    
    }, 500);
    
  }, { debug: false, peekDistance: 50 });
}

*/


