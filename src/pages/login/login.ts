import Block from '../../core/Block';
import compiledTemplate from './login.hbs';
import Validator, { ValidateRules } from '../../core/validator';
import Form, { Props as FormProps } from '../../components/auth/authForm';
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

class Login extends Block {
  constructor(props: Props) {
    super(props, {
      authForm: {
        component: Form,
        getProps: (props: Props) => ({ ...props.form, validator }),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const login = new Login(loginData);

const app = document.getElementById('app') as HTMLElement;
app.append(login.getOuterElement());

export default Login;
