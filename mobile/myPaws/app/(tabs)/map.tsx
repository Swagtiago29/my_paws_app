import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { fetchUsersWithCoords } from "../../auth/fetchUsersWithCoords";
import { useEffect, useState } from "react";
import type { UserWithCoords } from "../../auth/fetchUsersWithCoords";

export default function MapScreen() {

  const [users, setUsers] = useState<UserWithCoords[]>([]);

  useEffect(() => {
    fetchUsersWithCoords().then(result => {
      console.log("USERS:", result);
      setUsers(result);
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: -34.9011,
          longitude: -56.1645,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {users.map(user => (
          <Marker key={user.id}
            coordinate={{
              latitude: user.coordinates.latitude,
              longitude: user.coordinates.longitude
            }}
            title={user.clinicName} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
});
