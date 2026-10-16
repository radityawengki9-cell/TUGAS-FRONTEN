// TODO: ganti isi array ini dengan data TEMA KALIAN SENDIRI.
// Aturan (lihat soal.md):
//   - minimal 6 item
//   - tiap item WAJIB punya: id (angka, tidak kembar), nama (teks), kategori (teks)
//   - plus SATU properti angka (mis. harga, halaman, rating)
//   - plus SATU properti true/false (mis. tersedia, buka, dipinjam)
//   - minimal 2 kategori berbeda, dan minimal 1 item yang bernilai false

const daftarItem = [
  { id: 1, nama: "Gula Pasir ",         kasus: "Impor",  harga: 13500000, diperlukan: true },
  { id: 2, nama: "Minyak Sawit ",       kasus: "Ekspor", harga: 14500000, diperlukan: true }, 
  { id: 3, nama: "Bahan Mentah Tekstil",kasus: "Impor ", harga: 28600000, diperlukan: true }, 
  { id: 4, nama: "Susu",                kasus: "Impor",  harga: 92000000, diperlukan: false }, 
  { id: 5, nama: "Karet",               kasus: "Ekspor", harga: 42000000, diperlukan: true }, 
  { id: 6, nama: "Buah-Buahan",         kasus: "Impor",  harga: 30000000, diperlukan: false },  
  { id: 7, nama: "sayur mayur",         kasus: "Ekspor",  harga: 25000000, diperlukan: true },  
];
