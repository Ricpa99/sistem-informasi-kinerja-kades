# Sistem Informasi Kinerja Kades

Sistem Informasi Kinerja Kades adalah aplikasi berbasis web yang dirancang untuk memantau dan menilai kinerja Kepala Desa (Kades). Aplikasi ini membantu masyarakat dalam mengakses data kinerja secara akurat, membuat laporan, serta memvisualisasikan performa guna mendukung pengambilan keputusan yang transparan dan berbasis data di lingkungan pemerintahan desa.

Saat ini, aplikasi masih dalam tahap pengembangan dan belum memiliki fitur pengontrol CRUD. Data yang digunakan masih berupa data dummy yang dibuat menggunakan Faker di Laravel. Pengembangan aplikasi ini juga didukung oleh ChatGPT. Dalam struktur basis data, saya menggunakan relasi belongsTo dan hasMany pada model Kabupaten, Desa, dan Project_Kades.

## Fitur Utama

- **UI yang digunakan:** React.js, TailwindCss
- **Component yang digunakan:** DaisyUI dan MaterialUI, dan React icon
- **Pencarian:** fitur perncarian berdasarkan kata kunci dan mencari tahun berdasarkan hasil kinerja kades dari tahun ke tahun.
- **Pagination::** Menampilkan beberapa data di halaman tertentu.
  

## Teknologi yang Digunakan

- **framework:**  
  Laravel11  
- **Frontend:**  
  HTML, CSS, JavaScript, tailwindCss, react.js  
- **Database:**  
  MySQL/MariaDB
- **API**
  Unsplash

## 🔧 Instalasi

### 🔗 Prasyarat

Pastikan sistem Anda telah terinstal:
- PHP (versi 7.x atau lebih tinggi)
- Composer
- MySQL/MariaDB
- Node.js & NPM
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
    ```
4. **Jalankan pengembangan server**
    ```bash
    php artisan serve
    ```
5. **Build asset frontend**
    ```sh
    npm run dev
    ```
## 📸 screenshot
Gambar yang saya gunakan di sini menggunakan API dari unsplash akan tetap selalu sama dengan halaman yang lainnya terkecuali home.
1. **Halaman home yang menampilkan nama-nama kota atau kabupaten**
   ![image alt](https://github.com/Ricpa99/sistem-informasi-kinerja-kades/blob/73442fc26ea311696454249629b92ec6072bdef8/img/home.png)

2. **Halaman yang menampilkan ada berapa desa dalam satu kabupaten.**
   ![iamge alt](https://github.com/Ricpa99/sistem-informasi-kinerja-kades/blob/73442fc26ea311696454249629b92ec6072bdef8/img/desa.png)

3. **Halaman kinerja kades dan dapat mencari kinerja kades berdasarkan tahun yang dicari.**
   ![image alt](https://github.com/Ricpa99/sistem-informasi-kinerja-kades/blob/73442fc26ea311696454249629b92ec6072bdef8/img/kinerja_kades.png)

## 📝 Note
Ubah tabel tahun di database MySQL agar dapat mencari atau menampilkan gambar atau data proyek Kades seperti pada contoh gambar di bawah ini. Isi semua data, dan untuk tahun bisa bebas (sesuai kebutuhan), karena saat ini belum ada fitur CRUD untuk pengolahan backend. Oleh karena itu, sementara data dimasukkan secara manual untuk menghindari error. Sesuaikan format ID dengan menyambungkan id_project dan tahun menggunakan titik (.). Contohnya, jika id_project adalah 3, maka format tahun yang digunakan adalah 3.2020 atau 3.2025, sesuai dengan id_project yang bersangkutan.



![image alt](https://github.com/Ricpa99/sistem-informasi-kinerja-kades/blob/8dbc420043735b3a587edde3f409d5d5798a12ce/img/database.png)
    
