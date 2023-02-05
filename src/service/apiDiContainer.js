import ApiAuth from './apiAuth';
import Api from './api';

class ApiDiContainer {
  static ProxyApiAuth = ApiAuth;
  static ProxyApi = Api;
}
export default ApiDiContainer;
