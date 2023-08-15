import React, { useState } from "react";
import styled from "styled-components";

const PostPopUp = ({ setPostPopUp, addPost, user }) => {
  const [description, setTDescription] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [date, setDate] = useState(Date());
  const [showImg, setShowImg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { description, shareImage, date };
    addPost(post);
    setPostPopUp(false);
    alert("New Post Added");
  };

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  return (
    <Container>
      <Box>
        <Card>
          <Create>
            <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>Create a post</p>
            <div className="close" onClick={() => setPostPopUp(false)}>
              <i className="bx bx-x"></i>
            </div>
          </Create>
          <div className="line"></div>
          <Form>
            <form onSubmit={handleSubmit}>
              <div className="profile">
                <img src="/images/user.svg" alt="" />
                <h4>{user.email}</h4>
              </div>
              <textarea
                placeholder="what do you want to talk about?"
                onChange={(e) => setTDescription(e.target.value)}
                value={description}
              ></textarea>
              <UploadImage>
                {showImg && (
                  <input
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    onChange={handleChange}
                    // style={{ display: "none" }}
                  />
                )}
                {shareImage && <img src={URL.createObjectURL(shareImage)} />}
              </UploadImage>
              <div className="buttons">
                <div className="left">
                  <buttons onClick={() => setShowImg(!showImg)}>
                    <i className="bx bx-image"></i>
                  </buttons>
                  <button disabled>
                    <i className="bx bx-video"></i>
                  </button>
                  <div></div>
                  <button disabled>
                    <i className="bx bx-comment"></i>Anyone
                  </button>
                </div>
                <div className="right">
                  {!description ? (
                    <button disabled style={{ background: "gray" }}>
                      Post
                    </button>
                  ) : (
                    <button>Post</button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </Card>
      </Box>
    </Container>
  );
};

export default PostPopUp;

const Container = styled.div`
  z-index: 100000;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1000%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s;
`;

const Card = styled.div`
  width: 410px;
  background: white;
  border-radius: 7px;
  position: relative;
  margin: 10% auto;

  @media (max-width: 768px) {
    margin: 40% auto;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    i {
      background: #f4f4f4;
      font-size: 25px;
      color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    width: 325px;
  }

  .line {
    background: rgba(0, 0, 0, 0.3);
    height: 1px;
    width: 100%;
  }
`;

const Create = styled.div`
  padding: 20px 10px;
`;

const Form = styled.div`
  padding: 15px 20px;

  form {
    display: flex;
    flex-direction: column;
    .profile {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 20px;
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
    }

    textarea {
      resize: none;
      width: 100%;
      height: 100px;
      border-color: #2977c9;
      border-radius: 5px;
      padding: 2px 5px;

      &:hover {
        border-color: #2977c9;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      .left {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        buttons {
          padding: 3px 7px;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 3px;

          i {
            color: rgba(0, 0, 0, 0.9);
            font-size: 20px;
          }
        }

        button {
          padding: 2px 5px;
          cursor: pointer;

          i {
            color: rgba(0, 0, 0, 0.9);
            font-size: 20px;
          }
        }

        div {
          width: 2px;
          height: 30px;
          background: rgba(0, 0, 0, 0.2);
        }
      }

      .right {
        button {
          padding: 10px 15px;
          border: none;
          color: white;
          border-radius: 10px;
          background: #2977c9;

          transition: 0.1s ease-in-out;
          cursor: pointer;

          &:hover {
            transform: scale(1.01);
            background: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }
`;

const UploadImage = styled.div`
  margin: 10px 0;
  text-align: center;

  img {
    width: 100%;
    height: 70%;
    margin-top: 5px;
  }
`;
