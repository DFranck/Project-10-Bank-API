import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
//REDUX
import { useLoginUserMutation } from "../../../services/userApi";
import { setToken } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export function SignInForm() {
  const navigate = useNavigate();
  //REDUX
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  //FORMCONTROL
  const [userEmail, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmail = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tryUserLogin = {
      email: userEmail,
      password: password,
    };
    try {
      const response = await loginUser(tryUserLogin).unwrap();
      const token = response.body.token;
      dispatch(
        setToken({
          token,
        })
      );
      navigate("/profile");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-wrapper">
        <label htmlFor="useremail">Email</label>
        <input type="text" id="useremail" onChange={(e) => handleEmail(e)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => handlePassword(e)}
        />
        <>
          <p className={error ? "unvalid show" : "unvalid"}>
            L'Email et/ou le mot de passe sont incorrects
          </p>
        </>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
