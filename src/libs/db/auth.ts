import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import prisma from "./db";

const authAdapterSingleton = (client: PrismaClient) => {
    return new PrismaAdapter(client.session, client.user)
}

declare global {
    var authAdapterGlobal: undefined | ReturnType<typeof authAdapterSingleton>;
  }

const adapter = globalThis.authAdapterGlobal ?? authAdapterSingleton(prisma); // your adapter

const lucia = new Lucia(adapter, {
	sessionCookie: {
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}

export default lucia;