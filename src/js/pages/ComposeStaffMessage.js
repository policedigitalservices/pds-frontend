/* 
    This script is specific to the staff compose page.
*/

import IdCookieHelper from '../IdCookieHelper';
import SelectListTags from '../SelectListTags';

const main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-compose')) {

  const ch = new IdCookieHelper('CourierMessageUserIds');
  
  const onUpdateFunc = (selectedOptions, allOptions) => {
    ch.setIds(selectedOptions.map(x => x.value));
  }
  
  new SelectListTags('AscStaffSelector', null, onUpdateFunc); 
}
