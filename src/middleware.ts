import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const url = request.nextUrl.clone();

    // Skip static files and API routes (except auth)
    if (
        url.pathname.startsWith('/_next') ||
        (url.pathname.startsWith('/api') && !url.pathname.startsWith('/api/auth')) ||
        url.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Auth Check for Dashboard
    if (url.pathname.startsWith('/dashboard')) {
        const token = await getToken({ req: request });
        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    // Extract tenant info from hostname
    const tenantInfo = resolveTenantFromHostname(hostname);

    const response = NextResponse.next();

    if (tenantInfo.subdomain) {
        response.headers.set('x-tenant-subdomain', tenantInfo.subdomain);
    }

    if (tenantInfo.customDomain) {
        response.headers.set('x-tenant-custom-domain', tenantInfo.customDomain);
    }

    response.headers.set('x-tenant-type', tenantInfo.type);

    return response;
}

interface TenantInfo {
    type: 'subdomain' | 'custom' | 'platform' | 'localhost';
    subdomain?: string;
    customDomain?: string;
}

function resolveTenantFromHostname(hostname: string): TenantInfo {
    // Development: localhost
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
        return { type: 'localhost', subdomain: 'demo' };
    }

    // Platform routes: www.shophub.com, shophub.com
    if (hostname === 'shophub.com' || hostname === 'www.shophub.com') {
        return { type: 'platform' };
    }

    // Subdomain: shop.shophub.com
    const subdomainMatch = hostname.match(/^([^.]+)\.shophub\.com$/);
    if (subdomainMatch) {
        const subdomain = subdomainMatch[1];
        // Skip system subdomains
        if (['www', 'api', 'admin'].includes(subdomain)) {
            return { type: 'platform' };
        }
        return { type: 'subdomain', subdomain };
    }

    // Custom domain: www.myshop.com
    return { type: 'custom', customDomain: hostname };
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
