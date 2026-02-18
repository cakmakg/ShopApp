'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Tenant, TenantContext as TenantContextType } from '@/types/tenant.types';

const TenantContext = createContext<TenantContextType | undefined>(undefined);

interface TenantProviderProps {
    children: ReactNode;
    initialTenant?: Tenant | null;
}

export function TenantProvider({ children, initialTenant = null }: TenantProviderProps) {
    const [tenant, setTenant] = useState<Tenant | null>(initialTenant);
    const [isLoading, setIsLoading] = useState(!initialTenant);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // If we have an initial tenant from SSR, skip client-side fetch
        if (initialTenant) {
            setTenant(initialTenant);
            setIsLoading(false);
            return;
        }

        // Fetch tenant info client-side based on current hostname
        const fetchTenant = async () => {
            try {
                const response = await fetch('/api/tenant/current');
                if (!response.ok) {
                    throw new Error('Failed to fetch tenant');
                }
                const data = await response.json();
                setTenant(data.tenant);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTenant();
    }, [initialTenant]);

    return (
        <TenantContext.Provider value={{ tenant, isLoading, error }}>
            {children}
        </TenantContext.Provider>
    );
}

export function useTenant() {
    const context = useContext(TenantContext);
    if (context === undefined) {
        throw new Error('useTenant must be used within a TenantProvider');
    }
    return context;
}

export function useTenantRequired() {
    const { tenant, isLoading, error } = useTenant();

    if (isLoading) {
        return { tenant: null, isLoading: true, error: null };
    }

    if (error || !tenant) {
        throw new Error(error || 'No tenant found');
    }

    return { tenant, isLoading: false, error: null };
}
