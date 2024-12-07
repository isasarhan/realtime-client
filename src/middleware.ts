import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;

    if (!currentUser && !request.nextUrl.pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (
        currentUser &&
        !request.nextUrl.pathname.startsWith('/chat') &&
        !request.nextUrl.pathname.startsWith('/auth/register')
    ) {
        return NextResponse.redirect(new URL('/chat', request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
