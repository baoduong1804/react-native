import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingHorizontal:10
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        borderColor:"aqua",
        borderBottomWidth:1,
        padding:15,
        justifyContent:"space-between"
        
    },
    groupInput:{
        marginVertical:10
    },
    input:{
        borderColor:"#ccc",
        borderWidth:1,
        fontSize:15,
        paddingHorizontal:10,
        paddingVertical:7
    },
    text:{
        fontSize:20,
        fontWeight:"500"
    }

})

interface IProps {
    modalVisible:boolean,
    setModalVisible:(v:boolean) => void;
    addNew:any
}
const CreatModal = (props:IProps) => {
    const {modalVisible, setModalVisible, addNew} = props
    const [title, setTitle] = useState("")
    const [star,setStar] = useState("")
    function randomInteger(min:number, max:number) { return Math.floor(Math.random() * (max - min + 1)) +min; }
    const handleSubmit = () => {
        if (!title){
            Alert.alert("Không hợp lệ","Nội dung không được để trống")
            return
        }
        if (!star){
            Alert.alert("Không hợp lệ","Rating không được để trống")
            return
        }
        addNew({
            id:randomInteger(2,200000),
            title,
            star
        })
        setModalVisible(false)
        setStar(""),
        setTitle("")
    }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}

      >
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={{fontSize:25}}>Creat a review</Text>
                <Ionicons onPress={() => {
                    setModalVisible(false)
                    setTitle("")
                    setStar("")
                }} 
                    name="exit-outline" size={35} color="black" />
                
            </View>
            {/* body */}
            <View>
                <View style={styles.groupInput}>
                    <Text style={styles.text}>Nội dung</Text>
                    <TextInput style={styles.input}
                        value={title}
                        onChangeText={(v)=>setTitle(v)}
                    />
                </View>
                <View  style={styles.groupInput}>
                    <Text style={styles.text}>Rating</Text>
                    <TextInput keyboardType="numeric" style={styles.input}
                        value={star}
                        onChangeText={(v)=>setStar(v)}
                    />
                </View>
            </View>
            {/* footer */}
            <View>
                <Button title="Add"
                    onPress={handleSubmit}
                />
            </View>
        </View>

        {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
      </Modal>
    </>
  );
};

export default CreatModal;
