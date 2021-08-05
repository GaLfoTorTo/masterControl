import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';

const Login = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <View style={estilo.cardLogo}>
                <Icon name='cog' size={100} style={estilo.logo}/>
            </View>
            <View style={estilo.cardInputs}>
                <TextInput
                    icon='mail'
                    style={estilo.input}
                    placeholder='Email, CPF, Telefone'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    returnKeyLabel='next'
                    returnKeyType='next'
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    icon='key'
                    style={estilo.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    autoCompleteType='password'
                    autoCapitalize='none'
                    returnKeyLabel='go'
                    returnKeyType='go'
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={estilo.textInput}>Entrar</Text>
                </TouchableOpacity>
                <View style={estilo.cardBotoes}>
                    <TouchableOpacity
                        style={estilo.botao2}
                        onPress={() => navigation.replace('NovoPaciente')}
                    >
                        <Icon name='user-plus' size={20} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[estilo.botao2, estilo.botaoSenha]}
                        onPress={() => { }}
                    >
                        <Icon name='key' size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;