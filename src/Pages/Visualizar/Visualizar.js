import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';
import estilo from './estilo';

const Vizualizar = ({navigation, route}) => {
    const agendamento = route.params.item;

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={estilo.container}
        >
            <View style={estilo.doc}>
                <View style={estilo.headerDoc}>
                    <View style={estilo.cardData}>
                        <Text style={estilo.info}>Data</Text>
                    </View>
                    <View style={estilo.cardTitulo}>
                        <Text style={estilo.titulo}>Titulo</Text>
                    </View>
                    <View style={estilo.cardProtocolo}>
                        <Text style={estilo.info}>Protocolo</Text>
                    </View>
                </View>
                <View style={estilo.contentDoc}>
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>Dados Paciente:</Text>
                    <View style={estilo.campoDados}>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Paciente:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Data de Nascimento:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Sexo:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Código Paciente:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                    </View>
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>Dados Procedimento:</Text>
                    <View style={[estilo.campoDados, 
                                    agendamento.status == 'Concluído' && estilo.statusConcluido,
                                    agendamento.status == 'Cancelado' && estilo.statusCancelado,
                                    agendamento.status == 'Marcado' && estilo.statusMarcado]}>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Médico:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Modalidade:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Procedimento:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Data:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Horário:</Text>
                            <Text style={estilo.dataCampo}>data</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Status:</Text>
                            <Text style={[estilo.dataCampo, 
                                agendamento.status == 'Concluído' && estilo.textStatusConcluido, 
                                agendamento.status == 'Cancelado' && estilo.textStatusCancelado,
                                agendamento.status == 'Marcado' && estilo.textStatusMarcado ]}>{agendamento.status}</Text>
                        </View>
                    </View>
                    {agendamento.status == 'Cancelado' &&
                        <View>
                            <View style={estilo.div}></View>
                            <Text style={estilo.label}>Motivo do cancelamento:</Text>
                            <View style={estilo.campoDados}>
                            <Text style={[estilo.dataCampo, estilo.textStatusCancelado]}>data</Text>
                            </View>
                        </View>
                    }
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>Resumo Atendimento:</Text>
                    <View style={estilo.campoDados}>
                        <Text style={estilo.textResumo}>
                            asdegkljasdgjadsomgoadsmoigmadosfimgo´pasdgmsd
                            agndsngadskngldsnnadsgnanlsdg
                            asgdklsndgnasdkjngakesnjkdsnakdgns
                            aldkgldsnglandsgnladsglkands
                            alsçdglsadngknmldsnlan
                            asdgadsgdsagdsgsaasdgasçdgasdgasdgdasgsdagdasgdsad
                        </Text>
                    </View>
                    {agendamento.status == 'Marcado'&&
                        <RectButton
                            style={estilo.botaoCancelar}
                            onPress={() => { }}
                        >
                            <Text style={estilo.textCancelar}>Cancelar</Text>
                            <Icon name="trash" size={20} color='white' />
                        </RectButton>
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Vizualizar;