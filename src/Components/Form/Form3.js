import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import estilo from './estilo';

const Form3 = () => {
    return (
        <View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Label:</Text>
                    <TextInput
                        style={estilo.input}
                    />
                </View>
            </View>
        </View>
    );
}

export default Form3;