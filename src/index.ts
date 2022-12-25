import { MainPage } from 'core/renderDOM';
import { ProfilePage } from 'pages';
import { LoginPage } from 'pages/login/login';

document.addEventListener('DOMContentLoaded', () => {
  MainPage.component = new ProfilePage();
});
