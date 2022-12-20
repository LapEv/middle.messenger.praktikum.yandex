require('babel-core/register');
import { Block, renderDOM, registerComponent } from './core';
import Login from './pages/login/login';
import './style.scss';

// import Button from './components/button';
// import Link from './components/link';
// import Input from './components/input';
// import Layout from './components/layout';

// registerComponent(Button);
// registerComponent(Link);
// registerComponent(Input);
// registerComponent(Layout);

// TODO: // Добавить MyComponent

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(Login);
});
