import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from '../../service';

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  
  const createPost = async () => {
    try {
      // Upload image and get URL
      const imageResponse = await API.createImage({ prompt: title});
       // Adjust based on your API response

      
      console.log(imageResponse);
      

      const postData = {
        title,
        description,
      };
      await API.createPost(postData);
      navigate('/'); // Redirect to home or posts list page
      
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setLoading(false);
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
          <h1></h1>
          <Button onClick={createPost}>저장</Button>
        </ButtonsWrapper>
        {imageUrl && (<PreviewImage src={imageUrl} alt="Generated Preview" />)}
    </Wrapper>
  );
}

export default CreatePost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const TitleInput = styled.input`
  margin-bottom: 20px;
  width: 50%;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
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
  flex-direction: column; /* 수직으로 배치 */
  align-items: center; /* 가운데 정렬 */
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

const PreviewImage = styled.img`
  width: 50%;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
`;