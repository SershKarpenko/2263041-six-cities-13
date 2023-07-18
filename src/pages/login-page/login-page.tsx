import { Helmet } from 'react-helmet-async';
import Logo from '../logo-page/logo-page';

function Login (): JSX.Element {
  return (
    <>
      <Logo/>
      <Helmet>
        <title>6 cities - Login</title>
      </Helmet>
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post">
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              className="login__input form__input"
              type="email"
              name="email"
              placeholder="Email"
              required
            >
            </input>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            >
            </input>
          </div>
          <button className="login__submit form__submit button" type="submit">
          Sign in
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
