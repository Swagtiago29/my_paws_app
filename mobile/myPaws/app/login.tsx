import { View, Text, TextInput, Pressable, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

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
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#999"
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#999"
                        style={styles.input}
                        secureTextEntry
                    />

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>

                    <View
                        style={{
                            height: 1,
                            backgroundColor: "#e5e7eb",
                            marginVertical: 16,
                        }}
                    />

                    <Pressable onPress={() => router.push('/signup')}>
                        <Text style={styles.link}>Create an account</Text>
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
