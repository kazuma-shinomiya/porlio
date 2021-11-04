import axios from 'axios';

const getPosts = async() => {
    const { data } = await axios.get('/api/posts');
    return data;
}

const storePost = async(formData) => {
    const { data } = await axios.post(
                        '/api/posts',
                        { title: formData.title, description: formData.description }
                    );
    return data;
}

const getPost = async(id) => {
    const { data } = await axios.get(`/api/posts/${id}`);
    return data;
}

const updatePost = async({id, formData}) => {
    const { data } = await axios.put(
                        `/api/posts/${id}`,
                        { title: formData.title, description: formData.description }
                    );
    return data;
}

const deletePost =  async(id) => {
    const { data } = await axios.delete(`/api/posts/${id}`);
    return data;
}

export {
    getPosts,
    storePost,
    getPost,
    updatePost,
    deletePost,
}