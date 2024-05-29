import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

class API {
  async getAllPosts() {
    try {
      return await axios.get(`${BASE_URL}/getAll`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getPost(postId) {
    try {
      return await axios.get(`${BASE_URL}/getOne/${postId}`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async createPost(data) {
    try {
      console.log('BASE_URL:', BASE_URL); // 디버깅을 위해 추가
      const response = await axios.post(`${BASE_URL}/postCreate`, data);
      console.log('Post created successfully:', response.data);
      return response.data;
    } catch (err) {
      if (err.response) {
        // 서버가 응답을 했지만, 2xx 범위 외의 상태 코드
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
      } else if (err.request) {
        // 요청이 만들어졌으나 응답을 받지 못함
        console.error('Request data:', err.request);
      } else {
        // 요청을 설정하는 중에 에러가 발생
        console.error('Error message:', err.message);
      }
      console.error(err.config);
      throw err;
    }
  }

  async createImage(data) {
    try {
      const response = await axios.post(`${BASE_URL}/createImage`, data);
      console.log('이미지 생성 성공', response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async updatePost(postId, data) {
    try {
      return await axios.put(`${BASE_URL}/postUpdate/${postId}`, data); // PUT 요청으로 수정
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async deletePost(postId) {
    try {
      return await axios.post(`{${BASE_URL}}/postDelete`, postId); // DELETE 요청으로 수정
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new API();