'use client';

import { HeroBanner, BenefitsSection, ProductCard } from '@/blueprints/health-beauty/components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const demoProducts = [
    {
        id: '1',
        name: 'Marine Collagen Complex',
        description: 'Premium Meereskollagen-Komplex – Für Hautelastizität und Vitalität',
        price: 29.99,
        originalPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
        rating: 5,
        reviews: 128,
        badge: 'Bestseller',
        benefits: ['Hauterneuerung', 'Anti-Aging'],
    },
    {
        id: '2',
        name: 'Vitamin D3 + K2',
        description: 'Starke Knochen und ein gestärktes Immunsystem',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
        rating: 4,
        reviews: 89,
        benefits: ['Knochengesundheit', 'Immunsystem'],
    },
    {
        id: '3',
        name: 'Omega-3 Fischöl',
        description: 'Reines Fischöl – Herz- und Gehirngesundheit',
        price: 19.99,
        originalPrice: 24.99,
        image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=400&h=400&fit=crop',
        rating: 5,
        reviews: 234,
        badge: 'Bio-Qualität',
        benefits: ['Herzgesundheit', 'Gehirnfunktion'],
    },
    {
        id: '4',
        name: 'Probiotik 50 Milliarden CFU',
        description: 'Für ein gesundes Verdauungssystem und Darmflora',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
        rating: 4,
        reviews: 156,
        benefits: ['Verdauung', 'Darmgesundheit'],
    },
];

export default function HealthBeautyStorefront() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Demo-Banner */}
            <div className="bg-emerald-600 text-center py-2 text-sm text-white">
                Dies ist eine Demo-Vorlage von <Link href="/" className="underline font-semibold">Shophub</Link> — <strong>Gesundheit & Schönheit</strong>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=40&h=40&fit=crop" alt="VitaGlow Logo" className="h-9 w-9 rounded-full object-cover" />
                        <span className="text-xl font-bold text-gray-900">VitaGlow</span>
                    </div>

                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Produkte</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Über uns</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Blog</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Kontakt</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" aria-label="Suchen">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="relative" aria-label="Warenkorb">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">3</span>
                        </Button>
                    </div>
                </div>
            </nav>

            <HeroBanner />
            <BenefitsSection />

            {/* Produkte */}
            <section className="bg-gradient-to-b from-white to-stone-50 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Beliebteste Produkte</h2>
                            <p className="mt-2 text-gray-600">Premium-Nahrungsergänzungsmittel, von Tausenden geliebt</p>
                        </div>
                        <Button variant="outline" className="hidden md:flex">
                            Alle anzeigen
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Button>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {demoProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={(id, qty) => console.log(`Added ${qty}x ${id}`)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white">15% Rabatt auf Ihre erste Bestellung</h2>
                    <p className="mb-8 text-emerald-100">Abonnieren Sie unseren Newsletter und erfahren Sie als Erster von neuen Produkten und Aktionen.</p>
                    <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                        <input type="email" placeholder="Ihre E-Mail-Adresse" className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white" />
                        <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Abonnieren</Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 text-gray-400">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=32&h=32&fit=crop" alt="" className="h-8 w-8 rounded-full object-cover" />
                                <span className="text-xl font-bold text-white">VitaGlow</span>
                            </div>
                            <p className="text-sm">Natürliche und wirksame Nahrungsergänzungsmittel für ein gesundes Leben.</p>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Schnelllinks</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Produkte</a></li>
                                <li><a href="#" className="hover:text-white">Über uns</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Hilfe</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Häufige Fragen</a></li>
                                <li><a href="#" className="hover:text-white">Versand & Lieferung</a></li>
                                <li><a href="#" className="hover:text-white">Rückgaberecht</a></li>
                                <li><a href="#" className="hover:text-white">Datenschutzrichtlinie</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Kontakt</h4>
                            <ul className="space-y-2 text-sm">
                                <li>info@vitaglow.de</li>
                                <li>+49 30 123 456 78</li>
                                <li>Berlin, Deutschland</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                        <p>© 2026 VitaGlow. Alle Rechte vorbehalten. Powered by Shophub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
