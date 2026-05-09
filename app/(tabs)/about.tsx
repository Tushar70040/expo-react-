import { View ,Text,StyleSheet,Button} from "react-native"
import { useRouter } from "expo-router"

export default function About(){
    const router = useRouter()
   return(
    <>
     <View style={styles.container}>
        <Text>this is the about page</Text>
        <Button title="home page" onPress={()=>{router.replace("/")}}/>

    </View>
    </>
   )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:500,
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})
