import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../redux/actions/userAction";
import classnames from "classnames";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.userRoot.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [store.isAuthenticated]);

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(userLogin({ email, password }, history));
    setIsLoading(true);
  };

  useEffect(() => {
    if (store.errorRoot.loginErrors) {
      setErrors(store.errorRoot.loginErrors);
    }
  }, [store.errorRoot.loginErrors]);

  useEffect(() => {
    if (store.errorRoot.loginErrors || store.userRoot.isAuthenticated) {
      setIsLoading(false);
    }
  }, [store.errorRoot.loginErrors, store.userRoot.isAuthenticated]);

  return (
    <div className="containers">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5 m-auto">
            <form onSubmit={formSubmitHandler} className="form-login">
              <h6 className="text-center login-header1">Login</h6>
              <h6 className="text-center login-header">SignIn to account</h6>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email </label>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  value={email}
                  id="exampleInputEmail1"
                  className={classnames("form-control", {
                    "is-invalid": errors.email
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  value={password}
                  id="exampleInputPassword1"
                  className={classnames("form-control", {
                    "is-invalid": errors.password
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="row justify-content-center">
                <div className="col-md-1">
                  {isLoading && (
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </div>
              </div>
              {!isLoading && (
                <button
                  type="submit"
                  className="btn btn-width btn-info btn-block"
                >
                  Sign In
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
