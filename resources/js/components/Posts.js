import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    
    let cards = [];
    posts.map((post) => 
        cards.push({
            title: post.title,
            description: post.description,
        })
    );
    
    return (
        <div>
            <Post />
        </div>
    );
}

export default Posts;

if (document.getElementById('posts')) {
    ReactDOM.render(<Posts />, document.getElementById('posts'));
}