import { Drawer } from "expo-router/drawer";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Home",
                        drawerLabel: "Home",
                        headerShown: false,
                        headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="heart-outline" size={size} color={color} />
                        ),

                    }}
                />
                <Drawer.Screen
                    name="profile"
                    options={{
                        drawerLabel: "Perfil",
                        title: "Perfil",
                        headerShown: false,
                        // headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
