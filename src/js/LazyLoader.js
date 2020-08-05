import debounce from './Utilities';

/**
  Class to manage the load on scroll functionality for a page.
  When the template is rendered server side it should hide the loader element if no more results to load.
*/
export default class CourierLazyLoader {
  
  /**
    Constructor
    Params
     - loaderElement (required): The element that will be used as the loader
     - loaderFn (required): The function that should be called to load the next page of results.  
                            This will be passed a callback that should be called on completion with a bool for 
                            whether or not there are more items to load.
     - configObj (optional):  An object whose key and values will override default config settings.
  */                    
  constructor(
      loaderElement, 
      loaderFn, 
      configObj = {}
  ) {
        
    /**
      Default config settings
    */
    const configDefaults = {
      loaderClass: 'loader',  // the class to be added to the loader element
      loaderLoadingClass: 'loader--loading', // the class to be added to the loader element when searching
      debounceMs: 100, // how long to wait between events before calling load
      peekDistance: 0, // how much of loading element should be on scren before calling load
      debug: false  // whether or not to log debug info to console.
    };
        
    this._loader = loaderElement;
    this._loaderFunc = loaderFn;
        
    // Merge the defaults and passed in config
    this._config = { ...configDefaults, ...configObj };
    
    // Track whether listeners have been added or removed
    this._hasListenersAdded = false;    
        
    if (!this._loader) {
      throw new Error('Null loader element provided');
    }
    
    // Add on the loaders class from the config
    this._loader.classList.add(this._config.loaderClass);
    
    // Debounce the check
    this._lazyLoadCheck = debounce(() => {
      if(this._doLoadMoreCheck()) {
        
        this._conditionalDebugLog('Calling load more function');
        this._loader.classList.add(this._config.loaderLoadingClass);
        this._stopListening();
        
        // call the search function & pass in the done searching callback
        this._loaderFunc(this._doneSearching);
      } else {
        this._conditionalDebugLog('Not ready to reload yet');
      }
    }, this._config.debounceMs);
    
    // Add the events (also does initial check)
    this._startListening();
        
    this._doneSearching = this._doneSearching.bind(this);
  }
  
  _setLoadingElementVisibility(visible) {
    if(visible) {
      this._loader.classList.remove('is-hidden');
    } else {
      this._loader.classList.add('is-hidden');
    }
  }
  
  // Callback function to handkle results coming back in
  _doneSearching(moreToLoad) {
    this._conditionalDebugLog(`_doneSearching callback called with more to load ${moreToLoad}`);
    this._loader.classList.remove(this._config.loaderLoadingClass) 
    if (moreToLoad) {
        this._startListening();
    } else {
      this._conditionalDebugLog('All done - hiding loader element');
      this._setLoadingElementVisibility(false);
    }
  }
  
  // Wire up event listeners and do initial check.
  _startListening() {
    if (!this._hasListenersAdded) {      
      document.addEventListener('scroll', this._lazyLoadCheck);
      window.addEventListener('resize', this._lazyLoadCheck);
      window.addEventListener('orientationChange', this._lazyLoadCheck);
      this._hasListenersAdded = true;
      this._conditionalDebugLog('Listeners added');
      this._lazyLoadCheck();
    }  else {
      this._conditionalDebugLog('Listeners already in place');
    }
  }
  
  // Remove the event listeners
  _stopListening() {
    if (this._hasListenersAdded) {
      document.removeEventListener('scroll', this._lazyLoadCheck);
      window.removeEventListener('resize', this._lazyLoadCheck);
      window.removeEventListener('orientationChange', this._lazyLoadCheck);
      this._hasListenersAdded = false;      
      this._conditionalDebugLog('Listeners removed');
    } else {
      this._conditionalDebugLog('No Listeners to remove');
    }
  }
  
  // Helper to log only if debugging enabled
  _conditionalDebugLog(toDebug, loggerFunc = console.log, ) {
    if (this._config.debug) {
      loggerFunc(toDebug)
    }
  }
  
  // Do the check to see if screen somewhere it should be loaded.
  _doLoadMoreCheck() {    
    const highestVisibleYPos = window.scrollY + window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const loadMoreTriggerPos = Math.min((this._loader.offsetTop + this._config.peekDistance), documentHeight);
    const peekPositionVisible = highestVisibleYPos >= loadMoreTriggerPos;
    const shouldLoadMore = peekPositionVisible;
    
    this._conditionalDebugLog('Doing load more check ...');    
    this._conditionalDebugLog({ 
      'Top position of loader element': this._loader.offsetTop,
      'Config peek distance': this._config.peekDistance,
      'Y co-ordinate when more should be loaded (including peek, constrained to doc height)': loadMoreTriggerPos,
      'Current Y position of scroll': window.scrollY,
      'The internal size of the window': window.innerHeight,
      'The max y position visible': highestVisibleYPos,
      'The height of document': documentHeight,
      'Is peek position visible': peekPositionVisible,
      'Is the load more position visible, or at doc end': shouldLoadMore,
    }, console.table); 
    
    return shouldLoadMore;
  };
}
