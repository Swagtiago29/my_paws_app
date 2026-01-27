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

  if (data.status !== "OK") {
    console.warn("Geocoding failed:", address, data.status);
    return null;
  }

  const location = data.results[0].geometry.location;

  return {
    latitude: location.lat,
    longitude: location.lng,
  };
}

export async function fetchUsersWithCoords(): Promise<UserWithCoords[]> {
  const snapshot = await getDocs(collection(db, "users"));

  const users = await Promise.all(
    snapshot.docs.map(async userDoc => {
      const data = userDoc.data();

      // ✅ 1. If coords already exist → use them
      if (
        data.coordinates?.latitude &&
        data.coordinates?.longitude
      ) {
        return {
          id: userDoc.id,
          name: data.clinicName ?? "Unknown",
          coordinates: data.coordinates,
        };
      }

      // ❌ No address → skip user
      if (!data.clinicAddress) return null;

      // ✅ 2. Geocode only if missing
      const coords = await geocodeAddress(data.clinicAddress);
      if (!coords) return null;

      // ✅ 3. Save back to Firestore (one-time cost)
      await updateDoc(doc(db, "users", userDoc.id), {
        coordinates: coords,
      });

      return {
        id: userDoc.id,
        clinicName: data.clinicName ?? "Unknown",
        coordinates: coords,
      };
    })
  );

  return users.filter(Boolean) as UserWithCoords[];
}
