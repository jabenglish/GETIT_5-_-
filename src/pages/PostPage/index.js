import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from '../../service'
import { useState,useEffect } from "react";

function PostPage() {

  const {postId}=useParams();
  const [post, setPost]=useState({});
  const postIdInt=parseInt(postId);
  

  useEffect(()=>{
      const fetchPost = async()=>{
      try{  
          const response = await API.getAllPosts();
          setPost(response.data);
        } catch(err){
          console.error('Failed to fetch posts:', err);
          }
      };
      fetchPost();
      }, [postIdInt]);

  const navigate = useNavigate();

  const goToUpdatePost = () => {
    navigate(`/update-post/${postId}`);
  };

  const deletePost = async() => {
    try{
      await API.deletePost({"postId":postIdInt});
      navigate(-1);
    } catch(err){
      console.error('Failed to delete post:', err);
    }
  };

  

  

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
      <ButtonsWrapper>
        <Button onClick={goToUpdatePost}>수정</Button>
        <Button onClick={deletePost}>삭제</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default PostPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 50%;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  //border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  background-color: #83d8fc;
`;


const Description = styled.div`
  width: 50%;
  height: 200px;
  padding: 20px;
  margin-top: 20px;
  //border: 1px solid black;
  border-radius: 10px;
  background-color: #83d8fc;
  `;


const ButtonsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #0033ff;
  font-size: 16px;
  font-weight: 600;
`;
