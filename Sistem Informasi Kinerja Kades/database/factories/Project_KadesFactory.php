<?php

namespace Database\Factories;

use App\Models\Desa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project_Kades>
 */
class Project_KadesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_project' => mt_rand(1,9),
            'project' => fake()->sentence(rand(1,2)),
            'tahun' => '.' . random_int(1990,2030),
            'anggaran' => 'Rp. ' . rand(1,100) . '.' . rand(100,900) . '.' . '000'
        ];
    }
}
