import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://we-school-api.vercel.app';
const cachedPostsKey = 'cachedPosts';

export const getPosts = async () => {
  try {
    const cachedPosts = localStorage.getItem(cachedPostsKey);

    if (cachedPosts) {
      return JSON.parse(cachedPosts);
    }

    const response = await axios.get(baseUrl + '/posts');
    const posts = response.data;

    // Cache the fetched posts
    localStorage.setItem(cachedPostsKey, JSON.stringify(posts));

    return posts;
  } catch (error) {
    toast.error(error.response?.data?.error || 'An error occurred while fetching posts');
    return [];
  }
};

export const toggleLike = async (userId, postId) => {
  try {
    const response = await axios.post(baseUrl + '/posts/toggle-like', {
      userId,
      postId
    });
    toast.success(response.data.msg);
  } catch (error) {
    toast.error(error.response?.data?.error || 'An error occurred while toggling like');
  }
};

export const uploadPost = async (content, files) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('content', content);

    // Append each file to the formData
    files.forEach(file => {
      formData.append('files', file);
    });

    const response = await axios.post(baseUrl + '/posts/upload', formData);

    const { error, msg } = response.data;
    if (error) {
      toast.error(error);
    } else if (msg) {
      toast.success(msg);
    }

    // Clear cached posts after creating a new post
    localStorage.removeItem(cachedPostsKey);

    return true;
  } catch (error) {
    toast.error(error.response?.data?.error || 'An error occurred while uploading post');
    return false;
  }
};

export const deletePost = async (post_id, user_id) => {
  try {
    const response = await axios.delete(baseUrl + `/posts/${post_id}/${user_id}`);
    toast.success(response.data.msg);
  } catch (error) {
    toast.error(error.response?.data?.error || 'An error occurred while deleting post');
  }
};
