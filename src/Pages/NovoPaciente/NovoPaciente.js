import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import estilo from './estilo';

const NovoPaciente = ({navigation}) => {
    const [ready, setReady] = useState(false);

    const salvar = () => {
        console.warn(values)
    }
    const {handleChange, handleBlur, handleSubmit, values} = useFormik({
        initialValues:{
            id:'', nome:'', email:'', senha:'',
            data_nascimento:'', telefone:'', cpf:'', rg:'',
            cep:'', logradouro:'', numero:'', bairro:'',
            cidade:'', uf:''
        },
        onSubmit: values => salvar()
    });

    if(ready == true){
        navigation.setOptions({headerShown: false})
        return( 
            <View style={estilo.check}>
                <Text style={estilo.mensagem}>Pronto, seu cadastro foi realizado com sucesso!</Text>
                <LottieView
                    source={require('../../../assets/checkAnimation.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }]
                        })
                    }}
                    style={estilo.load}
                />
            </View>
        );
    }
    return (
        <SafeAreaView style={estilo.container}>
            <ScrollView
                style={estilo.card}
                showsVerticalScrollIndicator={false}
            >
                <Text style={estilo.descricao}>Preencha os campos com os dados solicitados.</Text>
                <View style={estilo.cardTitulo}>
                    <Text style={estilo.titulo}>Cadastro de Paciente</Text>
                </View>
                <View style={estilo.form}>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Nome:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('nome')}
                                onBlur={handleBlur('nome')}
                                value={values.nome}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Email:</Text>
                            <TextInput
                                style={estilo.input}
                                autoCapitalize='none'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Senha:</Text>
                            <TextInput
                                style={estilo.input}
                                secureTextEntry={true}
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Data de Nascimento:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('data_nascimento')}
                                onBlur={handleBlur('data_nascimento')}
                                value={values.data_nascimento}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Telefone:</Text>
                            <TextInput
                                style={estilo.input}
                                keyboardType={"numeric"}
                                textContentType={"telephoneNumber"}
                                onChangeText={handleChange('telefone')}
                                onBlur={handleBlur('telefone')}
                                value={values.telefone}
                            />
                        </View>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>CPF:</Text>
                            <TextInput
                                style={estilo.input}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('cpf')}
                                onBlur={handleBlur('cpf')}
                                value={values.cpf}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>RG:</Text>
                            <TextInput
                                style={estilo.input}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('rg')}
                                onBlur={handleBlur('rg')}
                                value={values.rg}
                            />
                        </View>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>CEP:</Text>
                            <TextInput
                                style={estilo.input}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('cep')}
                                onBlur={handleBlur('cep')}
                                value={values.cep}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Logradouro:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('logradouro')}
                                onBlur={handleBlur('logradouro')}
                                value={values.logradouro}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col2}>
                            <Text style={estilo.label}>Numero:</Text>
                            <TextInput
                                style={estilo.input}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('numero')}
                                onBlur={handleBlur('numero')}
                                value={values.numero}
                            />
                        </View>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Bairro:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('bairro')}
                                onBlur={handleBlur('bairro')}
                                value={values.bairro}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Cidade:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('cidade')}
                                onBlur={handleBlur('cidade')}
                                value={values.cidade}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Estado:</Text>
                            <TextInput
                                style={estilo.input}
                                onChangeText={handleChange('uf')}
                                onBlur={handleBlur('uf')}
                                value={values.uf}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={estilo.cadastrar}
                    onPress={handleSubmit}
                >
                    <Text style={estilo.textoBotao}>Cadastrar</Text>
                    <Icon name="save" size={20} color='white' />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NovoPaciente;