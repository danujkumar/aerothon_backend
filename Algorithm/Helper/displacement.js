//This function is used to determine the displacement between two different points on earth

export function haversineDistance(source, destination) {
    // Radius of the Earth in kilometers
    const R = 6371;

    // Convert degrees to radians
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    // Extract latitudes and longitudes from the arrays
    const lat1 = source[0];
    const lon1 = source[1];
    const lat2 = destination[0];
    const lon2 = destination[1];

    // Convert latitude and longitude from degrees to radians
    const phi1 = toRadians(lat1);
    const phi2 = toRadians(lat2);
    const deltaPhi = toRadians(lat2 - lat1);
    const deltaLambda = toRadians(lon2 - lon1);

    // Haversine formula
    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance in kilometers
    const distance = R * c;

    return distance;
}