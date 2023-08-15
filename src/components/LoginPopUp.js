import React from "react";
import styled from "styled-components";

const LoginPopUp = ({ setLoginPopUp }) => {
  return (
    <Container>
      <Box>
        <Card>
          <div className="close" onClick={() => setLoginPopUp(false)}>
            <i className="bx bx-x"></i>
          </div>
          <form>
            <img src="/images/login-logo.svg" alt="" />
            <div>
              <label name="username">Username:</label>
              <input type="text" placeholder="Username" required="true" />
            </div>
            <div>
              <label name="password">Password:</label>
              <input type="password" placeholder="password" required="true" />
            </div>
            <button>Log in</button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPopUp;

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