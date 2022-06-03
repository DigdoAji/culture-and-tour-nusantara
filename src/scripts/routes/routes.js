import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import About from '../views/pages/about';
import ContentArticle from '../views/pages/content-article';
import ContentEvent from '../views/pages/content-event';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/content-article': ContentArticle,
  '/content-event': ContentEvent,
  '/login': Login,
  '/register': Register,
};

export default routes;
