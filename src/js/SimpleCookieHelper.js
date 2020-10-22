// Store a simple value in a cookie
export default class SimpleCookieHelper{
    constructor(name) {
      this._name = name;
      
      this._initialise();
    }

    _initialise() {
        const cookieString = document.cookie;

        const cookies = cookieString.split('; ');
        const matchingCookie = cookies.find(c => c.startsWith(`${this._name}=`));

        this._value = matchingCookie ? decodeURIComponent(matchingCookie.split('=')[1]) : '';
    }

    set(value) {
        const newCookie = `${this._name}=${encodeURIComponent(value)}; path=/; samesite=Strict`
        document.cookie = newCookie;
    }

    get() {
        return this._value;
    }
}

