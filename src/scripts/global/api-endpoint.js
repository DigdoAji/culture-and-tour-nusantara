import CONFIG from './config';

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.BASE_URL}articles`,
  EVENTS: `${CONFIG.BASE_URL}events`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  DETAIL_EVENT: (id) => `${CONFIG.BASE_URL}events/${id}`,
};

export default API_ENDPOINT;