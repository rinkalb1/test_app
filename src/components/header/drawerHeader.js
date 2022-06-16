import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { Colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={require("../../assets/images/align-left.png")}
                    style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

            <Text style={{ fontSize: 18, fontWeight: "700",color:"black" }}>Contact</Text>
            <TouchableOpacity onPress={() => Alert.alert("Under Production......")}>
                <Image source={require("../../assets/images/search.png")}
                    style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
        </View>
    );

}

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.white,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
        elevation: 25
    }
})