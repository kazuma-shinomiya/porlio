import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function PostDetail(props) {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        getPost();
    }, []);
    
    const getPost = () => {
        axios
            .get(`/api/posts/${props.match.params.id}`)
            .then(response => {
                // console.log(response.data.post);
                setPost(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    
    return (
        <div>
            <p>{post.id}</p>
        </div>
    );
}

export default PostDetail;
