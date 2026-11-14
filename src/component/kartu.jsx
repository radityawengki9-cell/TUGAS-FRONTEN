function Kartu({ item }) {
      // label ditentukan dari nilai boolean agar pengguna tidak melihat true atau false secara langsung
  return (
    <article
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <h3>{item.nama}</h3>

      <p>Kasus: {item.kasus}</p>

      <p>Harga: Rp {item.harga.toLocaleString("id-ID")}</p>

      <p>
        {item.diperlukan
          ? "Diperlukan"
          : "Tidak Diperlukan"}
      </p>
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