import { prisma } from '@/lib/prisma';
import type { Tenant } from '@/types/tenant.types';

export class TenantService {
    /**
     * Get tenant by subdomain (e.g., "myshop" from myshop.shophub.com)
     */
    static async getBySubdomain(subdomain: string): Promise<Tenant | null> {
        const tenant = await prisma.tenant.findUnique({
            where: { subdomain },
        });

        if (!tenant) return null;

        return this.mapToTenant(tenant);
    }

    /**
     * Get tenant by custom domain (e.g., www.myshop.com)
     */
    static async getByCustomDomain(domain: string): Promise<Tenant | null> {
        const tenant = await prisma.tenant.findUnique({
            where: { customDomain: domain },
        });

        if (!tenant) return null;

        return this.mapToTenant(tenant);
    }

    /**
     * Resolve tenant from hostname
     * Supports both subdomain (shop.shophub.com) and custom domain (www.shop.com)
     */
    static async resolveFromHostname(hostname: string): Promise<Tenant | null> {
        // Check for subdomain pattern: shop.shophub.com
        const subdomainMatch = hostname.match(/^([^.]+)\.shophub\.com$/);

        if (subdomainMatch) {
            const subdomain = subdomainMatch[1];
            // Skip system subdomains
            if (['www', 'api', 'admin', 'dashboard'].includes(subdomain)) {
                return null;
            }
            return this.getBySubdomain(subdomain);
        }

        // Check for localhost development
        if (hostname === 'localhost' || hostname.includes('localhost:')) {
            // In development, use a default demo tenant or query param
            return this.getBySubdomain('demo');
        }

        // Custom domain lookup
        return this.getByCustomDomain(hostname);
    }

    /**
     * Create a new tenant
     */
    static async create(data: {
        businessName: string;
        email: string;
        phone?: string;
        subdomain: string;
        blueprintId: string;
    }): Promise<Tenant> {
        const tenant = await prisma.tenant.create({
            data: {
                ...data,
                settings: '{}',
                theme: '{}',
            },
        });

        return this.mapToTenant(tenant);
    }

    /**
     * Map database model to Tenant type
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static mapToTenant(dbTenant: any): Tenant {
        return {
            id: dbTenant.id,
            businessName: dbTenant.businessName,
            email: dbTenant.email,
            phone: dbTenant.phone,
            blueprintId: dbTenant.blueprintId,
            subdomain: dbTenant.subdomain,
            customDomain: dbTenant.customDomain,
            domainVerified: dbTenant.domainVerified,
            settings: JSON.parse(dbTenant.settings || '{}'),
            theme: JSON.parse(dbTenant.theme || '{}'),
            status: dbTenant.status,
            createdAt: dbTenant.createdAt,
            updatedAt: dbTenant.updatedAt,
        };
    }
}
