/****** 

  Creates a tag list from a select element

  usage:

  new SelectListTag(selectId, revertGroupsId, onUpdateFunc).

  - selectId (required): The id of the select element acting as the source (must have multiple attribute, and all items should be marked as selected)

  - revertGroups (optional): The id of the element that will be clicked to revert selected options (should have is-hidden class to start)

  - onUpdateFunc (required): A function called when a tag has been removed, or options are reverted.. This function will be called with two params, selectedOptions and allOptions.
                             This is intended to make the control more flexible i.e. our first usage is to update label with selected items text elsewhere on page without further coupling.

  - items (optional):  Html option elements to be inserted into the underlying select list before tags generated. 

******/
export default class SelectListTags {
  constructor(selectId, revertGroupsId, onUpdateFunc = () => {}, options = null) {
      this.onUpdateFunc = onUpdateFunc;

      this.tagOptions = document.getElementById(selectId);
      this.tagOptions.classList.add('is-hidden');

      if (revertGroupsId) {
        this.revertBtn = document.getElementById(revertGroupsId);
        if (this.revertBtn) {
          this.revertBtn.addEventListener('click', e => {
            e.preventDefault();
            const options = this.tagOptions.querySelectorAll('option');
            options.forEach(o => o.selected = true);
            this.populateTags();
            this.revertBtn.classList.add('is-hidden');
          });
        }        
      }

      if (options) {
        options.forEach(o => this.tagOptions.appendChild(o));
      }

      // Now handles passed in select options
      this.allOptions = options || [...this.tagOptions.querySelectorAll('option')];

      if (this.revertBtn && this.allOptions.some(o => !o.selected)) {
        this.revertBtn.classList.remove('is-hidden');
      }

      this.tags = document.createElement('div');      
      this.tags.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.matches('i')) {
          const targetVal = e.target.dataset.val;
          const o = this.tagOptions.querySelector('option[value="'+targetVal+'"]');
              if(o){
                  o.selected = false;   
                  if (this.revertBtn) {
                    this.revertBtn.classList.remove('is-hidden');      
                  }
              } 
            this.populateTags();
          }
      });

      this.tagOptions.after(this.tags);

      this.populateTags();
  }

  populateTags() {
      this.tags.innerHTML = '';      
      const selectedOptions = this.allOptions.filter(o => o.selected);
      selectedOptions.forEach(t => {
        this.tags.appendChild(this.makeTag(t.innerText, t.value));
      });
      this.onUpdateFunc(selectedOptions, this.allOptions);
    }

  makeTag(text, value) {
      const i = document.createElement('i');
      i.classList.add("button__icon");      
      i.dataset.val=value;
      i.innerText = "clear"

      const tag = document.createElement('div');
      tag.classList.add('tag');
      tag.appendChild(document.createTextNode(text));
      tag.appendChild(i);
      
      return tag;
    };

  // Deselect all the options in the underlying select list.  Optionally regnerated the tags list. 
  // Optional as not worth overhead if dont need it. 
  clearItems(repolulateTags = false) {
    const options = this.tagOptions.querySelectorAll('option');
    options.forEach(o => o.selected = false);

    if (repolulateTags) {      
      this.populateTags();
    }
  }
}

// Should have a section like this for each page the control is used on, unless we want it behave exactly the same as a previous version (including ids and update function) 
// *Better still* - have in seperate script file scoped to specific page (like with SelectStaffForMessage.js)
if (document.getElementById('FollowupGroupSelector')) {

  // Prepare an update function if required (optional parameter)
  const span = document.getElementById('ResponseGroupsLabelSpan');
  const onUpdateFunc = (selectedOptions, allOptions) => {
    const pluralisedGroups = selectedOptions.length === 1 ? 'group' : 'groups';
    span.innerText = `Send to ${selectedOptions.length} response ${pluralisedGroups}`;
  }

  // Initialise an instance of the control
  new SelectListTags('FollowupGroupSelector', 'revert_groups', onUpdateFunc); 
}
