import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import * as jose from 'jose';

const locales = ["en", "si"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	const locale = match(languages, locales, defaultLocale);
	return locale;
}

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	if (pathname.startsWith("/api")) {
        try{
      //check if there is a token in the request header
      const token = request.headers.get("Authorization");

      if(token){
          const user = await jose.jwtVerify(token.replace("Bearer ",""),new TextEncoder().encode(process.env.JOSE_SECRET));
          
          if(user){
            request.headers.set("user",JSON.stringify(user.payload));
          }else{
            return NextResponse.json({message: "User not found" , description : "Your login session expired or you have been trying to use forged login token."}, {status: 404});
          }
      }
      //add all data of the request and send it to the next middleware
    }catch(e){
        console.log(e);
    }

    return NextResponse.next({
        request: request
    });
	} else {
		const locales = ["en", "si"];

		const pathnameHasLocale = locales.some(
			(locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
		);
		if (pathnameHasLocale) return NextResponse.next();

		// Check cookie
		const preferredLocale = request.cookies.get("NEXT_LOCALE")?.value;
		const locale = preferredLocale || getLocale(request);

		request.nextUrl.pathname = `/${locale}${pathname}`;
		return NextResponse.redirect(request.nextUrl);
	}
}

export const config = {
	matcher: ["/((?!_next|icon.png|assets/*).*)"],
};
