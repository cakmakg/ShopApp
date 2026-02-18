'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductFormData {
    name: string;
    description: string;
    price: string;
    compareAtPrice: string;
    stock: string;
    sku: string;
    category: string;
    isActive: boolean;
}

const initialFormData: ProductFormData = {
    name: '',
    description: '',
    price: '',
    compareAtPrice: '',
    stock: '0',
    sku: '',
    category: '',
    isActive: true,
};

export default function NewProductPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<ProductFormData>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Ürün oluşturulamadı');
            }

            router.push('/dashboard/products');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Bir hata oluştu');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl">
            <div className="mb-6">
                <Button variant="ghost" onClick={() => router.back()} className="mb-2">
                    ← Geri
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">Yeni Ürün Ekle</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Temel Bilgiler</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Ürün Adı *</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Örn: Marine Collagen Complex"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Açıklama</Label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Ürün açıklamasını yazın..."
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Kategori</Label>
                            <Input
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Örn: Takviye Gıda"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Pricing */}
                <Card>
                    <CardHeader>
                        <CardTitle>Fiyatlandırma</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Satış Fiyatı (₺) *</Label>
                                <Input
                                    id="price"
                                    name="price"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="compareAtPrice">Karşılaştırma Fiyatı (₺)</Label>
                                <Input
                                    id="compareAtPrice"
                                    name="compareAtPrice"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={formData.compareAtPrice}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Inventory */}
                <Card>
                    <CardHeader>
                        <CardTitle>Envanter</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="stock">Stok Adedi</Label>
                                <Input
                                    id="stock"
                                    name="stock"
                                    type="number"
                                    min="0"
                                    value={formData.stock}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sku">SKU</Label>
                                <Input
                                    id="sku"
                                    name="sku"
                                    value={formData.sku}
                                    onChange={handleChange}
                                    placeholder="Örn: MC-001"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Status */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="isActive"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <Label htmlFor="isActive" className="cursor-pointer">
                                Ürünü mağazada aktif olarak yayınla
                            </Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Error */}
                {error && (
                    <div className="rounded-md bg-red-50 p-4 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-4">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-emerald-600 hover:bg-emerald-700"
                    >
                        {isLoading ? 'Kaydediliyor...' : 'Ürünü Kaydet'}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push('/dashboard/products')}
                    >
                        İptal
                    </Button>
                </div>
            </form>
        </div>
    );
}
