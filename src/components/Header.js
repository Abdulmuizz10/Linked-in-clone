import React from "react";
import styled from "styled-components";
import { link } from "react-router-dom";
import { useHistory } from "react-router-dom/";

const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="#">
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notification</span>
              </a>
            </NavList>

            <User>
              <a href="#">
                <img src="images/user.svg" alt="" />
                <div>
                  <span>Me</span>
                  <img src="images/down-icon.svg" alt="" />
                </div>
              </a>
              <SignOut onClick={logout}>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a href="#">
                <img src="images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  /* z-index: 100; */
  padding: 0 24px;
  position: fixed;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.div`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 214px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #89c1fd;
      color: rgba(0, 0, 0, 0.9);
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  z-index: 1;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      position: absolute;
      transform: scaleX(1);
      border-bottom: 2px solid #fff;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
  }

  @media (max-width: 568px) {
    justify-content: flex-start;
    margin-right: -3.5%;
  }

  a {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    /* padding: 5px 0; */

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    top: -45px;
  }
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 2px 0 0;
  }

  a > div {
    display: flex;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
