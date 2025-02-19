<?php

namespace Database\Factories;

use App\Models\Kabupaten;
use App\Models\Kecamatan;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Desa>
 */
class DesaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'misi1' => fake()->sentence(rand(1,3)),
            'misi2' => fake()->sentence(rand(1,3)),
            'misi3' => fake()->sentence(rand(1,3)),
            'misi4' => fake()->sentence(rand(1,3)),
            'misi5' => fake()->sentence(rand(1,3)),
            'visi' => fake()->sentence(rand(1,3)),
            'slug' => fake()->slug(1,true),
            'id_desa' => mt_rand(1,15),
            'nama_desa' => fake()->city(),
            'nama_kades' => fake()->name(),
            'deskripsi' => fake()->sentence(rand(2,7)),
        ];
    }
}
