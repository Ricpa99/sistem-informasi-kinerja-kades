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
        Schema::create('project__kades', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_project');
            $table->string('nama_project');
            $table->string('deskripsi');
            $table->string('tahun');
            $table->string('anggaran');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project__kades');
    }
};
