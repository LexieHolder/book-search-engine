import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
      return decode(this.getToken());
    }
  
    // check if the user is still logged in
    loggedIn() {
      // Check for a saved token and if it's still valid
      const token = this.getToken();
      // use type coersion to check if token is NOT undefined and the token is NOT expired
      return !!token && !this.isTokenExpired(token);
    }
  
    // check if the token has expired
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // retrieve token from localStorage
    getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token');
    }
  
    // set token to localStorage and reload page to homepage
    login(idToken) {
      // save user token to localStorage
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
    }
  
    // clear token from localStorage and force logout with reload
    logout() {
      // clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
      // reload page and reset state of application
      window.location.assign('/');
    }
  }
export default new AuthService();