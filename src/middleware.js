import { NextRequest, NextResponse } from "next/server";

export default function Middleware(req) {
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";
  const token = req.cookies.get("token")?.value;

  if (isPublicPath) {
    // If the path is /login or /signup, allow them
    return NextResponse.next();
  }

  if (!token) {
    // If there's no token and the path is not /login or /signup, redirect to /login
    // return NextResponse.redirect("/login");
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  // If there's a token and the path is not /login or /signup, allow access
  return NextResponse.next();
}

export const config = {
  // Define the routes where this middleware should be applied
 
  matcher: ["/", "/login", "/signup"],
};
