import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


export default function ProfileScreen() {
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
                <Text style={styles.title}>Perfil</Text>
                <Text>Essa é a tela de perfil</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        position: "absolute",
        top: 40,
        left: 20,
        padding: 10,
        borderRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fc5bac",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
});