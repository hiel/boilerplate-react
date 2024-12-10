import { NextRequest, NextResponse } from "next/server"
import { CookieKey } from "@/utilities/BrowserStorageUtility"
import { ValidationUtility } from "@/utilities/ValidationUtility"

export const AuthMiddleware = (request: NextRequest): NextResponse => {
  const PERMIT_URLS = [
    "/auth",
    "/example",
  ]
  if (PERMIT_URLS.some(url => request.nextUrl.pathname.startsWith(url))) {
    return NextResponse.next()
  }
  if (
    ValidationUtility.hasNotValue(request.cookies.get(CookieKey.ACCESS_TOKEN))
    && ValidationUtility.hasNotValue(request.cookies.get(CookieKey.REFRESH_TOKEN))
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  return NextResponse.next()
}
