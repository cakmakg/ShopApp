'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const menuCategories = [
    { img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=60&h=60&fit=crop', name: 'Vorspeisen' },
    { img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=60&h=60&fit=crop', name: 'Hauptgerichte' },
    { img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=60&h=60&fit=crop', name: 'Pizza' },
    { img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=60&h=60&fit=crop', name: 'Sushi' },
    { img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=60&h=60&fit=crop', name: 'Desserts' },
    { img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=60&h=60&fit=crop', name: 'Getränke' },
];

const menuItems = [
    { id: '1', name: 'Bruschetta Classica', desc: 'Geröstetes Ciabatta mit Tomaten, Basilikum und Knoblauchöl', price: 8.90, badge: 'Beliebt', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=200&fit=crop', time: '10 min' },
    { id: '2', name: 'Tagliatelle al Tartufo', desc: 'Frische Bandnudeln mit schwarzem Trüffel in Sahnesauce', price: 18.50, badge: 'Chef-Empfehlung', img: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=200&h=200&fit=crop', time: '20 min' },
    { id: '3', name: 'Margherita Napoletana', desc: 'San-Marzano-Tomaten, Büffelmozzarella, frisches Basilikum', price: 12.90, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop', time: '15 min' },
    { id: '4', name: 'Lachsfilet gegrillt', desc: 'Mit Zitronen-Dill-Sauce und Gemüse der Saison', price: 22.50, img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop', time: '25 min' },
    { id: '5', name: 'Tiramisu Classico', desc: 'Mascarpone, Espresso, Amaretto, Kakaopulver', price: 7.90, badge: 'Hausgemacht', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop', time: '—' },
    { id: '6', name: 'Rindersteak Medium', desc: '300g argentinisches Rumpsteak mit Kräuterbutter', price: 28.90, oldPrice: 34.90, badge: 'Angebot', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=200&h=200&fit=crop', time: '30 min' },
];

export default function RestaurantStorefront() {
    return (
        <div className="min-h-screen bg-orange-50/30">
            {/* Demo-Banner */}
            <div className="bg-orange-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Restaurant</strong>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=40&h=40&fit=crop" alt="Bella Tavola Logo" className="h-9 w-9 rounded-full object-cover" />
                        <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Bella Tavola</span>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-600">Speisekarte</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-600">Über uns</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-600">Reservierung</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-600">Kontakt</a>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">Tisch reservieren</Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            Bestellen
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=700&fit=crop" alt="Restaurant Interieur" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                </div>
                <div className="container relative mx-auto px-4 py-24 lg:py-32 text-center">
                    <Badge className="mb-6 bg-orange-500/20 text-orange-200 border-orange-400/30">4.9/5 — 2.340 Bewertungen</Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                        La Dolce <span className="text-orange-300 italic">Vita</span>
                    </h1>
                    <p className="mt-6 text-lg text-orange-200/80 max-w-2xl mx-auto">
                        Authentische italienische Küche in Berlin-Mitte. Frische Zutaten, traditionelle Rezepte und eine Prise Leidenschaft.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 text-lg">Online bestellen</Button>
                        <Button size="lg" variant="outline" className="border-orange-400 text-orange-200 hover:bg-white/10 px-8 text-lg">Speisekarte</Button>
                    </div>
                </div>
            </section>

            {/* Open hours */}
            <div className="bg-white border-b py-4">
                <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-sm text-gray-600">
                    <span>Friedrichstraße 42, Berlin</span>
                    <span>Mo–Sa 11:30–23:00 | So 12:00–22:00</span>
                    <span className="hidden md:inline">+49 30 987 654 32</span>
                </div>
            </div>

            {/* Categories */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {menuCategories.map((cat) => (
                            <button key={cat.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                                <img src={cat.img} alt={cat.name} className="w-8 h-8 rounded-full object-cover" />
                                <span className="text-sm font-medium">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>Unsere Speisekarte</h2>
                    <p className="text-gray-500 text-center mb-10">Täglich frisch zubereitet mit Liebe</p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {menuItems.map((item) => (
                            <Card key={item.id} className="group hover:shadow-md transition-shadow border-gray-100">
                                <CardContent className="p-0">
                                    <div className="flex gap-4 p-5">
                                        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                {item.badge && (
                                                    <Badge className={`text-xs flex-shrink-0 ${item.badge === 'Angebot' ? 'bg-red-500' : item.badge === 'Chef-Empfehlung' ? 'bg-amber-500' : 'bg-orange-500'} text-white`}>{item.badge}</Badge>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-lg font-bold text-gray-900">€{item.price.toFixed(2)}</span>
                                                    {item.oldPrice && <span className="text-sm text-gray-400 line-through">€{item.oldPrice.toFixed(2)}</span>}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-400">{item.time}</span>
                                                    <button className="rounded-full bg-orange-600 p-1.5 text-white hover:bg-orange-700" aria-label={`${item.name} bestellen`}>
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                                    </button>
                                                </div>
                                            </div>
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
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=32&h=32&fit=crop" alt="" className="h-8 w-8 rounded-full object-cover" />
                        <span className="text-xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>Bella Tavola</span>
                    </div>
                    <p className="mt-4 text-sm">Authentische italienische Küche seit 2018.</p>
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
                        <p>© 2026 Bella Tavola. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
