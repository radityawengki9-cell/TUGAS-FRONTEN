function TombolFilter({ teks, onPilih, aktif }) {
  return (
    <button onClick={onPilih}
   // warna tombol mengikuti state kategori agar tombol aktif selalu sesuai filter yang dipilih
    style={{
            backgroundColor: aktif ? "#2563eb" : "#9ca3af",
        color: "white",
        padding: "10px",
        margin: "5px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        }}>
            
        
      {teks}
    </button>
  );
}

export default TombolFilter;
