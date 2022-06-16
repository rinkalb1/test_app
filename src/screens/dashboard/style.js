import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white, padding: "8%" },
    listcontain: { flex: 1, flexDirection: "row", marginVertical: 10, alignItems: "center" },
    imageview: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.gray,
        marginRight: "8%"
    },
    image: { width: 68, height: 68, borderRadius: 68 / 2 },
    textcontain: { flex: 1 },
    name: { fontSize: 18, fontWeight: "bold", color: Colors.black },
    title: { fontSize: 14, fontWeight: "normal", color: Colors.gray },
    button: {
        position: "absolute",
        backgroundColor: Colors.white,
        right: "10%",
        bottom: "10%",
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        elevation: 2,

        alignItems: "center",
        justifyContent: "center"
    }
})