'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
    const { data: session } = useSession();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Hoş Geldiniz, {session?.user?.name || 'Admin'}
                </h1>
                <p className="text-gray-500 mt-1">İşte mağazanızın genel durumu</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Toplam Satış</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₺12,450.00</div>
                        <p className="text-xs text-green-600 mt-1">+15% geçen aydan</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Siparişler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145</div>
                        <p className="text-xs text-green-600 mt-1">+8% geçen aydan</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Aktif Ürünler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-gray-500 mt-1">Stok durumu iyi</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Müşteriler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-green-600 mt-1">+24 yeni bu ay</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Son Siparişler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border p-8 text-center text-gray-500">
                            Henüz sipariş bulunmuyor. Ürünlerinizi ekleyerek başlayın!
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
