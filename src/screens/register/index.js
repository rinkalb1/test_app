import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

//Helper
import { styles } from './style';
import { BUTTON } from '../../components/button';
import { TEXT } from '../../components/text'
import { Colors } from "../../utils";
import { ADD_USER_ID } from '../../redux/constants'
import { useCreateTaskMutation } from '../../helper/userApi'

//action
import { Adduserid } from '../../redux/action/userData'


export default Register = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [createTask] = useCreateTaskMutation();

    const handleregister = async () => {
        const res = await createTask({ "name": name, "job": job }).unwrap()
        const id = res?.id
        if (id !== "" || id !== undefined) {
           dispatch(Adduserid(id))
        } else {
            Alert.alert("Please try again......")
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.sucontain}>

                <TEXT title="Register"
                    color={Colors.purple}
                    size={25}
                    weight={"bold"}
                    style={{ marginBottom: "20%" }} />
                <TEXT title="Name"
                    color={Colors.black}
                    size={18}
                    weight={"700"} />

                <TextInput placeholder='Enter Name....'
                    value={name}
                    onChangeText={(val) => setName(val)}
                    style={styles.input}
                    placeholderTextColor={Colors.gray}

                />
                <TEXT title="Job"
                    color={Colors.black}
                    size={18}
                    weight={"700"} />
                <TextInput placeholder='Enter Job....'
                    value={job}
                    onChangeText={(val) => setJob(val)}
                    style={styles.input}
                    placeholderTextColor={Colors.gray} />


                <BUTTON width={"100%"}
                    height={50}
                    bradius={8}
                    title="Login"
                    size={18}
                    color={Colors.white}
                    weight={"700"}
                    background={Colors.purple}
                    style={{ marginTop: "10%" }}
                    hadlebutton={handleregister}
                />
            </View>
        </KeyboardAvoidingView>
    );
}