'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    price: number;
    compareAtPrice: number | null;
    stock: number;
    sku: string | null;
    category: string | null;
    isActive: boolean;
    images: string;
    createdAt: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        try {
            const params = new URLSearchParams();
            if (search) params.set('search', search);

            const res = await fetch(`/api/products?${params.toString()}`);
            const data = await res.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setProducts((prev) => prev.filter((p) => p.id !== id));
                setDeleteConfirm(null);
            }
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const handleToggleActive = async (id: string, isActive: boolean) => {
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isActive: !isActive }),
            });
            if (res.ok) {
                setProducts((prev) =>
                    prev.map((p) => (p.id === id ? { ...p, isActive: !isActive } : p))
                );
            }
        } catch (error) {
            console.error('Failed to toggle product:', error);
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(price);
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Ürünler</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {products.length} ürün bulundu
                    </p>
                </div>
                <Link href="/dashboard/products/new">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Yeni Ürün
                    </Button>
                </Link>
            </div>

            {/* Search */}
            <Card className="mb-6">
                <CardContent className="pt-4">
                    <Input
                        placeholder="Ürün adı veya SKU ara..."
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        className="max-w-sm"
                    />
                </CardContent>
            </Card>

            {/* Product Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Ürün Listesi</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
                        </div>
                    ) : products.length === 0 ? (
                        <div className="py-12 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Henüz ürün yok</h3>
                            <p className="mt-1 text-sm text-gray-500">İlk ürününüzü ekleyerek başlayın.</p>
                            <Link href="/dashboard/products/new">
                                <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                                    Ürün Ekle
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b text-xs uppercase text-gray-500">
                                    <tr>
                                        <th className="px-4 py-3">Ürün</th>
                                        <th className="px-4 py-3">Fiyat</th>
                                        <th className="px-4 py-3">Stok</th>
                                        <th className="px-4 py-3">Kategori</th>
                                        <th className="px-4 py-3">Durum</th>
                                        <th className="px-4 py-3 text-right">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div>
                                                    <div className="font-medium text-gray-900">{product.name}</div>
                                                    {product.sku && (
                                                        <div className="text-xs text-gray-400">SKU: {product.sku}</div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="font-medium">{formatPrice(product.price)}</div>
                                                {product.compareAtPrice && (
                                                    <div className="text-xs text-gray-400 line-through">
                                                        {formatPrice(product.compareAtPrice)}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${product.stock > 10
                                                        ? 'bg-green-50 text-green-700'
                                                        : product.stock > 0
                                                            ? 'bg-yellow-50 text-yellow-700'
                                                            : 'bg-red-50 text-red-700'
                                                    }`}>
                                                    {product.stock} adet
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-gray-500">
                                                {product.category || '—'}
                                            </td>
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => handleToggleActive(product.id, product.isActive)}
                                                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${product.isActive
                                                            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                        }`}
                                                    aria-label={product.isActive ? 'Ürünü pasifleştir' : 'Ürünü aktifleştir'}
                                                >
                                                    {product.isActive ? 'Aktif' : 'Pasif'}
                                                </button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/dashboard/products/${product.id}/edit`}>
                                                        <Button variant="ghost" size="sm">
                                                            Düzenle
                                                        </Button>
                                                    </Link>
                                                    {deleteConfirm === product.id ? (
                                                        <div className="flex items-center gap-1">
                                                            <Button
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => handleDelete(product.id)}
                                                            >
                                                                Sil
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => setDeleteConfirm(null)}
                                                            >
                                                                İptal
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                            onClick={() => setDeleteConfirm(product.id)}
                                                        >
                                                            Sil
                                                        </Button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
