// --- 1. Try pertama ---
try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  // ini akan memunculkan TypeError karena mahasiswa[5] = undefined
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai\n");
}

// --- 2. Definisi error class dan fungsi ---
class ValidasiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidasiError";
  }
}

function cekUsia(usia) {
  if (usia < 18) {
    // ubah pesan agar sesuai permintaan
    throw new Error("Maaf, Anda belum cukup umur");
  }
  return "Usia valid, silakan lanjut.";
}

function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return "Nama valid.";
}

// --- 3. Try kedua ---
try {
  console.log(cekUsia(16));
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message + "\n");
}

// --- 4. Try ketiga ---
try {
  console.log(cekNama("Jo"));
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
}
