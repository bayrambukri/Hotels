# Hotels Projesi

Bu proje, otel rezervasyonları ve otel yönetimi için hazırlanmış tam yığın (full-stack) bir web uygulamasıdır. Proje iki ana bölümden oluşur: **backend** (Node.js/Express) ve **frontend** (React + Vite + TailwindCSS).

## Klasör Yapısı

```
Hotels/
├── backend/      # Node.js + Express API
├── frontend/     # React + Vite frontend
```

## Backend (API)
- **Teknolojiler:** Node.js, Express, Nodemon, CORS
- **Başlatma:**
  ```sh
  npm install
  npm start
  ```
- **Ana dosya:** `server.js`
- **Veri:** `data.json` dosyasında saklanır.
- **API:** Otel ve rezervasyon işlemleri için RESTful endpointler sağlar.

## Frontend (Kullanıcı Arayüzü)
- **Teknolojiler:** React, Vite, TailwindCSS, React Query, React Router, Axios
- **Başlatma:**
  ```sh
  npm install
  npm run dev
  ```
- **Ana dosya:** `src/App.jsx`
- **Sayfalar:**
  - Ana sayfa (oteller listesi)
  - Detay sayfası
  - Otel ekleme

## Kurulum ve Çalıştırma

1. **Backend**
   ```sh
   cd backend
   npm install
   npm start
   ```
2. **Frontend**
   ```sh
   cd frontend
   npm install
   npm run dev
   ```

## Özellikler
- Otel listeleme, filtreleme ve detay görüntüleme
- Yeni otel ekleme
- Modern ve responsive arayüz
- API ile veri alışverişi

## Geliştirici Notları
- Backend portu ve frontend portu `.env` dosyaları ile değiştirilebilir.
- Frontend, backend API'ye istek atar. CORS desteği aktiftir.

---

Daha fazla bilgi için ilgili klasörlerdeki dosyaları inceleyebilirsiniz.
Tanstack Query kütüphanesi kullanılarak oluşturulmuştur.
Eski adıyla react-query isimli kütüphane, react uygulamalarında apidan alınan verileri daha verimli ve kolay bir şekilde yönetmek için kullanılan yaygın bir kütüphanedir. Veri alımı, Veri Yönetimi, Önbellekleme (Caching) işlemlerini basitleştirir.
![Animation](https://github.com/user-attachments/assets/b9ae131a-8f7d-4ed8-9dad-3105d185e255)




