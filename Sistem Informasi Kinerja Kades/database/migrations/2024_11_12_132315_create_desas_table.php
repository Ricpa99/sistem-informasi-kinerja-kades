<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('desas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_desa');
            $table->string('misi1')->nullable();
            $table->string('misi2')->nullable();
            $table->string('misi3')->nullable();
            $table->string('misi4')->nullable();
            $table->string('misi5')->nullable();
            $table->string('visi')->nullable();
            $table->string('slug');
            $table->string('nama_desa');
            $table->string('nama_kades');
            $table->string('deskripsi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('desas');
    }
};
