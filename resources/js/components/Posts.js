import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getPosts();
        
    }, [])
    
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
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Post Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;

if (document.getElementById('posts')) {
    ReactDOM.render(<Posts />, document.getElementById('posts'));
}