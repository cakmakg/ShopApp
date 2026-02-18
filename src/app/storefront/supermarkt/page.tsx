'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const categories = [
    { img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&h=120&fit=crop', name: 'Obst & Gemüse', count: 124 },
    { img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=120&h=120&fit=crop', name: 'Fleisch & Wurst', count: 86 },
    { img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=120&h=120&fit=crop', name: 'Milchprodukte', count: 65 },
    { img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&h=120&fit=crop', name: 'Bäckerei', count: 42 },
    { img: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=120&h=120&fit=crop', name: 'Getränke', count: 93 },
    { img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=120&h=120&fit=crop', name: 'Haushalt', count: 58 },
];

const products = [
    { id: '1', name: 'Bio-Avocado', unit: '2 Stück', price: 2.49, oldPrice: 3.29, badge: 'Angebot', img: 'https://images.unsplash.com/photo-1523049673857-eb18f1d80f67?w=300&h=300&fit=crop' },
    { id: '2', name: 'Frische Vollmilch', unit: '1 Liter', price: 1.19, img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop' },
    { id: '3', name: 'Bio-Eier Freiland', unit: '10 Stück', price: 3.69, badge: 'Bio', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop' },
    { id: '4', name: 'Mehrkorn-Brot', unit: '500g', price: 2.99, img: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=300&h=300&fit=crop' },
    { id: '5', name: 'Rinderhackfleisch', unit: '500g', price: 4.49, oldPrice: 5.99, badge: '-25%', img: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=300&h=300&fit=crop' },
    { id: '6', name: 'Griechischer Joghurt', unit: '500g', price: 1.89, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop' },
    { id: '7', name: 'Bio-Bananen', unit: '1 kg', price: 1.99, badge: 'Bio', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop' },
    { id: '8', name: 'Apfelsaft naturtrüb', unit: '1 Liter', price: 1.69, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
];

export default function SupermarktStorefront() {
    return (
        <div className="min-h-screen bg-white">
            {/* Demo-Banner */}
            <div className="bg-green-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Online-Supermarkt</strong>
            </div>

            {/* Top Bar */}
            <div className="bg-green-700 text-white text-sm py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span>Kostenlose Lieferung ab €50 | Lieferung innerhalb von 2–4 Stunden</span>
                    <span className="hidden md:inline">Liefergebiet: Berlin & Umgebung</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=40&h=40&fit=crop" alt="FrischMarkt Logo" className="h-9 w-9 rounded-full object-cover" />
                        <span className="text-xl font-bold text-green-700">FrischMarkt</span>
                    </div>
                    <div className="hidden md:flex flex-1 mx-8">
                        <div className="relative w-full max-w-xl">
                            <input type="text" placeholder="Was suchen Sie? z.B. Milch, Brot, Obst..." className="w-full rounded-full border border-gray-300 py-2.5 pl-4 pr-12 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <button className="absolute right-1 top-1 rounded-full bg-green-600 p-2 text-white hover:bg-green-700" aria-label="Suchen">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button className="bg-green-600 hover:bg-green-700 relative">
                            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            Warenkorb
                            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">3</Badge>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Banner */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1506617420156-8e4536971650?w=1600&h=500&fit=crop" alt="Frische Lebensmittel" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-600/60" />
                </div>
                <div className="container relative mx-auto px-4 py-16 flex items-center justify-between">
                    <div className="text-white max-w-lg">
                        <Badge className="mb-4 bg-yellow-400 text-black">Wochenangebot</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold">Frische Lebensmittel direkt zu Ihnen!</h1>
                        <p className="mt-4 text-green-100 text-lg">Qualitätsprodukte vom regionalen Erzeuger. Bequem online bestellen und bis zur Haustür liefern lassen.</p>
                        <Button size="lg" className="mt-6 bg-white text-green-700 hover:bg-green-50 font-semibold">Jetzt einkaufen</Button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategorien</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {categories.map((cat) => (
                            <button key={cat.name} className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all bg-white">
                                <img src={cat.img} alt={cat.name} className="w-16 h-16 rounded-full object-cover mb-2" />
                                <span className="font-medium text-sm text-gray-900">{cat.name}</span>
                                <span className="text-xs text-gray-400">{cat.count} Artikel</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Aktuelle Angebote</h2>
                        <Button variant="outline">Alle Angebote →</Button>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        {products.map((p) => (
                            <Card key={p.id} className="group hover:shadow-md transition-shadow">
                                <CardContent className="p-0">
                                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                                        <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        {p.badge && (
                                            <Badge className={`absolute top-2 left-2 ${p.badge === 'Bio' ? 'bg-green-600' : 'bg-red-500'} text-white`}>{p.badge}</Badge>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 text-sm">{p.name}</h3>
                                        <p className="text-xs text-gray-400">{p.unit}</p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div>
                                                <span className="text-lg font-bold text-gray-900">€{p.price.toFixed(2)}</span>
                                                {p.oldPrice && <span className="ml-1 text-xs text-gray-400 line-through">€{p.oldPrice.toFixed(2)}</span>}
                                            </div>
                                            <button className="rounded-full bg-green-600 p-2 text-white hover:bg-green-700 transition-colors" aria-label={`${p.name} in den Warenkorb`}>
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                            </button>
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
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=32&h=32&fit=crop" alt="" className="h-8 w-8 rounded-full object-cover" />
                        <span className="text-xl font-bold text-white">FrischMarkt</span>
                    </div>
                    <p className="text-sm">Ihr Online-Supermarkt für frische und regionale Produkte.</p>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a href="#" className="hover:text-white">Impressum</a>
                        <a href="#" className="hover:text-white">Datenschutz</a>
                        <a href="#" className="hover:text-white">AGB</a>
                        <a href="#" className="hover:text-white">Kontakt</a>
                    </div>
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
                        <p>© 2026 FrischMarkt. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
