import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreatePost from "../../pages/CreatePost";
import PostPage from "../../pages/PostPage";
import styled from "styled-components";
import UpdatePost from "../../pages/UpdatePost";

function Main() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
      </Routes>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
