import prisma from "@/app/libs/prismadb";
import { SafeListing } from "../types";

export interface IListingsParams {
    userId?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const {userId} = params;

        let query: any = {};

        if (userId){
            query.userId = userId;
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createAt: 'desc',
            },
        });

        const safeListings: SafeListing[] = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createAt.toISOString()
        }));

        return safeListings;
    } catch(error: any) {
        throw new Error(error);
    }
}