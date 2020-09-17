// Store selected users inside session storage
export default class IdSessionStorageHelper {
  constructor(name) {
    this._name = name;
    const initial = this._initialise();
    this._items = new Map();
    initial.forEach(({id, name}) => this._items.set(id, name));
  }
  
  // Populate start ids, initialises cookie if not present
  _initialise() {
    const selectedItemsJson = sessionStorage.getItem(this._name);
    if (!selectedItemsJson) {               
      this._persist([]);   
      return [];
    }
    return JSON.parse(selectedItemsJson);
  }
  
  // Save the new ids to the session storage after update
  _update() {
    const items = this.getItems();
    this._persist(items);
  }
  
  // Save the passed in ids to the cookie
  _persist(items) {    
    sessionStorage.setItem(this._name, JSON.stringify(items));
  }
  
  // Set all the items in one hit. Returns the new count.
  setItems(items = []) {
    this._items = new Map();
    items.forEach(i => this._items.set(i.id, i.name));
    this._update();
    return this.getCount();
  }

  // Returns the count of items in the selection.
  getIds() {
    const ids = Array.from(this._items.keys());
    return ids;
  }  

  filterByIds(idsToKeep) {
    const ids = this.getIds();
    return ids.forEach(i => {
      if (!idsToKeep.includes(i)) {
        this.remove(i);
      }
    });
  }  
  
  // Returns the number of items currently in the map.
  getCount() {
    return this._items.size;
  }
  
  // Remove item by its id. Return the new count
  remove(id) {
    this._items.delete(id);      
    this._update();
    return this.getCount();
  }
  
  // Add one or more items. Returns the new count
  add(id, name) {
    this._items.set(id, name);
    this._update();
    return this.getCount();
  }

  // Return all items in array format
  getItems() {
    return Array.from(this._items.entries()).map(([id, name]) => ({ id, name }));
  }

  // Get the name for a passed id
  getName(id) {
    return this._items.get(id);
  }

  // Does the map contain the passed in id.
  hasId(id) {
    return this._items.has(id);
  }

  // Empties the list of selected items in the map.
  clearItems() {
    return this.setItems([]);
  }
}
