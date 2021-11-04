import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { usePosts, useStorePost } from '../queries/PostQuery';

function Top() {
    const [formData, setFormData] = useState({ title: '', description: '' });
    const storePost = useStorePost();
    
    const { status, data:posts , error } = usePosts();
    if (status === 'loading') {
        return <span>Loading...</span>
    }
 
    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }
    
    if (!posts || posts.length <= 0) {
        return <span>登録されたデータがありません</span>
    }
    
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    
    const handleSubmit = () => {
        if (formData == '') return;
        
        storePost.mutate(formData);
        setFormData('');
    }
    
    return (
        <div>
            <h1>一覧</h1>
            <PostForm data={formData} inputChange={inputChange} btnFunc={handleSubmit}/>
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
}

export default Top;