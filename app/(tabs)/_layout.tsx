import { Tabs } from "expo-router"
import Ionsicons from "@expo/vector-icons/Ionicons"


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e"
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#25292e"
                }
            }}
        >
            <Tabs.Screen name="screen" options={{
                title: "SCREEN", tabBarIcon: ({ color, focused }) => (
                    <Ionsicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="index" options={{
                title: "HOME", tabBarIcon: ({ color, focused }) => (
                    <Ionsicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                )
            }} />

            <Tabs.Screen name="about" options={{
                title: "ABOUT", tabBarIcon: ({ color, focused }) => (
                    <Ionsicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
                )
            }} />

        </Tabs>
    )
}