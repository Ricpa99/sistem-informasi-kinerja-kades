# Sistem Informasi Kinerja Kades

Sistem Informasi Kinerja Kades adalah aplikasi berbasis web yang dirancang untuk memantau dan menilai kinerja Kepala Desa (Kades). Aplikasi ini membantu masyarakat dalam mengakses data kinerja secara akurat, membuat laporan, serta memvisualisasikan performa guna mendukung pengambilan keputusan yang transparan dan berbasis data di lingkungan pemerintahan desa.

Saat ini, aplikasi masih dalam tahap pengembangan dan belum memiliki fitur pengontrol CRUD. Data yang digunakan masih berupa data dummy yang dibuat menggunakan Faker di Laravel. Pengembangan aplikasi ini juga didukung oleh ChatGPT. Dalam struktur basis data, saya menggunakan relasi belongsTo dan hasMany pada model Kabupaten, Desa, dan Project_Kades.

## Fitur Utama

- **UI yang digunakan:** React.js, TailwindCss
- **Component yang digunakan:** DaisyUI dan MaterialUI, dan React icon
- **Pencarian:** fitur perncarian berdasarkan kata kunci dan mencari tahun berdasarkan hasil kinerjsa kades dari tahun ke tahun
  

## Teknologi yang Digunakan

- **Backend:**  
  PHP dengan framework Laravel  
- **Frontend:**  
  HTML, CSS, JavaScript  
- **Database:**  
  MySQL/MariaDB  
- **Lainnya:**  
  Tools pendukung seperti Composer dan NPM

## Instalasi

### Prasyarat

Pastikan sistem Anda telah terinstal:
- PHP (versi 7.x atau lebih tinggi)
- Composer
- MySQL/MariaDB
- Node.js & NPM (jika menggunakan asset build untuk frontend)
- xampp

### Langkah-langkah Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/Ricpa99/sistem-informasi-kinerja-kades.git
   cd sistem-informasi-kinerja-kades
2. **Konfigurasi Environment**
    ```sh
    DB_CCONNECTION=MYSQL
    DB_HOST=1227.0.0.1
    DB_PORT=3306
    DB_DATABASE=nama_database_anda
    DB_USERNAME=username_anda
    DB_PASSWORD=password_anda
    ```
3.  **Migrasi database**
    ```sh
    php artisan migrate
    ```
    Migrasi dan delete tabel setelah itu membuat tabel baru
    ```sh
    php artisan migrate:fresh --seed
