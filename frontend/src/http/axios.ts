import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:8000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const createPost = async (body: string, title: string) => {
  const response = await instance.post('/posts', { body, title });
};
