import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { TEXT } from "../text/index"

export const BUTTON = (props) => {
    const {
        title,
        style,
        size,
        color,
        weight,
        width,
        height,
        background,
        bwidth,
        bcolor,
        bradius,
        shight,
        swidth,
        scolor,
        sopacity,
        elevation,
        press,
        family
    } = props

    return (
        <TouchableOpacity style={{
            width: width,
            height: height,
            backgroundColor: background,
            borderWidth: bwidth,
            borderColor: bcolor,
            borderRadius: bradius,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: swidth, height: shight },
            shadowColor: scolor,
            shadowOpacity: sopacity,
            elevation: elevation, ...style
        }}
            onPress={() => props.hadlebutton()}>
            <TEXT title={title}
                //style={styles.heading}
                size={size}
                color={color}
                weight={weight}
                family={family}
            />
        </TouchableOpacity>
    );
}