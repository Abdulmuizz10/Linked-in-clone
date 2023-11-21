import React, { useState } from "react";
import styled from "styled-components";
import { useLoginContext } from "../context/AuthContext";

const GooglePopUp = ({ setGooglePopUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  };

  return (
    <Container>
      <Box>
        <Card>
          <div className="close" onClick={() => setGooglePopUp(false)}>
            <i className="bx bx-x"></i>
          </div>
          <form onSubmit={handleSubmit}>
            <img src="/images/google.svg" alt="" />
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
            <button>Log in</button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default GooglePopUp;

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
  animation: slideUp 1s ease-in;

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
      width: 50px;
      margin-bottom: 30px;
      margin-left: 45%;
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
