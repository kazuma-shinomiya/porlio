import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as api from '../api/PostAPI';

const usePosts = () => {
    return useQuery('posts', () => api.getPosts());
}

const useStorePost = () => {
    const queryClient = useQueryClient()
    
    return useMutation(api.storePost, {
        onSuccess: () => {
            //再描画
            queryClient.invalidateQueries('posts');
        },
        onError: () => {
            console.log("失敗");
        }
    })
}

const usePost = (id) => {
    return useQuery('post', () => api.getPost(id));
}

const useUpdatePost = () => {
    const queryClient = useQueryClient()
    
    return useMutation(api.updatePost, {
        onSuccess: () => {
            //再描画
            queryClient.invalidateQueries('post');
        },
        onError: () => {
            console.log("失敗");
        }
    })
}

const useDeletePost = () => {
    const queryClient = useQueryClient()
    
    return useMutation(api.deletePost, {
        onSuccess: () => {
            //再描画
            queryClient.invalidateQueries('posts');
        },
        onError: () => {
            console.log("失敗");
        }
    })
}


export {
    usePosts,
    useStorePost,
    usePost,
    useUpdatePost,
    useDeletePost,
}