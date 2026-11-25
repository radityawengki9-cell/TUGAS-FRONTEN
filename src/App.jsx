import Navbar from "./component/navbar";
import Kartu from "./component/kartu";
import TombolFilter from "./component/tombolfilter";
import { useState, useEffect } from "react";


function App() {

    // state kategori disimpan di App supaya tombol dan daftar kartu memakai sumber data yang sama
    const [kategori, setKategori] = useState("Semua");
    const [katakunci, setKatakunci] = useState("");
    const [daftarItem, setDaftarItem] = useState([]);
    const [status, setStatus] = useState("memuat");



        useEffect(() => {
      async function ambilData() {
        try {
          const response = await fetch("/Ekspor-Impor.json");

          if (!response.ok) {
            throw new Error("Gagal mengambil data");
          }

          const data = await response.json();

          setDaftarItem(data);
          setStatus("berhasil");
        } catch (error) {
          setStatus("gagal");
        }
      }

      ambilData();
    }, []);

    // useEffect digunakan agar data diambil saat halaman pertama kali dibuka

    // [] membuat fetch hanya berjalan satu kali saat komponen dimuat

    // response.ok dicek untuk memastikan file berhasil ditemukan

    // data hasil JSON disimpan ke state agar React melakukan render ulang




    // filter dihitung di sini agar JSX di bagian return tetap mudah dibaca
   let daftarTampil = daftarItem;
   let isiKonten;


// Filter kategori
if (kategori !== "Semua") {
  daftarTampil = daftarTampil.filter(
    (item) => item.kasus === kategori
  );
}

// Filter pencarian
if (katakunci !== "") {
  daftarTampil = daftarTampil.filter(
    (item) =>
      item.nama
        .toLowerCase()
        .includes(katakunci.toLowerCase())
  );
}

//untuk menampillan kartu
if (status === "memuat") {
  isiKonten = (
    <p className="text-center">
      Sedang memuat data...
    </p>
  );
}
else if (status === "gagal") {
  isiKonten = (
    <p className="text-center text-red-500">
      Gagal memuat data.
    </p>
  );
}
else if (daftarTampil.length === 0) {
  isiKonten = (
    <p className="text-center">
      Tidak ada komoditas yang cocok.
    </p>
  );
}
else {
  isiKonten = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        daftarTampil.map((item) => (
          <Kartu
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  );
}






return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
    <header>
        <Navbar />
    </header>

      

      <main className="max-w-5xl mx-auto px-6 py-10">
         <section id="menu">
          <h2 className="text-2xl font-bold mb-4">Barang kami</h2>
          <input
          type="text"
          value={katakunci}
          onChange={(e) => setKatakunci(e.target.value)}
          placeholder="Cari Barang..."
          className="w-full md:w-80 mb-4 px-4 py-2 border border-gray-500 rounded-lg" />



          <div className="flex gap-2 mb-4">
        <TombolFilter 
        teks="Semua" aktif={kategori === "Semua"}
        onPilih={()=>setKategori("Semua")}
         />

        <TombolFilter 
        teks="Ekspor"  aktif={kategori === "Ekspor"}
        onPilih={()=>setKategori("Ekspor")}
        />
        <TombolFilter
        teks="Impor" aktif={kategori === "Impor"}
        onPilih={()=>setKategori("Impor")}
        /> 
      </div>



        <p className="text-sm text-gray-500 mb-2">
        Menampilkan {daftarTampil.length} dari {daftarItem.length} komoditas
        </p>

          {isiKonten}
         </section>
      </main>

      
        <footer className="px-6 py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-10">
             <p>Komoditas Impor dan Ekspor</p>
        </footer>
      
    </div>
);
}
export default App;