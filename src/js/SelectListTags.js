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

if (document.getElementById('FolowUpGroupsTest')) {
  const span = document.getElementById('ResponseGroupsLabelSpan');
  const onUpdateFunc = (selectedOptions, allOptions) => {
    const pluralisedGroups = selectedOptions.length === 1 ? 'group' : 'groups';
    span.innerText = `Send to ${selectedOptions.length} response ${pluralisedGroups}`;
  }
  new SelectListTags('FolowUpGroupsTest', 'revert_groups', onUpdateFunc); 
}



