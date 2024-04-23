
import { NextResponse } from "next/server";

export default function middleware(request) {
  console.log('Before middleware');
  console.log('run middleware');
  console.log('After middleware');

  const userToken = request.cookies.get("role")?.value;
  console.log("user cokies=",userToken);
  if(!userToken && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }else if(userToken === "manager") {
    return NextResponse.redirect(new URL("/manager", request.url));
  }else if(userToken === "admin") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }else if(userToken === "tehnolog") {
    return NextResponse.redirect(new URL("/tehnolog", request.url));
  }else if(userToken === "cutter") {
    return NextResponse.redirect(new URL("/cutter", request.url));
  }else if(userToken === "director") {
    return NextResponse.redirect(new URL("/director", request.url));
  }

  return NextResponse.next()
} 


export const config = {
  matcher: "/",
}