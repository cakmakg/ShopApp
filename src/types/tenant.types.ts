// Tenant Types for Shophub Multi-Tenant System

export type BlueprintType =
    | 'ecommerce'
    | 'jewelry'
    | 'supermarket'
    | 'tourism'
    | 'clothing'
    | 'restaurant';

export type TenantStatus = 'TRIAL' | 'ACTIVE' | 'SUSPENDED' | 'CANCELLED';

export interface Tenant {
    id: string;
    businessName: string;
    email: string;
    phone?: string;
    blueprintId: BlueprintType;
    subdomain: string;
    customDomain?: string;
    domainVerified: boolean;
    settings: TenantSettings;
    theme: TenantTheme;
    status: TenantStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface TenantSettings {
    currency: string;
    locale: string;
    timezone: string;
    taxRate?: number;
    shippingEnabled: boolean;
    paymentMethods: string[];
}

export interface TenantTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    fontFamily: string;
    logoUrl?: string;
    faviconUrl?: string;
}

export interface TenantContext {
    tenant: Tenant | null;
    isLoading: boolean;
    error: string | null;
}
