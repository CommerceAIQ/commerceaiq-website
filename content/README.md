# Site içeriklerini düzenleme

Web sitesini güncellemek için bu klasördeki **JSON dosyalarını** düzenleyin. React/TypeScript sayfa koduna dokunmanız gerekmez. Değişiklikleri GitHub `main` branch'ine pushladığınızda Vercel siteyi yeniden oluşturur ve yayınlar. Dosyayı yalnızca bilgisayarda kaydetmek canlı siteyi değiştirmez.

| Dosya | Düzenlediğiniz bilgiler |
| --- | --- |
| `project.json` | Proje adı ve başlığı, marka yazısı, ekip üyeleri/bölümleri/rolleri, danışman, jüri, koordinatör, ekip onay notu |
| `documents.json` | Rapor başlıkları, teslim tarihleri, durumlar ve indirilecek dosya yolları; takvim de bu dosyayı kullanır |
| `site-text.json` | Ana sayfanın başlıkları, açıklamaları, bölüm etiketleri, iş akışı, yöntemler, dipnotlar ve arayüz metinleri |
| `objectives.json` | Araştırma hedefleri: her satır `["Başlık", "Açıklama"]` |
| `capabilities.json` | Planlanan özellikler: her satır `["Başlık", "Açıklama", "Tanımlayıcı"]` |
| `navigation.json` | Menü bağlantıları ve erişilebilir menü etiketleri |
| `seo.json` | Tarayıcı başlığı, arama motoru açıklaması, site adresi, dil ve sosyal paylaşım açıklaması |
| `chart.json` | Örnek grafiğin ay etiketleri ve mevcut yerleşimdeki x konumları |

`site-text.json` bölümleri: `overview` (giriş), `problem`, `system`, `research`, `capabilities`, `approach`, `team`, `documents`, `timeline`, `footer`, `chart`, `navigation`, `social` (paylaşım görseli).

## Örnek: danışman ve ekip

`project.json` içindeki `supervisor` değerini değiştirin. Her ekip üyesi ayrı bir nesnedir:

```json
{
  "name": "Ad Soyad",
  "department": "Software Engineering",
  "role": "Project member"
}
```

Listeye aynı yapıda nesne ekleyebilir veya çıkarabilirsiniz. `teamNote` ekip onayıyla ilgili açıklamadır; yalnızca gerçek onay durumuna göre güncelleyin. Aynı akademik bilgi tasarım gereği farklı yerlerde yazılıyorsa `site-text.json` içindeki ilgili görünür etiketleri de güncelleyin. `seo.json` ve `site-text.json` → `social` paylaşım metinlerini kontrol edin.

## Örnek: rapor yayınlama

1. Gerçek PDF'yi `public/documents/project-proposal.pdf` olarak ekleyin.
2. `documents.json` içinde ilgili kaydı güncelleyin:

```json
{
  "id": "01",
  "title": "Project Proposal",
  "due": "23 Oct 2026",
  "status": "Published",
  "file": "/documents/project-proposal.pdf",
  "note": "Project identity, team, academic supervision and project description."
}
```

3. Commit ve push yapın. Yeni deploy tamamlanınca indirme bağlantısı görünür.

Henüz rapor yoksa `file: null` kullanın. Geçerli durum değerleri tam olarak `Upcoming`, `In Progress`, `Published`. Görünen durum metinleri `site-text.json` → `documents.statusLabels` içindedir. Yayınlanmış raporun dosyası eksikse build açıklayıcı bir hatayla durur; çalışan son site yayında kalır. Yeni kayıt eklerseniz arşiv ve takvim otomatik büyür. `id` benzersiz olmalıdır.

## Örnek: ana başlık

`site-text.json` → `overview` içinde `headlineLine1`, `headlineLine2`, `headlineEmphasis` değerlerini değiştirin. Son değer italik gösterilir. Metinlerin sınırındaki boşlukları koruyun; HTML/JSX yazmayın. Alt bölümlerde aynı isimli başlık alanları bulunur.

## Kontrol ve yayın

```powershell
npm ci
npm run validate:content
npm run build
git add content public/documents
git commit -m "Update project content"
git push
```

GitHub üzerinden dosyayı açıp kalem simgesiyle düzenleyerek de `main` branch'ine commit yapabilirsiniz. Vercel otomatik deploy eder.

JSON: çift tırnak kullanın, son öğeden sonra virgül koymayın, mevcut alan adlarını silmeyin. Öğeleri ekleyip çıkarabilir, metinleri değiştirebilirsiniz. Menüdeki hedef kimlikleri mevcut bölüm kimlikleriyle eşleşmelidir. Build, JSON biçimini, TypeScript'in beklediği alanları, rapor durumlarını ve dosya yollarını kontrol eder.

Grafik sentetik örnektir; `chart.json` görselin metin etiketlerini yönetir, tahmin modeli çalıştırmaz. Şekil, renk, grid, yeni sayfa veya yeni bölüm türü gibi tasarım değişiklikleri kod düzenlemesi gerektirir.
