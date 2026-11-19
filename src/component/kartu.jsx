function Kartu({ item }) {



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
    </article>
  );
}
/* sebenarnya artikel cukup

    <article>
      <h3>{item.nama}</h3>
      <p>{item.kasus}</p>
      <p>{item.harga}</p>
      <p>
        {item.diperlukan
          ? "Diperlukan"
          : "Tidak Diperlukan"}
      </p>
    </article>

    tetepi karena berantakan saya mintak ai untuk merapikan
    */



export default Kartu;