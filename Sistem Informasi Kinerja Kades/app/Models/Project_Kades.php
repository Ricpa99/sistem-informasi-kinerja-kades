<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project_Kades extends Model
{
    use HasFactory;

    public function desa(): BelongsTo
    {
        return $this->belongsTo(Desa::class);
    }
}
