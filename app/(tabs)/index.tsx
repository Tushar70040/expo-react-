import { Text, View ,StyleSheet ,Button} from "react-native";
import { useRouter ,Link} from "expo-router";

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>this is the react native home page.</Text>
     <Link  style={styles.Text } href={"/about"}>ABOUT PAGE</Link>
      <Button  title="about page" onPress={()=>{router.push("/about")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"blue",
    height:505,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
  ,
  Text:{
    color:"black",
    backgroundColor:"white",
    width:200

  },
  button:{
    backgroundColor:"yellow"
  }
})

