import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PostEditForm from '../components/PostEditForm';

function PostDetail(props) {
    const [post, setPost] = useState({});
    const [formData, setFormData] = useState({ title: '', description: '' });
    
    useEffect(() => {
        getPost();
    }, []);
    
    const getPost = () => {
        axios
            .get(`/api/posts/${props.match.params.id}`)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
                setFormData({ title: response.data.title, description: response.data.description})
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    
    const updatePost = async() => {
        if (formData == '') return;
        
        await axios
                .put(`/api/posts/${props.match.params.id}`, {
                    'title': formData.title,
                    'description': formData.description,
                })
                .then(response => {
                    setPost(response.data);
                })
                .catch(() => {
                    console.log('通信に失敗しました');
                });
    }
    
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <PostEditForm data={formData} inputChange={inputChange} updatePost={updatePost}/>
        </div>
    );
}

export default PostDetail;
