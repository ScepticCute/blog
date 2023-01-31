import axios, {AxiosError} from 'axios';
import {validationPost, ValidationResult} from './validation'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  // headers: {
  //   Authorization : `Bearer ${localStorage.getItem("access_token")}`
  //   }
});

interface IResponse {
  success: boolean,
  message?: string,
}
/* POSTS */

type Post = {
  post: {
    _id: string,
    title: string,
    body: string
  }
}

interface IResponsePost extends IResponse {
  post: Post
}

interface IResponsePosts extends IResponse {
  posts: Post[]
}

export const getPosts = async (limit: number = 1, page: number = 1) => {
  try {
    const response = await instance.get<IResponsePosts>(`/posts?limit=${limit}&page=${page}`);
    console.log(response);
    return response;
  } catch (e) {
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await instance.get<IResponsePost>(`/posts/${id}`);
    console.log(response);
    return response;
  } catch (e) {
    
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};



export const createPost = async (body: string, title: string) => {
  try {
    const {success, message} = validationPost(body, title)
    if(!success) {
      return {success, message}
    }
    const response = await instance.post<IResponsePost>('/posts', { body, title })

    return response;

  } catch (e) {
    
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};

export const updatePost = async (id: string, body: string, title: string)  => {
  try {
    const {success, message} = validationPost(body, title)
    if(!success) {
      return {success, message}
    }
    const response = await instance.patch<IResponsePost>(`/posts/${id}`, { body, title });
    return response;
  } catch (e) {
    
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};

export const replacePost = async (id: string, body: string, title: string)  => {
  try {
    const {success, message} = validationPost(body, title)
    if(!success) {
      return {success, message}
    }
    const response = await instance.put<IResponsePost>(`/posts/${id}`, { body, title });
    return response;
  } catch (e) {
    
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};


export const deletePost = async (id: string) => {
  try {
    await instance.delete(`/posts/${id}`);
    return {success: true}
  } catch (e) {
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
};

/* POSTS */

/* USER */

export const getUserData = async (id: string) => {
  try {
    const data = await instance.get(`/user/${id}`)
    return data
  } catch(e) {
    console.info(e)
    //@ts-ignore: 
    return e.response.data
  }
}
/* USER */