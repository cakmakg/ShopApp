// Health & Beauty Blueprint Configuration
// Template for supplement stores, skincare brands, wellness products

import type { BlueprintConfig } from '@/types/blueprint.types';

export const healthBeautyBlueprint: BlueprintConfig = {
    id: 'health-beauty',
    name: 'Sağlık & Güzellik',
    description: 'Takviye gıdalar, cilt bakım ürünleri ve sağlık ürünleri satan mağazalar için optimize edilmiş şablon',
    icon: '💊',
    version: '1.0.0',

    theme: {
        primaryColor: '#16a34a',      // Green - trust, health
        secondaryColor: '#8B5E3C',    // Warm brown - natural
        accentColor: '#fbbf24',       // Gold - premium
        backgroundColor: '#fafaf9',   // Warm white
        textColor: '#1c1917',         // Dark brown
        fontFamily: 'Inter, system-ui, sans-serif',
        borderRadius: '12px',
    },

    widgets: [
        {
            id: 'hero-banner',
            name: 'Hero Banner',
            description: 'Ana sayfa üst banner alanı',
            category: 'hero',
            configurable: true,
            defaultProps: {
                title: 'Doğal Güzellik, Sağlıklı Yaşam',
                subtitle: 'Premium kalite takviyeler ve cilt bakım ürünleri',
                ctaText: 'Alışverişe Başla',
                ctaLink: '/products',
                backgroundImage: '/images/hero-bg.jpg',
            },
        },
        {
            id: 'product-bundle',
            name: 'Ürün Paketi Seçici',
            description: 'Çoklu paket satışı için widget',
            category: 'product',
            configurable: true,
            defaultProps: {
                showBestValue: true,
                packs: [1, 3, 6],
                discounts: { 3: 10, 6: 20 },
            },
        },
        {
            id: 'product-grid',
            name: 'Ürün Izgarası',
            description: 'Ürün listesi görünümü',
            category: 'product',
            configurable: true,
            defaultProps: {
                columns: 4,
                showRating: true,
                showQuickAdd: true,
            },
        },
        {
            id: 'benefits-section',
            name: 'Faydalar Bölümü',
            description: 'Ürün faydalarını gösteren ikonlu bölüm',
            category: 'content',
            configurable: true,
            defaultProps: {
                benefits: [
                    { icon: '🌿', title: '%100 Doğal', description: 'Katkısız, saf içerik' },
                    { icon: '🔬', title: 'Klinik Testli', description: 'Bilimsel araştırmalarla desteklenen' },
                    { icon: '🚚', title: 'Hızlı Teslimat', description: '1-3 iş günü içinde kapınızda' },
                ],
            },
        },
        {
            id: 'testimonials',
            name: 'Müşteri Yorumları',
            description: 'Müşteri deneyimleri karuseli',
            category: 'content',
            configurable: true,
            defaultProps: {
                autoPlay: true,
                showRating: true,
            },
        },
        {
            id: 'guarantee-badge',
            name: 'Garanti Rozeti',
            description: 'Para iade garantisi rozeti',
            category: 'cta',
            configurable: true,
            defaultProps: {
                days: 90,
                text: 'Memnuniyet Garantisi',
            },
        },
        {
            id: 'newsletter-signup',
            name: 'Bülten Kayıt',
            description: 'E-posta bülteni kayıt formu',
            category: 'cta',
            configurable: true,
            defaultProps: {
                title: 'Kampanyalardan Haberdar Ol',
                placeholder: 'E-posta adresiniz',
                buttonText: 'Abone Ol',
                incentive: 'İlk siparişte %10 indirim!',
            },
        },
    ],

    defaultPages: [
        {
            path: '/',
            name: 'Ana Sayfa',
            widgets: ['hero-banner', 'benefits-section', 'product-grid', 'testimonials', 'newsletter-signup'],
            isRequired: true,
        },
        {
            path: '/products',
            name: 'Ürünler',
            widgets: ['product-grid'],
            isRequired: true,
        },
        {
            path: '/products/[slug]',
            name: 'Ürün Detayı',
            widgets: ['product-bundle', 'guarantee-badge'],
            isRequired: true,
        },
    ],

    productFields: [
        {
            name: 'servingSize',
            label: 'Porsiyon Miktarı',
            type: 'text',
            required: false,
            defaultValue: '1 kapsül',
        },
        {
            name: 'servingsPerContainer',
            label: 'Kutu Başına Porsiyon',
            type: 'number',
            required: false,
            defaultValue: 30,
        },
        {
            name: 'ingredients',
            label: 'İçerik Listesi',
            type: 'rich-text',
            required: false,
        },
        {
            name: 'usage',
            label: 'Kullanım Talimatı',
            type: 'rich-text',
            required: false,
        },
        {
            name: 'certifications',
            label: 'Sertifikalar',
            type: 'select',
            required: false,
            options: ['GMP', 'ISO 22000', 'Helal', 'Vegan', 'Organik'],
        },
    ],

    features: {
        hasInventory: true,
        hasVariants: true,        // Different sizes/flavors
        hasBooking: false,
        hasSubscription: true,    // Monthly subscription boxes
        hasDigitalProducts: false,
        hasWishlist: true,
        hasReviews: true,
        hasLoyaltyProgram: true,
    },
};
