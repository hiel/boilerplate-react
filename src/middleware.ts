import { NextRequest } from "next/server"
import { AuthMiddleware } from "@/middlewares/AuthMiddleware"

export function middleware(request: NextRequest) {
  return AuthMiddleware(request)
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
}
