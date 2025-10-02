class Mahasiswa {
  constructor(nama, nim, nilai, prodi) {
    this.nama = nama; 
    this.nim = nim;   
    let _nilai = nilai; 
    let _prodi = prodi;

    this.getNilai = function() {
      return _nilai;
    };

    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus antara 0 dan 100");
      }
    };

    this.getProdi = function() {
      return _prodi;
    };

    this.setProdi = function(prodiBaru) {
      if (prodiBaru !== "") {
        _prodi = prodiBaru;
      } else {
        console.log("Prodi tidak boleh kosong");
      }
    };

    this.getInfo = function() {
      return `Nama   : ${this.nama}
NIM    : ${this.nim}
Prodi  : ${_prodi}
Nilai  : ${_nilai}
Status : ${this.isLulus()}`;
    };

    this.isLulus = function() {
      return _nilai >= 60 ? "Lulus" : "Tidak Lulus";
    };
  }
}

// Membuat objek
let mhs1 = new Mahasiswa("Ahmad", 202401110100, 70, "Informatika");
let mhs2 = new Mahasiswa("Budi", 202402110017, 50, "Sistem Informasi");
let mhs3 = new Mahasiswa("Citra", 202403110078, 95, "Manajemen");

// Tes output
console.log(mhs1.getInfo());  
mhs1.setNilai(85);
mhs1.setProdi("Rekayasa Perangkat Lunak");
console.log(mhs1.getInfo());  

console.log(mhs2.getInfo());  
mhs2.setNilai(40);
console.log("Status Budi :", mhs2.isLulus());  

console.log(mhs3.getInfo());  
console.log("Status Citra:", mhs3.isLulus());  
