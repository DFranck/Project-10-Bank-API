import { useEffect } from "react";
import "./index.scss";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { useGetUserProfileQuery } from "../../services/userApi";
import { login } from "../../features/auth/authSlice";
export const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { data, error } = useGetUserProfileQuery(token, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(login({ user: data.body }));
    }
    if (error) {
      console.error("Error fetching user data:", error);
    }
  }, [data, error, dispatch]);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${data?.body?.firstName} ${data?.body?.lastName}`}
        </h1>
        <button className="edit-button">Edit Name</button>
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
