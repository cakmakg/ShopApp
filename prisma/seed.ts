import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
    console.log('🌱 Seeding database...');

    // Create demo tenant
    const demoTenant = await prisma.tenant.upsert({
        where: { subdomain: 'demo' },
        update: {},
        create: {
            businessName: 'Demo Mağaza',
            email: 'demo@shophub.com',
            phone: '+90 555 123 4567',
            subdomain: 'demo',
            blueprintId: 'ecommerce',
            settings: JSON.stringify({
                currency: 'TRY',
                locale: 'tr-TR',
                timezone: 'Europe/Istanbul',
                taxRate: 18,
                shippingEnabled: true,
                paymentMethods: ['iyzico', 'bank_transfer'],
            }),
            theme: JSON.stringify({
                primaryColor: '#16a34a',
                secondaryColor: '#8B5E3C',
                accentColor: '#fbbf24',
                fontFamily: 'Inter',
            }),
        },
    });

    console.log('✅ Created demo tenant:', demoTenant.businessName);

    // Create demo products
    const products = [
        {
            name: 'Marine Collagen Glow',
            slug: 'marine-collagen-glow',
            price: 29.99,
            stock: 100,
            images: JSON.stringify(['/images/product-1.png']),
            blueprintData: JSON.stringify({ category: 'Health & Beauty' }),
        },
        {
            name: 'Vitamin D3 Complex',
            slug: 'vitamin-d3-complex',
            price: 24.99,
            stock: 150,
            images: JSON.stringify(['/images/product-2.png']),
            blueprintData: JSON.stringify({ category: 'Health & Beauty' }),
        },
        {
            name: 'Omega-3 Fish Oil',
            slug: 'omega-3-fish-oil',
            price: 34.99,
            stock: 80,
            images: JSON.stringify(['/images/product-3.png']),
            blueprintData: JSON.stringify({ category: 'Health & Beauty' }),
        },
    ];

    for (const product of products) {
        await prisma.product.upsert({
            where: {
                tenantId_slug: {
                    tenantId: demoTenant.id,
                    slug: product.slug,
                },
            },
            update: {},
            create: {
                ...product,
                tenantId: demoTenant.id,
            },
        });
    }

    console.log('✅ Created', products.length, 'demo products');

    // Create demo user with hashed password
    const hashedPassword = await bcrypt.hash('password123', 10);

    await prisma.user.upsert({
        where: {
            tenantId_email: {
                tenantId: demoTenant.id,
                email: 'admin@demo.com',
            },
        },
        update: {
            password: hashedPassword,
        },
        create: {
            tenantId: demoTenant.id,
            email: 'admin@demo.com',
            name: 'Demo Admin',
            role: 'OWNER',
            password: hashedPassword,
        },
    });

    console.log('✅ Created demo user: admin@demo.com (Password: password123)');

    console.log('🎉 Seeding complete!');
}

seed()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
