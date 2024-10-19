import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch("https://your-api.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user;
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register',
    },

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.data = user
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token.data) {
                session.user = token.data
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET, 
}