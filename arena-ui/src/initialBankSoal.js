export const INITIAL_QUESTIONS = [
  {
    id: 1,
    mapel: 'Matematika',
    bab: 'Bab 1 · Barisan dan deret',
    tipe: 'Pilihan ganda',
    kesulitan: 'Sedang',
    durasi: 15,
    pertanyaan: 'Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?',
    opsi: ['100', '110', '120', '90'],
    kunciIndex: 1, // B = 110
    pembahasan: 'S10 = 10/2 x (2 x 2 + 9 x 2) = 5 x 22 = 110',
  },
  {
    id: 2,
    mapel: 'Matematika',
    bab: 'Bab 2 · Fungsi',
    tipe: 'Pilihan ganda',
    kesulitan: 'Sulit',
    durasi: 20,
    pertanyaan: 'Jika f(x) = x² dan g(x) = x + 1, berapakah (f ○ g)(2)?',
    opsi: ['5', '6', '9', '4'],
    kunciIndex: 2, // C = 9
    pembahasan: 'g(2) = 2 + 1 = 3, lalu f(3) = 3² = 9.',
  },
];