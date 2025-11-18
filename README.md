# Lelang Keris - Platform Lelang Digital dari Desa Aeng Tong Tong ⚔️

![Hero-Masjid Sumenep](https://github.com/user-attachments/assets/2707d9da-d83d-45a8-9dad-2f7699bd5b44)



## Tentang Projek

**Lelang Keris** adalah sebuah aplikasi berbasis website yang dirancang untuk mendigitalkan proses pelelangan Mahakarya Keris dari Desa Aeng Tong Tong, Sumenep. Aplikasi ini bertujuan untuk memperluas jangkauan pasar pengrajin keris lokal melalui platform digital yang modern, transparan, dan mudah digunakan.


## Fitur Utama

Aplikasi ini memiliki alur pengguna (User Flow) yang lengkap mulai dari pengunjung umum hingga proses transaksi:

* **Landing Page Modern:** Menampilkan Hero section, informasi budaya (Tentang), showcase produk unggulan, dan testimoni pelanggan dengan efek *transparent-to-solid navbar*.
* **Autentikasi UI:** Halaman Login dan Registrasi dengan desain *split-screen* (Form & Image).
* **Dashboard Lelang:** Halaman khusus pengguna terdaftar dengan fitur pencarian dan *horizontal scroll carousel* untuk daftar lelang aktif.
* **Detail Produk & Bidding:** Halaman detail interaktif dengan galeri foto, *countdown timer*, dan **Modal Pop-up** untuk mengajukan penawaran harga.
* **Alur Checkout:** Halaman ringkasan pembelian yang menampilkan rincian biaya (pajak, ongkir) dan pemilihan metode pembayaran.
* **Simulasi Pembayaran:** Notifikasi sukses interaktif setelah pengguna melakukan konfirmasi pembayaran.
* **Manajemen Layout:** Menggunakan arsitektur *Multi-Layout* (Main Layout untuk umum, Lelang Layout untuk user login, dan Standalone Layout untuk Auth).

## Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan teknologi web modern (MERN Stack ready):

* **Core:** [React JS](https://react.dev/) (Vite Bundler)
* **Styling & UI:** [React Bootstrap](https://react-bootstrap.github.io/) & CSS3 Custom
* **Routing:** [React Router DOM v6](https://reactrouter.com/) (Navigasi SPA tanpa reload)
* **Icons:** React Bootstrap Icons
* **Version Control:** Git & GitHub

## Struktur Folder

Projek ini menerapkan struktur folder yang rapi dan terorganisir untuk memudahkan pengembangan:

```bash
src/
├── components/          # Komponen UI yang dapat digunakan kembali
│   ├── Footer/          # Footer global
│   ├── Hero/            # Hero section landing page
│   ├── Navbar/          # Navbar transparan (Landing page)
│   ├── NavbarLelang/    # Navbar putih (Halaman Lelang)
│   ├── MainLayout.jsx   # Layout induk halaman publik
│   ├── LelangLayout.jsx # Layout induk halaman member
│   └── ... (Produk, Testimoni, dll)
├── pages/               # Halaman utama aplikasi
│   ├── LandingPage.jsx  # Halaman Beranda
│   ├── LoginPage.jsx    # Halaman Masuk
│   ├── SignUpPage.jsx   # Halaman Daftar
│   ├── LelangPage.jsx   # Dashboard Lelang
│   ├── DetailPage.jsx   # Detail Produk & Bid
│   └── CheckoutPage.jsx # Halaman Pembayaran
├── App.jsx              # Manajemen Routing Utama
└── main.jsx             # Entry point
