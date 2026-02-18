'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const tours = [
    { id: '1', name: 'Kappadokien Ballonfahrt', dest: 'Türkei', days: 5, price: 899, oldPrice: 1199, badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=400&h=300&fit=crop', rating: 4.9, reviews: 342 },
    { id: '2', name: 'Santorini & Mykonos', dest: 'Griechenland', days: 7, price: 1299, badge: 'Neu', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop', rating: 4.8, reviews: 128 },
    { id: '3', name: 'Safari Serengeti', dest: 'Tansania', days: 10, price: 2499, img: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=400&h=300&fit=crop', rating: 5.0, reviews: 89 },
    { id: '4', name: 'Nordlicht-Expedition', dest: 'Island', days: 6, price: 1599, oldPrice: 1899, badge: 'Frühbucher -15%', img: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop', rating: 4.9, reviews: 215 },
    { id: '5', name: 'Toskana Genussreise', dest: 'Italien', days: 8, price: 1099, img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400&h=300&fit=crop', rating: 4.7, reviews: 178 },
    { id: '6', name: 'Malediven All-Inclusive', dest: 'Malediven', days: 7, price: 1999, oldPrice: 2499, badge: 'Last Minute', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop', rating: 4.9, reviews: 456 },
];

const stats = [
    { value: '15.000+', label: 'Zufriedene Reisende' },
    { value: '120+', label: 'Reiseziele weltweit' },
    { value: '4.9/5', label: 'Durchschnittsbewertung' },
    { value: '24/7', label: 'Kundenservice' },
];

export default function ReisenStorefront() {
    return (
        <div className="min-h-screen bg-sky-50/30">
            {/* Demo-Banner */}
            <div className="bg-sky-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Reisebüro</strong>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/95 border-b backdrop-blur-md shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=40&h=40&fit=crop" alt="FernwehReisen Logo" className="h-9 w-9 rounded-full object-cover" />
                        <span className="text-xl font-bold text-sky-700">FernwehReisen</span>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600">Reiseziele</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600">Rundreisen</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600">Last Minute</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600">Über uns</a>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="border-sky-300 text-sky-600 hover:bg-sky-50">Beratung</Button>
                        <Button className="bg-sky-600 hover:bg-sky-700 text-white">Reise planen</Button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop" alt="Traumstrand" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-sky-800/50 to-sky-900/70" />
                </div>
                <div className="container relative mx-auto px-4 py-24 lg:py-36 text-center">
                    <Badge className="mb-6 bg-sky-500/20 text-sky-200 border-sky-400/30">Über 120 Reiseziele weltweit</Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                        Die Welt <span className="text-sky-300">entdecken</span>
                    </h1>
                    <p className="mt-6 text-lg text-sky-200/80 max-w-2xl mx-auto">
                        Unvergessliche Reiseerlebnisse — professionell organisiert, persönlich betreut. Von der Planung bis zur Rückkehr.
                    </p>

                    {/* Search Box */}
                    <div className="mt-10 mx-auto max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-left">
                                <label className="text-xs text-sky-200 mb-1 block">Reiseziel</label>
                                <input type="text" placeholder="Wohin möchten Sie?" className="w-full rounded-lg bg-white/20 px-3 py-2.5 text-sm text-white placeholder:text-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            </div>
                            <div className="text-left">
                                <label className="text-xs text-sky-200 mb-1 block">Reisedatum</label>
                                <input type="text" placeholder="Wann?" className="w-full rounded-lg bg-white/20 px-3 py-2.5 text-sm text-white placeholder:text-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            </div>
                            <div className="text-left">
                                <label className="text-xs text-sky-200 mb-1 block">Reisende</label>
                                <input type="text" placeholder="2 Erwachsene" className="w-full rounded-lg bg-white/20 px-3 py-2.5 text-sm text-white placeholder:text-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            </div>
                            <Button className="bg-sky-500 hover:bg-sky-400 text-white mt-auto h-[42px]">
                                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                Suchen
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="bg-white py-8 border-b">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((s) => (
                        <div key={s.label}><div className="text-2xl font-bold text-sky-700">{s.value}</div><div className="text-sm text-gray-500">{s.label}</div></div>
                    ))}
                </div>
            </div>

            {/* Tours */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Beliebte Reisen</h2>
                        <p className="mt-3 text-gray-500">Handverlesene Reiseerlebnisse für jeden Geschmack</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {tours.map((t) => (
                            <Card key={t.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img src={t.img} alt={t.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        {t.badge && (
                                            <Badge className={`absolute top-3 left-3 ${t.badge.includes('Last') ? 'bg-red-500' : t.badge.includes('Früh') ? 'bg-orange-500' : t.badge === 'Neu' ? 'bg-sky-500' : 'bg-sky-600'} text-white`}>{t.badge}</Badge>
                                        )}
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium text-gray-700">{t.days} Tage</div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs text-sky-600 font-medium">{t.dest}</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-amber-500">★ {t.rating} ({t.reviews})</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-gray-400">ab</span>
                                                <span className="ml-1 text-xl font-bold text-gray-900">€{t.price.toLocaleString('de-DE')}</span>
                                                {t.oldPrice && <span className="ml-2 text-sm text-gray-400 line-through">€{t.oldPrice.toLocaleString('de-DE')}</span>}
                                                <span className="text-xs text-gray-400 ml-1">/ Person</span>
                                            </div>
                                            <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">Details</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 text-gray-400">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=32&h=32&fit=crop" alt="" className="h-8 w-8 rounded-full object-cover" />
                        <span className="text-xl font-bold text-white">FernwehReisen</span>
                    </div>
                    <p className="text-sm">Ihr Partner für unvergessliche Reiseerlebnisse seit 2015.</p>
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
                        <p>© 2026 FernwehReisen. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
