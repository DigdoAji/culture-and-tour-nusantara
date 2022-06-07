import API_ENDPOINT from '../global/api-endpoint';

class CTNAPISource {
  static async contentArticles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();
    return responseJson.contentArticles;
  }

  static async contentEvents() {
    const response = await fetch(API_ENDPOINT.EVENTS);
    const responseJson = await response.json();
    return responseJson.contentEvents;
  }
}

export default CTNAPISource;