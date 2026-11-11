function TombolFilter({ teks, onPilih, aktif }) {
  return (
    <button onClick={onPilih}

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
