import { Image, View, Text } from "react-native";

export default function Map() {
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, margin: 5 }}>Search for your closest Veterynary Clinics</Text>
      <Image source={require("../../assets/images/map_placeholder.png")} style={{ width: "95%", height: "94%", borderWidth: 3, borderColor: "#7ED957" }} />
    </View>);
}