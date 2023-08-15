import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const SignInPopUp = ({ setSignInPopUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password, email };
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/home");
  };

  return (
    <Container>
      <Box>
        <Card>
          <div className="close" onClick={() => setSignInPopUp(false)}>
            <i className="bx bx-x"></i>
          </div>
          <form onSubmit={handleSubmit}>
            <img src="/images/login-logo.svg" alt="" />
            <div>
              <label name="username">Username:</label>
              <input
                type="text"
                placeholder="Username"
                required="true"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label name="password">Password:</label>
              <input
                type="password"
                placeholder="password"
                required="true"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div>
              <label name="email">Email:</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                required="true"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button>Sign in</button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default SignInPopUp;

const Container = styled.div``;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;

  /* @media (max-width: 1025px) {
    height: 33%;
  }

  @media (max-width: 768px) {
    padding: 20px 20px 0 20px;
    height: 45%;
  }

  @media (max-width: 568px) {
    padding: 20px 20px 0 20px;
    height: 55%;
  } */

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    i {
      font-size: 25px;
      color: #2977c9;
      cursor: pointer;
    }
  }

  form {
    padding: 40px 0 0;

    img {
      width: 120px;
      margin-bottom: 30px;
    }

    div {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 1.2rem;
        color: #2977c9;
      }

      input {
        padding: 10px 5px;
        border-radius: 5px;
        border: 1px solid #2977c9;
        font-size: 0.8rem;
      }
    }

    button {
      width: 100%;
      background: #2977c9;
      padding: 15px 0;
      border: none;
      color: white;
      border-radius: 5px;
      margin-top: 15px;
      font-size: 1rem;
      transition: 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: 768px) {
    width: 325px;
  }
`;
