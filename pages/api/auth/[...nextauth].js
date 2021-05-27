import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: 1392270897816071,
      clientSecret: 9fd6b923347aa202189e08a4b257e3d9
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
})
