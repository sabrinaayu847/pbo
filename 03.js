class Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk) {
    this.nama = nama; 
    this.nim = nim;
    this.jurusan = jurusan;
    this.angkatan = angkatan;
    this.ipk = ipk;
  }

  displayInfo() {
    console.log(`Mahasiswa: ${this.nama} ${this.nim} (${this.jurusan} ${this.angkatan} ${this.ipk})`);
  }
}

const mhs1 = new Mahasiswa('Kian', '20240001', 'Informatika', '2024', '3.80'); 
const mhs2 = new Mahasiswa('Junia', '20240002', 'Informatika', '2024', '3.90');
const mhs3 = new Mahasiswa('Rudi', '20240003', 'Informatika', '2024', '3.70');

mhs1.displayInfo(); 
mhs2.displayInfo(); 
mhs3.displayInfo();

class MahasiswaAktif {
  constructor(status) {
    this.status = status;
  }
}

class MahasiswaAktif extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk) {
    super('Mahasiswa'); 
    this.nama = nama;  
    this.nim = nim;
    this.jurusan = jurusan;
    this.angkatan = angkatan;
    this.ipk = ipk;
  }
}

class MahasiswaAlumni extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk, tahunLulus, pekerjaan) {
    super(nama, nim, jurusan, angkatan, ipk);
    this.tahunLulus = tahunLulus;
    this.pekerjaan = pekerjaan;
  }

tampilkanAlumni() {
    console.log(
      `${this.nama} lulus tahun ${this.tahunLulus} dan sekarang bekerja sebagai ${this.pekerjaan}.`
    );
  }
}

const mhs1 = new MahasiswaAktif("Kian", "20240001", "Informatika", 2024, 3.8, "Aktif");
const mhs2 = new MahasiswaAlumni("Junia", "20200002", "Informatika", 2020, 3.7, 2024, "Software Engineer");

mhs1.displayInfo();
mhs1.tampilkanStatus();

console.log("-----");

mhs2.displayInfo();
mhs2.tampilkanAlumni();
