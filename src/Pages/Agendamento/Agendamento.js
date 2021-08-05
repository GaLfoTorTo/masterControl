import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    SafeAreaView
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';

const Agendamento = ({navigation}) => {

    const [concluido, setConcluido] = useState(true);
    const [pendente, setPendente] = useState(false);

    const change = () => {
        if(concluido == false){
            setConcluido(true)
            setPendente(false)
        }else{
            setConcluido(false)
            setPendente(true)
        }
    } 

    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.header}>
                <Text style={estilo.textHeader}>Agendamentos</Text>
                <TouchableOpacity 
                    style={estilo.botaoNovo}
                    onPress={() => navigation.navigate('Novo')}
                >
                    <Text style={estilo.textBotao}>Novo</Text>
                    <Icon name='plus' size={20} style={estilo.iconNovo}/>
                </TouchableOpacity>
            </View>
            <View style={estilo.card}>
                <View style={estilo.botoes}>
                    <RectButton 
                        style={[estilo.botaoAcoes, concluido == true && estilo.botaoAtivo]}
                        onPress={() => change()}
                    >
                        <Text style={[estilo.textoInativo, concluido == true && estilo.textoAtivo]}>Concluídos</Text>
                    </RectButton>
                    <RectButton 
                        style={[estilo.botaoAcoes, pendente == true && estilo.botaoAtivo]}
                        onPress={() => change()}
                    >
                        <Text style={[estilo.textoInativo, pendente == true && estilo.textoAtivo]}>Pendentes</Text>
                    </RectButton>
                </View>
                {concluido == true &&    
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <FlatList 
                            data={['1','1','1','1','1','1']}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                                return(
                                    <TouchableOpacity style={[estilo.cardAgendamento, Math.floor(Math.random()*2) == 1 ? estilo.concluidos : estilo.cancelados]}>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Status:</Text>
                                                <Text style={estilo.dado} >XXXXXXXXXX</Text>
                                            </View>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Data:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Protocolo:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Label:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Modalidade:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Procedimentos:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ScrollView>
                }
                {pendente == true &&
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={['1', '1', '1', '1', '1', '1']}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={estilo.cardAgendamento}>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Status:</Text>
                                                <Text style={estilo.dado} >XXXXXXXXXX</Text>
                                            </View>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Data:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Protocolo:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Labe:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Modalidade:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                        <View style={estilo.cardCampos}>
                                            <View style={estilo.campos}>
                                                <Text style={estilo.label}>Procedimentos:</Text>
                                                <Text style={estilo.dado}>XXXXXXX</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ScrollView>
                }
            </View>
        </SafeAreaView>
    )
}

export default Agendamento;