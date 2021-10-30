import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostShow() {
    const postId = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        getPost(postId);
    }, []);
    
    const getPost = (id) => {
        axios
            .get('/posts/' + id)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    
    let cards = [];
    posts.map((post) => 
        cards.push({
            id: post.id,
            title: post.title,
            description: post.description,
            createdAt: post.created_at,
            user: post.user,
        })
    );
    
    return (
        <div>
            {cards.map((card) => (
                <Post key={card.id} card={card}/>
            ))}
        </div>
    );
}

export default PostShow;
