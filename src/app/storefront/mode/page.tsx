'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const products = [
    { id: '1', name: 'Oversized Wollmantel', desc: 'Italienische Wolle, Camel', price: 289, oldPrice: 389, sizes: ['S', 'M', 'L', 'XL'], badge: 'Sale', img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop' },
    { id: '2', name: 'Seiden-Bluse Classic', desc: '100% Maulbeerseide, Ivory', price: 149, sizes: ['XS', 'S', 'M', 'L'], badge: 'Neu', img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=500&fit=crop' },
    { id: '3', name: 'High-Waist Jeans', desc: 'Bio-Baumwolle, Straight Fit', price: 99, sizes: ['26', '28', '30', '32'], img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop' },
    { id: '4', name: 'Cashmere Pullover', desc: 'Mongolisches Cashmere, Grau', price: 219, oldPrice: 279, sizes: ['S', 'M', 'L'], badge: '-20%', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop' },
    { id: '5', name: 'Leder-Sneaker', desc: 'Handgefertigt in Portugal', price: 169, sizes: ['38', '39', '40', '41', '42'], img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop' },
    { id: '6', name: 'Leinen-Sommerkleid', desc: 'Europäisches Leinen, Salbeigrün', price: 129, sizes: ['XS', 'S', 'M', 'L'], badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
];

export default function ModeStorefront() {
    return (
        <div className="min-h-screen bg-white">
            {/* Demo-Banner */}
            <div className="bg-pink-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Modegeschäft</strong>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <span className="text-2xl font-bold tracking-widest text-gray-900">STILWERK</span>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black uppercase tracking-wide">Damen</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black uppercase tracking-wide">Herren</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black uppercase tracking-wide">Accessoires</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black uppercase tracking-wide">Sale</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black uppercase tracking-wide">Lookbook</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" aria-label="Suchen">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </Button>
                        <Button variant="ghost" size="sm" aria-label="Wunschliste">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="relative" aria-label="Warenkorb">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            <Badge className="absolute -top-1 -right-1 bg-black text-white text-xs h-4 w-4 p-0 flex items-center justify-center">2</Badge>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=700&fit=crop" alt="Mode Kollektion" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
                </div>
                <div className="container relative mx-auto px-4 py-24 lg:py-36">
                    <div className="max-w-xl">
                        <Badge className="mb-4 bg-rose-100 text-rose-600 border-0">Frühling/Sommer 2026</Badge>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                            Mode mit <span className="italic text-rose-500">Haltung</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-500">
                            Zeitlose Eleganz trifft auf nachhaltige Mode. Entdecken Sie unsere neue Kollektion aus hochwertigen Naturmaterialien.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">Kollektion entdecken</Button>
                            <Button size="lg" variant="outline" className="px-8">Lookbook ansehen</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Neue Kollektion</h2>
                        <p className="mt-3 text-gray-500">Nachhaltig. Zeitlos. Für jeden Anlass.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((p) => (
                            <Card key={p.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        {p.badge && (
                                            <Badge className={`absolute top-3 left-3 ${p.badge === 'Neu' ? 'bg-black' : p.badge === 'Bestseller' ? 'bg-rose-500' : 'bg-red-500'} text-white`}>{p.badge}</Badge>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900">{p.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                                        <div className="mt-3 flex gap-1">
                                            {p.sizes.map((s) => (<span key={s} className="text-xs border rounded px-1.5 py-0.5 text-gray-500">{s}</span>))}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-lg font-bold text-gray-900">€{p.price}</span>
                                                {p.oldPrice && <span className="ml-2 text-sm text-gray-400 line-through">€{p.oldPrice}</span>}
                                            </div>
                                            <Button size="sm" className="bg-black hover:bg-gray-800 text-white">In den Warenkorb</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 py-12 text-gray-400">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-2xl font-bold tracking-widest text-white">STILWERK</span>
                    <p className="mt-4 text-sm">Nachhaltige Mode. In Europa gefertigt. Für bewusste Menschen.</p>
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
                        <p>© 2026 Stilwerk. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
