import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TOONAIlogo from "../../image/TOONAIlogo.png"; // 이미지 파일 임포트

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column; /* 수직으로 배치 */
  align-items: center; /* 가운데 정렬 */
  padding: 20px; /* 여백 추가 */
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* 로고와 제목 사이 간격 조절 */
`;

const BottomWrapper = styled.div`
  display: flex;
  margin-top: 700px;
`;

const BlogName = styled.h1`
  font-size: 72px; /* 제목 크기 수정 */
  margin-right: 20px; /* 제목과 로고 사이 간격 조절 */
  font-family: "Nanum Myeongjo", serif;
`;

const LogoImage = styled.img`
  width: 120px; /* 로고 이미지 크기 수정 */
  height: auto;
`;

const Button = styled.button`
  margin-left: 20px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #0033ff;
  font-size: 16px;
  font-weight: 600;
`;

function TopBar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <Wrapper>
      <TopWrapper>
        <LogoImage src={TOONAIlogo} alt="TOONAI logo" />
        <BlogName>TOONAI</BlogName>
      </TopWrapper>
      <BottomWrapper>
        <Button onClick={goToHome}>Home</Button>
        <Button onClick={goToCreatePost}>글쓰기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}

export default TopBar;