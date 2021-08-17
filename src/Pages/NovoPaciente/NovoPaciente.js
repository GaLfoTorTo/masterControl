import React, { useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Platform,
    Modal,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import RNPickerSelect from 'react-native-picker-select'
import DateTimePicker, {event} from '@react-native-community/datetimepicker';
import { TextInputMask } from 'react-native-masked-input';
import {format } from 'date-fns';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import uf from '../../Components/uf';
import estilo from './estilo';
import Cadastrar from '../../Api/Cadastrar';

const NovoPaciente = ({navigation}) => {
    const [ready, setReady] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [data, setData] = useState(new Date());
    const [showData, setShowData] = useState(false);
    const [loading, setLoading] = useState(false);

    const salvar = (values) => {
        setLoading(true)
        values.data_nascimento = format(values.data_nascimento, 'dd/MM/yyyy')
        Cadastrar(setMensagem, 'pacientes',values);
    }
    useEffect(()=>{
        if(mensagem != ''){  
            setReady(true)
        }
    });
    const hideAnimation = () => {
        setReady(false)
        setMensagem('')
        navigation.setOptions({ headerShown: true })

    }

    const mudarData = (event, date) => {
        if (Platform.OS == 'android') {
            setShowData(oldState => !oldState)
        }

        if (showData == true) {
            if (date) {
                setData(date);
                setFieldValue('data_nascimento', date);
            }
        }
    }
    
    const validation = Yup.object().shape({
        nome: Yup
            .string()
            .required('O nome do Paciente é obrigatório!'),
        email: Yup
            .string()
            .email('Informe um email válido')
            .required('O email do paciente é obrigatório!'),
        senha: Yup
            .string()
            .min(8, ({min}) => `A senha deve conter no mínimo ${min} dígitos`)
            .required('A senha do paciente é obrigatória!'),
        data_nascimento: Yup
            .string()
            .min(8, ({ min }) => `A senha deve conter no mínimo ${min} dígitos`)
            .required('A data de nascimento do Paciente é obrigatória!'),
        telefone: Yup
            .string()
            .min(11, ({ min }) => `Informe o DDD e o número`)
            .required('O telefone do paciente é obrigatório!'),
        cpf: Yup
            .string()
            .min(11, ({ min }) => `A CPF deve conter no mínimo ${min} dígitos`)
            .required('O CPF do paciente é obrigatório!'),
        rg: Yup
            .string()
            .min(7, ({ min }) => `O RG deve conter no mínimo ${min} dígitos`)
            .required('O RG do paciente é obrigatório!'),
    });

    const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values } = useFormik({
        initialValues:{
        id: '', nome: '', email: '', senha: '',
        data_nascimento: data, telefone: '', sexo: '', cpf: '', rg: '',
        cep: '', logradouro: '', numero: '', bairro: '',
        cidade: '', uf: ''
    },
    validationSchema: validation ,
    onSubmit: values => salvar(values)
    });

    if(ready == true){
        navigation.setOptions({headerShown: false})
        return( 
            <View style={estilo.check}>
                <Text style={[estilo.mensagem, mensagem == undefined && estilo.errorMensagem]}>{mensagem == undefined ? 'Não foi possivel salvar!': mensagem}</Text>
                <LottieView
                    source={mensagem == undefined ? require('../../../assets/errorAnimation.json') : require('../../../assets/checkAnimation.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => {
                        mensagem == undefined ?
                        hideAnimation()
                        :
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }]
                        })  
                    }}
                    style={estilo.animation}
                />
            </View>
        );
    }
    return (
        <SafeAreaView style={estilo.container}>
            {loading == true &&
                <Modal
                    animationType='fade'
                    visible={loading}
                    transparent={true}
                >
                    <View style={estilo.load}>
                        <ActivityIndicator size='large' color='white' />
                    </View>
                </Modal>
            }
            <ScrollView
                style={estilo.card}
                showsVerticalScrollIndicator={false}
            >
                <Text style={estilo.descricao}>Preencha os campos com os dados solicitados.</Text>
                <View style={estilo.cardTitulo}>
                    <Text style={estilo.titulo}>Cadastro de Paciente</Text>
                </View>
                <Text style={estilo.obs}>Obs: Os campos marcados com "*" são obrigatórios</Text>
                <View style={estilo.form}>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>Nome:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.nome && touched.nome && <Text style={estilo.error}>{errors.nome}</Text>}
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
                        <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>Email:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.email && touched.email && <Text style={estilo.error}>{errors.email}</Text>}
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
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>Senha:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            <Text style={estilo.obs}>Sua senha deve ser sua data de nascimento</Text>
                            {errors.senha && touched.senha && <Text style={estilo.error}>{errors.senha}</Text>}
                            <TextInput
                                style={estilo.input}
                                placeholder={'Ex: 01012021'}
                                secureTextEntry={true}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>Data de Nascimento:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.data_nascimento && touched.data_nascimento && <Text style={estilo.error}>{errors.data_nascimento}</Text>}
                            <TouchableOpacity
                                style={[estilo.input, estilo.inputDate]}
                                onPress={() => setShowData(true)}
                            >
                                <Text style={estilo.textInputData}>{format(data, 'dd/MM/yyyy')}</Text>
                            </TouchableOpacity>
                            {showData == true &&
                                <DateTimePicker
                                    mode='date'
                                    dateFormat='day month year'
                                    value={values.data_nascimento}
                                    onChange={mudarData}
                                />
                            }
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>Sexo:</Text>
                            <View style={estilo.input}>
                                <RNPickerSelect
                                    placeholder={values.sexo == "" ? { label: 'Selecione...', value: '' } : { label: values.sexo, value: values.sexo }}
                                    onValueChange={handleChange('sexo')}
                                    value={values.sexo}
                                    items={[
                                        { label: 'Masculino', value: 'masculino' },
                                        { label: 'Feminino', value: 'feminino' },
                                        { label: 'Outros', value: 'outros' }
                                    ]}
                                    useNativeAndroidPickerStyle={false}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>Telefone:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.telefone && touched.telefone && <Text style={estilo.error}>{errors.telefone}</Text>}
                            <TextInputMask
                                style={estilo.input}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                keyboardType='numeric'
                                value={values.telefone}
                                onBlur={handleBlur('telefone')}
                                onChangeText={handleChange('telefone')}
                            />
                        </View>
                        <View style={estilo.col}>
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>CPF:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.cpf && touched.cpf && <Text style={estilo.error}>{errors.cpf}</Text>}
                            <TextInputMask                                style={estilo.input}
                                type={'cpf'}
                                keyboardType='numeric'
                                value={values.cpf}
                                onBlur={handleBlur('cpf')}
                                onChangeText={handleChange('cpf')}
                            />
                        </View>
                    </View>
                    <View style={estilo.row}>
                        <View style={estilo.col}>
                            <View style={estilo.cardLabel}>
                                <Text style={estilo.label}>RG:</Text>
                                <Text style={estilo.obrigatorios}>*</Text>
                            </View>
                            {errors.rg && touched.rg && <Text style={estilo.error}>{errors.rg}</Text>}
                            <TextInputMask
                                style={estilo.input}
                                type={'custom'}
                                options={{
                                    mask: '9.999.999'
                                }}
                                keyboardType={"numeric"}
                                onChangeText={handleChange('rg')}
                                onBlur={handleBlur('rg')}
                                value={values.rg}
                            />
                        </View>
                        <View style={estilo.col}>
                            <Text style={estilo.label}>CEP:</Text>
                            <TextInputMask
                                style={estilo.input}
                                type={'zip-code'}
                                keyboardType='numeric'
                                value={values.cep}
                                onBlur={handleBlur('cep')}
                                onChangeText={handleChange('cep')}
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
                            <View style={estilo.input}>
                                <RNPickerSelect
                                    placeholder={values.uf == "" ? { label: 'Selecione...', value: null } : { label: values.uf, value: values.uf }}
                                    onValueChange={handleChange('uf')}
                                    value={values.uf}
                                    items={uf}
                                    useNativeAndroidPickerStyle={false}
                                />
                            </View>
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