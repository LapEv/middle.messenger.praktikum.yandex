import { Block } from '../../core/Block';
import loginTemplate from './loginTemplate';
import '../../helpers/handlebarsHelpers';
import Validator, { ValidateRules } from '../../core/validator';
import AuthForm, { Props as FormProps } from '../../components/auth/authForm';
import loginData from './loginData';
// import './login.scss';

type Props = {
  authForm: FormProps;
};

const validateRules: ValidateRules = {
  login: [
    {
      rule: (value) => value.length > 0,
      errorMessage: 'Обязательное поле',
    },
    {
      rule: Validator.defaultRegexp.name,
      errorMessage: 'Логин содержит посторонние символы',
    },
  ],
  password: [
    {
      rule: (value) => value.length > 0,
      errorMessage: 'Обязательное поле',
    },
    {
      rule: Validator.defaultRegexp.password,
      errorMessage: 'Слишком простой',
    },
  ],
};

const validator: Validator = new Validator(validateRules);

export default class Login extends Block {
  constructor(props: Props) {
    super(props, {
      authForm: {
        component: AuthForm,
        getProps: (props: Props) => ({ ...props.authForm, validator }),
      },
    });
  }

  render() {
    console.log('render Login ');

    const context = this.createCompileContext();

    console.log('render Login context ', context);
    console.log('render Login loginTemplate ', loginTemplate);
    return loginTemplate;
    // return loginTemplate();
  }
}

const login = new Login(loginData);
console.log('render Login = ', login);

const app = document.getElementById('app') as HTMLElement;
app.append(login.getOuterElement());
