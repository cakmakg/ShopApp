import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { ProductService } from '@/services/product/product.service';

interface RouteParams {
    params: Promise<{ id: string }>;
}

// GET /api/products/[id]
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const tenantId = (session.user as { tenantId?: string }).tenantId;
        if (!tenantId) {
            return NextResponse.json({ error: 'No tenant' }, { status: 400 });
        }

        const { id } = await params;
        const product = await ProductService.getById(id, tenantId);

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ product });
    } catch (error) {
        console.error('GET /api/products/[id] error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// PUT /api/products/[id]
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const tenantId = (session.user as { tenantId?: string }).tenantId;
        if (!tenantId) {
            return NextResponse.json({ error: 'No tenant' }, { status: 400 });
        }

        const { id } = await params;
        const body = await request.json();

        const updateData: Record<string, unknown> = {};
        if (body.name !== undefined) updateData.name = body.name;
        if (body.slug !== undefined) updateData.slug = body.slug;
        if (body.description !== undefined) updateData.description = body.description;
        if (body.price !== undefined) updateData.price = parseFloat(body.price);
        if (body.compareAtPrice !== undefined) updateData.compareAtPrice = body.compareAtPrice ? parseFloat(body.compareAtPrice) : null;
        if (body.stock !== undefined) updateData.stock = parseInt(body.stock);
        if (body.sku !== undefined) updateData.sku = body.sku;
        if (body.category !== undefined) updateData.category = body.category;
        if (body.isActive !== undefined) updateData.isActive = body.isActive;

        const product = await ProductService.update(id, tenantId, updateData);

        return NextResponse.json({ product });
    } catch (error) {
        console.error('PUT /api/products/[id] error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// DELETE /api/products/[id]
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const tenantId = (session.user as { tenantId?: string }).tenantId;
        if (!tenantId) {
            return NextResponse.json({ error: 'No tenant' }, { status: 400 });
        }

        const { id } = await params;
        await ProductService.delete(id, tenantId);

        return NextResponse.json({ message: 'Product deleted' });
    } catch (error) {
        console.error('DELETE /api/products/[id] error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
