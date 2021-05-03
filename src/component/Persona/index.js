import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Persona(props) {

    function filterDesc(desc) {
        if (desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 25)}...`;
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={props.img}
                style={styles.personaImg}
            />
            <Text style={styles.personaText}>
                {filterDesc(props.children)}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    personaImg: {
        width: 175,
        height: 175
    },
    personaText: {
        fontSize: 16
    }
});