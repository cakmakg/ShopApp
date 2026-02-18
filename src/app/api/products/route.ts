import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { ProductService } from '@/services/product/product.service';

// GET /api/products — List all products for tenant
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const tenantId = (session.user as { tenantId?: string }).tenantId;
        if (!tenantId) {
            return NextResponse.json({ error: 'No tenant' }, { status: 400 });
        }

        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category') || undefined;
        const isActive = searchParams.get('isActive') !== null
            ? searchParams.get('isActive') === 'true'
            : undefined;
        const search = searchParams.get('search') || undefined;

        const products = await ProductService.getAll({
            tenantId,
            category,
            isActive,
            search,
        });

        return NextResponse.json({ products });
    } catch (error) {
        console.error('GET /api/products error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// POST /api/products — Create a new product
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const tenantId = (session.user as { tenantId?: string }).tenantId;
        if (!tenantId) {
            return NextResponse.json({ error: 'No tenant' }, { status: 400 });
        }

        const body = await request.json();
        const { name, description, price, compareAtPrice, stock, sku, category, isActive } = body;

        if (!name || price === undefined) {
            return NextResponse.json({ error: 'Name and price are required' }, { status: 400 });
        }

        const slug = ProductService.generateSlug(name);

        // Check slug uniqueness
        const existing = await ProductService.getBySlug(slug, tenantId);
        if (existing) {
            return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
        }

        const product = await ProductService.create({
            tenantId,
            name,
            slug,
            description,
            price: parseFloat(price),
            compareAtPrice: compareAtPrice ? parseFloat(compareAtPrice) : undefined,
            stock: parseInt(stock || '0'),
            sku,
            category,
            isActive: isActive ?? true,
        });

        return NextResponse.json({ product }, { status: 201 });
    } catch (error) {
        console.error('POST /api/products error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
