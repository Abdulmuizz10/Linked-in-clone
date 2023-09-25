import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostPopUp from "./PostPopUp";
import "./Main";
import Main from "./Main";
import DefaultSide from "./DefaultSide";

const CenterSide = ({ user }) => {
  const [postPopUp, setPostPopUp] = useState(false);
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newPost = { id, ...post };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    const deletedPosts = posts.filter((post) => post.id !== id);
    setPosts(deletedPosts);
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src="images/user.svg" alt="" />
          <button onClick={() => setPostPopUp(true)}>
            <h4 style={{ animation: "blink 1s infinite" }}>
              Click to start a post
            </h4>
          </button>
        </div>
        <div>
          <button>
            <i className="bx bx-image"></i>
            <span>Photo</span>
          </button>

          <button>
            <i className="bx bx-video"></i>
            <span>Video</span>
          </button>

          <button>
            <i className="bx bx-image"></i>
            <span>Event</span>
          </button>

          <button>
            <i className="bx bx-file"></i>
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      {posts.map((post) => (
        <Main post={post} key={post.id} deletePost={deletePost} user={user} />
      ))}
      <DefaultSide />
      {postPopUp && (
        <PostPopUp setPostPopUp={setPostPopUp} addPost={addPost} user={user} />
      )}
    </Container>
  );
};

export default CenterSide;

const Container = styled.div`
  grid-area: "centerside";
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: #fff;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 40px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;

      i {
        color: #0a66c2;
        font-size: 20px;
      }
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: #fff;
        text-align: left;
        cursor: pointer;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        i {
          margin: 0 4px 0 -2px;

          &.bx-image {
            color: red;
          }

          &.bx-video {
            color: green;
          }

          &.bx-file {
            color: #ff8599;
          }
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
