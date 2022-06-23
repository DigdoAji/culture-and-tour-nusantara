import API_ENDPOINT from './api-endpoint';

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

  static async addReviewArticle(dataReview) {
    const response = await fetch(API_ENDPOINT.REVIEW_ARTICLE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataReview),
    });
    const responseJson = await response.json();
    return responseJson.userReviews;
  }

  static async addReviewEvent(dataReview) {
    const response = await fetch(API_ENDPOINT.REVIEW_EVENT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataReview),
    });
    const responseJson = await response.json();
    return responseJson.userReviews;
  }

  static async insertArticle(dataArticle) {
    const response = await fetch(API_ENDPOINT.ARTICLES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataArticle),
    });
    const responseJson = await response.json();
    return responseJson.detailArticle;
  }

  static async insertEvent(dataEvent) {
    const response = await fetch(API_ENDPOINT.EVENTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataEvent),
    });
    const responseJson = await response.json();
    return responseJson.detailEvent;
  }

  static async editArticle(id, dataArticle) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataArticle),
    });
    const responseJson = await response.json();
    return responseJson.detailArticle;
  }

  static async editEvent(id, dataEvent) {
    const response = await fetch(API_ENDPOINT.DETAIL_EVENT(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataEvent),
    });
    const responseJson = await response.json();
    return responseJson.detailEvent;
  }

  static async removeArticle(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson.detailArticle;
  }

  static async removeEvent(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_EVENT(id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson.detailEvent;
  }

  static async findCategoryArticle(category) {
    const response = await fetch(API_ENDPOINT.CATEGORY_ARTICLE(category));
    const responseJson = await response.json();
    return responseJson.contentArticles;
  }

  static async findCategoryEvent(category) {
    const response = await fetch(API_ENDPOINT.CATEGORY_EVENT(category));
    const responseJson = await response.json();
    return responseJson.contentEvents;
  }
}

export default CTNAPISource;
