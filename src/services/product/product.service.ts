import { prisma } from '@/lib/prisma';

export interface CreateProductInput {
    tenantId: string;
    name: string;
    slug: string;
    description?: string;
    price: number;
    compareAtPrice?: number;
    stock: number;
    sku?: string;
    category?: string;
    isActive?: boolean;
    images?: string;
    blueprintData?: string;
}

export interface UpdateProductInput {
    name?: string;
    slug?: string;
    description?: string;
    price?: number;
    compareAtPrice?: number;
    stock?: number;
    sku?: string;
    category?: string;
    isActive?: boolean;
    images?: string;
    blueprintData?: string;
}

export interface ProductFilter {
    tenantId: string;
    category?: string;
    isActive?: boolean;
    search?: string;
}

export class ProductService {
    static async getAll(filter: ProductFilter) {
        const { tenantId, category, isActive, search } = filter;

        const where: Record<string, unknown> = { tenantId };

        if (category) {
            where.category = category;
        }

        if (isActive !== undefined) {
            where.isActive = isActive;
        }

        if (search) {
            where.OR = [
                { name: { contains: search } },
                { sku: { contains: search } },
            ];
        }

        return prisma.product.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }

    static async getById(id: string, tenantId: string) {
        return prisma.product.findFirst({
            where: { id, tenantId },
        });
    }

    static async getBySlug(slug: string, tenantId: string) {
        return prisma.product.findUnique({
            where: {
                tenantId_slug: { tenantId, slug },
            },
        });
    }

    static async create(data: CreateProductInput) {
        return prisma.product.create({
            data: {
                tenantId: data.tenantId,
                name: data.name,
                slug: data.slug,
                description: data.description,
                price: data.price,
                compareAtPrice: data.compareAtPrice,
                stock: data.stock,
                sku: data.sku,
                category: data.category,
                isActive: data.isActive ?? true,
                images: data.images ?? '[]',
                blueprintData: data.blueprintData ?? '{}',
            },
        });
    }

    static async update(id: string, tenantId: string, data: UpdateProductInput) {
        // Verify ownership
        const product = await prisma.product.findFirst({
            where: { id, tenantId },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return prisma.product.update({
            where: { id },
            data,
        });
    }

    static async delete(id: string, tenantId: string) {
        const product = await prisma.product.findFirst({
            where: { id, tenantId },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return prisma.product.delete({
            where: { id },
        });
    }

    static async getCount(tenantId: string) {
        return prisma.product.count({
            where: { tenantId },
        });
    }

    static generateSlug(name: string): string {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    }
}
