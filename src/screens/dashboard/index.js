import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'

//Helper
import { userData } from '../../utils/json'
import { Colors } from "../../utils";
import { TEXT } from '../../components/text'
import { Removeuserid } from '../../redux/action/userData'

export default Dashboard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();
    const handlePress = () => {
        let id = ""
        Alert.alert("Add logout functionality..")
        dispatch(Removeuserid(id))
    }
    return (
        <View style={styles.container}>
            <FlatList data={userData}
                renderItem={(item) =>
                    <View style={styles.listcontain}>
                        <View style={styles.imageview}>
                            <Image source={item.item.image}
                                style={styles.image} />
                        </View>
                        <View style={styles.textcontain}>

                            <TEXT title={item.item.name}
                                color={Colors.black}
                                size={18}
                                weight={"bold"}
                                style={{ marginBottom: 5 }} />
                            <Text style={styles.title}>{item.item.name}</Text>
                        </View>
                    </View>
                } />

            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
                <Image source={require("../../assets/images/pencil.png")}
                    style={{ width: 25, height: 25, }} />
            </TouchableOpacity>
        </View>
    );
}