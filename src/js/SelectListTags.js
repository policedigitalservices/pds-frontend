/****** 

  Creates a tag list from a select element

  usage:

  new SelectListTag(selectId, revertGroupsId, onUpdateFunc).

  - selectId (required): The id of the select element acting as the source (must have multiple attribute, and all items should be marked as selected)

  - revertGroups (optiional): The id of the element that will be clicked to revert selected options (should have is-hidden class to start)

  - onUpdateFunc (required): A function called when a tag has been removed, or options are reverted.. This function will be called with two params, selectedOptions and allOptions.
                             This is intended to make the control more flexible i.e. our first usage is to update label with selected items text elsewhere on page without further coupling.

******/
class SelectListTags {
  constructor(selectId, revertGroupsId, onUpdateFunc = () => {}) {
      this.onUpdateFunc = onUpdateFunc;
      this.tagOptions = document.getElementById(selectId);
      this.tagOptions.classList.add('is-hidden');
      this.allOptions = [...this.tagOptions.querySelectorAll('option')];
      this.revertBtn = document.getElementById(revertGroupsId);
      this.revertBtn.addEventListener('click', e => {
        e.preventDefault();
        const options = this.tagOptions.querySelectorAll('option');
        options.forEach(o => o.selected = true);
        this.populateTags();
        this.revertBtn.classList.add('is-hidden');
      });

      this.tags = document.createElement('div');
      
      this.tags.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.matches('i')) {
          const targetVal = e.target.dataset.val;
          const o = this.tagOptions.querySelector('option[value="'+targetVal+'"]');
              if(o){
                  o.selected = false;   
                  this.revertBtn.classList.remove('is-hidden');      
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
}

// Should have a section like this for each page the control is used on, unless we want it behave exactly the same as a previous version (include ids and update function) 
if (document.getElementById('FolowUpGroupsTest')) {

  // Prepare an update function if required
  const span = document.getElementById('ResponseGroupsLabelSpan');
  const onUpdateFunc = (selectedOptions, allOptions) => {
    const pluralisedGroups = selectedOptions.length === 1 ? 'group' : 'groups';
    span.innerText = `Send to ${selectedOptions.length} response ${pluralisedGroups}`;
  }

  // Initialise a instance of the ciontroler
  new SelectListTags('FolowUpGroupsTest', 'revert_groups', onUpdateFunc); 
}



