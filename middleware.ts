import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // For demo version: no authentication required
  // Admin pages will show placeholder message
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};