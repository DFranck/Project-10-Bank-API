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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [isUserNameValid, setUserNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserNameValid(emailRegex.test(userName));
    setPasswordValid(passwordRegex.test(password));
    const tryUserLogin = {
      email: userName,
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
      navigate("/User");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={(e) => handleEmail(e)} />
        {!isUserNameValid && userName.length > 3 && (
          <p className="unvalid">Veuillez renseigner une nom valide</p>
        )}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => handlePassword(e)}
        />
        {!isPasswordValid && password.length > 8 && (
          <>
            <p className="unvalid">Attention le mot de passe doit contenir:</p>
            <ul className="unvalid">
              {password.length < 8 && <li>Au moins 8 caractères.</li>}
              {!/[A-Z]/.test(password) && (
                <li>Au moins une lettre majuscule.</li>
              )}
              {!/[a-z]/.test(password) && (
                <li>Au moins une lettre minuscule.</li>
              )}
              {!/\d/.test(password) && <li>Au moins un chiffre.</li>}
              {!/[@$!%*?&]/.test(password) && (
                <li>Au moins un caractère spécial (comme !, @, #, etc.).</li>
              )}
            </ul>
          </>
        )}
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
