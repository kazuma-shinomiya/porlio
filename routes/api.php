<?php
Route::resource('posts', 'PostController')->only(['index', 'show', 'store', 'update']);
// Route::post('posts/store', 'PostController@store');
// Route::get('posts/{post}', 'PostController@show');
// Route::get('posts', 'PostController@index');

