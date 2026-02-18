import { NextRequest, NextResponse } from 'next/server';
import { TenantService } from '@/core/tenant/tenant.service';

export async function GET(request: NextRequest) {
    try {
        // Get tenant info from middleware headers
        const subdomain = request.headers.get('x-tenant-subdomain');
        const customDomain = request.headers.get('x-tenant-custom-domain');
        const tenantType = request.headers.get('x-tenant-type');

        // Platform routes don't have a tenant
        if (tenantType === 'platform') {
            return NextResponse.json({ tenant: null, type: 'platform' });
        }

        let tenant = null;

        if (subdomain) {
            tenant = await TenantService.getBySubdomain(subdomain);
        } else if (customDomain) {
            tenant = await TenantService.getByCustomDomain(customDomain);
        }

        if (!tenant) {
            return NextResponse.json(
                { error: 'Tenant not found', type: tenantType },
                { status: 404 }
            );
        }

        return NextResponse.json({ tenant, type: tenantType });
    } catch (error) {
        console.error('Error fetching tenant:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
