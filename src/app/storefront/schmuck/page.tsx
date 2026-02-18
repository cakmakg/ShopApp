'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const juwelierProducts = [
    { id: '1', name: 'Diamant-Solitär-Ring', desc: '0.5 Karat, 14K Weißgold, GIA-zertifiziert', price: 2499, oldPrice: 2999, karat: '14K', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop' },
    { id: '2', name: 'Goldene Halskette', desc: '18K Gelbgold, 45cm Venezianerkette', price: 899, karat: '18K', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop' },
    { id: '3', name: 'Perlenohrringe', desc: 'Süßwasserperlen, 925er Silber Fassung', price: 189, oldPrice: 249, karat: '925', badge: 'Neu', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop' },
    { id: '4', name: 'Tennis-Armband', desc: '2 Karat Gesamtgewicht, 18K Weißgold', price: 3499, karat: '18K', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop' },
    { id: '5', name: 'Verlobungsring Classic', desc: '1 Karat Brillant, Platinfassung', price: 5999, oldPrice: 6999, karat: 'Platin', badge: 'Premium', img: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400&h=400&fit=crop' },
    { id: '6', name: 'Gold-Creolen', desc: '14K Roségold, 25mm Durchmesser', price: 449, karat: '14K', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop' },
];

export default function JuwelierStorefront() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Demo-Banner */}
            <div className="bg-amber-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Juwelier & Schmuck</strong>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b bg-black/95 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=40&h=40&fit=crop" alt="Goldschein Logo" className="h-9 w-9 rounded-full object-cover border border-amber-500" />
                        <span className="text-xl font-bold text-white tracking-wider">GOLDSCHEIN</span>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm text-gray-300 hover:text-amber-400 tracking-wide">Ringe</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-amber-400 tracking-wide">Ketten</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-amber-400 tracking-wide">Ohrringe</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-amber-400 tracking-wide">Armbänder</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-amber-400 tracking-wide">Verlobung</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" aria-label="Warenkorb">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1515562141589-67f0d999b439?w=1600&h=700&fit=crop" alt="Schmuck Kollektion" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                </div>
                <div className="container relative mx-auto px-4 py-24 lg:py-36 text-center">
                    <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30">Exklusive Kollektion 2026</Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Zeitlose <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Eleganz</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        Handgefertigter Schmuck aus edlen Materialien. Jedes Stück erzählt eine Geschichte von Handwerkskunst und Leidenschaft.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold hover:from-amber-600 hover:to-yellow-600 px-8">Kollektion entdecken</Button>
                        <Button size="lg" variant="outline" className="border-gray-500 text-gray-200 hover:bg-white/10 px-8">Beratung buchen</Button>
                    </div>
                </div>
            </section>

            {/* Goldpreis Ticker */}
            <div className="bg-black py-3 border-y border-amber-900/50">
                <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-sm">
                    <span className="text-gray-500">Goldpreis aktuell:</span>
                    <span className="text-amber-400 font-semibold">Gold 24K: €58,42/g</span>
                    <span className="text-amber-300 font-semibold">Gold 18K: €43,82/g</span>
                    <span className="text-gray-400 font-semibold">Silber 925: €0,74/g</span>
                </div>
            </div>

            {/* Products */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Unsere Auswahl</h2>
                        <p className="mt-3 text-gray-500">Zertifizierte Qualität. Lebenslange Garantie.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {juwelierProducts.map((p) => (
                            <Card key={p.id} className="group overflow-hidden border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="relative aspect-square overflow-hidden bg-neutral-100">
                                        <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        {p.badge && (
                                            <Badge className="absolute top-3 left-3 bg-amber-500 text-white">{p.badge}</Badge>
                                        )}
                                        <Badge variant="outline" className="absolute top-3 right-3 bg-white/90 border-amber-400 text-amber-600">{p.karat}</Badge>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">{p.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-xl font-bold text-gray-900">€{p.price.toLocaleString('de-DE')}</span>
                                                {p.oldPrice && <span className="ml-2 text-sm text-gray-400 line-through">€{p.oldPrice.toLocaleString('de-DE')}</span>}
                                            </div>
                                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">In den Warenkorb</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="bg-neutral-100 py-12">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div><div className="text-3xl mb-2"><svg className="h-8 w-8 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg></div><div className="font-semibold text-gray-900">GIA Zertifiziert</div><div className="text-sm text-gray-500">Geprüfte Edelsteine</div></div>
                    <div><div className="text-3xl mb-2"><svg className="h-8 w-8 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.504 1.036-1.124a55.093 55.093 0 00-4.046-16.427A1.126 1.126 0 0018.77 0H14.298a1.126 1.126 0 00-1.076.804l-1.444 4.54A55.218 55.218 0 008.048 16.25h-3.423" /></svg></div><div className="font-semibold text-gray-900">Versicherter Versand</div><div className="text-sm text-gray-500">Kostenlos ab €200</div></div>
                    <div><div className="text-3xl mb-2"><svg className="h-8 w-8 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg></div><div className="font-semibold text-gray-900">30 Tage Rückgabe</div><div className="text-sm text-gray-500">Kein Risiko</div></div>
                    <div><div className="text-3xl mb-2"><svg className="h-8 w-8 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div className="font-semibold text-gray-900">Lebenslange Garantie</div><div className="text-sm text-gray-500">Auf alle Stücke</div></div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 text-gray-400">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=32&h=32&fit=crop" alt="" className="h-8 w-8 rounded-full object-cover border border-amber-500" />
                        <span className="text-xl font-bold text-white tracking-wider">GOLDSCHEIN</span>
                    </div>
                    <p className="text-sm">Handgefertigter Schmuck seit 1987. Qualität, der Sie vertrauen können.</p>
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
                        <p>© 2026 Goldschein Juwelier. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
