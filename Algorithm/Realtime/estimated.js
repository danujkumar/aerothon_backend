function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

export function calculateNewPosition(latitude, longitude, speeds, headings, intervals) {
    const R = 6371; // Earth's radius in km

    let currentLatRad = toRadians(latitude);
    let currentLonRad = toRadians(longitude);

    for (let i = 0; i < speeds.length; i++) {
        const speed = speeds[i] / 1000; // Convert m/s to km/s
        const headingRad = toRadians(headings[i]);
        const timeElapsed = intervals[i];
        const distance = speed * timeElapsed; // Distance in km

        // Calculate new latitude
        const newLatRad = Math.asin(
            Math.sin(currentLatRad) * Math.cos(distance / R) +
            Math.cos(currentLatRad) * Math.sin(distance / R) * Math.cos(headingRad)
        );

        // Calculate new longitude
        const newLonRad = currentLonRad + Math.atan2(
            Math.sin(headingRad) * Math.sin(distance / R) * Math.cos(currentLatRad),
            Math.cos(distance / R) - Math.sin(currentLatRad) * Math.sin(newLatRad)
        );

        // Update current position
        currentLatRad = newLatRad;
        currentLonRad = newLonRad;
    }

    // Convert back to degrees
    const newLatitude = toDegrees(currentLatRad);
    const newLongitude = toDegrees(currentLonRad);

    // Normalize the new longitude to the range [-180, 180]
    const normalizedLongitude = ((newLongitude + 540) % 360) - 180;

    return {
        latitude: newLatitude,
        longitude: normalizedLongitude
    };
}