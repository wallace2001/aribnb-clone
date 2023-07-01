import getCurrentUser from "../actions/getCurrentUser"
import getFavoritesListings from "../actions/getFavoriteListing";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";

const FavoritePage = async () => {

    const listings = await getFavoritesListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No favorites found"
                    subtitle="Looks like you have no favorites listings."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoriteClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavoritePage;