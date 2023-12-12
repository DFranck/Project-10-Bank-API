import "./index.scss";
import { Link } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
export const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!user ? (
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link to="user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
          <Link
            className="main-nav-item"
            onClick={() => dispatch(logout())}
            to={"/"}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};
