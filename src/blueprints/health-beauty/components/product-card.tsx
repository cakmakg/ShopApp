'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    benefits: string[];
}

interface ProductCardProps {
    product: Product;
    onAddToCart?: (productId: string, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    return (
        <Card
            className="group relative overflow-hidden border-0 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badge */}
            {product.badge && (
                <Badge className="absolute left-3 top-3 z-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                    {product.badge}
                </Badge>
            )}

            {/* Discount Badge */}
            {discount > 0 && (
                <Badge className="absolute right-3 top-3 z-10 bg-rose-500 text-white">
                    -{discount}%
                </Badge>
            )}

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 p-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick Add Overlay */}
                <div
                    className={`absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent p-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}
                >
                    <Button
                        onClick={() => onAddToCart?.(product.id, 1)}
                        className="w-full bg-white text-emerald-600 hover:bg-emerald-50"
                    >
                        Sepete Ekle
                    </Button>
                </div>
            </div>

            <CardContent className="p-4">
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={`h-4 w-4 ${star <= product.rating ? 'text-amber-400' : 'text-gray-200'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Product Name */}
                <h3 className="mb-1 font-semibold text-gray-900 line-clamp-2">
                    {product.name}
                </h3>

                {/* Benefits */}
                <div className="mb-3 flex flex-wrap gap-1">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                        <span
                            key={index}
                            className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
                        >
                            {benefit}
                        </span>
                    ))}
                </div>

                <Separator className="my-3" />

                {/* Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-gray-900">
                            ₺{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                                ₺{product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
