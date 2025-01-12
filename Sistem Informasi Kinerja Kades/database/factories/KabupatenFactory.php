<?php

namespace Database\Factories;

use App\Models\Desa;
use App\Models\Kabupaten;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kabupaten>
 */
class KabupatenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'kecamatan_id' => Desa::factory(),
            'kabupaten' => "Kab. ". fake()->city(),
            'deskripsi' => fake()->paragraph(3),
            'slug' => fake()->slug(rand(1,2)),
            'nama_kecamatan' => "Kec. " . fake()->city(),
            'kode_pos' => fake()->postcode(),
        ];
    }
}
