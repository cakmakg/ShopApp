import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blueprints = [
  {
    id: 'health-beauty',
    name: 'Gesundheit & Schönheit',
    storeName: 'VitaGlow',
    preview: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&h=80&fit=crop',
    description: 'Für Nahrungsergänzungsmittel, Hautpflege und Wellness-Shops',
    features: ['Produkt-Bundles', 'Abo-Unterstützung', 'Kundenbewertungen'],
    color: 'from-emerald-500 to-teal-500',
    href: '/storefront',
    ready: true,
  },
  {
    id: 'schmuck',
    name: 'Juwelier & Schmuck',
    storeName: 'Goldschein',
    preview: 'https://images.unsplash.com/photo-1515562141589-67f0d999b439?w=80&h=80&fit=crop',
    description: 'Speziell für Gold-, Silber- und Edelstein-Geschäfte',
    features: ['Goldpreis-Ticker', 'Karat-Filter', 'Zertifikat-Anzeige'],
    color: 'from-amber-500 to-yellow-500',
    href: '/storefront/schmuck',
    ready: true,
  },
  {
    id: 'supermarkt',
    name: 'Online-Supermarkt',
    storeName: 'FrischMarkt',
    preview: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=80&h=80&fit=crop',
    description: 'Optimiert für Online-Supermärkte und Lebensmittellieferungen',
    features: ['Schneller Warenkorb', 'Kategorie-Baum', 'Flash-Angebote'],
    color: 'from-green-500 to-emerald-500',
    href: '/storefront/supermarkt',
    ready: true,
  },
  {
    id: 'mode',
    name: 'Modegeschäft',
    storeName: 'Stilwerk',
    preview: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=80&h=80&fit=crop',
    description: 'Moderne Vorlage für Mode- und Bekleidungsmarken',
    features: ['Größen-/Farbvarianten', 'Lookbook', 'Wunschliste'],
    color: 'from-pink-500 to-rose-500',
    href: '/storefront/mode',
    ready: true,
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    storeName: 'Bella Tavola',
    preview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop',
    description: 'Online-Bestellung, Speisekarten und Tischreservierung',
    features: ['Online-Bestellung', 'Tischreservierung', 'Digitale Speisekarte'],
    color: 'from-orange-500 to-red-500',
    href: '/storefront/restaurant',
    ready: true,
  },
  {
    id: 'reisen',
    name: 'Reisebüro',
    storeName: 'FernwehReisen',
    preview: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&h=80&fit=crop',
    description: 'Buchungssystem für Reise- und Tourismusbüros',
    features: ['Tourkalender', 'Online-Buchung', 'Reiseziel-Suche'],
    color: 'from-sky-500 to-cyan-500',
    href: '/storefront/reisen',
    ready: true,
  },
];

const features = [
  { icon: '🏗️', title: 'Branchenvorlagen', desc: 'Fertige Vorlagen für jede Branche — in Minuten startklar.' },
  { icon: '🎨', title: 'Anpassbares Design', desc: 'Farben, Schriften und Layout nach Ihren Wünschen.' },
  { icon: '💳', title: 'Integrierte Zahlungen', desc: 'Stripe, PayPal und mehr — sofort einsatzbereit.' },
  { icon: '📊', title: 'Echtzeit-Analytics', desc: 'Verkäufe, Besucher und Conversion im Überblick.' },
  { icon: '🔒', title: 'Sicher & Schnell', desc: 'SSL, DSGVO-konform und blitzschnelle Ladezeiten.' },
  { icon: '📱', title: 'Responsive Design', desc: 'Perfekte Darstellung auf Smartphone, Tablet und Desktop.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-xl font-bold text-white">
              S
            </div>
            <span className="text-xl font-bold text-white">Shophub</span>
            <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
              Beta
            </Badge>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Hauptnavigation">
            <a href="#vorlagen" className="text-sm text-slate-400 hover:text-white transition-colors">Vorlagen</a>
            <a href="#funktionen" className="text-sm text-slate-400 hover:text-white transition-colors">Funktionen</a>
            <a href="#preise" className="text-sm text-slate-400 hover:text-white transition-colors">Preise</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                Anmelden
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                Shop erstellen
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400">
            🚀 Alle 6 Branchenvorlagen jetzt live!
          </Badge>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Ihre Branche.
            </span>
            <br />
            Ihr Online-Shop.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Juwelier, Supermarkt, Reisebüro oder Modeboutique — egal in welcher Branche,
            eröffnen Sie Ihren Online-Shop in wenigen Minuten mit maßgeschneiderten Vorlagen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#vorlagen">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-lg hover:from-emerald-600 hover:to-teal-600">
                Demo-Shops ansehen
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
            </a>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-slate-600 px-8 text-lg text-slate-300 hover:bg-slate-800">
                Kostenlos starten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blueprints */}
      <section id="vorlagen" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Branchenvorlagen
            </h2>
            <p className="mt-4 text-slate-400">
              Maßgeschneiderte E-Commerce-Vorlagen für jede Branche — sofort einsatzbereit
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blueprints.map((bp) => (
              <Card
                key={bp.id}
                className="group relative overflow-hidden border-slate-700/50 bg-slate-800/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-slate-600"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${bp.color}`} />

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={bp.preview} alt={bp.name} className="h-10 w-10 rounded-lg object-cover" />
                      <div>
                        <CardTitle className="text-white">{bp.name}</CardTitle>
                        <span className="text-xs text-slate-500">{bp.storeName}</span>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400">Live</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-slate-400">{bp.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {bp.features.map((feature, index) => (
                      <span key={index} className="rounded-full bg-slate-700/50 px-2 py-1 text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href={bp.href}>
                    <Button className={`w-full bg-gradient-to-r ${bp.color} text-white`}>
                      Demo ansehen →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funktionen" className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Warum Shophub?</h2>
            <p className="mt-4 text-slate-400">Alles, was Sie für einen erfolgreichen Online-Shop brauchen</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 hover:border-slate-600 transition-colors">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Bereit, Ihren Shop zu eröffnen?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Starten Sie noch heute kostenlos — keine Kreditkarte erforderlich.
            Upgraden Sie jederzeit, wenn Ihr Geschäft wächst.
          </p>
          <Link href="/login">
            <Button size="lg" className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 px-12 text-lg hover:from-emerald-600 hover:to-teal-600">
              Kostenlos starten 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-sm font-bold text-white">S</div>
                <span className="font-bold text-white">Shophub</span>
              </div>
              <p className="text-sm text-slate-500">Die Multi-Tenant E-Commerce-Plattform für jede Branche.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Produkt</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#vorlagen" className="hover:text-white">Vorlagen</a></li>
                <li><a href="#funktionen" className="hover:text-white">Funktionen</a></li>
                <li><a href="#preise" className="hover:text-white">Preise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white">Impressum</a></li>
                <li><a href="#" className="hover:text-white">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Kontakt</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>📧 info@shophub.de</li>
                <li>📞 +49 30 123 456 78</li>
                <li>📍 Berlin, Deutschland</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 Shophub. Multi-Tenant E-Commerce Plattform. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
