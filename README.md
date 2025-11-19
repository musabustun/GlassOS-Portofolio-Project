# 🔮 GlassOS Portfolio

![GlassOS Banner](https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop)

> **"Web'in sınırlarını zorlayan, işletim sistemi deneyimini tarayıcıya taşıyan interaktif bir portfolyo."**

GlassOS, modern web teknolojilerini kullanarak geliştirilmiş, **macOS benzeri bir masaüstü deneyimi** sunan kişisel bir portfolyo projesidir. Kullanıcılar, statik bir web sitesi yerine, pencereleri yönetebildikleri, uygulamaları açıp kapatabildikleri ve yapay zeka ile etkileşime geçebildikleri canlı bir ekosistemi keşfederler.

---

## ✨ Özellikler

GlassOS, sadece görsel bir şölen değil, aynı zamanda işlevsel bir mikro işletim sistemidir:

### 🖥️ Masaüstü Ortamı
*   **Dinamik Pencere Yönetimi:** Pencereleri sürükleyin, boyutlandırın, küçültün veya tam ekran yapın. `z-index` yönetimi ile odaklanan pencere her zaman en öndedir.
*   **Glassmorphism Tasarım:** Modern, şeffaf ve bulanık arka plan efektleri ile premium bir his.
*   **Responsive Yapı:** Hem masaüstü hem de mobil cihazlar için optimize edilmiş özel arayüzler.

### 🚀 Entegre Uygulamalar
1.  **Finder (Dosya Gezgini):** İç içe klasör yapısı ve dosya önizleme desteği ile sanal bir dosya sistemi.
2.  **Gemini AI Asistan:** Google'ın Gemini modeli ile güçlendirilmiş, sizinle sohbet edebilen ve portfolyo hakkında soruları yanıtlayan akıllı asistan.
3.  **Resume (Özgeçmiş):** İnteraktif, yazdırılabilir ve şık bir özgeçmiş görüntüleyici.
4.  **Contact (İletişim):** Doğrudan masaüstünden e-posta gönderme simülasyonu.
5.  **Terminal:** (Yakında) Komut satırı sevenler için interaktif shell.
6.  **Projects:** (Yakında) Projelerin detaylı vitrini.

### 🎨 Görsel Detaylar
*   **Canlı Duvar Kağıtları:** Yüksek çözünürlüklü ve estetik arka planlar.
*   **Akıcı Animasyonlar:** `Framer Motion` ile güçlendirilmiş pürüzsüz geçişler ve açılış efektleri.
*   **Özelleştirilebilir Temalar:** Sistem genelinde tutarlı renk paletleri ve ikon setleri.

---

## 🛠️ Teknolojiler

Bu proje, modern frontend ekosisteminin en güçlü araçları kullanılarak inşa edilmiştir:

| Kategori | Teknoloji |
|----------|-----------|
| **Core** | ![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F05032?style=flat&logo=lucide&logoColor=white) |
| **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) |
| **AI** | ![Google Gemini](https://img.shields.io/badge/Google_Gemini_AI-8E75B2?style=flat&logo=google&logoColor=white) |

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler
*   Node.js (v18 veya üzeri)
*   npm veya yarn

### Adımlar

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/kullaniciadi/glassos-portfolio.git
    cd glassos-portfolio
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda Açın:**
    Terminalde belirtilen adrese gidin (genellikle `http://localhost:5173`).

---

## 📂 Proje Yapısı

```
glassos-portfolio/
├── src/
│   ├── components/          # UI Bileşenleri
│   │   ├── apps/            # Masaüstü Uygulamaları (Finder, Resume, vb.)
│   │   ├── MenuBar.tsx      # Üst Menü Çubuğu
│   │   ├── Taskbar.tsx      # Alt Görev Çubuğu
│   │   └── Window.tsx       # Pencere İskeleti (Wrapper)
│   ├── services/            # API Servisleri (Gemini AI vb.)
│   ├── App.tsx              # Ana Uygulama Mantığı
│   ├── constants.tsx        # Sabit Veriler (Dosya sistemi, proje listesi)
│   └── types.ts             # TypeScript Tip Tanımları
├── public/                  # Statik Dosyalar
└── ...
```

---

## 🧠 Yapay Zeka Entegrasyonu

GlassOS, **Google Gemini API** kullanarak ziyaretçilere kişiselleştirilmiş bir deneyim sunar. `Assistant` uygulaması üzerinden:
*   Portfolyo sahibinin yetenekleri hakkında bilgi alabilir,
*   Projeler hakkında detaylı sorular sorabilir,
*   Genel sohbetler gerçekleştirebilirsiniz.

> **Not:** API anahtarı güvenliği için `.env` dosyası kullanımı önerilir.

---

## 👤 Yazar

**Musab Yusuf Üstün**
*   Software Engineer & Full-Stack Developer
*   Uzmanlık: Next.js, Nuxt.js, React, Vue.js

---

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

---

<div align="center">
  <p>Made with ❤️ and ☕ by Musab</p>
</div>
