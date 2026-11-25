function Kartu({ item, onHapus}) {



  let label = null;
  if (item.diperlukan === false) {
    label = <span className="text-xs font-semibold text-red-700">Tidak Diperlukan</span>;
  }
      // label ditentukan dari nilai boolean agar pengguna tidak melihat true atau false secara langsung
  return (
    <article className="flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
    <h3 className="text-lg font-semibold">{item.nama}</h3>
      <p className="text-sm text-gray-500">{item.kasus}</p>
      <p className="mt-2 font-bold text-green-800">Rp{item.harga.toLocaleString("id-ID")} /ton</p>
      {label}
      <button onClick={onHapus} className="mt-3 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Hapus</button>
    </article>
  );
}


export default Kartu;