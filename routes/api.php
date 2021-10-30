<?php

Route::resource('posts', 'PostController')->only(['index', 'show', 'store']);
