import "./index.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav class="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/SignIn" class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
      <div>
        <Link to="user" className="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link className="main-nav-item">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};
