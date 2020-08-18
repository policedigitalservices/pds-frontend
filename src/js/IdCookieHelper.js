// Store a unique set of ids inside a cookie
export default class IdCookieHelper{
    constructor(name) {
      this._name = name;
      this._ids = new Set(this._initialise());
    }
    
    // Populate start ids, initialises cookie if not present
    _initialise() {
      const cookieString = document.cookie;

      const cookies = cookieString.split('; ');
      const matchingCookie = cookies.find(c => c.startsWith(`${this._name}=`));

      if (!matchingCookie) {               
        this._persist([]);   
        return [];
      }
      const matchingValueToSplit = matchingCookie.split('=')[1];
      return matchingValueToSplit.split('|').filter(i => i);   // Split and remove empty values
    }
    
    // Save the new ids to the cookie after update
    _update() {
      const ids = this.getIds();
      this._persist(ids);
    }
    
    // Save the passed in ids to the cookie
    _persist(ids) {    
      const joinedIds = ids.join('|');
      const newCookie = `${this._name}=${joinedIds}; path=/; samesite=Strict`
      document.cookie = newCookie;
    }
    
    // Set all the ids in one hit. Returns the new count.
    setIds(ids = []) {
      this._ids = new Set(ids);
      this._update();
      return this.getCount();
    }

    // Returns the count of items in the selection.
    getIds() {
      const ids = Array.from(this._ids)
      return ids;
    }  
    
    // Returns the number of ids currently in the set.
    getCount() {
      return this._ids.size;
    }
    
    // Remove one or more ids. Return the new count
    remove(id) {
      this._ids.delete(id);      
      this._update();
      return this.getCount();
    }
    
    // Add one or more ids. Returns the new count
    add(id) {
      this._ids.add(id);
      this._update();
      return this.getCount();
    }

    // Does the set contain the passed in array item.
    hasId(id) {
        return this._ids.has(id);
    }
}

