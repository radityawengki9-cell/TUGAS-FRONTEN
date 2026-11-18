import Navbar from "./component/navbar";
import Kartu from "./component/kartu";
import TombolFilter from "./component/tombolfilter";
import { daftarItem } from "./data";
import { useState } from "react";


function App() {

    // state kategori disimpan di App supaya tombol dan daftar kartu memakai sumber data yang sama
    const [kategori, setKategori] = useState("Semua");

    // filter dihitung di sini agar JSX di bagian return tetap mudah dibaca
     const daftarTampil =
    kategori === "Semua"
      ? daftarItem
      : daftarItem.filter((item) => item.kasus === kategori);
return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
    <header>
        <Navbar />
    </header>

      

      <main className="max-w-5xl mx-auto px-6 py-10">
         <section id="menu">
          <h2 className="text-2xl font-bold mb-4">Barang kami
            
          </h2>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {
          
            daftarTampil.map((item) => (
                // key menggunakan id karena setiap data memiliki identitas yang unik
                <Kartu key={item.id} item={item} /> 
            ))
         } 
        </div>
         </section>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
);
}
export default App;