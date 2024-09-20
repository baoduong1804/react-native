import { View, Text } from "react-native"
import { StyleSheet } from "react-native"
import { globalStyles } from "../../utils/const"
const styles = StyleSheet.create({
    about: {
        fontSize: 40
    }
})
const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>
                About Review App 
            </Text>
            <Text style={[styles.about, globalStyles.globalFont]}>
                Bao duong
            </Text>
        </View>
    )
}

export default AboutScreen