import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const styles = StyleSheet.create({
    container : {flex:1 , alignItems:"center" , justifyContent:"center" , backgroundColor:Colors.white,padding:"10%"},
    sucontain : {flex:1,width:"100%",justifyContent:"center"},
    registerText:{fontSize:25,fontWeight:"bold",color:Colors.purple,marginBottom:"20%"},
    titletext :{fontSize:18 , fontWeight:"700",color:Colors.black,},
    input:{borderBottomWidth:3,borderBottomColor:Colors.lightpurpal,marginBottom:"10%",color:Colors.black}
})