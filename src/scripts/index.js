import '../styles/main.css';
import '../styles/header.css';
import '../styles/footer.css';
import './components/index';
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './views/app';
import main from './utils/main';

document.addEventListener('DOMContentLoaded', main);

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
