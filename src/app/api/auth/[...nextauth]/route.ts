import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Email from "next-auth/providers/email"

const nextAuthoptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },


            async authorize(credentials, req) {
                const response = await fetch('http://181.215.135.3/api/v1/user/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    }
                )
                const user = await response.json()

                if(user && response.ok){
                    return user
                }

                return null

            }

        })
    ],

    pages: {
        signIn: '/'
    },
    callbacks:{
        async jwt({token, user}){
            user && (token.id = user.id,
                    token.name = user.name,
                    token.email = user.email,
                    token.token = user.token
            )
            return token
        },

        async session({session, token}) {
            token &&(
                session.user.id = token.id as number,
                session.user.name = token.name as string,
                session.user.email = token.email as string,
                session.user.token = token.token as string
            )

            return session
        }
    }
}

const handler = NextAuth(nextAuthoptions)


export { handler as GET, handler as POST, nextAuthoptions }