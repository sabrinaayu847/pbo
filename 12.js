// Data pendaftar
const pendaftar = [
    { nama: "Sabrina", email: "sabrina@gmail.com", gender: "Perempuan" }
];

// Simpan ke localStorage
localStorage.setItem("pendaftar", JSON.stringify(pendaftar));
console.log("Data pendaftar disimpan!");

// Ambil data
const dataString = localStorage.getItem("pendaftar");
const daftarPendaftar = JSON.parse(dataString);

// Tampilkan data
console.log("Daftar Pendaftar:");
daftarPendaftar.forEach(function(p) {
    console.log(${p.nama} - ${p.email} - ${p.gender});
});
