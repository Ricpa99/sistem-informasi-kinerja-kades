<?php

namespace Database\Seeders;

use App\Models\Desa;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Project_Kades;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(7)->create();
        // Kabupaten::factory(5)->recycle([
        //     User::factory(5)->create(), 
        //     Desa::factory(5)->create(),
        //     Kecamatan::factory(14)->create(),
        //     Project_Kades::factory(14)->create()
        //     ])->create();
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
        ]);

        Kabupaten::factory(15)->create();
        Desa::factory(9)->create();
        Project_Kades::factory(14)->create();
        // User::factory(5)->create();
    }
}
