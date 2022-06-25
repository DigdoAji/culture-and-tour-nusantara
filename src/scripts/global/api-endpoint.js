const CONFIG = {
  BASE_URL: 'http://localhost:3030/api/',
};

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.BASE_URL}articles`,
  EVENTS: `${CONFIG.BASE_URL}events`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  DETAIL_EVENT: (id) => `${CONFIG.BASE_URL}events/${id}`,
  REVIEW_ARTICLE: `${CONFIG.BASE_URL}review-articles`,
  REVIEW_EVENT: `${CONFIG.BASE_URL}review-events`,
  CATEGORY_ARTICLE: (category) => `${CONFIG.BASE_URL}articles/find?categories=${category}`,
  CATEGORY_EVENT: (category) => `${CONFIG.BASE_URL}events/find?categories=${category}`,
};

export default API_ENDPOINT;
