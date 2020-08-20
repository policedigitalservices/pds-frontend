/* 
    This script is specific to the staff compose page.
*/

import SimpleCookieHelper from '../SimpleCookieHelper';
import IdCookieHelper from '../IdCookieHelper';
import SelectListTags from '../SelectListTags';

const main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-compose')) {

  const addBtn = document.getElementById('add_contact');
  const subjectInput = document.getElementById('subject_input');
  
  const cookieHelper = new SimpleCookieHelper('CourierMessageTitle');
  const idsCookieHelper = new IdCookieHelper('CourierMessageUserIds');

  addBtn.addEventListener('click', () => {
    cookieHelper.set(subjectInput.value);
  });
  
  const onUpdateFunc = (selectedOptions, allOptions) => {
    idsCookieHelper.setIds(selectedOptions.map(x => x.value));
  }
  
  new SelectListTags('AscStaffSelector', null, onUpdateFunc); 
}
