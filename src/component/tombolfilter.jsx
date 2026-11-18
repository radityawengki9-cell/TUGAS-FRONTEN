function TombolFilter({ teks, aktif, onPilih }) {
  return (
    <button
      onClick={onPilih}
      className={`px-4 py-2 rounded-lg border transition ${
        aktif
          ? "bg-green-700 text-white border-green-700"
          : "bg-white text-gray-700 border-gray-300"
      }`}
    >
      {teks}
    </button>
  );
}

export default TombolFilter;