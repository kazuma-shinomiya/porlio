import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PostEditForm from '../components/PostEditForm';
import Button from '@mui/material/Button';
import { usePost, useUpdatePost, useDeletePost } from '../queries/PostQuery';

function PostDetail(props) {
    const { status, data:post , error } = usePost(props.match.params.id);
    const [formData, setFormData] = useState({ title: '', description: '' });
    const updatePost = useUpdatePost();
    const deletePost = useDeletePost();
    
    if (status === 'loading') {
        return <span>Loading...</span>
    }
 
    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }
    
    const handleEditForm = () => {
        setFormData({ title: post.title, description: post.description });
    }
    
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    
    const handleSubmit = (e) => {
        if (formData == '') return;
        
        updatePost.mutate({id: props.match.params.id, formData: formData});
        setFormData('');
    }
    
    // const handleDelete = () => {
    //     deletePost.mutate(props.match.params.id)
    // }
    
    
    
    // const deletePost = async() => {
    //     await axios
    //             .delete(`/api/posts/${props.match.params.id}`)
    //             .then(response => {
                    
    //             })
    //             .catch(() => {
    //               console.log('通信に失敗しました'); 
    //             });
    // }
    // updatePost={updatePost}
    // onClick={deletePost}
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <PostEditForm data={formData} oldPost={post} inputChange={inputChange} handleEditForm={handleEditForm} handleSubmit={handleSubmit}/>
            <Button color="primary" variant="contained" href='/' onClick={() => deletePost.mutate(props.match.params.id)}>削除</Button>
        </div>
    );
}

export default PostDetail;
