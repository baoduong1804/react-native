import { StyleSheet, Text , View} from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../utils/const";
import { useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
    container: {
        flexDirection : "row",
        backgroundColor: "aqua",
        padding: 15,
        alignItems:"center",
    },
    headerText : {
        flex:1,
        textAlign: "center",
        fontSize:25
    }
})
const AppHeader = () => {
    const navigation :any = useNavigation()
    return (
        <View style = {styles.container}>
            <MaterialIcons 
            
            onPress={()=>{navigation.openDrawer()}}
            name="menu" size={35} color="black" />
            <Text style={[styles.headerText,globalStyles.globalFont]}> Baoduong!!!</Text>
        </View>
    )
}

export default AppHeader