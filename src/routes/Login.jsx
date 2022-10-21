import React, { useState, useEffect } from 'react';
import { loginAction } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { apiConstants } from "../store/constants/api.constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loggedIn = useSelector(state => state.login.data.token)

  useEffect(() => {
    const user = localStorage.getItem('token')
    if (user && user !== 'undefined') {
      navigate('/chat');
    }
  }, [loggedIn])

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log("som")
    const data = {
      email,
      password
    }
    dispatch(loginAction.login(apiConstants.Login, data))
  }

  return (
    <div className="bg-warning">
      <div className="container d-flex min-vh-100 align-items-center">
        <div className="mt-3 w-100">
          <div className="w-50 mx-auto">
            <h4 className='text-center pb-3'>Login</h4>
            <form onSubmit={onLoginFormSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login