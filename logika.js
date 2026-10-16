// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

//sedia
function ketersediaan(daftar) {
    let keperluan = 0;
    let ketidakperluan = 0;

    for (const item of daftar) {
        if (item.diperlukan === true) {
            keperluan++;
        } else if (item.diperlukan === false) {
            ketidakperluan++;
        }
    }

    return { keperluan, ketidakperluan };
}


const hasil = ketersediaan(daftarItem);

console.log("Diperlukan:", hasil.keperluan);       // Output: 4
console.log("Tidak diperlukan:", hasil.ketidakperluan); // Output: 2


//cari

function cari (daftar, id){
    for(const item of daftar){
        if( item.id === id){
            return item;
        }
    }
    return null;
}


const hasilCari = cari(daftarItem, 7);
console.log(hasilCari);


//saring
function saringkategori(daftar,kasus){
    const saring=[]
    for(const item of daftar){
        if (item.kasus.trim() === kasus) {
        saring.push(item);
        }
    }
    return saring;
}
const barangEkspor = saringkategori(daftarItem, "Ekspor");
console.log("Barang Ekspor:", barangEkspor);

const barangimpor = saringkategori(daftarItem, "Impor");
console.log("Barang impor:", barangimpor)
// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────

function rataRataTersedia(daftar) {
    let totalHarga = 0;
    let jumlahItem = 0;

    for (const item of daftar) {
        if (item.diperlukan === true) {
            totalHarga += item.harga; 
            jumlahItem++;             
        }
    }


    if (jumlahItem === 0) {
        return null; 
    }

    return totalHarga / jumlahItem; 
}


const hasilRataRata = rataRataTersedia(daftarItem);
console.log("Rata-rata harga barang yang diperlukan:", hasilRataRata);
// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────
