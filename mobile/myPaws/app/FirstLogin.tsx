import { View, Text, Pressable, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, } from "react-native";
import { useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import useSignUp from "../hooks/useSignUp";

export default function FirstLogIn() {
    const router = useRouter();
    const { affiliated, clinic, handleAffiliatedChange, handleClinicChange } = useSignUp();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>

                    <Image
                        source={require("../assets/images/paws_logo.png")}
                        style={{ width: 150, height: 150, alignSelf: 'center' }}
                    />

                    <Text style={styles.title}>
                        MY PAWS
                    </Text>

                    <View style={styles.pickerContainer}>
                        <Text style={{ fontSize: 16 }}>Are you afiliated to a Veterinary Clinic?</Text>
                        <Picker
                            selectedValue={affiliated}
                            mode="dropdown"
                            onValueChange={handleAffiliatedChange}
                            style={{ height: 50, width: 100 }}
                        >
                            <Picker.Item label="No" value="No" />
                            <Picker.Item label="Yes" value="Yes" />
                        </Picker>
                    </View>

                    {affiliated === 'Yes' &&
                        <View style={styles.pickerContainer}>
                            <Text style={{ fontSize: 16 }}>Which Clinic are you affiliated to?</Text>
                            <Picker
                                selectedValue={clinic}
                                mode="dropdown"
                                onValueChange={handleClinicChange}
                                style={{ height: 50, width: 200 }}
                            >
                                <Picker.Item label="Example Clinic 1" value="Example Clinic 1" />
                                <Picker.Item label="Example Clinic 2" value="Example Clinic 2" />
                                <Picker.Item label="Example Clinic 3" value="Example Clinic 3" />
                                <Picker.Item label="Example Clinic 4" value="Example Clinic 4" />
                                <Picker.Item label="Example Clinic 5" value="Example Clinic 5" />
                                <Picker.Item label="Example Clinic 6" value="Example Clinic 6" />

                            </Picker>
                        </View>
                    }

                    <Pressable style={styles.button} onPress={() => router.navigate('/')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>

                    <View style={styles.bottomContainer}>
                        <Pressable onPress={() => console.log('policy')}>
                            <Text style={styles.bottomLinks}>
                                PRIVACY POLICY
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => console.log('join')}>
                            <Text style={styles.bottomLinks}>
                                JOIN US
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => console.log('info')}>
                            <Text style={styles.bottomLinks}>
                                INFORMATION
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        padding: 24,
    },
    pickerContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: "700",
        color: "black",
        marginBottom: 32,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#F2F2F2",
        color: "black",
        padding: 14,
        borderRadius: 10,
        marginBottom: 16,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#7ED957'
    },
    button: {
        backgroundColor: "#7ED957",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    },
    link: {
        color: "#58963E",
        marginTop: 16,
        textAlign: "center",
        fontSize: 18
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        gap: 20,
    },
    bottomLinks: {
        color: '#58963E',
        marginBottom: 10,
        textDecorationLine: "underline"
    }
});
