import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

function Top() {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '' });
    
    useEffect(() => {
        getPosts();
    }, []);
    
    const getPosts = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
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
    
    const storePost = async() => {
        if (formData == '') {
            return;
        }
        
        await axios
            .post('api/posts', {
                title: formData.title,
                description: formData.description,
            })
            .then(response => {
                setFormData('');
            })
            .catch(error => {
               console.log(error); 
            });
    }
    
    let cards = [];
    posts.map((post) =>
        cards.push({
            id: post.id,
            title: post.title,
            description: post.description,
            createdAt: post.created_at,
            // user: post.user,
        })
    );
    
    return (
        <div>
            <h1>一覧</h1>
            <PostForm data={formData} inputChange={inputChange} btnFunc={storePost}/>
            {cards.map((card) => (
                <Post key={card.id} card={card}/>
            ))}
        </div>
    );
}

export default Top;