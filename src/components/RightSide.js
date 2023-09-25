import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <Link to="">
              <Avatar>
                <div>
                  <i className="bx bx-hash"></i>
                </div>
              </Avatar>
            </Link>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar>
                <div>
                  <i className="bx bx-hash"></i>
                </div>
              </Avatar>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="/images/banner.png" alt="" />
      </BannerCard>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  grid-area: "rightside";
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.div`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    gap: 0.2rem;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 25px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      margin-bottom: 5px;
    }
  }
`;

const Avatar = styled.div`
  border: 1px solid #0a66c2;
  border-radius: 50%;
  padding: 2px;

  div {
    border: 1px solid #0a66c2;
    border-radius: 50%;

    i {
      font-size: 30px;
      color: black;
    }
  }
`;

const Recommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
