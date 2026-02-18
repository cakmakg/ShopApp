---
description: landingpage
---

# Antigravity Geliştirme İş Akışı (Workflows)

Senin görevin, bir talep aldığında aşağıdaki standart iş akışlarını takip etmektir. Her adım tamamlanmadan bir sonrakine geçilmemelidir.

# 🔄 İş Akışı (The Shophub Workflow)

Yeni bir özellik veya sektör (blueprint) eklerken izlenecek yol haritası.

### Adım 1: Planlama ve Şema Tasarımı
1. Yeni özelliğin hangi sektöre (veya genele) hitap ettiği belirlenir.
2. Eğer gerekiyorsa `schema.prisma` güncellenir ve `npx prisma migrate` çalıştırılır.

### Adım 2: Çekirdek (Core) ve Logic Geliştirme
1. Veri erişim katmanı (Services) yazılır.
2. `middleware.ts` üzerinden tenant kontrolü test edilir.
3. Business logic (örn: indirim kuponu hesaplama) testten geçirilir.

### Adım 3: UI ve Blueprint Entegrasyonu
1. Sektörel widget'lar (`src/blueprints/[sector]`) oluşturulur.
2. Admin paneline (Dashboard) ilgili ayarlar eklenir.
3. Storefront (mağaza ön yüzü) tasarımı güncellenir.

### Adım 4: Entegrasyon ve Test
1. Iyzico sandbox ortamında ödeme akışı test edilir.
2. Playwright veya Jest ile "Sepete Ekle -> Öde" döngüsü simüle edilir.

### Adım 5: Deployment ve Monitoring
1. Kod Vercel/Production ortamına basılır.
2. Tenant logları ve veritabanı performansı izlenir.

## 1. Yeni Özellik Geliştirme Akışı (Feature Workflow)
Bir kullanıcı yeni bir özellik istediğinde şu adımları izle:
1.  **Analiz:** Mevcut dosya yapısını incele. Bu özellik hangi bileşenleri (components) veya hookları etkiliyor?
2.  **Planlama:** Önce kodu yazma. Yapacağın değişiklikleri madde madde "Plan" başlığı altında açıkla.
3.  **Tip Tanımlama:** Önce TypeScript arayüzlerini (interfaces) oluştur.
4.  **Uygulama:** Kodu `agent/frontend-rules.md` kurallarına uygun şekilde yaz.
5.  **Doğrulama:** Yazdığın kodun yan etkilerini (side effects) kontrol et ve gerekirse bir test senaryosu öner.

## 2. Hata Ayıklama Akışı (Bug Fix Workflow)
Bir hata rapor edildiğinde:
1.  **Kök Neden Analizi:** Hatanın neden kaynaklandığını (state yönetimi mi, API hatası mı, rendering mi?) açıkla.
2.  **Reprodüksiyon:** Hatayı tetikleyen adımları simüle et.
3.  **Minimum Değişiklik:** Hatayı düzeltirken mevcut mimariyi bozmamaya çalış; en sade çözümü sun.
4.  **Kalıcı Çözüm:** Hatanın tekrar etmemesi için `try-catch` veya `error boundary` önerilerinde bulun.

## 3. Kod Refactor Akışı (Refactoring Workflow)
Kodun iyileştirilmesi istendiğinde:
1.  **Maliyet Analizi:** Refactor işleminin risklerini belirt.
2.  **Parçalı Geçiş:** Büyük dosyaları tek seferde değil, küçük mantıksal parçalara (hooks, helper functions) ayırarak ilerle.
3.  **Clean Code Check:** DRY (Don't Repeat Yourself) ve SOLID prensiplerine uygunluğu kontrol et.

## 4. Onay Mekanizması
Her büyük değişiklikten sonra kullanıcıya şu soruyu sor: 
*"Bu değişiklikleri onaylıyor musunuz? Onaylıyorsanız bir sonraki adım olan [TEST/DOKÜMANTASYON] aşamasına geçebilirim."*