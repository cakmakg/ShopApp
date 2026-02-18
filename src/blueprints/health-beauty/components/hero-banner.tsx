'use client';

import { Button } from '@/components/ui/button';

interface HeroBannerProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCta?: string;
    secondaryCtaLink?: string;
}

export function HeroBanner({
    title = 'Doğal Güzellik, Sağlıklı Yaşam',
    subtitle = 'Premium kalite takviye gıdalar ve cilt bakım ürünleri ile sağlığınıza yatırım yapın.',
    ctaText = 'Ürünleri Keşfet',
    ctaLink = '/products',
    secondaryCta = 'Daha Fazla Bilgi',
    secondaryCtaLink = '/about',
}: HeroBannerProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-100 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 py-20 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                            10.000+ Mutlu Müşteri
                        </div>

                        {/* Title */}
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                {title.split(',')[0]},
                            </span>
                            <br />
                            {title.split(',')[1]}
                        </h1>

                        {/* Subtitle */}
                        <p className="mb-8 text-lg text-gray-600 md:text-xl">
                            {subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-lg font-semibold hover:from-emerald-600 hover:to-teal-600"
                                onClick={() => window.location.href = ctaLink}
                            >
                                {ctaText}
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-emerald-200 px-8 text-lg font-semibold text-emerald-700 hover:bg-emerald-50"
                                onClick={() => window.location.href = secondaryCtaLink}
                            >
                                {secondaryCta}
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Ücretsiz Kargo</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">90 Gün İade</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">%100 Doğal</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Product Showcase */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto h-[500px] w-[400px]">
                            {/* Decorative Circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-100 to-teal-50" />

                            {/* Floating Products */}
                            <div className="absolute left-1/2 top-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-2xl">
                                <div className="flex h-full flex-col items-center justify-center">
                                    <div className="mb-4 text-6xl">💊</div>
                                    <p className="text-center text-sm font-medium text-gray-600">
                                        Premium Takviyeler
                                    </p>
                                </div>
                            </div>

                            {/* Floating Badge 1 */}
                            <div className="absolute left-0 top-20 rounded-xl bg-white px-4 py-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                                        <span className="text-lg">⭐</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Müşteri Puanı</p>
                                        <p className="font-bold text-gray-900">4.9/5</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div className="absolute bottom-20 right-0 rounded-xl bg-white px-4 py-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                                        <span className="text-lg">🌿</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Organik</p>
                                        <p className="font-bold text-gray-900">Sertifikalı</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
