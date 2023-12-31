import styled from "styled-components";

const DefaultSide = () => {
  return (
    <Container>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="images/user.svg" alt="" />
              <div>
                <span
                  style={{
                    color: "#2977c9",
                    fontSize: "1rem",
                    fontFamily: "Times New Roman",
                  }}
                >
                  INTERSTELLAR
                </span>
                <span style={{ color: "rgba(0, 0, 0, 1)" }}>
                  How can we travel through space
                </span>
                <span>4/3/24</span>
              </div>
            </a>
            <button>
              <i className="bx bx-dots-horizontal-rounded"></i>
            </button>
          </SharedActor>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus id
            facilis ipsa quidem. Quia quos.
          </Description>
          <SharedImg>
            <a>
              <img src="/images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <i className="bx bx-like"></i>
                <i className="bx bx-heart"></i>
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <i className="bx bx-like"></i>
              <span>Like</span>
            </button>
            <button>
              <i className="bx bx-comment"></i>
              <span>Comments</span>
            </button>
            <button>
              <i className="bx bx-share-alt"></i>
              <span>Share</span>
            </button>
            <button>
              <i className="bx bx bx-paper-plane"></i>
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

export default DefaultSide;

const Container = styled.div`
  grid-area: main;
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

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    i {
      font-size: 30px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.div`
  line-height: 1.3;
  display: flex;
  align-items: start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    i {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
