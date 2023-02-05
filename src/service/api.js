import ApiConnector from './restClient';
const serv = 'order';

class Api {
  static getAvailableOffices() {
    return ApiConnector.getAxios(`ingredient/availableingredient`);
  }
}

export default Api;
