import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'devs-authentication.auth0.com',
    clientID: 'z50hXMkS7gzdO6UjjhtwxzVhiIKaKrbx',
    redirectUri: 'http://localhost:3000/login',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}