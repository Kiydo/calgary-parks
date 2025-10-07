
export async function fetchParks(parksUrl, calgaryToken) {
    try {
        const response = await fetch(parksUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-App-Token": calgaryToken,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch park data");
        }

        return await response.json();
    } catch(error) {
        console.error("Fetching parks error: ", error)
        throw error;
    }
}
