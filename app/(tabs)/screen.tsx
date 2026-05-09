import {View,StyleSheet} from "react-native"
//import {Image} from "expo-image";

import ImageViewer from "@/components/imageviewer";
import * as imagePicker from "expo-image-picker"
import { useState } from "react";


import Button from "@/components/button";

const PlaceholderImage = require('@/assets/images/background-image.png')


export default function Screen(){
    const [selectedimage,setselectedimage] = useState<string|undefined>(undefined);

    const pickimage = async()=>{ 
        let result = await imagePicker.launchImageLibraryAsync({
            mediaTypes:["images"],
            allowsEditing:true,
            quality:1


        })

        if(!result.canceled){
            setselectedimage(result.assets[0].uri)
        }else{
            alert("you didn't select the image")
        }



    }
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}> 
                <ImageViewer imgSource={PlaceholderImage} image={selectedimage} />
            </View>














            
            <View style={styles.footercontainer}>
                <Button label="choose a photo" theme="primary" onPress={pickimage}/>
                <Button label="use this photo" theme="primary" onPress={()=>{alert("button 2 is clicked")}}/>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#25292e",
        alignItems:"center"
    },
    imageContainer:{
        flex:1,
    },
 
    text:{
        color:"white"
    },
    footercontainer:{
        flex:1/3,
        alignItems:"center"
    }


})