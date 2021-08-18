import React, { useState, useEffect } from 'react';
import {
    FlatList,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select'
import { format } from 'date-fns';
import { Formik, useFormik } from 'formik';
import DateTimePicker, { event } from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';
import { getUser } from '../../Storage/Storage';
import estilo from './estilo';

const Novo = ({navigation}) => {
    const [indice, setIndice] = useState(1);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [dataConsulta, setDataConsulta] = useState(new Date());
    const [showData, setShowData] = useState(false);
    const fade = new Animated.Value(1);

    useEffect(() => {
        const dataUser = async () => {
            const data = await getUser()
            setUser(data.user)
            setToken(data.token)
            return data
        }
        dataUser()
    }, [])

    const fadeAnimation = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() =>{
            Animated.timing(fade, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        })

    };

    const voltar = () => {
        //fadeAnimation()
        setIndice(indice - 1);
    }

    const proximo = () => {
        //fadeAnimation()
        if(indice < 4){
            setIndice(indice + 1);
        }
    }

    const mudarData = (event, date) => {
        if (Platform.OS == 'android') {
            setShowData(oldState => !oldState)
        }

        if (showData == true) {
            if (date) {
                setDataConsulta(date);
                setFieldValue('data', date);
            }
        }
    }

    const salvar = (values) => {
        values.data = format(values.data, 'dd/MM/yyyy')
        console.warn(values)
    }

    const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values } = useFormik({
        initialValues: {
            id: '', paciente_id: user != null && user.id, medico: '', modalidade: '',
            procedimento: '', protocolo: '', status: 'marcado', motivo: '',
            data: dataConsulta, horario: '',
            resumo: ''
        },
        //validationSchema: validation,
        onSubmit: values => salvar(values)
    });
    return (
        <ScrollView>
            <View style={estilo.header}>
                <FlatList 
                    data={['1','2','3','4']}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <View style={[estilo.indice, indice == item && estilo.activeIndice]}>
                                <Text style={estilo.textIndice}>{item}</Text>
                            </View>
                        );
                    }}
                />
            </View>
            <Animated.View style={[estilo.content, {opacity: fade}]}>
                {(() =>{
                    switch(indice){
                        case 1:
                            return (
                                <View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Procedimento:</Text>
                                            <View style={estilo.input}>
                                                <RNPickerSelect
                                                    placeholder={values.procedimento == "" ? { label: 'Selecione...', value: null } : { label: values.procedimento, value: values.procedimento }}
                                                    onValueChange={handleChange('procedimento')}
                                                    value={values.procedimento}
                                                    items={[
                                                        { label: 'Ambulatório', value: 'Ambulatório' },
                                                        { label: 'Paleontologia', value: 'Paleontologia' },
                                                        { label: 'Pediatria', value: 'Pediatria' },
                                                        { label: 'Fisioterapia', value: 'Fisioterapia' },
                                                        { label: 'Clínico Geral', value: 'Clínico Geral' }
                                                    ]}
                                                    useNativeAndroidPickerStyle={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Modalidade:</Text>
                                            <View style={estilo.input}>
                                                <RNPickerSelect
                                                    placeholder={values.modalidade == "" ? { label: 'Selecione...', value: null } : { label: values.modalidade, value: values.modalidade }}
                                                    onValueChange={handleChange('modalidade')}
                                                    value={values.modalidade}
                                                    items={[
                                                        { label: 'Ambulatório', value: 'Ambulatório' },
                                                        { label: 'Paleontologia', value: 'Paleontologia' },
                                                        { label: 'Pediatria', value: 'Pediatria' },
                                                        { label: 'Fisioterapia', value: 'Fisioterapia' },
                                                        { label: 'Clínico Geral', value: 'Clínico Geral' }
                                                    ]}
                                                    useNativeAndroidPickerStyle={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        case 2:
                            return (
                                <View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Data da Consulta:</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={[estilo.input, estilo.inputDate]}
                                                onPress={() => setShowData(true)}
                                            >
                                                <Text style={estilo.textInputData}>{format(dataConsulta, 'dd/MM/yyyy')}</Text>
                                            </TouchableOpacity>
                                            {showData == true &&
                                                <DateTimePicker
                                                    mode='date'
                                                    dateFormat='day month year'
                                                    value={values.data}
                                                    onChange={mudarData}
                                                />
                                            }
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Médico(a):</Text>
                                            <View style={estilo.input}>
                                                <RNPickerSelect
                                                    placeholder={values.medico == "" ? { label: 'Selecione...', value: '' } : { label: values.medico, value: values.medico }}
                                                    onValueChange={handleChange('medico')}
                                                    value={values.medico}
                                                    items={[
                                                        { label: 'Dr. Fernandez', value: 'Dr. Fernandez' },
                                                        { label: 'Dra. Cristina', value: 'Dra. Cristina' },
                                                        { label: 'Dr. Carlos', value: 'Dra. Carlos' },
                                                        { label: 'Dra. Miranda', value: 'Dra. Miranda' },
                                                        { label: 'Dr. Martinez', value: 'Dr. Martinez' }
                                                    ]}
                                                    useNativeAndroidPickerStyle={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        case 3:
                            return (
                                <View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Horários Disponíveis:</Text>
                                            <View style={estilo.input}>
                                                <RNPickerSelect
                                                    placeholder={values.horario == "" ? { label: 'Selecione...', value: '' } : { label: values.horario, value: values.horario }}
                                                    onValueChange={handleChange('horario')}
                                                    value={values.horario}
                                                    items={[
                                                        { label: '09:00', value: '09:00' },
                                                        { label: '10:30', value: '10:30' },
                                                        { label: '13:00', value: '13:00' },
                                                        { label: '14:00', value: '14:00' },
                                                        { label: '16:30', value: '16:30' }
                                                    ]}
                                                    useNativeAndroidPickerStyle={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.obs}>Os horários do atendimento são definídos de acordo com a disponibilidade do Médico selecionado.</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        case 4:
                            return (
                                <View style={estilo.resumoContainer}>
                                    <Text style={estilo.label}>Confirmação:</Text>
                                    <Text style={estilo.obsConfirmacao}>Obs: Confirme as informações da consulta antes de efetuar o agendamento*</Text>
                                    <View style={estilo.div}></View>
                                    <View style={[estilo.dadosUsuario, estilo.dadosUser]}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Código do paciente:</Text>
                                            <Text style={estilo.dado}>{user.id}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Nome:</Text>
                                            <Text style={estilo.dado}>{user.nome}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>CPF:</Text>
                                            <Text style={estilo.dado}>{user.cpf}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>RG:</Text>
                                            <Text style={estilo.dado}>{user.rg}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Data de Nascimento:</Text>
                                            <Text style={estilo.dado}>{user.data_nascimento}</Text>
                                        </View>
                                    </View>
                                    <Text style={estilo.label}>Detalhes:</Text>
                                    <View style={estilo.div}></View>
                                    <View style={estilo.dadosUsuario}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Procedimento:</Text>
                                            <Text style={estilo.dado}>{values.procedimento}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Modalidade:</Text>
                                            <Text style={estilo.dado}>{values.modalidade}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Médico:</Text>
                                            <Text style={estilo.dado}>{values.medico}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Data da consulta:</Text>
                                            <Text style={estilo.dado}>{format(values.data, 'dd/MM/yyyy')}</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Horário da consulta:</Text>
                                            <Text style={estilo.dado}>{values.horario}</Text>
                                        </View>
                                    </View>
                                    <Text style={estilo.label}>Resumo:</Text>
                                    <View style={estilo.div}></View>
                                    <View style={[estilo.dadosUsuario, estilo.dadosUser]}>
                                        <Text style={estilo.dado}></Text>
                                    </View>
                                </View>
                            )
                        default:
                            break;
                    }
                })()}
                <View style={estilo.cardsBotoes}>
                    {indice > 1 && 
                        <TouchableOpacity 
                            style={[estilo.botaoSalvar, estilo.botaoVoltar]}
                            onPress={() => voltar()}
                        >
                            <Text style={estilo.textVoltar}>Voltar</Text>
                        </TouchableOpacity>
                    }
                    {indice < 4 ?
                        <RectButton
                            style={estilo.botaoSalvar}
                            onPress={() => proximo()}
                        >
                            <Text style={estilo.textIndice}>Proximo</Text>
                        </RectButton>
                    :
                        <RectButton
                            style={estilo.botaoSalvar}
                            onPress={handleSubmit}
                        >
                            <Text style={estilo.textIndice}>Agendar</Text>
                            <Icon name="save" size={20} color='white' />
                        </RectButton>
                    }                    
                </View>
            </Animated.View>
        </ScrollView>
    );
}

export default Novo;