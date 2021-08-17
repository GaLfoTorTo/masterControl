import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Modal,
    Keyboard,
    Platform,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-input';
import {saveUser} from '../../Storage/Storage';
import Logar from '../../Api/Logar';
import estilo from './estilo';
import { AuthContext } from '../../Components/Context';

const Login = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const plataforma = Platform.OS

    const { signIn} = useContext(AuthContext);
    
    const handleLogin = async () => {
        setLoading(true);
        if (cpf == '' || cpf == undefined || senha == '' || senha == undefined) {
            setMessage('CPF e Senha são obrigátorios');
        } else {
            const resposta = await Logar(cpf, senha, plataforma);
            if (resposta != undefined ) {
                setLoading(false)
                saveUser(resposta.user, resposta.token)
                await signIn()
            } else{
                setLoading(false);
                setMessage('CPF ou Senha inválidos');
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    },[]);

    const _keyboardDidShow = () => {
        setOpen(true)
    }
    const _keyboardDidHide = () => {
        setOpen(false)
    }

    return (
        <View style={estilo.container} >
            <View style={estilo.cardLogo}>
                <Icon name='cog' size={100} style={estilo.logo}/>
            </View>
            {message != '' ?
                <TouchableOpacity
                    onPress={() => setMessage('')}
                    style={estilo.cardMessage}>
                    <Text style={estilo.textMessage}>{message}</Text>
                    <View>
                        <Icon name='times' size={15} style={estilo.textMessage} />
                    </View>
                </TouchableOpacity>
                : null
            }
            {loading == true &&
                <Modal 
                    animationType='fade'
                    visible={loading}
                    transparent={true}
                >
                <View style={estilo.load}>
                    <ActivityIndicator size='large' color='white'/>
                </View>
                </Modal>
            }
            <View style={[estilo.cardInputs, open == true && estilo.tecladoOpen]}>
                <TextInputMask
                    style={estilo.input}
                    type={'cpf'}
                    placeholder='CPF'
                    keyboardType='numeric'
                    returnKeyLabel='next'
                    returnKeyType='next'
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                    onSubmitEditing={Keyboard.dismiss}
                />
                <TextInput
                    style={estilo.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    keyboardType='numeric'
                    autoCompleteType='password'
                    autoCapitalize='none'
                    returnKeyLabel='go'
                    returnKeyType='go'
                    onChangeText={text => setSenha(text)}
                    onSubmitEditing={Keyboard.dismiss}
                />
                <TouchableOpacity
                    style={[estilo.botao, open == true && { height: 55}]}
                    onPress={() => handleLogin()}
                >
                    <Text style={estilo.textInput}>Entrar</Text>
                </TouchableOpacity>
                <View style={estilo.cardBotoes}>
                    <TouchableOpacity
                        style={estilo.botao2}
                        onPress={() => navigation.navigate('NovoPaciente')}
                    >
                        <Icon name='user-plus' size={20} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[estilo.botao2, estilo.botaoSenha]}
                        onPress={() => {getData()}}
                    >
                        <Icon name='key' size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;