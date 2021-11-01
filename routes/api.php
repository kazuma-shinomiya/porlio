<?php
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('posts', 'PostController')->only(['store', 'update', 'destroy']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
Route::resource('posts', 'PostController')->only(['index', 'show']);
// Route::post('posts/store', 'PostController@store');
// Route::get('posts/{post}', 'PostController@show');
// Route::get('posts', 'PostController@index');

