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

  static async detailArticle(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id));
    const responseJson = await response.json();
    return responseJson.detailArticle;
  }

  static async detailEvent(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_EVENT(id));
    const responseJson = await response.json();
    return responseJson.detailEvent;
  }
}

export default CTNAPISource;