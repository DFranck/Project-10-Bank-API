import { useEffect } from "react";
import { EditForm } from "../../features/editName/EditForm";
import "./index.scss";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { useGetUserProfileQuery } from "../../services/userApi";
import { handleForm } from "../../features/editName/editNameSlice";
import { login } from "../../features/auth/authSlice";
import { UserName } from "../../common/components/UserName";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayForm = useSelector((state) => state.editName.display);
  const token = useSelector((state) => state.auth.token);
  const { data, error } = useGetUserProfileQuery(token, {
    skip: !token,
  });
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  useEffect(() => {
    if (data) {
      dispatch(login({ user: data.body }));
    }
    if (error) {
      console.error("Error fetching user data:", error);
      navigate("/login");
    }
  }, [data, error, dispatch, navigate]);
  return (
    <main className="main bg-dark">
      <div className="header">
        {displayForm === false ? (
          <>
            <h1>
              Welcome back
              <br />
              <UserName />
            </h1>
            <button
              className="edit-button"
              onClick={() => dispatch(handleForm())}
            >
              Edit Name
            </button>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <EditForm />
            </h1>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};
