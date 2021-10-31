<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    
    public function index()
    {
        // return Post::with('user')->get();
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request, Post $post)
    {
        // $post->user_id = $request->user()->id;
        $input = $request->only(['title', 'description']);
        $post->fill($input)->save();
        return response()->json($post, 200);
    }

    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    public function update(Request $request, Post $post)
    {
        $input = $request->only(['title', 'description']);
        $post->fill($input)->save();
        return response()->json($post, 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return;
    }
}
