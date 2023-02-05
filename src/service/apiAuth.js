import ApiConnector from './restClient';
const serv = '';
class ApiAuth {
  static getAuth(pass, log) {
    return ApiConnector.postAxios(`${serv}auth/signin`, {
      password: pass,
      login: log,
    });
  }
  static getReg(email, log, pass) {
    return ApiConnector.postAxios(
      `${serv}auth/signup`,
      {
        email: email,
        login: log,
        password: pass,
      },
      true,
    );
  }
}

export default ApiAuth;
