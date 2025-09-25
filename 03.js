// Class Induk
class Mahasiswa {
    // Attribute (5 atribut)
    String nama;
    String nim;
    String jurusan;
    int angkatan;
    double ipk;

    // Constructor
    Mahasiswa(String nama, String nim, String jurusan, int angkatan, double ipk) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
        this.ipk = ipk;
    }

    // Method 1: tampilkan data
    void tampilkanData() {
        System.out.println("Nama     : " + nama);
        System.out.println("NIM      : " + nim);
        System.out.println("Jurusan  : " + jurusan);
        System.out.println("Angkatan : " + angkatan);
        System.out.println("IPK      : " + ipk);
    }

    // Method 2: update IPK
    void updateIPK(double ipkBaru) {
        this.ipk = ipkBaru;
        System.out.println("IPK " + nama + " diperbarui menjadi: " + ipk);
    }
}

// Class Anak 1
class MahasiswaAktif extends Mahasiswa {
    String status;

    MahasiswaAktif(String nama, String nim, String jurusan, int angkatan, double ipk, String status) {
        super(nama, nim, jurusan, angkatan, ipk);
        this.status = status;
    }

    // Method 3
    void tampilkanStatus() {
        System.out.println("Status   : " + status);
    }
}

// Class Anak 2
class MahasiswaAlumni extends Mahasiswa {
    int tahunLulus;

    MahasiswaAlumni(String nama, String nim, String jurusan, int angkatan, double ipk, int tahunLulus) {
        super(nama, nim, jurusan, angkatan, ipk);
