import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.button}
            >
                <Ionicons name="heart" size={44} color="#fc5bac" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Página Inicial</Text>
                <Text>Essa é a tela home</Text>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fc5bac",
    },
    button: {
        position: "absolute",
        top: 40,
        left: 20,
        padding: 10,
        borderRadius: 5,
        elevation: 2,
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
}
