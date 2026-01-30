import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export type UserWithCoords = {
  id: string;
  clinicName: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

const GOOGLE_MAPS_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_ANDROID_KEY;

async function geocodeAddress(address: string) {
  const url =
    `https://maps.googleapis.com/maps/api/geocode/json` +
    `?address=${encodeURIComponent(address)}` +
    `&key=${GOOGLE_MAPS_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK") return null;

  const { lat, lng } = data.results[0].geometry.location;

  return {
    latitude: lat,
    longitude: lng,
  };
}


export async function fetchUsersWithCoords(): Promise<UserWithCoords[]> {
  const snapshot = await getDocs(collection(db, "users"));

  const users = await Promise.all(
    snapshot.docs.map(async userDoc => {
      const data = userDoc.data();

      // 1️⃣ Already has coords
      if (data.coordinates?.latitude && data.coordinates?.longitude) {
        return {
          id: userDoc.id,
          clinicName: data.clinicName ?? "Unknown",
          coordinates: data.coordinates,
        };
      }

      // 2️⃣ No address
      if (!data.clinicAddress) return null;

      // 3️⃣ Geocode
      const coords = await geocodeAddress(data.clinicAddress);
      if (!coords) return null;

      // (optional) save to Firestore later

      return {
        id: userDoc.id,
        clinicName: data.clinicName ?? "Unknown",
        coordinates: coords, // ✅ THIS IS THE KEY FIX
      };
    })
  );

  return users.filter(Boolean) as UserWithCoords[];
}