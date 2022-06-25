import '../styles/main.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import './components/index';
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './views/app';

const app = new App({
  button: document.querySelector('#drawerButton'),
  drawer: document.querySelector('#navDropdown'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
