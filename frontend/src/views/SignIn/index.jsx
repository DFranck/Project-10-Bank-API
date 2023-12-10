import { SignInForm } from "../../features/signInForm";
import "./index.scss";
export const SignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
};
