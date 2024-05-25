//First get the displacement from displacement.js present in helper folder

//Divide those displacement into three parts in equal range, where we have start point, start 
// intermediate point, end intermediate point and end point.

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function haversineDistance(source, destination) {
    const R = 6371;
    const phi1 = toRadians(source[0]);
    const phi2 = toRadians(destination[0]);
    const deltaPhi = toRadians(destination[0] - source[0]);
    const deltaLambda = toRadians(destination[1] - source[1]);

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function interpolatePoint(source, destination, fraction) {
    const lat1 = toRadians(source[0]);
    const lon1 = toRadians(source[1]);
    const lat2 = toRadians(destination[0]);
    const lon2 = toRadians(destination[1]);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a = Math.sin((1 - fraction) * deltaLat) / Math.sin(deltaLat);
    const b = Math.sin(fraction * deltaLat) / Math.sin(deltaLat);

    const x = a * Math.cos(lat1) * Math.cos(lon1) + b * Math.cos(lat2) * Math.cos(lon2);
    const y = a * Math.cos(lat1) * Math.sin(lon1) + b * Math.cos(lat2) * Math.sin(lon2);
    const z = a * Math.sin(lat1) + b * Math.sin(lat2);

    const newLat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const newLon = Math.atan2(y, x);

    return [toDegrees(newLat), toDegrees(newLon)];
}

//Here we will pass array of source and destination with total number of intermediate points
export function getIntermediatePoints(source, destination, numPoints) {
    const totalDistance = haversineDistance(source, destination);
    const points = [];

    for (let i = 1; i <= numPoints; i++) {
        const fraction = (i * totalDistance) / (numPoints + 1) / totalDistance;
        points.push(interpolatePoint(source, destination, fraction));
    }

    return points;
}