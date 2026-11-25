import { useState } from "react";

function FormTambah({ onTambah }) {
  const [nama, setNama] = useState("");
  const [kasus, setKasus] = useState("Impor");
  const [harga, setHarga] = useState("");

  async function kirim(e) {
    e.preventDefault();

    const berhasil = await onTambah({
      nama,
      kasus,
      harga: Number(harga),
      diperlukan: true,
    });

    // form hanya dikosongkan setelah server benar-benar menyimpan data
    if (berhasil) {
      setNama("");
      setKasus("Impor");
      setHarga("");
    }
  }

  return (
    <form onSubmit={kirim}  className="flex flex-wrap gap-3 items-end">
      <input
        type="text"
        placeholder="Nama Komoditas"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
        className="px-3 py-2 border rounded-lg"
      />

      <select
        value={kasus}
        onChange={(e) => setKasus(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option>Impor</option>
        <option>Ekspor</option>
      </select>

      <input
        type="number"
        placeholder="Harga"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        required
        className="px-3 py-2 border rounded-lg"
      />

      <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-lg">
        Tambah
      </button>
    </form>
  );
}

export default FormTambah;