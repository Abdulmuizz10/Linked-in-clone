import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInPopUp from "../components/SignInPopUp";
import LoginPopUp from "../components/LoginPopUp";
import GooglePopUp from "../components/GooglePopUp";

const Login = () => {
  const [signInPopUp, setSignInPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [googlePopUp, setGooglePopUp] = useState(false);

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>

        <div>
          <Join onClick={() => setSignInPopUp(true)}>Join now</Join>
          <SignIn onClick={() => setLoginPopUp(true)}>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Link to="">
            <Google onClick={() => setGooglePopUp(true)}>
              <img src="images/google.svg" alt="" />
              <p>Sign in with Google</p>
            </Google>
          </Link>
        </Form>
      </Section>
      {signInPopUp && <SignInPopUp setSignInPopUp={setSignInPopUp} />}
      {loginPopUp && <LoginPopUp setLoginPopUp={setLoginPopUp} />}
      {googlePopUp && <GooglePopUp setGooglePopUp={setGooglePopUp} />}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 0px;

  @media (max-width: 1024px) {
    overflow-x: hidden;
  }
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 12px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background: rgba(112, 163, 249, 0.15);
    color: #0a66c2;
  }
`;

const Section = styled.div`
  align-content: start;
  min-height: 700px;
  padding-bottom: 40px;
  padding-top: 68px 0;
  padding: 60px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 500;
    color: #2977c9;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 26px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 500px;
    position: absolute;
    bottom: 300px;
    right: -50px;

    @media (max-width: 768px) {
      top: 23px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 140px;
  width: 340px;

  @media (max-width: 768px) {
    margin-top: 25px;
    margin: auto;
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

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 26px;
  cursor: pointer;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  gap: 0.5rem;

  &:hover {
    background: rgba(267, 267, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
