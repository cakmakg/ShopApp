# Antigravity Asistan Yetkinlik Matrisi (Skills)

Bu dosya, senin sahip olduğun teknik derinliği ve uygulama becerilerini tanımlar. Bir görev icra ederken bu yetkinlik seviyelerini referans almalısın.

# ⚡ Gereken Yetenekler (The Shophub Skill Tree)

Shophub'ı inşa etmek için gereken teknik ve operasyonel uzmanlık alanları.

### 1. Frontend & UI Mastery
* **Next.js 14 (App Router):** Layout yapıları, Server Actions ve Streaming konularında derin uzmanlık.
* **Tailwind CSS:** Responsive tasarım ve sektörel temaların (Blueprints) dinamik yönetimi.
* **State Management:** Kompleks sepet ve ödeme süreçleri için `Zustand` veya `React Context`.

### 2. Backend & Database Architecture
* **Prisma & PostgreSQL:** İlişkisel veritabanı tasarımı ve performanslı query yazımı.
* **Multi-tenant Logic:** Subdomain ve Custom Domain yönlendirme mantığı (Middleware seviyesinde).

### 3. Payment & Integration (Fintech)
* **Iyzico API:** 3D Secure, abonelik (recurring payments) ve pazar yeri modeli entegrasyonu.
* **Webhook Handling:** Ödeme sonuçlarının asenkron olarak işlenmesi.

### 4. DevOps & Networking
* **DNS Management:** CNAME yönlendirmeleri ve Wildcard SSL sertifikası yönetimi.
* **Vercel/Cloud Deployment:** Edge functions ve environment variables yönetimi.

## 1. Veri Yönetimi ve API Entegrasyonu (Data Mastery)
- **Asenkron Yönetim:** `async/await` yapısını hata yönetimi (try-catch) ile birlikte kusursuz kullanma yeteneği.
- **State Senkronizasyonu:** Sunucu verisi (Server State) ile yerel veriyi (Client State) karıştırmadan yönetme (React Query veya SWR prensiplerini uygulama).
- **Veri Dönüştürme:** Backend'den gelen ham veriyi, frontend bileşenlerinin ihtiyaç duyduğu temiz "view model" yapısına dönüştürme uzmanlığı.

## 2. UI/UX Uygulama Uzmanlığı (Component Craftsmanship)
- **Piksel Hassasiyeti:** Tasarım sistemine (Design System) sadık kalarak, tutarlı boşluk (spacing), renk ve tipografi uygulama.
- **Etkileşim Tasarımı:** Kullanıcı deneyimini artırmak için loading skeleton'lar, empty state'ler ve mikro-etkileşimler (framer-motion vb.) önerme.
- **Form Sihirbazlığı:** Karmaşık, çok adımlı formları performans kaybı yaşatmadan (React Hook Form gibi kütüphanelerle) kurgulama.

## 3. Mimari Öngörü (Architectural Vision)
- **Ölçeklenebilirlik:** Küçük bir bileşeni yazarken bile, o bileşenin ileride nasıl büyüyebileceğini öngörüp "prop" yapısını buna göre esnek tasarlama.
- **Bağımlılık Yönetimi:** Üçüncü parti kütüphaneleri projeye dahil etmeden önce "bundle size" ve performans etkisini analiz etme.
- **Kod Soyutlama:** Tekrar eden mantıkları (logic) yakalayıp bunları `utils` veya `hooks` seviyesine taşıma becerisi.

## 4. Debugging ve Analitik Problem Çözme
- **Hata İzleme:** Konsol hatalarını sadece okumakla kalmayıp, hatanın "stack trace" analizini yaparak kök nedeni (root cause) saniyeler içinde bulma.
- **Performans Profilleme:** Chrome DevTools mantığıyla React bileşenlerindeki gereksiz render operasyonlarını tespit etme ve `React.memo` gibi araçlarla optimize etme.

## 5. Teknik Dokümantasyon
- **Anlaşılır Kod:** Kodun kendisini bir doküman gibi yazma (Self-documenting code).
- **JSDoc Kullanımı:** Karmaşık fonksiyonlar için parametreleri ve dönüş tiplerini açıklayan standart JSDoc yorumları ekleme.