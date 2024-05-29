import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function PostBox({ postId, title, description }) {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate(`/post/${postId}`);
  };
  return (
    <Wrapper onClick={goToPost}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default PostBox;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid black;
  border-radius: 20px;
  background-color: #83d8fc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 200px;
`;

const Title = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-align: start;
  border-bottom: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  width: 180px;
  height: 130px;
  font-size: 15px;
  margin-top: 10px;
  text-align: start;
  //border: 1px solid black;
  //white-space: nowrap;
  overflow: hidden;
  //text-overflow: ellipsis;
`;
