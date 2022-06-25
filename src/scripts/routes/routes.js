import Home from '../views/pages/home';
import About from '../views/pages/about';
import ContentArticle from '../views/pages/content-article';
import ContentEvent from '../views/pages/content-event';
import DetailArticle from '../views/pages/detail-article';
import DetailEvent from '../views/pages/detail-event';
import AddArticle from '../views/pages/create-article';
import AddEvent from '../views/pages/create-event';
import EditArticle from '../views/pages/edit-article';
import EditEvent from '../views/pages/edit-event';
import ArticleDetailSkeleton from '../views/pages/skeleton-detailarticle';
import EventDetailSkeleton from '../views/pages/skeleton-detailevent';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/content-article': ContentArticle,
  '/content-event': ContentEvent,
  '/detail-article/:id': DetailArticle,
  '/detail-event/:id': DetailEvent,
  '/create-article': AddArticle,
  '/create-event': AddEvent,
  '/edit-article/:id': EditArticle,
  '/edit-event/:id': EditEvent,
  '/skeleton-detail-article': ArticleDetailSkeleton,
  '/skeleton-detail-event': EventDetailSkeleton,
};

export default routes;
