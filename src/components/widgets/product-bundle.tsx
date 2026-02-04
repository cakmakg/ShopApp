'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { Check, ShieldCheck } from 'lucide-react';

interface BundleOption {
    id: string;
    name: string;
    packCount: number;
    pricePerUnit: number;
    originalPricePerUnit: number;
    image?: string;
    isBestValue?: boolean;
}

const bundes: BundleOption[] = [
    {
        id: '1-pack',
        name: '1 Pack',
        packCount: 1,
        pricePerUnit: 29.99,
        originalPricePerUnit: 49.99,
        image: '/images/product-1.png',
    },
    {
        id: '3-pack',
        name: '3 Packs',
        packCount: 3,
        pricePerUnit: 29.39,
        originalPricePerUnit: 49.99,
        image: '/images/product-3.png',
        isBestValue: true,
    },
    {
        id: '6-packs',
        name: '6 Packs',
        packCount: 6,
        pricePerUnit: 27.99,
        originalPricePerUnit: 49.99,
        image: '/images/product-6.png',
    },
];

export function ProductBundleWidget() {
    const [selectedBundle, setSelectedBundle] = React.useState(bundes[1].id);

    const activeBundle = bundes.find((b) => b.id === selectedBundle)!;
    const totalPrice = (activeBundle.pricePerUnit * activeBundle.packCount).toFixed(2);
    const totalSavings = (
        (activeBundle.originalPricePerUnit - activeBundle.pricePerUnit) *
        activeBundle.packCount
    ).toFixed(2);

    return (
        <div className="w-full max-w-md mx-auto space-y-6 p-4">
            {/* Header */}
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-800">Choose Bundle:</h2>
            </div>

            {/* Bundle Selection */}
            <RadioGroup
                value={selectedBundle}
                onValueChange={setSelectedBundle}
                className="grid grid-cols-3 gap-2"
            >
                {bundes.map((bundle) => (
                    <Label
                        key={bundle.id}
                        htmlFor={bundle.id}
                        className={cn(
                            'cursor-pointer border-2 rounded-xl p-2 relative transition-all hover:bg-slate-50',
                            selectedBundle === bundle.id
                                ? 'border-emerald-600 bg-emerald-50/30'
                                : 'border-slate-200'
                        )}
                    >
                        {bundle.isBestValue && (
                            <Badge className="absolute -top-3 inset-x-0 mx-auto w-max bg-emerald-600 hover:bg-emerald-700 text-[10px] px-2 py-0.5">
                                Best Value
                            </Badge>
                        )}

                        <div className="space-y-2 text-center pt-2">
                            <span className="font-semibold block text-sm">{bundle.name}</span>

                            {/* Product Image Placeholder */}
                            <div className="h-16 w-full bg-slate-100 rounded-md flex items-center justify-center text-slate-400 text-xs">
                                Image
                            </div>

                            <div className="mt-1 space-y-0.5">
                                <div className="text-emerald-700 font-bold text-sm">
                                    ${bundle.pricePerUnit}
                                    {bundle.packCount > 1 && <span className="text-[10px] font-normal">/each</span>}
                                </div>
                            </div>

                            <RadioGroupItem value={bundle.id} id={bundle.id} className="sr-only" />

                            {selectedBundle === bundle.id && (
                                <div className="absolute top-1 right-1 bg-emerald-600 text-white rounded-full p-0.5">
                                    <Check className="h-2 w-2" />
                                </div>
                            )}
                        </div>
                    </Label>
                ))}
            </RadioGroup>

            {/* Add To Cart Button */}
            <Button
                className="w-full h-12 text-lg bg-[#8B5E3C] hover:bg-[#7A4E2E] text-white shadow-lg transition-transform active:scale-95"
            >
                Add to cart - ${totalPrice}
            </Button>

            {/* Guarantee Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-800 bg-emerald-50 py-2 rounded-full border border-emerald-100">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-medium">90 day money back guarantee</span>
            </div>
        </div>
    );
}
