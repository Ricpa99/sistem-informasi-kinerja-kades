<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kabupaten extends Model
{
    use HasFactory;

    public function desa(): HasMany
    {
        return $this->hasMany(Desa::class, 'id_desa');
    }

    public function scopeFilter(Builder $query, $search)
    {
        $query->when($search ?? false, function ($query, $search) {
            return $query->where('kabupaten', 'like', '%' . $search . '%')
                ->orWhere('nama_kecamatan', 'like', '%' . $search . '%');
        });
    }

    // 'data' => Kabupaten::query()
    //                     ->when($kabupaten, function($query, $kabupaten){
    //                         $query->where('kabupaten', 'like', '%' .$kabupaten->kabupaten)
    //                                 ->orWhere('kecamatan', 'like', '%' .$kabupaten->kecamatan);
    //                     })->get()

}
