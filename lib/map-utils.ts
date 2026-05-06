export type LatLng = {
  lat: number;
  lng: number;
};

export const SEOUL_COORDS: LatLng = {
  lat: 37.5665,
  lng: 126.978,
};

function pad(value: number, amount: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value + amount));
}

export function buildOpenStreetMapEmbedUrl(from: LatLng, to: LatLng) {
  const minLat = Math.min(from.lat, to.lat);
  const maxLat = Math.max(from.lat, to.lat);
  const minLng = Math.min(from.lng, to.lng);
  const maxLng = Math.max(from.lng, to.lng);

  const left = pad(minLng, -0.9, 124, 132);
  const right = pad(maxLng, 0.9, 124, 132);
  const bottom = pad(minLat, -0.7, 33, 39.5);
  const top = pad(maxLat, 0.7, 33, 39.5);

  const bbox = `${left}%2C${bottom}%2C${right}%2C${top}`;
  const marker = `${to.lat}%2C${to.lng}`;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
}

export function buildOpenStreetMapDirectionsUrl(from: LatLng, to: LatLng) {
  return `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${from.lat}%2C${from.lng}%3B${to.lat}%2C${to.lng}`;
}
