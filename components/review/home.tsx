import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import AppHeader from "../navigation/app.header";
import CreatModal from "./creat.modal";
import AntDesign from '@expo/vector-icons/AntDesign';


interface IReview {
    id:number;
    title:string;
    star:number
}

const styles = StyleSheet.create({
    reviewItem: {
        padding:15,
        backgroundColor:"#ccc",
        marginTop:15
    }, 
    reviewText: {
        fontSize:30,
        marginBottom:15
    },
    iconAdd:{
        alignItems:"center"
    }
})
const HomeScreen = (props : any) => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    const  [ reviews, setReviews] = useState<IReview[]>([
        {id:1, title: "Details view" , star:5},
        {id:2, title: "React JS" , star:3}
    ])
    const [modalVisible,setModalVisible] = useState(false)
    const addNew = (item:IReview) => {
        setReviews([...reviews,item])
    }
    return (
        <View>
            <AppHeader/>
            <View>
                <Text style={styles.reviewText}>Review Items</Text>
                <View  style={styles.iconAdd}>

                <AntDesign 
                   
                   onPress={()=>setModalVisible(true)}
                   name="pluscircleo" size={45} color="aqua" />
                   </View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({item})=> {
                        return(
                           <TouchableOpacity onPress={()=>navigation.navigate("Details", item)}>
                             <View style={styles.reviewItem}>
                                <Text>{item.title}</Text>
                            </View>
                           </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <CreatModal
                modalVisible = {modalVisible}
                setModalVisible={setModalVisible}
                addNew={addNew}
            />
        </View>
    )
}

export default HomeScreen