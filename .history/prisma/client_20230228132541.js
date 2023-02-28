// import { PrismaClient } from "@prisma/client"

// const client = globalThis.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== "production") globalThis.prisma = client

// export default client;



import { Prismaclient } from "@prisma/client"

declare global {
namespace NodeJS {
interface Global {}
}
}

/add prisma to the NodeJS global type

interface CustomNodeJ sGlobal extends NodeJS.Global {
prisma: PrismaClient
}

// Prevent multiple instances of Prisma Client in deve Lopment
declare const global: CustomNodeJ sGlobal
const prisma = global .prisma || new PrismaClient ()
if (process .env.NODE_ENV === "development ") global.prisma = prisma
export default prisma