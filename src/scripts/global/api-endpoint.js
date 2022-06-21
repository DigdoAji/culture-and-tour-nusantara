const CONFIG = {
  BASE_URL: 'http://localhost:3030/',
};

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.BASE_URL}articles`,
  EVENTS: `${CONFIG.BASE_URL}events`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  DETAIL_EVENT: (id) => `${CONFIG.BASE_URL}events/${id}`,
  REVIEW_ARTICLE: `${CONFIG.BASE_URL}review-articles`,
  REVIEW_EVENT: `${CONFIG.BASE_URL}review-events`,
};

export default API_ENDPOINT;
