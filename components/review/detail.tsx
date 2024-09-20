import { StyleSheet, View, Text, Button, Image } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const"
import { NavigationProp, useNavigation, RouteProp } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import starIcon from "../../assets/images/star.png"

const styles = StyleSheet.create({
    review: {
        fontSize: 40,
        fontFamily:OPENSANS_REGULAR
    },
    reviewText: {
        fontSize:25,
        fontFamily: OPENSANS_REGULAR,
        padding:15
    }
})

const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    const route: RouteProp<RootStackParamList, "Details"> = useRoute()
    
    return (
        <View>
            <Text style={styles.review}>Detail Screen google</Text>
                <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
                <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
                <Text style={styles.reviewText}>
                    Rating: {route.params?.star}
                    <Image
                        style={{height:40,width:40}}
                        source={starIcon}
                    />
                    <Image
                        style={{height:40,width:40}}
                        source={starIcon}
                    />
                    <Image
                        style={{height:40,width:40}}
                        source={starIcon}
                    />
                    <Image
                        style={{height:40,width:40}}
                        source={starIcon}
                    />
                    <Image
                        style={{height:40,width:40}}
                        source={starIcon}
                    />
                </Text>
            <Button title="Go home" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}

export default DetailScreen