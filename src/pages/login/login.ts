import Block from '../../core/Block';
import compiledTemplate from './login.hbs';
// import './login.scss';

class Login extends Block {
  constructor(props: Props) {
    super(props, {
      form: {
        component: Form,
        getProps: (props: Props) => ({ ...props.form, validator }),
      },
    });
  }

  protected getStateFromProps() {
    this.state = {
      handleSubmit: (values: { login: string; password: string }) => {
        console.log('submit', values);
      },
    };
  }

  render() {
    // const inputs = [{ name: 'login' }, { name: 'password' }];

    // const link = {
    //   to: '/signup',
    //   label: 'Нет аккаунта?',
    // };

    // return `
    //   <div>Login</div>
    // `;
    const context = this.createCompileContext();
    console.log('constext = ', context);
    return compiledTemplate(context);
  }
}

export default Login;
