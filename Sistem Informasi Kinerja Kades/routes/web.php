<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
// });
Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/desa/{kabupaten:slug}', [HomeController::class, 'desa'])->name('home.desa');
Route::get('/desa', function(Request $request){
    return $request->tahun;
});
Route::get('/detaildesa/{desa:slug}', [HomeController::class, 'detailDesa'])->name('detail.desa');
Route::get('/kabupaten/{kabupaten:kabupaten}', [HomeController::class, 'kabupaten'])->name('kecamatan');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
