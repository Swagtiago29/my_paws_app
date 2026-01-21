import { Text, View, Image } from "react-native";

export default function Calendar() {
    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, margin: 5 }}>Search for your closest Veterynary Clinics</Text>
            <Image source={require("../../assets/images/calendar_placeholder.png")} style={{ width: "94%", height: "94%" }} />
        </View>);
}
