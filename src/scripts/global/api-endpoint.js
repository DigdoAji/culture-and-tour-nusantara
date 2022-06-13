import CONFIG from './config';

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.BASE_URL}articles`,
  EVENTS: `${CONFIG.BASE_URL}events`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  DETAIL_EVENT: (id) => `${CONFIG.BASE_URL}events/${id}`,
  REVIEW_ARTICLE: `${CONFIG.BASE_URL}review-articles`,
  REVIEW_EVENT: `${CONFIG.BASE_URL}review-events`,
};

export default API_ENDPOINT;
