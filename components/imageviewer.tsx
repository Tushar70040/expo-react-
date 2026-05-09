import { ImageSourcePropType,StyleSheet } from "react-native";
import { Image } from "expo-image";
//ITS IS AN  CUSTOM COMPONENET 
type Props ={
    imgSource: ImageSourcePropType
    image?:string
}

export default function ImageViewer({imgSource,image}:Props){
    //if the the images is avaiable use uri if not then imgsource
    //data we get the form screen.tsx
const src = image ? {uri:image}:imgSource;

    return <Image source={src} 
    style={styles.image}
    />
}

const styles = StyleSheet.create({
       image:{
        width:320,
        height:440,
        margin:30,
        borderRadius:18
    },
})