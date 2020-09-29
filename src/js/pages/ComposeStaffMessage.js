/* 
    This script is specific to the staff compose page.
*/

import SimpleCookieHelper from '../SimpleCookieHelper';
import IdSessionStorageHelper from '../IdSessionStorageHelper';
import SelectListTags from '../SelectListTags';
import SeeAllHelper from '../SeeAllHelper';

const main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-compose')) {

  const addBtn = document.getElementById('add_contact');
  const subjectInput = document.getElementById('subject_input');
  const messageInput = document.getElementById('Input_Message');
  const resendInput = document.getElementById('Input_AutoResendSchedule');
  const responseOptions = Array.from(document.querySelectorAll('.response-option'));

  const cookieHelper = new SimpleCookieHelper('CourierMessageTitle');
  const cookieMessageHelper = new SimpleCookieHelper('CourierMessageContent');
  const cookieAutoResendHelper = new SimpleCookieHelper('CourierMessageResend');
  const cookieResponseHelper = new SimpleCookieHelper('CourierMessageResponses');
  const idsSessionHelper = new IdSessionStorageHelper('CourierMessageUsers');

  
  const getResponseOptionValuesString = () => {
    const nonEmptyOptions = responseOptions.reduce((acc, curr) => {
      if (curr.value) {
        return [...acc, curr.value];
      }
  
      return acc;
    }, []);
    
    return nonEmptyOptions.join('||');
  };

  addBtn.addEventListener('click', () => {
    cookieHelper.set(subjectInput.value);
    cookieMessageHelper.set(messageInput.value);
    cookieAutoResendHelper.set(resendInput.value);  
    cookieResponseHelper.set(getResponseOptionValuesString());
  });

  let tagsSeeAllHelper;
  
  const onUpdateFunc = (selectedOptions, allOptions) => {
    idsSessionHelper.filterByIds(selectedOptions.map(x => x.value));
    tagsSeeAllHelper.recalculate();
  }

  const selectOptions = idsSessionHelper.getItems().map(({id, name})=> {
    const option = document.createElement('option');
    option.selected = true;
    option.value = id;
    option.innerText = name;
    return option;
  });
  
  const slt = new SelectListTags('AscStaffSelector', null, onUpdateFunc, selectOptions); 

  const discardBtn = document.getElementById('btnDiscard');
  discardBtn.addEventListener('click', () => {
    idsSessionHelper.clearItems();
    slt.clearItems();
  });

  tagsSeeAllHelper = new SeeAllHelper('#AscStaffSelector + div > .tag', '#seeMoreRecipients');

}
