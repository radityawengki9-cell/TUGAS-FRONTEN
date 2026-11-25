# Rancangan Database: Komoditas Impor dan Ekspor

## Tabel barang

| Kolom | Tipe | Keterangan |
|-------|-------|-------------|
| id | INTEGER | Primary key, dibuat otomatis oleh database |
| nama | TEXT | Nama komoditas |
| kasus | TEXT | Impor atau Ekspor |
| harga | INTEGER | Harga per ton |
| diperlukan | INTEGER | 1 = diperlukan, 0 = tidak diperlukan |

Kenapa id menjadi primary key:

Karena setiap komoditas harus mempunyai identitas yang unik. Nama barang bisa saja sama atau berubah, tetapi id selalu berbeda sehingga lebih aman digunakan sebagai penanda utama.

## Membuat Tabel

```sql
CREATE TABLE barang (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  kasus TEXT NOT NULL,
  harga INTEGER NOT NULL,
  diperlukan INTEGER NOT NULL
);
```

## Menambah Data Awal

```sql
INSERT INTO barang (nama, kasus, harga, diperlukan)
VALUES
('Gula Pasir', 'Impor', 13500000, 1),
('Minyak Sawit', 'Ekspor', 14500000, 1),
('Susu', 'Impor', 92000000, 0);
```


### 1. SELECT dengan WHERE

```sql
SELECT * FROM barang
WHERE kasus = 'Impor';
```

Hasil:
Menampilkan 2 data yaitu Gula Pasir dan Susu.


### 2. INSERT

```sql
INSERT INTO barang (nama, kasus, harga, diperlukan)
VALUES ('Bahan Mentah Tekstil', 'Impor', 28600000, 0);
```

Hasil:

Data Bahan Mentah Tekstil berhasil ditambahkan dan database memberikan id baru secara otomatis.


### 3. UPDATE dengan WHERE

```sql
UPDATE barang
SET harga = 15000000
WHERE id = 1;
```

Hasil:

Harga Gula Pasir berubah menjadi 15000000.


### 4. DELETE dengan WHERE

```sql
DELETE FROM barang
WHERE id = 4;
```

Hasil:

Data Susu berhasil dihapus dan jumlah data berkurang satu.