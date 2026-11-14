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
    <div>
    <header>
        <Navbar />
    </header>

      

      <main>
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


        <p>
        Menampilkan {daftarTampil.length} dari {daftarItem.length} komoditas
        </p>


         {
            daftarTampil.map((item) => (
                // key menggunakan id karena setiap data memiliki identitas yang unik
                <Kartu key={item.id} item={item} /> 
            ))
         }
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
);
}
export default App;