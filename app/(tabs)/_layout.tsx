import  {Tabs} from "expo-router"
export default function TabLayout(){
return(
    <Tabs>
        <Tabs.Screen name="screen" options={{title:"SCREEN"}}/>
        <Tabs.Screen name="index" options={{title:"HOME"}}/>
        <Tabs.Screen name="about" options={{title:"ABOUT"}}/>
      
    </Tabs>
)
}