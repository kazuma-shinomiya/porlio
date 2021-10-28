@extends('layouts.app')

@section('content')
    <a href="{{ route('posts.create') }}">create</a>
    <div id="posts"></div>
@endsection