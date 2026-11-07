// 1. Ambil wadah kartu
const wadahKartu = document.querySelector("#daftar-kartu");

// 2. Satu item -> teks HTML satu kartu
// backtick dipakai supaya nilai dari data bisa langsung disisipkan ke HTML dengan ${}
function buatKartu(item) {
    const label = item.diperlukan ? "" : "<p class='text-red-600'>Tidak Diperlukan</p>";
// label untuk item yang bernilai false
return `
    <article class="border rounded-lg p-4 bg-white shadow">
      <h3 class="text-xl font-bold">${item.nama}</h3>
      <p>Kategori: ${item.kasus}</p>
      <p>Harga: Rp ${item.harga.toLocaleString("id-ID")}</p>
      ${label}
    </article>
    `;
// return `...`;
}
// 3. Daftar item -> semua kartu di halaman
function tampilkan(daftar) {

     // saat hasil filter kosong, pengguna tetap mendapat informasi yang jelas
    if (daftar.length === 0) {
    wadahKartu.innerHTML = "<p>Data tidak ditemukan.</p>";
    return;
  }
// kasus tepi: daftar kosong
  const semuaKartu = daftar.map((item) => buatKartu(item));
  wadahKartu.innerHTML = semuaKartu.join("");
// .map lalu .join("")
}




// daftarItem asli tidak diubah sehingga tetap bisa dipakai kembali oleh tombol "Semua
tampilkan(daftarItem);
//smua
document.querySelector("#tombol-semua").addEventListener("click", () => {
  tampilkan(daftarItem);
});

// Tombol Ekspor
document.querySelector("#tombol-ekspor").addEventListener("click", () => {
  const hasil = daftarItem.filter(
    item => item.kasus === "Ekspor"
  );

  tampilkan(hasil);
});

// Tombol Impor
document.querySelector("#tombol-impor").addEventListener("click", () => {
  const hasil = daftarItem.filter(
    item => item.kasus === "Impor"
  );

  tampilkan(hasil);
});
// 4. Tombol filter: addEventListener + .filter + tampilkan