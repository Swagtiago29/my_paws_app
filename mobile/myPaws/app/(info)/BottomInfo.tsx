import { Text } from "@react-navigation/elements"
import { View } from "react-native"

export default function BottomInfo() {
    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Text>
                <Text>Privacy Policy</Text>
            </Text>
            <Text>
                <Text>Information</Text>
            </Text>
            <Text>
                <Text>Join Us</Text>
            </Text>
        </View>
    )
}
