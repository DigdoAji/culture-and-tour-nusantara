import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import About from '../views/pages/about';
import ContentArticle from '../views/pages/content-article';
import ContentEvent from '../views/pages/content-event';
import DetailArticle from '../views/pages/detail-article';
import DetailEvent from '../views/pages/detail-event';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/content-article': ContentArticle,
  '/content-event': ContentEvent,
  '/login': Login,
  '/register': Register,
  '/detail-article/:id': DetailArticle,
  '/detail-event/:id': DetailEvent,

};

export default routes;
