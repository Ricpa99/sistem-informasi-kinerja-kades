<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Desa extends Model
{
    use HasFactory;
    public function kabupaten(): BelongsTo
    {
        return $this->belongsTo(Kabupaten::class);
    }
    public function project(): HasMany
    {
        return $this->hasMany(Project_Kades::class, 'id_project');
    }
}
