import React, { useEffect, useState } from 'react';
import {
  Home,
  Menu,
  Gamepad2,
  Users,
  BarChart3,
  Settings,
  ArrowRight,
  ArrowLeft,
  Star,
  List,
  Check,
  AlertTriangle,
  Monitor,
  Play,
  Sparkles,
  QrCode,
  Sprout,
  Eye,
  SkipForward,
  Smartphone,
  User,
  UserCheck,
  Warehouse,
  LogOut,
  Loader2,
  Zap,
  LogIn,
} from 'lucide-react';

// Komponen Logo / Ilustrasi Bajak Sawah (Luku + Tunas)
function BajakSawahLogo({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 17L15 7" />
      <path d="M13 5l4 4" />
      <path d="M4 17h9l-3 4H6l-2-4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 17c2.5 0 4.5 1 6 2" />
      <path d="M18 6c0-2 1.5-3 3-3 0 2-1 3-3 3z" />
      <path d="M18 6c-1.5-1.5-3-1.5-4 0 1.5 1 3 1 4 0z" />
    </svg>
  );
}

export default function App() {
  const [screen, setScreen] = useState('dolan-loading');
  const [activeNav, setActiveNav] = useState('bank-soal');
  const [progress, setProgress] = useState(25);

  const [userProfile, setUserProfile] = useState({
    name: 'Uli Rizki',
    role: 'Guru Matematika · Pendidik',
    school: 'Universitas Nurul Huda / SMA Mitra',
    email: 'uli.rizki@asalink.edu',
    activeClass: 'XI IPA 2',
    avatarCode: 'UR',
  });

  useEffect(() => {
    if (screen !== 'dolan-loading') return;
    setProgress(20);
    const step1 = setTimeout(() => setProgress(58), 350);
    const step2 = setTimeout(() => setProgress(90), 750);
    const done = setTimeout(() => {
      setProgress(100);
      setScreen('dashboard');
    }, 1250);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(done);
    };
  }, [screen]);

  const [soalList, setSoalList] = useState([
    {
      id: 1,
      mapel: 'Matematika',
      bab: 'Bab 3 · Barisan dan deret',
      tipeSoal: 'Pilihan ganda',
      levelBloom: 'C3 · Menerapkan',
      kesulitan: 'Sedang',
      durasi: 30,
      teksSoal: 'Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?',
      opsi: { A: '100', B: '110', C: '120', D: '90' },
      kunciJawaban: 'B',
      pembahasan: 'S10 = 10/2 × (2 × 2 + 9 × 2) = 5 × 22 = 110',
    },
    {
      id: 2,
      mapel: 'Matematika',
      bab: 'Bab 3 · Barisan dan deret',
      tipeSoal: 'Pilihan ganda',
      levelBloom: 'C2 · Memahami',
      kesulitan: 'Mudah',
      durasi: 20,
      teksSoal: 'Suku ke-5 barisan aritmetika 3, 7, 11, ... adalah?',
      opsi: { A: '15', B: '17', C: '19', D: '21' },
      kunciJawaban: 'C',
      pembahasan: 'U5 = 3 + (5 - 1) × 4 = 3 + 16 = 19',
    },
  ]);

  const [form, setForm] = useState({
    mapel: 'Matematika',
    bab: 'Bab 3 · Barisan dan deret',
    tipeSoal: 'Pilihan ganda',
    levelBloom: 'C3 · Menerapkan',
    kesulitan: 'Sedang',
    durasi: 30,
    teksSoal: 'Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?',
    opsi: { A: '100', B: '110', C: '120', D: '90' },
    kunciJawaban: 'B',
    pembahasan: 'S10 = 10/2 × (2 × 2 + 9 × 2) = 5 × 22 = 110',
  });

  const [sesiConfig, setSesiConfig] = useState({
    kelas: 'XI IPA 2',
    bab: 'Bab 3 · Barisan dan deret',
    jumlahSoal: 10,
    template: 'Territory Grid',
    mode: 'Arena',
  });

  const [guruInfo, setGuruInfo] = useState({
    email: 'nama@sekolah.sch.id',
    autoLogout: true,
  });

  const [soalIndex, setSoalIndex] = useState(0);
  const [showJawaban, setShowJawaban] = useState(false);
  const [sisaWaktu] = useState(12);

  const [selectedTile, setSelectedTile] = useState(6);
  const [activeTeamIdx, setActiveTeamIdx] = useState(0);
  const [lastHarvestMsg, setLastHarvestMsg] = useState(
    'Tim Komering siap membajak & menanam di petak bertunas.'
  );
  const [teams, setTeams] = useState([
    { name: 'Tim Komering', code: 'A', color: 'bg-[#93c5fd] text-[#1e3a8a]', tiles: 3, points: 300 },
    { name: 'Tim Ogan', code: 'B', color: 'bg-[#fdba74] text-[#7c2d12]', tiles: 3, points: 300 },
    { name: 'Tim Musi', code: 'D', color: 'bg-[#f9a8d4] text-[#831843]', tiles: 3, points: 300 },
    { name: 'Tim Lematang', code: 'C', color: 'bg-[#6ee7b7] text-[#064e3b]', tiles: 2, points: 200 },
  ]);

  // Menu utama atas (Bajak sawah tidak digabung di sini; ditaruh di bawah bareng menu lainnya)
  const navItems = [
    {
      id: 'beranda',
      label: 'Beranda',
      icon: Home,
      badgeCls: 'bg-[#dbeafe] text-[#1d4ed8]',
    },
    {
      id: 'bank-soal',
      label: 'Bank soal',
      icon: Menu,
      badgeCls: 'bg-[#ffedd5] text-[#c2410c]',
    },
    {
      id: 'sesi-game',
      label: 'Sesi game',
      icon: Gamepad2,
      badgeCls: 'bg-[#e0e7ff] text-[#3730a3]',
    },
    {
      id: 'kelas-siswa',
      label: 'Kelas & siswa',
      icon: Users,
      badgeCls: 'bg-[#d1fae5] text-[#047857]',
    },
    {
      id: 'laporan',
      label: 'Laporan',
      icon: BarChart3,
      badgeCls: 'bg-[#fce7f3] text-[#be185d]',
    },
    {
      id: 'pengaturan',
      label: 'Pengaturan',
      icon: Settings,
      badgeCls: 'bg-[#fef3c7] text-[#b45309]',
    },
    {
      id: 'profil',
      label: 'Profil pengguna',
      icon: User,
      badgeCls: 'bg-[#ede9fe] text-[#6d28d9]',
    },
  ];

  // Menu bawah / pintasan layar (termasuk Bajak sawah / Territory Grid) dengan logo berwarna
  const bottomShortcuts = [
    {
      id: 'dolan-loading',
      label: 'Loading DOLAN',
      icon: Smartphone,
      badgeCls: 'bg-[#dbeafe] text-[#1d4ed8]',
      target: 'dolan-loading',
    },
    {
      id: 'bajak-sawah',
      label: 'Bajak sawah · Territory Grid',
      icon: BajakSawahLogo,
      badgeCls: 'bg-[#fde68a] text-[#92400e]',
      target: 'smartboard-territory',
    },
    {
      id: 'host-speed-clash',
      label: 'Host Speed Clash',
      icon: Zap,
      badgeCls: 'bg-[#ffedd5] text-[#ea580c]',
      target: 'host-speed-clash',
    },
    {
      id: 'login-smartboard',
      label: 'Login Smartboard',
      icon: LogIn,
      badgeCls: 'bg-[#e0e7ff] text-[#4338ca]',
      target: 'login-smartboard',
    },
  ];

  const heroGridTiles = [
    { id: 0, text: 'A', cls: 'bg-[#93c5fd] text-[#1e3a8a]' },
    { id: 1, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 2, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 3, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 4, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 5, text: 'star', cls: 'bg-[#2563eb] text-white' },
    { id: 6, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 7, text: 'B', cls: 'bg-[#fdba74] text-[#7c2d12]' },
    { id: 8, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 9, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 10, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 11, text: '', cls: 'bg-[#fdba74]' },
    { id: 12, text: 'C', cls: 'bg-[#6ee7b7] text-[#064e3b]' },
    { id: 13, text: '', cls: 'bg-[#e2e8f0]' },
    { id: 14, text: '', cls: 'bg-[#f9a8d4]' },
    { id: 15, text: 'D', cls: 'bg-[#f472b6] text-[#831843]' },
  ];

  // Grid 5x5 penuh warna variatif + bajak sawah & tunas
  const sawahGrid = Array.from({ length: 25 }, (_, idx) => {
    if (idx === 12) {
      return {
        id: idx,
        badge: null,
        points: 500,
        isLumbung: true,
        hasPlow: false,
        hasSprout: false,
        hasFarmer: false,
        bg: 'bg-[#fde047] text-[#713f12] border-[#eab308]',
      };
    }

    const map = {
      0: { badge: 'A', pts: 100, plow: false, sprout: false, farmer: true, bg: 'bg-[#93c5fd] text-[#1e3a8a] border-[#60a5fa]' },
      1: { badge: 'A', pts: 100, plow: true, sprout: false, farmer: false, bg: 'bg-[#bfdbfe] text-[#1e3a8a] border-[#93c5fd]' },
      2: { badge: null, pts: 200, plow: true, sprout: true, farmer: false, bg: 'bg-[#99f6e4] text-[#115e59] border-dashed border-[#0d9488]' },
      3: { badge: 'B', pts: 100, plow: false, sprout: false, farmer: true, bg: 'bg-[#fdba74] text-[#7c2d12] border-[#fb923c]' },
      4: { badge: 'B', pts: 100, plow: true, sprout: false, farmer: false, bg: 'bg-[#fed7aa] text-[#7c2d12] border-[#fdba74]' },

      5: { badge: 'A', pts: 100, plow: false, sprout: false, farmer: false, bg: 'bg-[#bfdbfe] text-[#1e3a8a] border-[#93c5fd]' },
      6: { badge: null, pts: 300, plow: true, sprout: true, farmer: true, bg: 'bg-[#a5f3fc] text-[#155e75] border-dashed border-[#0891b2]' },
      7: { badge: null, pts: 300, plow: false, sprout: false, farmer: false, bg: 'bg-[#e2e8f0] text-[#1e293b] border-[#cbd5e1]' },
      8: { badge: null, pts: 300, plow: true, sprout: false, farmer: false, bg: 'bg-[#fde68a] text-[#78350f] border-[#fcd34d]' },
      9: { badge: 'B', pts: 100, plow: false, sprout: false, farmer: false, bg: 'bg-[#fed7aa] text-[#7c2d12] border-[#fdba74]' },

      10: { badge: null, pts: 200, plow: true, sprout: true, farmer: false, bg: 'bg-[#ddd6fe] text-[#3730a3] border-dashed border-[#7c3aed]' },
      11: { badge: null, pts: 300, plow: false, sprout: false, farmer: false, bg: 'bg-[#e2e8f0] text-[#1e293b] border-[#cbd5e1]' },
      13: { badge: null, pts: 300, plow: false, sprout: false, farmer: false, bg: 'bg-[#e2e8f0] text-[#1e293b] border-[#cbd5e1]' },
      14: { badge: null, pts: 200, plow: true, sprout: false, farmer: true, bg: 'bg-[#fde68a] text-[#78350f] border-[#fcd34d]' },

      15: { badge: 'C', pts: 100, plow: false, sprout: false, farmer: true, bg: 'bg-[#6ee7b7] text-[#064e3b] border-[#34d399]' },
      16: { badge: null, pts: 300, plow: true, sprout: false, farmer: false, bg: 'bg-[#fbcfe8] text-[#831843] border-[#f472b6]' },
      17: { badge: null, pts: 300, plow: false, sprout: false, farmer: false, bg: 'bg-[#e2e8f0] text-[#1e293b] border-[#cbd5e1]' },
      18: { badge: null, pts: 300, plow: false, sprout: false, farmer: false, bg: 'bg-[#99f6e4] text-[#115e59] border-[#5eead4]' },
      19: { badge: 'D', pts: 100, plow: true, sprout: false, farmer: false, bg: 'bg-[#f9a8d4] text-[#831843] border-[#f472b6]' },

      20: { badge: 'C', pts: 100, plow: true, sprout: false, farmer: false, bg: 'bg-[#a7f3d0] text-[#064e3b] border-[#6ee7b7]' },
      21: { badge: null, pts: 100, plow: false, sprout: false, farmer: false, bg: 'bg-[#bfdbfe] text-[#1e3a8a] border-[#93c5fd]' },
      22: { badge: null, pts: 200, plow: true, sprout: false, farmer: true, bg: 'bg-[#fde68a] text-[#78350f] border-[#fcd34d]' },
      23: { badge: 'D', pts: 100, plow: false, sprout: false, farmer: true, bg: 'bg-[#fbcfe8] text-[#831843] border-[#f9a8d4]' },
      24: { badge: 'D', pts: 100, plow: true, sprout: false, farmer: false, bg: 'bg-[#f472b6] text-white border-[#ec4899]' },
    };

    const item = map[idx] || {
      badge: null,
      pts: 200,
      plow: false,
      sprout: false,
      farmer: false,
      bg: 'bg-[#e2e8f0] text-[#1e293b] border-[#cbd5e1]',
    };

    return {
      id: idx,
      badge: item.badge,
      points: item.pts,
      isLumbung: false,
      hasPlow: item.plow,
      hasSprout: item.sprout,
      hasFarmer: item.farmer,
      bg: item.bg,
    };
  });

  const handleSimpanSoal = (e) => {
    e.preventDefault();
    if (!form.teksSoal.trim()) return;
    setSoalList((prev) => [{ id: Date.now(), ...form }, ...prev]);
    setScreen('dashboard');
    setActiveNav('bank-soal');
  };

  const handlePanenPetak = () => {
    const pts = sawahGrid[selectedTile]?.points || 200;
    const timAktif = teams[activeTeamIdx];
    setTeams((prev) =>
      prev.map((t, idx) =>
        idx === activeTeamIdx ? { ...t, tiles: t.tiles + 1, points: t.points + pts } : t
      )
    );
    setLastHarvestMsg(
      `${timAktif.name} membajak & memanen petak #${selectedTile + 1} (+${pts} poin)!`
    );
    setActiveTeamIdx((prev) => (prev + 1) % teams.length);
  };

  // 0. LOADING TAMPILAN MASUK DOLAN
  if (screen === 'dolan-loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] text-white font-sans flex flex-col items-center justify-between p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="w-full max-w-sm flex items-center justify-between text-[11px] text-blue-100 z-10">
          <span>ASALink Arena · Mobile & Web</span>
          <span className="bg-white/15 px-2.5 py-0.5 rounded-full font-semibold">
            Loading masuk
          </span>
        </div>

        <div className="flex flex-col items-center text-center space-y-5 z-10 max-w-xs">
          <div className="w-24 h-24 rounded-3xl bg-white p-3 grid grid-cols-2 gap-2 shadow-2xl">
            <span className="rounded-lg bg-[#fdba74]" />
            <span className="rounded-lg bg-[#2563eb] text-white flex items-center justify-center">
              <Star className="w-4 h-4 fill-current" />
            </span>
            <span className="rounded-lg bg-[#6ee7b7]" />
            <span className="rounded-lg bg-[#c4b5fd]" />
          </div>

          <div className="space-y-1.5">
            <h1 className="text-4xl font-black tracking-wider">DOLAN</h1>
            <p className="text-xs font-medium text-blue-100 leading-relaxed">
              Digital Olah Logika
              <br />
              Ajar Nusantara
            </p>
          </div>

          <span className="bg-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
            Main sambil mikir
          </span>

          <div className="w-full space-y-2 pt-2">
            <div className="w-full h-2 bg-white/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-blue-100">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Menyiapkan ruang belajar... ({progress}%)</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setScreen('dashboard')}
            className="text-xs font-semibold text-white underline hover:text-blue-100 cursor-pointer pt-1"
          >
            Masuk langsung ke Dashboard →
          </button>
        </div>

        <div className="space-y-2 text-[11px] text-center z-10">
          <div className="w-12 h-12 rounded-lg border border-dashed border-white/50 mx-auto flex items-center justify-center text-[9px] leading-tight">
            Logo
            <br />
            UNUHA
          </div>
          <div className="text-blue-200">Dikembangkan oleh</div>
          <div className="font-semibold text-white leading-snug">
            Pendidikan Teknologi Informasi
            <br />
            Universitas Nurul Huda
          </div>
        </div>
      </div>
    );
  }

  // 0B. MENU PENGGUNA / PROFIL
  if (screen === 'profil') {
    return (
      <div className="min-h-screen bg-[#f4f6fb] text-[#0f172a] font-sans py-6 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <button
            type="button"
            onClick={() => {
              setScreen('dashboard');
              setActiveNav('bank-soal');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2563eb] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke dashboard
          </button>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a]">
              Profil & akun pengguna
            </h1>
            <button
              type="button"
              onClick={() => setScreen('dolan-loading')}
              className="text-xs font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-xl cursor-pointer"
            >
              Putar ulang loading DOLAN
            </button>
          </div>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#2563eb] text-white text-xl font-extrabold flex items-center justify-center shrink-0">
              {userProfile.avatarCode}
            </div>
            <div className="text-center sm:text-left space-y-1 flex-1">
              <div className="text-lg font-bold text-[#0f172a]">{userProfile.name}</div>
              <div className="text-xs font-medium text-[#2563eb]">{userProfile.role}</div>
              <div className="text-xs text-[#64748b]">{userProfile.school}</div>
            </div>
            <button
              type="button"
              onClick={() => setScreen('login-smartboard')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl border border-[#cbd5e1] text-[#0f172a] hover:bg-[#f8fafc] cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Masuk / Ganti akun smartboard
            </button>
          </section>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-4">
            <h2 className="text-sm font-bold text-[#0f172a]">Pengaturan pengguna</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => {
                    const val = e.target.value;
                    const initials =
                      val
                        .split(' ')
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((w) => w[0].toUpperCase())
                        .join('') || 'UR';
                    setUserProfile({ ...userProfile, name: val, avatarCode: initials });
                  }}
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Peran / Mata pelajaran
                </label>
                <input
                  type="text"
                  value={userProfile.role}
                  onChange={(e) => setUserProfile({ ...userProfile, role: e.target.value })}
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Email pengguna
                </label>
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Kelas binaan aktif
                </label>
                <input
                  type="text"
                  value={userProfile.activeClass}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, activeClass: e.target.value })
                  }
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => {
                  setScreen('dashboard');
                  setActiveNav('bank-soal');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#3b28cc] hover:bg-[#3120b0] text-xs font-semibold text-white cursor-pointer"
              >
                Simpan profil
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // 1. TAMBAH SOAL
  if (screen === 'tambah-soal') {
    return (
      <div className="min-h-screen bg-[#f4f6fb] text-[#0f172a] font-sans py-6 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <button
            type="button"
            onClick={() => {
              setScreen('dashboard');
              setActiveNav('bank-soal');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2563eb] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke bank soal
          </button>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a]">
              Tambah soal
            </h1>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748b] bg-white border border-[#e2e8f0] px-3.5 py-2 rounded-xl shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <Sparkles className="w-3.5 h-3.5 text-[#64748b]" />
              Generator AI · semester depan
            </span>
          </div>

          <form onSubmit={handleSimpanSoal} className="space-y-5">
            <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <h2 className="text-sm font-bold text-[#0f172a] mb-4">Identitas soal</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Mapel
                  </label>
                  <select
                    value={form.mapel}
                    onChange={(e) => setForm({ ...form, mapel: e.target.value })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  >
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Bab
                  </label>
                  <select
                    value={form.bab}
                    onChange={(e) => setForm({ ...form, bab: e.target.value })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  >
                    <option value="Bab 3 · Barisan dan deret">Bab 3 · Barisan d...</option>
                    <option value="Bab 2 · Fungsi">Bab 2 · Fungsi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Tipe soal
                  </label>
                  <select
                    value={form.tipeSoal}
                    onChange={(e) => setForm({ ...form, tipeSoal: e.target.value })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  >
                    <option value="Pilihan ganda">Pilihan ganda</option>
                    <option value="Benar / Salah">Benar / Salah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Level Bloom
                  </label>
                  <select
                    value={form.levelBloom}
                    onChange={(e) => setForm({ ...form, levelBloom: e.target.value })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  >
                    <option value="C3 · Menerapkan">C3 · Menerapkan</option>
                    <option value="C2 · Memahami">C2 · Memahami</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Kesulitan
                  </label>
                  <select
                    value={form.kesulitan}
                    onChange={(e) => setForm({ ...form, kesulitan: e.target.value })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  >
                    <option value="Mudah">Mudah</option>
                    <option value="Sedang">Sedang</option>
                    <option value="Sulit">Sulit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                    Durasi (detik)
                  </label>
                  <input
                    type="number"
                    value={form.durasi}
                    onChange={(e) => setForm({ ...form, durasi: Number(e.target.value) || 30 })}
                    className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-5">
              <h2 className="text-sm font-bold text-[#0f172a]">Isi soal</h2>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Teks soal
                </label>
                <textarea
                  rows={3}
                  value={form.teksSoal}
                  onChange={(e) => setForm({ ...form, teksSoal: e.target.value })}
                  className="w-full rounded-xl border border-[#cbd5e1] bg-white p-3.5 text-xs leading-relaxed"
                />
              </div>

              <div className="space-y-2.5">
                <label className="block text-[11px] font-semibold text-[#334155]">
                  Opsi jawaban — pilih satu sebagai kunci
                </label>

                {['A', 'B', 'C', 'D'].map((huruf) => {
                  const aktif = form.kunciJawaban === huruf;
                  return (
                    <div key={huruf} className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, kunciJawaban: huruf })}
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 cursor-pointer ${
                          aktif ? 'border-[#3b28cc]' : 'border-[#94a3b8] bg-white'
                        }`}
                      >
                        {aktif && <span className="w-2 h-2 rounded-full bg-[#3b28cc]" />}
                      </button>

                      <span className="w-7 h-7 rounded-md bg-[#eef2ff] text-[#3730a3] text-xs font-bold flex items-center justify-center shrink-0">
                        {huruf}
                      </span>

                      <input
                        type="text"
                        value={form.opsi[huruf]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            opsi: { ...form.opsi, [huruf]: e.target.value },
                          })
                        }
                        className="flex-1 h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                      />
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Pembahasan (tampil setelah jawaban dibuka)
                </label>
                <textarea
                  rows={2}
                  value={form.pembahasan}
                  onChange={(e) => setForm({ ...form, pembahasan: e.target.value })}
                  className="w-full rounded-xl border border-[#cbd5e1] bg-white p-3.5 text-xs"
                />
              </div>
            </section>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setScreen('dashboard');
                  setActiveNav('bank-soal');
                }}
                className="px-5 py-2.5 rounded-xl bg-white border border-[#cbd5e1] text-xs font-semibold text-[#0f172a] hover:bg-[#f8fafc] cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#3b28cc] hover:bg-[#3120b0] text-xs font-semibold text-white cursor-pointer"
              >
                Simpan soal
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. BUAT SESI GAME
  if (screen === 'buat-sesi') {
    const templates = [
      {
        id: 'Speed Clash',
        title: 'Speed Clash',
        badge: 'MVP',
        badgeCls: 'bg-[#eef2ff] text-[#3730a3]',
        desc: 'Tercepat menjawab benar dapat poin terbanyak. Buzzer di HP siswa.',
        meta: 'C1–C2 · individu',
      },
      {
        id: 'Territory Grid',
        title: 'Territory Grid',
        badge: 'Bonus',
        badgeCls: 'bg-[#fef3c7] text-[#92400e]',
        desc: 'Tim membajak & merebut petak papan di smartboard. Petak sulit bernilai lebih tinggi.',
        meta: 'C2–C3 · tim',
      },
      {
        id: 'Coin Wager',
        title: 'Coin Wager',
        badge: 'Semester depan',
        badgeCls: 'bg-[#f1f5f9] text-[#64748b]',
        desc: 'Siswa mempertaruhkan koin sesuai keyakinan sebelum jawaban dibuka.',
        meta: 'C4–C5 · metakognisi',
      },
    ];

    return (
      <div className="min-h-screen bg-[#f4f6fb] text-[#0f172a] font-sans py-6 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <button
            type="button"
            onClick={() => {
              setScreen('dashboard');
              setActiveNav('bank-soal');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2563eb] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke bank soal
          </button>

          <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a]">
            Buat sesi game
          </h1>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="text-sm font-bold text-[#0f172a] mb-4">1 · Pilih materi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Kelas
                </label>
                <select
                  value={sesiConfig.kelas}
                  onChange={(e) => setSesiConfig({ ...sesiConfig, kelas: e.target.value })}
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                >
                  <option value="XI IPA 2">XI IPA 2</option>
                  <option value="XI IPA 1">XI IPA 1</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Bab
                </label>
                <select
                  value={sesiConfig.bab}
                  onChange={(e) => setSesiConfig({ ...sesiConfig, bab: e.target.value })}
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                >
                  <option value="Bab 3 · Barisan dan deret">Bab 3 · Barisan d...</option>
                  <option value="Bab 2 · Fungsi">Bab 2 · Fungsi</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#334155] mb-1.5">
                  Jumlah soal
                </label>
                <input
                  type="number"
                  value={sesiConfig.jumlahSoal}
                  onChange={(e) =>
                    setSesiConfig({ ...sesiConfig, jumlahSoal: Number(e.target.value) || 10 })
                  }
                  className="w-full h-10 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs"
                />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="text-sm font-bold text-[#0f172a] mb-4">
              2 · Pilih template game
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {templates.map((tpl) => {
                const selected = sesiConfig.template === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setSesiConfig({ ...sesiConfig, template: tpl.id })}
                    className={`text-left rounded-xl border p-4 flex flex-col justify-between gap-4 transition-all cursor-pointer ${
                      selected
                        ? 'border-[#3b28cc] ring-2 ring-[#3b28cc]/15 bg-white'
                        : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-base font-bold text-[#0f172a] leading-snug">
                          {tpl.title}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${tpl.badgeCls}`}
                        >
                          {tpl.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">{tpl.desc}</p>
                    </div>
                    <div className="text-xs font-bold text-[#1e1b4b]">{tpl.meta}</div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-3">
            <h2 className="text-sm font-bold text-[#0f172a]">3 · Mode permainan</h2>

            <div className="flex flex-col items-start gap-2.5">
              <button
                type="button"
                onClick={() => setSesiConfig({ ...sesiConfig, mode: 'Latihan' })}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  sesiConfig.mode === 'Latihan'
                    ? 'bg-[#3b28cc] text-white'
                    : 'bg-white border border-[#cbd5e1] text-[#0f172a]'
                }`}
              >
                Latihan · semua siswa main sampai akhir
              </button>

              <button
                type="button"
                onClick={() => setSesiConfig({ ...sesiConfig, mode: 'Arena' })}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  sesiConfig.mode === 'Arena'
                    ? 'bg-[#3b28cc] text-white'
                    : 'bg-white border border-[#cbd5e1] text-[#0f172a]'
                }`}
              >
                Arena · eliminasi + revival
              </button>
            </div>
          </section>

          <section className="bg-[#0b1021] text-white rounded-2xl p-6 space-y-4">
            <div className="text-xs font-medium text-slate-200">
              Siap: {sesiConfig.template} · mode {sesiConfig.mode} · {sesiConfig.jumlahSoal} soal Bab 3
            </div>
            <button
              type="button"
              onClick={() =>
                setScreen(
                  sesiConfig.template === 'Territory Grid'
                    ? 'smartboard-territory'
                    : 'host-speed-clash'
                )
              }
              className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold px-5 py-3 rounded-lg cursor-pointer"
            >
              Tampilkan di smartboard
            </button>
          </section>
        </div>
      </div>
    );
  }

  // 3. LOGIN SMARTBOARD
  if (screen === 'login-smartboard') {
    return (
      <div className="min-h-screen bg-[#090d22] text-white font-sans flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center">
              A
            </div>
            <span className="text-sm font-bold">ASALink Arena</span>
          </div>
          <div className="text-xs text-slate-400">Smartboard · [Nama Ruang Kelas]</div>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6">Masuk sebagai guru</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#181e46] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-32 h-32 bg-white rounded-xl p-2.5 text-[#090d22] flex flex-col items-center justify-center shrink-0">
                <QrCode className="w-20 h-20 stroke-[2.2]" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="text-[#fb923c] font-semibold">Disarankan</div>
                <div className="text-base font-bold text-white">Pindai dari HP atau laptop</div>
                <p className="text-slate-300 leading-relaxed">
                  Buka dashboard guru, pilih <strong className="text-white">Hubungkan smartboard</strong>, lalu pindai kode ini. Kata sandi tidak perlu diketik di layar kelas.
                </p>
                <div className="pt-1 text-slate-300">
                  Atau masukkan kode{' '}
                  <span className="text-lg font-mono font-extrabold tracking-wider text-white ml-1">
                    K7Q-29D
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Kode berganti setiap 60 detik.</div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setScreen('beranda-smartboard');
              }}
              className="bg-[#14193c] rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-sm font-bold text-white">Masuk dengan akun</h2>

              <div>
                <label className="block text-[11px] text-slate-300 mb-1.5">Email guru</label>
                <input
                  type="email"
                  value={guruInfo.email}
                  onChange={(e) => setGuruInfo({ ...guruInfo, email: e.target.value })}
                  className="w-full h-10 rounded-lg bg-[#090d22] border border-white/15 px-3 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 mb-1.5">Kata sandi</label>
                <input
                  type="password"
                  defaultValue="12345678"
                  className="w-full h-10 rounded-lg bg-[#090d22] border border-white/15 px-3 text-xs text-white"
                />
              </div>

              <label className="flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={guruInfo.autoLogout}
                  onChange={(e) => setGuruInfo({ ...guruInfo, autoLogout: e.target.checked })}
                  className="accent-[#f97316]"
                />
                <span>Keluar otomatis setelah 30 menit tidak aktif</span>
              </label>

              <button
                type="submit"
                className="w-full h-10 rounded-lg bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold cursor-pointer"
              >
                Masuk
              </button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setScreen('dashboard')}
              className="hover:text-white underline cursor-pointer"
            >
              ← Kembali ke Dashboard Guru
            </button>
            <button
              type="button"
              onClick={() => setScreen('beranda-smartboard')}
              className="hover:text-white underline cursor-pointer"
            >
              Lanjut ke Beranda Smartboard →
            </button>
          </div>
        </main>
      </div>
    );
  }

  // 4. BERANDA SMARTBOARD
  if (screen === 'beranda-smartboard') {
    const sesiSiap = [
      {
        code: 'SC',
        codeCls: 'bg-[#ffedd5] text-[#ea580c]',
        title: 'Speed Clash',
        sub: 'Bab 3 · Barisan dan deret · 10 soal · mode Latihan',
        target: 'host-speed-clash',
      },
      {
        code: 'TG',
        codeCls: 'bg-[#fde68a] text-[#92400e]',
        title: 'Territory Grid · Bajak Sawah',
        sub: 'Bab 2 · Fungsi · 12 soal · mode Arena (tim)',
        target: 'smartboard-territory',
      },
      {
        code: 'SC',
        codeCls: 'bg-[#ffedd5] text-[#ea580c]',
        title: 'Speed Clash',
        sub: 'Bab 3 · Latihan remedial · 8 soal · mode Latihan',
        target: 'host-speed-clash',
      },
    ];

    return (
      <div className="min-h-screen bg-[#090d22] text-white font-sans flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center">
              A
            </div>
            <span className="text-sm font-bold">ASALink Arena</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-300">
              [{userProfile.name}] · {userProfile.activeClass}
            </span>
            <button
              type="button"
              onClick={() => setScreen('login-smartboard')}
              className="px-3 py-1 rounded-md border border-white/20 text-slate-200 hover:bg-white/10 cursor-pointer"
            >
              Keluar
            </button>
          </div>
        </header>

        <main className="max-w-5xl w-full mx-auto px-6 py-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Selamat datang, siap main?</h1>
            <p className="text-xs text-slate-400 mt-1">
              Sesi yang dibuat di dashboard guru muncul di sini.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-semibold text-slate-300">Sesi siap dimainkan</div>

              {sesiSiap.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#151b40] rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${item.codeCls}`}
                    >
                      {item.code}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 truncate">{item.sub}</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setScreen(item.target)}
                    className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 cursor-pointer"
                  >
                    Buka di layar
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-[#151b40] rounded-xl p-5 space-y-3">
                <div className="text-[11px] text-slate-400">Kelas aktif</div>
                <div className="text-xl font-bold text-white">{sesiConfig.kelas}</div>
                <div className="text-xs text-slate-400">32 siswa terdaftar</div>
                <button
                  type="button"
                  onClick={() =>
                    setSesiConfig({
                      ...sesiConfig,
                      kelas: sesiConfig.kelas === 'XI IPA 2' ? 'XI IPA 1' : 'XI IPA 2',
                    })
                  }
                  className="w-full py-2 rounded-lg bg-[#232b5e] hover:bg-[#2d3775] text-xs font-semibold text-white cursor-pointer"
                >
                  Ganti kelas
                </button>
              </div>

              <div className="bg-[#151b40] rounded-xl p-5 space-y-3 text-xs">
                <div className="font-semibold text-slate-200">Riwayat sesi</div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Speed Clash · Bab 2</span>
                  <span className="text-[11px] text-slate-400">Kemarin</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Speed Clash · Bab 1</span>
                  <span className="text-[11px] text-slate-400">Senin</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Territory Grid · Bab 1</span>
                  <span className="text-[11px] text-slate-400">Minggu lalu</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 5. HOST VIEW SMARTBOARD (Speed Clash)
  if (screen === 'host-speed-clash') {
    const aktifSoal = soalList[soalIndex % soalList.length];
    const opsiStyle = [
      { key: 'A', cls: 'bg-[#93c5fd] text-[#1e3a8a]' },
      { key: 'B', cls: 'bg-[#fdba74] text-[#7c2d12]' },
      { key: 'C', cls: 'bg-[#6ee7b7] text-[#064e3b]' },
      { key: 'D', cls: 'bg-[#f9a8d4] text-[#831843]' },
    ];
    const peringkat = [
      { rank: 1, nama: 'Tim Komering', skor: 860 },
      { rank: 2, nama: 'Rara', skor: 820 },
      { rank: 3, nama: 'Dimas', skor: 790 },
      { rank: 4, nama: 'Salsa', skor: 760 },
      { rank: 5, nama: 'Fajar', skor: 700 },
    ];

    return (
      <div className="min-h-screen bg-[#090d22] text-white font-sans p-5 flex flex-col justify-between gap-4">
        <div className="max-w-6xl w-full mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setScreen('beranda-smartboard')}
                className="text-slate-400 hover:text-white underline cursor-pointer"
              >
                ← Beranda smartboard
              </button>
              <span className="font-semibold text-slate-200">
                ASALink Arena · Speed Clash · {aktifSoal.mapel} · Bab 3
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-400">Soal {soalIndex + 1} / 10</span>
              <span className="bg-[#181e46] px-2.5 py-1 rounded text-slate-200">
                Kode room{' '}
                <strong className="text-sm font-mono tracking-wider text-white ml-1">
                  482 913
                </strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-9 space-y-3">
              <div className="bg-[#141a42] rounded-2xl p-6 sm:p-8 min-h-[220px] flex flex-col justify-center">
                <p className="text-xl sm:text-2xl font-bold leading-snug text-white max-w-xl">
                  {aktifSoal.teksSoal}
                </p>
                {showJawaban && (
                  <p className="mt-4 text-xs text-emerald-300 font-semibold">
                    Jawaban benar: {aktifSoal.kunciJawaban} · {aktifSoal.pembahasan}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {opsiStyle.map((o) => (
                  <div
                    key={o.key}
                    className={`rounded-xl px-4 py-3.5 flex items-center gap-3 font-bold text-sm ${o.cls} ${
                      showJawaban && aktifSoal.kunciJawaban === o.key
                        ? 'ring-4 ring-white'
                        : ''
                    }`}
                  >
                    <span className="w-6 h-6 rounded bg-white/40 flex items-center justify-center text-xs font-extrabold">
                      {o.key}
                    </span>
                    <span>{aktifSoal.opsi[o.key]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <div className="bg-[#141a42] rounded-2xl p-4 text-center">
                <div className="text-[11px] text-slate-400">Sisa waktu</div>
                <div className="text-4xl font-extrabold text-[#fb923c] my-1">{sisaWaktu}</div>
                <div className="text-[11px] text-slate-400">detik</div>
                <div className="text-[10px] text-slate-400 mt-2">
                  18 dari 32 siswa sudah menjawab
                </div>
              </div>

              <div className="bg-[#141a42] rounded-2xl p-4 space-y-2 text-xs">
                <div className="font-semibold text-slate-200 mb-1">Papan peringkat</div>
                {peringkat.map((p) => (
                  <div key={p.rank} className="flex items-center justify-between text-slate-300">
                    <span>
                      <span className="text-slate-500 mr-2">{p.rank}</span>
                      {p.nama}
                    </span>
                    <span className="font-bold text-white">{p.skor}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShowJawaban((prev) => !prev)}
                  className="bg-[#232b5e] hover:bg-[#2d3775] text-white text-[11px] font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Buka jawaban
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSoalIndex((prev) => prev + 1);
                    setShowJawaban(false);
                  }}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white text-[11px] font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer"
                >
                  Soal berikutnya
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. TERRITORY GRID DI SMARTBOARD (Rebut Sawah: Warna Beragam + Logo Bajak Sawah & Tunas)
  if (screen === 'smartboard-territory') {
    const giliran = teams[activeTeamIdx];

    return (
      <div className="min-h-screen bg-[#0f172a] text-white font-sans p-4 sm:p-6 flex flex-col justify-center">
        <div className="max-w-5xl w-full mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setScreen('beranda-smartboard')}
                className="text-slate-300 hover:text-white underline cursor-pointer"
              >
                ← Kembali
              </button>
              <span className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#fdba74] text-[#7c2d12] flex items-center justify-center">
                  <BajakSawahLogo className="w-4 h-4" />
                </span>
                Rebut Sawah
              </span>
              <span className="bg-white/10 text-slate-200 px-2 py-0.5 rounded text-[11px]">
                Territory Grid
              </span>
              <span className="text-slate-300">
                Matematika · Bab 2 Fungsi · mode Arena
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-300">Musim tanam 4 / 12</span>
              <span className="bg-[#1e293b] border border-white/15 px-3 py-1 rounded text-slate-200">
                Kode room{' '}
                <strong className="text-sm font-mono font-extrabold text-[#fb923c] ml-1">
                  615 207
                </strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div className="lg:col-span-6 bg-[#162038] border border-white/15 rounded-2xl p-3.5 shadow-xl">
              <div className="grid grid-cols-5 gap-2">
                {sawahGrid.map((tile) => {
                  const terpilih = selectedTile === tile.id;
                  return (
                    <button
                      key={tile.id}
                      type="button"
                      onClick={() => setSelectedTile(tile.id)}
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)',
                        backgroundSize: '10px 10px',
                      }}
                      className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
                        tile.bg
                      } ${
                        terpilih
                          ? 'ring-4 ring-white scale-105 z-10'
                          : 'hover:scale-[1.03]'
                      }`}
                    >
                      {tile.badge && (
                        <span className="w-5 h-5 rounded-full bg-white text-slate-900 text-[10px] font-extrabold flex items-center justify-center mb-0.5 shadow-sm">
                          {tile.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-0.5 mb-0.5">
                        {tile.hasPlow && (
                          <span
                            title="Petak bajak sawah"
                            className="w-4 h-4 rounded bg-black/15 flex items-center justify-center"
                          >
                            <BajakSawahLogo className="w-3 h-3" />
                          </span>
                        )}
                        {tile.hasFarmer && (
                          <span
                            title="Petani"
                            className="w-4 h-4 rounded-full bg-black/15 flex items-center justify-center"
                          >
                            <UserCheck className="w-2.5 h-2.5" />
                          </span>
                        )}
                        {tile.hasSprout && <Sprout className="w-3.5 h-3.5" />}
                      </div>

                      {tile.isLumbung && (
                        <div className="flex flex-col items-center leading-none mb-0.5">
                          <Warehouse className="w-4 h-4 mb-0.5" />
                          <span className="text-[8px] font-black uppercase">Lumbung</span>
                        </div>
                      )}

                      <span className="text-[11px] font-extrabold leading-none">
                        {tile.isLumbung ? '500' : tile.points}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="bg-[#c7d2fe] text-[#1e1b4b] rounded-xl p-4 space-y-1 shadow">
                <div className="text-[11px] font-semibold text-[#4338ca]">Giliran menanam</div>
                <div className="text-xl font-extrabold flex items-center gap-2">
                  <BajakSawahLogo className="w-5 h-5 text-[#3730a3]" />
                  <span>{giliran.name}</span>
                </div>
                <div className="text-xs text-[#312e81]">
                  Kapten memilih petak bertanda bajak & tunas, yang bersebelahan dengan sawah tim.
                </div>
              </div>

              <div className="bg-[#162038] border border-white/15 rounded-xl p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Ketuk petak bertanda bajak & tunas untuk membuka soal. Petak tengah adalah{' '}
                    <strong className="text-[#fde047]">lumbung padi (500)</strong>: soal tersulit, panen terbesar.
                  </p>
                  <button
                    type="button"
                    onClick={handlePanenPetak}
                    className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 cursor-pointer"
                  >
                    Bajak & panen #{selectedTile + 1}
                  </button>
                </div>
                <div className="text-[11px] text-[#99f6e4] bg-white/5 px-3 py-1.5 rounded-lg">
                  {lastHarvestMsg}
                </div>
              </div>

              <div className="bg-[#162038] border border-white/15 rounded-xl p-4 space-y-2.5 text-xs">
                <div className="font-semibold text-slate-200">Hasil panen sementara</div>
                {teams.map((t) => (
                  <div key={t.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-5 h-5 rounded-full text-[10px] font-extrabold flex items-center justify-center ${t.color}`}
                      >
                        {t.code}
                      </span>
                      <span className="font-semibold text-white">{t.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-slate-300">{t.tiles} petak</span>
                      <span className="font-extrabold text-[#fde047] w-8 text-right">
                        {t.points}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. DASHBOARD BANK SOAL (Default)
  const totalSoal = 23 + soalList.length;

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#0f172a] font-sans flex flex-col md:flex-row">
      {/* Sidebar Kiri */}
      <aside className="w-full md:w-56 bg-white border-b md:border-b-0 md:border-r border-[#e2e8f0] p-4 shrink-0 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 px-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white grid grid-cols-2 gap-0.5 p-1.5">
              <span className="bg-white/95 rounded-[2px]" />
              <span className="bg-white/60 rounded-[2px]" />
              <span className="bg-white/60 rounded-[2px]" />
              <span className="bg-white/95 rounded-[2px]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-[#0f172a]">ASALink</div>
              <div className="text-xs font-semibold text-[#475569]">Arena</div>
            </div>
          </div>

          {/* Menu Utama Atas (dengan logo badge berwarna) */}
          <nav className="flex md:flex-col gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const aktif =
                (item.id === 'profil' && screen === 'profil') ||
                (item.id !== 'profil' && activeNav === item.id && screen === 'dashboard');
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.id);
                    if (item.id === 'profil') setScreen('profil');
                    else if (item.id === 'bank-soal') setScreen('tambah-soal');
                    else if (item.id === 'sesi-game') setScreen('buat-sesi');
                    else setScreen('dashboard');
                  }}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    aktif
                      ? 'bg-[#eef2ff] text-[#2563eb] font-semibold'
                      : 'text-[#475569] hover:bg-[#f8fafc]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${item.badgeCls}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Menu Bawah & Kartu Profil (Bajak sawah diletakkan di bawah bareng menu lainnya) */}
        <div className="hidden md:flex flex-col gap-1.5 pt-4 mt-4 border-t border-[#e2e8f0] text-[11px]">
          {bottomShortcuts.map((shortcut) => {
            const Icon = shortcut.icon;
            return (
              <button
                key={shortcut.id}
                type="button"
                onClick={() => setScreen(shortcut.target)}
                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#334155] hover:bg-[#f8fafc] text-left transition-colors cursor-pointer"
              >
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${shortcut.badgeCls}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="truncate font-medium">{shortcut.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setActiveNav('profil');
              setScreen('profil');
            }}
            className="mt-2 p-2.5 rounded-xl bg-[#f8fafc] hover:bg-[#eef2ff] border border-[#e2e8f0] flex items-center gap-2.5 text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center shrink-0">
              {userProfile.avatarCode}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0f172a] truncate">
                {userProfile.name}
              </div>
              <div className="text-[10px] text-[#64748b] truncate">
                {userProfile.activeClass} · Profil
              </div>
            </div>
          </button>
        </div>
      </aside>

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col lg:flex-row gap-5 p-4 sm:p-6 max-w-[1440px] mx-auto w-full">
        <main className="flex-1 space-y-5 min-w-0">
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="space-y-4 max-w-xs z-10">
              <h1 className="text-[28px] sm:text-[32px] font-bold leading-[1.15] tracking-tight text-[#0f172a]">
                Ubah bab jadi arena kelas
              </h1>
              <button
                type="button"
                onClick={() => setScreen('buat-sesi')}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Buat sesi game</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="shrink-0 pr-2">
              <div className="grid grid-cols-4 gap-2 -rotate-12 scale-95 sm:scale-100">
                {heroGridTiles.map((tile) => (
                  <div
                    key={tile.id}
                    className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm ${tile.cls}`}
                  >
                    {tile.text === 'star' ? (
                      <Star className="w-4 h-4 fill-current" />
                    ) : (
                      tile.text
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                <List className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#0f172a]">Total soal</div>
                <div className="text-[11px] text-[#64748b] truncate">
                  Bab 3 · Barisan dan deret
                </div>
                <div className="h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden my-2.5">
                  <div className="h-full w-4/5 bg-[#f97316] rounded-full" />
                </div>
                <div className="text-xs font-semibold text-[#ea580c]">{totalSoal} soal</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#0f172a]">Sudah direview</div>
                <div className="text-[11px] text-[#64748b] truncate">
                  Siap dipakai di game
                </div>
                <div className="h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden my-2.5">
                  <div className="h-full w-3/4 bg-[#10b981] rounded-full" />
                </div>
                <div className="text-xs font-semibold text-[#059669]">
                  18 dari {totalSoal}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                <Star className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#0f172a]">Soal HOTS</div>
                <div className="text-[11px] text-[#64748b] truncate">Level C4–C6</div>
                <div className="h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden my-2.5">
                  <div className="h-full w-1/4 bg-[#3b82f6] rounded-full" />
                </div>
                <div className="text-xs font-semibold text-[#2563eb]">25%</div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#ffedd5] text-[#ea580c] font-bold text-sm flex items-center justify-center shrink-0">
                SC
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-[#0f172a]">Speed Clash</div>
                <div className="text-xs text-[#64748b] mb-2">
                  Adu cepat menjawab benar. Cocok untuk pemanasan.
                </div>
                <button
                  type="button"
                  onClick={() => setScreen('host-speed-clash')}
                  className="bg-[#10b981] hover:bg-[#059669] text-white text-[11px] font-semibold px-3.5 py-1 rounded-md cursor-pointer"
                >
                  Pakai
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setScreen('smartboard-territory')}
              className="w-full text-left bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-center gap-4 hover:border-[#cbd5e1] cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#fde68a] text-[#78350f] font-bold text-sm flex items-center justify-center shrink-0">
                <BajakSawahLogo className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-[#0f172a]">Territory Grid · Bajak Sawah</div>
                <div className="text-xs text-[#64748b] truncate">
                  Tim membajak & merebut petak warna. Petak lumbung bernilai paling tinggi.
                </div>
              </div>
            </button>
          </section>
        </main>

        <aside className="w-full lg:w-64 space-y-4 shrink-0">
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#0f172a]">Notifikasi</h2>
              <span className="text-xs text-[#94a3b8]">→</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0f172a]">Sesi selesai</div>
                <div className="text-[11px] text-[#64748b]">Speed Clash · XI IPA 2</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#fffbeb] text-[#d97706] flex items-center justify-center shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0f172a]">6 soal perlu review</div>
                <div className="text-[11px] text-[#64748b]">Hasil impor CSV Bab 3</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
                <Monitor className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0f172a]">
                  Smartboard terhubung
                </div>
                <div className="text-[11px] text-[#64748b]">Ruang XI IPA 2</div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#0f172a]">Tips hari ini</h2>
              <span className="text-xs text-[#94a3b8]">→</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#ffedd5] text-[#ea580c] flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0f172a] leading-snug">
                  Campur level Bloom
                </div>
                <p className="text-[11px] text-[#64748b] leading-relaxed mt-0.5">
                  Sisipkan 1 soal C4 tiap 3 soal C1–C2 supaya siswa tidak hanya adu cepat.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#0f172a]">Ajakan berbagi soal</h2>
              <span className="text-xs text-[#94a3b8]">→</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#2563eb] font-bold text-[11px] flex items-center justify-center shrink-0">
                GM
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#0f172a]">[Guru Matematika]</div>
                <div className="text-[11px] text-[#64748b] leading-snug mb-2">
                  Membagikan 30 soal Bab 2 Fungsi
                </div>
                <button
                  type="button"
                  onClick={() => setScreen('tambah-soal')}
                  className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[11px] font-semibold px-3 py-1 rounded-md cursor-pointer"
                >
                  Terima
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] text-[#0284c7] font-bold text-[11px] flex items-center justify-center shrink-0">
                GF
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#0f172a]">[Guru Fisika]</div>
                <div className="text-[11px] text-[#64748b] leading-snug mb-2">
                  Mengajak menyusun soal lintas mapel
                </div>
                <button
                  type="button"
                  onClick={() => setScreen('tambah-soal')}
                  className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[11px] font-semibold px-3 py-1 rounded-md cursor-pointer"
                >
                  Terima
                </button>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}