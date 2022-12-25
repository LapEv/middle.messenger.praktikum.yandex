import { MainPage } from 'core/renderDOM';
import { LoginPage } from 'pages/login/login';

document.addEventListener('DOMContentLoaded', () => {
  MainPage.component = new LoginPage();
});
