<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'title' => 'title1',
            'description' => 'description1',
        ]);
        DB::table('posts')->insert([
            'title' => 'title2',
            'description' => 'description2',
        ]);
    }
}
