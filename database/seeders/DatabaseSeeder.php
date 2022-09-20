<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\User::factory(100)->create();
        
        \App\Models\User::create([
            "name" => "Poe Ei Phyu",
            "email" => "poeeiphyu77@gmail.com",
            "password" => Hash::make("admin")
        ]);
        
    }
}
