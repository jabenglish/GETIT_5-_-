import styled from "styled-components";
import PostBox from "../../components/PostBox";
import { useState, useEffect } from "react";
import API from '../../service'

function Home() {
  const[ posts,setPosts]=useState([]);
  
  useEffect(()=>{
    const fetchPosts=async() =>{
      try{  
        const response = await API.getAllPosts();
        setPosts(response.data);
      } catch(err){
        console.error('Failed to fetch posts:', err);
        }
    };

    fetchPosts();
  }, []);
  

  return (
    <Wrapper>
      {posts.map((post, index) => (
        <PostBox
          key={index}
          postId={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </Wrapper>



  );
}


export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  padding: 20px;
`;
