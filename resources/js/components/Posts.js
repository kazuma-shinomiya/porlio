import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Post from '../components/Post';

function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getPosts();
    }, []);
    
    const getPosts = () => {
        axios
            .get('/posts')
            .then(response => {
                setPosts(response.data);
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

export default Posts;

if (document.getElementById('posts')) {
    ReactDOM.render(<Posts />, document.getElementById('posts'));
}