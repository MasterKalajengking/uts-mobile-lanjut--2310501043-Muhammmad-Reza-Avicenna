Tema APP ResepKita 🍲

nama: Muhammad Reza Avicenna
NIM: 2310501043
Kelas: A
Tema: A (ResepKita)

-

Tech Stack & Version
Framework: React Native + Expo SDK
Language: JavaScript
Navigation: React Navigation v6 (@react-navigation/native, bottom-tabs, native-stack)
HTTP Client: Native fetch API
State Management: Context API + useReducer

-

Cara Install & Run
1. Clone repository ini: 
git clone (https://github.com/MasterKalajengking/uts-mobile-lanjut--2310501043-Muhammmad-Reza-Avicenna)   
2. Masuk ke direktori project:cd [nama-folder-repo]
3. Install dependencies:
   npm install
4. Jalankan aplikasi via Expo:
   npx expo start
5. Scan QR code menggunakan aplikasi Expo Go di HP (Android/iOS)

-

Screenshots
AboutScreen (src/screenshots/about.jpg)
DetailScreen (src/screenshots/detail.jpg)
FavoritScreen (src/screenshots/favorit.jpg)
HomeScreen (src/screenshots/home.jpg)
SearchScreen (src/screenshots/search.jpg)

-

Video Demo
Link YouTube: https://youtu.be/3s4ZQ4HC5vU?si=2ZT1roDwlfS39sLE

-

Penjelasan State Management
Pada project ini, saya menggunakan Context API yang dikombinasikan dengan useReducer / useState untuk mengelola state Favorit. 

Justifikasi Pemilihan:
Saya memilih Context API karena skala aplikasi ini masih tergolong kecil . Untuk sekadar menyimpan array resep favorit yang bisa diakses di layar Detail dan Favorit, penggunaan Redux dirasa terlalu berlebihan dan lebih komplex. Context API sudah sangat cukup karena terintegrasi langsung dengan React secara bawaan.

-

Daftar Referensi
1. React Native Documentation(https://reactnative.dev/docs/getting-started) - Komponen UI (View, Text, FlatList).
2. React Navigation Docs(https://reactnavigation.org/) - Implementasi Stack dan Bottom Tabs.
3. TheMealDB API(https://www.themealdb.com/api.php) - Sumber data resep utama
4. File expo https://www.youtube.com/watch?v=edEC5o41wAY - Membuat File Expo



Refleksi Pengerjaan
- kesulitan utama: Kesulitan utama yang dialami ada saat menggabungkan API berdasarkan kategori di halaman Home. Kadang data yang muncul tidak sinkron karena state saling menimpa. Selain itu, saya juga sempat bingung ketika data strArea (negara asal) tidak langsung muncul. Ternyata masalahnya karena API membutuhkan proses fetch dua kali menggunakan endpoint lookup.php, jadi harus atur alur asynchronous dengan benar agar data lengkap bisa ditampilkan.
- Bug yang pernah muncul: Error ketika menggunakan handphone karen ada text yang tidak tertutup lengkap. Saya juga mengalami aplikasi crash karena lupa membungkus komponen utama dengan Context di App.js, sehingga state global tidak bisa diakses oleh komponen lain.
- Apa yang dipelajari: Dari proses ini, saya jadi lebih paham bagaimana cara mengirim parameter antar layar menggunakan navigation, membuat fitur Pull-to-Refresh dengan RefreshControl, serta memahami cara kerja API
