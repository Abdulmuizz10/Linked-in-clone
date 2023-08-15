import React from "react";
import { styled } from "styled-components";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import CenterSide from "../components/CenterSide";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <Link to="#">Hiring in a hurry? - </Link>
          </h5>
          <p>
            Find talented pros in record time with upwork and keep business
            moving.
          </p>
        </Section>
        <Layout>
          <LeftSide user={user} />
          <CenterSide user={user} />
          <RightSide />
        </Layout>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  min-height: 50px;
  box-sizing: content-box;
  text-align: center;
  padding: 16px 0;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    font-size: 14px;

    a {
      color: #3e9fff;
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside centerside rightside";
  grid-template-columns: minmax(0, 45%) minmax(230px, 100%) minmax(50px, 50%);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
