import styled from 'styled-components';

const StyledLogin = styled.div`
   .login {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 3rem auto;
  padding: 1rem 0;
  align-items: center;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
}

.login-form {
  width: 70%;
  justify-content: center;
  text-align: center;
}

.login h2 {
  font-size: 3rem;
  font-family: "Rochester", cursive;
  padding-bottom: 2rem;
  margin: 0;
}

.login a {
  text-decoration: none;
  font-weight: bolder;
  color: #3796f0;
}

.login .login-form input {
  width: 95%;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #efefef;
  color: #262626;
  font-size: 0.7rem;
}

.login .login-form input:focus {
  border: 1px solid #262626;
  outline: none;
}

.login .login-form button {
  width: 100%;
  padding: 0.5rem 0;
  background-color: #3796f0;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.login .login-form button:hover {
  color: #3796f0;
  background-color: white;
  border: 1px solid #3796f0;
}

.signup {
  display: flex;
  width: 25%;
  margin: 2rem auto;
  padding: 1rem 0;
  align-items: center;
  background-color: #ffffff;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.78);
}

.signup p {
  padding: 0 0.5rem;
}

.signup a {
  text-decoration: none;
  font-weight: bolder;
  color: #3796f0;
}

.login-footer {
  display: flex;
  width: 25%;
  flex-wrap: wrap;
  margin: 2rem auto;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.login-footer p {
  width: 100%;
}

.login-footer img {
  width: 150px;
  padding: 0 0.5rem;
  cursor: pointer;
}

@media (max-width: 1400px) {
  .login {
    width: 50%;
  }
  .signup {
    width: 50%;
  }
  .login-footer {
    width: 50%;
  }
}

@media (max-width: 550px) {
  .login {
    width: 70%;
  }
  .signup {
    width: 70%;
  }
  .login-footer {
    width: 70%;
  }
}
`;

export default StyledLogin;