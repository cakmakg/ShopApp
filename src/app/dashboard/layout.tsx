'use client';

import { useSession } from 'next-auth/react';
import DashboardSidebar from '@/components/dashboard/sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50">
            <DashboardSidebar />
            <div className="ml-64">
                {/* Top bar */}
                <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white/80 backdrop-blur-sm px-6">
                    <div className="ml-auto flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            {session?.user?.name || session?.user?.email}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                            {(session?.user?.name || session?.user?.email || 'U')[0].toUpperCase()}
                        </div>
                    </div>
                </header>
                {/* Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
