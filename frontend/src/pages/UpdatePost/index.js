import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import API from '../../service'

function UpdatePost() {
  const { postId } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));
  const postIndex = parseInt(postId);
  const post = posts[postIndex];
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const goBack = () => {
    navigate(-1);
  };


  useEffect(()=>{
    const fetchPost = async()=>{
        try{  
            const response = await API.getPost();
            setTitle(response.data.title);
            setDescription(response.data.describtion);
          } catch(err){
            console.error('Failed to fetch posts:', err);
            }
        };
    
        fetchPost();
          }, [postId]);
    
  const updatePost = async()=>{
      try{
          await API.updatePost({
              postId,
              title,
              description,
          });
          navigate('/');
      } catch(err){
          console.error('Failed to fetch posts:', err);
      }
  };


  return (
    <Wrapper>
      <TitleInput
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={handleTitleChange}
      />
      <DescriptionInput
        placeholder="내용을 입력해주세요"
        value={description}
        onChange={handleDescriptionChange}
      />
      <ButtonsWrapper>
        <Button onClick={goBack}>취소</Button>
        <Button onClick={updatePost}>저장</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default UpdatePost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 50%;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`;

const DescriptionInput = styled.textarea`
  width: 50%;
  height: 200px;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
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
  background-color: #74d19d;
  font-size: 16px;
  font-weight: 600;
`;
